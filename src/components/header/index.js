import template from './template.pug';
export default {
  props: {
    title: {
      default: false
    }
  },
  render: template.render
}