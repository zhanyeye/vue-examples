<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>deadline</th>
          <th>操作</th>
        </tr>
      </thead>
      <tr v-for="(h, index) in homeworks" :key="index">
        <td>{{ index }}</td>
        <td>{{ h.name }}</td>
        <td>{{ h.deadline }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import bus from "@/util/Bus";
export default {
  data: () => ({
    homeworks: []
  }),
  created() {
    bus.$on(bus.homeworks, data => {
      this.homeworks = data;
    });
  },
  beforeDestroy() {
    bus.$off(bus.homeworks);
  }
};
</script>
