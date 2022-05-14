<template>
 <div class="swiper-wrapper">
   <img
      v-if="!images.length"
      :src="'/img/no-image.png'"
      class="swiper__no-photo-image"
   />
  <swiper
    v-if="images.length"
    class="swiper"
    :options="swiperOption"
  >
    <swiper-slide 
      class="swiper__wrapper"
      v-for="(img, index) in images" 
      :key="index"
    >
      <img :src="img" alt="image apartment" class="swiper__image" />
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css'

export default {
  name: "SwiperCorusel",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return { 
      swiperOption: {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
          },
          pagination: {
            el: '.swiper-pagination'
          }
        }
    }
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
  .swiper {
    height: 100%;
    width: 100%;

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 300px;
      text-align: center;
      font-weight: bold;
      font-size: 12px;
      background-color: #2C8DFB;
      background-position: center;
      background-size: cover;
      color: white;
    }

    .swiper-pagination {
      /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: white;
      }
    }
  }
</style>