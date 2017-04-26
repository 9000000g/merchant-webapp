import raadHeader from '../../components/header';
import raadImagepicker from '../../components/imagepicker';
import template from './template.pug';
import './style.css';
export default {
    components: {
        raadHeader,
        raadImagepicker
    },
    template,
    data () {
        return {
            newItem: this.$route.params.id === 'new',
            id: this.$route.params.id,
            item: {
                name: null,
                description: null,
                pic: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
                groups: [],
                tax: false,
                enabled: true,
                online: true,
                delivery: false
            },
            files: {
                pic: null
            }
        }
    },
    computed: {
        title(){
            if( this.newItem ){
                return 'محصول جدید';
            }
            return `محصول شماره ${this.id}`;
        }
    },
}