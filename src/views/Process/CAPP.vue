<template>
  <div class="app-container CAPP-container">
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

    <el-button type="primary" plain>生产工艺卡</el-button>
<el-button type="primary" plain>查看图纸</el-button>

<!-- 工艺卡展示 -->
<div class="drawing">
<div class="d-title">
<i class="el-icon-picture pnneltitle"></i><label class="tablab">工艺卡</label>
</div>




</div>




  </div>
</template>


<style lang="scss" scoped>
.CAPP-container{
.el-select{
margin-bottom: 10px;

}
.tablab{
  font-size: 14px;
  color: #606266;
    line-height: 40px;vertical-align: middle;
    
}
.drawing{
  border: #E4E7ED 1px solid;
  border-radius: 10px;
  height: 100%;
  min-height: 500px;
  padding: 20px;
  padding-top: 10px;
}


/* pannel标题 */
.pnneltitle{font-size: 14px;color: white;background-color: teal;width: 34px;height: 34px;line-height: 34px;text-align: center;
border-radius: 100px;margin-right: 10px;}
}
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
      
    }
  }
}
</script>

