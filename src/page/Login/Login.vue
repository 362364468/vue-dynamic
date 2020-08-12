<template>
  <div>
    <div class="maincontain">
      <div class="titlecontain"><h2>用户登录</h2></div>
      <div class="inputcontain">
          <div class="inputitem"><i class="iconfont" v-if="isaapeal">&#xe62f;</i>
          <i class="iconfont" v-else>&#xe623;</i>
          <span><el-input placeholder="用户名" v-model="username" size="medium" clearable></el-input></span></div>
          <div class="inputitem"> <i class="iconfont" v-if="isaapeal">&#xe64b;</i>
          <i class="iconfont" v-else>&#xe618;</i>
          <span><el-input placeholder="密码" v-model="password" size="medium" show-password></el-input></span></div>
      </div>
      <div class="buttoncontain">
          <el-button type="primary" native-type="submit" @click="login" round>登录</el-button>
          <el-button type="primary" @click="registe" round>注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import './index.css'
  export default{
    data(){
      return{
        username:"",
        password:"",
        visible:false,
        isaapeal:true
      }
    },
    methods:{
      login(){
        if(this.username=="admin"&&this.password=="123456")
        this.$router.push("/admin")
        else
        this.$notify.error({
                  title: '错误',
                  message: '用户名和密码错误'
                });
      },
      registe(){
        this.$notify.warning({
                  title: '警告',
                  message: '注册功能还未实装'
                });
      }
    }
  }
</script>
<style scoped lang="less">
@height:350px;
.maincontain{
  position: relative;
  margin: 0 auto;
  background-color: #A6A9AD;
  width: 400px;
  height: @height;
  top: calc(50vh - @height / 2);
}
.titlecontain{
   position: absolute;
   left: 50%;
   margin-left:-48px;
   top:10px;
}
.buttoncontain{
  position: absolute;
  left: 50%;
  margin-left: -88px;
  bottom: 50px;
}
.inputcontain{
  position: absolute;
  top:70px;
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:30px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
.inputitem {
    margin: 24px;
    line-height: 35px;
}
</style>
