<template>
  <div class="app-container">
    <div class="formtab">
      <el-divider content-position="left">质量模型表</el-divider>

      <!-- 表头操作 -->
      <label class="tablab">零件名称：</label>
      <el-select v-model="workpieceId"  
        @change="workpieceChange"
        placeholder="请选择"
        style="margin-right:40px;">
        <el-option v-for="item in workpiece" :key="item.id" :label="item.name" :value="item.id"
        ></el-option>
      </el-select>

      <label class="tablab">模板名称：</label>
      <el-select v-model="mouldId" placeholder="请选择" @change="mouldChange">
        <el-option
          v-for="item in mouldList"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        ></el-option>
      </el-select>

      <el-button type="danger" plain style="margin-left:10px;margin-right:40px;" @click="datectionMouldDel()">删除模板</el-button>
      <label class="tablab">新增模板：</label>
      <el-input v-model="newMouldName" placeholder="请输入内容" style="width:200px"></el-input>
      <el-button type="primary" style="margin-left:10px;" @click="datectionMouldAdd()">保存模板</el-button>
      <el-button type="primary" style="margin-left:10px;" @click="detactionAdd()">新增项目</el-button>

      <el-table :data="detactionList" stripe border style="width: 100%">
        <el-table-column prop="code" label="检验项编号"></el-table-column>
        <el-table-column prop="name" label="检验项名称"></el-table-column>
        <el-table-column prop="unit" label="单位"></el-table-column>
        <el-table-column prop="standard" label="标准值"></el-table-column>
        <el-table-column prop="min" label="上差值"></el-table-column>
        <el-table-column prop="max" label="下差值"></el-table-column>
        <el-table-column prop="operation" label="操作">
          <template slot-scope="scope">
            <el-button type="text" style="padding:0" @click="edit(scope.row.id)">编辑</el-button>
            <el-button type="text" style="padding:0" @click="del(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination style="margin-top:22px" background layout="prev, pager, next" 
        :total="detactionPage.total"
        :page-size="detactionPage.size" 
        :pager-count="detactionPage.pager" 
        @current-change="handleCurrentChange">
      ></el-pagination>
    </div>
    <!-- 质量跟踪表 -->
    <div class="formtab" style="margin-top:60px;">
      <el-divider content-position="left">质量跟踪表</el-divider>
      <!-- 表头操作 -->
      <label class="tablab">零件名称：</label>
      <el-select v-model="workpieceId" placeholder="请选择" style="margin-right:40px;">
        <el-option v-for="item in workpiece" :key="item.id" :label="item.name" :value="item.id" ></el-option>
      </el-select>

      <el-table :data="tableData" stripe border style="width: 100%">
        <el-table-column prop="code" label="检验项编号"></el-table-column>
        <el-table-column prop="name" label="检验项名称"></el-table-column>
        <el-table-column prop="unit" label="单位"></el-table-column>
        <el-table-column prop="standard" label="标准值"></el-table-column>
        <el-table-column prop="min" label="上差值"></el-table-column>
        <el-table-column prop="max" label="下差值"></el-table-column>
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

    <el-dialog title="编辑质量项目" :visible.sync="editInfo">
      <el-form ref="form" :model="form" label-width="90px">
        <el-form-item label="项目编码">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="项目名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="标准值">
          <el-input v-model="form.standard"></el-input>
        </el-form-item>
        <el-form-item label="最小值">
          <el-input v-model="form.min"></el-input>
        </el-form-item>
        <el-form-item label="最大值">
          <el-input v-model="form.max"></el-input>
        </el-form-item>
        <el-form-item label="值单位">
          <el-input v-model="form.unit"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editInfo = false">取 消</el-button>
        <el-button type="primary" @click="detactionSubmit()">确 定</el-button>
      </div>
    </el-dialog>
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
import request from "@/utils/request";
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
      submitType:true,
      editInfo:false,
      form:{
        id:"",
        code:"",
        name:"",
        standard:"",
        min:"",
        max:"",
        unit:"",
      },
      detactionPage:{
        size:5,
        pager:5,
        total:100,
        number:1,
      },
      newMouldName:"",
      mouldId: "",
      mouldList: [ ],
      workpieceId: "",
      workpiece: [ ],
      detactionList:[ ]
    };
  },
  mounted () {
    this.getDatectionMould();
    this.getWorkpieceList();
  },
  methods: {
    getDatectionMould () {
      request
        .post("detectionMould/page",{pageSize:100,pageNumber:1})
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            if(dataInfo.length > 0){
              this.mouldList = dataInfo;
              this.mouldId = dataInfo[0].id
              this.getDetactionList()
            }
          } else {
            this.$message({ message: "完成任务失败！", type: "warning" });
          }
        });
    },
    mouldChange (value) {
      this.workpieceId = "";
    },
    datectionMouldAdd () {
      request
        .post("detectionMould/add",{name:this.newMouldName})
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            this.getDatectionMould();
            this.newMouldName = "";
          } else {
            this.$message({ message: "删除模板失败！", type: "warning" });
          }
        });
    },
    datectionMouldDel () {
      request
        .post("detectionMould/delete",{id:this.mouldId})
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            this.getDatectionMould()
          } else {
            this.$message({ message: "新增模板失败！", type: "warning" });
          }
        });
    },
    getWorkpieceList () {
      request
        .post("workpiece/pageQuery",{pageSize:100,pageNumber:1})
        .then((res) => {
          const dataInfo = res.dataInfo;
          console.info(dataInfo)
          if (res.returnCode == 200) {
            if(dataInfo.length > 0){
              this.workpiece = dataInfo;
            }
          } else {
            this.$message({ message: "完成任务失败！", type: "warning" });
          }
        });
    },
    workpieceChange (value) {
      request
        .post("workpiece/query",{id:value})
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            this.mouldId = dataInfo.datectionMouldId;
          } else {
            this.$message({ message: "查找工件失败！", type: "warning" });
          }
        });
    },
    detactionAdd () {
      this.submitType = true
      this.editInfo = true
      this.formInit()
    },
    getDetactionList () {
      let param = {
        pageSize:this.detactionPage.size,
        pageNumber:this.detactionPage.number,
        mouldId:this.mouldId
      }
      request
        .post("detection/queryPage",param)
        .then((res) => {
          const dataInfo = res.dataInfo;
          this.detactionPage.total = res.total
          if (res.returnCode == 200) {
            this.detactionList = dataInfo;
          } else {
            this.$message({ message: "查找失败！", type: "warning" });
          }
        });
    },
    handleCurrentChange (number) {
      this.detactionPage.number = number;
      this.getDetactionList();
    },
    detactionSubmit () {
      let url = ""
      if(this.submitType){
         url = "detection/add"
         this.form.mouldId = this.mouldId;
      }else{
        url = "detection/update"
      }
      request
        .post(url,this.form)
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            this.getDetactionList();
            this.editInfo = false
            this.formInit()
          } else {
            this.$message({ message: "提交项目失败！", type: "warning" });
          }
        });
    },
    formInit(){
      this.form.id = ""
      this.form.code=""
      this.form.name=""
      this.form.standard=""
      this.form.min=""
      this.form.max=""
      this.form.unit=""
    },
    edit (id) {
      this.submitType = false
      request
        .post("detection/query",{id:id})
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            this.form.id = id
            this.form = dataInfo
            this.editInfo = true
          } else {
            this.$message({ message: "查找项目失败！", type: "warning" });
          }
        });
    },
    del (id) {
      request
        .post("detection/delete",{id:id})
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            this.getDetactionList();
          } else {
            this.$message({ message: "删除项目失败！", type: "warning" });
          }
        });
    },
  }
};
</script>
