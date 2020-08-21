<template>
 <div>
   <el-header class="header"><span><navhead></navhead></span></el-header>
   <el-container>
     <el-aside class="aside"><slide-menu class="slidemenu"></slide-menu></el-aside>
     <el-main class="main">
       <!-- <div class="navbar"></div> -->
       <router-view></router-view></el-main>
   </el-container >
 </div>
</template>

<script>
  import slideMenu from './slidemenu/slidemenu.vue'
   import navhead from './navhead/navhead.vue'
  export default{
    components:{
      slideMenu,
      navhead
    },
  }
</script>

<style scoped lang="less">
  @H-height:60px;
  .aside{
    position: relative;
    background-color: #545c64;
    height: calc(100vh - @H-height);
  }
  .header{
    position: relative;
    background-color: #545c64;
  }
  .main{
    position: relative;
    height: calc(100vh - @H-height);
  }
  .slidemenu{
    position: absolute;
    width: 100%;
    height: 100%;
  }
  // .navbar{
  //   position: relative;
  //   top: 0px;
  //   left: -20px;
  //   width: calc(100% + 20px);
  //   height: 50px;
  //   background-color: green;
  // }
</style>
