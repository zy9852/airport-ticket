<template>
  <div class="customer fx-v-center fx-m-between">
    <div class="customer-desc">
      <div class="customer-desc-name">{{ blockDesc }}</div>
      <div class="customer-desc-card-no" v-if="desc != ''">{{ desc }}</div>
    </div>
    <div class="arrow">
      <img :src="arrowIcon" />
    </div>
  </div>
</template>

<script>
import arrowIcon from "@/assets/iconImages/arrow-gray.png";
export default {
  props: {
    blockDesc: {
      type: String,
      default: "乘机人"
    }, 
    desc: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      arrowIcon: arrowIcon
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../stylus/common.styl';
.customer {
  margin: 25 * $px 12 * $px;
  padding: 10 * $px 0 10 * $px 15 * $px;
  border-radius: 8 * $px;
  box-shadow: 0 0 6 * $px #ccc;
  &-desc {
    font-size: 18 * $px;
    &-card-no {
      font-size: 15 * $px;
      color: #888;
      margin-top: 5 * $px;
    }
  }
  img {
    display: block;
    width: 25 * $px;
  }
}
</style>


