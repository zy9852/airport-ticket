<template>
  <div class="detail">
    <div class="detail-status">已出票</div>
    <ticket-card
      :flight-date="this.order.ticketCard.flightDate"
      :flight-week="this.order.ticketCard.flightWeek"
      :dep-city="this.order.ticketCard.depCity"
      :arr-city="this.order.ticketCard.arrCity"
      :dep-airport="this.order.ticketCard.depAirport"
      :arr-airport="this.order.ticketCard.arrAirport"
      :flight-no="this.order.ticketCard.flightNo"
      :dep-time="this.order.ticketCard.depTime"
      :arr-time="this.order.ticketCard.arrTime"
      :dep-date="this.order.ticketCard.depDate"
      :arr-date="this.order.ticketCard.arrDate"
    ></ticket-card>
    <div class="pasger-card">
      <div class="card-title">乘机人信息</div>
      <div
        class="item"
        v-for="(item, index) in pasger"
        :key="index"
      >
        <div class="item-name">{{ item.title}}</div>
        <div class="item-desc">{{ item.desc }}</div>
      </div>
    </div>
    <div class="pasger-card">
      <div class="card-title">订单信息</div>
      <div
        class="item"
        v-for="(item, index) in orderCard"
        :key="index"
      >
        <div class="item-name">{{ item.title}}</div>
        <div class="item-desc">{{ item.desc }}</div>
      </div>
    </div>

  </div>
</template>

<script>
import ticketCard from "@/pages/book/components/ticketCard";
export default {
  data() {
    return {
      pasger: [],
      orderCard: []
    };
  },
  created() {
    let query = this.$route.query;
    this.uid = query.uid;
    let orderNo = query.orderNo;
    let data = localStorage.getItem("user-data");
    data = JSON.parse(data);
    this.data = data;
    let dataList = data.res;
    this.userInfo = dataList[this.uid].info;
    this.orderList = this.userInfo.orderList;
    this.order = this.orderList[orderNo];

    this.pasger = [
      { title: "乘机人", desc: this.order.passager.name },
      {
        title: "身份证号",
        desc: this.order.passager.idNo
      },
      {
        title: "联系电话",
        desc: this.order.passager.phone
      }
    ];

    this.orderCard = [
      {
        title: '订单金额',
        desc: '￥' + this.order.price
      },
      {
        title: '订单号',
        desc: this.order.orderId
      }
    ]
  },
  components: {
    ticketCard
  }
};
</script>

<style lang="stylus" scoped>
@import '../../stylus/common.styl';
.detail {
  text-align: start;
  padding: 25 * $px 0;
  &-status {
    font-size: 24 * $px;
    font-weight: 600;
    text-align: start;
    margin-left: 22 * $px;
    margin-bottom: 26 * $px;
  }
  .pasger-card {
    font-size: 17 * $px;
    margin-top: 20 * $px;
    padding: 10 * $px 24 * $px;
  }
  .card-title {
    text-align: center;
    font-size: 13 * $px;
    font-weight: 550;
    letter-spacing: 2 * $px;
  }
  .item {
    border-bottom: 1px solid #ddd;
    padding-bottom: 8 * $px;
    margin-bottom: 6 * $px;
    &-name {
      font-size: 18 * $px;
    }
    &-desc {
      font-size: 17 * $px;
      margin-left: 8 * $px;
      margin-top: 8 * $px;
    }
  }
}
</style>


