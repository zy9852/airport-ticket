<template>
  <div class="add-pasger">
    <div class="add-pasger-header">
      <div class="add-pasger-header-title">添加新乘机人</div>
      <div class="add-pasger-header-desc">姓名必须与所有证件保持一致</div>
    </div>
    <div class="add-pasger-body">
      <input-item></input-item>
    </div>
  </div>
</template>

<script>
import inputItem from './components/inputItem';
export default {
  data() {
    return {};
  },
  components: {
    inputItem
  }
};
</script>

<style lang="stylus" scoped>
@import '../../stylus/common.styl';
.add-pasger {
  padding-top: 20 * $px;
  &-header {
    text-align: start;
    &-title {
      margin-left: 15 * $px;
      font-size: 26 * $px;
      font-weight: 600;
      letter-spacing: 2 * $px;
    }
    &-desc {
      margin-left: 20 * $px;
      margin-top: 7 * $px;
    }
  }
}
</style>



