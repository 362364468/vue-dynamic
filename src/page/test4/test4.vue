<template>
  <div style="width: 100%;height: 100%;">
   <!-- <div ref="chart" style="width: 100%;height: 100%;">
    </div> -->
    <!-- <div id="all-map" style="width: 100%;height: 100%;" ></div> -->
    <div id="container" style="width: 100%;height: 100%;" ></div>
  </div>
</template>

<script>
  // import AMap from 'AMap'
  // import AMapUI from 'AMapUI'
  // import AMapJS from "amap-js"
  export default{
    data(){
      return{
         // msg: 'Hello Vue.',
         //  msg1: '',
         //  msg2: '',
         //  msg3: ''
      }
    },
    mounted(){
      this.getEchartData()
      this.GaodeMap()
    },
    methods:{
      GaodeMap(){
        console.log(true)
        var map = new AMap.Map('container', {
        zoom:11,//级别
        center: [116.397428, 39.90923],//中心点坐标
        viewMode:'3D'//使用3D视图
        });
        // AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
        // map.addControl(new AMap.ToolBar())
        // map.addControl(new AMap.Scale())
        // })
      },
      getEchartData(){
       const chart = this.$refs.chart
       if (chart) {
        const myChart = this.$echarts.init(chart)
        const option = {
           xAxis: {
                  type: 'category',
                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {
                  type: 'value'
              },
              series: [{
                  data: [820, 932, 901, 934, 1290, 1330, 1320],
                  type: 'line'
              }]
        }//需要引进echart图表的代码，需要什么例子可以在官方例子
        myChart.setOption(option)
        window.addEventListener("resize", function() {
          myChart.resize()
        })
       }
        this.$on('hook:destroyed',()=>{
          window.removeEventListener("resize", function() {
           myChart.resize();
        });
        })
      }
    },
  }
</script>

<style>
</style>
