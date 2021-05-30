import { fetchLogin, fetchRegistration, fetchLogOut } from "../../services";

import axios from 'axios';

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

        async registrationOperation({ commit }, payload) {
            try {
                const result = await fetchRegistration(payload);
                const { data } = result.data;

                commit("changeUser", data);
                commit("isLogin", true);
            } catch (error) {
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