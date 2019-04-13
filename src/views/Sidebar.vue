<template>
  <div>
    <h1>Vue实例</h1>
    <ul>
      <li>
        <router-link to="/example01">HelloWorld</router-link>
      </li>
      <li>
        <router-link to="/example02">数据驱动</router-link>
      </li>
      <li>
        <router-link to="/example03">生命周期回调函数</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
div {
  width: 300px;
  border: 2px solid red;
  display: inline-block;
}
</style>
