<template>
  <div class="airport">
    <div class="airport-header">
      <input
        type="text"
        placeholder="请选择出发/目的机场"
      >
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
import data from "./data.js";

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
      }
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


