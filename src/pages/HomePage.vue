<template>
  <section class="section-home">
    <Container>
      <h2 class="title">Welcome to Apartment Service</h2>
      <p class="sub-title">register or login for continue</p>

      <div class="form-wrapper">
        <LoginForm
          v-if="!toggleEvent"
          @submit="handlerForm"
          @changeEvent="changeEvent"
          :isLoading="isLoading"
        />
        <RegisterForm
          v-if="toggleEvent"
          @submit="handlerForm"
          @changeEvent="changeEvent"
          :isLoading="isLoading"
        />
      </div>
    </Container>
  </section>
</template>

<script>
import * as eventAuthType from "../config";
import Container from "../components/Container";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import { mapActions } from "vuex";

import {
  errorNotification,
  infoNotification,
} from "../utils/errorNotification";

export default {
  name: "HomePage",
  components: {
    Container,
    LoginForm,
    RegisterForm,
  },

  data() {
    return {
      errorNotification,
      infoNotification,
      eventAuthType,
      toggleEvent: false,
      isLoading: false,
    };
  },

  methods: {
    ...mapActions("auth", ["loginOperation", "registrationOperation"]),

    changeEvent(value) {
      console.log(value);
      this.toggleEvent = value;
    },

    handlerForm(formData) {
      if (formData.type === eventAuthType.AUTH_EVENT_REG) {
        this.registered(formData);
        console.log("registered user!");
      }

      if (formData.type === eventAuthType.AUTH_EVENT_LOGIN) {
        this.login(formData);
        console.log("login user!");
      }
    },

    async registered(formData) {
      try {
        this.isLoading = true;

        //await this.$store.dispatch("auth/registrationOperation", formData);
        await this.registrationOperation(formData);

        this.infoNotification("success!");

        console.log("this.$store.state", this.$store.state);
        this.$router.push({ name: "contentPage" });
      } catch (error) {
        this.isLoading = false;
        console.log(error.message);
        this.errorNotification(error.message);
      } finally {
        console.log(`All Tasks is Done`);
        this.isLoading = false;
      }
    },

    async login(formData) {
      try {
        this.isLoading = true;

        //await this.$store.dispatch("auth/loginOperation", formData);

        await this.loginOperation(formData);

        console.log("this.$store.state", this.$store.state);

        this.infoNotification("success!");

        this.$router.push({ name: "contentPage" });
      } catch (error) {
        this.isLoading = false;
        this.errorNotification(error.message);
        console.log(error.message);
      } finally {
        console.log(`All Tasks is Done`);
        this.isLoading = false;
      }
    },
  },
  computed: {
    isLogin() {
      return this.$store.state.auth.isLoggedIn;
    },
  },
  created() {
    if (this.isLogin) {
      this.$router.push({ name: "contentPage" });
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
.section-home {
  padding: 20px 0px 20px;
}

.title {
  font-size: 18px;
  color: $color-input-border;
  font-weight: 900;
  text-align: center;
  margin-bottom: 10px;
}

.sub-title {
  font-size: 18px;
  color: #000000;
  text-align: center;
  margin-bottom: 100px;
  color: #fff;
}

.form-wrapper {
  border: none;
  margin: 0 auto;
  max-width: 400px;
  padding: 50px;
  box-shadow: 5px 7px 29px 6px rgba(0, 0, 0, 1);
  background-color: rgba(231, 230, 230, 0.7);
}
</style>
