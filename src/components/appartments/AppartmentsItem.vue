<template>
  <div class="apartment-item">
    <img
      :src="photoSrc ? photoSrc : '/img/no-image.png'"
      alt="photo apartment"
      class="apartment-photo"
    />
    <div class="apartment-info">
      <p class="apartment-title">{{ title }}</p>
      <p class="apartment-desc">{{ descr }}</p>
      <p class="apartment-desc">{{ city }}</p>
      <div class="apartment-raiting">
        <StarRaiting :raiting="raiting" />
      </div>
      <p class="apartment-price">price: {{ price }}</p>
    </div>
    <router-link
      :to="{ name: 'apartmentPage', params: { id }, query: { city } }"
      class="router-link"
    ></router-link>
  </div>
</template>

<script>
import StarRaiting from "../StarRaitingView";

export default {
  name: "AppartmensItem",
  components: {
    StarRaiting,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    descr: {
      type: String,
      default: "",
    },
    raiting: {
      type: String,
      default: "0",
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
    id: {
      require: true,
    },
  },


//  filters: {
//     intlTW: function(value,item) {
      
//       if (!value) return "";    
//       console.log(item) 
//       return  new Intl.NumberFormat('zh-Hans-CN-u-nu-hanidec').format(Number(value))
//     },
//   },
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
  padding:30px 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  overflow: hidden;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease-in;
  background-color: rgba(0,0,0,0.6);
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

.apartment-title{
   max-height: calc(1em * 1.2 * 2);
   overflow: hidden;
  font-size: 1.6rem;
  color: #f7f1f1;
  font-weight: 700;
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
