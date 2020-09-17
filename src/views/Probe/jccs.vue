<template>
  <div class="app-container">
    <div class="formtab">
      <!-- 表头操作 -->
      <label class="tablab">开关门状态：</label>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select> 

      <label class="tablab">液压卡盘状态：</label>
      <el-select v-model="value1" placeholder="请选择">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>

      <label class="tablab">零点卡盘状态：</label>
      <el-select v-model="value2" placeholder="请选择">
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>

      <label class="tablab">主轴转速：</label>
      <el-input v-model="input" placeholder="请输入内容" style="width:120px"></el-input>
      <el-button type="primary" style="margin-left:10px;">开始测试</el-button>
      <el-table :data="tableData" stripe border style="width: 100%">
        <el-table-column prop="index" label="序号"></el-table-column>
        <el-table-column prop="name" label="测试项"></el-table-column>

        <!-- 是否合格-tag -->
        <el-table-column prop="result" label="测试结果">
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
.el-select {
  margin-bottom: 10px;
  width: 120px;
  margin-right: 40px;
}
.tablab {
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  vertical-align: middle;
}

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
          name: "检验项",
          result: "不合格",
        },
        {
          index: "Tracydaix1",
          name: "检验项",
          result: "合格",
        },
        {
          index: "Tracydaix1",
          name: "检验项",
          result: "不合格",
        },
        {
          index: "Tracydaix1",
          name: "检验项",
          result: "合格",
        },
        {
          index: "Tracydaix1",
          name: "检验项",
          result: "合格",
        },
        {
          index: "Tracydaix1",
          name: "检验项",
          result: "不合格",
        },
        {
          index: "Tracydaix1",
          name: "检验项",
          result: "合格",
        },
        {
          index: "Tracydaix1",
          name: "检验项",
          result: "合格",
        },
        {
          index: "Tracydaix1",
          name: "检验项",
          result: "合格",
        },
        {
          index: "Tracydaix1",
          name: "检验项",
          result: "合格",
        },
      ],

      options: [
        {
          value: "1",
          label: "开门",
        },
        {
          value: "2",
          label: "关门",
        },
      ],
      options1: [
        {
          value: "1",
          label: "夹紧",
        },
        {
          value: "2",
          label: "状态2",
        },
      ],
      options2: [
        {
          value: "1",
          label: "状态1",
        },
        {
          value: "2",
          label: "状态2",
        },
      ],
      value: "",
      value1: "",
      value2: "",
    };
  },
};
</script>
