<template>
  <div class="main-wrapper">
    <section class="section-form">
      <h2 class="section-title">Form create apartment</h2>
      <CreateItemForm @submit="handlerCreateItem" />
    </section>
    <section class="section-my-apartments">
      <h2 class="section-title">You apartments</h2>
      <p class="no-items" v-if="!items.length">create you apartments!</p>
      <div class="apartments-list" v-if="items.length>0">
        <ItemListElement
          v-for="{ _id, rating, image, ratingCounter } in items"
          :key="_id"
          :id="_id"
          :rating="rating"
          :image="image"
          :ratingCounter="ratingCounter"
          class="list_item"
        />
      </div>
    </section>
  </div>
</template>

<script>
import CreateItemForm from "../components/myadmin/CreateItemForm";
import ItemListElement from "../components/myadmin/ItemListElement";
import { mapActions } from "vuex";

export default {
  name: "MyAdminPage",

  components: { CreateItemForm, ItemListElement },

  data() {
    return {
      items: [],
    };
  },

  computed: {
    isLogin() {
      return this.$store.state.auth.isLoggedIn;
    },
  },

  methods: {
    ...mapActions("apartment", ["addAppartmentItem", "getAllMyApartments"]),

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
}

.no-items{
    font-size: 1.6rem;
    text-align: center;
    margin-bottom: 10px;
    color: #fff;
}

.section-title{
   font-size: 1.6rem;
    text-align: center;
    margin-bottom: 10px;
    color: #fff;
}

.section-my-apartments {
  padding: 0px 10px 0px;
  width: 100%;

  .apartments-list {
    padding: 10px;
    height:330px;
    overflow-y: auto;
    background: rgba(190, 190, 190, 0.397);
    border: 2px solid grey;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  
  .list_item {
    width: 80px;
    height: 100px;
    margin-bottom: 10px;
    
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
}

.main-wrapper {
  padding: 10px;
  display: flex;
  justify-content: flex-start;
}

@media all and(max-width: $mobile-bp-max) {
  .main-wrapper {
    justify-content: center;
    flex-direction: column;
  }

  .section-form {
    margin: 0 auto 20px;
  }

  .apartments-list {  
    justify-content: center;
  }
}

@media all and(max-width: $mobile-bp) {
  .section-form {
    width: 100%;
  }
}
</style>
