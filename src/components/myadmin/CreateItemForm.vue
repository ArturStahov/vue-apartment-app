<template>
  <form @submit.prevent="handlerSubmit">
    <CustomInput
      :typeInput="'text'"
      :inputPlaceholder="'Title'"
      v-model="inputTitleValue"
      :editProps="inputTitleValue && inputTitleValue"
      :clearInputValue="clearForm"
      class="input"
    />
    <CustomInput
      :typeInput="'text'"
      :inputPlaceholder="'City'"
      v-model="inputCityValue"
      :editProps="inputCityValue && inputCityValue"
      :clearInputValue="clearForm"
      class="input"
    />
    <CustomTextArea
      :typeInput="'text'"
      :inputPlaceholder="'Description'"
      v-model="inputDescriptionValue"
      :editProps="inputDescriptionValue && inputDescriptionValue"
      :clearInputValue="clearForm"
      class="input"
    />
    <CustomInput
      :typeInput="'text'"
      :inputPlaceholder="'Price'"
      v-model="inputPriceValue"
      :editProps="inputPriceValue && inputPriceValue"
      :clearInputValue="clearForm"
      class="input"
    />
    <CustomInput
      :typeInput="'text'"
      :inputPlaceholder="'Image Link'"
      v-model="inputImageValue"
      :editProps="inputImageValue && inputImageValue"
      :clearInputValue="clearForm"
      class="input"
    />
    <CustomButton type="submit" class="button-submit" :class="{'editIsActiv': toggleMode}">{{toggleMode ? 'Update' : 'Create'}}</CustomButton>
    <CustomButton v-if="toggleMode" @click.native="handlerCanselEdit" type="button"  class="button-submit">Cansel</CustomButton>
  </form>
</template>

<script>
import CustomInput from "../CustomInput.vue";
import CustomTextArea from "../CustomTextArea.vue";
import CustomButton from "../CustomButton.vue";

export default {
  name: "CreateItemForm",

   components: {
    CustomInput,
    CustomTextArea,
    CustomButton,
  },

  props: {
    editItem: {
      type: Object,
    },
  },

  data() {
    return {
      inputCityValue: "",
      inputDescriptionValue: "",
      inputImageValue: "",
      inputPriceValue: "",
      inputTitleValue: "",
      editEvent: false,
      clearForm:false
    };
  },

  watch: {
    editItem(item) {
      if (item._id) {
        console.log("Item is full", item);
        this.inputTitleValue = item.title;
        this.inputCityValue = item.city;
        this.inputPriceValue = item.price;
        this.inputDescriptionValue = item.description;
        this.inputImageValue = item.image;
        this.editEvent = true;
        this.clearForm = false;
      }
    },
    inputTitleValue(value){
      if(value){
        this.clearForm = false;
      }
    }
  },

  computed: {
    toggleMode(){
      if(this.editEvent){
        return true;
      } 
      return false;
    }
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

      if(this.editEvent){
        const editData = {
          ...this.editItem,
          ...formData,
        }

         this.$emit("submitUpdate", editData);
         this.editEvent=false;
         
      } else {
          this.$emit("submitCreate", formData);
      }
       
      this.initialInputValue();
    },

    handlerCanselEdit(){
      this.editEvent=false;
      this.initialInputValue();
      console.log('cansel click')
    },

    initialInputValue() {
      this.inputTitleValue = "";
      this.inputCityValue = "";
      this.inputPriceValue = "";
      this.inputDescriptionValue = "";
      this.inputImageValue = "";
      this.clearForm = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  margin-bottom: 10px;
}
.editIsActiv{
  margin-bottom: 10px;
}
</style>
