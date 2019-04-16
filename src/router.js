import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/example01",
      // 延迟加载组件
      component: () => import("@/views/example01/Example01.vue")
    },
    {
      path: "/example02",
      component: () => import("@/views/example02/Example02.vue")
    },
    {
      path: "/example03",
      component: () => import("@/views/example03/Example03.vue")
    },
    {
      path: "/example03-02",
      component: () => import("@/views/example03/Example03-02.vue")
    },
    {
      path: "/example04",
      component: () => import("@/views/example04/Example04.vue")
    },
    {
      path: "/example05/students/:sid/homeworks/:hid",
      component: () => import("@/views/example05/Example05.vue")
    },
    {
      path: "/example06-01",
      component: () => import("@/views/example06/Example06-01.vue")
    },
    {
      path: "/example06-02",
      component: () => import("@/views/example06/Example06-02.vue")
    },
    {
      path: "/example06-03",
      component: () => import("@/views/example06/Example06-03.vue")
    }
  ]
});
