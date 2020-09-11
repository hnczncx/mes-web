<template>
  <div class="app-container">
    <el-row style="margin-bottom:22px">
      <el-button type="primary" @click="onSubmit">刷新</el-button>
      
<el-button type="primary" style="float: right;">查询</el-button>
<el-input v-model="input" placeholder="请输入关键字" style="width:200px;float: right;"></el-input>
 
    </el-row>

    <el-table :data="tableData" stripe border style="width: 100%" @selection-change="handleSelectionChange">
      
      <el-table-column prop="index" label="序号" width="80"></el-table-column>
      <el-table-column prop="type" label="类别" width="100"></el-table-column>
      <el-table-column prop="date" label="日期" width="280"></el-table-column>
      <el-table-column prop="describe" label="事件描述"></el-table-column>
    </el-table>

    <el-pagination style="margin-top:22px" background layout="prev, pager, next" :total="100"></el-pagination>
  </div>
</template>
<style scoped>
</style>


<script>
export default {
  data() {
    return {
      tableData: [
        {
          index: "1",
          type: "系统信息",
          date: "2020-07-03 12:23:41",
          describe: "用户登录用户登录用户登录用户登录用户登录用户登录用户登录用户登录用户登录"
        },
        {
          index: "1",
          type: "系统信息",
          date: "2020-07-03 12:23:41",
          describe: "用户登录"
        },
        {
          index: "1",
          type: "系统信息",
          date: "2020-07-03 12:23:41",
          describe: "用户登录"
        },
        {
          index: "1",
          type: "系统信息",
          date: "2020-07-03 12:23:41",
          describe: "用户登录"
        },
        {
          index: "1",
          type: "系统信息",
          date: "2020-07-03 12:23:41",
          describe: "用户登录"
        },
        {
          index: "1",
          type: "系统信息",
          date: "2020-07-03 12:23:41",
          describe: "用户登录"
        },
        {
          index: "1",
          type: "系统信息",
          date: "2020-07-03 12:23:41",
          describe: "用户登录"
        },
  {
          index: "1",
          type: "系统信息",
          date: "2020-07-03 12:23:41",
          describe: "用户登录"
        },
        {
          index: "1",
          type: "系统信息",
          date: "2020-07-03 12:23:41",
          describe: "用户登录"
        },
        {
          index: "1",
          type: "系统信息",
          date: "2020-07-03 12:23:41",
          describe: "用户登录"
        },
  ]
  ,
    input: ''
  };
  },
};
</script>
