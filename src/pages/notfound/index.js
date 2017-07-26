import raadHeader from '../../components/header';
import template from './template.pug';
import './style.scss';
import './assets/404.jpg';
export default {
    components: {
        raadHeader
    },
    data () {
        return {
            title: 'خطای ۴۰۴'
        }
    },
    render: template.render
}