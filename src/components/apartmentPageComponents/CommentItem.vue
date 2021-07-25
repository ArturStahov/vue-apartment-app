<template>
  <div class="wrapper">
    <img
      :src="comment.userIcon ? comment.userIcon : 'img/no-image.png'"
      class="user-icon"
    />
    <p class="data">{{ comment.data }}</p>
    <p class="user-name">name: {{ comment.userName }}</p>
    <p class="comment">{{ comment.comment }}</p>
  </div>
</template>

<script>
export default {
  name: "CommentItem",
  props: {
    comment: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  border: 2px solid #aca8a8;
  background:#ebe8e8;
  border-radius: 10px;
  padding: 5px 5px 5px 75px;
  position: relative;
  width: 100%;
}

.user-name {
  font-size: 1.4rem;
  color: #2562b3;
}
.user-icon {
  position: absolute;
  top: 5px;
  left: 10px;
  object-fit: cover;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
}
.data {
  font-size: 1.2rem;
  color: #646262;
  margin-bottom: 10px;
}
.comment {
  font-size: 1.4rem;
  color: #000000;
}
</style>
