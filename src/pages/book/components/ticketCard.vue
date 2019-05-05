<template>
  <div class="card">
    <div class="card-head fx-v-center fx-m-between">
      <div class="fx-v-center">
        <div class="date">{{ flightDate }}</div>
        <div class="week">{{ flightWeek }}</div>
      </div>
      <div class="fx-v-center">
        <div class="dep-city">{{ depCity }}</div>
        <img
          class="airplane-icon"
          :src="airplaneIcon"
        />
        <div class="arr-city">{{ arrCity }}</div>
      </div>
    </div>
    <div class="card-body fx-row fx-v-center">
      <div class="time">
        <div class="time-dep">
          <div class="hour">{{ depTime }}</div>
          <div class="date">{{ depDate }}</div>
        </div>
        <div class="time-arr">
          <div class="hour">{{ arrTime }}</div>
          <div class="date">{{ arrDate }}</div>
        </div>
      </div>
      <div class="time-line">
        <div class="circle"></div>
        <div class="line"></div>
        <div class="circle"></div>
      </div>
      <div class="airport">
        <div class="airport-dep">{{ depAirport }}</div>
        <div class="flight-no">{{ flightNo }}</div>
        <div class="airport-arr">{{ arrAirport }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import airplaneIcon from "@/assets/iconImages/airplane.png";
export default {
  data() {
    return {
      airplaneIcon: airplaneIcon
    };
  },
  props: {
    flightDate: {
      type: String,
      default: ""
    },
    flightWeek: {
      type: String,
      default: ""
    },
    depCity: {
      type: String,
      default: ""
    },
    arrCity: {
      type: String,
      default: ""
    },
    depTime: {
      type: String,
      default: ""
    },
    depDate: {
      type: String,
      default: ""
    },
    arrTime: {
      type: String,
      default: ""
    },
    arrDate: {
      type: String,
      default: ""
    },
    depAirport: {
      type: String,
      default: ""
    },
    flightNo: {
      type: String,
      default: ""
    },
    arrAirport: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../stylus/common.styl';
.card {
  width: 346 * $px;
  margin: 0 auto;
  box-shadow: 0 0 6 * $px #ccc;
  border-radius: 12 * $px;
  &-head {
    background-color: #1188ff;
    padding: 8 * $px 15 * $px;
    color: #fff;
    font-size: 17 * $px;
    white-space: nowrap;
    border-radius: 12 * $px 12 * $px 0 0;
    .date {
      margin-right: 14 * $px;
    }
    .airplane-icon {
      display: block;
      width: 17 * $px;
      margin: 0 10 * $px;
    }
  }
  &-body {
    padding: 15 * $px;
    .time {
      margin-right: 15 * $px;
      .hour {
        font-size: 17 * $px;
      }
      .date {
        font-size: 10 * $px;
        color: #888;
      }
      &-dep {
        margin-bottom: 45 * $px;
      }
    }
    .time-line {
      .circle {
        width: 4 * $px;
        height: 4 * $px;
        border: 2 * $px solid #ccc;
        border-radius: 50%;
      }
      .line {
        height: 80 * $px;
        width: 1 * $px;
        border-left: 1 * $px dotted #ccc;
        margin-left: 3.5 * $px;
      }
    }
    .airport {
      text-align: start;
      margin-left: 12 * $px;
      &-dep, &-arr {
        font-size: 17 * $px;
      }
      .flight-no {
        padding: 5 * $px;
        text-align: center;
        font-size: 14 * $px;
        margin: 20 * $px 0;
        background-color: #ddd;
        border-radius: 5 * $px;
      }
    }
  }
}
</style>


