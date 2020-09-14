<template>
  <div class="app-container task-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <!-- 任务管理 -->
      <el-tab-pane label="任务管理" name="first">
        <div class="clearfix">
          <!-- 筛选条件-模板选择-code选择 -->
          <div class="seleinput">
            <label class="tablab">任务模板选择：</label>
            <el-select v-model="value" placeholder="全部" style="margin-right: 30px;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>

            <label class="tablab">执行编码选择：</label>
            <el-select v-model="value2" placeholder="全部" style="margin-right: 10px;">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
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
            <el-collapse-item>
              <!-- 总任务 -->
              <template slot="title">
                <label class="taskhead">TASK</label>
                <label class="title-all">线上任务1:零件设计及工艺数据处理</label>

                <el-progress :percentage="percentage" :color="customColorMethod"></el-progress>
              </template>
              <!-- 子任务 -->
              <div class="stepaline">
                <div class="task-step">
                  <label class="t-state">
                    <i class="el-icon-circle-check"></i>已启动
                  </label>
                  <label class="title-step">1.BOM信息创建</label>

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
                  <el-progress
                    :percentage="percentage"
                    :stroke-width="4"
                    :color="customColorMethod"
                  ></el-progress>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>

          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item>
              <!-- 总任务 -->
              <template slot="title">
                <label class="taskhead">TASK</label>
                <label class="title-all">线上任务1:零件设计及工艺数据处理</label>

                <el-progress :percentage="percentage" :color="customColorMethod"></el-progress>
              </template>
              <!-- 子任务 -->
              <div class="stepaline">
                <div class="task-step">
                  <label class>
                    <i class="el-icon-circle-check"></i>未启动
                  </label>
                  <label class="title-step">1.BOM信息创建</label>

                  <div class="btn">
                    <el-button type="text" style="padding:0">启动任务</el-button>
                    <el-button type="text" style="padding:0">文件上传</el-button>
                    <el-button type="text" style="padding:0">提交</el-button>
                    <el-button type="text" style="padding:0">更新</el-button>
                  </div>
                  <el-progress
                    :percentage="percentage1"
                    :stroke-width="4"
                    :color="customColorMethod"
                  ></el-progress>
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
      <el-form-item label="模板编码" :label-width="formLabelWidth">
      <el-input v-model="form.code" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogtask1 = false">取 消</el-button>
    <el-button type="primary" @click="dialogtask1 = false">确 定</el-button>
  </div>
</el-dialog>




          <ul>
            <li class="clearfix">
              <span>
                <font>名称：任务模板1</font>
                <font>编码：编码1234</font>
              </span>

              <span>
                <i class="el-icon-edit-outline elicon"></i>
                <i class="el-icon-position elicon"></i>
              </span>
            </li>

            <li class="clearfix">
              <span>
                <font>名称：任务模板2</font>
                <font>编码：编码1234</font>
              </span>

              <span>
                <i class="el-icon-edit-outline elicon"></i>
                <i class="el-icon-position elicon"></i>
              </span>
            </li>

          </ul>


        </div>

        <!-- 任务详细展示模块，布局样式同任务管理页基本一致 -->
        <div class="taskshow">
          <div class="t-title">
            <i class="el-icon-picture pnneltitle"></i>
            <label class="tablab">详情</label>
          </div>

<!-- 弹框编辑任务详情 -->
           <el-button class="addBtn" type="primary" plain icon="el-icon-plus" @click="dialogtask2 = true"></el-button>

         
<el-dialog title="编辑任务信息" :visible.sync="dialogtask2">
  

  <el-form :model="formInline">
              <el-form-item label="任务级别" :label-width="formLabelWidth">
                <el-select v-model="formInline.tasklevel" placeholder="请选择">
                  <el-option label="总任务" value="11"></el-option>
                  <el-option label="子任务" value="12"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="任务类别" :label-width="formLabelWidth">
                <el-select v-model="formInline.tasktype" placeholder="任务类别">
                  <el-option label="线上任务" value="1"></el-option>
                  <el-option label="线下任务" value="2"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item class="taskDescribe" label="任务描述" :label-width="formLabelWidth">
                <el-input v-model="formInline.describe" placeholder="任务描述" autocomplete="off"></el-input>
              </el-form-item>

            </el-form>


  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogtask2 = false">取 消</el-button>
    <el-button type="primary" @click="dialogtask2 = false">确 定</el-button>
  </div>
</el-dialog>



 <div class="t-con">
            
          </div>






          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item>
              <!-- 总任务 -->
              <template slot="title">
                <label class="taskhead">TASK</label>
                <label class="title-all">线上任务1:零件设计及工艺数据处理</label>

                <div class="btn0">
                  <el-button type="text" style="padding:0">提交</el-button>
                  <el-button type="text" style="padding:0">编辑</el-button>
                  <el-button type="text" style="padding:0">删除</el-button>
                </div>
              </template>

              <!-- 子任务 -->
              <div class="stepaline">
                <div class="task-step">
                  <label class="title-step">1.BOM信息创建</label>
                  <div class="btn">
                    <el-button type="text" style="padding:0">提交</el-button>
                    <el-button type="text" style="padding:0">编辑</el-button>
                    <el-button type="text" style="padding:0">删除</el-button>
                  </div>
                </div>

                <div class="task-step">
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
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>

          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item>
              <!-- 总任务 -->
              <template slot="title">
                <label class="taskhead">TASK</label>
                <label class="title-all">线上任务1:零件设计及工艺数据处理</label>

                <div class="btn0">
                  <el-button type="text" style="padding:0">提交</el-button>
                  <el-button type="text" style="padding:0">编辑</el-button>
                  <el-button type="text" style="padding:0">删除</el-button>
                </div>
              </template>

              <!-- 子任务 -->
              <div class="stepaline">
                <div class="task-step">
                  <label class="title-step">1.BOM信息创建</label>
                  <div class="btn">
                    <el-button type="text" style="padding:0">提交</el-button>
                    <el-button type="text" style="padding:0">编辑</el-button>
                    <el-button type="text" style="padding:0">删除</el-button>
                  </div>
                </div>

                <div class="task-step">
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
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>

          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item>
              <!-- 总任务 -->
              <template slot="title">
                <label class="taskhead">TASK</label>
                <label class="title-all">线上任务1:零件设计及工艺数据处理</label>

                <div class="btn0">
                  <el-button type="text" style="padding:0">提交</el-button>
                  <el-button type="text" style="padding:0">编辑</el-button>
                  <el-button type="text" style="padding:0">删除</el-button>
                </div>
              </template>

              <!-- 子任务 -->
              <div class="stepaline">
                <div class="task-step">
                  <label class="title-step">1.BOM信息创建</label>
                  <div class="btn">
                    <el-button type="text" style="padding:0">提交</el-button>
                    <el-button type="text" style="padding:0">编辑</el-button>
                    <el-button type="text" style="padding:0">删除</el-button>
                  </div>
                </div>

                <div class="task-step">
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
  ::v-deep .el-dialog{width: 40%;}
  // 任务模板
  .el-collapse{border: none;margin-top: 16px;}
  .taskinput .addBtn,.taskshow .addBtn{width: 100%;height: 48px;}
  .taskinput .el-button .el-icon-plus,.taskshow .addBtn .el-icon-plus{font-size: 18px;}
  .taskinput ul li{
    border-radius: 4px;
    box-shadow: 0px 0px 5px #88888870;
    height: 68px;padding-left: 20px;padding-right: 20px;margin-top: 10px;}
  .taskinput ul li span{float: left;height: 100%;display: block;}
  .taskinput ul li span:nth-child(2){float: right;}
  .taskinput ul li span font{display: block;font-size: 14px;
    }
    .taskinput ul li span font:nth-child(1){
      height: 30px;
    line-height: 30px;
    margin-top: 8px;
}
.taskinput ul li span font:nth-child(2){
  color: #a1a1a1;

    }
  .taskinput ul{list-style: none;padding: 0;}
  .elicon {
    color: #409eff;    height: 68px;
    line-height: 68px;font-size: 18px;    padding-left: 10px;
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
</style>

<script>
export default {
  data() {
    return {
      // 编辑模板
      dialogtask1: false,
      dialogtask2: false,
      form: {
          name: '',
          code: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '80px',

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

      // 任务管理-条件筛选
      options: [
        {
          value: "1",
          label: "全部",
        },
        {
          value: "2",
          label: "模板1",
        },
        {
          value: "3",
          label: "模板12",
        },
      ],
      options2: [
        {
          value: "1",
          label: "全部",
        },
        {
          value: "2",
          label: "编码221",
        },
        {
          value: "3",
          label: "编码011455552",
        },
      ],
      value: "",
      value2: "",
    };
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
  },
};
</script>