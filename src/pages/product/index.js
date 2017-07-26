import raadHeader from '../../components/header';
import template from './template.pug';
import './style.scss';


export default {
    components: {
        raadHeader
    },
    data () {
        return {
            title: 'محصولات',
            searchQuery: '',
            items: [],
            tableFields: [{
                value: 'name',
                text: 'نام'
            },
            {
                value: 'category',
                text: 'دسته',
                formatter: (v)=>{
                    switch(v){
                        case 0:
                            return '<i class="fa fa-cut"></i> ابزار';
                        case 1:
                            return '<i class="fa fa-envelope-o"></i> نامه';
                        case 2:
                            return '<i class="fa fa-heart-o"></i> جیگر';
                    }
                }
            },
            {
                value: 'price',
                text: 'قیمت',
                class: 'fv-hide-only-xs',
                formatter: (v)=>`${v} <i class="fa fa-dollar"></i>`
            },
            {
                value: 'count',
                text: 'موجودی',
                formatter: (v)=>`<i class="fa fa-circle ${v?'count-ok':'count-none'}"></i>`
            }]
        }
    },
    methods: {
        goToItem(itemId){
            this.$store.commit('go', `product/${itemId}`);
        }
    },
    created(){
        const ret = [];
        for( var i = 1; i <= 50; i++){
            ret.push({
                key: i,
                name: `محصول شماره ${i}`,
                category: Math.floor(Math.random() * 3),
                price: (Math.floor(Math.random() * 5000)).toString(),
                count: Math.floor(Math.random() * 3),
                description: `توضیحات آیتم شماره ${i} حالا لای لای لای لای لای سلام سلام.`
            })
        }
        this.items = ret;
    },
    render: template.render
}