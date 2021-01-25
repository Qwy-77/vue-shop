<template>
  <div class="CheckCode">
    <NavBar class="navbar">
      <div slot="left" @click="gobackClick">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div slot="center">手机号验证</div>
    </NavBar>

    <div class="code-text">
      <div class="code-phone">您的手机号: +86 {{ $route.params.phone }}</div>
      <div class="code-check">请输入您收到的验证码</div>
    </div>

    <div class="code-worp">
      <div class="code-item"></div>
      <div class="code-item"></div>
      <div class="code-item"></div>
      <div class="code-item"></div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "CheckCode",
  components: {
    NavBar,
  },
  props: {
    userNumber: {
      type: {},
    },
  },
  methods: {
    gobackClick() {
      this.$router.back();
    },
  },
  created() {
    console.log(this.$route.params);
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
  margin: 50px 20px;
  display: flex;
  justify-content: space-between;
}
.code-item {
  flex: 1;
  border: 1px solid #ccc;
  margin-right: 10px;
}
</style>