<template>
  <div class="home">
    <div class="home-head">
      <img
        :src="bannerImg"
        alt="bannerImg"
      >
    </div>
    <div class="home-body">
      <tab-bar :tabs="tabs"></tab-bar>
    </div>
    <div class="home-footer fx-row fx-v-center fx-m-between">
      <div class="home-footer-icon">
        <span class="iconfont icon-Home"></span>
        <div class="icon-name">首页</div>
      </div>
      <div class="home-footer-icon">
        <span class="iconfont icon-Grid"></span>
        <div class="icon-name">推荐</div>
      </div>
      <div class="home-footer-icon">
        <span class="iconfont icon-icon_arrive"></span>
        <div class="icon-name">动态</div>
      </div>
      <div class="home-footer-icon">
        <span class="iconfont icon-UserProfile"></span>
        <div class="icon-name">个人中心</div>
      </div>
    </div>
  </div>
</template>

<script>
// 图片
import bannerImg from "./images/banner-ma.jpg";

// 工具
// import axios from 'axios';

// 组件
import tabBar from "./components/tabBar";

export default {
  data() {
    return {
      bannerImg: bannerImg,
      tabs: ['按起降地','按航班号']
    };
  },
  created() {
    
  },
  components: {
    tabBar
  }
};
</script>

<style lang="stylus" scoped>
@import '../../stylus/common.styl';

.home {
  &-head {
    height: 150 * $px;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  &-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 15 * $px 15 * $px 10 * $px 15 * $px;
    box-shadow: 0 2 * $px 6 * $px #ccc;

    .icon-name {
      font-size: 14 * $px;
    }
  }
}
</style>