import Vuex from 'vuex';
import Vue from 'vue';
import authModule from "./modules/auth"
import apartmentModule from "./modules/apartment"

Vue.use(Vuex)


const store = new Vuex.Store({
    modules: {
        auth: authModule,
        apartment:apartmentModule
    }
})

export default store