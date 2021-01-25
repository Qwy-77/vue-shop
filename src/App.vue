<template>
  <div id="app">
    <router-view></router-view>
    <MainTabBar class="MainTabBar"></MainTabBar>
  </div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar/MainTabBar";
export default {
  name: "app",
  components: {
    MainTabBar,
  },
};
</script>

<style scoped>
@import "assets/css/base.css";
.MainTabBar {
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  padding: 0;
}
</style>
