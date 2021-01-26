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

//验证验证码
export function getCaptchaVerify(phone, captcha) {
  return request({
    url: "/captcha/verify",
    params: {
      phone,
      captcha,
    },
  });
}

// 登录验证
export function getLoginCellphone(phone, password) {
  return request({
    url: "/login/cellphone",
    params: {
      phone,
      password,
    },
  });
}

// 获取登录状态
export function getLoginStatus() {
  return request({
    url: "/login/status",
  });
}
