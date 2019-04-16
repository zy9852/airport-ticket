<template>
  <div class="tab-bar">
    <div
      class="tab-bar-name"
      v-for="(tab, index) in tabs"
      :key="index"
    >{{ tab }}</div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => {}
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../stylus/common.styl';
</style>


