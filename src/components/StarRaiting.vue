<template>
    <div class="star-raiting">
        <span v-for='index in starLimit' :key="index" class="star star--outlined"></span>
        <div  :style="`width:${raitingWidth};`" class="star-raiting_fullfilled">
             <span v-for='index in starLimit' :key="index"  class="star star--colored"></span>
        </div>
    </div>
</template>

<script>
    export default {
        name:"StarRaiting",
        props:{
            raiting:{
                type:String,
                default:"0"
            },
            starLimit:{
                type:Number,
                default:5
            }
        },
        computed:{
              raitingWidth(){
                  return Number(this.raiting)/this.starLimit *100 + '%'
              }
        }
    }
</script>

<style lang="scss" scoped>
.star-raiting{
    position: relative;
    display: inline-flex;
    &_fullfilled{
        display: inline-flex;
        position: absolute;
        width:0;
        height:100%;
        top:0;
        left:0;
        overflow:hidden;
    }
    .star{
        display:inline-block;
        width: 18px;
        height: 18px;
        margin:0 3px;
        flex-shrink: 0;
        &--colored{
            background:url('/img/ico/star/star.svg') center no-repeat;
        }
        &--outlined{
            background:url('/img/ico/star/star-colored.svg') center no-repeat;
        }
    }
}

</style>