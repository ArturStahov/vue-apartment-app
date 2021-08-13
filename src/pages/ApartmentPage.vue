<template>
  <main class="main-wrapper">
    <ButtonBack class="button-back"/>
    <ApartmentDescription :item="apartmentsItem" />
    <div class="comment-wrapper">
      <ApartmenCommentList :commentArray="apartmentComments" class="comment-list" />
      <CommentForm @submit="handlerCommentForm"/>
    </div>
  </main>
</template>

<script>
import ApartmentDescription from "../components/apartmentPageComponents/ApartmentDescription";
import { mapActions } from "vuex";
import ApartmenCommentList from "../components/apartmentPageComponents/ApartmenCommentList.vue";
import CommentForm from "../components/apartmentPageComponents/CommentForm.vue";
import ButtonBack from "../components/ButtonBack.vue";
export default {
  name: "ApartmentPage",
  components: { ApartmentDescription, ApartmenCommentList, CommentForm,ButtonBack },
  data() {
    return {
      
    };
  },

  methods: {
    ...mapActions("apartment", ["getApartmentByID","getAllComments","addComment"]),

    async initApartment(id) {
      try {
        await this.getApartmentByID(id);
        await this.getAllComments(id);
      } catch (error) {
        console.log(error);
      }
    },

    handlerCommentForm(formData){
      // дописать роут на беке для отправки коментов на сервер а также получения комментов
      const payload={
        comment:formData.comment,
        projectId:this.$route.params.id,
        authorId:this.user.id,  
        authorName:this.user.name, 
        authorEmail:this.user.email,
        authorAvatar:this.user.avatar,      
      }
      console.log('handlerCommentForm-formdata',payload);
      this.addComment(payload);
    }
  },
  created() {
    if (!this.isLogin) {
      this.$router.push({ name: "homePage" });
    } else {
      this.initApartment(this.$route.params.id);
    }
  },

  computed: {
    user(){
        return this.$store.state.auth.user
    },
    isLogin() {
      return this.$store.state.auth.isLoggedIn;
    },
    apartmentsItem() {
      return this.$store.state.apartment.apartmentItem;
    },
    apartmentComments() {
      return this.$store.state.apartment.apartmenComments;
    },
  },
  watch: {
    isLogin(value) {
      if (!value) {
        this.$router.push({ name: "homePage" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.button-back {
  position: absolute;
  left: 0px;
  bottom: -60px;
}
.main-wrapper {
  display: flex;
  position: relative;
  padding: 20px 20px 20px 20px;
  max-width: 900px;
  margin: 5% auto 7%;
  background: rgba($color: #fff, $alpha: 0.7);
  @media screen and(max-width:768px) {
    flex-wrap: wrap;
  }
}

.comment-wrapper{
   width: 500px;
}

.comment-list {
  margin-bottom: 20px;
  background: #fff;
  border: 2px solid #918f8fd4;
 
  width: 100%;
  @media screen and(max-width:768px) {
    width: 100%;
  }
}
</style>
