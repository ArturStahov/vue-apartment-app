import { fetchLogin, fetchRegistration } from "../../services";

const initialState = {
    user: null,
    isLoggedIn: false
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
        logged(state, payload) {
            state.isLoggedIn = payload;
        }
    },
    actions: {
        async loginOperation({ commit }, payload) {
            const result = await fetchLogin(payload);
            const { data } = result.data;

            commit("changeUser", data);
            commit("logged", true);
        },
        async registrationOperation({ commit }, payload) {
            const result = await fetchRegistration(payload);
            const { data } = result.data;

            commit("changeUser", data);
            commit("logged", true);
        }
    }
}