import { request } from "../index";

export function getHomeBanner(type) {
  return request({
    url: "banner",
    params: {
      type,
    },
  });
}
