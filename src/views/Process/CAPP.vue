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
        <i class="el-icon-picture pnneltitle"></i>
        <label class="tablab">工艺卡</label>
        <el-table :data="tableData" style="width: 100%" header-align="center" align="center">
          <el-table-column label="数控加工工艺卡" header-align="center">
    
            <el-table-column label="零件名称">
              <el-table-column label="工序" header-align="center" prop="processId"></el-table-column>
              <el-table-column label="安装" header-align="center" prop="install"></el-table-column>
            </el-table-column>
            <el-table-column>
              <template slot="header">
                <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
              </template>
              <el-table-column label="工步" header-align="center" prop="step"></el-table-column>
              <el-table-column label="工序内容" header-align="center" prop="processContent"></el-table-column>
            </el-table-column>
            <el-table-column label="材料">
              <el-table-column label="同时加工零件数" header-align="center" prop="num"></el-table-column>
              <el-table-column label="加工方式" header-align="center" prop="processWay"></el-table-column>
            </el-table-column>
            <el-table-column>
              <template slot="header">
                <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
              </template>
              <el-table-column label="切割用量" >
                <el-table-column label="主轴转速" header-align="center" prop="rotateSpeed"></el-table-column>
                <el-table-column label="进给速度" header-align="center" prop="speed"></el-table-column>
              </el-table-column>
            </el-table-column>
            <el-table-column label="每台件数">
              <el-table-column label="切割用量" >
                <el-table-column label="切割深度" header-align="center" prop="depth"></el-table-column>
                <el-table-column label="加工余量" header-align="center" prop="margin"></el-table-column>
              </el-table-column>
            </el-table-column>
            <el-table-column>
              <template slot="header">
                <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
              </template>
              <el-table-column label="设备及夹具" >
                <el-table-column label="机床名称" header-align="center" prop="machineName"></el-table-column>
              </el-table-column>
            </el-table-column>
            <el-table-column label="每批件数">
              <el-table-column label="设备及夹具" >
                <el-table-column label="夹具名称" header-align="center" prop="fixtureName"></el-table-column>
              </el-table-column>
              <el-table-column label="刀具" >
                <el-table-column label="刀具名称" header-align="center" prop="cutterName"></el-table-column>
              </el-table-column>
            </el-table-column>
            <el-table-column>
              <template slot="header">
                <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
              </template>
              <el-table-column label="刀具" >
                <el-table-column label="刀具直径" header-align="center" prop="cutterDiameter"></el-table-column>
              </el-table-column>
            </el-table-column>
            <el-table-column label="图号">
              <el-table-column label="量具" >
                <el-table-column label="外径" header-align="center" prop="outer"></el-table-column>
                <el-table-column label="内径" header-align="center" prop="interior"></el-table-column>
              </el-table-column>
              
            </el-table-column>
            <el-table-column>
              <template slot="header">
                <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
              </template>
               <el-table-column label="定时工额" header-align="center" prop="manHour"> </el-table-column>
              <el-table-column label="程序名称" header-align="center" prop="procedureName"> </el-table-column>
            </el-table-column>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.CAPP-container {
  .el-select {
    margin-bottom: 10px;
  }
  .tablab {
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    vertical-align: middle;
  }
  .drawing {
    border: #e4e7ed 1px solid;
    border-radius: 10px;
    height: 100%;
    min-height: 500px;
    padding: 20px;
    padding-top: 10px;
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
}
</style>


<script>
import request from "@/utils/request";
export default {
  data() {
    return {
      tableData:[],
      options: [
        {
          label: "部件ZN-02-00-03",
          options: [
            {
              value: "01",
              label: "下板",
            },
            {
              value: "02",
              label: "上板",
            },
          ],
        },
        {
          label: "部件ZN-02-00-03",
          options: [
            {
              value: "11",
              label: "下板",
            },
            {
              value: "12",
              label: "上板",
            },
            {
              value: "13",
              label: "下板11",
            },
            {
              value: "14",
              label: "上板12",
            },
          ],
        },
      ],
      value: "",
    };
  },
  methods : {
    getDatectionMould () {
      request
        .post("fileItem/readList")
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            if(dataInfo.length > 0){
              this.tableData = dataInfo;
            }
          } else {
            this.$message({ message: "完成任务失败！", type: "warning" });
          }
        });
    },
  }
};
</script>

