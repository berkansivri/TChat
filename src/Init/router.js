import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue")
    },
    {
      path: "/Login",
      name: "Login",
      component: () => import("../views/Login.vue")
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});

export default router;
