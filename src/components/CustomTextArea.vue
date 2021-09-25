<template>
  
    <textarea
      v-on="listeners"    
      class="input-text"
      :placeholder="inputPlaceholder"
      ref="custTextArea"
    ></textarea>
 
</template>

<script>
export default {
  name: "CustomTextArea",
  props: {
    inputPlaceholder: {
      type: String,
      default: "input",
    },
    editProps: {
      type: String,
      default: "",
    },
    clearInputValue:{
      type:Boolean,
      default:false
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit("input", event.target.value),
      };
    },
  },
  watch: {
    editProps(editValue) {
      if (editValue) {
        this.$refs.custTextArea.value = editValue;
      }
    },
    clearInputValue(value){
      if(value){
        this.$refs.custTextArea.value = '';
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.input-text {
  height: 80px;
  width: 100%;
  border: 2px solid $color-input-border;
  outline: none;
  padding: 5px;
  font-size: 14px;
  transition: border-color 0.4s ease-in;
  resize: none;

  &::placeholder {
    color: #929191;
  }
  &:focus {
    box-shadow: inset 5px 5px 15px -2px #000000;
    border-color: #d84f4f;
  }
}
</style>
