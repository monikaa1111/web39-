<template>
    <div>
         <div class="line"></div>
            <el-menu :default-active="activeIndex2" class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b" >
            <el-menu-item index="1" style="margin-left:64%">程序员</el-menu-item>
            <el-submenu index="2">
                <template slot="title">个人中心</template>
                <el-menu-item index="2-1">我的项目</el-menu-item>
                <el-menu-item index="2-2">找项目</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3" >发布需求</el-menu-item>
            <el-menu-item index="4" ><a href="denglu" target="_blank" style="text-decoration:none;margin-top:-10px">登录</a></el-menu-item>
            <el-menu-item index="5" ><a href="register" target="_blank" style="text-decoration:none">注册</a></el-menu-item>
            </el-menu>
    </div>
</template>

<script>
     export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>

</style>