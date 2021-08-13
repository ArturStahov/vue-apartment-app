import { fetchGetAllPublicApartment,fetchGetPublicApartmentByID,getAllComments,addComment } from "../../services";


import * as notification from '../../utils/errorNotification'


const initialState = {
    apartment: [],
    isLoading: false,
    apartmentItem:{},
    apartmentComments:[]
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
        setApartmentItem(state,payload) {
            state.apartmentItem=payload;
        },
        allApartmentComment(state,payload) {
           state.apartmentComments=payload;
        },
        addComment(state,payload) {
            state.apartmentComments=[...state.apartmentComments,payload];
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
                notification.errorNotification(error.message)
            } 
        },        
    }
}