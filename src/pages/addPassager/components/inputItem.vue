<template>
  <div class="item">
    <div class="item-name">{{ itemName }}</div>
    <div class="item-content">
      <input
        type="text"
        :placeholder="placeholder"
        v-model="inputValue"
        v-if="isInput"
        @input="onInput"
      >
      <div
        class="item-content-block"
        :class="{placeholder: itemContent == ''}"
        v-if="isBlock"
        @click="$emit('pick-value')"
      >{{ itemContent || placeholder }}</div>
    </div>
  </div>
</template>

<script>
// import { PopupRadio } from "vux";
export default {
  data() {
    return {
      inputValue: "",
      genderList: ["男", "女"]
    };
  },
  props: {
    itemName: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    isInput: {
      type: Boolean,
      default: true
    },
    itemContent: {
      type: String,
      default: ""
    },
    isBlock: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onInput() {
      this.$emit("on-input", this.inputValue);
    }
  },
  // components: {
  //   PopupRadio,
  // }
};
</script>

<style lang="stylus" scoped>
@import '../../../stylus/common.styl';
.item {
  margin-bottom: 20 * $px;
  &-name {
    text-align: start;
  }
  &-content {
    input {
      width: 100%;
      font-size: 18 * $px;
      margin-top: 15 * $px;
      border: 0;
      outline: none;
      border-bottom: 1px solid #ddd;
      padding-left: 12 * $px;
      padding-bottom: 8 * $px;
    }
    input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
      color: #aaa;
      font-size: 16 * $px;
    }
    .placeholder {
      color: #aaa;
      font-size: 16 * $px;
    }
    &-block {
      text-align: start;
      width: 100%;
      padding-left: 12 * $px;
      margin-top: 12 * $px;
      border-bottom: 1px solid #ddd;
      padding-bottom: 6 * $px;
      font-size: 18 * $px;
    }
  }
}
</style>



