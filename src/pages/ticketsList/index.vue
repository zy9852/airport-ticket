<template>
  <div class="ticket-list">
    <div class="ticket-list-header">
      <div class="city-wrap fx-row fx-v-center fx-m-between">
        <div class="dep">{{ dep.name }}</div>
        <img :src="headIcon" />
        <div class="arr">{{ arr.name }}</div>
      </div>
      <div
        class="date-wrap"
        :class="{'fx-row': arrDate != '', 'fx-m-between': arrDate != ''}"
      >
        <div class="dep-date">出发时间：{{ depDate }}</div>
        <div
          class="arr-date"
          v-if="arrDate != ''"
        >返程时间：{{ arrDate }}</div>
      </div>
    </div>
    <div class="ticket-list-body" v-if="ticketList.length > 0">
      <div
        class="ticket-card"
        v-for="(item, index) in ticketList"
        :key="index"
        @click="goBook(item)"
      >
        <div class="ticket-card-body fx-row fx-v-center fx-m-between">
          <div class="ticket-time">
            <div class="time fx-row fx-v-center fx-m-between">
              <div>{{ item.depTime }}</div>
              <img :src="timeIcon" />
              <div>{{ item.arrTime }}</div>
            </div>
            <div class="airport fx-row">
              <div class="airport-dep">{{ item.depAirport }}</div>
              <div class="airport-arr">{{ item.arrAirport }}</div>
            </div>
          </div>
          <div class="ticket-price">￥{{ item.price }}</div>
        </div>
        <div class="ticket-card-footer">{{ flightNo }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// 数据
import airport from "@/data/airport.js";
import ticketMock from "@/data/ticket.js";
// 图片
import oneway_icon from "@/assets/iconImages/oneway.png";
import return_icon from "@/assets/iconImages/return.png";
import timeArrow from "@/assets/iconImages/timeArrow.png";
export default {
  data() {
    return {
      dep: {
        name: "",
        code: ""
      },
      arr: {
        name: "",
        code: ""
      },
      headIcon: oneway_icon,
      timeIcon: timeArrow,
      depDate: "",
      arrDate: "",
      isDomestic: true,
      depTimeList: [],
      arrTimeList: [],
      ticketList: [],
      flightNo: '东航MU5183'
    };
  },
  created() {
    let query = this.$route.query;
    let { dep, arr, depDate, arrDate, isRt } = query;
    isRt = isRt == 0 ? true : false;
    if (isRt) {
      this.headIcon = return_icon;
    }
    this.depDate = depDate;
    this.arrDate = arrDate;
    this.queryCity(dep, 0);
    this.queryCity(arr, 1);
    this.createList();
  },
  methods: {
    // 查询出发地 目的地 详细信息
    queryCity(city, type) {
      let matchedArray = airport.domestic.filter(item => {
        if (item.code == city) return item;
      });
      if (matchedArray.length == 0) {
        matchedArray = airport.international.filter(item => {
          if (item.code == city) return item;
        });
        this.isDomestic = false;
      }
      /**
       * type = 0 =>出发地
       * type = 1 => 目的地
       */
      if (type === 0) {
        this.dep = matchedArray[0];
      } else {
        this.arr = matchedArray[0];
      }
      this.queryAirport(matchedArray, type);
    },
    // 查询匹配的机场名
    queryAirport(arr, type) {
      let airportArray = arr[0].al;
      airportArray = airportArray.map(item => {
        if (item.n.indexOf("国际机场") > 0) {
          let airport = item.n.split("国际机场");
          return airport[0];
        } else {
          let airport = item.n.split("机场");
          return airport[0];
        }
      });
      if (type === 0) {
        this.depAirport = airportArray;
      } else {
        this.arrAirport = airportArray;
      }
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
    // 从大到小排序
    sortNumber(a, b) {
      return a - b;
    },
    // 生成随机数组
    randomArray(min, max, num) {
      let arr = [];
      for (let i = 0; i < num; i++) {
        let number = this.randomNum(min, max);
        arr.push(number);
      }
      arr = arr.sort(this.sortNumber);
      return arr;
    },
    // 生成航班列表
    createTimeArr(type, times) {
      let randomArr = this.randomArray(0, 9, 3);
      let depDateArr = [
        ticketMock.depDate1,
        ticketMock.depDate2,
        ticketMock.depDate3
      ];
      let arrDateArr = [
        ticketMock.domesticArrDate1,
        ticketMock.domesticArrDate2,
        ticketMock.domesticArrDate3
      ];
      let interArrDateArr = [
        ticketMock.interArrDate1,
        ticketMock.interArrDate2,
        ticketMock.interArrDate3
      ];

      if (type === 0) {
        randomArr.forEach(n => {
          this.depTimeList.push(depDateArr[times][n]);
          // console.log(this.depTimeList);
        });
      } else if (type === 1 && this.isDomestic) {
        randomArr.forEach(n => {
          this.arrTimeList.push(arrDateArr[times][n]);
        });
      } else {
        randomArr.forEach(n => {
          this.arrTimeList.push(interArrDateArr[times][n]);
        });
      }
    },
    // 随机生成价格
    createPrice() {
      if (this.isDomestic) {
        let number = this.randomNum(0, 18);
        return ticketMock.domesticPrice[number];
      } else {
        let number = this.randomNum(0, 13);
        return ticketMock.interPrice[number];
      }
    },
    //  生成航班列表
    createList() {
      this.createTimeArr(0, 0);
      this.createTimeArr(0, 1);
      this.createTimeArr(0, 2);
      this.createTimeArr(1, 0);
      this.createTimeArr(1, 1);
      this.createTimeArr(1, 2);
      for (let i = 0; i < 9; i++) {
        let price = this.createPrice();
        let depAirport = this.depAirport[this.randomNum(0, this.depAirport.length - 1)];
        let arrAirport = this.arrAirport[this.randomNum(0, this.arrAirport.length - 1)];
        this.ticketList[i] = {
          depTime: this.depTimeList[i],
          arrTime: this.arrTimeList[i],
          price: price,
          depAirport,
          arrAirport
        };
      }
    },
    goBook(item) {
      this.$router.push({
        path: '/book',
        query: {
          dep: this.dep.code,
          arr: this.arr.code,
          depTime: item.depTime,
          arrTime: item.arrTime,
          price: item.price,
          depDate: this.depDate,
          flightNo: this.flightNo,
          from: 'ticketList'
        }
      })
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../stylus/common.styl';
.ticket-list {
  padding: 8 * $px;
  &-header {
    padding: 16 * $px;
    background: #9acefe;
    border-radius: 8 * $px;
    box-shadow: 0 0 8 * $px #ecf6ff;
    .city-wrap {
      color: #fff;
      font-size: 20 * $px;
      font-weight: 600;
      img {
        width: 90 * $px;
        height: 35 * $px;
        display: block;
      }
    }
    .date-wrap {
      .dep-date, .arr-date {
        padding: 5 * $px;
        background: #ecf6ff;
        margin-top: 8 * $px;
        color: #888;
        border-radius: 5 * $px;
        text-align: center;
      }
    }
  }
  &-body {
    padding: 10 * $px 0;
    .ticket-card {
      margin-bottom: 12 * $px;
      background: linear-gradient(#fff, #ecf6ff);
      padding: 8 * $px 12 * $px;
      border-radius: 8 * $px;
      box-shadow: 0 0 4 * $px #eee;
      &-body {
        .ticket-time {
          width: 195 * $px;
          .time {
            font-size: 24 * $px;
            font-weight: 500;
            text-align: center;
            height: 30 * $px;
            line-height: 30 * $px;
            img {
              display: block;
              width: 40 * $px;
              height: 6 * $px;
            }
          }
          .airport {
            color: #888;
            font-size: 14 * $px;
            &-dep {
              width: 97 * $px;
              text-align: start;
            }
            &-arr {
              width: 97 * $px;
              text-align: end;
            }
          }
        }
        .ticket-price {
          font-size: 24 * $px;
          color: #ff7200;
        }
      }
      &-footer {
        text-align: start;
        margin-top: 8 * $px;
        color: #4ac29a;
      }
    }
  }
}
</style>

