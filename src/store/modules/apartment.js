import { fetchGetAllPublicApartment,fetchGetPublicApartmentByID,getAllComments,addComment,fetchUpdateApartment,fetchCreateApartment,fetchGetAllMyApartment } from "../../services";
import * as notification from '../../utils/errorNotification'


const initialState = {
    apartment: [],
    myApartments: [],
    isLoading: false,
    apartmentItem:{},
    apartmentComments:[],
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
        allMyApartments(state, payload) {
            state.myApartments = payload;
        },
        isLoading(state, payload) {
            state.isLoading = payload;
        },
        setApartmentItem(state,payload) {
            state.apartmentItem=payload;
        },
        allApartmentComment(state,payload) {
           state.apartmentComments=payload;
        },
        addComment(state,payload) {
            state.apartmentComments=[...state.apartmentComments,payload];
        },
        addApartmentItem(state,payload) {
            state.apartment=[...state.apartment,payload];
        },
       

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

        async getAllMyApartments({commit}){
            try {
                const result=await fetchGetAllMyApartment();
                const {apartment}=result.data.data;
                console.log(apartment,'resultAllMy-apartments!!!!!')
                commit("allMyApartments",apartment);
            } catch (error) {
                notification.errorNotification(error.message)
            }
        },

        async getApartmentByID({ commit },payload){
            const result=await fetchGetPublicApartmentByID(payload);
            const {apartment}=result.data.data;
            console.log(apartment,'oneApartmentResult!!!!!')
            commit("setApartmentItem",apartment);
        },

        async getAllComments({commit},projectId) {
            try {
                const result=await getAllComments(projectId);
                const {comments}=result.data.data;
                console.log(comments,'resultAllComments!!!!!')
                commit("allApartmentComment",comments);
            } catch (error) {
                notification.errorNotification(error.message)
            } 
        },

        async addComment({commit},payload) {
            try {
                const result=await addComment(payload);
                const {comment}=result.data.data;
                console.log(comment,'resultCommentADD!!!!!')
                commit("addComment",comment);
            } catch (error) {
                notification.errorNotification(error.message);
            } 
        }, 
        
        async updateAppartmentItem({commit},payload) {
            try {
                const result=await fetchUpdateApartment(payload);
                const {apartment}=result.data.data;
                console.log("result update apartment",apartment)
                commit('setApartmentItem',apartment)
                
            } catch (error) {
                notification.errorNotification(error.message) 
            }
        },

        async addAppartmentItem({commit},payload) {
            try {
                const result=await fetchCreateApartment(payload);
                const {apartment}=result.data.data;
                console.log("result add apartment",apartment)
                commit('addApartmentItem',apartment)
                
            } catch (error) {
                notification.errorNotification(error.message) 
            }
        },

        
    }
}