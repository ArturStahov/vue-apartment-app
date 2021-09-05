<template>
  <div>
      <img
      :src="image"
      alt="photo apartment"
      class="apartment-photo"
    />
  </div>
</template>

<script>
export default {
  name: "ItemListElement",

  props: {
    image: {
      type: String,
      default: "/img/no-image.png",
    },
    ratingCounter: {
      type: String,
    },
    rating: {
      type: String,
    },
    id: {
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>

.apartment-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
