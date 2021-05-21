<template>
  <main></main>
</template>

<script>
export default {
  name: "ApartmentPage",
  mounted() {
    console.log("mounted");
    console.log("router", this.$router);
    console.log("route", this.$route);
  },
};
</script>

<style lang="scss" scoped></style>
