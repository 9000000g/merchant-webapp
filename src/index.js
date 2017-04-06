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


// templates
import notfound from './pages/notfound';
import login from './pages/login';


// routes
const router = new VueRouter({
    routes: [
        {
            name: 'home',
            path: '/',
            component: {
                template: '<h1>Home</h1>'
            }
        },
        {
            name: 'login',
            path: '/login',
            component: login
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
        name: 'کاربر مهمان'
    }
  },
  mutations: {
    login (state) {
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
        sidebarItems(){
            const ret = [
                {
                    key: 'login',
                    icon: 'fa fa-user',
                    text: 'ورود',
                    selected: this.$route.name === 'login',
                    disabled: this.$store.state.me.loggedIn !== false
                },
                {
                    key: 'add-item',
                    icon: 'fa fa-user',
                    text: 'اضافه کردن کاربر',
                    disabled: this.$store.state.me.loggedIn === false
                },
                {
                    icon: 'fa fa-chart-bar',
                    text: 'روبوسی با کاربر',
                    disabled: true,
                    disabled: this.$store.state.me.loggedIn === false
                },
                {
                    icon: 'fa fa-google',
                    text: 'گوگل',
                    disabled: this.$store.state.me.loggedIn === false
                }
            ];
            return ret;
        }
    },
    methods: {
        log(text=""){
            console.log(text);
        }
    }
}).$mount('#app');