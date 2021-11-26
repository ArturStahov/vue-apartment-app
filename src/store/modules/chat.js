import * as notification from '../../utils/errorNotification';

 
const initialState = {
    messages: [],
}

export default {
    namespaced: true,

    state: {
        ...initialState
    },

    getters:{
         getMessagesArr(state){
            return state.messages;
         }
    },

    mutations: {
        setMessages(state, payload) {
            state.messages = [...state.messages, payload];
        },      
    },
    actions: {
        async addChatMessage({commit},payload){
            try {           
                commit("setMessages", payload);
            } catch (error) {
                notification.errorNotification(error.message)
            }
        },      
    }
}




