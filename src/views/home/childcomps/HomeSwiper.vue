<template>
  <div class="HomeSwiper">
    <Swiper>
      <SwiperItem
        v-for="(item, index) in banners"
        :key="index"
        class="swiper-item"
      >
        <a :href="item.scm">
          <img :src="item.imageUrl" alt="" />
          <span
            class="item-title"
            :style="{ backgroundColor: item.titleColor }"
            >{{ item.typeTitle }}</span
          >
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style  scoped>
.swiper-item {
  position: relative;
}
.swiper-item img {
  border-radius: 10px;
}
.swiper-item span {
  position: absolute;
  right: 0;
  bottom: 4px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  padding: 0 8px;
  border-radius: 10px 0 10px 0;
  font-size: 12px;
  color: #fff;
}
</style>