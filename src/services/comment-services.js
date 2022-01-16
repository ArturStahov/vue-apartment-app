
import axios from 'axios'

export const getAllComments = (projectId) => {
    return axios.get(`/api/comment/${projectId}`);
};

export const addComment = (data) => {
    return axios.post('/api/comment/',data);
};