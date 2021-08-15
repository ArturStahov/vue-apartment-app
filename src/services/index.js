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

export const fetchLogOut = () => {
    return axios.post('/api/users/logout');
};

export const fetchGetAllPublicApartment = () => {
    return axios.get('/api/apartment/all/');
};

export const fetchGetPublicApartmentByID = (id) => {
    return axios.get(`/api/apartment/all/${id}`);
};

export const fetchGetAllMyApartment = () => {
    return axios.get('/api/apartment/myapartment/');
};

export const fetchGetMyApartmentByID = (id) => {
    return axios.get(`/api/apartment/myapartment/${id}`);
};

export const fetchCreateApartment = (data) => {
    return axios.post('/api/apartment/myapartment/',data);
};

export const getAllComments = (projectId) => {
    return axios.get(`/api/comment/${projectId}`);
};

export const addComment = (data) => {
    return axios.post('/api/comment/',data);
};


