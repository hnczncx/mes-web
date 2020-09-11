<template>
  <div class="app-container">
    <el-row style="margin-bottom:22px">
      <el-button type="primary" @click="onSubmit">新增</el-button>
      <el-button @click="onCancel">批量操作</el-button>
    </el-row>

    <el-table :data="tableData" stripe border style="width: 100%">
      <el-table-column prop="index" label="序号" width="80"></el-table-column>
      <el-table-column prop="radius" label="半径"></el-table-column>
      <el-table-column prop="length" label="长度"></el-table-column>
      <el-table-column prop="radius1" label="半径补偿值"></el-table-column>
      <el-table-column prop="length1" label="长度补偿值"></el-table-column>
      <el-table-column prop="radius2" label="半径补偿修改值"></el-table-column>
      <el-table-column prop="length2" label="长度补偿修改值"></el-table-column>
      <el-table-column prop="operation" label="操作">
        <el-button type="text" style="padding:0">编辑</el-button>
        <el-button type="text" style="padding:0">提交</el-button>
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
          radius: "100",
          length: "300",
          radius1: "1",
          length1: "100",
          radius2: "300",
          length2: "100",
          operation: "300"
        },

        {
          index: "1",
          radius: "100",
          length: "300",
          radius1: "1",
          length1: "100",
          radius2: "300",
          length2: "100",
          operation: "300"
        },
        {
          index: "1",
          radius: "100",
          length: "300",
          radius1: "1",
          length1: "100",
          radius2: "300",
          length2: "100",
          operation: "300"
        },
        {
          index: "1",
          radius: "100",
          length: "300",
          radius1: "1",
          length1: "100",
          radius2: "300",
          length2: "100",
          operation: "300"
        },
        {
          index: "1",
          radius: "100",
          length: "300",
          radius1: "1",
          length1: "100",
          radius2: "300",
          length2: "100",
          operation: "300"
        },
        {
          index: "1",
          radius: "100",
          length: "300",
          radius1: "1",
          length1: "100",
          radius2: "300",
          length2: "100",
          operation: "300"
        },
        {
          index: "1",
          radius: "100",
          length: "300",
          radius1: "1",
          length1: "100",
          radius2: "300",
          length2: "100",
          operation: "300"
        },
        {
          index: "1",
          radius: "100",
          length: "300",
          radius1: "1",
          length1: "100",
          radius2: "300",
          length2: "100",
          operation: "300"
        },
        {
          index: "1",
          radius: "100",
          length: "300",
          radius1: "1",
          length1: "100",
          radius2: "300",
          length2: "100",
          operation: "300"
        },
        {
          index: "1",
          radius: "100",
          length: "300",
          radius1: "1",
          length1: "100",
          radius2: "300",
          length2: "100",
          operation: "300"
        }
      ]
    };
  }
};
</script>
