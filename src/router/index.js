import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'
import NotFound from '../views/NotFound.vue'

import DashboardPage from '../views/DashboardPage.vue'
import DashboardLink from '../views/DashboardLink.vue'
import DashboardExport from '../views/DashboardExport.vue'
import DashboardSettings from '../views/DashboardSettings.vue'

const routes = [
    { 
        path: '/', 
        component: HomePage,
        meta: {
            requiresAuth: false,
            showHeaderFooter: true
        }
    },
    {
        path: '/register',
        component: RegisterPage,
        meta: {
            requiresAuth: false,
            showHeaderFooter: false
        }
    },
    {
        path: "/login",
        component: LoginPage,
        meta: {
            requiresAuth: false,
            showHeaderFooter: false
        }
    },    
    {
        path: '/404',
        component: NotFound,
        meta: {
            showHeaderFooter: true
        }
    },

    // Dashboard routes
    {
        name: "Dashboard",
        path: '/dashboard',
        component: DashboardPage,
        meta: {
            requiresAuth: true,
            showHeaderFooter: false
        }
    },
    {
        name: "Link",
        // passing route params
        path: '/dashboard/:id',
        component: DashboardLink,
        meta: {
            requiresAuth: true,
            showHeaderFooter: false
        }
    },

    {
        name: "Import/export",
        path: "/dashboard/export",
        component: DashboardExport,
        meta: {
            requiresAuth: true,
            showHeaderFooter: false
        }
    },
    {
        name: "Settings",
        path: "/dashboard/settings",
        component: DashboardSettings,
        meta: {
            requiresAuth: true,
            showHeaderFooter: false
        }        
    }
]

export const router = createRouter({
    // used createWebHashHistory() instead of createWebHistory()
    history: createWebHistory(),
    routes,
})

// navigation guard
router.beforeEach(async (to) => {
    let token = "";

    console.log("requiresAuth for", to.fullPath ,to.meta.requiresAuth);

    // check if the route has meta "requiresAuth" and is set to false
    if(!to.meta.requiresAuth){
        return true;
    }
    // check if no XSRF-TOKEN is set (first time user)
    else if(document.cookie.indexOf('XSRF-TOKEN') === 0){
        return true;
    }
    else{
        // if the XSRF-TOKEN cookie does not exist.
        if((document.cookie.indexOf('XSRF-TOKEN=')) == -1){
            return "/login"
        }

        token = decodeURIComponent(
            document.cookie
                .split('; ')
                .find(row => row.startsWith('XSRF-TOKEN='))
                .split('=')[1]
        );

        const user = await fetch("http://localhost:8000/api/user", {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "X-XSRF-TOKEN": token
            }
        });
        // check if the api response is in the 200 range 
        if(user.ok){
            console.log("Ok");
            return true;
        }

        return "/login"        
    }
})
