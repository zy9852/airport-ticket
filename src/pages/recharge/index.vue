<template>
  <div class="recharge">
    <div class="recharge-title">账户充值</div>
    <div class="recharge-body">

      <input
        type="number"
        placeholder="输入充值金额"
        min="1"
        max="100000"
        v-model="num"
      >

      <div class="recharge-body-desc">注意: 余额仅用于钱包支付，不可提现</div>
    </div>
    <div class="recharge-footer">
      <div class="submit-btn" @click="submit">确认充值</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: null
    };
  },
  created() {
    let query = this.$route.query;
    this.uid = query.uid;
    let data = localStorage.getItem('user-data');
    data = JSON.parse(data);
    let dataList = data.res;
    this.dataList = dataList;
    this.userInfo = dataList[this.uid].info;
    console.log(this.userInfo.balance);
  },
  methods: {
    submit() {
      let reg = /^([1-9]\d{0,4}|100000)$/;
      if (!reg.test(this.num)) {
        this.$toast.center('仅能输入1-100000的整数');
        return false;
      } else {
        this.userInfo.balance = parseInt(this.userInfo.balance) + parseInt(this.num);
        this.dataList[this.uid].info = this.userInfo;
        let data = {
          res: this.dataList
        };
        data = JSON.stringify(data);
        localStorage.setItem('user-data', data);

        this.$toast.center('充值成功！');
        this.$router.back(-1);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../stylus/common.styl';
.recharge {
  padding: 30 * $px 16 * $px 0 16 * $px;
  &-title {
    text-align: start;
    font-size: 24 * $px;
    letter-spacing: 2 * $px;
    font-weight: 600;
  }
  &-body {
    margin-top: 40 * $px;
    input {
      width: 300 * $px;
      outline: none;
      border: 0;
      font-size: 20 * $px;
      text-align: center;
      border-bottom: 1px solid #ddd;
      padding-bottom: 10 * $px;
    }
    &-desc {
      margin-top: 20 * $px;
      font-size: 14 * $px;
      color: red;
      letter-spacing 1 * $px;
    }
  }
  &-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 25 * $px 16 * $px 15 * $px 16 * $px;
    box-shadow: 0 0 6 * $px #ccc;
    .submit-btn {
      color: #fff;
      font-size: 20 * $px;
      background-color: #1188ff;
      text-align center;
      padding: 12 * $px 0;
      border-radius: 8 * $px;
    }
  }
}
</style>

