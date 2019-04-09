<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          max-width="1200px"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="0" class="logo">我是logo</el-menu-item>
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">消息中心</el-menu-item>
          <el-menu-item index="4">订单管理</el-menu-item>
        </el-menu>
      </el-header>

      <el-container class="section">
        <el-aside width="200px">
          <el-menu
            :router="true"
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">

              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>

              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>

              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>

              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>

            <el-menu-item index="404">
              <i class="el-icon-menu"></i>
              <span slot="title">error</span>
            </el-menu-item>

            <el-menu-item index="wecome">
              <i class="el-icon-document"></i>
              <span slot="title">wecome</span>
            </el-menu-item>

            <el-menu-item index="echarts">
              <i class="el-icon-setting"></i>
              <span slot="title">echarts</span>
            </el-menu-item>

          </el-menu>
        </el-aside>
        <el-main>
          <!-- <transition name='fade' mode="out-in"> -->
            <!-- name绑定动画类名  mode过渡模式 -->
            <router-view></router-view>
          <!-- </transition> -->
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "2"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  .el-header {
    background: #545c64;
    .logo {
      width: 200px;
      padding: 0;
    }
  }
  .section {
    padding-top: 10px;
    .el-main {
      color: #000;
    }
  }
}

.fade-enter{
  //进入过渡开始
}
.fade-enter-active{
  //进入过渡结束
}
.fade-leave{
  //离开过渡开始
}
.fade-leave-active{
  // 离开过渡结束
}
</style>
