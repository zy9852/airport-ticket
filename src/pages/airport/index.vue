<template>
  <div class="airport">
    <div class="airport-header">
      <input
        type="text"
        placeholder="请选择出发/目的机场"
        v-model="inputValue"
        @input="search"
      >
      <div class="airport-header-list">
        <div
          class="airport-header-list-item  fx-row fx-m-between"
          v-for="(item, index) in matchedList"
          :key="index"
          @click="pickCity(item)"
        >
          <div class="city">{{ item.name }}</div>
          <div class="code">{{ item.code }}</div>
        </div>
      </div>
    </div>
    <div class="airport-tab">
      <div class="airport-tab-name">热门城市</div>
      <airport-tabs
        :tabs="tabs"
        :domestic-list="hotDomestic"
        :inter-list="hotInter"
        @pick-city="pickCity"
      ></airport-tabs>
    </div>
  </div>
</template>

<script>
// 数据
import data from "@/data/airport.js";

// 组件
import airportTabs from "./components/airportTabs";
export default {
  data() {
    return {
      domestic: data.domestic, //国内机场
      inter: data.international, // 国际/港澳台
      hotDomestic: data.hotDomestic, // 国内热门
      hotInter: data.hotInternational, // 国际热门
      tabs: ["国内城市", "国际/港澳台"],
      params: {
        dep: {},
        arr: {}
      },
      inputValue: "",
      matchedList: []
    };
  },
  created() {
    let query = this.$route.query;
    let { type } = query;
    this.type = type;
  },
  methods: {
    pickCity(item) {
      if (this.type == 0) {
        this.params.dep = item;
      } else if (this.type == 1) {
        this.params.arr = item;
      }
      let params = JSON.stringify(this.params);
      localStorage.setItem("selected_airport", params);
      this.$router.go(-1);
    },
    search() {
      let matchedList = [];
      let allAirport = data.domestic.concat(data.international);
      if (this.inputValue != "") {
        matchedList = allAirport.filter(item => {
          if (item.name.indexOf(this.inputValue) != -1) {
            return item;
          }
        });
      }
      this.matchedList = matchedList;
    }
  },
  components: {
    airportTabs
  }
};
</script>

<style lang="stylus" scoped>
@import '../../stylus/common.styl';
.airport {
  &-header {
    padding: 10 * $px 5 * $px;
    input {
      width: 350 * $px;
      height: 40 * $px;
      border: none;
      border-bottom: 1 * $px solid #eee;
      padding-left: 8 * $px;
      font-size: 18 * $px;
      outline: none;
    }
    &-list {
      padding: 10 * $px 15 * $px 10 * $px 25 * $px;
      &-item {
        font-size: 18 * $px;
        padding: 10 * $px 5 * $px;
        text-align: start;
        border-bottom: 1px solid #eee;
      }
    }
  }
  &-tab {
    margin-top: 50 * $px;
    &-name {
      width: 100 * $px;
      font-weight: 600;
      margin-bottom: 15 * $px;
    }
  }
}
</style>


