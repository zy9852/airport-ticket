<template>
  <div class="submit" @click="$emit('to-submit')">{{ btnText }}</div>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      default: '注册'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../../../stylus/common.styl";
.submit {
  width: 200 * $px;
  margin: 0 auto;
  margin-top: 25 * $px;
  padding: 12 * $px 0;
  background-color: #1188ff;
  border-radius: 5 * $px;
  font-size: 20 * $px;
  font-weight: 600;
  color: #fff;
  letter-spacing 3 * $px;
}
</style>
