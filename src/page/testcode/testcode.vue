<template>
  <p>{{date}}</p>
</template>

<script>
  export default{
    data(){
      return{
        date:''
      }
    },
    mounted(){
      this.getUrl();
    },
    methods:{
      getUrl(){
        var query = window.location.hash.substring(1);
            var vars = query.split("&&&");
            for (var i=0;i<vars.length;i++) {
              var url = vars[i];
              return decodeURI(url).replace("html%23","html#");
            }
              var rel = '../';
              var url = getUrl();
              if (url.indexOf(":") > 0 && url.indexOf(":") < 10) rel = '';
            self.location.href = rel + url;
      }
    }
  }
</script>

<style>
</style>
