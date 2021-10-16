<template>
  <div v-if="show"  class="modal">  
    <slot></slot>
   </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
      show:{
          type:Boolean,
          default: false
      }
  },

};
</script>

<style lang="scss" scoped>
.modal {
    width: 250px;
    min-height: 100px;
    padding: 10px;
    background-color: #ee9817;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border-radius: 10px;
    display:flex;
    justify-content:center;
    align-items: center;
}

</style>
