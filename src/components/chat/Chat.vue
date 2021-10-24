<template>
  <div class="chat-wrapper" ref="chatRef">
    <div class="chat-header">
      <button @click="handlerButtonClose" type="button" class="btn_close">
        <CloseIcon class="close-icon" />
      </button>
    </div>
    <div class="chat-body">
      <div class="chat-view">
        <ul class="message-list">
          <ChatMessage
            v-for="{ id,name,avatar,date,message } in commentTestArray"
            :name="name"
            :avatar="avatar"
            :date="date"
            :message="message"
            :key="id"
            class="comment-item"
          />
        </ul>
        <div class="scroolGuard" ref="scroolGuard"></div>
      </div>
      <div class="chat-form"></div>
    </div>
    <div class="chat-footer"></div>
  </div>
</template>

<script>
import CloseIcon from "../../assets/svg/close-icon.svg";
import ChatMessage from "./ChatMessage.vue";

export default {
  name: "Chat",
  components: {
    ChatMessage,
    CloseIcon,
  },

  data() {
    return {
      commentTestArray: [
        {
          id: "sdsdvsdvsdv",
          userId:'60cfa45dfe288c00444bbc3c',
          name: "test",
          date: "12.05.2121",
          avatar: "",
          message: "test-1 message skdkskd sdkkds",
        },
        {
          id: "dvdvdvdvsdvsdv",
          userId:'60cfa45dfe2dvdvdvdv444bbc3c',
          name: "testddvdv",
          date: "12.ddv.2121",
          avatar: "",
          message: "test-2 mesdvdvdvv skdkskd sdkkds",
        },
      ],
    };
  },

  mounted() {
    this.$emit("get-ref-event", this.$refs.chatRef);
  },
  methods: {
    handlerButtonClose() {
      this.$emit("close-chat-event", true);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
.chat-wrapper {
  width: 40%;
  height: 100vh;
  background: rgb(119, 118, 118);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 999999;
  transform: translateX(-650px);
  opacity: 0;
  transition: transform 0.4s ease-in-out;
  @media screen and(max-width:$mobile-bp-max) {
    width: 100%;
  }
}

.chat-body {
  padding: 50px 30px 50px;
}

.chat-view {
  width: 100%;
  height: 500px;
  overflow-y: auto;
  border: 2px solid #ee9817;
  background: #474747;
  border-radius: 5px;
  margin-bottom: 30px;
}

.chat-header {
  position: relative;
  margin-bottom: 30px;
}

.btn_close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  background: transparent;
}
.close-icon {
  fill: #ee9817;
}
</style>
