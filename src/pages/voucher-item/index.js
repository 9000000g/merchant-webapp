import raadHeader from '../../components/header';
import template from './template.pug';
import './style.scss';
export default {
    components: {
        raadHeader
    },
    data () {
        return {}
    },
    computed: {
        title(){
            return `تخفیف شماره ${this.$route.params.id}`;
        }
    },
    render: template.render
}