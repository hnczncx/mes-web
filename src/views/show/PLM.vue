<template>
  <div class="PLM-container">
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
    <div class="all-con">
      <!-- 上-零件图纸、视频、BOM属性 -->
      <div class="s-con clearfix">
        <!-- CAD -->
        <div class="s1-con">
          <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
            <div class="head">
              <span>零件图纸</span>
            </div>

            <div class="cadcon">
              <div class="demo-image">
                <div class="block">
                  <el-carousel trigger="click" height="450px">
                    <el-carousel-item v-for="item in plmList" :key="item.id">
                      <el-image :src="item.url" style></el-image>
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </div>
            </div>
          </el-card>
        </div>

        <div class="s2-con">
          <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
            <div class="head">
              <span>视频</span>
            </div>

            <div class="cadcon">
              <div class="demo-image">
                <div class="block">
                  <video id="myVideo" class="video-js vjs-big-play-centered">
                    <!-- <source src="aviUrl" type="video/mp4" > -->
                  </video>
                </div>
              </div>
            </div>
          </el-card>
        </div>

        <div class="s3-con">
          <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
            <div class="head">
              <span>BOM属性</span>
            </div>

            <div class="cadcon1">
              <!-- 模块标签切换 -->
              <div class="select">
                <el-button-group>
                  <el-button type="text" @click="changeCascader('PBOM')"> PBOM </el-button>
                  <el-button type="text" @click="changeCascader('EBOM')"> EBOM </el-button>
                </el-button-group>

                <el-cascader
                  v-model="value"
                  :options="options"
                  @change="handleChange"
                  :props="props"
                ></el-cascader>
              </div>
              <ul id="eqInfolist">
                <li>
                  <span>零件名称</span>
                  <span>{{bom.ljmc}}</span>
                </li>
                <li>
                  <span>零件编号</span>
                  <span>{{bom.csuffix}}</span>
                </li>
                <li>
                  <span>图号</span>
                  <span>{{bom.th}}</span>
                </li>
                <li>
                  <span>尺寸</span>
                  <span>{{bom.cl}}</span>
                </li>
                <li>
                  <span>数量</span>
                  <span>{{bom.cnumber}}</span>
                </li>
                <li>
                  <span>更新时间</span>
                  <span>{{bom.ljmc}}</span>
                </li>
                <li>
                  <span>版本</span>
                  <span>{{bom.criv}}</span>
                </li>
              </ul>
            </div>
          </el-card>
        </div>
      </div>

      <!-- 下-工艺卡、结构规则、任务详情 -->
      <div class="x-con clearfix">
        <!-- 工艺卡 -->
        <div class="x1-con">
          <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
            <div class="head">
              <span>工艺卡</span>
            </div>

            <div class="cadcon1">
              <template>
                <el-table :data="datectionMould" style="width: 100%">
                  <el-table-column prop="name" label="零件名称"></el-table-column>
                  <el-table-column prop="name2" label="材料名称"></el-table-column>
                  <el-table-column prop="index" label="工序号"></el-table-column>
                  <el-table-column prop="name3" label="工序名称"></el-table-column>
                  <el-table-column prop="steps" label="工步"></el-table-column>
                  <el-table-column prop="meth" label="加工方式"></el-table-column>
                </el-table>
              </template>
            </div>
          </el-card>
        </div>

        <div class="x2-con">
          <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
            <div class="head">
              <span>结构规则</span>
            </div>

            <div class="cadcon1">
              <template>
                <el-table :data="checkList" style="width: 100%">
                  <el-table-column prop="name" label="结构名称"></el-table-column>
                  <el-table-column prop="rule" label="齐套规则名称"></el-table-column>
                  <el-table-column prop="isPass" label="是否通过" width="80"></el-table-column>
                </el-table>
              </template>
            </div>
          </el-card>
        </div>

        <div class="x3-con">
          <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
            <div class="head">
              <span>任务详情</span>
            </div>

            <div class="cadcon1">
              <template>
                <el-table :data="taskList" style="width: 100%">
                  <el-table-column prop="name" label="任务名称" width="320"></el-table-column>
                  <el-table-column prop="inStep" label="当前步骤"></el-table-column>
                  <el-table-column prop="state" label="状态"></el-table-column>
                </el-table>
              </template>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* BOM切换样式 */

#eqInfolist {
  width: 466px;
  height: 280px;
  float: left;
  color: white;
  display: block;
  margin: 0;
  padding: 0;
  margin-top: 10px;
  background-color: rgba($color: #84c8f7, $alpha: 0.04);
  border: 1px solid rgba($color: #84c8f7, $alpha: 0.4);
}
#eqInfolist li {
  list-style: none;
  height: 38px;
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
  width: 140px;
}

.PLM-container {
  // 表格工艺卡、结构规则。任务详情
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

  ::v-deep .el-tabs__nav-wrap::after {
    background-color: rgba(0, 0, 0, 0);
  }
  ::v-deep .el-tabs__item {
    color: rgba($color: #88ceff, $alpha: 0.3);
  }
  ::v-deep .el-tabs__item:hover,
  ::v-deep .el-tabs__item.is-active {
    color: rgba($color: #88ceff, $alpha: 1);
  }
  ::v-deep .el-tabs__active-bar {
    background-image: linear-gradient(
      rgba(136, 206, 255, 0),
      rgba(136, 206, 255, 0.3)
    );
    background-color: rgba(0, 0, 0, 0);
    color: rgba(136, 206, 255, 1);
    height: 38px;
  }
  .select{
    display: flex;
    justify-content: space-between;

    .el-button-group button{
      padding: 10px;
    }

    .el-cascader{
      margin-right: 35px;
    }
  }
}

/* 模块背景 */
.s1-con,
.s2-con,
.x1-con,
.x2-con {
  background-image: url("../../assets/show/lr-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  float: left;
}
.s1-con,
.s2-con,
.x1-con,
.x2-con {
  margin-right: 20px;
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
  display: flex;
  justify-content: space-around;
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
.s-con {
  margin-right: 20px;
}

.x-con {
  margin-top: 20px;
}
.s1-con,
.s2-con,
.x1-con,
.x2-con {
  width: 630px;
  height: 460px;
}
.s3-con,
.x3-con {
  background-image: url("../../assets/show/chartsr-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  float: left;
  width: 540px;
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
.PLM-container {
  background-image: url("../../assets/show/grid_bg.png"),
    radial-gradient(#0b3246, #0b1822);
  /* background-repeat: no-repeat; */
  /* background-size: 100% 100%; */
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
      activeIndex1: "2",
      plmList: [],
      taskList: [],
      checkList: [],
      options: [],
      activeName: "first",
      props: {
        value: "id",
        label: "ljmc",
      },
      bom: {
        bomType: "",
        csuffix: "",
        ljmc: "",
        cl: "",
        cnumber: "",
        criv: "",
        th: "",
        tzbl: "",
        xm: "",
        sb: "",
        xmu: "",
      },
      datectionMould: [
        {
          name: "下板",
          name2: "材料材料",
          index: "1",
          name3: "车",
          steps: "2",
          meth: "A",
        },
        {
          name: "下板",
          name2: "材料材料",
          index: "1",
          name3: "车",
          steps: "2",
          meth: "A",
        },
        {
          name: "下板",
          name2: "材料材料",
          index: "1",
          name3: "车",
          steps: "2",
          meth: "A",
        },
        {
          name: "下板",
          name2: "材料材料",
          index: "1",
          name3: "车",
          steps: "2",
          meth: "A",
        },
        {
          name: "下板",
          name2: "材料材料",
          index: "1",
          name3: "车",
          steps: "2",
          meth: "A",
        },
      ],
    };
  },
  mounted() {
    this.getPlmList();
    this.getCheckList();
    this.getTaskList();
    this.getOptions("PBOM");
    this.getAviUrl();
    //this.getDatectionMould();
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    changeCascader(value){
      this.getOptions(value);
    },
    handleChange(value) {
      request
        .post("technology/queryOne/" + value[value.length - 1])
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            this.bom = dataInfo;
          } else {
            this.$message({ message: "CAE图片查找失败！", type: "warning" });
          }
        });
    },
    // 看板 to MES后台-任务管理页
    gotoTask() {
      this.$router.replace("/task/index");
    },
    getPlmList() {
      request
        .post("fileItem/page", {
          pageSize: 10,
          pageNumber: 1,
          filename: "PLM",
          fileType: "jpg",
        })
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            this.plmList = dataInfo;
          } else {
            this.$message({ message: "CAE图片查找失败！", type: "warning" });
          }
        });
    },
    getAviUrl() {
      request
        .post("fileItem/page", {
          pageSize: 1,
          pageNumber: 1,
          filename: "MP4",
          fileType: "mp4",
        })
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            this.aviUrl = dataInfo[0].url;
            this.initVideo();
          } else {
            this.$message({ message: "MP4视频查找失败！", type: "warning" });
          }
        });
    },
    initVideo() {
      //初始化视频方法
      let myPlayer = this.$video(myVideo, {
        //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
        controls: true,
        //自动播放属性,muted:静音播放
        autoplay: "muted",
        //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        preload: "auto",
        //设置视频播放器的显示宽度（以像素为单位）
        width: "610px",
        //设置视频播放器的显示高度（以像素为单位）
        height: "440px",
        sources: [
          {
            type: "video/mp4",
            src: this.aviUrl,
          },
        ],
      });
    },
    getCheckList() {
      request.post("technology/queryCheck").then((res) => {
        const dataInfo = res.dataInfo;
        if (res.returnCode == 200) {
          this.checkList = dataInfo;
        } else {
          this.$message({ message: "结构规则查找失败！", type: "warning" });
        }
      });
    },
    getTaskList() {
      request.post("technology/queryTask").then((res) => {
        const dataInfo = res.dataInfo;
        if (res.returnCode == 200) {
          this.taskList = dataInfo.slice(0, 6);
        } else {
          this.$message({ message: "任务详情查找失败！", type: "warning" });
        }
      });
    },
    getDatectionMould() {
      request.post("fileItem/readList").then((res) => {
        const dataInfo = res.dataInfo;
        if (res.returnCode == 200) {
          if (dataInfo.length > 0) {
            this.tableData = dataInfo;
          }
        } else {
          this.$message({ message: "查找Excel数据失败！", type: "warning" });
        }
      });
    },
    getOptions(type) {
      request.post("technology/queryTree", { type: type }).then((res) => {
        const dataInfo = res.dataInfo;
        console.info(dataInfo);
        if (res.returnCode == 200) {
          if (dataInfo.length > 0) {
            this.options = dataInfo;
          }
        } else {
          this.$message({ message: "查找树结构失败！", type: "warning" });
        }
      });
    },
  },
};
</script>