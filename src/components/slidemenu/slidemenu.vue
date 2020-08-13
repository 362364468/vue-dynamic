<template>
  <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :default-active="activeIndex"
        router
      >
    <slideitem :menulist="menuData"></slideitem>
  </el-menu>
</template>

<script>
  import slideitem from './slideitem.vue'
  export default{
    components: {slideitem},
    data() {
      return {
        activeIndex: 'aa',
        menuData: [
          {
            //一级
            entity: {
              id: 0,
              name: "1",
              to:"/admin/test",
              icon: "el-icon-message",
              alias: "一级菜单"
            }
          },
        ],
      }
    }
  }
</script>
<style>
</style>
