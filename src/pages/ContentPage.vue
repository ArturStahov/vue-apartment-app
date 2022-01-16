<template>
  <div>
    <Chat @close-chat-event="handlerCloseChat" @get-ref-event="handlerSetChatRef"/>
    <Container>
      <FormFilter @submit="handlerFilter" />
      <p v-if="!filteredItems.length" class="warning">No Filter Result!</p>
      <ApartmentsList :items="filteredItems">
        <template v-slot:title><h1 class="title">Apartments:</h1></template>
      </ApartmentsList>
      <ChatOpenButton
        @chat-open-close="handlerChatButton"
        class="chat-open-button"
      />
    </Container>
  </div>
</template>

<script>
import Chat from "../components/chat/Chat";
import ChatOpenButton from "../components/chat/ChatOpenButton";
import ApartmentsList from "../components/appartments/ApaprtmentsList";
import FormFilter from "../components/FormFilter";
import Container from "../components/Container";
import { mapActions } from "vuex";
import GSAP from "gsap";
import { Elastic } from "gsap";

export default {
  name: "ContentPage",

  components: {
    Chat,
    ChatOpenButton,
    ApartmentsList,
    FormFilter,
    Container,
  },

  data() {
    return {
      Elastic,
      GSAP,
      filter: "",
      Items: [],
      toggleChatButton: false,
      chatRef: null,
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
      console.log('FILTER',this.filter);
    },

    filterByCityName(items) {
      if (!this.filter.city) {
        return items;
      } else {
        return items.filter((item) => item.city === this.filter.city);
      }
    },

    handlerSetChatRef(value) {
      this.chatRef = value;
      console.log("Chat ref!!!", value);
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

    handlerChatButton() {
      this.toggleChatButton = !this.toggleChatButton;
    },
    handlerCloseChat(){
      this.toggleChatButton = false;
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

    toggleChatButton(value) {
      if (value) {
        console.log("OPEN CHAT");
        this.GSAP.to(this.chatRef, {
          duration: 0.4,
          delay: 0,
          x: 0,
          scale: 1,
          ease: this.Elastic.easeOut.config(0.5, 0.3),
          opacity: 1,
        });
      } else {
        console.log("CLOSE CHAT");
        this.GSAP.to(this.chatRef, {
          duration: 0.4,
          delay: 0,
          x: -650,
          scale: 0,
          opacity: 0,
        });
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
.chat-open-button {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
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
