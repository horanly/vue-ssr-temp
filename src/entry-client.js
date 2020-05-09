import { createApp } from "./main.js";
import Vue from "vue";
import ViewUI from 'view-design'
Vue.use(ViewUI);
const { app, router } = createApp();
router.onReady(() => {
  app.$mount("#app");
});
