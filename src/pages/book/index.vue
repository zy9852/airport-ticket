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
    <customer-desc></customer-desc>
  </div>
</template>

<script>
import ticketCard from "./components/ticketCard";
import customerDesc from "./components/customerDesc";
import airport from "@/data/airport.js";
import saleList from "@/data/sale.js";
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
      ]
    };
  },
  created() {
    let query = this.$route.query;
    let {
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
    this.ticketCard.flightWeek = week;
    this.ticketCard.flightNo = flightNo;
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
    }
  },
  components: {
    ticketCard,
    customerDesc
  }
};
</script>

<style lang="stylus" scoped>
@import '../../stylus/common.styl';
.book {
  padding-top: 16 * $px;
}
</style>


