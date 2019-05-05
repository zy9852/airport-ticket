<template>
  <div class="card">
    <div class="card-title">{{ title }}</div>
    <div class="card-list">
      <div
        class="card-list-item fx-row fx-v-center fx-m-between"
        v-for="(item, index) in cardList"
        :key="index"
      >
        <div class="card-list-item-desc">
          <div class="city-group fx-row fx-v-center">
            <div class="dep">{{ item.depCity }}</div>
            <img :src="arrowIcon" />
            <div class="arr">{{ item.arrCity }}</div>
          </div>
          <div class="time-group fx-row fx-v-center">
            <img :src="calendar" />
            <div class="date">{{ item.date }}</div>
            <div class="week">{{ item.week}}</div>
          </div>
        </div>
        <div
          class="card-list-item-buy-desc"
          @click="$emit('to-book', item)"
        >
          <div class="item-price">￥{{ item.price }}</div>
          <div class="item-btn">预订</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cityArrow from "@/assets/iconImages/timeArrow.png";
import calendarIcon from "@/assets/iconImages/calendarIcon.png";
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    cardList: {
      type: Array,
      default: () => {}
    }
  },
  data() {
    return {
      arrowIcon: cityArrow,
      calendar: calendarIcon
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../stylus/common.styl';
.card {
  background-color: #fff;
  padding: 10 * $px;
  padding-top: 24 * $px;
  border-radius: 10 * $px;
  margin-bottom: 30 * $px;
  &-title {
    width: 100 * $px;
    height: 30 * $px;
    text-align: center;
    margin: 0 auto;
    background-color: #4ac29a;
    line-height: 30 * $px;
    color: #fff;
    opacity: 0.8;
    border-radius: 5 * $px;
  }
  &-list {
    margin-top: 25 * $px;
    &-item {
      margin: 0 8 * $px 10 * $px;
      border-bottom: 1px solid #ddd;
      &-desc {
        .city-group {
          font-size: 17 * $px;
          letter-spacing: 1 * $px;
          white-space: nowrap;
          img {
            display: block;
            width: 36 * $px;
            height: 5 * $px;
            margin: 0 5 * $px;
          }
        }
        .time-group {
          font-size: 14 * $px;
          color: #888;
          margin-top: 6 * $px;
          margin-bottom: 8 * $px;
          img {
            displsy: block;
            width: 14 * $px;
            margin-right: 5 * $px;
          }
          .date {
            margin-right: 17 * $px;
          }
        }
      }
      &-buy-desc {
        width: 60 * $px;
        text-align: center;
        margin-bottom: 5 * $px;
        .item-price {
          font-size: 20 * $px;
          color: #ff851b;
        }
        .item-btn {
          height: 25 * $px;
          background-color: #39cccc;
          border-radius: 5 * $px;
          line-height: 25 * $px;
          color: #fff;
          font-size: 14 * $px;
          font-weight: 600;
          letter-spacing: 2 * $px;
        }
      }
    }
  }
}
</style>

