import template from './template.pug'
import style from './style.scss'
// components
import loading from '../../components/loading';

export default {
  components: {
      raadLoading: loading
  },
  computed: {
    sidebarItems(){
      const ret = [
        {
          key: 'product',
          icon: 'fa fa-qrcode',
          text: 'محصولات',
          selected: this.$route.name.indexOf('product') === 0
        },
        {
          key: 'voucher',
          icon: 'fa fa-tags',
          text: 'تخفیف‌ها',
          selected: this.$route.name.indexOf('voucher') === 0
        },
        {
          key: 'customer',
          icon: 'fa fa-user',
          text: 'مشتریان',
          selected: this.$route.name.indexOf('customer') === 0
        },
        {
          key: 'sales',
          icon: 'fa fa-file-text-o',
          text: 'فروش',
          selected: this.$route.name.indexOf('sales') === 0
        },
        {
          key: 'messaging',
          icon: 'fa fa-comments',
          text: 'پیام‌ها',
          selected: this.$route.name.indexOf('messaging') === 0
        },
        {
          key: 'social',
          icon: 'fa fa-bullhorn',
          text: 'شبکه اجتماعی',
          selected: this.$route.name.indexOf('social') === 0,
          disabled: true
        }
      ];
      return ret;
    },
  },
  methods: {

  },
  mounted () {
    this.$root.sidebar = this.$refs.sidebar;
  },
  style,
  render: template.render
}
