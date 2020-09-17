<template>
  <div class="app-container">
    <div class="formtab">
      <el-button type="primary" style="margin-bottom:10px;">获取检测结果</el-button>

      <el-table :data="tableData" stripe border style="width: 100%">
        <el-table-column prop="index" label="序号"></el-table-column>
        <el-table-column prop="countname" label="变量名"></el-table-column>

        <!-- 是否合格-tag -->
        <el-table-column prop="result" label="检测结果">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.result == '合格' ? 'success' :'danger'"
              disable-transitions
            >{{scope.row.result}}</el-tag>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination style="margin-top:22px" background layout="prev, pager, next" :total="100"></el-pagination>
    </div>

    <div class="formtab" style="margin-top:40px">
      <el-button type="primary" style="margin-bottom:10px;">获取标定值</el-button>

      <el-table :data="tableData1" stripe border style="width: 100%">
        <el-table-column prop="index" label="序号"></el-table-column>
        <el-table-column prop="countname" label="变量名"></el-table-column>

        <!-- 是否合格-tag -->
        <el-table-column prop="result" label="检测结果">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.result == '合格' ? 'success' :'danger'"
              disable-transitions
            >{{scope.row.result}}</el-tag>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination style="margin-top:22px" background layout="prev, pager, next" :total="100"></el-pagination>
    </div>
  </div>
</template>
<style scoped>
.formtab {
  margin-bottom: 20px;
}
</style>


<script>
// 表头操作

export default {
  data() {
    return {
      tableData: [
        {
          index: "Tracydaix1",
          countname: "检验项",
          result: "合格",
        },
        {
          index: "Tracydaix1",
          countname: "检验项",
          result: "不合格",
        },
        {
          index: "Tracydaix1",
          countname: "检验项",
          result: "不合格",
        },
        {
          index: "Tracydaix1",
          countname: "检验项",
          result: "合格",
        },
        {
          index: "Tracydaix1",
          countname: "检验项",
          result: "合格",
        },
      ],
      tableData1: [
        {
          index: "Tracydaix1",
          countname: "检验项",
          result: "合格",
        },
        {
          index: "Tracydaix1",
          countname: "检验项",
          result: "不合格",
        },
        {
          index: "Tracydaix1",
          countname: "检验项",
          result: "不合格",
        },
        {
          index: "Tracydaix1",
          countname: "检验项",
          result: "合格",
        },
        {
          index: "Tracydaix1",
          countname: "检验项",
          result: "合格",
        },
      ],
    };
  },
};
</script>
