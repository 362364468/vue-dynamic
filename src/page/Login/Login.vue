<template>
  <div>
    <div class="maincontain">

    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        message:"Hello World",
        visible:false
      }
    }
  }
</script>

<style scoped lang="less">
@height:500px;
.maincontain{
  position: relative;
  margin: 0 auto;
  background-color: #A6A9AD;
  width: 600px;
  height: @height;
  top: calc(50vh - @height / 2);
}
</style>
