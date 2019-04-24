import Vue from "vue"; //引入Vue (在 node_modules中)
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router, //挂载路由模块
  render: h => h(App) //渲染APP组件
}).$mount("#app");
// 创建一个vue对象，将vue对象挂载到页面的#app结点
