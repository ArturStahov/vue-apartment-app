<template>
  <div>
    <CreateItemForm @submit="handlerCreateItem"/>
  </div>
</template>

<script>
import CreateItemForm from "../components/myadmin/CreateItemForm";
import { mapActions } from "vuex";

export default {
  name: "MyAdminPage",

  components: {CreateItemForm},

  computed: {
    isLogin() {
      return this.$store.state.auth.isLoggedIn;
    },
  },
  
  methods: {
    ...mapActions("apartment", ["addAppartmentItem"]),

    handlerCreateItem(value){
         this.addAppartmentItem(value);
    }

  },

  created() {
     if (!this.isLogin) {
      this.$router.push({ name: "homePage" });
    }
  },
};
</script>

<style lang="scss" scoped></style>
