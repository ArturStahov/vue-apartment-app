<template>
  <form class="form-filter" @submit.prevent="handlerSubmit">
    <custom-input :typeInput="'text'" v-model="inputText" class="input"/>
    <custom-select :items="selectItems" v-model="select" class="select"/>
    <custom-button type="submit" class="button-submit">Filter</custom-button>
  </form>
</template>
<script>
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import CustomButton from "./CustomButton";
export default {
  name: "FormFilter",
  components: {
    CustomInput,
    CustomSelect,
    CustomButton,
  },
  data() {
    return {
      inputText: "",
      selectItems: [
        { value: "", label: "All", selected: true },
        "Kyiv",
        "Odessa",
        "third",
        "four",
      ],
      select: "",
    };
  },
  methods: {
    handlerSubmit() {
      const formData = {
        price: this.inputText,
        city: this.select,
      };
      this.$emit("submit", formData);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-filter {
  display:flex; 
  padding-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.select{
  width: 200px;
}

.input{
  width: 30%;
}
.button-submit{
  width: 30%;

  @media screen and(max-width:768px) {
     width: 100%;
  }
}


</style>
