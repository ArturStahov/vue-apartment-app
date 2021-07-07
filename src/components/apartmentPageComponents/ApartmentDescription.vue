<template>
  <div class="wrapper">
    <h2 class="title">
      {{ title }}
    </h2>
    <img :src="photoSrc" :alt="title" class="apartment-photo" />
    <p class="city">City: {{ city }}</p>
    <p class="price">Price:{{ price }}</p>
    <p class="description">Description:{{ descr }}</p>
  </div>
</template>

<script>
export default {
  name: "apartmentDescription",
  props: {
    title: {
      type: String,
      default: "",
    },
    descr: {
      type: String,
      default: "",
    },
    price: {
      type: String,
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
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 600px;
}

.apartment-photo {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  margin-bottom: 20px;
}

.title {
  text-align: center;
  font-size: 1.8rem;
  color: #f8e10c;
  font-weight: 600;
  margin-bottom: 20px;
}

.city {
  font-size: 1.6rem;
  color: #f8e10c;
  font-weight: 600;
  margin-bottom: 10px;
}

.price {
  font-size: 1.6rem;
  color: #f8e10c;
  font-weight: 700;
  margin-bottom: 10px;
}

.description {
  font-size: 1.4rem;
  color: #000000;
  font-weight: 600;
}
</style>
