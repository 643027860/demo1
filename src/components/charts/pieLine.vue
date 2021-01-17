<template>
  <div class="pieLine">
    <div id="pieLine">

    </div>
  </div>
</template>

<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入饼图组件
  require('echarts/lib/chart/pie')
  // 引入柱状图组件
  require('echarts/lib/chart/line')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  import 'echarts/lib/component/toolbox';
  export default {
    name: '',
    components: {},
    data () {
      return {}
    },
    methods: {
      draw(){
        let myChart = echarts.init(document.getElementById('pieLine'))
        var option = {
          legend: {},
          tooltip: {
            trigger: 'axis',
            showContent: false
          },
          dataset: {
            source: [
              ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
              ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
              ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
              ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
              ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
            ]
          },
          xAxis: {type: 'category'},
          yAxis: {gridIndex: 0},
          grid: {top: '55%'},
          series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {
              type: 'pie',
              id: 'pie',
              radius: '30%',
              center: ['50%', '25%'],
              label: {
                formatter: '{b}: {@2012} ({d}%)'
              },
              encode: {
                itemName: 'product',
                value: '2012',
                tooltip: '2012'
              }
            }
          ]
        }
        myChart.on('updateAxisPointer', function (event) {
          var xAxisInfo = event.axesInfo[0];
          if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            myChart.setOption({
              series: {
                id: 'pie',
                label: {
                  formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                },
                encode: {
                  value: dimension,
                  tooltip: dimension
                }
              }
            });
          }
        })
        myChart.setOption(option)
      },
    },
    watch: {},
    computed: {},
    created () {

    },
    mounted () {
      this.draw()
    },
    beforeDestroy () {

    },
    destroyed () {

    },
  }
</script>

<style lang="less">
  .pieLine{
    width: 100%;
    height: 100%;
    #pieLine{
      width: 600px;
      min-height: 600px;
    }
  }
</style>
