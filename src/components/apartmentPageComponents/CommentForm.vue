<template>
  <form class="comment-form" @submit.prevent="handlerSubmit">
    <textarea
      v-model="inputComment"
      name="comment"
      class="comment-input"
      placeholder="write you question"
    ></textarea>
    <button type="submit" class="button-submit">add comment</button>
  </form>
</template>

<script>
export default {
  name: "CommentForm",
  data() {
    return{
      inputComment:''
    }
  },
  methods: {
    handlerSubmit() {
      const formData = {
        comment: this.inputComment,
      };
      this.$emit("submit", formData);
      this.inputComment=''
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
.comment-form {
   
}

.comment-input {
  min-height: 60px;
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

.button-submit{
  position: relative;
  width: 100%;
  height: 40px;
  background-color: #d16f1f;
  outline: none;
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: #070707;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.4s ease-in;
  &:hover {
    background-color: transparent;
    border: 2px solid #d16f1f;
    color: #d16f1f;
  }
}
</style>
