<template>
  <div class="MES-container">
    <!-- 顶部导航 -->
    <div class="bgContainer">
      <!-- 综合看板logo，点击返回MES后台 -->
      <div class="showLogo" @click="gotoTask">综合看板</div>
      <div class="line"></div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        active-text-color="#88ceff"
        router
      >
        <el-menu-item index="/show/index">首页</el-menu-item>
        <el-menu-item index="/show/CAD">CAD</el-menu-item>
        <el-menu-item index="/show/PLM">PLM</el-menu-item>
        <el-menu-item index="/show/MES">MES</el-menu-item>
        <el-menu-item index="/show/BIM">BIM</el-menu-item>
      </el-menu>
    </div>

    <!-- 内容区 -->
    <div class="all-con clearfix">
      <div class="l-con">
        <!-- 左1 -->
        <div class="l1-con">
          <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
            <div class="head">
              <span>设备状态</span>
            </div>
            <div class="cadcon1">
              <!-- 状态数量统计 -->
              <div class="eq1 clearfix">
                <div class="eq1-1">
                  <span>运行</span>
                  <el-progress :percentage="percentage1" :stroke-width="12"></el-progress>
                </div>

                <div class="eq1-2">
                  <span>空闲</span>
                  <el-progress :percentage="percentage2" :stroke-width="12"></el-progress>
                </div>

                <div class="eq1-3">
                  <span>报警</span>
                  <el-progress :percentage="percentage3" :stroke-width="12"></el-progress>
                </div>

                <div class="eq1-4">
                  <span>
                    <el-image :src="url3" style></el-image>
                  </span>
                  <span>
                    <font>1294</font>
                    <font>机床</font>
                  </span>
                </div>
              </div>

              <!-- 设备图片和信息 -->
              <div class="eq2 clearfix">
                <div class="demo-image">
                  <div class="block">
                    <el-image :src="url" style></el-image>
                  </div>
                </div>

                <ul id="eqInfolist">
                  <li>
                    <span>设备名称</span>
                    <span>2号五轴加工中心</span>
                  </li>
                  <li>
                    <span>设备状态</span>
                    <span>报警</span>
                  </li>
                  <li>
                    <span>网络检测</span>
                    <span>在线</span>
                  </li>
                  <li>
                    <span>程序名称</span>
                    <span>program</span>
                  </li>
                  <li style="height:102px">
                    <span>报警信息</span>
                    <span>这是一段描述...</span>
                  </li>
                </ul>
              </div>
            </div>
          </el-card>
        </div>

        <!-- 左2 -->
        <div class="l2-con">
          <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
            <div class="head">
              <span>设备监控</span>
            </div>
            <div class="cadcon">
              <div class="demo-image">
                <div class="block">
                  <el-image :src="url2" style></el-image>
                </div>
              </div>
            </div>
          </el-card>
        </div>
      </div>

      <!-- 右 -->
      <div class="r-con">
        <!-- 右1 -->
        <div class="r1-con">
          <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
            <div class="head">
              <span>刀具管理</span>
            </div>
            <div class="cadcon1">
              <template>
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column prop="code" label="刀号">
                    <!-- width="60" -->
                  </el-table-column>
                  <el-table-column prop="radius" label="半径(mm)"></el-table-column>
                  <el-table-column prop="length" label="长度(mm)"></el-table-column>
                  <el-table-column prop="radiusSubjoin" label="半径补偿值"></el-table-column>
                  <el-table-column prop="lengthSubjoin" label="长度补偿值"></el-table-column>
                  <el-table-column prop="updateRadiusSubjoin" label="半径补偿修改值"></el-table-column>
                  <el-table-column prop="updateLengthSubjoin" label="长度补偿修改值"></el-table-column>
                </el-table>
              </template>
            </div>
          </el-card>
        </div>

        <!-- 右21 -->
        <div class="r2-con">
          <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
            <div class="head">
              <span>仿真车床</span>
            </div>
            <div class="cadcon">
              <div class="demo-image">
                <div class="block">
                  <el-image :src="url2" style></el-image>
                </div>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.MES-container {
  // 刀具信息表格
  ::v-deep .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: rgba($color: #88ceff, $alpha: 0.1);
  }
  .el-table {
    background-color: rgba(0, 0, 0, 0);
    color: white;
  }
  .el-table::before {
    background-color: rgba(0, 0, 0, 0);
  }
  ::v-deep .el-table thead {
    background-color: rgba($color: #88ceff, $alpha: 0.04);
    border: 1px solid rgba($color: #88ceff, $alpha: 0.2);
  }
  ::v-deep .el-table__body,
  ::v-deep .el-table__header {
    border-collapse: collapse;
  }

  ::v-deep .el-table th {
    background-color: rgba(0, 0, 0, 0);
  }
  ::v-deep .el-table th.is-leaf {
    border: none;
  }
  ::v-deep .el-table tr {
    display: "";
    height: 52px;
    background-color: rgba($color: #88ceff, $alpha: 0.02);
    border: 1px solid rgba($color: #88ceff, $alpha: 0.2);
  }
  ::v-deep .el-table td {
    border: none;
  }
  // 进度条
  .eq1-4 span:nth-child(1) {
    width: 74px;
    height: 74px;
    display: block;
    float: left;
  }
  .eq1-4 span:nth-child(2) {
    display: block;
    float: left;
    padding-top: 14px;
    padding-left: 10px;
  }
  .eq1-4 span:nth-child(2) font:nth-child(1) {
    font-size: 26px;
    color: #f3fbff;
    display: block;
  }
  .eq1-4 span:nth-child(2) font:nth-child(2) {
    font-size: 13px;
    color: #95a6b1;
    display: block;
  }
  .eq1-1,
  .eq1-2,
  .eq1-3,
  .eq1-4 {
    float: left;
  }
  .eq1-1 span {
    color: #88ff99;
    padding-left: 3px;
  }
  .eq1-2 span {
    color: #e0e7ec;
    padding-left: 3px;
  }
  .eq1-3 span {
    color: #ff8d6f;
    padding-left: 3px;
  }
  .el-progress {
    width: 200px;
    ::v-deep .el-progress-bar__inner {
      height: 6px;
      margin-top: 2px;
      margin-left: 2px;
    }
    ::v-deep .el-progress-bar__outer {
      background-color: rgba(0, 0, 0, 0);
    }
  }
  // 运行
  .eq1-1 {
    ::v-deep .el-progress-bar__inner {
      background-image: linear-gradient(to right, #488552, #88ff99);
    }
    ::v-deep .el-progress-bar__outer {
      border: 1px rgba(136, 255, 153, 0.5) solid;
    }
  }
  // 空闲
  .eq1-2 {
    ::v-deep .el-progress-bar__inner {
      background-image: linear-gradient(to right, #818586, #e0e7ec);
    }
    ::v-deep .el-progress-bar__outer {
      border: 1px rgba(224, 231, 236, 0.5) solid;
    }
  }
  // 报警
  .eq1-3 {
    ::v-deep .el-progress-bar__inner {
      background-image: linear-gradient(to right, #854848, #ff8d6f);
    }
    ::v-deep .el-progress-bar__outer {
      border: 1px rgba(255, 141, 111, 0.5) solid;
    }
  }
  ::v-deep .el-progress__text {
    bottom: 18px;
    position: relative;
    margin-left: -32px;
    font-family: DINPro-Bold;
    font-size: 18px;
    color: white;
  }
}
// 设备图片
.eq2 .demo-image {
  width: 388px;
  height: 320px;
  background-color: rgba($color: #84c8f7, $alpha: 0.04);
  border: 1px solid rgba($color: #84c8f7, $alpha: 0.4);
  padding: 8px;
  float: left;
  margin-right: 14px;
}
#eqInfolist {
  width: 466px;
  height: 320px;
  float: left;
  color: white;
  display: block;
  margin: 0;
  padding: 0;
  background-color: rgba($color: #84c8f7, $alpha: 0.04);
  border: 1px solid rgba($color: #84c8f7, $alpha: 0.4);
}
#eqInfolist li {
  list-style: none;
  height: 54px;
  line-height: 54px;
}
#eqInfolist li span:nth-child(1) {
  background-color: rgba($color: #2f81a1, $alpha: 0.1);
  display: block;
  float: left;
  padding-left: 30px;
  padding-right: 30px;
  margin-right: 20px;
  height: 100%;
}
.eq2 .demo-image .block {
  width: 100%;
  height: 100%;
  background: black;
}
/* 清除浮动 */
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
/* 卡片 */
.head {
  position: absolute;
  z-index: 99;
  padding: 0;
  width: 260px;
  height: 48px;
  line-height: 48px;
  padding-left: 20px;
  margin-top: 1px;
  margin-left: 1px;
}
.head {
  background-image: linear-gradient(
    to right,
    rgba(2, 18, 27, 1),
    rgba(2, 18, 27, 0)
  );
}
.head span {
  font-size: 16px;
  color: white;
  font-weight: bold;
  padding: 0;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  height: 460px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
}

.box-card div {
  border: none;
}
/* 卡片 */
.cadcon {
  padding: 10px;
}
.cadcon1 {
  padding-top: 60px;
  padding-left: 20px;
  padding-right: 20px;
}

.all-con {
  width: 100%;
  height: 100%;
  padding: 30px;
  padding-top: 90px;
}
/* 内容模块背景 lr-bg */
.l-con {
  margin-right: 20px;
}
.l-con,
.r-con {
  float: left;
  position: relative;
  width: calc(50% - 10px);
}
.l2-con,
.r2-con {
  margin-top: 20px;
}
.l1-con,
.l2-con,
.r1-con,
.r2-con {
  background-image: url("../../assets/show/cadBg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  // width: 910px;
  height: 460px;
}

.bgContainer {
  background-image: url("../../assets/show/t-bglong.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 72px;
  position: absolute;
  z-index: 3;
}
.showLogo {
  width: 330px;
  height: 94px;
  line-height: 78px;
  background-image: url("../../assets/show/t-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  float: left;
  margin-right: 40px;
  color: white;
  font-size: 38px;
  font-weight: bold;
  padding-left: 60px;
  user-select: none;
}
.MES-container {
  background-image: url("../../assets/show/grid_bg.png"),
    radial-gradient(#0b3246, #0b1822);
  /* background-repeat: no-repeat; */
  // background-size: 100% 100%;
  min-height: 100%;
  width: 100%;
}

.el-menu {
  background-color: rgba(0, 0, 0, 0);
  border: none;
  float: left;
  width: auto;
}
.el-menu-item {
  height: 72px;
  line-height: 72px;
  color: rgba(136, 206, 255, 0.3);
  font-weight: bold;
  font-size: 18px;
}
.el-menu .el-menu-item:not(.is-disabled):hover {
  background-image: linear-gradient(
    rgba(136, 206, 255, 0),
    rgba(136, 206, 255, 0.3)
  );
  background-color: rgba(0, 0, 0, 0);
  color: rgba(136, 206, 255, 1);
}
</style>

<script>
import request from "@/utils/request";
export default {
  data() {
    return {
      activeIndex: "1",
      url: require("../../assets/show/mes_1.png"),
      url2: require("../../assets/show/mes_2.png"),
      url3: require("../../assets/show/mes_3.png"),
      // 设备状态-进度条
      percentage1: 67,
      percentage2: 46,
      percentage3: 29,
      tableData: [],
    };
  },
  mounted() {
    this.getTableData();
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    // 看板 to MES后台-任务管理页
    gotoTask() {
      this.$router.replace("/task/index");
    },
    getTableData() {
      request
        .post("toolInfo/page", { pageSize: 5, pageNumber: 1 })
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            this.tableData = dataInfo;
          } else {
            this.$message({ message: "查找刀具失败！", type: "warning" });
          }
        });
    },
  },
};
</script>