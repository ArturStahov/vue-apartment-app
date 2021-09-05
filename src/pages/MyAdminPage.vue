<template>
  <div class="main-wrapper">
    <section class="section-form">
      <h2 class="section-form__title">Form create apartment</h2>
      <CreateItemForm  @submit="handlerCreateItem" />
    </section>
    
  </div>
</template>

<script>
import CreateItemForm from "../components/myadmin/CreateItemForm";
import { mapActions } from "vuex";

export default {
  name: "MyAdminPage",

  components: { CreateItemForm },

  data() {
    return { 
     items:[],
    }
  },

  computed: {
    isLogin() {
      return this.$store.state.auth.isLoggedIn;
    },
  },

  methods: {
    ...mapActions("apartment", ["addAppartmentItem","getAllMyApartments"]),

     async init() {
      try {
        await this.getAllMyApartments();
        this.items = this.$store.state.apartment.myApartments;
      } catch (error) {
        console.log(error);
      }
    },

    handlerCreateItem(value) {
      this.addAppartmentItem(value);
    },
  },

  created() {
    if (!this.isLogin) {
      this.$router.push({ name: "homePage" });
    }

    this.init();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.section-form {
  width: 450px;
  &__title{
    font-size: 1.6rem;
    text-align: center;
    margin-bottom: 10px;
    color: #fff;
  }
}

.main-wrapper {
  padding: 10px;
  display: flex;
  justify-content: flex-start;
}

@media all and(max-width:$mobile-bp-max) {
  .main-wrapper {
    display: flex;
    justify-content: center;
  }
}
</style>
