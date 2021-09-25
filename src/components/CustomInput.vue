<template>
  <div class="input-block">
    <input
      v-on="listeners"
      :type="typeInput"
      class="input-text"
      :placeholder="inputPlaceholder"
      ref="custInput"
    />
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    inputPlaceholder: {
      type: String,
      default: "input",
    },
    typeInput: {
      type: String,
      default: "text",
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
        this.$refs.custInput.value = editValue;
      }
    },
    clearInputValue(value){
      if(value){
        this.$refs.custInput.value = '';
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.input-text {
  min-height: 40px;
  width: 100%;
  border: 2px solid $color-input-border;
  outline: none;
  padding: 5px;
  font-size: 14px;
  transition: border-color 0.4s ease-in;
  &::placeholder {
    color: #929191;
  }
  &:focus {
    box-shadow: inset 5px 5px 15px -2px #000000;
    border-color: #d84f4f;
  }
}
</style>
