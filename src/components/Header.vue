<template>
  <header class="header">
    <Container>
      <router-link class="logo" :to="{ name: 'homePage' }"
        >Apartment Service</router-link
      >
    </Container>
  </header>
</template>

<script>
import Container from "./Container";
export default {
  name: "Header",
  components: {
    Container,
  },
};
</script>

<style lang="scss" scoped>
.logo {
  font-size: 18px;
  color: #e28f22;
}
.header {
  padding: 20px 0px;
  background-color: #272d42;
}
</style>
