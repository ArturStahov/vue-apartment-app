<template>
  <form class="form-wrapper">
    <div class="raiting">
      <div class="raiting_body">
        <div :style="ratingActiv" class="raiting_active">
          <div class="raiting_items_list">
            <input type="radio" class="rating_item" value="1" name="rating" v-model="ratingInputValue" />
            <input type="radio" class="rating_item" value="2" name="rating" v-model="ratingInputValue"/>
            <input type="radio" class="rating_item" value="3" name="rating" v-model="ratingInputValue"/>
            <input type="radio" class="rating_item" value="4" name="rating" v-model="ratingInputValue"/>
            <input type="radio" class="rating_item" value="5" name="rating" v-model="ratingInputValue"/>
          </div>
        </div>
      </div>
      <div class="rating_vallue">
        {{ratingInputValue}}
      </div>
    </div>
    <p class="info">add raiting</p>
  </form>
</template>

<script>
export default {
  name: "StarRaitingAdd",
  data() {
      return{
          ratingActiv:'',
          ratingInputValue:'',

      }
  },
  props: {
    raiting: {
      type: String,
      default: "0",
    },
    starLimit: {
      type: Number,
      default: 5,
    },
  },
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
}

.rating_vallue {
  font-size: 16px;
  color: #f7cc40;
  line-height: 1;
  padding: 0px 0px 0px 10px;
}

.info {
  font-size: 16px;
  color: #f7cc40;
  line-height: 1;
  padding: 10px 0px 0px 0px;
}
</style>
