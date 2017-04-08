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
                    selected: this.$route.name === 'login',
                    disabled: this.$store.state.me.loggedIn !== false
                },
                {
                    key: 'voucher',
                    icon: 'fa fa-tags',
                    text: 'کوپن',
                    selected: this.$route.name === 'voucher',
                    disabled: this.$store.state.me.loggedIn === false
                },
                {
                    key: 'customer',
                    icon: 'fa fa-user',
                    text: 'مشتری',
                    selected: this.$route.name === 'customer',
                    disabled: this.$store.state.me.loggedIn === false
                },
                {
                    key: 'product',
                    icon: 'fa fa-qrcode',
                    text: 'محصول',
                    selected: this.$route.name === 'product',
                    disabled: this.$store.state.me.loggedIn === false
                },
                {
                    key: 'sales',
                    icon: 'fa fa-file-text-o',
                    text: 'فروش',
                    selected: this.$route.name === 'sales',
                    disabled: this.$store.state.me.loggedIn === false
                },
                {
                    key: 'messaging',
                    icon: 'fa fa-comments',
                    text: 'پیام‌ها',
                    selected: this.$route.name === 'messaging',
                    disabled: this.$store.state.me.loggedIn === false
                },
                {
                    key: 'social',
                    icon: 'fa fa-bullhorn',
                    text: 'شبکه اجتماعی',
                    selected: this.$route.name === 'social',
                    disabled: true
                }
            ];
            return ret;
        }
    },
    methods: {
        go(page='login'){
            this.$store.commit('go', page);
            if( this.$refs.sidebar.pPin === false ){
                this.$refs.sidebar.close();
            }
        }
    },
    mounted() {
        this.$store.state.sidebar = this.$refs.sidebar;
    }
}