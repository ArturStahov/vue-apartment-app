<template>
  <container class="page-padding">
    <h2 class="title">Page not found!</h2>
  </container>
</template>

<script>
import Container from "./Container.vue";
export default {
  components: { Container },
  name: "ErrorPage",
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 18px;
  color: red;
  text-align: center;
}
.page-padding {
  padding-top: 300px;
}
</style>
