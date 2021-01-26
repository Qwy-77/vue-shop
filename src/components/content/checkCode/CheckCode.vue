<template>
  <div class="CheckCode">
    <NavBar class="navbar">
      <div slot="left" @click="gobackClick">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div slot="center">手机号验证</div>
    </NavBar>

    <div class="code-text">
      <div class="code-phone">您的手机号: +86 {{ user.phone | isShow }}</div>
      <div class="code-check">请输入您收到的验证码</div>
    </div>

    <div class="code-worp">
      <div class="code-item" v-for="(item, index) in captchaList" :key="index">
        {{ item }}
      </div>
    </div>

    <input type="tel" ref="input" v-model="captcha" class="ipt" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getCaptchaVerify } from "api/login/login";
export default {
  name: "CheckCode",
  components: {
    NavBar,
  },
  data() {
    return {
      user: "",
      captcha: [],
      captchaList: ["", "", "", ""],
    };
  },
  methods: {
    gobackClick() {
      this.$router.back();
    },
  },
  created() {
    this.user = this.$route.params;
  },
  mounted() {
    this.$refs.input.focus();
  },
  watch: {
    captcha(newValue, oldValue) {
      Object.assign(this.captchaList, [...newValue]);
      if (newValue.length === 4) {
        // 验证 验证码
        getCaptchaVerify(this.user.phone, newValue).then((res) => {
          if (res.data.code === 200) {
            // 说明验证码正确  跳转到登录界面
            this.$router.push({ name: "Login" });
          } else if (res.data.code === 400) {
            alert("验证码错误,请重新输入");
          }
        });
      }
    },
  },
  filters: {
    isShow(value) {
      value = value + "";
      return value.substring(0, 3) + "****" + value.substr(value.length - 4);
    },
  },
};
</script>

<style  scoped>
.navbar {
  background-color: red;
  color: #fff;
}
.el-icon-arrow-left {
  font-size: 24px;
  margin-top: 8px;
}
.code-text {
  margin: 15px 20px;
}
.code-worp {
  margin: 30px 20px 10px;
  display: flex;
  justify-content: space-between;
}
.code-item {
  flex: 1;
  border-bottom: 1px solid #ccc;
  margin-right: 10px;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.ipt {
  width: 0;
  height: 0;
  border: 0;
  outline: none;
}
</style>