<template>
  <div class="item">
    <img :src="image" alt="photo apartment" class="apartment-photo" />
    <div class="overlay">
      <span class="informer">
        {{ rating }}
      </span>
      <div class="informer-wrapper">
        <IconUsers class="icons-user" />
        <span class="informer">
          {{ ratingCounter }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import IconUsers from "../../assets/svg/icon-users.svg";

export default {
  name: "ItemListElement",
  components: {
    IconUsers,
  },

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

.informer {
  font-size: 1.4rem;
  color: #fff;
  font-weight: 600;
}

.icons-user {
  margin-right: 5px;
  width: 15px;
  height: 20px;
  fill: #f7cc40;
}

.informer-wrapper{
  display: flex;
  
}

.item {
  position: relative;
  transition: transform 0.4s ease-in;

  &:hover {
    transform: scale(1.2);
  }

  &:hover .overlay {
    opacity: 1;
    visibility: visible;
    border: 2px solid #d16f1f;
  }
}

.overlay {
  padding: 5px;
  display: flex;
  justify-content:space-between;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: rgba(8, 8, 8, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease-in;
}
</style>
