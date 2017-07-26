import template from './template.pug';
import './style.scss';
export default {
    props: {
        title: {
            default: false
        }
    },
    render: template.render
}