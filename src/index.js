//import "babel-polyfill";

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import framevuerk from 'framevuerk/dist/framevuerk-fa.js';
import moment from 'moment-jalaali'
import 'font-awesome/css/font-awesome.css'
import 'shabnam-font/dist/font-face.css';

import './index.html';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(framevuerk);



// pages
import _main from './pages/_main';
import notfound from './pages/notfound';
import home from './pages/home';
import login from './pages/login';
import voucher from './pages/voucher';
import voucherItem from './pages/voucher-item';
import product from './pages/product';
import productItem from './pages/product-item';

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
            path: '/login',
            component: login
        },
        {
            name: 'voucher',
            path: '/voucher',
            component: voucher
        },
        {
            name: 'voucher-item',
            path: '/voucher/:id',
            component: voucherItem
        },
        {
            name: 'product',
            path: '/product',
            component: product
        },
        {
            name: 'product-item',
            path: '/product/:id',
            component: productItem
        },
        {
            name: 'notfound',
            path: '/*',
            component: notfound
        }
    ]
});
router.beforeEach((to, from, next) => {
    //store.commit('loading');
    //console.log(to);
    //setTimeout(()=>{
        next();
        //store.commit('loading', false);
    //}, 700);
})


// store
const session = JSON.parse( global.sessionStorage.getItem('me') );
const guestUser = {
    username: 'guest',
    loggedIn: false,
    token: ''
}
const store = new Vuex.Store({
  state: {
    me: session === null? guestUser: session,
    sidebar: null,
    loading: false
  },
  mutations: {
    login (state, username) {
        state.me.username = username;
        state.me.loggedIn = true;
        state.me.token = '123';
        global.sessionStorage.setItem('me', JSON.stringify(state.me) );
    },
    logout (state) {
        state.me.username = guestUser.username;
        state.me.loggedIn = guestUser.loggedIn;
        state.me.token = guestUser.token;
        global.sessionStorage.removeItem('me');
    },
    go (state, pageUrl='login') {
        if( typeof pageUrl === 'number' ){
            router.go(pageUrl);
        }
        else if( pageUrl.indexOf('/')!==0 ){
            pageUrl = `/${pageUrl}`;
        }
        router.push(pageUrl);
        return true;
        
    },
    toggleSidebar (state){
        if( state.sidebar ){
            state.sidebar.toggle();
        }
    },
    loading (state, set=true) {
        state.loading = set;
        return true;
    },
    log (state, data='') {
        console.log(data);
        return true;
    }
  }
})

// app
const app = new Vue({
    router,
    store,
    created(){
        this.routeChange();
    },
    watch: {
        $route(){
            this.routeChange();
        }
    },
    methods: {
        log(text=""){
            console.log(text);
        },
        routeChange(){
            if( this.$store.state.me.loggedIn === false ){
                this.$store.commit('go', 'login');
            }
            else if( this.$route.name === 'login' ){
                this.$store.commit('go', 'voucher');
            }
        }
    },
    render: h => h(_main)
}).$mount('#app');