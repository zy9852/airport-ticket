<template>
  <div class="pay-success">
    <div class="icon">
      <img :src="successIcon" />
    </div>
    <div class="desc">恭喜你，支付成功！</div>
    <div class="order-btn" @click="goOrderDetail">查看订单详情</div>
    <div class="back-btn" @click="goIndex">返回首页</div>
  </div>
</template>

<script>
import successIcon from "@/assets/iconImages/success.png";
export default {
  data() {
    return {
      successIcon: successIcon
    };
  },
  methods: {
    goIndex() {
      this.$router.push({
        path: '/home'
      })
    },
    goOrderDetail() {
      this.$router.push({
        path: '/orderDetail'
      })
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../stylus/common.styl';
.pay-success {
  padding-top: 100 * $px;
  .icon {
    width: 85 * $px;
    height: 85 * $px;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  .desc {
    margin-top: 20 * $px;
    margin-bottom: 80 * $px;
    font-size: 24 * $px;
    text-align: center;
  }
  .order-btn {
    width: 230 * $px;
    margin: 0 auto;
    padding: 10 * $px 0;
    border-radius: 8 * $px;
    font-size: 18 * $px;
    background-color: #4ac29a;
    margin-bottom: 20 * $px;
  }
  .back-btn {
    width: 230 * $px;
    margin: 0 auto;
    padding: 10 * $px 0;
    border-radius: 8 * $px;
    font-size: 18 * $px;
    background-color: #ecf6dc;
  }
}
</style>


