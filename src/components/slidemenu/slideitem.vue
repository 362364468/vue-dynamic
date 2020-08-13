<template>
  <div class="slideitem">
    <template v-for="item in menulist">
        <!-- 最后一级菜单 -->
      <el-menu-item v-if="!item.childs&&item.entity"
                    :key="item.entity.id" :data="item" :index="item.entity.to?item.entity.to:''"
                   >
        <i :class="item.entity.icon"></i>
        <span slot="title">{{item.entity.alias}}</span>
      </el-menu-item>
      <!-- 此菜单下还有子菜单 -->
      <el-submenu v-if="item.childs&&item.entity"
                  :key="item.entity.id" :data="item" :index="item.entity.to?item.entity.to:''">
        <template slot="title">
          <i :class="item.entity.icon"></i>
          <span> {{item.entity.alias}}</span>
        </template>
        <!-- 递归 -->
        <slideitem :menulist="item.childs"></slideitem>
      </el-submenu>
    </template>
  </div>
</template>
<script>
  export default {
    name: 'slideitem',
    props: ['menulist'],
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style>
</style>
