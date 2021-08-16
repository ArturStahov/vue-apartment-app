<template>
  <router-link :to="{ name: 'contentPage' }">
    <BackIcon class="button-icon"/>
  </router-link>
</template>

<script>
import BackIcon from '../assets/svg/back.svg';

export default {
  name: "ButtonBack",
  components:{
    BackIcon
  }
};
</script>

<style lang="scss" scoped>
.button-icon {
  width: 35px;
  height: 35px;
  fill: #fff;
  transition: fill 0.4s ease-in;
  &:hover {
    fill: rgb(238, 160, 15);
  }
}
</style>