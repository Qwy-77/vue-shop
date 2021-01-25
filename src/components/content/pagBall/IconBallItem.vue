<template>
  <div class="IconBallItem">
    <div class="item-icon"><slot name="item-icon"></slot></div>
    <div class="item-text"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "IconBallItem",
};
</script>

<style  scoped>
.IconBallItem {
  flex: 1;
  text-align: center;
  padding: 0 10px;
}
.item-icon {
  margin: 0 auto;
}
.item-text {
  font-size: 14px;
  margin-top: 5px;
}
</style>