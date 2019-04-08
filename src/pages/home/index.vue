<template>
  <div class="home fx-row fx-v-center fx-m-between">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
@import '../../stylus/common.styl';
.home {
  background-color: #ccc;
  .box {
    width: 100px;
    height: 50px;
    background-color: skyblue;
  }
}
</style>