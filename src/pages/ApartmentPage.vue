<template>
  <main>
    <ApartmentDescription />
  </main>
</template>

<script>
import ApartmentDescription from "../components/apartmentPageComponents/ApartmentDescription";

export default {
  name: "ApartmentPage",
  components: { ApartmentDescription },
  created() {
    if (!this.isLogin) {
      this.$router.push({ name: "homePage" });
    }
    console.log("mounted");
    console.log("router", this.$router);
    console.log("route", this.$route);
  },
  computed: {
    isLogin() {
      return this.$store.state.auth.isLoggedIn;
    },
  },
  watch: {
    isLogin(value) {
      if (!value) {
        this.$router.push({ name: "homePage" });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
