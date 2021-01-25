<template>
  <div class="Register">
    <NavBar class="navbar">
      <div slot="left" @click="gobackClick">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div slot="center">手机号注册</div>
    </NavBar>

    <div class="reg-item">
      <div class="reg-input">
        <i class="el-icon-mobile-phone"></i>
        +86
        <input
          type="text"
          placeholder="请输入正确的11位手机号"
          v-model="phone"
          autofocus
        />
      </div>
      <div class="reg-input">
        <i class="el-icon-lock"></i>
        <input
          type="password"
          placeholder="设置登录密码, 不少于6位"
          v-model="password"
        />
      </div>
    </div>

    <button
      class="button"
      @click="buttonClick"
      :disabled="!isShow"
      :class="{ active: !isShow }"
    >
      下一步
    </button>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getCellphone, getCaptcha } from "api/login/login";
export default {
  name: "Register",
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
    buttonClick() {
      if (this.isShow) {
        getCellphone(this.phone).then((res) => {
          // console.log(res);
          if (res.data.exist === 1) {
            // alert("该手机号已经注册过,请直接登录");
            getCaptcha(this.phone).then((res) => {
              this.$router.push({
                path: "/checkCode",
                params: { phone: this.phone, password: this.password },
              });
            });
          } else if (res.data.exist === -1) {
            // 发送验证码请求 并携带上 手机号
            getCaptcha(this.phone).then((res) => {
              this.$router.push("/checkCode/" + this.phone);
            });
          }
        });
      }
    },
  },
  computed: {
    isShow() {
      return /^1[35789]\d{9}$/.test(this.phone) && this.password.length >= 6;
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
.active {
  background-color: #eee;
  color: #ccc;
}
</style>