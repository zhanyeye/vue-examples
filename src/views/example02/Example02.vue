<template>
  <div>
    <h1>Data() Return</h1>
    {{ msg }}
    <button @click="changeMsg">change msg</button>
    <hr />
    {{ user.name }} / {{ user.address }}
    <br />
    <button @click="changeUser">change user</button>
    <hr />
  </div>
</template>
<script>
export default {
  data: () => ({
    msg: "你好",
    user: { name: null, address: null }
  }),
  methods: {
    changeMsg() {
      this.msg = "Hello World";
    },
    changeUser() {
      this.user.name = "BO";
      this.user.address = "956";
    }
  }
};
</script>
