<template>
  <form class="form-login" @submit.prevent="handlerSubmit">
    <p class="error-info">{{ errorInfo }}</p>
    <custom-input
      :inputPlaceholder="'e-mail'"
      :typeInput="'email'"
      v-model="userEmail"
      class="md"
    
    />
    <custom-input
      :inputPlaceholder="'password'"
      :typeInput="'password'"
      v-model="userPassword"
      class="md"
    />
    <custom-button type="submit">
      <Loader v-if="isLoading" :width="'30'" :height="'30'" class="loader" />
      Log In</custom-button
    >
    <p class="form-text">or</p>
    <custom-button @click.native="handlerChangeEvent" type="button">
      Registration
    </custom-button>
  </form>
</template>

<script>
import { AUTH_EVENT_LOGIN } from "../../config";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import Loader from "../Loader";
export default {
  name: "LoginForm",
  components: {
    CustomInput,
    CustomButton,
    Loader,
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      AUTH_EVENT_LOGIN,
      errorInfo: "",
      userEmail: "",
      userPassword: "",
      focus: true,
    };
  },
 
  methods: {
    validate() {
      this.errorInfo = "";

      if (!this.userEmail) {
        this.errorInfo = "email is required!";
        return false;
      }

      if (!this.userPassword) {
        this.errorInfo = "password is required!";
        return false;
      }

      return true;
    },

    handlerSubmit() {
      if (!this.validate()) {
        return;
      }

      const formData = {
        type: this.AUTH_EVENT_LOGIN,
        email: this.userEmail,
        password: this.userPassword,
      };
      this.$emit("submit", formData);
    },

    handlerChangeEvent() {
      this.$emit("changeEvent", true);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-login {
  position: relative;
}
.md {
  margin-bottom: 10px;
}
.form-text {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0px;
}
.error-info {
  width: 100%;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  color: red;
}

.loader {
  position: absolute;
  left: 10px;
  top: 5px;
}
</style>
