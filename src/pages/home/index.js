import raadHeader from '../../components/header';
import template from './template.pug';
import './style.scss';
export default {
    components: {
        raadHeader
    },
    data () {
        return {
            title: 'راد بک‌آفیس'
        }
    },
    render: template.render
}