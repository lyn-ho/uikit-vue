import BarChart from './components/Chart/BarChart'
import LineChart from './components/Chart/LineChart'

const components = [BarChart, LineChart]

/**
 *
 * @param {Vue} Vue
 */
const install = function(Vue) {
  if (install.installed) return
  components.forEach((component) => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components,
}
export { install, components }



