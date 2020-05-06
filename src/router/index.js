import Vue from "vue";
import Router from "vue-router";

// const VuePage = () => import(/* webpackChunkName: "vue" */ '@/views/vue.vue')
// const Vuex = () => import(/* webpackChunkName: "vuex" */ '@/views/vuex.vue')
// const VueCli3 = () => import(/* webpackChunkName: "vueCli3" */ '@/views/vueCli3.vue')
// const VueSSR = () => import(/* webpackChunkName: "vueSSR" */ '@/views/vueSSR.vue')

import VuePage from '@/views/vue.vue'
import Vuex from '@/views/vuex.vue'
import VueCli3 from '@/views/vueCli3.vue'
import VueSSR from '@/views/vueSSR.vue'


Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        redirect: "/vue"
      },
      {
        path: "/vue",
        name: "vue",
        component: VuePage
      },
      {
        path: "/vuex",
        name: "vuex",
        component: Vuex
      },
      {
        path: "/vueCli3",
        name: "vueCli3",
        component: VueCli3
      },
      {
        path: "/vueSSR",
        name: "vueSSR",
        component: VueSSR
      }
    ]
  });
}
