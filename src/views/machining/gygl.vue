<template>
  <div class="app-container">
    <el-row style="margin-bottom:22px">
      <el-button type="primary" @click="add()">新增</el-button>
      <el-button>启动任务</el-button>

      <el-button type="primary" style="float: right;">查询</el-button>
      <el-input v-model="input" placeholder="请输入关键字" style="width:200px;float: right;"></el-input>
    </el-row>

    <el-table
      :data="workpieceList"
      stripe
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="60"></el-table-column>
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="零件名称"></el-table-column>
      <el-table-column prop="routeId" label="工序" filter-placement="bottom-end">
        <template slot-scope="scope">{{scope.row.routeId == '1' ? '车工序':''}}</template>
      </el-table-column>
      <el-table-column prop="executionPath" label="工序的程序"></el-table-column>
      <el-table-column prop="mouldName" label="质量标准名称"></el-table-column>

      <el-table-column prop="operation" label="操作">
        <template slot-scope="scope">
          <el-button type="text" style="padding:0" @click="edit(scope.row.id)">编辑</el-button>
          <el-button type="text" style="padding:0" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination style="margin-top:22px" 
      :page-size="page.size" 
      :pager-count="page.pager" 
      background 
      layout="prev, pager, next" 
      :total="page.total"
      @current-change="handleCurrentChange">
      </el-pagination>

    <el-dialog title="编辑工艺信息" :visible.sync="editInfo">
      <el-form ref="form" :model="form" label-width="90px">
        <el-form-item label="零件名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="选择工序">
          <el-select v-model="form.routeId" placeholder="请选择工序">
            <el-option label="车工序" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="工序的程序">
          <el-input v-model="form.executionPath"></el-input>
        </el-form-item>
        <el-form-item label="质量标准">
          <el-select v-model="form.datectionMouldId" placeholder="请选择质量标准">
            <el-option :label="item.name" :value="item.id" v-for="item in datectionMoulds" :key="item.id"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editInfo = false">取 消</el-button>
        <el-button type="primary" @click="workPieceSubmit()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import request from "@/utils/request";
export default {
  data() {
    return {
      formLabelWidth: "90px",
      submitType:true,
      form: {
        id: "",
        name: "",
        routeId: "1",
        executionPath: "",
        datectionMouldId: "",
      },
      page:{
        size:10,
        pager:5,
        total:100,
        number:1,
      },
      editInfo: false,
      input: "",
      datectionMoulds:[],
      workpieceList:[],
    };
  },
  mounted () {
    this.getDatectionMould({pageSize:this.page.size,pageNumber:1})
    this.getWorkpieceList()
  },
  methods: {
    add() {
      this.editInfo = true;
      this.submitType = true;
    },
    handleSelectionChange () {},
    filterTag(value, row) {
      return row.routeId == value;
    },
    handleCurrentChange (val) {
      let param = {pageSize:this.page.size,pageNumber:val}
      this.getDatectionMould(param);
    },
    getDatectionMould (param) {
      request
        .post("detectionMould/page",{pageSize:100,pageNumber:1})
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            if(dataInfo.length > 0){
              this.form.datectionMouldId = dataInfo[0].id
              this.datectionMoulds = dataInfo;
            }
          } else {
            this.$message({ message: "完成任务失败！", type: "warning" });
          }
        });
    },
    getWorkpieceList () {
      request
        .post("workpiece/pageQuery",{pageSize:this.page.size,pageNumber:1})
        .then((res) => {
          const dataInfo = res.dataInfo;
          this.page.total = res.total;
          if (res.returnCode == 200) {
            if(dataInfo.length > 0){
              this.workpieceList = dataInfo;
            }
          } else {
            this.$message({ message: "完成任务失败！", type: "warning" });
          }
        });
    },
    workPieceSubmit () {
      let url = ""
      if(this.submitType){
        url = "workpiece/add"
      }else{
        url = "workpiece/update"
      }
      request
        .post(url,this.form)
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            this.getWorkpieceList()
            this.editInfo = false
            this.formInit()
          } else {
            this.$message({ message: "提交工艺信息失败！", type: "warning" });
          }
        });
    },
    edit (id) {
      this.editInfo = true;
      this.submitType = false;
      request
        .post("workpiece/query",{id:id})
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            this.form = dataInfo;
          } else {
            this.$message({ message: "查询工艺失败！", type: "warning" });
          }
        });
    },
    del (id) {
      request
        .post("workpiece/delete",{id:id})
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            this.getWorkpieceList()
          } else {
            this.$message({ message: "删除工艺失败！", type: "warning" });
          }
        });
    },
    formInit(){
      this.form.id = ""
      this.form.name = ""
      this.form.routeId = "1"
      this.form.executionPath = ""
      this.form.datectionMouldId = this.datectionMoulds[0].id
    }
  },
};
</script>

<style scoped>
.el-select {
  width: 100%;
}
</style>