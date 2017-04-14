import raadHeader from '../../components/header';
import template from './template.pug';
import './style.css';
import './assets/404.jpg';
export default {
    components: {
        raadHeader
    },
    template,
    data () {
        return {
            title: 'خطای ۴۰۴'
        }
    },
}