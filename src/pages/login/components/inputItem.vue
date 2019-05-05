<template>
  <div class="item-wrap">
    <div class="item fx-row fx-v-center">
      <div class="item-icon">
        <img :src="icon" />
      </div>
      <div class="item-content">
        <input
          :type="type"
          :placeholder="placeholder"
          v-model="value"
          @input="onInput"
        >
      </div>
    </div>
    <div class="verify" v-if="showVerifyDesc">{{ verifyDesc }}</div>
  </div>
</template>

<script>
export default {
  props: {
    icon: null,
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    verifyDesc: {
      type: String,
      default: ""
    },
    showVerifyDesc: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onInput() {
      this.$emit("on-input", this.value);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../stylus/common.styl';
.item-wrap {
  margin-bottom: 12 * $px;
  .item {
    width: 280 * $px;
    height: 48 * $px;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 3 * $px 0;
    margin: 0 auto;
    border-radius: 8 * $px;
    box-sizing: border-box;
    &-icon {
      width: 50 * $px;
      padding: 3 * $px 0;
      border-right: 1px solid #ddd;
      img {
        width: 30 * $px;
        height: 30 * $px;
        display: block;
        margin-left: 10 * $px;
      }
    }
    &-content {
      margin-left: 10 * $px;
      input {
        width: 210 * $px;
        height: 42 * $px;
        margin: 0;
        padding: 0;
        border: none;
        padding-left: 8 * $px;
        font-size: 17 * $px;
        background: transparent;
        outline: none;
        letter-spacing: 1 * $px;
      }
    }
  }
  .verify {
    margin-left: 45 * $px;
    margin-top: 2 * $px;
    color: red;
    font-size: 12 * $px;
    text-align: start;
  }
}
</style>


