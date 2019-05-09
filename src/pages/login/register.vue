<template>
  <div class="register">
    <div class="register-body">
      <img
        class="user-icon"
        :src="loginIcon"
      />
      <div class="register-body-desc">Register</div>
      <div class="register-form">
        <input-item
          :icon="userIcon"
          :placeholder="'请输入用户名'"
          :verify-desc="'用户名4-16位，由字母、数字、下划线、减号组成'"
          :show-verify-desc="showUserVerify"
          @on-input="checkUserName"
        ></input-item>
        <input-item
          :icon="passwordIcon"
          :placeholder="'请输入密码'"
          :verify-desc="'密码8-16位，且仅能由字母、数字组成'"
          :show-verify-desc="showPsdVerify"
          :type="'password'"
          @on-input="checkPassword"
        ></input-item>
        <input-item
          :icon="passwordIcon"
          :placeholder="'确认密码'"
          :type="'password'"
          :show-verify-desc="showRepsdVerify"
          :verify-desc="'两次密码不一致'"
          @on-input="checkRepsd"
        ></input-item>
        <submit-btn
          :btn-text="'注册'"
          @to-submit="register"
        ></submit-btn>
      </div>
      <div class="extra" @click="toLogin">已有账号？去登录</div>
    </div>
  </div>
</template>

<script>
import loginIcon from "@/assets/iconImages/login.png";
import userIcon from "@/assets/iconImages/user.png";
import passwordIcon from "@/assets/iconImages/password.png";
import inputItem from "./components/inputItem";
import submitBtn from "./components/submitButton";
export default {
  data() {
    return {
      loginIcon: loginIcon,
      userIcon: userIcon,
      passwordIcon: passwordIcon,
      showUserVerify: false,
      showPsdVerify: false,
      showRepsdVerify: false
    };
  },
  created() {
    let users = localStorage.getItem('users');
    users = JSON.parse(users) || { list: [] };
    this.userList = users.list || [];
    // console.log(this.userList);
  },
  methods: {
    // 验证用户名
    checkUserName(value) {
      this.showUserVerify = true;
      let pattern = /^[a-zA-Z0-9_-]{4,16}$/;
      if (pattern.test(value)) {
        this.showUserVerify = false;
        this.isUserNameChecked = true;
        this.userName = value;
      }
    },
    // 验证密码
    checkPassword(value) {
      this.showPsdVerify = true;
      let pattern = /^[a-zA-Z0-9]{8,16}$/;
      if (pattern.test(value)) {
        this.showPsdVerify = false;
        this.isPsdChecked = true;
        this.password = value;
      }
    },
    // 确认密码
    checkRepsd(value) {
      this.showRepsdVerify = true;
      if (value == this.password) {
        this.showRepsdVerify = false;
        this.isRepsdChecked = true;
      }
    },
    // 注册
    register() {
      if (this.isUserNameChecked && this.isPsdChecked && this.isRepsdChecked) {
        let user = {
          name: this.userName,
          uid: this.userList.length,
          password: this.password,
        };
        this.userList.push(user);
        let param = {
          list: this.userList
        };
        param = JSON.stringify(param);
        localStorage.setItem('users', param);

        let userData = localStorage.getItem('user-data');
        userData = JSON.parse(userData) || { res: [] };
        let userDataList = userData.res;
        let this_user_data = {
          uid: user.uid,
          info: {
            balance: 0
          }
        };
        userDataList.push(this_user_data);
        let dataParam = {
          res: userDataList
        }
        dataParam = JSON.stringify(dataParam);
        localStorage.setItem('user-data', dataParam);
        
        this.$toast.bottom("注册成功");
        this.$router.push({
          path: "/login"
        });
      }
    },
    toLogin() {
      this.$router.push({
          path: "/login"
        });
    }
  },
  components: {
    inputItem,
    submitBtn
  }
};
</script>

<style lang="stylus" scoped>
@import '../../stylus/common.styl';
.register {
  height: 100vh;
  padding-top: 150 * $px;
  box-sizing: border-box;
  background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
  &-body {
    width: 340 * $px;
    padding-bottom: 20 * $px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 10 * $px;
    box-shadow: 0 0 8 * $px #ccc;
    margin: 0 auto;
    position: relative;
    padding-top: 45 * $px;
    padding-bottom 70 * $px;
    .user-icon {
      display: block;
      width: 60 * $px;
      height: 60 * $px;
      position: absolute;
      top: -30 * $px;
      left: 140 * $px;
    }
    &-desc {
      color: #aaa;
      font-weight: 600;
      font-size: 24 * $px;
      letter-spacing: 1 * $px;
    }
    .register-form {
      margin-top: 24 * $px;
    }
    .extra {
      position: absolute;
      margin-top: 30 * $px;
      right: 20 * $px;
      border-bottom: 1px solid #1188ff;
      color: #1188ff;
    }
  }
}
</style>

