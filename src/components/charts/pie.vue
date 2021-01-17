<template>
  <div class="pie">
    <div id="myPie">

    </div>
  </div>
</template>

<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入饼图组件
  require('echarts/lib/chart/pie')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  export default {
    data () {
      return {
        Pie:'',  //柱形图对象
      }
    },
    mounted () {
      this.drawPie();
    },
    methods: {
      drawPie(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myPie'))
        // 绘制图表
        myChart.setOption({
          title: {
            text: '就业方向',
            subtext: '',
            left: 'center',
            width:'auto'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            type: 'scroll',
            orient: 'vertical',
            left: 'center',
            top:'middle',
            width:'auto',
            fontStyle:'oblique',
            data: ['政府部门','国有企业','私营企业','高等院校','其他'],
          },
          series: [
            {
              name: '姓名',
              type: 'pie',
              radius: '50%',
              center: ['50%', '50%'],
              data: [
                {value:335, name:'政府部门'},
                {value:310, name:'国有企业'},
                {value:234, name:'私营企业'},
                {value:135, name:'高等院校'},
                {value:1548, name:'其他'}
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        });
      },
    },
  }
</script>

<style scoped lang="less">
  .pie{
    height: 100%;
    width: 100%;
    #myPie{
      width: 400px;
      height: 400px;
      overflow: hidden;
    }
  }
</style>
