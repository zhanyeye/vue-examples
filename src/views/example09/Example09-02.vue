<template>
  <div>绑定的数据：{{ name }}</div>
</template>
<script>
import bus from "@/util/Bus"; //监听组件引入bus
export default {
  data: () => ({ name: null }),
  // 注册监听
  created() {
    bus.$on(bus.name, data => {
      //在create()回调中注册监听事件
      this.name = data;
    });
  },
  // 销毁前取消监听
  beforeDestroy() {
    bus.$off(bus.name);
  }
};
</script>
