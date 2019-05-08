<template>
  <div class="passager">
    <div class="passager-header fx-v-center fx-m-between" @click="addPassager">
      <div class="desc">添加乘机人</div>
      <img :src="addIcon" alt="">
    </div>
    <div class="passager-body">
      <passager-item></passager-item>
    </div>
  </div>
</template>

<script>
import addIcon from "@/assets/iconImages/add.png";
import passagerItem from "./components/passagerItem";
export default {
  data() {
    return {
      addIcon: addIcon
    }
  },
  methods: {
    addPassager() {
      this.$router.push({
        path: '/addPassager'
      })
    }
  },
  components: {
    passagerItem
  }
}
</script>

<style lang="stylus" scoped>
@import "../../stylus/common.styl";
.passager {
  padding: 20 * $px 15 * $px;
  &-header {
    padding: 10 * $px 0 15 * $px 0;
    border-bottom: 1px solid #eee;
    .desc {
      font-size: 19 * $px;
    }
    img {
      display: block;
      width: 30 * $px;
      height: 30 * $px;
    }
  } 
}
</style>

