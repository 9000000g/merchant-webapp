import template from './template.pug';
import './style.css';
export default {
    template,
    data () {
        return {
            user: {
                username: null,
                password: null
            }
        }
    }
}