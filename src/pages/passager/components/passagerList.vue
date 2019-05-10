<template>
  <div class="list">
    <div
      class="item"
      v-for="(item, index) in pasgerList"
      :key="index"
      @click="$emit('pick-item', item)"
    >
      <div class="item-name">乘机人</div>
      <div class="item-content">
        <div class="pasger-name">{{ item.name }}</div>
        <div class="pasger-id-no">身份证：{{ item.idNo }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    pasgerList: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../stylus/common.styl';
.list {
  padding: 30 * $px 15 * $px;
  .item {
    text-align: start;
    border-bottom: 1px solid #ccc;
    padding-bottom: 5 * $px;
    margin-bottom: 15 * $px;
    &-name {
      font-size: 19 * $px;
      color: #aaa;
      margin-bottom: 15 * $px;
    }
    &-content {
      margin-left: 10 * $px;
      font-size: 17 * $px;
      .pasger-name {
        letter-spacing: 2 * $px;
        margin-bottom: 8 * $px;
      }
    }
  }
}
</style>
