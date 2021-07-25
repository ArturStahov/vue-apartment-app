import { fetchGetAllPublicApartment,fetchGetPublicApartmentByID } from "../../services";


import * as notification from '../../utils/errorNotification'


const initialState = {
    apartment: [],
    isLoading: false,
    apartmentItem:{}
}

export default {
    namespaced: true,

    state: {
        ...initialState
    },

    mutations: {
        allAaprtments(state, payload) {
            state.apartment = payload;
        },
        isLoading(state, payload) {
            state.isLoading = payload;
        },
        setApartmentItem(state,payload){
            state.apartmentItem=payload
        }
    },
    actions: {

        async getAllApartments({commit}){
            try {
                const result=await fetchGetAllPublicApartment();
                const {apartment}=result.data.data;
                console.log(apartment,'resultAll!!!!!')
                commit("allAaprtments",apartment);
            } catch (error) {
                notification.errorNotification(error.message)
            }
        },

        async getApartmentByID({ commit },payload){
            const result=await fetchGetPublicApartmentByID(payload);
            const {apartment}=result.data.data;
            console.log(apartment,'oneApartmentResult!!!!!')
            commit("setApartmentItem",apartment);
        }
        // async loginOperation({ commit }, payload) {
        //     try {
        //         const result = await fetchLogin(payload);
        //         const { data } = result.data;

        //         tokenController.set(data.token);

        //         commit("changeUser", data);
        //         commit("isLogin", true);
        //     } catch (error) {
        //         console.log(error);
        //     }
        // },

        // async registrationOperation(payload) {
        //     try {
        //         await fetchRegistration(payload);

        //         notification.infoNotification('registration success!')

        //     } catch (error) {
        //         notification.errorNotification(error.message)
        //         console.log(error);
        //     }
        // },

        // async logOutOperation({ commit }) {
        //     try {
        //         await fetchLogOut();

        //         tokenController.unset();

        //         commit("changeUser", null);
        //         commit("isLogin", false);
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }
    }
}