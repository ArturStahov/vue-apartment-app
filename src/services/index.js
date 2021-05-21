import axios from 'axios'

axios.defaults.baseURL = 'https://apartment-service-api.herokuapp.com';

export const fetchLogin = ({ email, password }) => {
    return axios.post('/api/users/login', {
        email,
        password,
    });
};

export const fetchRegistration = ({ email, password, name }) => {
    return axios.post('/api/users/registration', {
        name,
        email,
        password,
    });
};
