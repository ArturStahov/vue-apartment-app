import axios from 'axios'

export const fetchLogin = ({ email, password }) => {
    const data = {
        email,
        password,
    }
    return axios.post('/api/users/login',  data);
};

export const fetchRegistration = ({ email, password, name }) => {
    return axios.post('/api/users/registration', {
        name,
        email,
        password,
    });
};

export const fetchLogOut = () => {
    return axios.post('/api/users/logout');
};