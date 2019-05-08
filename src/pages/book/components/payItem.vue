<template>
  <div class="pay-item fx-v-center" @click="$emit('selected')">
    <div class="icon">
      <img :src="icon" />
    </div>
    <div class="desc">{{ payDesc }}</div>
    <div
      class="balance"
      v-if="showBalance"
    >余额:￥{{ balance }}</div>
    <div
      class="support-desc"
      v-if="isSupport"
    >抱歉，暂不支持此支付方式</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    icon: {
      type: String,
      default: ""
    },
    payDesc: {
      type: String,
      default: ""
    },
    showBalance: {
      type: Boolean,
      default: false
    },
    balance: {
      type: [String, Number],
      default: ""
    },
    isSupport: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../stylus/common.styl';
.pay-item {
  border-bottom: 1px solid #ddd;
  padding-bottom: 12 * $px;
  margin-left: 5 * $px;
  margin-bottom: 15 * $px;
  .icon {
    width: 30 * $px;
    height: 30 * $px;
    img {
      width: 100%;
    }
  }
  .desc {
    margin-left: 12 * $px;
    font-size: 18 * $px;
  }
  .balance {
    margin-left: 12 * $px;
    font-size: 14 * $px;
  }
  .support-desc {
    font-size: 12 * $px;
    margin-left: 20 * $px;
    color: red;
  }
}
</style>
