<template>
  <div id="app">
    <sidebar />
    <div id="routerview">
      <!-- 路由匹配到的组件将显示在这里 -->
      <router-view v-bind:key="$route.path" />
      <!-- 当路由前后2次，切换的是同一组件时，组件默认会被直接复用，因此不会触发生命周期回调函数 -->
      <!-- 通过v-bind指令在router-view中，将标签key属性值，绑定到路由地址 v-bind:key=“$route.path” -->
      <!-- 通过Key属性值的不同，标识为不同的节点。即使，组件相同，但地址内容不同的组件可各自独立渲染 -->
    </div>
    <alertdialog />
  </div>
</template>
<script>
export default {
  //通过components 属性，在其作用域注册局部组件，从而形成一个组件树
  components: {
    sidebar: () => import("@/views/Sidebar"), //通过import延迟加载引入组件
    alertdialog: () => import("@/components/AlertDialog") // @ 代表 src
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
#routerview {
  vertical-align: top;
  border: 2px solid red;
  display: inline-block;
}
</style>
