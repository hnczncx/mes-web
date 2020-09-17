<template>
  <div class="app-container cxgl-container">
    <!-- 顶部路径配置模块 -->
    <div class="cxglinput">
      <div class="t-title">
        <i class="el-icon-s-promotion pnneltitle"></i>
        <label class="tablab">配置路径</label>
      </div>

      <div class="t-con">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item>
            <label class="tablab">服务器IP</label>
            <el-input v-model="formInline.ip" placeholder="127.0.0.1"></el-input>
          </el-form-item>

          <el-form-item>
            <label class="tablab">下载路径</label>
            <el-input v-model="formInline.url_down" placeholder="共享文件夹"></el-input>
          </el-form-item>

          <el-form-item>
            <label class="tablab">上传路径</label>
            <el-input v-model="formInline.url_up" placeholder="共享文件夹"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary">保存</el-button>
            <el-button type="primary" plain>刷新</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <!-- 内容区 -->
    <div class="cxglcon clearfix">
      <!-- 程序接收 -->
      <div class="cx-s clearfix">
        <el-divider content-position="left">程序接收</el-divider>

        <!-- 按钮组 -->
        <div class="cx-s-d1">
          <ul>
            <li>
              <el-button type="primary">新建接收程序</el-button>
            </li>
            <li>
              <el-button type="danger" plain>删除接收程序</el-button>
            </li>
            <li>
              <el-button type="primary" plain>下载程序文件</el-button>
            </li>
          </ul>
        </div>

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
      <!-- 程序接收-结束 -->


 <!-- 程序提交 -->
      <div class="cx-s clearfix" >
        <el-divider content-position="left">程序提交</el-divider>

        <!-- 按钮组 -->
        <div class="cx-s-d1">
          <ul>
            <li>
              <el-button type="primary">新建提交程序</el-button>
            </li>
            <li>
              <el-button type="danger" plain>删除提交程序</el-button>
            </li>
            <li>
              <el-button type="primary" plain>上传程序至车床</el-button>
            </li>
            <li>
              <el-button type="primary" plain>上传程序至仿真车床</el-button>
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
  
  .cx-s{
    margin-bottom: 20px;
  .el-divider__text{
    font-weight: 700;
    color: #606266;
  }
  }
  ::v-deep .cx-s-d2 .el-table td {
    padding: 5px 0;
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
  padding: 0;margin: 0;
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
.t-con .el-form .el-form-item:last-child {
  position: relative;
  top: 40px;
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


