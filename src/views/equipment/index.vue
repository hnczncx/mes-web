<template>
  <div class="app-container eq-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <!-- 设备监控 -->
      <el-tab-pane label="设备监控" name="first">
        <!-- 设备监控s -->
        <div class="video-con">
          <div class="d-title">
            <i class="el-icon-picture pnneltitle"></i>
            <label class="tablab">设备监控</label>
          </div>

          <div class="demo-image">
            <div class="demo-image">
              <div class="block">
                <el-image :src="url" style></el-image>
              </div>
            </div>
          </div>
        </div>

        <!-- 登录与设备信息   码流类型、通道列表在登录成功后可选 -->

        <div class="forminput clearfix">
          <div class="f1 input-con">
            <div class="d-title">
              <label class="tablab">登录与设备信息</label>
            </div>
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item class="el-f-l" label="IP地址">
                <el-input v-model="form.IP" placeholder="192.168.1.1"></el-input>
              </el-form-item>
              <el-form-item label="用户名">
                <el-input v-model="form.uname" placeholder="admin"></el-input>
              </el-form-item>

              <el-form-item class="el-f-r" label="码流类型">
                <el-select v-model="form.codeType" placeholder="请选择" disabled>
                  <el-option label="Streamacode" value="0"></el-option>
                  <el-option label="Streamacode2222" value="1"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item class="el-f-l" label="端口号">
                <el-input v-model="form.dkou" placeholder="100001"></el-input>
              </el-form-item>

              <el-form-item label="密码">
                <el-input v-model="form.pwd" show-password="true"></el-input>
              </el-form-item>

              <el-form-item class="el-f-r" label="通道列表">
                <el-select v-model="form.str" placeholder="请选择" disabled>
                  <el-option label="Streamacode" value="0"></el-option>
                  <el-option label="Streamacode2222" value="1"></el-option>
                </el-select>
              </el-form-item>

              <el-button type="primary" style="margin-left:80px">登录</el-button>
              
              <!-- 登录状态 -->
              <span><i class="el-icon-circle-check"></i>登录成功</span>
              <span><i class="el-icon-warning-outline"></i>暂未登录</span>

              <el-button class="el-br" type="primary" plain>抓图BMP</el-button>
              <el-button class="el-br" type="primary" plain>抓图JPEG</el-button>
              <el-button class="el-br" type="primary" plain>停止预览</el-button>
              <el-button class="el-br" type="primary" plain>开始预览</el-button>
            </el-form>
          </div>

          <!-- 操作信息 -->
          <div class="f2 input-con" style="margin-right: 20px;">
            <div class="d-title">
              <label class="tablab">操作信息</label>
            </div>
            <ul>
              <li>
                <font>2020-08-23 12:52:34</font>
                设备初始化成功！
              </li>
              <li>
                <font>2020-08-23 12:52:34</font>
                设备初始化成功！设备初始化成功！设备初始化化成功！设备初始化成功！
              </li>
              <li>
                <font>2020-08-23 12:52:34</font>
                设备初始化成功！设备初始化成功！
              </li>
            </ul>
          </div>

          <!-- 事件回调信息 -->
          <div class="f2 input-con">
            <div class="d-title">
              <label class="tablab">事件回调信息</label>
            </div>
            <ul>
              <li>
                <font>2020-08-23 12:52:34</font>
                设备初始化成功！
              </li>
              <li>
                <font>2020-08-23 12:52:34</font>
                设备初始化成功！设备初始化成功！设备初始化化成功！设备初始化成功！
              </li>
              <li>
                <font>2020-08-23 12:52:34</font>
                设备初始化成功！设备初始化成功！
              </li>
            </ul>
          </div>
        </div>
      </el-tab-pane>

      <!-- 机床监控 -->
      <el-tab-pane label="机床监控" name="second">
        <!-- 运行状况 -->
        <div class="video-con">
          <div class="d-title">
            <i class="el-icon-picture pnneltitle"></i>
            <label class="tablab">运行状况</label>
          </div>

          <template>
            <el-table :data="tableData" border style="width: 100%">
              <el-table-column prop="index" width="80"></el-table-column>

              <el-table-column prop="co" label="实际位置" width="180"></el-table-column>

              <el-table-column prop="direct" label="工件指令" width="180"></el-table-column>
              <el-table-column prop="electric" label="负载电流"></el-table-column>
            </el-table>
          </template>

          <div class="clearfix">
            <div class="sleft">
              <el-input v-model="input1" :readonly="true">
                <template slot="prepend">
                  <img src="../../assets/equipment_l1.jpg" />
                </template>
              </el-input>

              <el-input placeholder="0%" v-model="input2" :readonly="true">
                <template slot="prepend">
                  <img src="../../assets/equipment_l2.jpg" />
                </template>
              </el-input>

              <el-input placeholder="0%" v-model="input3" :readonly="true">
                <template slot="prepend">
                  <img src="../../assets/equipment_l3.jpg" />
                </template>
              </el-input>
            </div>

            <div class="sright">
              <el-input placeholder="0%" v-model="input11" :readonly="true">
                <template slot="prepend">F</template>
              </el-input>

              <el-input placeholder="0%" v-model="input12" :readonly="true">
                <template slot="prepend">S</template>
              </el-input>

              <el-input placeholder="0%" v-model="input13" :readonly="true">
                <template slot="prepend">T</template>
              </el-input>

              <el-input placeholder="0%" v-model="input14" :readonly="true">
                <template slot="prepend">N</template>
              </el-input>
            </div>
          </div>
        </div>

        <!-- 当前程序 -->
        <div class="bottomdiv" style="margin-right: 20px;">
          <div class="d-title">
            <label class="tablab">当前程序</label>
          </div>

          <ul>
            <li>这是一段文字描述...</li>
            <li>这是一段文字描述这是一段文字描述</li>
          </ul>
        </div>

        <!-- 报警信息 -->
        <div class="bottomdiv">
          <div class="d-title">
            <label class="tablab">报警信息</label>
          </div>

          <ul>
            <li>
              <font>2020-03-12 18:42:06</font>这是一段文字描述...
            </li>
            <li>
              <font>2020-03-12 18:42:06</font>这是一段文字描述这是一段文字描述
            </li>
          </ul>
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
.eq-container {
  // 设备监控
  .forminput {
    .f2 {
      margin-top: 20px;
      float: left;
    }

    .d-title {
      margin-bottom: 12px;
    }
    .d-title .tablab {
      border-left: #409eff 4px solid;
      line-height: 14px;
      padding-left: 8px;
    }
    .f1 .el-form .el-f-r {
      float: right;
    }
    .el-f-l {
      margin-right: 10px;
    }
    .f2 {
      width: calc(50% - 10px);
    }
    .el-select {
      width: 100%;
    }
    ::v-deep .el-form-item__label {
      font-weight: normal;
    }
    .el-form-item {
      width: calc(33% - 4px);
      margin-bottom: 10px;
      float: left;
    }
    .el-button {
      margin-top: 20px;
    }
    .el-br {
      float: right;
    }
    .f1 {
      width: 100%;
    }
  }

  .f2 ul {
    list-style: none;
    font-size: 14px;
    margin: 0;
    padding: 0;
  }

  .f2 ul li font {
    color: #a1a1a1;
    margin-right: 10px;
  }
  .f2 ul li {
    border: 1px solid #e7e7e7;
    background: #f7f8fa;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #797979;
  }

  // 机床监控
  .bottomdiv {
    border: #e4e7ed 1px solid;
    border-radius: 10px;
    width: calc(50% - 10px);
    padding: 20px;
    padding-top: 10px;
    float: left;
    margin-top: 20px;
  }
  .bottomdiv .d-title .tablab {
    border-left: #409eff 4px solid;
    line-height: 14px;
    padding-left: 8px;
  }
  .bottomdiv .d-title {
    margin-bottom: 12px;
  }
  .bottomdiv ul li {
    border: 1px solid #e7e7e7;
    background: #f7f8fa;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #797979;
  }
  .bottomdiv ul li font {
    color: #a1a1a1;
    margin-right: 10px;
  }
  .bottomdiv ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .sright {
    width: calc(100% - 440px);
    margin-left: 39px;
  }
  .sleft,
  .sright {
    float: left;
  }
  .sleft .el-input,
  .sright .el-input {
    margin-top: 10px;
  }
  .sright .el-input {
    width: calc(50% - 8px);
  }
  .sright .el-input:nth-child(1),
  .sright .el-input:nth-child(3) {
    margin-right: 16px;
  }
  .sleft .el-input {
    width: 400px;
    display: table;
  }
  ::v-deep .el-input.is-disabled .el-input__inner {
    background-color: white;
  }

  .video-con {
    border: #e4e7ed 1px solid;
    border-radius: 10px;
    width: 100%;
    padding: 20px;
    padding-top: 10px;
  }
  .input-con {
    border: #e4e7ed 1px solid;
    border-radius: 10px;
    width: 100%;
    padding: 20px;
    padding-top: 10px;
    margin-top: 12px;
  }
  .d-title {
    margin-bottom: 6px;
  }

  /* pannel标题 */
  .pnneltitle {
    font-size: 14px;
    color: white;
    background-color: #409eff;
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    border-radius: 100px;
    margin-right: 10px;
  }

  .tablab {
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    vertical-align: middle;
  }
}
</style>

<script>
export default {
  data() {
    return {
      activeName: "first",
      //  图片加载

      url: require("../../assets/drawing/d2.jpg"),
      url1: require("../../assets/drawing/d2.jpg"),
      // 登录与设备信息    IP dkou    uname pwd   codeType str 
      form: {
        IP: "",
        dkou: "",
        uname: "",
        pwd: "",
        codeType: "",
        str: "",
      },
      // 机床面板
      tableData: [
        {
          index: "X",
          co: "0.00",
          direct: "0.00",
        },
        {
          index: "Y",
          co: "0.00",
          direct: "0.00",
        },
        {
          index: "Z",
          co: "0.00",
          direct: "0.00",
        },
      ],
      // 运行状况只读输入框
      input1: "0%",
      input2: "0%",
      input3: "0%",

      input11: "0%",
      input12: "0%",
      input13: "0%",
      input14: "0%",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>