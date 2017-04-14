import item from '../../components/item';
import template from './template.pug';
import './style.css';
export default {
    components: {
        raadItem: item
    },
    template,
    data () {
        return {
            title: 'تخفیف‌ها',
            searchQuery: ''
        }
    },
    methods: {
        goToItem(itemId){
            this.$store.commit('go', `voucher/${itemId}`);
        }
    },
    computed: {
        items(){
            const ret = [];
            for( var i = 0; i < 10; i++){
                ret.push({
                    key: i,
                    title: `تخفیف ${parseInt(Math.random()*100)}%`,
                    description: `توضیحات آیتم شماره ${i + 1}`
                })
            }
            return ret;
        }
    },
}