<template>
  <div v-if="isLogged" class="user-bar">
    <img :src="user.avatar" alt="avatar" />
    <p class="user-name">{{ user && user.name }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "UserBar",
  data() {
    return {};
  },

  computed: {
    ...mapActions("auth", []),
    user() {
      return this.$store.state.auth.user;
    },

    isLogged() {
      return this.$store.state.auth.isLoggedIn;
    },
  },
};
</script>

<style lang="scss" scoped></style>
