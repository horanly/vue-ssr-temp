import Vue from "vue";
import App from "./App.vue";

import { createRouter } from "./router";
import { createStore } from "./store";

import './assets/css/main.scss'

// import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css';
import moment from 'moment'
import tab from '@/utils/tab'

// if (typeof window !== 'undefined') {
//   require('view-design/dist/styles/iview.css');
//   const ViewUI = require('view-design');
//   Vue.use(ViewUI);
// }

// Vue.use(ViewUI);
// 设置使用中文
moment.locale('zh-cn')

Vue.config.productionTip = false
Vue.prototype.$moment = moment
Vue.prototype.$tab = tab

Vue.config.productionTip = false;

export function createApp() {
  // 创建 router 实例
  const router = createRouter();
  const store = createStore();

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });
  return { app, router };
}
