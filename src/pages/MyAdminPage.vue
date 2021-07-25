<template>
  <div>
    <p>My Adminka</p>
  </div>
</template>

<script>
export default {
  name: "MyAdminPage",
  computed: {
    isLogin() {
      return this.$store.state.auth.isLoggedIn;
    },
  },
  

  created() {
     if (!this.isLogin) {
      this.$router.push({ name: "homePage" });
    }
  },
};
</script>

<style lang="scss" scoped></style>
