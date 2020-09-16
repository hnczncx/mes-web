<template>
  <div class="app-container task-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <!-- 任务管理 -->
      <el-tab-pane label="任务管理" name="first">
        <div class="clearfix">
          <!-- 筛选条件-模板选择-code选择 -->
          <div class="seleinput">
            <label class="tablab">任务模板选择：</label>
            <el-input v-model="mouldName" style="margin-right: 30px; width:150px;"> </el-input>

            <label class="tablab">执行编码选择：</label>
            <el-select v-model="actionCode" filterable placeholder="全部" style="margin-right: 10px;" @change="actionCodeChange">
              <el-option
                v-for="item in actionCodes"
                :key="item.id"
                :label="item.actionCode"
                :value="item.id"
              ></el-option>
            </el-select>
            <el-button type="primary" plain style="margin-right: 30px;">筛选</el-button>
          </div>

          <el-radio-group v-model="radio1" style="margin-bottom: 30px;">
            <el-radio-button label="全部"></el-radio-button>
            <el-radio-button label="已启动"></el-radio-button>
            <el-radio-button label="已完成"></el-radio-button>
          </el-radio-group>

          <el-input
            class="inputsearch"
            style="width:280px;float: right;"
            v-model="inputserch"
            placeholder="请输入内容"
            suffix-icon="el-icon-search"
          ></el-input>
        </div>
        <div class="taskshow">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item v-for="action in actionList" :key="action.detail_id">
              <!-- 总任务 -->
              <template slot="title">
                <label class="taskhead">TASK</label>
                <label class="title-all">{{action.name}}:{{action.description}}</label>
                <el-progress :percentage="action.progress" :color="customColorMethod"></el-progress>
              </template>
              <!-- 子任务 -->
              <div class="stepaline" v-for="(children,index) in action.children" :key="children.id">
                <div class="task-step">
                  <label class="t-state"> <i class='el-icon-circle-check'></i> {{taskActionState(children.state)}} </label>
                  <label class="title-step">{{index}}.{{children.name}}</label>

                  <div class="btn">
                    <el-button type="text" style="padding:0" @click="taskAction(children.detailId)">启动任务</el-button>

                    <!-- 文件上传 -->
                    <el-button
                      slot="reference"
                      type="text"
                      style="padding:0"
                      @click="showFileDialog(children.detailId)"
                    >文件上传</el-button>
                    <el-dialog title="文件上传" :visible.sync="dialogFormVisible">
                      <el-upload
                        class="upload-demo"
                        drag
                        action="http://127.0.0.1:8081/file/upload"
                        multiple
                        :with-credentials='true'
                        accept="*/*"
                        name="file"
                        ref="upload"
                        :data=uploadData
                      >
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">
                          将文件拖到此处，或
                          <em>点击上传</em>
                        </div>
                        <div class="el-upload__tip">文件格式及大小限制说明</div>
                      </el-upload>

                      <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                      </div>
                    </el-dialog>

                    <el-button type="text" style="padding:0" @click="taskDetailSuccess(children.detailId)">完成任务</el-button>
                    <!-- <el-button type="text" style="padding:0">更新</el-button> -->
                  </div>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-tab-pane>

      <!-- 任务模板 -->
      <el-tab-pane label="任务模板" name="second">
        <!-- 任务模板输入框模块 -->
        <div class="taskinput">
          <div class="t-title">
            <i class="el-icon-picture pnneltitle"></i>
            <label class="tablab">模板</label>
          </div>
          <!-- 弹框编辑任务模板 -->
          <el-button type="primary" class="addBtn" icon="el-icon-plus" @click="dialogtask1 = true"></el-button>

          <el-dialog title="编辑模板信息" :visible.sync="dialogtask1">
            <el-form :model="form">
              <el-form-item label="模板名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogtask1 = false">取 消</el-button>
              <el-button type="primary" @click="submitMould()">确 定</el-button>
            </div>
          </el-dialog>

          <ul>
            <li class="clearfix" v-for="mould in taskMoulds" :key="mould.id" @click="pitchMould(mould.id)" :class="{'pitchOn':formInline.mouldId == mould.id}">
              <span>
                <font>名称：{{mould.name}}</font>
                <font>编码：{{mould.id}}</font>
              </span>
              <span>
                <i class="el-icon-edit-outline elicon"></i>
                <i class="el-icon-position elicon" @click="sendTask(mould.id)"></i>
              </span>
            </li>
          </ul>

          <el-dialog title="下发模板任务" :visible.sync="sendTaskState">
            <el-form :model="sendForm">
              <el-form-item label="执行编码" :label-width="formLabelWidth">
                <el-input v-model="sendForm.actionCode" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="sendTaskState = false">取 消</el-button>
              <el-button type="primary" @click="sendTaskSubmit()">确 定</el-button>
            </div>
          </el-dialog>
        </div>

        <!-- 任务详细展示模块，布局样式同任务管理页基本一致 -->
        <div class="taskshow">
          <div class="t-title">
            <i class="el-icon-picture pnneltitle"></i>
            <label class="tablab">详情</label>
          </div>

          <!-- 弹框编辑任务详情 -->
          <el-button
            class="addBtn"
            type="primary"
            plain
            icon="el-icon-plus"
            @click="dialogtask2 = true;taskSubmitState = true"
          ></el-button>

          <el-dialog title="编辑任务信息" :visible.sync="dialogtask2">
            <el-form :model="formInline">
              <el-form-item label="任务级别" :label-width="formLabelWidth">
                <el-select v-model="formInline.rank" placeholder="请选择">
                  <el-option label="总任务" value="1"></el-option>
                  <el-option label="子任务" value="2"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="父任务" :label-width="formLabelWidth" v-if="formInline.rank == 2">
                <el-select v-model="formInline.parentId" placeholder="请选择">
                  <el-option v-for="task in parents" :key="task.id" :value="task.id" :label="task.name"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="任务类别" :label-width="formLabelWidth">
                <el-select v-model="formInline.type" placeholder="任务类别">
                  <el-option label="CAD" value="1"></el-option>
                  <el-option label="MES" value="2"></el-option>
                  <el-option label="PLM" value="3"></el-option>
                  <el-option label="BIM" value="4"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item class="taskDescribe" label="任务名称" :label-width="formLabelWidth">
                <el-input v-model="formInline.name" placeholder="任务名称" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item class="taskDescribe" label="任务描述" :label-width="formLabelWidth">
                <el-input v-model="formInline.description" placeholder="任务描述" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>

            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogtask2 = false">取 消</el-button>
              <el-button type="primary" @click="taskSubmit()">确 定</el-button>
            </div>
          </el-dialog>

          <div class="t-con"></div>

          <el-collapse v-model="activeNames" @change="handleChange" v-if="taskList.length > 0">
            <el-collapse-item v-for="task in taskList" :key="task.id">
              <!-- 总任务 -->
              <template slot="title">
                <label class="taskhead">TASK</label>
                <label class="title-all">{{task.name}}:{{task.description}}</label>

                <div class="btn0">
                  <el-button type="text" style="padding:0" @click="editTask(task.id)">编辑</el-button>
                  <el-button type="text" style="padding:0" @click="delTask(task.id)">删除</el-button>
                </div>
              </template>

              <!-- 子任务 -->
              <div class="stepaline">
                <div class="task-step" v-for="children in task.children" :key="children.id">
                  <label class="title-step">{{children.name}}</label>
                  <div class="btn">
                    <el-button type="text" style="padding:0"  @click="editTask(children.id)">编辑</el-button>
                    <el-button type="text" style="padding:0" @click="delTask(children.id)">删除</el-button>
                  </div>
                </div>

              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>



<style lang="scss" scoped>
/* 清除浮动 */
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.task-container {
  // 弹框
  ::v-deep .el-dialog {
    width: 40%;
  }
  // 任务模板
  .el-collapse {
    border: none;
    margin-top: 16px;
  }
  .taskshow{
    padding: 15px;
  }

  .taskinput .addBtn,
  .taskshow .addBtn {
    width: 100%;
    height: 48px;
  }
  .taskinput .el-button .el-icon-plus,
  .taskshow .addBtn .el-icon-plus {
    font-size: 18px;
  }
  .taskinput ul li {
    border-radius: 4px;
    box-shadow: 0px 0px 5px #88888870;
    height: 68px;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 10px;
  }
  .taskinput ul li span {
    float: left;
    height: 100%;
    display: block;
  }
  .taskinput ul li span:nth-child(2) {
    float: right;
  }
  .taskinput ul li span font {
    display: block;
    font-size: 14px;
  }
  .taskinput ul li span font:nth-child(1) {
    height: 30px;
    line-height: 30px;
    margin-top: 8px;
  }
  .taskinput ul li span font:nth-child(2) {
    color: #a1a1a1;
  }
  .taskinput ul {
    list-style: none;
    padding: 0;
  }
  .elicon {
    color: #409eff;
    height: 68px;
    line-height: 68px;
    font-size: 18px;
    padding-left: 10px;
  }

  // 顶部筛选
  .seleinput * {
    float: left;
  }

  ::v-deep .el-button + .el-dialog__wrapper + .el-button {
    margin-left: 10px;
  }
  // 文件上传弹框
  ::v-deep .el-upload,
  ::v-deep .el-upload-dragger {
    width: 100%;
  }
  ::v-deep .el-dialog__body {
    padding-top: 0;
  }
  ::v-deep .el-upload-dragger .el-upload__tip {
    line-height: 16px;
    margin-top: 0;
  }

  // 任务管理-头部检索
  .el-radio-group {
    float: left;
  }

  /* 折叠面板 */
  // ::v-deep .el-collapse-item__arrow {
  //   // display: none;
  // }
  ::v-deep .el-collapse-item__header {
    border-bottom: none;
  }
  ::v-deep .title-all + .el-progress,
  .title-step + .btn + .el-progress {
    width: 280px;
    float: right;
    position: relative;
    line-height: 36px;
  }
  ::v-deep .el-collapse-item__header .el-progress {
    position: absolute;
    right: 20%;
  }

  .el-tab-pane:nth-child(1) .task-step label:nth-child(1) {
    color: #d2d2d2;
    margin-right: 20px;
  }
  .el-tab-pane:nth-child(1) .el-collapse-item .task-step .t-state {
    color: #409eff;
  }
}

.el-collapse-item {
  border: none;
}
.stepaline {
  padding-left: 68px;
}
.btn {
  position: relative;
  // right: 40px;
  float: right;
}
.btn0 {
  // right: 20px;
  position: relative;
}
.task-step {
  height: 38px;
  line-height: 38px;
}
.task-step .title-step {
  font-weight: normal;
}
.title-all {
  font-weight: 700;
}
.taskhead {
  width: 48px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  border-radius: 2px;
  color: white;
  background-color: #66b1ff;
  margin-right: 20px;
}
.el-collapse-item .title-all {
  font-size: 14px;
}

.taskDescribe .el-input {
  width: 480px;
  display: block;
}

.t-con .el-form .el-form-item:last-child {
  position: relative;
  top: 40px;
}
.taskBtn .el-button {
  display: block;
}
.t-title {
  margin-bottom: 6px;
}
.tablab {
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  vertical-align: middle;
}
.taskinput {
  width: 360px;
  margin-right: 20px;
}
.el-tab-pane:nth-child(2) .taskshow {
  width: calc(100% - 380px);
}
.taskinput,
.el-tab-pane:nth-child(2) .taskshow {
  float: left;
  border: #e4e7ed 1px solid;
  border-radius: 10px;
  padding: 20px;
  padding-top: 10px;
  height: 100%;
  min-height: 512px;
}

/* pannel标题 */
.pnneltitle {
  font-size: 14px;
  color: white;
  background-color: #66b1ff;
  width: 34px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  border-radius: 100px;
  margin-right: 10px;
}

.el-select {
  display: block;
}

.pitchOn{
  background-color: gray;
}
</style>

<script>
import request from "@/utils/request";
export default {
  data() {
    return {
      // 编辑模板
      dialogtask1: false,
      dialogtask2: false,
      sendTaskState:false,
      taskSubmitState: true,
      sendForm:{
        actionCode:"",
        mouldId:""
      },
      form: {
        name: "",
        code: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "80px",
      radio1: "全部",
      inputserch: "",
      percentage: 59,
      percentage1: 100,
      activeNames: ["1"],
      // 默认选第一个标签页
      activeName: "first",
      // 任务模板
      formInline: {
        id:"",
        mouldId:0,
        parentId:"0",
        type:"1",
        rank:"1",
        name:"",
        description:"",
      },
      // 文件上传
      dialogFormVisible: false,
      taskList: [],
      actionList: [],
      parents:[],
      taskMoulds:[],
      actionCodes:[],
      actionCode:"",
      mouldName:"",
      uploadData:{
        detailId:"",
      }
    };
  },
  mounted() {
    
    this.getMouldList()
    this.getTaskActionCode()
  },
  methods: {
    // 启动任务,将状态改为 进行中
    taskAction (detailId) {
      request
        .post("/taskDetail/update",{id:detailId,state:2})
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            this.getActionList();
          } else {
            this.$message({ message: "启动任务失败！", type: "warning" });
          }
        });
    },
    taskDetailSuccess (detailId) {
      request
        .post("/taskDetail/update",{id:detailId,state:4})
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            this.getActionList();
          } else {
            this.$message({ message: "完成任务失败！", type: "warning" });
          }
        });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 折叠面板
    handleChange(val) {
      console.log(val);
    },
    // 任务进度条
    customColorMethod(percentage) {
      if (percentage < 100) {
        return "#409eff";
      } else {
        return "#67c23a";
      }
    },
    getParents() {
      request
        .post("/taskInfo/queryByRank",{mouldId:this.formInline.mouldId})
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            this.parents = dataInfo;
          } else {
            this.$message({ message: "查询任务失败！", type: "warning" });
          }
        });
    },
    getTaskList() {
      request
        .post("/taskInfo/queryByMouldId/"+this.formInline.mouldId)
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            this.taskList = dataInfo
          } else {
            this.taskList = []
            this.$message({ message: "查询任务失败！", type: "warning" });
          }
        });
    },
    getActionList() {
      request
        .post("/taskInfo/queryByActionId/"+this.actionCode)
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            this.actionList = dataInfo;
          } else {
            this.$message({ message: "查询任务失败！", type: "warning" });
          }
        });
    },
    percentage(num, total) {
      if (total == 0) {
        return 100;
      }
      if (num == 0) {
        return 0;
      }
      return parseInt(num / total);
    },
    async getTaskActionCode() {
      await request
        .post("taskAction/queryActionCode")
        .then((res) => {
          const dataInfo = res.dataInfo;
          console.info(dataInfo)
          if (res.returnCode == 200) {
            if(dataInfo.length > 0){
              this.actionCode = dataInfo[0].id
            }
            this.actionCodes = dataInfo;
            this.getActionList()
          } else {
            this.$message({ message: "查询执行编码失败！", type: "warning" });
          }
        });
    },
    actionCodeChange (value) {
      this.actionCodes.forEach(map=>{
        if(map.id == value){
          this.mouldName = map.name;
        }
      })
      this.getActionList();
    },
    getMouldList() {
      request
        .post("taskMould/page",{pageSize:100,pageNumber:1})
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            this.taskMoulds = dataInfo;
            if(dataInfo.length > 0){
              this.formInline.mouldId = dataInfo[0].id;
            }
            this.getTaskList();
            this.getParents();
          } else {
            this.$message({ message: "查询任务失败！", type: "warning" });
          }
        });
    },
    pitchMould (selectMouldId) {
      this.formInline.mouldId = selectMouldId;
      this.getTaskList();
    },
    submitMould () {
      request
        .post("taskMould/add",{name:this.form.name})
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            this.$message({ message: "提交模板成功", type: "success" });
            this.getMouldList();
            this.dialogtask1 = false; 
          } else {
            this.$message({ message: "提交模板失败", type: "warning" });
          }
        });
    },
    taskSubmit () {
      let url = ""
      if(this.taskSubmitState){
        url = "taskMouldInfo/add";
        this.formInline.id = "";
      }else{
        url = "taskInfo/update";
      }
      request
        .post(url,this.formInline)
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            this.$message({ message: "提交任务成功", type: "success" })
            this.getTaskList()
            this.getParents()
            this.dialogtask2 = false;
            this.formInlineClear()
          } else {
            this.$message({ message: "提交任务失败", type: "warning" })
          }
        });
    },
    formInlineClear(){
      this.formInline.parentId= "0"
      this.formInline.type = "1"
      this.formInline.rank = "1"
      this.formInline.name = ""
      this.formInline.description = ""
    },
    editTask (taskId) {
      this.taskSubmitState = false;
      request
        .post("taskInfo/query",{id:taskId})
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
           
            this.formInline.parentId= dataInfo.parentId+""
            this.formInline.type = dataInfo.type+""
            this.formInline.rank = dataInfo.rank+""
            this.formInline.name = dataInfo.name
            this.formInline.description = dataInfo.description
            this.dialogtask2 = true;
            this.formInline.id = taskId;
          } else {
            this.$message({ message: "提交任务失败", type: "warning" })
          }
        });
    },
    delTask (taskId) {
      request
        .post("taskInfo/delete",{id:taskId})
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            this.$message({ message: "删除任务成功", type: "success" })
            this.getTaskList();
          } else {
            this.$message({ message: "删除任务失败", type: "warning" })
          }
        });
    },
    taskActionState (state) {
      if(state == "1"){
        return " 未开启"
      }
      if(state == "2"){
        return " 进行中"

      }
      if(state == "3"){
        return " 异常"
      }
      if(state == "4"){
        return " 已完成"
      }
      return " 未开启";
    },
    sendTask (mouldId) {
      this.sendForm.mouldId = mouldId;
      this.sendTaskState = true;
    },
    sendTaskSubmit () {
      request
        .post("taskInfo/publishTask",this.sendForm)
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            this.getTaskActionCode();
            this.$message({ message: "任务下发成功，请前往任务管理查看。", type: "success" })
          } else {
            this.$message({ message: "删除任务失败", type: "warning" })
          }
        });
    },
    showFileDialog (detailId) {
      this.dialogFormVisible = true;
      this.uploadData.detailId = detailId;
    }
  },
};
</script>