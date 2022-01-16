import axios from 'axios'
axios.defaults.baseURL = 'https://apartment-service-api.herokuapp.com';

export { 
    fetchLogin, 
    fetchRegistration, 
    fetchLogOut, 
} from './auth-services.js';

export {  
    fetchGetAllPublicApartment,
    fetchGetPublicApartmentByID,
    fetchUpdateApartment,
    fetchCreateApartment,
    fetchGetAllMyApartment ,
    fetchDeleteMyApartmentByID,
} from './apartment-services.js';

export { 
    getAllComments,
    addComment,
} from './comment-services.js';

export { getCityConfig } from './config-services.js'



