<template>
  <div v-if="show"  class="modal-body">  
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
.modal-body {
    width: 200px;
    height: 80px;
    background-color: rgb(236, 208, 113);
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
