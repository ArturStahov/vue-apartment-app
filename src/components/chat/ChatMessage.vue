<template>
  <li class="message-wrapper">
    <div class="message-header">
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
  },
};
</script>

<style lang="scss" scoped></style>
