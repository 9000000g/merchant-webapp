import template from './template.pug';
import './style.css';
export default {
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