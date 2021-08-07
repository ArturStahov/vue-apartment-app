<template>
  <div class="wrapper">
    <div class="description-block">
      <div class="header-wrapper">
        <StarRaitingAdd :raiting="item.raiting" class="raiting-block"/>
        <h2 class="titles">
        {{ item.title ? item.title : "" }}
      </h2>
      </div>

      <img
        :src="item.image ? item.image : '/img/no-image.png'"
        class="apartment-photo"
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
import StarRaitingAdd from '../StarRaitingAdd.vue'



export default {
  name: "apartmentDescription",
  components: {StarRaitingAdd },
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
  height:50px;
}

.description-block {
  margin: 0px 30px 0px 0px;
  max-width: 500px;
}

.apartment-photo {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
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
