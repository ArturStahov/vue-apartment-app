<template>
  <div class="item">
    <img :src="image" alt="photo apartment" class="apartment-photo" />
    <div class="overlay">
      <div class="informer-wrapper">
        <span class="informer">
          {{ item.rating }}
          <IconRating class="icons-user" />
        </span>

        <span class="informer">          
          {{ item.ratingCounter }}
          <IconUsers class="icons-user" />
        </span>
        <span class="informer">          
          {{ cardComments.length }}
          <IconComments class="icons-user" />
        </span>
      </div>
      <div class="control-wrapper">
        <button class="control-button"> <IconDelete class="control-icon"/></button>
        <button @click="handlerItemEdit" class="control-button"> <IconEdit class="control-icon"/></button>
      </div>
    </div>
  </div>
</template>

<script>
import IconUsers from "../../assets/svg/icon-users.svg";
import IconEdit from "../../assets/svg/pencil.svg";
import IconDelete from "../../assets/svg/delete.svg";
import IconRating from "../../assets/svg/star.svg";
import IconComments from "../../assets/svg/comments.svg";


export default {
  name: "ItemListElement",
  components: {
    IconUsers,
    IconEdit,
    IconDelete,
    IconRating,
    IconComments,
  },

  props: {
    image: {
      type: String,
      default: "/img/no-image.png",
    },
    item:{ 
      type:Object,
      required: true,
    }
  },

  data() {
    return {
      cardComments:[]
    }
  },
  created() {
      
  },
  
  methods: {
   handlerItemEdit(){
     this.$emit('selectEditItem',this.item);
   }
  
  },
  
  computed: {
    
  }
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

.informer-wrapper {
  display: flex;
  flex-direction: column;
}
.control-wrapper {
  display: flex;
  position: absolute;
  bottom: 1%;
}

.control-button{
  width: 30px;
  height: 30px;
  display: flex;
  margin-right: 5px;
  align-items:center;
  justify-content:center;
  background: #f7cc40;
  border-radius: 10px;
  cursor: pointer;
  border: none;
}

.control-icon {
  width: 20px;
  height: 20px;
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
  position: relative;
  padding: 5px;
  display: flex;
  justify-content: space-between;
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
