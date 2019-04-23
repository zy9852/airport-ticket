<template>
  <div class="calendar-wrap">
    <div class="calendar">
      <div class="calendar-header fx-row fx-v-center">
        <div
          class="arrow-left"
          @click="goLastMonth"
        >
          <img :src="arrowLeft" />
        </div>
        <div class="year">{{ curYear }}年</div>
        <div class="month">{{ curMonth }}月</div>
        <div
          class="arrow-right"
          @click="goNextMonth"
        >
          <img :src="arrowRight" />
        </div>
      </div>
      <div class="calendar-body">
        <div class="calendar-body-week fx-row fx-m-between">
          <span>一</span>
          <span>二</span>
          <span>三</span>
          <span>四</span>
          <span>五</span>
          <span>六</span>
          <span>日</span>
        </div>
        <div class="calendar-body-days fx-row fx-wrap fx-v-center">
          <div
            class="day"
            :class="{'gray-day': !item.canChoose, checked: item.checked}"
            v-for="(item, index) in days"
            :key="index"
            @click="pickDate(item)"
          >{{ item.day }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import arrowLeft from "@/assets/iconImages/arrowLeft.png";
import arrowRight from "@/assets/iconImages/arrowRight.png";
export default {
  data() {
    return {
      arrowLeft: arrowLeft,
      arrowRight: arrowRight,
      days: [],
      curDay: null,
      curYear: null,
      curMonth: null
    };
  },
  props: {},
  created() {
    this.initDate();
  },
  methods: {
    initDate(d) {
      let date;
      if (d) {
        date = new Date(d);
      } else {
        let now = new Date();
        let beginDate = new Date(
          this.formatDate(now.getFullYear(), now.getMonth(), 1)
        );
        beginDate.setDate(35);
        date = new Date(
          this.formatDate(beginDate.getFullYear(), beginDate.getMonth() + 1, 1)
        );
      }

      this.curDay = date.getDate();
      this.curYear = date.getFullYear();
      this.curMonth = date.getMonth() + 1;
      this.curWeek = date.getDay();
      if (this.curWeek === 0) {
        this.curWeek = 7;
      }
      this.firstDay = this.formatDate(this.curYear, this.curMonth, this.curDay);
      this.days.length = 0;

      for (let i = this.curWeek - 1; i > 0; i--) {
        let d = new Date(this.firstDay);
        d.setDate(d.getDate() - i);
        let dayObj = {};
        dayObj.day = d.getDate();
        dayObj.canChoose = false;
        dayObj.date = d;
        dayObj.checked = false;
        this.days.push(dayObj);
      }
      for (let i = 0; i <= 35 - this.curWeek; i++) {
        let d = new Date(this.firstDay);
        d.setDate(d.getDate() + i);
        let dayObj = {};
        dayObj.day = d.getDate();
        if (d.getMonth() + 1 != this.curMonth) {
          dayObj.canChoose = false
        } else {
          dayObj.canChoose = true;
        }
        dayObj.date = d;
        dayObj.checked = false;
        this.days.push(dayObj);
      }
      this.days.forEach(item => {
        let today = new Date();
        today = this.formatDate(today.getFullYear(), today.getMonth() + 1, today.getDate());
        today = new Date(today);
        if (today.getTime() > item.date.getTime()) {
          item.canChoose = false;
        }
      });
    },
    formatDate(y, m, d) {
      if (m < 10) m = "0" + m;
      if (d < 10) d = "0" + d;
      return y + "-" + m + "-" + d;
    },
    goLastMonth() {
      let date = new Date(this.formatDate(this.curYear, this.curMonth, 1));
      date.setDate(0);
      this.initDate(
        this.formatDate(date.getFullYear(), date.getMonth() + 1, 1)
      );
    },
    goNextMonth() {
      let date = new Date(this.formatDate(this.curYear, this.curMonth, 1));
      date.setDate(35);
      this.initDate(
        this.formatDate(date.getFullYear(), date.getMonth() + 1, 1)
      );
    },
    pickDate(item) {
      if (!item.canChoose) return;
      item.checked = true;
      this.$emit('choose-date', item);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../stylus/common.styl';
.calendar-wrap {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.8);
  .calendar {
    width: 343 * $px;
    height: 290 * $px;
    border-radius: 10 * $px;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -145 * $px;
    margin-left: -170 * $px;
    background-color: #fff;
    box-shadow: 0 0 6 * $px #ccc;
    &-header {
      font-size: 20 * $px;
      color: #fff;
      padding: 8 * $px 3 * $px;
      white-space: nowrap;
      background-color: #1296db;
      img {
        display: block;
        width: 26 * $px;
        height: 26 * $px;
      }
      .year {
        margin-left: 75 * $px;
        margin-right: 25 * $px;
      }
      .month {
        margin-right: 75 * $px;
      }
    }
    &-body {
      &-week {
        padding: 5 * $px 16 * $px;
        background-color: rgba(250, 250, 250, 0.8);
      }
      &-days {
        padding: 5 * $px 0;
        .day {
          width: 47 * $px;
          height: 42 * $px;
          line-height: 42 * $px;
          margin-right: 2 * $px;
          text-align: center;
          &.gray-day {
            color: #ccc;
          }
          &.checked {
            background-color: #1296db;
          }
        }
      }
    }
  }
}
</style>


