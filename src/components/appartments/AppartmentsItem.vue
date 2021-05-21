<template>
  <div class="apartment-item">
    <img
      :src="photoSrc ? photoSrc : '/img/no-image.png'"
      alt="photo apartment"
      class="apartment-photo"
    />
    <div class="apartment-info">
      <p class="apartment-desc">{{ descr }}</p>
      <p class="apartment-desc">{{ city }}</p>
      <div class="apartment-raiting">
        <StarRaiting :raiting="raiting" />
      </div>
      <p class="apartment-price">price: {{ price }} $ per/month</p>
    </div>
    <router-link
      :to="{ name: 'apartmentPage', params: { id }, query: { city } }"
      class="router-link"
    ></router-link>
  </div>
</template>

<script>
import StarRaiting from "../StarRaiting";

export default {
  name: "AppartmensItem",
  components: {
    StarRaiting,
  },
  props: {
    descr: {
      type: String,
      default: "",
    },
    raiting: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      require: true,
    },
    photoSrc: {
      type: String,
      default: "/img/no-image.png",
    },
    city: {
      type: String,
      require: true,
    },
    id: {
      require: true,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.apartment-item {
  position: relative;
  width: 300px;
  height: 200px;
  cursor: pointer;
  &:hover .apartment-info {
    visibility: visible;
    opacity: 1;
  }
}

.apartment-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.apartment-info {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  max-height: 200px;
  overflow: hidden;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease-in;
}
.apartment-raiting {
  margin-bottom: 10px;
}
.apartment-price {
  font-size: 1.4rem;
  color: #f8e10c;
  font-weight: 600;
}

.apartment-desc {
  max-height: calc(1em * 1.2 * 3); //всегда будет максимум 3 линии текста
  overflow: hidden;
  font-size: 1.4rem;
  color: #f7f1f1;
  font-weight: 400;
  margin-bottom: 10px;
}

.router-link {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}
</style>
