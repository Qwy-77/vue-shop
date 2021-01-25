<template>
  <div class="home">
    <Homebar class="homebar"></Homebar>
    <HomeSwiper :banners="banners" class="homeSwiper"></HomeSwiper>
    <HomePageBll :iconBall="iconBall"></HomePageBll>
  </div>
</template>

<script>
import Homebar from "./childcomps/HomeBar";
import HomeSwiper from "./childcomps/HomeSwiper";
import HomePageBll from "./childcomps/HomePageBll";
import { getHomeBanner, getHomePag, getRecommend } from "api/home/home";
export default {
  name: "Home",
  components: {
    Homebar,
    HomeSwiper,
    HomePageBll,
  },
  data() {
    return {
      banners: [],
      iconBall: [],
    };
  },
  created() {
    // 请求首页轮播图的数据
    this.getHomeBanner();
    // 圆形图标数据
    this.getHomePag();
    // 每日推荐歌单数据
    // this.getRecommend();
  },
  methods: {
    // 轮播图数据
    getHomeBanner(type) {
      getHomeBanner(type).then((res) => {
        // console.log(res);
        this.banners = res.data.banners;
      });
    },
    // 圆形图标数据
    getHomePag() {
      getHomePag().then((res) => {
        // console.log(res);
        this.iconBall = res.data.data.slice(0, 4);
      });
    },
    //每日推荐歌单数据
    getRecommend() {
      getRecommend().then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
<style  scoped>
.homebar {
  padding-bottom: 8px;
}
.homeSwiper {
  padding: 0 8px;
}
</style>
