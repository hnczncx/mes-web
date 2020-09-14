<template>
  <div class="app-container task-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <!-- 任务管理 -->
      <el-tab-pane label="任务管理" name="first">
        <div class="clearfix">
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
                  <label class="t-state">
                    <i class="el-icon-circle-check"></i>已启动
                  </label>
                  <label class="title-step">{{index}}.{{children.name}}</label>

                  <div class="btn">
                    <el-button type="text" style="padding:0" @click="open2">启动任务</el-button>

                    <!-- 文件上传 -->
                    <el-button
                      slot="reference"
                      type="text"
                      style="padding:0"
                      @click="dialogFormVisible = true"
                    >文件上传</el-button>
                    <el-dialog title="文件上传" :visible.sync="dialogFormVisible">
                      <el-upload
                        class="upload-demo"
                        drag
                        action="https://jsonplaceholder.typicode.com/posts/"
                        multiple
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

                    <el-button type="text" style="padding:0">提交</el-button>
                    <el-button type="text" style="padding:0">更新</el-button>
                  </div>
                  <!-- <el-progress
                    :percentage="percentage"
                    :stroke-width="4"
                    :color="customColorMethod"
                  ></el-progress>-->
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
            <label class="tablab">新增任务</label>
          </div>

          <div class="t-con">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item>
                <label class="tablab">任务级别</label>
                <el-select v-model="formInline.tasklevel" placeholder="请选择">
                  <el-option label="总任务" value="11"></el-option>
                  <el-option label="子任务" value="12"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item>
                <label class="tablab">任务类别</label>
                <el-select v-model="formInline.tasktype" placeholder="任务类别">
                  <el-option label="线上任务" value="1"></el-option>
                  <el-option label="线下任务" value="2"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item class="taskDescribe">
                <label class="tablab">任务描述</label>
                <el-input v-model="formInline.describe" placeholder="任务描述"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary">新增</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>

        <!-- 任务详细展示模块，布局样式同任务管理页基本一致 -->
        <div class="taskshow">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item v-for="task in taskList" :key="task.id">
              <!-- 总任务 -->
              <template slot="title">
                <label class="taskhead">TASK</label>
                <label class="title-all">{{task.name}}:{{task.description}}</label>

                <div class="btn0">
                  <el-button type="text" style="padding:0">提交</el-button>
                  <el-button type="text" style="padding:0">编辑</el-button>
                  <el-button type="text" style="padding:0">删除</el-button>
                </div>
              </template>

              <!-- 子任务 -->
              <div class="stepaline">
                <div class="task-step" v-for="children in task.children" :key="children.id">
                  <label class="title-step">{{children.name}}</label>
                  <div class="btn">
                    <el-button type="text" style="padding:0">提交</el-button>
                    <el-button type="text" style="padding:0">编辑</el-button>
                    <el-button type="text" style="padding:0">删除</el-button>
                  </div>
                </div>

                <!-- <div class="task-step">
                  <label class="title-step">2.PMI标注</label>
                  <div class="btn">
                    <el-button type="text" style="padding:0">提交</el-button>
                    <el-button type="text" style="padding:0">编辑</el-button>
                    <el-button type="text" style="padding:0">删除</el-button>
                  </div>
                </div>

                <div class="task-step">
                  <label class="title-step">1.CAPP工艺设计和PLM产品数据管理、生产准备</label>
                  <div class="btn">
                    <el-button type="text" style="padding:0">提交</el-button>
                    <el-button type="text" style="padding:0">编辑</el-button>
                    <el-button type="text" style="padding:0">删除</el-button>
                  </div>
                </div>-->
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

.el-tab-pane:nth-child(2) .taskshow {
  margin-top: 30px;
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
  border: #e4e7ed 1px solid;
  border-radius: 10px;
  height: 160px;
  padding: 20px;
  padding-top: 10px;
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
</style>

<script>
import request from "@/utils/request";
export default {
  data() {
    return {
      radio1: "全部",
      inputserch: "",
      percentage: 59,
      percentage1: 100,
      activeNames: ["1"],
      // 默认选第一个标签页
      activeName: "first",
      // 任务模板
      formInline: {
        tasklevel: "",
        tasktype: "",
        describe: "",
      },
      // 文件上传
      dialogFormVisible: false,
      taskList: [],
      actionList: [],
    };
  },
  mounted() {
    this.getTaskList();
    this.getActionList();
  },
  methods: {
    // 文件上传

    // 启动任务
    open2() {
      this.$message({
        message: "已启动",
        type: "success",
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
    getTaskList() {
      request
        .post("/taskInfo/queryByMouldId/1303934895235362817")
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            this.taskList = dataInfo;
          } else {
            this.$message({ message: "查询任务失败！", type: "warning" });
          }
        });
    },
    getActionList() {
      request
        .post("/taskInfo/queryByActionId/1304259144857899010")
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
  },
};
</script>