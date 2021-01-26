<template>
  <div class="Login">
    <NavBar class="navbar">
      <div slot="left" @click="gobackClick">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div slot="center">手机号登录</div>
    </NavBar>

    <div class="reg-item">
      <div class="reg-input">
        <i class="el-icon-mobile-phone"></i>
        <input type="text" placeholder="输入手机号" v-model="phone" />
      </div>
      <div class="reg-input">
        <i class="el-icon-lock"></i>
        <input type="password" placeholder="输入密码" v-model="password" />
      </div>
    </div>

    <button class="button" @click="btnClick">登录</button>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getLoginCellphone } from "api/login/login";
export default {
  name: "Login",
  components: {
    NavBar,
  },
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
    gobackClick() {
      this.$router.back();
    },
    // 登录按钮
    btnClick() {
      getLoginCellphone(this.phone, this.password).then((res) => {
        if (res.data.code === 200) {
          // 登陆成功跳转到 首页
          this.$router.push({ name: "Home" });
        } else {
          //登录失败
          alert("手机号或密码错误,请重新输入");
        }
      });
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