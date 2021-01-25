import { request } from "../index";

// 首页轮播图数据
export function getHomeBanner(type) {
  return request({
    url: "banner",
    params: {
      type,
    },
  });
}

// 首页图标数据
export function getHomePag() {
  return request({
    url: "/homepage/dragon/ball",
  });
}

// 每日推荐歌单数据
export function getRecommend() {
  return request({
    url: "/recommend/resource",
  });
}
