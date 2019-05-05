<template>
  <div class="tab-bar">
    <div
      class="tab-bar-name"
      v-for="(tab, index) in tabs"
      :key="index"
      :class="{active: clickedIndex === index}"
      @click="clickedIndex = index"
    >{{ tab }}</div>
    <!-- 按起降地 -->
    <div
      class="tab-bar-body"
      v-if="clickedIndex === 0"
    >
      <!-- 选择出发地 -->
      <div class="select-item fx-row fx-v-center">
        <img :src="depIcon" />
        <div
          class="dep"
          :class="{placeholder: dep.name === ''}"
          @click="searchAirport('dep')"
        >{{ dep.name || depPlaceholder }}</div>
      </div>
      <!-- 选择目的地 -->
      <div class="select-item fx-row fx-v-center">
        <img :src="arrIcon" />
        <div
          class="arr"
          :class="{placeholder: arr.name === ''}"
          @click="searchAirport('arr')"
        >{{ arr.name || arrPlaceholder }}</div>
      </div>
      <!-- 选择出发日期 -->
      <div class="select-item fx-row fx-v-center">
        <img :src="calendarIcon" />
        <div
          class="depDate"
          :class="{placeholder: depDate === ''}"
          @click="chooseDate('dep')"
        >{{ depDate || depdatePlaceholder }}</div>
      </div>
    </div>
    <!-- 按航班号 -->
    <div
      class="tab-bar-body"
      v-if="clickedIndex === 1"
    >
      <div class="select-item fx-row fx-v-center">
        <img :src="flightIcon" />
        <input
          type="text"
          placeholder="请输入航班号,如CA1234"
        />
      </div>
      <!-- 选择出发日期 -->
      <div class="select-item fx-row fx-v-center">
        <img :src="calendarIcon" />
        <div
          :class="{placeholder: depDate === ''}"
          @click="chooseDate('dep')"
        >{{ depDate || depdatePlaceholder }}</div>
      </div>
    </div>
    <!-- 往返 -->
    <div class="return fx-row fx-v-center">
      <input
        type="checkbox"
        name="returnBtn"
        v-model="isReturn"
      >
      <label>往返</label>
    </div>
    <!-- 返回日期 -->
    <div
      class="select-item arr-date fx-row fx-v-center"
      v-if="isReturn"
    >
      <img :src="calendarIcon" />
      <div
        :class="{placeholder: arrDate === ''}"
        @click="chooseDate('arr')"
      >{{ arrDate || arrdatePlaceholder }}</div>
    </div>
    <!-- 搜索按钮 -->
    <div
      class="search-btn"
      @click="goSearch"
    >搜索</div>
    <show-calendar
      v-if="canShowCalendar"
      @choose-date="pickDate"
    ></show-calendar>
  </div>
</template>

<script>
// 图片资源
import flightIcon from "@/assets/iconImages/flight.png";
import depIcon from "@/assets/iconImages/dep.png";
import arrIcon from "@/assets/iconImages/arr.png";
import calendarIcon from "@/assets/iconImages/calendar.png";

// 组件
import showCalendar from "@/components/showCalendar";
export default {
  props: {
    tabs: {
      type: Array,
      default: () => {}
    }
  },
  data() {
    return {
      clickedIndex: 0,
      flightIcon: flightIcon,
      depIcon: depIcon,
      arrIcon: arrIcon,
      calendarIcon: calendarIcon,
      dep: {
        name: "",
        code: null
      },
      arr: {
        name: "",
        code: null
      },
      depDate: "",
      arrDate: "",
      depPlaceholder: "请选择出发地",
      arrPlaceholder: "请选择目的地",
      depdatePlaceholder: "请选择出发日期",
      arrdatePlaceholder: "请选择返回日期",
      isReturn: false,
      canShowCalendar: false
    };
  },
  created() {
    this.id = "airport_home";
    let airportData = localStorage.getItem("selected_airport");
    let homeData = localStorage.getItem(this.id);
    if (homeData) {
      this.restoreData();
    }
    localStorage.removeItem(this.id);
    localStorage.removeItem("selected_airport");
    airportData = JSON.parse(airportData);
    if (airportData) {
      if (Object.keys(airportData.dep).length > 0) {
        this.dep = airportData.dep;
      }
      if (Object.keys(airportData.arr).length > 0) {
        this.arr = airportData.arr;
      }
    }
  },
  methods: {
    // 选择日期
    chooseDate(type) {
      this.canShowCalendar = true;
      this.chooseDateType = type;
    },
    // 搜索
    goSearch() {
      this.checkAirport();
      if (!this.checkedAirport) return;
      console.log(this.checkedAirport);
      this.checkDate();
      if (!this.checkedDate) return;
      this.$router.push({
        path: "/ticketsList",
        query: {
          dep: this.dep.code,
          arr: this.arr.code,
          isRt: this.isReturn == true ? 0 : 1,
          depDate: this.depDate,
          arrDate: this.arrDate
        }
      });
    },
    // 显示日期
    pickDate(item) {
      let selectedDate = item.date;
      this.canShowCalendar = false;
      let month = selectedDate.getMonth() + 1;
      let day = selectedDate.getDate();
      if (this.chooseDateType === "dep") {
        this.depDate = month + "月" + day + "日";
      } else if (this.chooseDateType === "arr") {
        this.arrDate = month + "月" + day + "日";
      }
    },
    // 选择机场
    searchAirport(type) {
      type = type === "dep" ? 0 : 1;
      this.storeData();
      this.$router.push({
        path: "/airport",
        query: { type }
      });
    },
    // 出发目的地判断
    checkAirport() {
      this.checkedAirport = true;
      if (!this.dep.name) {
        this.$toast.center("请选择出发机场!");
        this.checkedAirport = false;
      } else if (!this.arr.name) {
        this.$toast.center("请选择目的机场!");
        this.checkedAirport = false;
      } else if (this.dep.code == this.arr.code) {
        this.$toast.center("出发地与目的地不能相同!");
        this.checkedAirport = false;
      }
    },
    //  往返时间判断
    checkDate() {
      this.checkedDate = true;
      if (!this.depDate) {
        this.$toast.center("请选择出发时间");
        this.checkedDate = false;
      } else if (this.isReturn && this.depDate == this.arrDate) {
        this.$toast.center("往返时间不能相同");
        this.checkedDate = false;
      }
    },
    // 存储数据
    storeData() {
      let params = {
        isReturn: this.isReturn,
        dep: this.dep,
        arr: this.arr,
        depDate: this.depDate,
        arrDate: this.arrDate
      };
      params = JSON.stringify(params);
      localStorage.setItem(this.id, params);
    },

    // 恢复数据
    restoreData() {
      let params = localStorage.getItem(this.id);
      params = JSON.parse(params);
      let { isReturn, dep, arr, depDate, arrDate } = params;
      this.isReturn = isReturn;
      this.dep = dep;
      this.arr = arr;
      this.depDate = depDate;
      this.arrDate = arrDate;
    }
  },
  components: {
    showCalendar
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../stylus/common.styl';
.tab-bar {
  padding: 12 * $px;
  &-name {
    width: 50%;
    color: #ccc;
    display: inline-block;
    font-size: 18 * $px;
    font-weight: 500;
    letter-spacing 2 * $px;
    &.active {
      color: skyblue;
    }
    &::after {
      content: '';
      display: block;
      width: 50 * $px;
      margin: 0 auto;
      margin-top: 5 * $px;
    }
    &.active::after {
      background-color: skyblue;
      width: 100 * $px;
      height: 2 * $px;
      transition: width 0.5s;
      -moz-transition: width 0.5s;
      -webkit-transition: width 0.5s;
      -o-transition: width 0.5s;
    }
  }
  &-body {
    padding-left: 20 * $px;
    padding-right: 10 * $px;
    padding-top: 25 * $px;
    input {
      width: 250 * $px;
      box-sizing: border-box;
      border: none;
      outline: none;
      font-size: 20 * $px;
    }
    input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
      color: #999;
      font-size: 18 * $px;
    }
  }
  .placeholder {
    color: #999;
  }
  .select-item {
    font-size: 18 * $px;
    border-bottom: 1 * $px solid #ddd;
    padding-bottom: 8 * $px;
    margin-bottom: 16 * $px;
    img {
      display: block;
      width: 18 * $px;
      height: 18 * $px;
      margin-right: 16 * $px;
    }
    &.arr-date {
      margin-left: 20 * $px;
      margin-right: 10 * $px;
    }
  }
  .return {
    margin-left: 250 * $px;
    margin-bottom: 15 * $px;
    input {
      width: 20 * $px;
      height: 20 * $px;
      margin: 0;
      margin-right: 10 * $px;
    }
    span {
      font-size: 18 * $px;
    }
  }
  .search-btn {
    width: 320 * $px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 12 * $px 130 * $px;
    background-color: #1188ff;
    border-radius: 5 * $px;
    color: #fff;
    font-size: 20 * $px;
  }
}
</style>


