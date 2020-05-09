import Vue from "vue";
import Router from "vue-router";


// import VuePage from '@/views/vue.vue'
// import Vuex from '@/views/vuex.vue'
// import VueCli3 from '@/views/vueCli3.vue'
// import VueSSR from '@/views/vueSSR.vue'
// import Axios from '@/views/axios.vue'

import homePage from '@/views/cnode/index.vue'
import Topic from '@/views/cnode/topic.vue'
import User from '@/views/cnode/user.vue'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        name: "home",
        component: homePage
      },
      {
        path: '/topic/:id',
        name: 'topic',
        component: Topic
      },
      {
        path: '/user/:id',
        name: 'user',
        component: User
      },
      {
        path: '/topic',
        redirect: '/'
      },
      {
        path: '/user',
        redirect: '/'
      }



      // {
      //   path: "/",
      //   redirect: "/vue"
      // },
      // {
      //   path: "/vue",
      //   name: "vue",
      //   component: VuePage
      // },
      // {
      //   path: "/vuex",
      //   name: "vuex",
      //   component: Vuex
      // },
      // {
      //   path: "/vueCli3",
      //   name: "vueCli3",
      //   component: VueCli3
      // },
      // {
      //   path: "/vueSSR",
      //   name: "vueSSR",
      //   component: VueSSR
      // },
      // {
      //   path: "/axios",
      //   name: "axios",
      //   component: Axios
      // }
    ]
  });
}
