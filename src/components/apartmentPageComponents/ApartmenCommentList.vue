<template>
  <div v-show="commentArray.length > 0" class="wrapper-comment">
    <CommentItem
      v-for="commentObject in commentArray"
      :comment="commentObject"
      :key="commentObject.id"
      class="comment-item"
    />
  </div>
</template>

<script>
import CommentItem from "./CommentItem.vue";
export default {
  name: "ApartmenCommentList",
  components: { CommentItem },
  props: {
    commentArray: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper-comment {
  display: flex;
  flex-direction: column;
  padding: 10px;
  min-width: 200px;
  max-height: 475px;
  overflow-y: auto;
}

.comment-item:not(:last-child) {
  margin-bottom: 15px;
}
</style>
