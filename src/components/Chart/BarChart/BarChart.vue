<template>
  <div :style="style" ref="barChart"></div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'BarChart',

  props: {
    /**
     * 数值系列的颜色列表
     */
    color: {
      type: Array,
      default() {
        return ['#FF9900', '#66CC00']
      },
    },
    /**
     * 图标宽度
     */
    width: {
      type: String,
      default: '35%',
    },
    /**
     * 图标高度
     */
    height: {
      type: String,
      default: '350px',
    },
    /**
     * y轴刻度
     */
    yAxisData: {
      type: Array,
      default: () => [],
    },
    /**
     * 系列数据
     */
    seriesData: {
      type: Object,
      default: () => null,
    },
  },

  data() {
    return {
      chart: null,
    }
  },

  computed: {
    style() {
      // 图标样式
      return `width:${this.width};height:${this.height};`
    },
    legend() {
      // 图例
      return Object.keys(this.seriesData)
    },
    series() {
      // 系列数据
      const series = []
      Object.keys(this.seriesData).forEach((key) => {
        series.push({
          name: key,
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'insideRight',
            },
          },
          data: this.seriesData[key],
        })
      })
      return series
    },
  },

  methods: {
    renderChart() {
      this.chart = echarts.init(this.$refs.barChart)
      const cfg = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {
          data: this.legend,
          bottom: 0,
        },
        grid: {
          top: '8%',
          left: '10%',
          right: '4%',
          bottom: '10%',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
        },
        yAxis: {
          type: 'category',
          data: this.yAxisData,
        },
        dataZoom: [
          {
            type: 'slider',
            yAxisIndex: 0,
            filterMode: 'empty',
            x: 10,
            start: 0,
            end: 100,
            textStyle: {
              color: 'black',
            },
          },
        ],
        series: this.series,
      }
      this.chart.setOption(cfg)
    },
  },

  mounted() {
    this.renderChart()
    window.onresize = () =>
      (() => {
        this.chart.resize()
      })()
  },
}
</script>

<style></style>
