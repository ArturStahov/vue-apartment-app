<template>
  <div class="wrapper">
    <div class="raiting">
      <div class="raiting_body">
        <div :style="ratingWidth" class="raiting_active">         
        </div>
        <div class="raiting_items_list">
            <input type="radio" class="rating_item" value="1" name="rating" v-model="ratingInputValue" />
            <input type="radio" class="rating_item" value="2" name="rating" v-model="ratingInputValue"/>
            <input type="radio" class="rating_item" value="3" name="rating" v-model="ratingInputValue"/>
            <input type="radio" class="rating_item" value="4" name="rating" v-model="ratingInputValue"/>
            <input type="radio" class="rating_item" value="5" name="rating" v-model="ratingInputValue"/>
          </div>
      </div>
      <p class="rating_vallue">
        {{ratingValue}}
      </p>
      
      <IconUsers class="icons-user"/>

      <p class="rating-counter-vallue">
        {{ratingCounter}}
      </p>
    </div>
    <div class="control_wrapper">
        <p class="control-info">add raiting</p>
        <button @click="handlerAddReiting" class="button-add-raiting">
          <IconAddRaiting class="icon-raiting"/>
        </button>
    </div>
    
  </div>
</template>

<script>
import IconAddRaiting from '../assets/svg/icon-ok.svg';
import IconUsers from '../assets/svg/icon-users.svg'
import { mapActions } from "vuex";

export default {
  name: "StarRaitingAdd",
  components:{
    IconAddRaiting,
    IconUsers
  },
  data() {
      return{         
          ratingInputValue:'',
      }
  },

  props: {
    rating: {
      type: String,
      default: "0",
    },
    ratingCounter: {
      type: String,
      default: "0",
    },
    starLimit: {
      type: Number,
      default: 5,
    },
    itemObject:{
      type:Object
    }
  },
  methods:{
    ...mapActions("apartment", ["updateAppartmentItem"]),

    handlerAddReiting(){
      console.log(this.itemObject)
      

      if(this.itemObject){
        let newRating=Number(this.itemObject.rating) + Number(this.ratingInputValue);
        let newRatingCounter=Number(this.ratingCounter) + 1;
    
        this.itemObject.rating=newRating.toString();
        this.itemObject.ratingCounter=newRatingCounter.toString();

        this.updateAppartmentItem(this.itemObject);
        this.ratingInputValue=(newRating / newRatingCounter).toFixed(1);
      }
      
    }
  },

  computed:{  
    ratingValue(){
      let calcRating=0;
      if(Number(this.rating) > 0){
        calcRating=(Number(this.rating) / Number(this.ratingCounter)).toFixed(1);    
      }
      
      return calcRating;
    },  

    ratingWidth(){
       let width=0;
       if(this.ratingInputValue){
         width=Number(this.ratingInputValue) / 0.05;
       }

       if(!this.ratingInputValue && this.rating) {
         width=Number(this.ratingValue)/0.05
       }
         return `width:${width.toFixed(2)}%;`;
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
}

.raiting {
  display: flex;
  align-items: flex-end;
  line-height: 0.75;
  font-size: 24px;  
}
.raiting_body {
  position: relative;
  
}

.raiting_body::before {
  content: "★★★★★";
  display: block;
}

.raiting_active {
  position: absolute;
  width: 75%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
}

.raiting_active::before {
  content: "★★★★★";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  color: #f7cc40;
}

.raiting_items_list {
  display: flex;
  position: absolute;
  width: 100%;
  height: 40px;
  top: 0;
  left: 0;
}

.rating_item {
  flex: 0 0 20%;
  height: 100%;
  opacity: 0;
  position: relative;
  z-index: 99;
  cursor: pointer;
}

.rating_vallue {
  font-size: 16px;
  color: #f7cc40;
  line-height: 1;
  padding: 0px 0px 0px 10px;
  margin-right: 15px;
}

.rating-counter-vallue {
  font-size: 16px;
  color: #f7cc40;
  line-height: 1;
  padding: 0px 0px 0px 10px;
}

.icons-user {
  width: 15px;
  height: 20px;
  fill:#f7cc40;
}

.control-info {
  font-size: 16px;
  color: #f7cc40;
  line-height: 1;
  margin-right: 8px;
}

.button-add-raiting {
  width: 40px;
  height: 25px;
  border:2px solid #0f0f0f;
  border-radius: 10px;
  background-color:#f7cc40;
  cursor: pointer;
  transition: box-shadow 0.4s ease-in;
  &:hover {
     box-shadow: 0px 3px 6px 3px rgba(247,204,64,0.27);
  }
}

.control_wrapper {
  display: flex;
  align-items: center;
  padding: 10px 0px 0px 0px;
}

.icon-raiting{
  width: 20px;
  height: 20px;
}
</style>
