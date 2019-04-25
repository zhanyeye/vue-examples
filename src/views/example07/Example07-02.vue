<template>
  <div>
    <h1>基于方法实现</h1>
    <p>
      需求：必须同意条款才能选择操作以及提交；必须选择2项才能提交；等于2项时checkbox变为不可用状态
    </p>
    <form>
      <label> <input type="checkbox" @click="agreed" />同意条款 </label>
      <br />
      <template v-for="(c, index) in courses">
        <label :key="`l${index}`">
          <input
            ref="checkboxs"
            type="checkbox"
            v-model="checked"
            :value="{ id: c.id }"
            :key="index"
            @change="check"
            :disabled="disabled"
          />
          {{ c.name }}
        </label>
        <br :key="`b${index}`" />
      </template>
      <br />
      <button :disabled="disabled || subDisabled">提交</button>
    </form>
    <p>{{ checked }}</p>
  </div>
</template>
<script>
export default {
  data: () => ({
    courses: [
      { id: 4, name: "Java" },
      { id: 5, name: "Web开发技术" },
      { id: 6, name: "系统程序设计" }
    ],
    disabled: true,
    courseDetails: [{ course: { id: 5 }, user: { id: 1 } }], //模拟传入的用户原选项
    checked: []
  }),
  mounted() {
    // 模拟在后期异步将用户原选择加载
    this.checked = this.courseDetails.map(d => d.course);
  },
  methods: {
    agreed() {
      this.disabled = !this.disabled;
    },
    check() {
      if (this.checked.length == 2) {
        this.$refs.checkboxs
          .filter(c => c.checked == false)
          .forEach(c => (c.disabled = true));
      } else {
        this.$refs.checkboxs
          .filter(c => c.checked == false)
          .forEach(c => (c.disabled = false));
      }
    }
  },
  computed: {
    subDisabled() {
      return this.checked.length == 2 ? false : true;
    }
  }
};
</script>
