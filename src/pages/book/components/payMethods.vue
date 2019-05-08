<template>
  <div class="methods">
    <div class="methods-header">
      <div
        class="cancel-btn"
        @click="$emit('cancel')"
      >
        <img
          :src="cancelIcon"
          alt=""
        >
      </div>
      <div class="title">请选择支付方式</div>
    </div>
    <div class="methods-body">
      <pay-item
        :icon="walletIcon"
        :pay-desc="'钱包支付'"
        :show-balance="true"
        :balance="balance"
        :is-support="false"
        @selected="$emit('select-to-pay')"
      ></pay-item>
      <pay-item
        :icon="alipayIcon"
        :pay-desc="'支付宝支付'"
      ></pay-item>
      <pay-item
        :icon="wechatIcon"
        :pay-desc="'微信支付'"
      ></pay-item>
    </div>
  </div>
</template>

<script>
import cancelIcon from "@/assets/iconImages/cancel.png";
import walletIcon from "@/assets/iconImages/wallet.png";
import alipayIcon from "@/assets/iconImages/alipay.png";
import wechatIcon from "@/assets/iconImages/wechat.png";
import payItem from "./payItem";
export default {
  data() {
    return {
      cancelIcon: cancelIcon,
      walletIcon: walletIcon,
      alipayIcon: alipayIcon,
      wechatIcon: wechatIcon
    };
  },
  props: {
    balance: {
      type: [String, Number],
      default: ''
    }
  },
  components: {
    payItem
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../stylus/common.styl';
.methods {
  position: absolute;
  width: 100%;
  height: 270 * $px;
  background-color: #fff;
  bottom: 0;
  border-radius: 10 * $px 10 * $px 0 0;
  padding: 8 * $px 10 * $px 0 10 * $px;
  box-sizing: border-box;
  z-index: 100;
  box-shadow: 0 0 6 * $px #ddd;
  animation: fromBottom 0.3s;
  &-header {
    .cancel-btn {
      float: right;
      width: 23 * $px;
      height: 23 * $px;
      img {
        width: 100%;
      }
    }
    .title {
      padding-top: 20 * $px;
      text-align: center;
      padding-left: 10 * $px;
    }
  }
  &-body {
    padding: 30 * $px 8 * $px 0 8 * $px;
  }
}
@keyframes fromBottom {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>

