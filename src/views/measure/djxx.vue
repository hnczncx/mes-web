<template>
  <div class="app-container">
    <el-row style="margin-bottom:22px">
      <el-button type="primary" @click="add()">新增</el-button>
      <el-button @click="onCancel">批量操作</el-button>
    </el-row>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="code" label="编号">
        <template  slot-scope="scope">
          <el-input v-model="scope.row.code" :disabled="scope.row.show"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="length" label="长度">
        <template  slot-scope="scope">
          <el-input v-model="scope.row.length" :disabled="scope.row.show"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="radius" label="半径">
        <template  slot-scope="scope">
          <el-input v-model="scope.row.radius" :disabled="scope.row.show"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="lengthSubjoin" label="长度补偿值">
        <template  slot-scope="scope">
          <el-input v-model="scope.row.lengthSubjoin" :disabled="scope.row.show"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="radiusSubjoin" label="半径补偿值">
        <template  slot-scope="scope">
          <el-input v-model="scope.row.radiusSubjoin" :disabled="scope.row.show"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="updateLengthSubjoin" label="长度补偿修改值">
        <template  slot-scope="scope">
          <el-input v-model="scope.row.updateLengthSubjoin" :disabled="scope.row.show"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="updateRadiusSubjoin" label="半径补偿修改值">
        <template  slot-scope="scope">
          <el-input v-model="scope.row.updateRadiusSubjoin" :disabled="scope.row.show"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="show" label="操作" width="150">
        <template slot-scope="scope">
          <el-button type="text" style="padding:0;" @click="edit(scope.row)">编辑</el-button>
          <el-button type="text" style="padding:0" @click="cancelRow(scope.row)">取消</el-button>
          <el-button type="text" style="padding:0" @click="deleteRow(scope.row)">删除</el-button>
          <el-button type="text" style="padding:0" @click="submitRow(scope.row)">提交</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination style="margin-top:22px" background layout="prev, pager, next" 
      :total="page.total"
      :page-size="page.size" 
      :pager-count="page.pager" 
      @current-change="handleCurrentChange">
    </el-pagination>
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

  .el-button+.el-button{
    margin-left: 3px;
  }
}
</style>


<script>
import request from "@/utils/request";
export default {
  data() {
    return {
      tableData: [],
      addState: true,
      page:{
        size:10,
        pager:5,
        total:100,
        number:1,
      },
    };
  },
  mounted () {
    this.getTableData();
  },
  methods: {
    getTableData(){
      request
          .post("toolInfo/page",{pageSize:this.page.size,pageNumber:this.page.number})
          .then((res) => {
            const dataInfo = res.dataInfo;
            if (res.returnCode == 200) {
              this.page.total = res.total
              this.tableData = dataInfo
              console.info(dataInfo)
            } else {
              this.$message({ message: "查找刀具失败！", type: "warning" });
            }
          });
    },
    handleCurrentChange(number){
      this.page.number = number
      this.getTableData()
    },
    edit (row) {
      this.addState = false
      
      row.show = false
    },
    cancelRow (row) {
      if(this.addState){
        this.tableData.splice(this.tableData.lastIndexOf(item=>{item.id == row.id}),1)
      }else{
        row.show = true
      }
    },
    deleteRow (row) {
      request
          .post("toolInfo/delete",{id:row.id})
          .then((res) => {
            const dataInfo = res.dataInfo;
            if (res.returnCode == 200) {
              this.getTableData()
            } else {
              this.$message({ message: "删除刀具失败！", type: "warning" });
            }
          });
    },
    submitRow (row) {
      if(!row.show){
        let url = ""
        if(this.addState){
          url = "toolInfo/add"
        }else{
          url = "toolInfo/update"
        }
        request
          .post(url,row)
          .then((res) => {
            const dataInfo = res.dataInfo;
            if (res.returnCode == 200) {
              this.getTableData()
            } else {
              this.$message({ message: "新增刀具失败！", type: "warning" });
            }
          });
      }
    },
    add () {
      this.addState = true
      this.tableData.push({id:"",show:false})
    },
    onCancel () {

    },
  }
};
</script>
