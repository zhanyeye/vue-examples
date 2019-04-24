<template>
  <div></div>
</template>
//component 业务逻辑无关的封装的可重用组件，例如全局警告框
<script>
import bus from "@/util/Bus";
export default {
  created() {
    bus.$on(bus.e, data => {
      alert(data);
    });
  },
  beforeDestroy() {
    bus.$off(bus.e);
  }
};
</script>
