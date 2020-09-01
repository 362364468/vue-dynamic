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
        activeIndex:"/admin/test",
        menuData: [
          {
            // 有多少个childs就多少级
            entity: {
              id: 0,
              name: "1",
              to:"/admin/test",
              icon: "el-icon-message",
              alias: "首页"
            },
          },
          {
            entity: {
              id: 1,
              name: "2",
              icon: "el-icon-message",
              alias: "学习列表"
            },
            childs:[
              {
              entity: {
                  id: 9,
                  name: "2-2",
                  to:"/admin/test1",
                  icon: "el-icon-message",
                  alias: "hello vue"
                },
              },
              {
              entity: {
                  id: 10,
                  name: "2-3",
                  to:"/admin/test2",
                  icon: "el-icon-message",
                  alias: "echart"
                },
              },
              {
              entity: {
                  id: 11,
                  name: "2-4",
                  to:"/admin/testcode",
                  icon: "el-icon-message",
                  alias: "代码试验场",
                },
              },
            ],
          },
          {
            entity: {
              id: 2,
              name: "3",
              icon: "el-icon-message",
              alias: "信息列表"
            },
          },
          {
            entity: {
              id: 3,
              name: "4",
              icon: "el-icon-message",
              alias: "信息管理"
            },
          },
          {
            entity: {
              id: 4,
              name: "5",
              icon: "el-icon-message",
              alias: "资金管理"
            },
          },
          {
            entity: {
              id: 5,
              name: "6",
              icon: "el-icon-message",
              alias: "投资管理"
            },
          },
          {
            entity: {
              id: 6,
              name: "7",
              icon: "el-icon-message",
              alias: "金融文章"
            },
          },
          {
            entity: {
              id: 7,
              name: "8",
              icon: "el-icon-message",
              alias: "资金数据"
            },
          },
        ],
      }
    }
  }
</script>
<style>
</style>
