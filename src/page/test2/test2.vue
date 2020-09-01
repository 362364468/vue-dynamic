<template>
  <div ref="chart" style="width: 100%;height: 100%;">
  </div>
</template>

<script>
  export default{
    data(){
      return{
         msg: 'Hello Vue.',
          msg1: '',
          msg2: '',
          msg3: ''
      }
    },
    mounted(){
      this.getEchartData()
    },
    methods:{
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
