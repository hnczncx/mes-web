<template>
  <div class="app-container ddgl-container">
    <el-row style="margin-bottom:22px">
      <el-button type="primary" @click="onSubmit">新增</el-button>
      <el-button @click="onCancel">启动任务</el-button>
    </el-row>

    <el-table ref="filterTable"
     :data="tableData" stripe border style="width: 100%"
    >
      <el-table-column prop="index" label="序号" width="80"></el-table-column>
      <el-table-column prop="parts" label="零件"></el-table-column>


<!-- 工步-下拉框 -->
      <el-table-column prop="steps" label="工步">
        <template slot-scope="scope">
          <el-select v-model="scope.row.stepslist">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </template>
      </el-table-column>

<!-- 订单状态-tag -->
      <el-table-column
        prop="state"
        label="订单状态"
        :filters="[{ text: '进行中', value: '进行中' }, { text: '已完成', value: '已完成' },{ text: '未启动', value: '未启动' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
           <el-tag
          :type="scope.row.state == '进行中' ? '' :scope.row.state == '已完成' ? 'success':'info'"
          disable-transitions>{{scope.row.state}}</el-tag>
        </template>
        
      </el-table-column>


<!-- 是否合格-tag -->
      <el-table-column prop="measure" label="机内测量"
      :filters="[{ text: '合格', value: '合格' },{ text: '不合格', value: '不合格' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
        >

 <template slot-scope="scope">
           <el-tag
          :type="scope.row.measure == '合格' ? 'success' :'danger'"
          disable-transitions>{{scope.row.measure}}</el-tag>
        </template>

      </el-table-column>


      <el-table-column prop="taskgl" label="任务管理">
        <template slot-scope="scope">
          <el-button type="text" style="padding:0" @click="getRowData(scope.row)">启动任务</el-button>
          <el-button type="text" style="padding:0">完成任务</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="operation" label="操作">
        <el-button type="text" style="padding:0">完成订单</el-button>
        <el-button type="text" style="padding:0">删除</el-button>
      </el-table-column>
    </el-table>

    <el-pagination style="margin-top:22px" background layout="prev, pager, next" :total="100"></el-pagination>
  </div>
</template>
<style lang="scss" scoped>
.ddgl-container {
  // 表格内部下拉框
  ::v-deep .el-input__inner {
    border: none;
    border-style: none;
    background-color: rgba(0, 0, 0, 0);
    padding-left: 0;
  }
  ::v-deep .el-table__row td:nth-child(3),
  ::v-deep .el-table__row td:nth-child(4) ,
  ::v-deep .el-table__row td:nth-child(5){
    padding: 0;
  }
}
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
          measure: "合格",
        },
        {
          index: "1",
          parts: "100",
          steps: "300",
          state: "已完成",
          measure: "合格",
        },
        {
          index: "1",
          parts: "100",
          steps: "300",
          state: "未启动",
          measure: "合格",
        },
        {
          index: "1",
          parts: "100",
          steps: "300",
          state: "未启动",
          measure: "不合格",
        },
        {
          index: "1",
          parts: "100",
          steps: "300",
          state: "未启动",
          measure: "不合格",
        },
        {
          index: "1",
          parts: "100",
          steps: "300",
          state: "进行中",
          measure: "不合格",
        },
        {
          index: "1",
          parts: "100",
          steps: "300",
          state: "已完成",
          measure: "合格",
        },
        {
          index: "1",
          parts: "100",
          steps: "300",
          state: "进行中",
          measure: "合格",
        },
        {
          index: "1",
          parts: "100",
          steps: "300",
          state: "已完成",
          measure: "合格",
        },
        {
          index: "1",
          parts: "100",
          steps: "300",
          state: "未启动",
          measure: "合格",
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
   methods: {
    //  过滤器
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      getRowData (row) {
        console.info(row)
      },
      onCancel () {

      },
      onSubmit () {
        
      }
    }
};
</script>
