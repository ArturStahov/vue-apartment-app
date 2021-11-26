<template>
  <li class="message-wrapper" :class="{'user-message':userMessage}">
    <div class="message-header" >
      <img :src="avatar ? avatar : 'img/no-image.png'" alt="" class="avatar" />
      <div class="user-info-wrapper">
        <span class="user-name">{{ name }}</span>
        <span class="date">{{ date }}</span>
      </div>
    </div>
    <p class="message">
      {{ message }}
    </p>
  </li>
</template>

<script>
export default {
  name: "ChatMessage",
  props: {
    name: {
      type: String,
      default: "anonims",
    },
    avatar: {
      type: String,
    },
    date: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    userMessage: {
      type:Boolean,
    }
  },
};
</script>

<style lang="scss" scoped>

.message-wrapper {
  max-width: max-content;
  display:flex;
  flex-direction: column;
  border: 2px solid #363636;
  border-radius: 17px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #1c6342;
  border-bottom-left-radius: 0px;
}

.message-header{
  display:flex; 
  align-items:center;
  margin-bottom: 10px;
}

.avatar{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 20px;
}

.user-info-wrapper {
  display: flex;
  flex-direction: column;
}

.user-name{
  font-size: 1.3rem;
  color:#ee9817;
  font-weight: 600;
  margin-bottom: 5px;
}

.message{
  font-size: 1.3rem;
  color:#ffffff;
}

.user-message {
  align-items: flex-end;
  margin-left: auto;
  background-color: #3c5565;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 17px;

.message-header {
    flex-direction: row-reverse;
  }

.avatar {
     margin-right: 0px;
     margin-left: 20px;
  }
}


</style>
