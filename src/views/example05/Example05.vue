<template>
  <div>
    <h1>Router Passing Parameter</h1>
    student ID: {{ $route.params.sid }}
    <br />
    homework ID: {{ $route.params.hid }}
    <br />
  </div>
</template>
<script>
export default {
  created() {
    // 可基于参数，异步请求数据，再渲染
    console.log(this.$route.params.sid);
    console.log(this.$route.params.hid);
  }
};
</script>
