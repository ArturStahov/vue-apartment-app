<template>
  <Container>
    <FormFilter @submit="handlerFilter" />
    <p v-if="!filteredItems.length" class="warning">No Filter Result!</p>
    <ApartmentsList :items="filteredItems">
      <template v-slot:title><h1 class="title">Apartments:</h1></template>
    </ApartmentsList>
  </Container>
</template>

<script>
import ApartmentsList from "../components/appartments/ApaprtmentsList";
import FormFilter from "../components/FormFilter.vue";
import Container from "../components/Container.vue";
import { mapActions } from "vuex";

export default {
  name: "ContentPage",

  components: {
    ApartmentsList,
    FormFilter,
    Container,
  },

  data() {
    return {
      filter: "",
      Items:[]
    };
  },

  methods: {
    ...mapActions("apartment", ["getAllApartments"]),

    async init() {
      try {
        await this.getAllApartments();
        this.Items = this.$store.state.apartment.apartment;
      } catch (error) {
        console.log(error);
      }
    },

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
  created() {
    if (!this.isLogin) {
      this.$router.push({ name: "homePage" });
    }

    this.init();
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
