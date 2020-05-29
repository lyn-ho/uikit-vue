import BarChart from './components/Chart/BarChart'
import LineChart from './components/Chart/LineChart'

const components = [BarChart, LineChart]

/**
 *
 * @param {Vue} Vue
 */
const install = function(Vue) {
  if (install.installed) return
  components.map((component) => Vue.component(component.name, component))
}

export default {
  install,
  ...components,
}
export { install, components }
