<template>
  <div class="chat-wrapper" ref="chatRef">
    <div class="chat-header">
      <button @click="handlerButtonClose" type="button" class="btn_close">
        <CloseIcon class="close-icon" />
      </button>
    </div>
    <div class="chat-body">
      <div class="chat-view">
        <ul id="scroolContainer" class="message-list">
          <ChatMessage
            v-for="{ id, name, avatar, date, message, userMessage } in messageArray"
            :name="name"
            :avatar="avatar"
            :date="date"
            :message="message"
            :key="id"
            :userMessage="userMessage"
            class="comment-item"
          />
          <li id="scroolGuard" ref="scroolGuard"></li>
        </ul>
      </div>
      <ChatForma @submit-message="handlerCreateMessage"/>
    </div>
    <div class="chat-footer"></div>
  </div>
</template>

<script>
import uniqid from 'uniqid';
import CloseIcon from "../../assets/svg/close-icon.svg";
import ChatMessage from "./ChatMessage.vue";
import ChatForma from "./ChatForma.vue";
import {mapGetters, mapActions} from "vuex";
import moment from 'moment';

export default {
  name: "Chat",
  components: {
    ChatMessage,
    CloseIcon,
    ChatForma,
  },
 
  data() {
    return {
      uniqid,
      ws: null,
      timerID: null,
      startSocket: true
    };
  },

  mounted() {
    this.$emit("get-ref-event", this.$refs.chatRef);
    if(this.ws){
      this.ws.close();
    }
    this.startWebsocket();
  },

  beforeDestroy(){
    this.startSocket= false;
    this.ws.close();
    this.ws = null;
    console.log('SOCKET CLOSE: UNMOUNTED COMPONENT CHAT')
  },

  computed:{
    
    userID(){
      return this.$store.state.auth.user.id;
    },

    messageArray() {
      return this.$store.state.chat.messages;
    }

  },

  methods: {
    ...mapGetters("auth", ["getUserId","getUserName","getUserAvatar"]),
    ...mapActions("chat",["addChatMessage"]),

   startWebsocket() { 
     if(this.startSocket) {
       this.ws = new WebSocket('wss://apartment-service-api.herokuapp.com/chat');
       this.ws.onclose = this.handlerCloseSocket;
       this.ws.onopen = this.handlerOpenedSocket;
       this.ws.onmessage = this.handlerRetraiverMessage;
     }
  },

   handlerRetraiverMessage({ data }) {
     const message = JSON.parse(data); 
     
     if(message.userId === this.userID) {
       message.userMessage = true;
     }

     this.addChatMessage(message);
     const el =this.$refs.scroolGuard
      if (el) {
        setTimeout(()=> el.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'start' }),500)   
      }    
     console.log('Message from Server Socket', message);    
   },

   handlerCloseSocket(){
     if(this.startSocket) {
       this.ws = null
       this.timerID = setTimeout(this.startWebsocket, 300);
       console.log('Socket close start process reopened!!!')
     }
  },

   handlerOpenedSocket() {
    this.timerID = clearTimeout();
    this.timerID = null;
    console.log('socket open!!');
  },

    handlerButtonClose() {    
      this.$emit("close-chat-event", true);
    },

    handlerCreateMessage(msg) {
      msg.name = this.getUserName();
      msg.userId = this.getUserId();
      msg.avatar = this.getUserAvatar();
      msg.id = this.uniqid();
      msg.userMessage = false;
      msg.date = moment().format('LLL');
      console.log("message from formchat",msg)
      const data = JSON.stringify(msg);
      this.ws.send(data);
    }
    
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

.message-list{
  display: flex;
  flex-direction: column;
  padding: 10px;
}
</style>
