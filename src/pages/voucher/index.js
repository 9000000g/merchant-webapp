import raadHeader from '../../components/header';
import template from './template.pug';
import './style.scss';


export default {
    components: {
        raadHeader
    },
    data () {
        return {
            title: 'تخفیف‌ها',
            searchQuery: '',
            items: []
        }
    },
    methods: {
        goToItem(itemId){
            this.$store.commit('go', `voucher/${itemId}`);
        }
    },
    created(){
        const ret = [];
        for( var i = 0; i < 10; i++){
            ret.push({
                key: i,
                title: `تخفیف ${parseInt(Math.random()*100)}%`,
                description: `توضیحات آیتم شماره ${i + 1} حالا لای لای لای لای لای سلام سلام.`
            })
        }
        this.items = ret;
    },
    render: template.render
}