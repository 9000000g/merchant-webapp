import template from './template.pug';
import './style.css';
export default {
    template,
    data(){
        return {
            dialogButtons: [
                {
                    key: 'cancel',
                    icon: 'fa fa-ban',
                    text: 'خیر'
                },
                {
                    key: 'ok',
                    icon: 'fa fa-check',
                    text: 'بله',
                    action: this.delete
                }
            ]
        }
    },
    methods: {
        delete(){
            this.$emit('delete');
        },
        edit(){
            this.$emit('edit');
        }
    },
    props: {
        title: {
            type: String,
            default: '---'
        }
    }
}