<template>
  <div>
    <button @click="open">删除</button>
  </div>
</template>
<script>
export default {
  props: ["homework"], //父组件向子组件传递数据，可以通过在子组件中定义props属性，由父组件传入数据
  methods: {
    open() {
      console.log(this.homework);
      let con = confirm(`确定要删除：${this.homework.name}`); //在页面上弹出对话框;
      if (con == true) {
        //可是父组件的数据并没有被删除啊？
        //子组件向父组件传递数据?子组件不应直接改变父组件的数据，必须通过事件，通知父组件改变(解耦，单向依赖)
        alert(`${this.homework.name}，已被删除`);
      } else {
        alert("已取消");
      }
    }
  }
};
</script>
