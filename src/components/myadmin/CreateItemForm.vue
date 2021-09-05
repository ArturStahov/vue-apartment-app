<template>
  <form  @submit.prevent="handlerSubmit">
    <CustomInput
      :typeInput="'text'"
      :inputPlaceholder="'Title'"
      v-model="inputTitleValue"
      class="input"
    />
    <CustomInput
      :typeInput="'text'"
      :inputPlaceholder="'City'"
      v-model="inputCityValue"
      class="input"
    />
    <CustomTextArea
      :typeInput="'text'"
      :inputPlaceholder="'Description'"
      v-model="inputDescriptionValue"
      class="input"
    />
    <CustomInput
      :typeInput="'text'"
      :inputPlaceholder="'Price'"
      v-model="inputPriceValue"
      class="input"
    />
    <CustomInput
      :typeInput="'text'"
      :inputPlaceholder="'Image Link'"
      v-model="inputImageValue"
      class="input"
    />
    <CustomButton type="submit" class="button-submit">Create</CustomButton>
  </form>
</template>

<script>
import CustomInput from "../CustomInput.vue";
import CustomTextArea from "../CustomTextArea.vue";
import CustomButton from "../CustomButton.vue";

export default {
  name: "CreateItemForm",
  data() {
    return {
      inputCityValue: "",
      inputDescriptionValue: "",
      inputImageValue: "",
      inputPriceValue: "",
      inputTitleValue: "",
    };
  },
  components: {
    CustomInput,
    CustomTextArea,
    CustomButton,
  },
  methods: {
    handlerSubmit() {
      const formData = {
        title: this.inputTitleValue,
        city: this.inputCityValue,
        price: this.inputPriceValue,
        description: this.inputDescriptionValue,
        image: this.inputImageValue,
      };
      this.$emit("submit", formData);
      console.log("FormData from created==",formData)
      this.initialInputValue();
    },
    initialInputValue() {
      this.inputTitleValue = "";
      this.inputCityValue = "";
      this.inputPriceValue = "";
      this.inputDescriptionValue = "";
      this.inputImageValue = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  margin-bottom: 10px;
}

</style>
