<template>
  <div class="book">
    <ticket-card
      :flight-date="ticketCard.flightDate"
      :flight-week="ticketCard.flightWeek"
      :dep-city="ticketCard.depCity"
      :arr-city="ticketCard.arrCity"
      :dep-airport="ticketCard.depAirport"
      :arr-airport="ticketCard.arrAirport"
      :flight-no="ticketCard.flightNo"
      :dep-time="ticketCard.depTime"
      :arr-time="ticketCard.arrTime"
      :dep-date="ticketCard.depDate"
      :arr-date="ticketCard.arrDate"
    ></ticket-card>
    <customer-desc
      @to-page="selectPassager"
      :block-desc="pasger.name"
      :id-no="pasger.idNo"
    ></customer-desc>
    <!-- <insurance-card></insurance-card> -->
    <price-bar
      :price="price"
      @to-pay="payMethods"
    ></price-bar>
    <pay-methods
      v-if="showPayMethods"
      @cancel="showPayMethods = false"
      :balance="balance"
      @select-to-pay="topPaySuccessPage"
    ></pay-methods>
  </div>
</template>

<script>
import ticketCard from "./components/ticketCard";
import customerDesc from "./components/customerDesc";
import priceBar from "./components/priceBar";
// import insuranceCard from "./components/insuranceCard";
import payMethods from "./components/payMethods";
import airport from "@/data/airport.js";
import saleList from "@/data/sale.js";
import { dateFormat } from "vux";
export default {
  data() {
    return {
      ticketCard: {
        depCity: "",
        arrCity: "",
        depAirport: "",
        arrAirport: "",
        flightDate: "",
        flightWeek: "",
        depDate: "",
        depTime: "",
        arrDate: "",
        arrTime: "",
        flightNo: ""
      },
      price: null,
      timeMock: [
        [
          "08:10-10:25",
          "09:25-14:00",
          "12:05-15:45",
          "13:15-16:20",
          "16:00-19:25"
        ],
        [
          "08:15-14:00",
          "09:30-16:20",
          "12:00-19:25",
          "13:10-20:30",
          "14:45-21:00"
        ]
      ],
      showPayMethods: false,
      balance: 0,
      pasger: {
        name: "乘机人",
        idNo: ""
      }
    };
  },
  created() {
    let query = this.$route.query;
    let {
      uid,
      dep,
      arr,
      depDate,
      price,
      week,
      flightNo,
      depTime,
      arrTime,
      type,
      from
    } = query;
    this.uid = uid;
    this.ticketCard.flightWeek = week;
    this.ticketCard.flightNo = flightNo;
    this.price = price;
    this.findCity(dep, 0);
    this.findCity(arr, 1);
    if (from == "recomd") {
      this.formatDate(depDate);
      let random = this.randomNum(0, 4);
      let timeLine = this.timeMock[type][random].split("-");
      this.ticketCard.depTime = timeLine[0];
      this.ticketCard.arrTime = timeLine[1];
    } else {
      this.ticketCard.flightDate = depDate;
      this.ticketCard.depDate = depDate;
      this.ticketCard.arrDate = depDate;
      this.ticketCard.depTime = depTime;
      this.ticketCard.arrTime = arrTime;
    }

    let pasger = localStorage.getItem("add-pasger") || "";
    localStorage.removeItem("add-pasger");
    if (pasger) {
      this.pasger = JSON.parse(pasger);
    }

    let data = localStorage.getItem("user-data");
    data = JSON.parse(data);
    this.data = data;
    let dataList = data.res;
    this.userInfo = dataList[this.uid].info;
    this.balance = this.userInfo.balance;
    if (!this.userInfo.hasOwnProperty("orderList")) {
      this.userInfo.orderList = [];
    }
    this.orderList = this.userInfo.orderList;
  },
  methods: {
    findCity(code, type) {
      let allAirport = airport.domestic.concat(airport.international);
      for (let i = 0; i < allAirport.length; i++) {
        if (allAirport[i].code == code) {
          // 出发信息
          if (type == 0) {
            this.ticketCard.depCity = allAirport[i].name;
            this.ticketCard.depAirport = allAirport[i].al[0].n;
          } else if (type == 1) {
            this.ticketCard.arrCity = allAirport[i].name;
            this.ticketCard.arrAirport = allAirport[i].al[0].n;
          }
        }
      }
    },
    formatDate(date) {
      let dateArr = date.split("-");
      let dateStr = dateArr[0] + "月" + dateArr[1] + "日";
      this.ticketCard.flightDate = dateStr;
      this.ticketCard.depDate = dateStr;
      this.ticketCard.arrDate = dateStr;
    },
    // 生成随机整数
    randomNum(minNum, maxNum) {
      switch (arguments.length) {
        case 1:
          return parseInt(Math.random() * minNum + 1, 10);
          break;
        case 2:
          return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
          break;
        default:
          return 0;
          break;
      }
    },
    // 选择乘机人
    selectPassager() {
      this.$router.push({
        path: "/passager",
        query: {
          uid: this.uid
        }
      });
    },
    // 唤起支付方式
    payMethods() {
      if (this.pasger.idNo == "") {
        this.$toast.center("请先选择乘机人！");
        return false;
      }
      this.showPayMethods = true;
    },
    // 生成订单号
    createOrderId() {
      let orderId = ""; //订单号
      //6位随机数，用以加在时间戳后面。
      for (let i = 0; i < 6; i++) {
        orderId += Math.floor(Math.random() * 10);
      }
      orderId = new Date().getTime() + orderId;
      return orderId;
    },
    // 支付成功页
    topPaySuccessPage() {
      if (this.balance < this.price) {
        this.$toast.center("余额不足，请先充值！");
      } else {
        this.data.res[this.uid].info.balance =
          parseInt(this.balance) - parseInt(this.price);
          let orderId = this.createOrderId();
        let order = {
          ticketCard: this.ticketCard,
          passager: this.pasger,
          price: this.price,
          time: dateFormat(new Date(), "YYYY-MM-DD HH:mm"),
          orderId: orderId
        };
        this.orderList.push(order);
        this.data.res[this.uid].info.orderList = this.orderList;
        let data = JSON.stringify(this.data);
        localStorage.setItem("user-data", data);
        this.$router.push({
          path: "/paySuccess",
          query: {
            uid: this.uid
          }
        });
      }
    }
  },
  components: {
    ticketCard,
    customerDesc,
    priceBar,
    payMethods
    // insuranceCard
  }
};
</script>

<style lang="stylus" scoped>
@import '../../stylus/common.styl';
.book {
  padding-top: 16 * $px;
}
</style>


