<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style  scoped>
.nav-bar {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  /* box-shadow: 0px 3px 1px rgba(150, 150, 150, 0.08); */
}
.left,
.right {
  width: 40px;
}
.center {
  flex: 1;
}
</style>