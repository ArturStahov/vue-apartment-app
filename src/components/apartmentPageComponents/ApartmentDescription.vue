<template>
  <div class="wrapper">
    <div class="description-block">
      <div class="header-wrapper">
        <StarRaitingAdd 
         :rating="item.rating"
         :ratingCounter="item.ratingCounter"
         :itemObject="item"
         class="raiting-block"
         />
        <h2 class="titles">
        {{ item.title ? item.title : "" }}
      </h2>
      </div>

      <SwiperCorusel
        class="apartment-photo-slide"
        :images="apartmentImages"
      />

      <p class="citys">City: {{ item.city ? item.city : "" }}</p>
      <p class="prices">Price: {{ item.price ? item.price : "" }}</p>
      <p class="descriptions">
        Description:{{ item.description ? item.description : "" }}
      </p>
    </div>
    
  </div>
</template>

<script>
import StarRaitingAdd from '../StarRaitingAdd.vue';
import SwiperCorusel from './SwiperCorusel.vue';

export default {
  name: "apartmentDescription",
  components: {
    StarRaitingAdd,
    SwiperCorusel
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {    
    };
  },
  computed: {
    apartmentImages() {
      return [`${this.item.image}`,`${this.item.image}`,`${this.item.image}`]
    }
  }
};
</script>

<style lang="scss" scoped>
.header-wrapper{
  display:flex;
}
.wrapper {
  display: flex;
  max-width: 100%;
  @media screen and(max-width:768px) {
    flex-wrap:wrap;
  }
}

.raiting-block{
  padding:5px;
  background-color: #424242;
  margin-right: 40px;
  width:200px;
}

.description-block {
  margin: 0px 30px 0px 0px;
  max-width: 500px;
}

.apartment-photo-slide {
  width: 100%;
  height: 375px;
  margin-bottom: 20px;
}

.titles {
  text-align: center;
  font-size: 1.8rem;
  color: #424242;
  font-weight: 600;
  margin-bottom: 20px;
}

.citys {
  font-size: 1.6rem;
  color: #114e05;
  font-weight: 600;
  margin-bottom: 10px;
}

.prices {
  font-size: 1.6rem;
  color: #114e05;
  font-weight: 700;
  margin-bottom: 10px;
}

.descriptions {
  font-size: 1.4rem;
  color: #000000;
  font-weight: 600;
}
</style>
