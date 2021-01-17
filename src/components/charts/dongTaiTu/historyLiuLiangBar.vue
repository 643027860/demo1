<template>
  <div id="historyLiuLiangBar" class="historyLiuLiang">

  </div>
</template>

<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/bar')
  // 引入提示框和title组件
  import 'echarts/lib/component/tooltip'
  import 'echarts/lib/component/legend'
  import 'echarts/lib/component/dataZoom'
  import 'echarts/lib/component/title'
  import 'echarts/lib/component/toolbox'
  export default {
    name: '',
    components: {},
    data () {
      return {
        myChart:null,     //图标对象
        dataZoom:[],
      }
    },
    props:{
      option:{
        require:true,
      },
      xTime:{
        require:true,
      },
    },
    methods: {
      drawLine(option,xTime){
        var _this = this
        // 基于准备好的dom，初始化echarts实例
        this.myChart = echarts.init(document.getElementById('historyLiuLiangBar'))
        window.addEventListener("resize",function () {
          _this.myChart.resize();
        })
        // 绘制图表
        this.myChart.setOption({
          title: {
            text: '车流量',
            textStyle:{
              color:'white'
            },
          },
          textStyle:{
            color:'white'
          },
          tooltip: {
            trigger: 'axis'
          },
          color:['#00FF7F','#EE2C2C'],
          legend: {
            data: ['车流量', '违规车数'],
            textStyle:{
              color:'white'
            },
          },
          grid: {
            left: '3%',
            right: '5%',
            bottom: '8%',
            containLabel: true,
          },
          dataZoom: this.dataZoom,
          xAxis: {
            type: 'category',
            boundaryGap: true,
            data: xTime,
            axisLabel: {
              interval: 1, //0：全部显示，1：间隔为1显示对应类目，2：依次类推，（简单试一下就明白了，这样说是不是有点抽象）
              rotate: -10 //倾斜显示，-：顺时针旋转，+或不写：逆时针旋转
            }
          },
          yAxis: {
            type: 'value'
          },
          series: option,
        });
      },
    },
    watch: {
      xTime(newval,oldval){
        var data = this.option[0].data
        var startLength = 100-(8/data.length*100)
        this.dataZoom = [
          {
            show: true,
            realtime: true,
            start: startLength,
            end:100,
            filterMode: 'empty'
          },
          {
            type: 'inside',
            realtime: true,
            start: startLength,
            end:100,
            filterMode: 'empty'
          }
        ]
        this.drawLine(this.option,newval)
      },
      deep:true,
    },
    computed: {},
    created () {

    },
    mounted () {
     if(this.option[0]){
       var data = this.option[0].data
       var startLength = 100-(8/data.length*100)
       this.dataZoom = [
         {
           show: true,
           realtime: true,
           start: startLength,
           end:100,
           filterMode: 'empty'
         },
         {
           type: 'inside',
           realtime: true,
           start: startLength,
           end:100,
           filterMode: 'empty'
         }
       ]
       this.drawLine(this.option,this.xTime)
     }
    },
    beforeDestroy () {

    },
    destroyed () {

    },
  }
</script>

<style lang="less">
  @media screen and(max-width: 768px){
    .historyLiuLiang{
      background-color: rgb(1,49,74);
      height: 240px!important;
      overflow: hidden;
    }
  }
  .historyLiuLiang{
    background-color: rgb(1,49,74);
    height: 340px;
    overflow: hidden;
  }
</style>
