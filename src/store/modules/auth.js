import { fetchLogin, fetchRegistration, fetchLogOut } from "../../services";

import axios from 'axios';

import * as notification from '../../utils/errorNotification'

const tokenController = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const initialState = {
    user: null,
    isLoggedIn: false,
}

export default {
    namespaced: true,

    state: {
        ...initialState
    },

    mutations: {
        changeUser(state, payload) {
            state.user = payload;
        },
        isLogin(state, payload) {
            state.isLoggedIn = payload;
        }
    },
    getters:{
        getUserId(state){
            return state.user.id;
        },
        getUserName(state){
            return state.user.name;
        },
        getUserAvatar(state){
            return state.user.avatar;
        }
    },
    actions: {
        async loginOperation({ commit }, payload) {
            try {
                const result = await fetchLogin(payload);
                const { data } = result.data;

                tokenController.set(data.token);

                commit("changeUser", data);
                commit("isLogin", true);
            } catch (error) {
                console.log(error);
            }
        },

        async registrationOperation(_,payload) {
            try {
                console.log('payload!!!',payload)
              await fetchRegistration(payload);

              notification.infoNotification('registration success!')

            } catch (error) {
                notification.errorNotification(error.message)
                console.log(error);
            }
        },

        async logOutOperation({ commit }) {
            try {
                await fetchLogOut();

                tokenController.unset();

                commit("changeUser", null);
                commit("isLogin", false);
            } catch (error) {
                console.log(error);
            }
        }
    }
}