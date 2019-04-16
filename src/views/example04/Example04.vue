<template>
  <div>
    <h1>Computed</h1>
    <p>
      对于所有的数据绑定，Vue.js 都提供了完全的 JavaScript
      表达式支持，表达式会作为 JavaScript 解析
    </p>
    {{ isShow ? "为true显示" : "为false显示" }}
    <br />
    {{ reversMessage }}
    <hr />
    {{ user.insertTime }}
    <br />
    {{ myDate }}
    <br />
    <p>基于计算属性，但计算属性是一个方法</p>
    {{ a(user.insertTime) }}
  </div>
</template>
<script>
export default {
  data: () => ({
    isShow: false,
    message: "hello",
    user: { name: "BO", insertTime: "2019-03-09T11:04:25" }
  }),
  computed: {
    myDate() {
      return this.user.insertTime.replace("T", " ");
    },
    reversMessage() {
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    a() {
      return d => d.replace("T", " ");
    }
  }
};
</script>
