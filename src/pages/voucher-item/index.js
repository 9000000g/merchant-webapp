import raadHeader from '../../components/header';
import template from './template.pug';
import './style.css';
export default {
    components: {
        raadHeader
    },
    template,
    data () {
        return {}
    },
    computed: {
        title(){
            return `تخفیف شماره ${this.$route.params.id}`;
        }
    },
}