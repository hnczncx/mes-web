<template>
  <div class="app-container cxgl-container">
    <!-- 内容区 -->

    <!-- 程序下载 -->
    <div class="cx-s clearfix">
      <!-- 按钮组 -->
      <div class="cx-s-d1">
        <el-button type="primary">新建提交程序</el-button>

        <el-button type="danger" plain>删除提交程序</el-button>

        <el-button type="primary" plain>下载程序至车床</el-button>

        <el-button type="primary" plain>下载程序至仿真车床</el-button>
      </div>

      <!-- 表格 -->
      <div class="cx-s-d2">
        <el-table
          ref="multipleTable"
          :data="tableData"
          border
          stripe
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
        <div class="bottomdiv">
          <div class="d-title">
            <label class="tablab">操作记录</label>
          </div>

          <ul>
            <li>
              <font>2020-03-12 18:42:06</font>C:UsersAdministratorDown.xlsx文件提交成功
            </li>
            <li>
              <font>2020-03-12 18:42:06</font>这是一段文字描述...这是一段文字描述这是一段文字描述
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 程序下载-结束 -->
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
  .cx-s {
    .el-divider__text {
      font-weight: 700;
      color: #606266;
    }
  }
  ::v-deep .cx-s-d2 .el-table td {
    padding: 5px 0;
  }
  // 程序接收记录
  .bottomdiv {
    border: #e4e7ed 1px solid;
    border-radius: 10px;

    padding: 20px;
    padding-top: 10px;
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
  width: 60%;
}
.cx-s-d3 {
  width: calc(40% - 20px);
}
// 按钮组
.cx-s-d1 {
  margin-bottom: 20px;
}
.cx-s-d2 {
  margin-right: 20px;
}

.cx-s-d2,
.cx-s-d3 {
  float: left;
}

.tablab {
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  vertical-align: middle;
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


