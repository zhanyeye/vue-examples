<template>
  <div>
    <h1>绑定子组件属性</h1>
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
        <td>
          <delbutton v-bind:homework="h" />
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  components: { delbutton: () => import("@/views/example08/DelButton") },
  data: () => ({
    homeworks: [
      { id: 1, name: "Java基本数据类型", deadline: "2019-04-10T09:00" },
      { id: 2, name: "Java封装", deadline: "2019-05-10T12:00" },
      { id: 3, name: "Java泛型", deadline: "2019-06-10T21:30" }
    ]
  })
};
</script>
