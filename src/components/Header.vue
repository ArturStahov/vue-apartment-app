<template>
  <header class="header">
    <Container class="header-wrapper">
      <router-link class="logo" :to="{ name: 'homePage' }"
        >Apartment Service</router-link
      >
      <UserBar />
    </Container>
  </header>
</template>

<script>
import Container from "./Container";
import UserBar from "./UserBar";
export default {
  name: "Header",
  components: {
    Container,
    UserBar,
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

.header-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
