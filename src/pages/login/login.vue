<template>
  <div class="login">
    <div class="login-body">
      <img
        class="user-icon"
        :src="loginIcon"
      />
      <div class="login-body-desc">Sign In</div>
      <div class="login-form">
        <input-item
          :icon="userIcon"
          :placeholder="'请输入用户名'"
          @on-input="getUserName"
        ></input-item>
        <input-item
          :icon="passwordIcon"
          :placeholder="'请输入密码'"
          :type="'password'"
          @on-input="getPsd"
        ></input-item>
        <submit-btn
          :btn-text="'登录'"
          @to-submit="login"
        ></submit-btn>
      </div>
      <div
        class="extra"
        @click="toRegister"
      >还没账号？去注册</div>
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
      passwordIcon: passwordIcon
    };
  },
  created() {
    let users = JSON.parse(localStorage.getItem("users"));
    let userData = JSON.parse(localStorage.getItem("user-data"));
    this.userList = users.list;
    this.userDataList = userData.res;
  },
  methods: {
    toRegister() {
      this.$router.push({
        path: "/register"
      });
    },
    getUserName(value) {
      this.userName = value;
    },
    getPsd(value) {
      this.psd = value;
    },
    login() {
      let isRegistered = false;
      for (let i = 0; i < this.userList.length; i++) {
        // 用户名存在
        if (this.userList[i].name == this.userName) {
          isRegistered = true;
          // 密码正确，去首页
          if (this.userList[i].password == this.psd) {
            this.$router.push({
              path: "/home",
              query: {
                uid: this.userList[i].uid
              }
            });
          } else {
            // 密码不正确
            this.$toast.center("密码不正确！");
          }
        }
      }
      if (!isRegistered) {
        this.$toast.center('该用户名不存在，请先注册');
      }
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
.login {
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
    padding-bottom: 70 * $px;
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
    .login-form {
      margin-top: 24 * $px;
    }
  }
  .extra {
    position: absolute;
    margin-top: 30 * $px;
    right: 20 * $px;
    border-bottom: 1px solid #1188ff;
    color: #1188ff;
  }
}
</style>


