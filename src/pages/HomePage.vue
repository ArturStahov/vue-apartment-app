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
import { fetchLogin, fetchRegistration } from "../services";

export default {
  name: "HomePage",
  components: {
    Container,
    LoginForm,
    RegisterForm,
  },

  data() {
    return {
      eventAuthType,
      toggleEvent: false,
      isLoading: false,
    };
  },

  methods: {
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

    async registered(data) {
      try {
        this.isLoading = true;
        const result = await fetchRegistration(data);
        console.log(result);
      } catch (error) {
        this.isLoading = false;
        console.log(error.message);
      } finally {
        console.log(`All Tasks is Done`);
        this.isLoading = false;
      }
    },

    async login(data) {
      try {
        this.isLoading = true;
        const result = await fetchLogin(data);
        console.log(result);
      } catch (error) {
        this.isLoading = false;
        console.log(error.message);
      } finally {
        console.log(`All Tasks is Done`);
        this.isLoading = false;
      }
    },
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
}

.form-wrapper {
  border: none;
  margin: 0 auto;
  max-width: 400px;
  padding: 50px;
  box-shadow: 5px 1px 15px 2px rgba(0, 0, 0, 0.43);
}
</style>
