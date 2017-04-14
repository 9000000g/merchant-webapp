import raadHeader from '../../components/header';
import template from './template.pug';
import './style.css';
export default {
    components: {
        raadHeader
    },
    template,
    data () {
        return {
            title: 'ورود کاربر',
            user: {
                username: null,
                password: null
            }
        }
    },
    methods: {
        login: function(){
            this.$store.commit('login', this.user.username);
            this.$store.commit('go', 'voucher');
        }
    }
}