import './style/index.css';
//import "babel-polyfill";

import Vue from 'vue/dist/vue.js';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import framevuerk from 'framevuerk';
import 'framevuerk/dist/framevuerk.css';

import './index.html';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(framevuerk);

// components
import raadSidebar from './components/sidebar';

Vue.component('raadSidebar', raadSidebar);

// pages
import notfound from './pages/notfound';
import home from './pages/home';
import login from './pages/login';
import voucher from './pages/voucher';


// routes
const router = new VueRouter({
    routes: [
        {
            name: 'home',
            path: '/',
            component: home
        },
        {
            name: 'login',
            title: 'ورود کاربر',
            path: '/login',
            component: login
        },
        {
            name: 'voucher',
            title: 'کوپن',
            path: '/voucher',
            component: voucher
        },
        {
            name: 'notfound',
            path: '/*',
            component: notfound
        }
    ]
});

// state
const store = new Vuex.Store({
  state: {
    me: {
        loggedIn: false,
        username: 'guestuser'
    },
    sidebar: null
  },
  mutations: {
    login (state, username) {
        state.me.username = username;
        state.me.loggedIn = true;
    },
    go (state, pageUrl='login') {
        console.log(pageUrl);
        if( typeof pageUrl === 'number' ){
            router.go(pageUrl);
        }
        else if( pageUrl.indexOf('/')!==0 ){
            pageUrl = `/${pageUrl}`;
        }
        router.push(pageUrl);
        return true;
        
    },
    log (state, data='') {
        console.log(data);
        return true;
    }
  }
})


const app = new Vue({
    router,
    store,
    data(){
        return {
            menuItems: [{
                key: 'add-item',
                icon: 'fa fa-user',
                text: 'اضافه کردن فلان'
            },
            {
                icon: 'fa fa-chart-bar',
                text: 'روبوسی با کاربر',
                disabled: true
            },
            {
                key: 'hi-item',
                icon: 'fa fa-google',
                text: 'سلام به روی ماهت'
            }]
        }
    },
    computed: {

    },
    methods: {
        log(text=""){
            console.log(text);
        }
    }
}).$mount('#app');