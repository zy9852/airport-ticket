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
        ></input-item>
        <input-item
          :icon="passwordIcon"
          :placeholder="'请输入密码'"
          :type="'password'"
        ></input-item>
        <submit-btn :btn-text="'登录'" @to-submit="login"></submit-btn>
      </div>
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
  methods: {
    login() {
      this.$router.push({
        path: '/home'
      })
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
}
</style>


