<template>
  <div class="show-container">
    <!-- 顶部导航 -->
    <div class="bgContainer">
      <!-- 综合看板logo，点击返回MES后台 -->
      <div class="showLogo">综合看板</div>
      <div class="line"></div>
     <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        active-text-color="#88ceff" router
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">CAD</el-menu-item>
        <el-menu-item index="3">PLM</el-menu-item>
        <el-menu-item index="4">MES</el-menu-item>
        <el-menu-item index="5">BIM</el-menu-item>
        
      </el-menu>
    </div>

    <!-- 内容区 -->
    <div class="all-con">
      <!-- CAD -->
      <div class="cad-con">
        <el-card class="box-card" shadow="never">
          <div slot="header" class="clearfix">
            <span>CAD</span>
          </div>
          <div class="text item">
            <ul class="c-ul">
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
            </ul>
          </div>
        </el-card>
      </div>

      <div class="charts-con">
        <!-- 完成率 -->
        <el-card class="box-card1" shadow="never">
          <div slot="header" class="clearfix">
            <span>完成率</span>
          </div>
          <div class="text item">
          <ul class="chart-btn">
            <li>CAD</li>
            <li>PLM</li>
            <li>MES</li>
            <li>BIM</li>
          </ul>
          <!-- charts -->
            <div class="chart-d">

            </div>
          </div>
        </el-card>
      </div>
      <div class="plm-con">
        <el-card class="box-card" shadow="never">
          <div slot="header" class="clearfix">
            <span>PLM</span>
          </div>
          <div class="text item">
            <ul class="c-ul">
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
            </ul>
          </div>
        </el-card>
      </div>
      <div class="mes-con">
        <el-card class="box-card" shadow="never">
          <div slot="header" class="clearfix">
            <span>MES</span>
          </div>
          <div class="text item">
            <ul class="c-ul">
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
            </ul>
          </div>
        </el-card>
      </div>
      <div class="charts2-con">
         <el-card class="box-card1" shadow="never">
          <div slot="header" class="clearfix">
            <span>任务总览</span>
          </div>
          <div class="text item">
            <ul class="c-ul">
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
            </ul>
          </div>
        </el-card>
      </div>
      <div class="bim-con">
        <el-card class="box-card" shadow="never">
          <div slot="header" class="clearfix">
            <span>BIM</span>
          </div>
          <div class="text item">
            <ul class="c-ul">
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
              <li>
                <i class="li-i"></i>
                <label class="t-type">线上任务</label>
                <label class="t-describe">设计BOM信息的创建</label>
                <label class="t-state">已完成</label>
              </li>
            </ul>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* 卡片 */
.chart-d,.chart-btn{float: left;}
.chart-d{
  width: 350px;
  height: 350px;
padding: 14px;
background: rgba(136, 206, 255, 0.3);
}
.chart-btn li {
  list-style: none;
  color: rgba(136, 206, 255, 0.3);
  height: 38px;
  line-height: 38px;
  text-align: center;
  font-weight: bold;
  width: 80px;
  display: block;
}
.chart-btn li:not(.is-disabled):hover {
  background-image: linear-gradient(
    rgba(136, 206, 255, 0),
    rgba(136, 206, 255, 0.3)
  );
  color: rgba(136, 206, 255, 1);
}
.t-type {
  color: rgba(136, 206, 255, 0.4);
  float: left;
  margin-right: 14px;
}
.t-describe {
  color: white;
  float: left;
}
.t-state {
  color: #ffd081;
  float: right;
}
.li-i {
  display: block;
  width: 10px;
  height: 48px;
  line-height: 48px;
  background: blue;
  float: left;
  margin-right: 14px;
}
.c-ul li {
  list-style: none;
  font-size: 16px;
  height: 48px;
  line-height: 48px;
}
.c-ul {
  padding: 0;
}
.clearfix span {
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

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card,.box-card1 {
  height: 460px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
}
.box-card {
  width: 630px;
}
.box-card1 {
  width: 540px;
}
.box-card div,.box-card1 div {
  border: none;
}
/* 卡片 */

.all-con {
  width: 100%;
  height: 100%;
  padding: 40px;
}
/* cad、plm、mes、bim背景 lr-bg */
.cad-con,
.plm-con,
.mes-con,
.bim-con {
  background-image: url("../../assets/show/lr-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  float: left;
}
.charts-con,
.charts2-con {
  background-image: url("../../assets/show/chartsr-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  float: left;
}
/* 统计和总览背景 */
.bgContainer {
  background-image: url("../../assets/show/t-bglong.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 72px;
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
}
.show-container {
  background-image: url("../../assets/show/bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  
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
      }
    },
    computed:{
      activeIndex(){
        return this.$route.path.replace('/','')
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(this);
        console.log(key,keyPath);
      }
    }
  }
</script>