import Vue from "vue";
import Router from "vue-router";

const VUE = () => import(/* webpackChunkName: "vue" */ '@/views/vue.vue')
const Vuex = () => import(/* webpackChunkName: "vuex" */ '@/views/vuex.vue')
const vueCli3 = () => import(/* webpackChunkName: "vueCli3" */ '@/views/vueCli3.vue')
const vueSSR = () => import(/* webpackChunkName: "vueSSR" */ '@/views/vueSSR.vue')

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        redirect: "vue"
      },
      {
        path: "/vue",
        name: "vue",
        component: VUE
      },
      {
        path: "/vuex",
        name: "vuex",
        component: Vuex
      },
      {
        path: "/vueCli3",
        name: "vueCli3",
        component: vueCli3
      },
      {
        path: "/vueSSR",
        name: "vueSSR",
        component: vueSSR
      }
    ]
  });
}
