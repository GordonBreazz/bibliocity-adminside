import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    // сопоставляется со всеми остальными маршрутами
    path: "/404",
    name: "404",
    component: 404,
    component: () => import(/* webpackChunkName: "about" */ "../views/404.vue")
  },

  {
    path: "*",
    redirect: "/404"
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
