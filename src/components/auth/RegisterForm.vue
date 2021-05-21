<template>
  <form class="form-signin" @submit.prevent="handlerSubmit">
    <p class="error-info">{{ errorInfo }}</p>
    <custom-input
      :inputPlaceholder="'name'"
      :typeInput="'text'"
      v-model="userName"
      class="md"
    />
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
    <custom-input
      :inputPlaceholder="'confirm password'"
      :typeInput="'password'"
      v-model="confirmPassword"
      class="md"
    />
    <custom-button type="submit"
      ><Loader
        v-if="isLoading"
        :width="'30'"
        :height="'30'"
        class="loader"
      />Sign In</custom-button
    >
    <p class="form-text">or return to</p>
    <custom-button @click.native="handlerChangeEvent" type="button"
      >Log In</custom-button
    >
  </form>
</template>

<script>
import { AUTH_EVENT_REG } from "../../config";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import Loader from "../Loader";
export default {
  name: "RegisterForm",
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
      AUTH_EVENT_REG,
      errorInfo: "",
      userName: "",
      userEmail: "",
      userPassword: "",
      confirmPassword: "",
    };
  },

  methods: {
    validate() {
      this.errorInfo = "";

      if (!this.userName) {
        this.errorInfo = "name is required!";
        return false;
      }

      if (!this.userEmail) {
        this.errorInfo = "email is required!";
        return false;
      }

      if (!this.userPassword) {
        this.errorInfo = "password is required!";
        return false;
      }
      if (this.userPassword.length < 8) {
        this.errorInfo = "password must be at least 8 symbols length!";
        return false;
      }

      if (this.userPassword !== this.confirmPassword) {
        this.errorInfo = "no correct confirm password!";
        return false;
      }
      return true;
    },

    handlerSubmit() {
      if (!this.validate()) {
        return;
      }

      const formData = {
        type: this.AUTH_EVENT_REG,
        name: this.userName,
        email: this.userEmail,
        password: this.userPassword,
      };

      this.$emit("submit", formData);
    },

    handlerChangeEvent() {
      console.log("click change event type in login form!");
      this.$emit("changeEvent", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-signin {
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
  top: -40px;
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
