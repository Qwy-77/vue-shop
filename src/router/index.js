import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("views/home/Home");
const Poscast = () => import("views/poscast/Poscast");
const Spruce = () => import("views/spruce/Spruce");
const Profile = () => import("views/profile/Profile");
const Login = () => import("components/content/login/Login");
const Register = () => import("components/content/register/Register");

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
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
