<template>
  <div class="Homebar">
    <NavBar class="navbar">
      <div slot="left" class="navbar-left"><i class="el-icon-s-fold"></i></div>
      <div slot="center" class="navbar-center">
        <div class="navbar-search">
          <i class="el-icon-search"></i>
          <input type="text" placeholder="大家都在搜 小苹果" />
        </div>
      </div>
      <div slot="right" class="navbar-right">
        <i class="el-icon-microphone"></i>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Homebar",
  components: {
    NavBar,
  },
};
</script>

<style  scoped>
.navbar-center {
  background-color: #f6f6f6;
  border-radius: 22px;
}
.navbar-center input {
  border: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 16px;
  margin-left: 2px;
}
.el-icon-search {
  font-size: 16px;
}
.el-icon-microphone,
.el-icon-s-fold {
  font-size: 25px;
  margin-top: 7px;
}
</style>