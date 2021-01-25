<template>
  <div>
    <div @click="loginClick">立即登录</div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  methods: {
    loginClick() {
      this.$router.push("/auth");
    },
  },
};
</script>

<style scoped>
</style>