<template>
  <div class="TabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style  scoped>
.TabBar {
  /* 基本样式 */
  width: 100%;
  height: 49px;
  background-color: #f6f6f6;
  border-top: 1px solid #eee;
  box-shadow: 0px -1px 1px rgba(150, 150, 150, 0.08);

  /* 定位相关 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  /* 弹性布局 */
  display: flex;
  justify-content: space-between;
}
</style>