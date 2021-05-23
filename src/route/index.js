import VueRouter from 'vue-router';
import HomePage from '../pages/HomePage';
import ContentPage from '../pages/ContentPage';
import ErrorPage from '../components/ErrorPage';
import ApartmentPage from '../pages/ApartmentPage'


const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'homePage'
    },
    {
        path: '/content',
        component: ContentPage,
        name: 'contentPage'
    },
    {
        path: '/content/:id',
        component: ApartmentPage,
        name: 'apartmentPage'
    },
    {
        path: '*',
        component: ErrorPage,
        name: 'errorPage'
    }
]

const router = new VueRouter({ routes, mode: 'history' })
export default router