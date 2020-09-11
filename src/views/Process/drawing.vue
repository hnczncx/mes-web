<template>
  <div class="app-container">
    <!-- 表头操作 -->
    <label class="tablab">工艺清单选择：</label>
    <el-select v-model="value" placeholder="请选择" style="margin-right:10px;">
      <el-option-group v-for="group in options" :key="group.label" :label="group.label">
        <el-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-option-group>
    </el-select>

    <el-button type="primary" plain>2D图纸</el-button>
<el-button type="primary" plain>3D图纸</el-button>

<!-- 图纸展示 -->
<div class="drawing">
<div class="d-title">
<i class="el-icon-picture pnneltitle"></i><label class="tablab">2D图纸</label>
</div>

<div class="demo-image">
  <div class="block">
  
    <el-image
      
      :src="url"
       style="">
      
      </el-image>

    

  </div>
</div>



</div>




  </div>
</template>

<style scoped>
.el-select{
margin-bottom: 10px;

}
.tablab{
  font-size: 14px;
  color: #606266;
    line-height: 40px;vertical-align: middle;
    
}
.drawing{
  border: #C0C4CC 1px solid;
  border-radius: 10px;
  height: 100%;
  min-height: 500px;
  padding: 20px;
  padding-top: 10px;
}
.drawing .el-image
{display: block;}
.d-title{margin-bottom: 6px;}

/* pannel标题 */
.pnneltitle{font-size: 14px;color: white;background-color: teal;width: 34px;height: 34px;line-height: 34px;text-align: center;
border-radius: 100px;margin-right: 10px;}

</style>


<script>
export default {

  data() {
    return {
     options: [
        {
          label: "部件ZN-02-00-03",
          options: [
            {
              value: "01",
              label: "下板"
            },
            {
              value: "02",
              label: "上板"
            }
          ]
        },
        {
          label: "部件ZN-02-00-03",
          options: [
            {
              value: "11",
              label: "下板"
            },
            {
              value: "12",
              label: "上板"
            },
            {
              value: "13",
              label: "下板11"
            },
            {
              value: "14",
              label: "上板12"
            }
          ]
        }
      ],
       value: "",
      //  图片加载
      
       url: require('../../assets/drawing/d2.jpg')
         
    }
  }
}
</script>

