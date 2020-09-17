<template>
  <div class="app-container ddgl-container">
    <el-row style="margin-bottom:22px">
      <el-button type="primary" @click="add()">新增</el-button>
      <el-button @click="onCancel">启动任务</el-button>
    </el-row>

    <el-table ref="filterTable" :data="tableData" stripe border style="width: 100%">
      <el-table-column prop="id" label="序号" width="180"></el-table-column>
      <el-table-column prop="workpieceName" label="零件"></el-table-column>

      <!-- 工步-下拉框 -->
      <el-table-column prop="step" label="工步">
        <template slot-scope="scope">
          <el-select v-model="scope.row.step" @change="stepChange(scope.row)">
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
        label="工步状态"
        :filters="[{ text: '进行中', value: '2' }, { text: '已完成', value: '4' },{ text: '未启动', value: '1' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="checkState(scope.row)"
            disable-transitions
          >{{scope.row.stateName}}</el-tag>
        </template>
      </el-table-column>

      <!-- 是否合格-tag -->
      <el-table-column
        prop="isQualified"
        label="机内测量"
        :filters="[{ text: '合格', value: '2' },{ text: '不合格', value: '1' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.isQualified == '2' ? 'success' :'danger'"
            disable-transitions
          >{{scope.row.isQualified == '2' ? '合格' :'未合格'}}</el-tag>
        </template>
      </el-table-column>

      <el-table-column
        prop="reserved"
        label="订单状态"
        :filters="[{ text: '进行中', value: '2' }, { text: '已完成', value: '4' },{ text: '未启动', value: '1' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="checkReserved(scope.row)"
            disable-transitions
          >{{scope.row.reservedName}}</el-tag>
        </template>
      </el-table-column>

      <el-table-column prop="taskgl" label="任务管理">
        <template slot-scope="scope">
          <el-button type="text" style="padding:0" @click="startTask(scope.row)">启动任务</el-button>
          <el-button type="text" style="padding:0" @click="completeTask(scope.row)">完成任务</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="operation" label="操作">
        <template slot-scope="scope">
          <el-button type="text" style="padding:0" @click="completeOrder(scope.row)">完成订单</el-button>
          <el-button type="text" style="padding:0" @click="orderDel(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination style="margin-top:22px" background layout="prev, pager, next" 
      :total="page.total"
      :page-size="page.size" 
      :pager-count="page.pager" 
      @current-change="handleCurrentChange">
    </el-pagination>
    <el-dialog title="编辑订单信息" :visible.sync="editInfo">
      <el-form ref="form" :model="form" label-width="90px">
        <el-form-item label="订单名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="订单编码">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="选择工件">
          <el-select v-model="form.workpieceId" placeholder="请选择工件">
            <el-option :label="item.name" :value="item.id" v-for="item in workpieceList" :key="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="工序的程序">
          <el-date-picker     style="width:100%"
            v-model="datePicker"
            @change="datePickerChange"
            type="daterange"
            value-format="timestamp"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期" >
      
          </el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editInfo = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>
.el-table {
  // 表格内部下拉框
  ::v-deep .el-input__inner {
    border: none;
    border-style: none;
    background-color: rgba(0, 0, 0, 0);
    padding-left: 0;
  }
  ::v-deep .el-table__row td:nth-child(3),
  ::v-deep .el-table__row td:nth-child(4),
  ::v-deep .el-table__row td:nth-child(5) {
    padding: 0;
  }
}

.el-select {
  width: 100%;
}

</style>


<script>
import request from "@/utils/request";
export default {
  data() {
    return {
      form:{
        id:"",
        workpieceId:"",
        code:"",
        name:"",
        scheduledStartTime:"",
        scheduledEndTime:"",
      },
      page:{
        size:10,
        pager:5,
        total:100,
        number:1,
      },
      submitType:true,
      datePicker:"",
      editInfo:false,
      workpieceList:[],
      tableData: [],
      options: [
        { value: "1", label: "上料", },
        { value: "2", label: "加工", },
        { value: "3", label: "返修", },
        { value: "4", label: "下料", },
      ],
      value: "",
    };
  },
  mounted () {
    this.getWorkpieceList()
    let param = {pageSize:this.page.size,pageNumber:1} 
    this.getOrderList(param);
  },
  methods: {
    //  过滤器
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
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
      const property = column["property"];
      return row[property] === value;
    },
    startTask (row) {
      const intState = Number.parseInt(row.state);
      const step = Number.parseInt(row.step);
      if(row.reserved == 4){
        this.$message({ message: "该订单已完工无需再次操作！", type: "warning" });
      }else if( intState >= 2 && step != 3){
        this.$message({ message: "任务已启动，无需再次启动", type: "warning" });
      }else{
        let param = {orderId:row.id,processId:row.step,state:2}
        request
          .post("orderExecute/add",param)
          .then((res) => {
            const dataInfo = res.dataInfo;
            if (res.returnCode == 200) {
              row.stepId = dataInfo.id
              row.state = 2
              row.stateName = "进行中"
              row.reserved = 2
              row.reservedName = "进行中"
            } else {
              this.$message({ message: "任务状态变更失败！", type: "warning" });
            }
          });
      }
    },
    completeTask (row) {
      if(row.reserved == 4){
        this.$message({ message: "该订单已完工无需再次操作！", type: "warning" });
      }else if(row.state != 2){
        this.$message({ message: "任务未处于进行中状态，不可完成！", type: "warning" });
      }else{
        let param = {id:row.stepId,state:4}
        request
          .post("orderExecute/update",param)
          .then((res) => {
            const dataInfo = res.dataInfo;
            if (res.returnCode == 200) {
              row.state = 4
              row.stateName = "已完成"
              if(row.step == 4) {
                row.reserved = 4
                row.reservedName = "已完成"
              }
            } else {
              this.$message({ message: "任务状态变更失败！", type: "warning" });
            }
          });
      }
    },
    completeOrder (row) {
      let param = {id:row.id,reserved:4}
      request
        .post("productionOrder/update",param)
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            row.reserved = 4
            this.checkReserved(row)
          } else {
            this.$message({ message: "任务状态变更失败！", type: "warning" });
          }
        });
    },
    onCancel () {

    },
    formInit () {
      this.form.id = ""
      this.form.workpieceId = ""
      this.form.code = ""
      this.form.name = ""
      this.form.scheduledStartTime = ""
      this.form.scheduledEndTime = ""
      this.datePicker = ""
    },
    onSubmit () {
      let url = ""
      if(this.submitType){
        url = "productionOrder/add"
      }else{
        url = "productionOrder/update"
      }
      request
        .post(url,this.form)
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            let param = {pageSize:this.page.size,pageNumber:this.page.number} 
            this.getOrderList(param)
            this.editInfo = false
            this.formInit()
          } else {
            this.$message({ message: "提交工艺信息失败！", type: "warning" });
          }
        });
    },
    add () {
      this.editInfo = true
      this.submitType = true
    },
    orderDel (id) {
      request
        .post("productionOrder/delete",{id:id})
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            let param = {pageSize:this.page.size,pageNumber:this.page.number} 
            this.getOrderList(param)
          } else {
            this.$message({ message: "提交工艺信息失败！", type: "warning" });
          }
        });
    },
    stepChange (row) {
      request
        .post("orderExecute/queryByOrder",{orderId:row.id,processId:row.step})
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            row.stepId = dataInfo.id
            row.state = dataInfo.state
            row.isQualified = dataInfo.isQualified
            this.checkState(row);
            this.checkReserved(row)
          } else {
            this.$message({ message: "提交工艺信息失败！", type: "warning" });
          }
        });
    },
    datePickerChange (date) {
      this.form.scheduledStartTime = date[0]
      this.form.scheduledEndTime = date[0]
    },
    getWorkpieceList () {
      request
        .post("workpiece/pageQuery",{pageSize:100,pageNumber:1})
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            if(dataInfo.length > 0){
              this.workpieceList = dataInfo;
            }
          } else {
            this.$message({ message: "完成任务失败！", type: "warning" });
          }
        });
    },
    getOrderList (param) {
      request
        .post("productionOrder/pageQuery",param)
        .then((res) => {
          const dataInfo = res.dataInfo;
          console.info(dataInfo)
          if (res.returnCode == 200) {
            if(dataInfo.length > 0){
              this.tableData = dataInfo
              this.page.total = res.total
            }
          } else {
            this.$message({ message: "完成任务失败！", type: "warning" });
          }
        });
    },
    handleCurrentChange (val) {
      this.page.number = val
      let param = {pageSize:this.page.size,pageNumber:this.page.number}
      this.getOrderList(param);
    },
    checkState(row){
      if(row.state == 2){ row.stateName = "进行中"; return ""; }
      if(row.state == 3){ row.stateName = "异常中"; return "danger"; }
      if(row.state == 4){ row.stateName = "已完成"; return "success"; }
      row.stateName = "未开启";  return "info";
    },
    checkReserved(row){
      if(row.reserved == 2){ row.reservedName = "进行中"; return ""; }
      if(row.reserved == 3){ row.reservedName = "异常中"; return "danger"; }
      if(row.reserved == 4){ row.reservedName = "已完成"; return "success"; }
      row.reservedName = "未开启";  return "info";
    }
  },
};
</script>
