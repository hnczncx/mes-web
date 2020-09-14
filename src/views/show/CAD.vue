<template>
  <div class="show-container">
    <!-- 顶部导航 -->
    <div class="bgContainer">
      <!-- 综合看板logo，点击返回MES后台 -->
      <div class="showLogo"  @click="gotoTask">综合看板</div>
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
              <span>装配动画</span>
            </div>
            <div class="cadcon">
              <div class="demo-image">
                <div class="block">
                  <el-image :src="url" style></el-image>
                </div>
              </div>
            </div>
          </el-card>
        </div>

        <!-- 左2 -->
        <div class="l2-con">
          <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
            <div class="head">
              <span>装配动画</span>
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
        <div class="r1-con">
          <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
            <div class="head">
              <span>CAE分析</span>
            </div>
            <div class="cadcon">
              <div class="demo-image">
                <div class="block">
                  <el-image :src="url3" style></el-image>
                </div>
              </div>
            </div>
          </el-card>
        </div>

        <!-- 右21 -->
        <div class="r2-con">
          <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
            <div class="cadcon">
              <div class="demo-image">
                <div class="block">
                  <el-image :src="url4" style></el-image>
                </div>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
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
}
.l2-con {
  margin-top: 20px;
}
.l1-con,
.l2-con {
  background-image: url("../../assets/show/cadBg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 910px;
  height: 460px;
}
.r-con {
  background-image: url("../../assets/show/caeBg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  float: left;
  width: 910px;
  height: 940px;
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
.show-container {
 background-image: url("../../assets/show/grid_bg.png"),radial-gradient(#0b3246,#0b1822);
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
export default {
  data() {
    return {
      activeIndex: "1",
      url: require("../../assets/show/装配动画.jpg"),
      url2: require("../../assets/show/PMI标注.jpg"),
      url3: require("../../assets/show/CAE图片1.jpg"),
      url4: require("../../assets/show/CAE图片2.jpg"),
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
     // 看板 to MES后台-任务管理页
    gotoTask(){
      this.$router.replace('/task/index');
    }
  },
};
</script>