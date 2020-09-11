<template>
  <div class="app-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <!-- 设备监控 -->
      <el-tab-pane label="设备监控" name="first">

        <!-- 机外监控 -->
        <div class="video-con">
          <div class="d-title">
            <i class="el-icon-picture pnneltitle"></i>
            <label class="tablab">机外监控</label>
          </div>

          <div class="demo-image">
            <div class="demo-image">
              <div class="block">
                <el-image :src="url" style></el-image>
              </div>
            </div>
          </div>
        </div>


        <!-- 登录与设备信息 -->
        <div class="input-con" style="float: right;">
          

          <div class="forminput">
            <el-form ref="form" :model="form" label-width="80px">
             
              <div class="f1">
                 <div class="d-title">
            <label class="tablab">登录与设备信息</label>
          </div>
              <el-form-item label="设备名称">
                <el-input v-model="form.name" placeholder="PBOM"></el-input>
              </el-form-item>

            <el-form-item label="设备状态">
                <el-select v-model="form.region" placeholder="请选择">
                  <el-option label="报警" value="0"></el-option>
                  <el-option label="正常" value="1"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="网络检测">
                <el-select v-model="form.inter" placeholder="请选择">
                  <el-option label="在线" value="0"></el-option>
                  <el-option label="离线" value="1"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="程序名称">
                <el-input v-model="form.cxname" placeholder="PBOM"></el-input>
              </el-form-item>

               <el-form-item label="码流类型">
                <el-select v-model="form.str" placeholder="请选择">
                  <el-option label="Streamacode" value="0"></el-option>
                  <el-option label="Streamacode2222" value="1"></el-option>
                </el-select>
              </el-form-item>
</div>

 <div class="f2">
              <el-form-item label="IP地址">
                <el-input v-model="form.IP" placeholder="192.168.1.1"></el-input>
              </el-form-item>

            <el-form-item label="端口号">
                <el-input v-model="form.dkou" placeholder="100001"></el-input>
              </el-form-item>

             <el-form-item label="用户名">
                <el-input v-model="form.uname" placeholder="admin"></el-input>
              </el-form-item>

              <el-form-item label="密码">
                <el-input v-model="form.cxname" placeholder=""></el-input>
              </el-form-item>

               <el-form-item label="通道列表">
                <el-select v-model="form.str" placeholder="请选择">
                  <el-option label="Streamacode" value="0"></el-option>
                  <el-option label="Streamacode2222" value="1"></el-option>
                </el-select>
              </el-form-item>
</div>
<div class="f3">
<el-button type="primary">登录</el-button>
    
</div>
<div class="f4">
   <div class="d-title">
            <label class="tablab">预览</label>
          </div>
<el-button type="primary" plain>开始预览</el-button><br>
    <el-button type="primary" plain>停止预览</el-button><br>
    <el-button type="primary" plain>抓图JPEG</el-button><br>
    <el-button type="primary" plain>抓图BMP</el-button><br>
</div>

<!-- 操作信息 -->
<div class="f5">
   <div class="d-title">
            <label class="tablab">操作信息</label>
          </div>
<ul class="f5-ul">
  <li class="f5-li">
    <label class="f5-li-time">2020-08-23 12:52:34</label>
    <label class="f5-li-info">设备初始化成功！</label>
  </li>
</ul>

</div>


            </el-form>
          </div>
          
        </div>

      </el-tab-pane>

      <!-- 机床监控 -->
      <el-tab-pane label="机床监控" name="second">机床监控</el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped>
.f5-ul{
  display: block;
  height: 200px;
  border: 1px #E4E7ED solid;
  padding: 10px;
}
.f5-ul,.f5-li{list-style: none;font-size: 14px;}
.f4{
  padding-left: 16px;
padding-right: 16px;
border-left: 1px #E4E7ED solid;
border-right: 1px #E4E7ED solid;
}
.f4 .el-button{margin-bottom: 10px;}
.f1,.f2,.f3,.f4,.f5{float: left;}

.forminput .el-form-item{width: 280px;margin-bottom: 10px;}
.video-con {
  border: #E4E7ED 1px solid;
  border-radius: 10px;
  width: 100%;
  padding: 20px;
  padding-top: 10px;float: left;
}
.input-con{
   border: #E4E7ED 1px solid;
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
  background-color: teal;
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
</style>

<script>
export default {
  data() {
    return {
      activeName: "first",
      //  图片加载

      url: require("../../assets/drawing/d2.jpg"),
      url1: require("../../assets/drawing/d2.jpg"),
      form: {
        name: '',
        region: ''
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>