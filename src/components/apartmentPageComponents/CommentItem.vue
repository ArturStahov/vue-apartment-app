<template>
  <div class="comment some">
    <img
      :src="comment.authorAvatar ? comment.authorAvatar : 'img/no-image.png'"
      class="comment__user-icon"
    />
    <!-- <p class="data">{{ comment.data }}</p> -->
    <div class="comment__content">
      <p class="comment__user-name">name: {{ comment.authorName }}</p>
      <p class="comment__text">{{ comment.comment }}</p>
    </div>
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
.comment {
  display: flex;
  border: 2px solid #aca8a8;
  background: #ebe8e8;
  border-radius: 10px;
  padding: 5px 5px 5px 25px;
  position: relative;
  width: 100%;

  &__user-name {
    margin-bottom: 10px;
    font-size: 1.4rem;
    color: #2562b3;
  }

  &__user-icon {
    margin-right: 30px;
    object-fit: cover;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
  }

  &__text {
    font-size: 1.4rem;
    color: #000000;
  }
}

.data {
  font-size: 1.2rem;
  color: #646262;
  margin-bottom: 10px;
}
</style>
