<template>
  <Container>
    <FormFilter @submit="handlerFilter" />
    <p v-if="!filteredItems.length" class="warning">No Filter Result!</p>
    <ApartmentsList :items="filteredItems">
      <template v-slot:title><h1 class="title">Apartments:</h1></template>
    </ApartmentsList>
    <ChatOpenButton  @chat-open-close="handlerChatButton" class="chat-open-button"/>
    <Chat   :class="{'open-chat': toggleChatButton}" class="chat-hidden"/>
  </Container>
</template>

<script>
import Chat from "../components/chat/Chat";
import ChatOpenButton from "../components/chat/ChatOpenButton";
import ApartmentsList from "../components/appartments/ApaprtmentsList";
import FormFilter from "../components/FormFilter";
import Container from "../components/Container";
import { mapActions } from "vuex";

export default {
  name: "ContentPage",

  components: {
    Chat,
    ChatOpenButton ,
    ApartmentsList,
    FormFilter,
    Container,
  },

  data() {
    return {
      filter: "",
      Items:[],
      toggleChatButton: false,
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

    handlerChatButton(){
      this.toggleChatButton = !this.toggleChatButton;
    }
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

body .open-chat{
  transform:translateX(0);
  visibility:visible;
}


.chat-open-button{
  position:fixed;
  right: 0;
  top: 50%;
  transform:translateY(-50%)
}
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
