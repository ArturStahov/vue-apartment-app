import * as Services from "../../services";
import * as Notification from '../../utils/errorNotification'


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
            state.apartmentItem = payload;
        },
        allApartmentComment(state,payload) {
           state.apartmentComments = payload;
        },
        addComment(state,payload) {
            state.apartmentComments = [...state.apartmentComments, payload];
        },
        addApartmentItem(state,payload) {
            state.apartment=[...state.apartment, payload];
            state.myApartments=[...state.myApartments, payload];
        },

        deleteApartmentItem(state,payload) {
            state.apartment = state.apartment.filter(item=>item._id !== payload);
            state.myApartments = state.myApartments.filter(item=>item._id !== payload);
        },
       
    },

    actions: {
        async getAllApartments({commit}){
            try {
                const result=await Services.fetchGetAllPublicApartment();
                const {apartment}=result.data.data;
                console.log(apartment,'resultAll!!!!!')
                commit("allAaprtments",apartment);
            } catch (error) {
                Notification.errorNotification(error.message)
            }
        },

        async getAllMyApartments({commit}){
            try {
                const result=await Services.fetchGetAllMyApartment();
                const {apartment}=result.data.data;
                console.log(apartment,'resultAllMy-apartments!!!!!')
                commit("allMyApartments",apartment);
            } catch (error) {
                Notification.errorNotification(error.message)
            }
        },

        async getApartmentByID({ commit },payload){
            const result=await Services.fetchGetPublicApartmentByID(payload);
            const {apartment}=result.data.data;
            console.log(apartment,'oneApartmentResult!!!!!')
            commit("setApartmentItem",apartment);
        },

        async getAllComments({commit},projectId) {
            try {
                const result=await Services.getAllComments(projectId);
                const {comments}=result.data.data;
                console.log(comments,'resultAllComments!!!!!')
                commit("allApartmentComment",comments);
            } catch (error) {
                Notification.errorNotification(error.message)
            } 
        },

        async addComment({commit},payload) {
            try {
                const result=await Services.addComment(payload);
                const {comment}=result.data.data;
                console.log(comment,'resultCommentADD!!!!!')
                commit("addComment",comment);
            } catch (error) {
                Notification.errorNotification(error.message);
            } 
        }, 
        
        async updateAppartmentItem({commit},payload) {
            try {
                const result=await Services.fetchUpdateApartment(payload);
                const {apartment}=result.data.data;
                console.log("result update apartment",apartment)
                commit('setApartmentItem',apartment)
                
            } catch (error) {
                Notification.errorNotification(error.message) 
            }
        },

        async addAppartmentItem({commit},payload) {
            try {
                const result=await Services.fetchCreateApartment(payload);
                const {apartment}=result.data.data;
                console.log("result add apartment",apartment)
                commit('addApartmentItem',apartment)
                
            } catch (error) {
                Notification.errorNotification(error.message) 
            }
        },

        async deleteMyApartmentByID({commit},payload) {
            try {
                const result = await Services.fetchDeleteMyApartmentByID(payload);
                console.log("RESULT from delete", result );
                if(result.status == 200) {
                    console.log("item is deleted",payload)
                    commit('deleteApartmentItem',payload);
                } else {
                   throw new Error("Something wrong!");
                }
                               
            } catch (error) {
                Notification.errorNotification(error.message) 
            }
        },

        
    }
}


