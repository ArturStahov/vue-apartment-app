<template>
  <container>
    <form-filter @submit="handlerFilter" />
    <p v-if="!filteredItems.length" class="warning">No Filter Result!</p>
    <ApartmentsList :items="filteredItems">
      <template v-slot:title><h1 class="title">Apartments:</h1></template>
    </ApartmentsList>
  </container>
</template>

<script>
import ApartmentsList from "../components/appartments/ApaprtmentsList";
import Items from "../apartMocup.json";
import FormFilter from "../components/FormFilter.vue";
import Container from "../components/Container.vue";

export default {
  name: "ContentPage",

  components: {
    ApartmentsList,
    FormFilter,
    Container,
  },

  data() {
    return {
      Items,
      filter: "",
    };
  },
  methods: {
    handlerFilter(value) {
      this.filter = value;
      console.log(this.filter);
    },

    filterByCityName(items) {
      if (!this.filter.city) {
        return items;
      } else {
        return items.filter((item) => item.city === this.filter.city);
      }
    },

    filterByPrice(items) {
      if (!this.filter.price) {
        return items;
      } else {
        return items.filter(
          (item) => Number(item.price) === Number(this.filter.price)
        );
      }
    },
  },
  computed: {
    filteredItems() {
      return this.filterByCityName(this.filterByPrice(this.Items));
    },
    isLogin() {
      return this.$store.state.auth.isLoggedIn;
    },
  },
  watch: {
    isLogin(value) {
      if (!value) {
        this.$router.push({ name: "homePage" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  font-size: 16px;
}
.warning {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: red;
}
</style>
