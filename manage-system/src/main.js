import Vue from "vue";
import "./assets/styles/reset.css"; //初始化样式
import "./assets/styles/global.scss"; //公共样式
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import App from "./App.vue";
import router from "./router/router";
import store from "./store";
// import "./router/permission"; //路由判断权限
import service from "./service/index.js";
import "./components/Icon/index.js";
// import * as filters from './filters'
Vue.config.productionTip = false;
Vue.prototype.$http=service;
Vue.use(ElementUI);

// 注册全局的过滤器
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
