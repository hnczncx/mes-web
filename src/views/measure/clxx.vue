<template>
  <div class="app-container">
    <div class="formtab">
      <el-divider content-position="left">质量模型表</el-divider>

      <!-- 表头操作 -->
      <label class="tablab">零件名称：</label>
      <el-select v-model="value" placeholder="请选择" style="margin-right:40px;">
        <el-option-group v-for="group in options" :key="group.label" :label="group.label">
          <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-option-group>
      </el-select>

      <label class="tablab">部件名称：</label>
      <el-select v-model="value1" placeholder="请选择">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>

      <el-button type="danger" plain style="margin-left:10px;margin-right:40px;">删除模板</el-button>
      <label class="tablab">新增部件：</label>
      <el-input v-model="input" placeholder="请输入内容" style="width:200px"></el-input>
      <el-button type="primary" style="margin-left:10px;">保存模板</el-button>
      <el-table :data="tableData" stripe border style="width: 100%">
        <el-table-column prop="index" label="检验项编号"></el-table-column>
        <el-table-column prop="name" label="检验项名称"></el-table-column>
        <el-table-column prop="unit" label="单位"></el-table-column>
        <el-table-column prop="value" label="标准值"></el-table-column>
        <el-table-column prop="value1" label="上差值"></el-table-column>
        <el-table-column prop="value2" label="下差值"></el-table-column>
      </el-table>

      <el-pagination style="margin-top:22px" background layout="prev, pager, next" :total="100"></el-pagination>
    </div>
    <!-- 质量跟踪表 -->
    <div class="formtab" style="margin-top:60px;">
      <el-divider content-position="left">质量跟踪表</el-divider>
      <!-- 表头操作 -->
      <label class="tablab">零件名称：</label>
      <el-select v-model="value2" placeholder="请选择" style="margin-right:40px;">
        <el-option-group v-for="group in options" :key="group.label" :label="group.label">
          <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-option-group>
      </el-select>

      <el-table :data="tableData1" stripe border style="width: 100%">
        <el-table-column prop="index" label="检验项编号"></el-table-column>
        <el-table-column prop="name" label="检验项名称"></el-table-column>
        <el-table-column prop="unit" label="单位"></el-table-column>
        <el-table-column prop="value" label="标准值"></el-table-column>
        <el-table-column prop="value1" label="上差值"></el-table-column>
        <el-table-column prop="value2" label="下差值"></el-table-column>
        <el-table-column prop="value3" label="实际值"></el-table-column>

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
          unit: "mm",
          value: "110",
          value1: "100",
          value2: "300",
        },
        {
          index: "Tracydaix1",
          name: "检验项",
          unit: "mm",
          value: "110",
          value1: "100",
          value2: "300",
        },
        {
          index: "Tracydaix1",
          name: "检验项",
          unit: "mm",
          value: "110",
          value1: "100",
          value2: "300",
        },
        {
          index: "Tracydaix1",
          name: "检验项",
          unit: "mm",
          value: "110",
          value1: "100",
          value2: "300",
        },
        {
          index: "Tracydaix1",
          name: "检验项",
          unit: "mm",
          value: "110",
          value1: "100",
          value2: "300",
        },
      ],
      tableData1: [
        {
          index: "Tracydaix1",
          name: "检验项",
          unit: "mm",
          value: "110",
          value1: "100",
          value2: "300",
          value3: "300",
          result: "合格",
        },
        {
          index: "Tracydaix1",
          name: "检验项",
          unit: "mm",
          value: "110",
          value1: "100",
          value2: "300",
          value3: "300",
          result: "不合格",
        },
        {
          index: "Tracydaix1",
          name: "检验项",
          unit: "mm",
          value: "110",
          value1: "100",
          value2: "300",
          value3: "300",
          result: "不合格",
        },
        {
          index: "Tracydaix1",
          name: "检验项",
          unit: "mm",
          value: "110",
          value1: "100",
          value2: "300",
          value3: "300",
          result: "合格",
        },
        {
          index: "Tracydaix1",
          name: "检验项",
          unit: "mm",
          value: "110",
          value1: "100",
          value2: "300",
          value3: "300",
          result: "合格",
        },
      ],
      options: [
        {
          label: "部件ZN-02-00-03",
          options: [
            {
              value: "01",
              label: "下板",
            },
            {
              value: "02",
              label: "上板",
            },
          ],
        },
        {
          label: "部件ZN-02-00-03",
          options: [
            {
              value: "11",
              label: "下板",
            },
            {
              value: "12",
              label: "上板",
            },
            {
              value: "13",
              label: "下板11",
            },
            {
              value: "14",
              label: "上板12",
            },
          ],
        },
      ],
      options1: [
        {
          value: "1",
          label: "部件模板111",
        },
        {
          value: "2",
          label: "部件模板222",
        },
        {
          value: "3",
          label: "部件模板333",
        },
        {
          value: "4",
          label: "部件模板444",
        },
      ],
      value: "",
      value1: "",
      value2: "",
    };
  },
};
</script>
