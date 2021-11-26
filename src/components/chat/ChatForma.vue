<template>
  <form class="form-message" @submit.prevent="handlerSubmitForm">
    <textarea
      v-model="inputMessage"
      name="message"
      class="message-input"
      placeholder="write you question"
    ></textarea>
    <button type="submit" class="button-submit">add message</button>
  </form>
</template>

<script>
export default {
  name: "ChatForma",
  data() {
      return {
        inputMessage: '',
      }
  },

  methods: {
      handlerSubmitForm(){         
          const message = {
              message:this.inputMessage
          }

          this.$emit('submit-message',message);
          this.inputMessage = "";
      }
  }
};
</script>

<style lang="scss" scoped>
.form-message{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
}

.message-input {
  margin-bottom: 10px;
  min-height: 80px;
  width: 100%;
  border: 2px solid grey;
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
    border-color: #639e63;
  }
}

.button-submit{
  position: relative;
  width: 50%;
  height: 40px;
  background-color: #d16f1f;
  outline: none;
  border: none;
  border-radius: 5px;
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
