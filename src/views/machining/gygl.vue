<template>
  <div class="app-container">
    <el-row style="margin-bottom:22px">
      <el-button type="primary" @click="onSubmit">新增</el-button>
      <el-button @click="onCancel">启动任务</el-button>

<el-button type="primary" style="float: right;">查询</el-button>
<el-input v-model="input" placeholder="请输入关键字" style="width:200px;float: right;"></el-input>
 
    </el-row>

    <el-table :data="tableData" stripe border style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection"  width="60">
      </el-table-column>
      <el-table-column prop="index" label="ID"></el-table-column>
      <el-table-column prop="parts" label="零件名称"></el-table-column>
      <el-table-column prop="working" label="工序"></el-table-column>
      <el-table-column prop="procedure" label="工序的程序"></el-table-column>
      <el-table-column prop="measure" label="质量标准名称"></el-table-column>
     
      <el-table-column prop="operation" label="操作">
        <el-button type="text" style="padding:0">编辑</el-button>
        <el-button type="text" style="padding:0">删除</el-button>
      </el-table-column>
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
          parts: "ZN-00-01-03下板",
          working: "车",
          procedure: "进行中",
          measure: "合格"
          
        },
         {
          index: "1",
          parts: "ZN-00-01-03下板",
          working: "车",
          procedure: "进行中",
          measure: "合格"
          
        },
         {
          index: "1",
          parts: "ZN-00-01-03下板",
          working: "车",
          procedure: "进行中",
          measure: "合格"
          
        },
      {
          index: "1",
          parts: "ZN-00-01-03下板",
          working: "车",
          procedure: "进行中",
          measure: "合格"
          
        },
         {
          index: "1",
          parts: "ZN-00-01-03下板",
          working: "车",
          procedure: "进行中",
          measure: "合格"
          
        },
         {
          index: "1",
          parts: "ZN-00-01-03下板",
          working: "车",
          procedure: "进行中",
          measure: "合格"
          
        },
    {
          index: "1",
          parts: "ZN-00-01-03下板",
          working: "车",
          procedure: "进行中",
          measure: "合格"
          
        },
         {
          index: "1",
          parts: "ZN-00-01-03下板",
          working: "车",
          procedure: "进行中",
          measure: "合格"
          
        },
         {
          index: "1",
          parts: "ZN-00-01-03下板",
          working: "车",
          procedure: "进行中",
          measure: "合格"
          
        },
   ]
  ,
    input: ''
  };
  },
};
</script>
