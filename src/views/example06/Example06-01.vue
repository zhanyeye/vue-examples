<template>
  <div>
    <h1>v-if</h1>
    <input placeholder="Enter your username" key="username" />
    <p>
      <span v-text="message"></span>
    </p>
    <h1>v-if</h1>
    <p v-if="isAdmin">此内容仅admin可见</p>

    <template v-if="isUserNameLogin">
      <input placeholder="Enter your username" key="username" />
      <br />
      <input type="password" placeholder="Enter your password" />
    </template>
    <template v-else>
      <input placeholder="Enter your KEY" key="key" />
    </template>
    <br />
    <button v-on:click="changeInput">切换</button>
    <h1>v-show</h1>
    <p v-show="user.level == 'superadmin'">此内容仅supadmin可见</p>
  </div>
</template>
<script>
export default {
  data: () => ({
    message: "hello world",
    isAdmin: true,
    isUserNameLogin: true,
    user: { username: "BO", level: "user" }
  }),
  methods: {
    changeInput() {
      this.isUserNameLogin = !this.isUserNameLogin;
    }
  }
};
</script>
