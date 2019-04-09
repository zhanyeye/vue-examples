import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/example01",
      // 延迟加载组件
      component: () => import("@/views/example01/Example01.vue")
    }
  ]
});
