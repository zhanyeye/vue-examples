<template>
  <div>
    <h1>基于属性监听实现</h1>
    <p>
      需求：必须同意条款才能选择操作以及提交；必须选择2项才能提交；等于2项时checkbox变为不可用状态
    </p>
    <form>
      <label> <input type="checkbox" v-model="agreed" />同意条款 </label>
      <br />
      <template v-for="(c, index) in courses">
        <label :key="`l${index}`">
          <input
            ref="courses"
            type="checkbox"
            v-model="checked"
            :value="{ id: c.id }"
            :key="index"
            :disabled="!agreed"
          />
          {{ c.name }}
        </label>
        <br :key="`b${index}`" />
      </template>
      <br />
      <button :disabled="!agreed || subDisabled" type="button">提交</button>
    </form>
    <p>{{ checked }}</p>
  </div>
</template>
<script>
export default {
  mounted() {
    this.checked = this.courseDetails.map(d => d.course);
  },
  data: () => ({
    courses: [
      { id: 4, name: "Java" },
      { id: 5, name: "Web开发技术" },
      { id: 6, name: "系统程序设计" }
    ],
    amount: 2,
    agreed: false,
    subDisabled: true,
    courseDetails: [{ course: { id: 5 }, user: { id: 1 } }],
    checked: []
  }),
  watch: {
    // mount加载时会调用
    checked() {
      if (!this.agreed) {
        //这一语句好像并没有起作用？？，checkbox的 disable 好像依然会被覆盖？
        return;
      }
      let d = this.checked.length == this.amount ? true : false;
      this.$refs.courses
        .filter(c => c.checked == false)
        .forEach(c => (c.disabled = d));
      this.subDisabled = !d;
    }
  }
};
</script>
