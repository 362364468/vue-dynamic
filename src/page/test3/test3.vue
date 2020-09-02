<template>
  <div ref="chart" style="width: 100%;height: 100%;">
  </div>
</template>

<script>
  export default{
    data(){
      return{
        pieoption:{
          color:['#f6da22','#bbe2e8','#6cacde',],
          backgroundColor:'#545c6f',
          tooltip: {
                  trigger: 'item',
                  formatter: '{a} <br/>{b}: {c} ({d}%)'
              },
          legend: {
                orient: 'vertical',
                left: 50,
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
          series : [
                  {
                      name: '访问来源',
                      type: 'pie',    // 设置图表类型为饼图
                      radius: '40%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 40% 长度。
                      data:[          // 数据数组，name 为数据项名称，value 为数据项值
                          {value:999, name:'视频广告'},
                          {value:274, name:'联盟广告'},
                          {value:310, name:'邮件营销'},
                          {value:335, name:'直接访问'},
                          {value:400, name:'搜索引擎'}
                      ]
                  }
              ],
        }
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
        myChart.setOption(this.pieoption)
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
