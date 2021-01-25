<template>
  <div class="HomePageBll">
    <IconBall>
      <IconBallItem v-for="(item, index) in iconBall" :key="index">
        <div slot="item-icon" class="item-icon">
          <img :src="item.iconUrl" alt="" />
        </div>
        <div slot="item-text">{{ item.name }}</div>
      </IconBallItem>
    </IconBall>
  </div>
</template>

<script>
import { IconBall, IconBallItem } from "components/content/pagBall/index";
export default {
  name: "HomePageBll",
  components: {
    IconBall,
    IconBallItem,
  },
  props: {
    iconBall: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.HomePageBll {
  padding: 10px 0;
  border-bottom: 1px solid #eeee;
}
.item-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgb(253, 133, 153);
}
.item-icon img {
  display: block;
  width: 40px;
  height: 40px;
  color: red;
}
</style>