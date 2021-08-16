<template>
  <form class="form-wrapper">
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
      <div class="rating_vallue">
        {{ratingValue}}
      </div>
    </div>
    <div class="control_wrapper">
        <p class="control-info">add raiting</p>
        <button class="button-add-raiting">
          <IconAddRaiting class="icon-raiting"/>
        </button>
    </div>
    
  </form>
</template>

<script>
import IconAddRaiting from '../assets/svg/icon-ok.svg'

export default {
  name: "StarRaitingAdd",
  components:{
    IconAddRaiting
  },
  data() {
      return{         
          ratingInputValue:'',
      }
  },

  props: {
    raiting: {
      type: String,
      default: "0",
    },
    raitingCounter: {
      type: String,
      default: "0",
    },
    starLimit: {
      type: Number,
      default: 5,
    },
  },
  // methods:{
  //   init(){
  //     if(this.raiting>0){

  //     }
  //   }

  // },

  // created(){
  //  this.init();
  // },

  computed:{  
    ratingValue(){
      let calcRaiting=0;
      if(this.raiting>0){
        calcRaiting=Number(this.raiting) / Number(this.raitingCounter);
      }
      
      return calcRaiting;
    },  
    
    ratingWidth(){
       let width=0;
       if(this.ratingInputValue!=0){
         width=Number(this.ratingInputValue) / 0.05;
       }
         return `width:${width}%;`;
    }
  }
};
</script>

<style lang="scss" scoped>
.form-wrapper {
  cursor: pointer;
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
