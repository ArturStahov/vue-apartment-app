export const fetchGetAllPublicApartment = () => {
    return axios.get('/api/apartment/all/');
};

export const fetchGetPublicApartmentByID = (id) => {
    return axios.get(`/api/apartment/all/${id}`);
};

export const fetchGetAllMyApartment = () => {
    return axios.get('/api/apartment/myapartment/');
};

import axios from 'axios'

export const fetchGetMyApartmentByID = (id) => {
    return axios.get(`/api/apartment/myapartment/${id}`);
};

export const fetchCreateApartment = (data) => {
    return axios.post('/api/apartment/myapartment/',data);
};

//maybe need change route for update apartment object
export const fetchUpdateApartment = (data) => {
    const id=data._id;
    const payload={
        city:data.city,
        description:data.description,
        image:data.image,
        price:data.price,
        rating:data.rating,
        ratingCounter:data.ratingCounter,
        title:data.title
    }
    console.log("id from fetch",id);
    console.log("data from fetch",payload)
    return axios.put(`/api/apartment/myapartment/${id}`,payload);
};

export const fetchDeleteMyApartmentByID = (id) => {
    return axios.delete(`/api/apartment/myapartment/${id}`);
};

