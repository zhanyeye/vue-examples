<template>
  <div>
    <button @click="open">删除</button>
  </div>
</template>
<script>
export default {
  props: ["homework"],
  methods: {
    open() {
      console.log(this.homework);
      let con = confirm(`确定要删除：${this.homework.name}`); //在页面上弹出对话框;
      if (con == true) {
        alert(`${this.homework.name}，已被删除`);
      } else {
        alert("已取消");
      }
    }
  }
};
</script>
