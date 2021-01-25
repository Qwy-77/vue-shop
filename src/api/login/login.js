import { request } from "../index";

// 验证手机号是否注册
export function getCellphone(phone) {
  return request({
    url: "/cellphone/existence/check",
    params: {
      phone,
    },
  });
}

// 发送验证码
export function getCaptcha(phone) {
  return request({
    url: "/captcha/sent",
    params: {
      phone,
    },
  });
}
