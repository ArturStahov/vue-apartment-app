<template>
  <main class="main-wrapper">
    <router-link :to="{ name: 'contentPage' }" class="button-back">
      <svg
        class="button-icon"
        version="1.1"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <title>circle-left</title>
        <path
          d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z"
        ></path>
        <path
          d="M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z"
        ></path>
      </svg>
    </router-link>
    <ApartmentDescription :item="apartmentsItem" />
    <div class="comment-wrapper">
      <ApartmenCommentList :commentArray="testComment" class="comment-list" />
      <CommentForm @submit="handlerCommentForm"/>
    </div>
  </main>
</template>

<script>
import ApartmentDescription from "../components/apartmentPageComponents/ApartmentDescription";
import { mapActions } from "vuex";
import testCommentJson from "../commentTest.json";
import ApartmenCommentList from "../components/apartmentPageComponents/ApartmenCommentList.vue";
import CommentForm from "../components/apartmentPageComponents/CommentForm.vue";
export default {
  name: "ApartmentPage",
  components: { ApartmentDescription, ApartmenCommentList, CommentForm },
  data() {
    return {
      testComment: testCommentJson,
    };
  },
  methods: {
    ...mapActions("apartment", ["getApartmentByID"]),

    async initApartment(id) {
      try {
        await this.getApartmentByID(id);
      } catch (error) {
        console.log(error);
      }
    },
    handlerCommentForm(formData){
      // дописать роут на беке для отправки коментов на сервер а также получения комментов
      const payload={
        comment:formData.comment,
        projectId:this.$route.params.id,
        commentAuthorId:this.user.id,  
        commentAuthorName:this.user.name, 
        commentAuthorEmail:this.user.email,
        commentAuthorAvatar:this.user.avatar,      
      }
      console.log('handlerCommentForm-formdata',payload)
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
.button-icon {
  width: 35px;
  height: 35px;
  fill: #fff;
  transition: fill 0.4s ease-in;
  &:hover {
    fill: rgb(238, 160, 15);
  }
}
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
  margin: 5% auto 3%;
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
