<template>
  <div class="Auth">
    <div class="auth-img">
      <img src="~assets/img/logo.png" alt="" />
    </div>
    <div class="auth-button">
      <button class="button-item login" @click="loginClick">手机号登录</button>
      <button class="button-item register" @click="registerClick">注册</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Auth",
  methods: {
    loginClick() {
      this.$router.push("/login");
    },
    registerClick() {
      this.$router.push("/register");
    },
  },
};
</script>

<style  scoped>
.Auth {
  margin-top: 100px;
  text-align: center;
}
.auth-button {
  margin-top: 60px;
}
.auth-img img {
  width: 100px;
  height: 100px;
}
.button-item {
  display: block;
  margin: 0 auto;
  width: 90%;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  background-color: #fff;
  color: crimson;
  border: 1px solid crimson;
}
.login {
  margin-bottom: 15px;
}
</style>