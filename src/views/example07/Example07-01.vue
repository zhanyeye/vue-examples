<template>
  <div>
    <h1>Form Binding</h1>
    <form>
      <input type="text" v-model="user.name" />
      <br />
      <label> <input type="radio" v-model="user.sex" value="male" />男 </label>
      <br />
      <label>
        <input type="radio" v-model="user.sex" value="female" />女
      </label>
      <br />
      <template v-for="(c, index) in courses">
        <label :key="`l${index}`">
          <input
            type="checkbox"
            v-model="user.courses"
            :value="c.id"
            :key="index"
          />
          {{ c.name }}
        </label>
        <br :key="`b${index}`" />
      </template>
      <br />
      <input type="file" @change="fileChange" />
      <br />
      <select v-model="user.title">
        <option v-for="(t, index) in titles" :key="index" :value="t.id">{{
          t.name
        }}</option>
      </select>
      <br />
      <button @click="submit" type="button">提交</button>
    </form>
    <p>{{ user }}</p>
    <p v-if="user.file != null">{{ user.file.name }}/{{ user.file.size }}</p>
  </div>
</template>
<script>
export default {
  data: () => ({
    user: {
      name: null,
      sex: null,
      courses: [],
      file: null,
      title: null
    },
    titles: [
      { id: 1, name: "讲师" },
      { id: 2, name: "副教授" },
      { id: 3, name: "教授" }
    ],
    courses: [
      { id: 4, name: "Java" },
      { id: 5, name: "Web开发技术" },
      { id: 6, name: "系统程序设计" }
    ]
  }),
  methods: {
    fileChange(event) {
      console.log(event.target.files[0]);
      this.user.file = event.target.files[0];
    },
    submit() {
      console.log(this.user);
    }
  }
};
</script>
