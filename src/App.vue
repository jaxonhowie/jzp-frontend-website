<template>
  <div id="app">
    <el-container>

      <el-aside width="200px">Aside menu</el-aside>
      <el-container>
        <el-header>
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple"></div>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
        <el-footer></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

.el-footer{
  height: 20px;
}

.el-header{

}

.el-header, .el-footer {
  background-color: #2A93FF;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #3F3F3F;
  color: #f0f0f0;
  text-align: center;
  bottom: 0;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-row {
  margin-top: 10px;
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
