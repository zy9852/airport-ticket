<template>
  <div class="tab">
    <div
      class="tab-name"
      v-for="(tab, index) in tabs"
      :key="index"
      :class="{active: clickedIndex === index}"
      @click="clickedIndex = index"
    >{{ tab }}</div>
    <div
      class="tab-body"
      v-if="clickedIndex === 0"
    >
      <div class="label-group fx-row fx-v-center fx-m-between fx-wrap">
        <span
          v-for="(item, index) in domesticList"
          :key="index"
          @click="pickCity(item, index)"
          :class="{ checked: itemIndex == index }"
        >{{ item.name }}</span>
      </div>
    </div>
    <div
      class="tab-body"
      v-if="clickedIndex === 1"
    >
      <div class="label-group fx-row fx-v-center fx-m-between fx-wrap">
        <span
          v-for="(item, index) in interList"
          :key="index"
          @click="pickCity(item, index)"
          :class="{ checked: itemIndex == index }"
        >{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clickedIndex: 0,
      itemIndex: 1000
    };
  },
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    domesticList: {
      type: Array,
      default: () => []
    },
    interList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    pickCity(item, index) {
      this.itemIndex = index;
      this.$emit('pick-city', item);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../stylus/common.styl';
.tab {
  &-name {
    width: 50%;
    color: #ccc;
    display: inline-block;
    &.active {
      color: skyblue;
    }
    &::after {
      content: '';
      display: block;
      width: 50 * $px;
      margin: 0 auto;
      margin-top: 5 * $px;
    }
    &.active::after {
      background-color: skyblue;
      width: 100 * $px;
      height: 1 * $px;
      transition: width 0.5s;
      -moz-transition: width 0.5s;
      -webkit-transition: width 0.5s;
      -o-transition: width 0.5s;
    }
  }
  &-body {
    padding: 8 * $px 14 * $px;
    .label-group {
      margin-top: 10 * $px;
      span {
        width: 75 * $px;
        height: 40 * $px;
        line-height: 40 * $px;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 3 * $px;
        margin-bottom: 8 * $px;
      }
      .checked {
        background-color: skyblue;
      }
    }
  }
}
</style>


