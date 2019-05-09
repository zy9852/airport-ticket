<template>
  <div class="add-pasger">
    <div class="add-pasger-header">
      <div class="add-pasger-header-title">添加新乘机人</div>
      <div class="add-pasger-header-desc">姓名必须与所有证件保持一致</div>
    </div>
    <div class="add-pasger-body">
      <input-item
        :item-name="'身份证号'"
        :placeholder="'请务必与证件保持一致'"
        @on-input="getIdNumber"
      ></input-item>
      <input-item
        :item-name="'中文姓名'"
        :placeholder="'与乘机人证件一致'"
        @on-input="getName"
      ></input-item>
      <input-item
        :item-name="'出生日期'"
        :placeholder="'1998-05-01'"
        :is-input="false"
        :is-block="true"
        :item-content="birth"
        @pick-value="showDate"
      ></input-item>
      <input-item
        :item-name="'性别'"
        :is-input="false"
        :is-block="true"
        :placeholder="'女'"
        :item-content="gender"
        @pick-value="showGender = true"
      ></input-item>
      <input-item
        :item-name="'手机号'"
        :placeholder="'接收消息通知'"
        @on-input="getPhone"
      ></input-item>
    </div>
    <div class="add-pasger-footer">
      <div class="add-pasger-footer-btn" @click="saveInfo">保存</div>
    </div>
    <popup-picker
      v-if="showGender"
      :show.sync="showGender"
      :data="genderList"
      :confirm-text="'确定'"
      :popup-title="'请选择性别'"
      :popup-style="{'width': '96%'}"
      @on-change="getNameValues"
    ></popup-picker>
  </div>
</template>

<script>
import inputItem from "./components/inputItem";
import { PopupPicker } from "vux";
export default {
  data() {
    return {
      birth: "",
      gender: "",
      genderList: [["男", "女"]],
      showGender: false
    };
  },
  components: {
    inputItem,
    PopupPicker
  },
  methods: {
    showDate() {
      const _this = this;
      this.$vux.datetime.show({
        cancelText: "取消",
        confirmText: "确认",
        minYear: 1919,
        maxYear: 2019,
        value: "",
        onConfirm() {
          _this.birth = this.value;
        }
      });
    },
    getNameValues(value) {
      this.gender = value[0];
    },
    // 身份证号
    getIdNumber(value) {
      this.idNumber = value;
    },
    // 姓名
    getName(value) {
      this.name = value;
    },
    // 手机号
    getPhone(value) {
      this.phone = value;
    },
    saveInfo() {
      // 验证身份证号
      let regId = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if (!regId.test(this.idNumber)) {
        this.$toast.center('身份证号填写有误');
        return false;
      }
      // 验证姓名
      let regName =/^[\u4e00-\u9fa5]{2,4}$/; 
      if (!regName.test(this.name)) {
        this.$toast.center('姓名填写有误');
        return false;
      }
      // 验证手机号
      let regPhone = /^1[3|4|5|8][0-9]\d{4,8}$/;
      if (!regPhone.test(this.phone)) {
        this.$toast.center('手机号填写有误');
        return false;
      }
    }
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
  &-body {
    padding: 20 * $px 17 * $px;
  }
  &-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 25 * $px 15 * $px 15 * $px 20 * $px;
    border-top: 1px solid #eee;
    box-shadow: 0 0 6 * $px #ccc;
    &-btn {
      padding: 10 * $px;
      text-align: center;
      color: #fff;
      background-color: #1188ff;
      border-radius: 8 * $px;
      font-size: 20 * $px;
    }
  }
}
</style>



