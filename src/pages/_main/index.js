import template from './template.pug'
import style from './style.scss'
// components
import sidebar from '../../components/sidebar';
import loading from '../../components/loading';

export default {
  components: {
      raadLoading: loading,
      raadSidebar: sidebar
  },
  computed: {

  },
  methods: {

  },
  mounted () {

  },
  style,
  render: template.render
}
