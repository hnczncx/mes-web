<template>
  <div class="app-container cxgl-container">
    <!-- 顶部路径配置模块 -->
    <div class="cxglinput">
      <div class="t-title">
        <i class="el-icon-s-promotion pnneltitle"></i>
        <label class="tablab">建立连接</label>
      </div>

      <div class="t-con">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <div class="dleft">
            <el-form-item>
              <el-input v-model="formInline.ip" placeholder="127.0.0.1">
                <template slot="prepend">IP</template>
              </el-input>
            </el-form-item>

            <el-form-item>
              <el-input v-model="formInline.dkou" placeholder="9810">
                <template slot="prepend">端口</template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">建立连接</el-button>
            </el-form-item>
            <br />
            <el-form-item>
              <el-input v-model="formInline.name" placeholder="admin">
                <template slot="prepend">用户名</template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="formInline.pwd" placeholder="请输入密码" :show-password="true">
                <template slot="prepend">密码</template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" plain style="width:98px">刷新</el-button>
            </el-form-item>
          </div>
          <div class="dright">
            <el-form-item>
              <el-input v-model="formInline.url_down" placeholder="共享文件夹">
                <template slot="prepend">下载目录</template>
              </el-input>
            </el-form-item>
            <br />
            <el-form-item>
              <el-input v-model="formInline.url_up" placeholder="共享文件夹">
                <template slot="prepend">上传目录</template>
              </el-input>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>

    <!-- 内容区 -->
    <div class="cxglcon clearfix">
      <!-- 程序接收 -->
      <div class="cx-s clearfix">
        <el-divider content-position="left">文件接收</el-divider>

        <!-- 文件穿梭框 -->
        <div>
          <div class="cx-s-d1"></div>

          <!-- 接收表格 -->
          <div class="cx-s-d2">
            <el-table
              ref="multipleTable"
              :data="tableData"
              border
              stripe
              height="258"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection" width="60"></el-table-column>
              <el-table-column label="程序文件路径" show-overflow-tooltip>
                <template slot-scope="scope">{{ scope.row.fileUrl }}</template>
              </el-table-column>

              <el-table-column label="加载时间" width="220">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
            </el-table>
          </div>
        </div>

        <div>
          <!-- 配置本地路径-接收记录 -->
          <div class="cx-s-d3">
            <el-input placeholder="C:UsersAdministratorDownloads" v-model="input2">
              <template slot="prepend">本地接收路径</template>
              <template slot="append">
                <el-button type="text" icon="el-icon-folder-opened"></el-button>
              </template>
            </el-input>

            <!-- 接收记录 -->
            <div class="d3-log">
              <div class="d3title">
                <label class="tablab">接收记录</label>
              </div>
              <ul class="d3-ul">
                <li class="d3-li">
                  <label class="d3-li-time">2020-08-23 12:52:34</label>
                  <label class="d3-li-info">这是一个程序名称</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 接收-结束 -->

      <!-- 文件提交 -->
      <div class="cx-s clearfix">
        <el-divider content-position="left">文件提交</el-divider>

        <!-- 按钮组 -->
        <div class="cx-s-d1">
          <ul>
            <li>
              <el-button type="primary">新建文件</el-button>
            </li>
            <li>
              <el-button type="danger" plain>删除文件</el-button>
            </li>
            <li>
              <el-button type="primary" plain>上传文件</el-button>
            </li>
          </ul>
        </div>

        <!-- 提交表格 -->
        <div class="cx-s-d2">
          <el-table
            ref="multipleTable"
            :data="tableData"
            border
            stripe
            height="258"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="60"></el-table-column>
            <el-table-column label="程序文件路径" show-overflow-tooltip>
              <template slot-scope="scope">{{ scope.row.fileUrl }}</template>
            </el-table-column>

            <el-table-column label="加载时间" width="220">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
          </el-table>
        </div>

        <div class="cx-s-d3">
          <!-- 提交记录 -->
          <div class="d3-log">
            <div class="d3title">
              <label class="tablab">接收记录</label>
            </div>
            <ul class="d3-ul">
              <li class="d3-li">
                <label class="d3-li-time">2020-08-23 12:52:34</label>
                <label class="d3-li-info">这是一个程序名称</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 程序提交-结束 -->
    </div>
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
.cxgl-container {
  .cxglcon {
    margin-top: 40px;
  }

  .cx-s {
    margin-bottom: 20px;
    .el-divider__text {
      font-weight: 700;
      color: #606266;
    }
  }
  ::v-deep .cx-s-d2 .el-table td {
    padding: 5px 0;
  }
  ::v-deep .el-form-item {
    margin-bottom: 10px;
  }
  .dright {
    float: right;
    width: calc(100% - 628px);
    ::v-deep .el-form-item {
      width: 100%;
      .el-form-item__content {
        width: 100%;
        .el-input {
          width: 100%;
        }
      }
    }
  }
  // 程序接收记录
  .d3-log {
    margin-top: 14px;
  }
  .d3-log .d3title .tablab {
    line-height: 24px;
  }
  .d3-ul {
    display: block;
    height: 180px;
    border: 1px #e4e7ed solid;
    padding: 10px;
    margin: 0;
  }
  .d3-ul,
  .d3-li {
    list-style: none;
    font-size: 14px;
  }
  .dleft {
    float: left;
    ::v-deep .el-input-group {
      width: 240px;
    }
  }

  ::v-deep .el-input-group .el-input-group__append {
    padding: 0;
  }
  ::v-deep .el-input-group__append .el-button {
    margin: 0;
    padding-left: 12px;
    padding-right: 12px;
  }
}
// 表格
.cx-s-d2 {
  width: 50%;
}
.cx-s-d3 {
  width: calc(50% - 208px);
}
// 按钮组
.cx-s-d1,
.cx-s-d2 {
  margin-right: 20px;
}
.cx-s-d1,
.cx-s-d2,
.cx-s-d3 {
  float: left;
}
.cx-s-d1 ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.cx-s-d1 ul li .el-button {
  width: 168px;
  margin-bottom: 10px;
}
.tablab {
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  vertical-align: middle;
}
.t-title {
  margin-bottom: 6px;
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

.cxglinput {
  border: #e4e7ed 1px solid;
  border-radius: 10px;
  height: 160px;
  padding: 20px;
  padding-top: 10px;
}
</style>



<script>
export default {
  data() {
    return {
      // 配置路径
      formInline: {
        ip: "",
        url_down: "",
        url_up: "",
      },
      // 接收表格
      tableData: [
        {
          fileUrl:
            "C:UsersAdministratorDownloadsdfaaa1221\vaaafpraoaslzgoskkcv23vdssaaar",
          date: "2020-07-16 12:39:10",
        },
        {
          fileUrl: "C:UsersAdministratorDownloads",
          date: "2020-07-16 12:39:10",
        },
        {
          fileUrl: "C:UsersAdministratorDownloads",
          date: "2020-07-16 12:39:10",
        },
        {
          fileUrl: "C:UsersAdministratorDownloads",
          date: "2020-07-16 12:39:10",
        },
        {
          fileUrl: "C:UsersAdministratorDownloads",
          date: "2020-07-16 12:39:10",
        },
        {
          fileUrl: "C:UsersAdministratorDownloads",
          date: "2020-07-16 12:39:10",
        },
        {
          fileUrl: "C:UsersAdministratorDownloads",
          date: "2020-07-16 12:39:10",
        },
      ],
      multipleSelection: [],
    };
  },

  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>


