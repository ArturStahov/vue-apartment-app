<template>
  <div class="button-wrapper">
    <button @click="handlerButton" type="button" class="chat-btn"><IconChat class="chat-icon" /></button>
  </div>
</template>

<script>
import IconChat from "../../assets/svg/chat-icon.svg";

export default {
  name: "ChatOpenButton",
  components: {
   IconChat,
  },
  methods: {
      handlerButton(){
          this.$emit('chat-open-close',true);
      }
  }
};
</script>

<style lang="scss" scoped>
.chat-btn {
  width: 50px;
  height: 50px;
  background: rgba($color: #a3a3a3, $alpha: 0.5);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #ee9817;
  border-radius: 5px;
}

.chat-icon {
  width: 30px;
  height: 30px;
  fill: #ee9817;
}
</style>
