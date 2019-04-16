<template>
  <div>
    <h1>v-text</h1>
    <p>
      <span v-text="message"></span>
    </p>
    <h1>v-if</h1>
    <p v-if="isAdmin">此内容仅admin可见</p>

    <template v-if="user.loginType == 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username" />
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email" />
    </template>
    <br />
    <button v-on:click="changeInput">切换</button>
    <h1>v-show</h1>
    <p v-show="user.level == 'superadmina'">此内容仅supadmin可见</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "hello world",
      isAdmin: true,
      user: { loginType: "username", level: "superadmin" }
    };
  },
  methods: {
    changeInput() {
      this.user.loginType =
        this.user.loginType == "email" ? "username" : "email";
    }
  }
};
</script>
