import VueRouter from 'vue-router';
import HomePage from '../pages/HomePage';
import ContentPage from '../pages/ContentPage';
import ErrorPage from '../components/ErrorPage';
import ApartmentPage from '../pages/ApartmentPage';
import MyAdminPage from '../pages/MyAdminPage'
// import store from '../store'


const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'homePage',
        meta: {
            hideForAuth: true
        }
    },
    {
        path: '/my-admin',
        component: MyAdminPage,
        name: 'myAdminPage',  
    },
    {
        path: '/content',
        component: ContentPage,
        name: 'contentPage',
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/content/:id',
        component: ApartmentPage,
        name: 'apartmentPage',
        meta: {
            requireAuth: true
        }
    },
    {
        path: '*',
        component: ErrorPage,
        name: 'errorPage'
    }
]

const router = new VueRouter({ routes, mode: 'history' });

// router.beforeEach((to, from, next) => {
//     const isLogin = store.getters['auth/isLoggedIn'];
//     console.log('is LOGIN', isLogin)

//     if (to.matched.some(record => record.meta.requireAuth)) {
//         if (!isLogin) {
//             next('/')

//         }
//     }

//     if (to.matched.some(record => record.meta.hideForAuth)) {
//         if (isLogin) {
//             next('/content')

//         }
//     }

//     next();
// })


export default router