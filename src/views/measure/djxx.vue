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

      <el-table-column label="半径补偿修改值">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.radius2"></el-input>
          <span v-show="!scope.row.show">{{scope.row.radius2}}</span>
        </template>
      </el-table-column>

      <el-table-column label="长度补偿修改值">
         <template slot-scope="scope">
          <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.length2"></el-input>
          <span v-show="!scope.row.show">{{scope.row.length2}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="operation" label="操作">
        <template slot-scope="scope">
          <el-button type="text" style="padding:0" @click="scope.row.show =true">编辑</el-button>
          <el-button type="text" style="padding:0" @click="scope.row.show =false">保存</el-button>
          <el-button type="text" style="padding:0">提交</el-button>
        </template>
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
          operation: "300",
          show: false,
        },

        {
          index: "1",
          radius: "100",
          length: "300",
          radius1: "1",
          length1: "100",
          radius2: "300",
          length2: "100",
          operation: "300",
          show: false,
        },
        {
          index: "1",
          radius: "100",
          length: "300",
          radius1: "1",
          length1: "100",
          radius2: "300",
          length2: "100",
          operation: "300",
          show: false,
        },
        {
          index: "1",
          radius: "100",
          length: "300",
          radius1: "1",
          length1: "100",
          radius2: "300",
          length2: "100",
          operation: "300",
          show: false,
        },
      ],
    };
  },
};
</script>
