import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("views/home/Home");
const Poscast = () => import("views/poscast/Poscast");
const Spruce = () => import("views/spruce/Spruce");
const Profile = () => import("views/profile/Profile");
const Auth = () => import("components/content/auth/Auth");
const Login = () => import("components/content/login/Login");
const Register = () => import("components/content/register/Register");
const CheckCode = () => import("components/content/checkCode/CheckCode");

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/Home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/poscast",
    name: "Poscast",
    component: Poscast,
  },
  {
    path: "/spruce",
    name: "Spruce",
    component: Spruce,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/checkCode/:phone",
    name: "CheckCode",
    component: CheckCode,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
