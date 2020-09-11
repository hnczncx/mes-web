<template>
  <div class="app-container">
    <el-row style="margin-bottom:22px">
      <el-button type="primary" @click="onSubmit">新增</el-button>
      <el-button @click="onCancel">启动任务</el-button>
    </el-row>

    <el-table :data="tableData" stripe border style="width: 100%">
      <el-table-column prop="index" label="序号" width="80"></el-table-column>
      <el-table-column prop="parts" label="零件"></el-table-column>
      <el-table-column prop="steps" label="工步">
            <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
           </el-select>
      </el-table-column>
      <el-table-column prop="state" label="订单状态"></el-table-column>
      <el-table-column prop="measure" label="机内测量"></el-table-column>
      <el-table-column prop="taskgl" label="任务管理">
        <el-button type="text" style="padding:0">启动任务</el-button>
        <el-button type="text" style="padding:0">完成任务</el-button>
      </el-table-column>
      <el-table-column prop="operation" label="操作">
        <el-button type="text" style="padding:0">完成订单</el-button>
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
          parts: "100",
          steps: "300",
          state: "进行中",
          measure: "合格"
          
        },
 {
          index: "1",
          parts: "100",
          steps: "300",
          state: "进行中",
          measure: "合格"
        },
         {
          index: "1",
          parts: "100",
          steps: "300",
          state: "完成",
          measure: "合格"
        },
         {
          index: "1",
          parts: "100",
          steps: "300",
          state: "完成",
          measure: "100"
        },
        {
          index: "1",
          parts: "100",
          steps: "300",
          state: "未启动",
          measure: "合格"
        },
         {
          index: "1",
          parts: "100",
          steps: "300",
          state: "未启动",
          measure: "不合格"
        },
         {
          index: "1",
          parts: "100",
          steps: "300",
          state: "进行中",
          measure: "合格"
        },
         {
          index: "1",
          parts: "100",
          steps: "300",
          state: "进行中",
          measure: "合格"
        },
         {
          index: "1",
          parts: "100",
          steps: "300",
          state: "进行中",
          measure: "合格"
        },
         {
          index: "1",
          parts: "100",
          steps: "300",
          state: "未启动",
          measure: "合格"
        },
       ],
      options: [
        {
          value: "1",
          label: "上料",
        },
        {
          value: "2",
          label: "加工",
        },
        {
          value: "3",
          label: "返修",
        },
        {
          value: "4",
          label: "下料",
        },
      ],
      value: "",
    };
  },
};
</script>
