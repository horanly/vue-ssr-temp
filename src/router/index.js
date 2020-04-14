// 路由总配置

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import pages from "./home.js";

export function createRouter() {
  return new VueRouter({
    mode: "hash",
    routes: [
      {
        path: "*",
        redirect: "/vue"
      },
      ...pages
    ]
  });
}
