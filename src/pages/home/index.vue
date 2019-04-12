<template>
  <div class="home">
    <div class="home-footer fx-row fx-v-center fx-m-between">
      <div class="home-footer-icon">
        <span class="iconfont icon-Home"></span>
      </div>
      <div class="home-footer-icon">
        <span class="iconfont icon-Home"></span>
      </div>
      <div class="home-footer-icon">
        <span class="iconfont icon-Home"></span>
      </div>
      <div class="home-footer-icon">
        <span class="iconfont icon-Home"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
@import '../../stylus/common.styl';

.home {
  &-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 15 * $px;
    box-shadow: 0 2 * $px 6 * $px #ccc;
  }
}
</style>