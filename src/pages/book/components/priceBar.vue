<template>
  <div class="price-bar fx-v-center fx-m-between">
    <div class="price-wrap">
      <div class="price">￥{{ price }}</div>
      <div class="desc">订单总额</div>
    </div>
    <div class="pay-btn" @click="$emit('to-pay')">确认预订</div>
  </div>
</template>

<script>
export default {
  props: {
    price: {
      type: [String, Number],
      default: ""
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../stylus/common.styl';
.price-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 16 * $px 12 * $px;
  box-sizing: border-box;
  box-shadow: 0 0 8 * $px #ccc;
  .price-wrap {
    margin-left: 10 * $px;
    .price {
      font-size: 26 * $px;
      color: #f6a100;
      font-weight: 600;
    }
  }
  .pay-btn {
    padding: 10 * $px 24 * $px;
    color: #fff;
    font-size: 20 * $px;
    text-align: center;
    background-color: #1188ff;
    border-radius: 8 * $px;
    margin-right: 8 * $px;
  }
}
</style>
