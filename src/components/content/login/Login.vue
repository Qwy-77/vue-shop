<template>
  <div class="Login">
    <NavBar class="navbar">
      <div slot="left" @click="gobackClick"><i class="el-icon-arrow-left"></i></div>
      <div slot="center">手机号登录</div>
    </NavBar>

    <div class="reg-item">
      <div class="reg-input">
        <i class="el-icon-mobile-phone"></i>
        <input type="text" placeholder="输入手机号" />
      </div>
      <div class="reg-input">
        <i class="el-icon-lock"></i>
        <input type="password" placeholder="输入密码" />
      </div>
      <div class="reg-input">
        <i class="el-icon-lock"></i>
        <input type="password" placeholder="确认密码" />
      </div>
    </div>

    <button class="button">登录</button>
  </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Login",
  components: {
    NavBar,
  },
  methods: {
    gobackClick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: red;
  color: #fff;
}
.el-icon-arrow-left {
  font-size: 24px;
  margin-top: 8px;
}
.reg-item {
  margin: 8px 10px;
}
.reg-input {
  height: 44px;
  line-height: 44px;
  border-bottom: 1px solid #eee;
  font-weight: 700;
}
.reg-input input {
  outline: none;
  border: none;
  margin-left: 5px;
  font-size: 15px;
}
.button {
  display: block;
  width: 90%;
  height: 40px;
  margin: 20px auto;
  background-color: red;
  border: none;
  border-radius: 20px;
  color: #fff;
}
</style>