<template>
  <div class="main-wrapper">
    <section class="section-form">
      <h2 class="section-title">Form create apartment</h2>
      <CreateItemForm
        @submitCreate="handlerCreateItem"
        @submitUpdate="handlerEventUpdate"
        :editItem="selectEditItem"
      />
    </section>
    <section class="section-my-apartments">
      <h2 class="section-title">You apartments</h2>
      <p class="no-items" v-if="!items.length">create you apartments!</p>
      <div class="apartments-list" v-if="items.length > 0">
        <ItemListElement
          v-for="item in items"
          :key="item._id"
          :item="item"
          :image="item.image"
          @selectEditItem="handlerEditItem"
          @selectDeleteItem="handlerSetDeleteItem"
          class="list_item"
        />
      </div>
    </section>
   <transition name="fade">
    <Modal :show="showModal">
      <div class="modal-body">
        <p class="header-modal">Remove this item?</p>
        <div class="control-wrapper">
          <button @click="handlerDeleteItem" class="modal-button">
            Remove
          </button>
          <button @click="handlerCancelDelete" class="modal-button">
            Cancel
          </button>
        </div>
      </div>
    </Modal>
    </transition>
  </div>
</template>

<script>
import CreateItemForm from "../components/myadmin/CreateItemForm";
import ItemListElement from "../components/myadmin/ItemListElement";
import { mapActions } from "vuex";
import Modal from "../components/Modal.vue";
export default {
  name: "MyAdminPage",

  components: {
    CreateItemForm,
    ItemListElement,
    Modal,
  },

  data() {
    return {
      selectEditItem: {},
      isShowModals: false,
      deleteItemId: null,
    };
  },

  computed: {
    isLogin() {
      return this.$store.state.auth.isLoggedIn;
    },
    showModal() {
      return this.isShowModals;
    },
    items() {
      return this.$store.state.apartment.myApartments;
    },
  },

  methods: {
    ...mapActions("apartment", [
      "addAppartmentItem",
      "getAllMyApartments",
      "updateAppartmentItem",
      "deleteMyApartmentByID",
    ]),

    async init() {
      try {
        await this.getAllMyApartments();
      } catch (error) {
        console.log(error);
      }
    },

    handlerCreateItem(value) {
      this.addAppartmentItem(value);
      console.log("create", value);
    },

    handlerEventUpdate(value) {
      console.log("updatwe", value);
      this.updateAppartmentItem(value);
    },

    handlerEditItem(item) {
      this.selectEditItem = item;
    },

    handlerSetDeleteItem(id) {
      console.log("delete item id is:", id);
      if (id) {
        this.isShowModals = true;
        this.deleteItemId = id;
      }
    },

    handlerCancelDelete() {
      this.isShowModals = false;
      this.deleteItemId = null;
    },

    handlerDeleteItem() {
      this.deleteMyApartmentByID(this.deleteItemId);
      this.isShowModals = false;
      this.deleteItemId = null;
    },
  },

  created() {
    if (!this.isLogin) {
      this.$router.push({ name: "homePage" });
    }

    this.init();
  },

  watch: {
    isLogin(value){
      if(!value) {
         this.$router.push({ name: "homePage" });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "../assets/scss/modal-alert";

.section-form {
  width: 450px;
}

.no-items {
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 10px;
  color: #fff;
}

.section-title {
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 10px;
  color: #fff;
}

.section-my-apartments {
  padding: 0px 10px 0px;
  width: 100%;

  .apartments-list {
    padding: 15px;
    height: 330px;
    overflow-y: auto;
    background: rgba(190, 190, 190, 0.397);
    border: 2px solid grey;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .list_item {
    width: 120px;
    height: 150px;
    margin-bottom: 10px;

    &:not(:last-child) {
      margin-right: 15px;
    }
  }
}

.main-wrapper {
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  position: relative;
}

@media all and(max-width: $mobile-bp-max) {
  .main-wrapper {
    justify-content: center;
    flex-direction: column;
  }

  .section-form {
    margin: 0 auto 20px;
  }

  .apartments-list {
    justify-content: center;
  }
}

@media all and(max-width: $mobile-bp) {
  .section-form {
    width: 100%;
  }
}
</style>
