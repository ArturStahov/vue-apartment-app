import axios from 'axios'

export const getCityConfig = (filter) => {
    return axios.get(`/api/config?filter=${ filter }`);
};
