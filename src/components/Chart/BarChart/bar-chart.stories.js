import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import BarChart from './index'

const barChart = () => ({
  components: { BarChart },
  template: `<div>
  <bar-chart
  :yAxisData="yAxisData"
  :seriesData="seriesData"/>
  </div>`,
  data() {
    return {
      yAxisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      seriesData: {
        直接访问: [320, 302, 301, 334, 390, 330, 320],
        邮件营销: [120, 132, 101, 134, 90, 230, 210],
        联盟广告: [220, 182, 191, 234, 290, 330, 310],
        视频广告: [150, 212, 201, 154, 190, 330, 410],
      },
    }
  },
})

storiesOf('Bar Chart', module).add('柱状图', barChart)
