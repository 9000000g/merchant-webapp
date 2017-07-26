import raadHeader from '../../components/header';
import template from './template.pug';
import './style.scss';
export default {
    components: {
        raadHeader
    },
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
            this.$store.commit('go', 'product');
        }
    },
    render: template.render
}