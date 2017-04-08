import template from './template.pug';
import './style.css';
export default {
    template,
    computed: {
        items(){
            const ret = [
                {
                    key: 'login',
                    icon: 'fa fa-sign-in',
                    text: 'ورود',
                    selected: this.$route.name.indexOf('login') === 0,
                    disabled: this.$store.state.me.loggedIn === true
                },
                {
                    key: 'voucher',
                    icon: 'fa fa-tags',
                    text: 'کوپن',
                    selected: this.$route.name.indexOf('voucher') === 0,
                    disabled: this.$store.state.me.loggedIn === false
                },
                {
                    key: 'customer',
                    icon: 'fa fa-user',
                    text: 'مشتری',
                    selected: this.$route.name.indexOf('customer') === 0,
                    disabled: this.$store.state.me.loggedIn === false
                },
                {
                    key: 'product',
                    icon: 'fa fa-qrcode',
                    text: 'محصول',
                    selected: this.$route.name.indexOf('product') === 0,
                    disabled: this.$store.state.me.loggedIn === false
                },
                {
                    key: 'sales',
                    icon: 'fa fa-file-text-o',
                    text: 'فروش',
                    selected: this.$route.name.indexOf('sales') === 0,
                    disabled: this.$store.state.me.loggedIn === false
                },
                {
                    key: 'messaging',
                    icon: 'fa fa-comments',
                    text: 'پیام‌ها',
                    selected: this.$route.name.indexOf('messaging') === 0,
                    disabled: this.$store.state.me.loggedIn === false
                },
                {
                    key: 'social',
                    icon: 'fa fa-bullhorn',
                    text: 'شبکه اجتماعی',
                    selected: this.$route.name.indexOf('social') === 0,
                    disabled: true
                }
            ];
            return ret;
        },
        menuItems(){
            const ret = [];
            if( this.$store.state.me.loggedIn === false ){
                ret.push({
                    key: 'login',
                    icon: 'fa fa-sign-in',
                    text: 'ورود'
                });
            }
            else{
                ret.push({
                    key: 'changepic',
                    icon: 'fa fa-picture-o',
                    text: 'تغییر عکس'
                });
                ret.push({
                    key: 'logout',
                    icon: 'fa fa-sign-out',
                    text: 'خروج'
                });
            }
            return ret;
        }
    },
    methods: {
        go(page='login'){
            this.$store.commit('go', page);
            if( this.$refs.sidebar.pPin === false ){
                this.$refs.sidebar.close();
            }
        },
        action(key="logout"){
            switch(key){
                case 'logout':
                    this.$store.commit('logout');
                    this.$store.commit('go', 'login');
                    break;
            }
        }
    },
    mounted() {
        this.$store.state.sidebar = this.$refs.sidebar;
    }
}