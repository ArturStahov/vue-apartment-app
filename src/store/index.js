import Vuex from 'vuex';
import Vue from 'vue';
import authModule from "./modules/auth"
import apartmentModule from "./modules/apartment"
import chatModule from "./modules/chat"

Vue.use(Vuex)


const store = new Vuex.Store({
    modules: {
        auth: authModule,
        apartment:apartmentModule,
        chat:chatModule
    }
})

export default store