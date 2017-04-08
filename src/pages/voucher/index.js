import template from './template.pug';
import './style.css';
export default {
    template,
    data () {
        return {
            title: 'کوپن',
            searchQuery: ''
        }
    },
    methods: {

    },
    computed: {
        items(){
            const ret = [];
            for( var i = 0; i < 10; i++){
                ret.push({
                    key: `item${i}`,
                    title: `تخفیف ${parseInt(Math.random()*100)}%`,
                    description: `توضیحات آیتم شماره ${i + 1}`
                })
            }
            return ret;
        }
    },
}