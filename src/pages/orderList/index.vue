<template>
  <div class="list">
    <div class="list-title">全部订单</div>
    <div
      class="list-body"
      v-if="orderList.length > 0"
    >
      <div
        class="list-body-item"
        v-for="(item, index) in orderList"
        :key="index"
        @click="goDetail(index)"
      >
        <div class="head fx-row fx-m-between">
          <div class="city-line fx-row">
            <img :src="flightIcon" />
            <div class="dep">{{ item.ticketCard.depCity }}</div>
            <img :src="rightIcon" />
            <div class="arr">{{ item.ticketCard.arrCity }}</div>
          </div>

          <div class="status">已出票</div>
        </div>
        <div class="content">
          <div class="date">
            <span>{{ item.ticketCard.depDate }}</span>
            <span>{{ item.ticketCard.flightWeek }}</span>
            <span>{{ item.ticketCard.depTime }}</span>
          </div>
          <div class="type">单程</div>
          <div class="order-time">下单时间：{{ item.time }} </div>
          <div class="price">￥{{ item.price }}</div>
        </div>
        <div class="footer">
          <div class="pasger">
            <span class="desc">乘机人</span>
            <span>{{ item.passager.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="nothing" v-if="orderList.length == 0">
      <img :src="nothingIcon" alt="">
      <div class="nothing-desc">还没有订单，快去下单吧！</div>
    </div>
  </div>
</template>

<script>
import flightIcon from "@/assets/iconImages/orderFlight.png";
import rightIcon from "@/assets/iconImages/swapRight.png";
import nothingIcon from "@/assets/iconImages/nothing.png";
export default {
  data() {
    return {
      orderList: [],
      flightIcon: flightIcon,
      rightIcon: rightIcon,
      nothingIcon: nothingIcon
    };
  },
  created() {
    let query = this.$route.query;
    this.uid = query.uid;
    let data = localStorage.getItem("user-data");
    data = JSON.parse(data);
    this.data = data;
    let dataList = data.res;
    this.userInfo = dataList[this.uid].info;
    this.orderList = this.userInfo.orderList || [];
  },
  methods: {
    goDetail(index) {
      this.$router.push({
        path: "/orderDetail",
        query: {
          uid: this.uid,
          orderNo: index
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../stylus/common.styl';
.list {
  padding: 25 * $px 16 * $px 12 * $px 16 * $px;
  &-title {
    font-size: 25 * $px;
    font-weight: 600;
    letter-spacing: 2 * $px;
    text-align: start;
  }
  &-body {
    margin-top: 28 * $px;
    &-item {
      box-shadow: 0 0 6 * $px #ddd;
      border-radius: 8 * $px;
      padding-top: 10 * $px;
      margin-bottom: 20 * $px;
      .head {
        padding: 0 12 * $px;
        img {
          display: block;
          width: 24 * $px;
          height: 24 * $px;
        }
        .dep {
          margin-left: 10 * $px;
        }
        .status {
          color: #56bb00;
          font-size: 18 * $px;
        }
      }
      .content {
        padding: 0 12 * $px;
        margin-top: 12 * $px;
        text-align: start;
        font-size: 14 * $px;
        span {
          margin-right: 5 * $px;
        }
        .type {
          margin-top: 4 * $px;
        }
        .order-time {
          color: #999;
          font-size: 13 * $px;
          margin-top: 5 * $px;
          margin-left: 4 * $px;
        }
        .price {
          text-align: end;
          font-size: 23 * $px;
          margin-right: 5 * $px;
          font-weight: 600;
          margin-top: -10 * $px;
        }
      }
      .footer {
        text-align: start;
        font-size: 14 * $px;
        background-color: #f6f8fb;
        padding: 10 * $px 0;
        .pasger {
          margin-left: 15 * $px;
          .desc {
            font-size: 13 * $px;
            margin-right: 10 * $px;
          }
        }
      }
    }
  }
  .nothing {
    margin-top: 80 * $px;
    img {
      display: block;
      width: 100 * $px;
      height: 100 * $px;
      margin: 0 auto;
    }
    &-desc {
      margin-top: 20 * $px;
      font-size: 18 * $px;
      color: #d81106;
    }
  }
}
</style>


