<template>
  <div class="IconBall">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "IconBall",
};
</script>

<style  scoped>
.IconBall {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>