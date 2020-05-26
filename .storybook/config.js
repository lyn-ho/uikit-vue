import { configure, addDecorator } from '@storybook/vue'
import { withInfo, setDefaults } from 'storybook-addon-vue-info'
// import Vue from 'vue'

addDecorator(withInfo)
setDefaults({
  header: false,
  info: {
    header: true,
    source: true,
  },
})

configure(require.context('../src', true, /\.stories\.js$/), module)
