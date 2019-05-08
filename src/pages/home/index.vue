<template>
  <div class="home">
    <div class="home-head">
      <Swiper v-if="bannerImg.length > 0">
        <Slide @click="goRecommend">
          <img :src="bannerImg[0]" />
        </Slide>
        <Slide @click="goRecommend">
          <div class="slide">
            <img :src="bannerImg[1]" />
            <span>国内精选</span>
          </div>
        </Slide>
        <Slide @click="goInter">
          <div class="slide">
            <img :src="bannerImg[2]" />
            <span>国际精选</span>
          </div>
        </Slide>
      </Swiper>
    </div>
    <div class="home-body">
      <tab-bar :tabs="tabs"></tab-bar>
    </div>
    <div class="home-footer fx-row fx-v-center fx-m-between">
      <div class="home-footer-icon">
        <span class="iconfont icon-Home"></span>
        <div class="icon-name active">首页</div>
      </div>
      <div
        class="home-footer-icon"
        @click="goRecommend"
      >
        <span class="iconfont icon-Grid"></span>
        <div class="icon-name">推荐</div>
      </div>
      <!-- <div class="home-footer-icon">
        <span class="iconfont icon-icon_arrive"></span>
        <div class="icon-name">动态</div>
      </div> -->
      <div class="home-footer-icon" @click="goUserPage">
        <span class="iconfont icon-UserProfile"></span>
        <div class="icon-name">个人中心</div>
      </div>
    </div>
    <div class="fix-space"></div>
  </div>
</template>

<script>
// 图片
import saleBanner from "./images/banner1.png";
import domesticBanner from "./images/domestic.jpg";
import interBanner from "./images/inter.jpg";
import { Swiper, Slide } from "vue-swiper-component";

// 组件
import tabBar from "./components/tabBar";

export default {
  data() {
    return {
      bannerImg: [saleBanner, domesticBanner, interBanner],
      tabs: ["按起降地", "按航班号"]
    };
  },
  created() {},
  methods: {
    goRecommend() {
      this.$router.push({
        path: "/recommend"
      });
    },
    goInter() {
       this.$router.push({
        path: "/recommend#inter"
      });
    },
    goUserPage() {
      this.$router.push({
        path: "/user"
      })
    }
  },
  components: {
    tabBar,
    Swiper,
    Slide
  }
};
</script>

<style lang="stylus" scoped>
@import '../../stylus/common.styl';
.home {
  &-head {
    height: 150 * $px;
    .slide {
      position: relative;
      span {
        position: absolute;
        top: 65 * $px;
        white-space: nowrap;
        color: #fff;
        font-size: 22 * $px;
        font-weight: 600;
        letter-spacing 4 * $px;
        left: 187 * $px;
        transform: translate(-50%, -50%);
      }
    }
    img {
      display: block;
      width: 100%;
      height: 130 * $px;
    }
  }
  &-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 15 * $px 15 * $px 10 * $px 15 * $px;
    box-shadow: 0 2 * $px 6 * $px #ccc;
    background: #fff;
    .icon-name {
      font-size: 14 * $px;
    }
  }
  .fix-space {
    height: 70 * $px;
  }
}
</style>