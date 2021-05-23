<template>
  <div id="app">
    <Header />
    <main class="content home-bg">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  flex-grow: 1;
}

.home-bg {
  background: url(https://cdn.pixabay.com/photo/2020/03/27/15/33/norway-4973935_960_720.jpg)
    no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
