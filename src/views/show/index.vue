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
    <div class="all-con">

      <!-- 上-CAD、完成率、PLM -->
      <div class="s-con clearfix">
        <!-- CAD -->
        <div class="s1-con">
          <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
            <div class="head">
              <span>CAD</span>
            </div>
            
             <div class="s-contain">
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

 <div class="s2-con">
          <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
            <div class="head">
              <span>完成率</span>
            </div>
            
             <div class="s-contain">
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

         <div class="s3-con">
          <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
            <div class="head">
              <span>PLM</span>
            </div>
            
             <div class="s-contain">
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

       <!-- 下-MES、任务总览、BIM -->
      <div class="x-con clearfix">
        <!-- CAD -->
        <div class="x1-con">
          <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
            <div class="head">
              <span>MES</span>
            </div>
            
             <div class="s-contain">
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

 <div class="x2-con">
          <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
            <div class="head">
              <span>任务总览</span>
            </div>
            
             <div class="s-contain">
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

         <div class="x3-con">
          <el-card class="box-card" shadow="never" :body-style="{ padding: '0px' }">
            <div class="head">
              <span>BIM</span>
            </div>
            
             <div class="s-contain">
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
  </div>
</template>
<style scoped>
/* 完成率 */
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
/* 模块背景 */
.s1-con,
.s3-con,
.x1-con,
.x3-con {
  background-image: url("../../assets/show/lr-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  float: left;
}
.s1-con,.s2-con,.x1-con,.x2-con{margin-right: 20px;}
.s-contain{
  width: 100%;
  height: 100%;
  padding-top: 60px;    padding-left: 20px;
    padding-right: 20px;
}
/* 任务列表样式 */
.c-ul li {
  list-style: none;
  font-size: 16px;
  height: 48px;
  line-height: 48px;
}
.c-ul {
  padding: 0;margin: 0;
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
.s-con {
  margin-right: 20px;
}

.x-con {
  margin-top: 20px;
}
.s1-con,
.s3-con,.x1-con,.x3-con {
  background-image: url("../../assets/show/lr-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 630px;
  height: 460px;
}
.s2-con,.x2-con {
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
  padding-left: 60px;user-select: none;
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