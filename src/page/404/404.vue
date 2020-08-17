<template>
  <div class="errinfo">
    <i class="iconfont">&#xe62f;</i>
    <p>页面不存在</p>
    <div class="btn">
      <i-button
        type="primary"
        @click="returnmainform">
        返回首页
      </i-button>
    </div>
  </div>
</template>
<script>
  export default{
    methods:{
      returnmainform(){
        this.$router.push('/home')
      },
    }
  }
</script>
<style scoped>
  p{
    text-align: center;
    color: rgba(0, 0, 0, 0.45);
  }
  .errinfo{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -150px;
  }
  .btn{
    position: relative;
    left: 50%;
    margin-left:-40px;
  }
  @font-face {
    font-family: 'iconfont';  /* project id 2006954 */
    src: url('//at.alicdn.com/t/font_2006954_1u49k494t2q.eot');
    src: url('//at.alicdn.com/t/font_2006954_1u49k494t2q.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_2006954_1u49k494t2q.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_2006954_1u49k494t2q.woff') format('woff'),
    url('//at.alicdn.com/t/font_2006954_1u49k494t2q.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_2006954_1u49k494t2q.svg#iconfont') format('svg');
  }
  .iconfont{
      font-family:"iconfont" !important;
      font-size:300px;font-style:normal;
      color: #009688;
      -webkit-font-smoothing: antialiased;
      -webkit-text-stroke-width: 0.2px;
      -moz-osx-font-smoothing: grayscale;
      }
</style>
