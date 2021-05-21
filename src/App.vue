<template>
  <div id="app">
    <Header />
    <main class="content">
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
</style>
