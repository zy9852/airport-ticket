<template>
  <div class="user">
    <div class="user-header">
      <div class="user-header-title fx-v-center">
        <div
          class="avator"
          :style="{backgroundImage: 'url(' + avator+ ')', backgroundSize: 'cover', backgroundPosition: 'center center'}"
        >
        </div>
        <div class="name">{{ userName }}</div>
      </div>
      <div class="user-header-func fx-v-center fx-m-between">
        <div class="wallet" @click="toRecharge">
          <div class="desc">钱包</div>
          <div class="balance">￥{{ balance }}</div>
        </div>
        <div class="coupons">
          <div class="desc">优惠券</div>
          <div class="num">0张</div>
        </div>
        <div class="integral">
          <div class="desc">积分</div>
          <div class="sum">0分</div>
        </div>
      </div>
    </div>
    <div class="user-body">
      <div class="item fx-v-center fx-m-between" @click="goOrderList">
        <div class="item-desc">订单列表</div>
        <img :src="orderIcon" />
      </div>
      <div class="item fx-v-center fx-m-between" @click="goPassager">
        <div class="item-desc">常用乘机人</div>
        <img :src="passagerIcon" />
      </div>
    </div>
  </div>
</template>

<script>
import avator from "./imgs/avator.jpg";
import orderIcon from "@/assets/iconImages/order.png";
import passagerIcon from '@/assets/iconImages/passager.png';
export default {
  data() {
    return {
      avator: avator,
      orderIcon: orderIcon,
      passagerIcon: passagerIcon,
      balance: null,
      userName: ''
    };
  },
  created() {
    let query = this.$route.query;
    this.uid = query.uid;
    let data = localStorage.getItem('user-data');
    let user = localStorage.getItem('users');
    user = JSON.parse(user).list[this.uid];
    this.userName = user.name;
    data = JSON.parse(data);
    let dataList = data.res;
    this.userInfo = dataList[this.uid].info;
    this.balance = this.userInfo.balance;
  },
  methods: {
    // 跳转订单列表
    goOrderList() {
      this.$router.push({
        path: '/orderList',
        query: {
          uid: this.uid
        }
      })
    },
    // 跳转乘机人页面
    goPassager() {
      this.$router.push({
        path: '/passager',
        query: {
          uid: this.uid
        }
      })
    },
    toRecharge() {
      this.$router.push({
        path: '/recharge',
        query: {
          uid: this.uid
        }
      })
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../stylus/common.styl';
.user {
  &-header {
    background: url('https://cdn.133.cn/ticket/images/hangban/vue/individual/head.jpg');
    background-size: cover;
    padding: 30 * $px 15 * $px 10 * $px 15 * $px;
    &-title {
      margin-bottom: 15 * $px;
      .avator {
        width: 60 * $px;
        height: 60 * $px;
        border-radius: 50%;
        margin-right: 20 * $px;
      }
      .name {
        color: #fff;
        font-size: 24 * $px;
        letter-spacing: 2 * $px;
      }
    }
    &-func {
      padding: 10 * $px 15 * $px;
      color: #fff;
      font-size: 14 * $px;
      .desc {
        margin-bottom: 10 * $px;
        font-size: 18 * $px;
      }
    }
  }
  &-body {
    padding: 20 * $px 20 * $px;
    .item {
      padding: 10 * $px 0 15 * $px 0;
      border-bottom: 1px solid #eee;
      margin-bottom: 10 * $px;
      &-desc {
        font-size: 19 * $px;
      }
      img {
        display block;
        width: 30 * $px;
        height: 30 * $px;
      }
    }
  }
}
</style>


