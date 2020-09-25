<template>
  <div class="app-container BOM-container">
    <!-- 标签页 -->
    <el-tabs v-model="defaultTabs" @tab-click="handleClick">
      <el-tab-pane label="PBOM" name="PBOM"></el-tab-pane>
      <el-tab-pane label="EBOM" name="EBOM"></el-tab-pane>
    </el-tabs>

    <!-- 左-树结构 -->
    <div class="c-left">
      <div class="custom-tree-container">
        <div class="block">
          <!-- <p>使用 render-content</p> -->

          <el-tree
            :data="data"
            label="ljmc"
            :props="defaultProps"
            @node-click="handleNodeClick"
            :render-content="renderContent"
          ></el-tree>
        </div>
      </div>
    </div>
    <!-- 右-BOM信息 -->
    <div class="c-right">
      <div>
        <el-input placeholder="PBOM" v-model="bomType">
          <template slot="prepend">BOM类型</template>
        </el-input>
        <el-input placeholder="PBOM" v-model="csuffix">
          <template slot="prepend">代号后缀</template>
        </el-input>

        <el-input placeholder="连接轴" v-model="ljmc">
          <template slot="prepend">零件名称</template>
        </el-input>

        <el-input placeholder="45#" v-model="cl">
          <template slot="prepend">材质</template>
        </el-input>

        <el-input placeholder="24" v-model="cnumber">
          <template slot="prepend">数量</template>
        </el-input>
        <el-input placeholder="v1001-2" v-model="criv">
          <template slot="prepend">版本号</template>
        </el-input>
        <el-input placeholder="ZN-12-10-49" v-model="th">
          <template slot="prepend">图号</template>
        </el-input>
        <el-input placeholder="2 : 1" v-model="tzbl">
          <template slot="prepend">图纸比例</template>
        </el-input>
        <el-input placeholder="PBOM" v-model="xm">
          <template slot="prepend">设计人</template>
        </el-input>
        <el-input placeholder="车床" v-model="sb">
          <template slot="prepend">设备</template>
        </el-input>
        <el-input placeholder="PBOM" v-model="xmu">
          <template slot="prepend">项目</template>
        </el-input>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
}
.BOM-container {
  // 树结构
  .el-tree {
    font-size: 14px;
  }
  ::v-deep .el-tree-node__content:hover{
    color: #409EFF;
  }
  ::v-deep .el-tree-node__content {
    height: 30px;
    display: block;
    width: 100%;
    line-height: 30px;
  }
  ::v-deep .custom-tree-node span:nth-child(1) {
    font-weight: bold;
  }
  ::v-deep .el-tabs__header {
    margin: 0;
  }
  ::v-deep .c-right .el-input-group__prepend {
    width: 20%;
  }
  // 树结构的icon
  ::v-deep .custom-tree-node .el-button--mini {
    position: relative;
    float: right;
    right: 10px;
    // display: none;
  }
  // 树结构弹窗(以下标签均在script内)
 
.tree-ul{
padding: 0;list-style: none;
}
  ::v-deep .el-popover {
    min-width: 220px;
  }
}

.c-left,
.c-right {
  float: left;
  padding-bottom: 30px;
}
.c-left {
  width: 30%;
}
.c-right .el-input {
  margin-top: 20px;
}

.c-right {
  width: 70%;
  border-left: #dcdfe6 1px solid;
  padding-left: 20px;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>

<script>
let id = 1000;
import request from "@/utils/request";
export default {
  data() {
    return {
      // 树结构
      eBom:"EBOM",
      pBom:"PBOM",
      data: [ ],
      defaultProps: {
        children: "children",
        label: "ljmc",
      },
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
      defaultTabs:"PBOM"
    };
  },
  mounted () {
    this.loadData("PBOM")
  },
  methods: {
    loadData(type){
      request
        .post("technology/queryTree",{type:type})
        .then((res) => {
          const dataInfo = res.dataInfo;
          if (res.returnCode == 200) {
            if(dataInfo.length > 0){
              this.data = dataInfo;
            }
          } else {
            this.$message({ message: "查找树结构失败！", type: "warning" });
          }
        });
    },
    // 标签页
    handleClick(e) {
      this.loadData(e.name)
    },
    handleNodeClick(data) {
      this.bomType = data.bomType
      this.csuffix = data.csuffix
      this.ljmc = data.ljmc
      this.cl = data.cl
      this.cnumber = data.cnumber
      this.criv = data.criv
      this.th = data.th
      this.tzbl = data.tzbl
      this.xm = data.xm
      this.sb = data.sb
      this.xmu = data.xmu
    },

    // 添加一个节点
    append(data) {
      const newChild = { id: id++, label: "testtest", children: [] };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    },

    // 删除一个节点
    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
    },

    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-popover
              placement="right"
              offset="0"
              width="120"
              trigger="click">
              <ul class="tree-ul">
                <li>
                  <el-button type="text">添加子节点</el-button>
                </li>
                <li>
                  <el-button type="text">移动到...</el-button>
                </li>
                <li>
                  <el-button type="text">编辑</el-button>
                </li>
                <li>
                  <el-button type="text">删除</el-button>
                </li>
              </ul>

              <el-button
                size="mini"
                type="text"
                on-click={() => this.append(data)}
                icon="el-icon-more"
                slot="reference"
              ></el-button>
            </el-popover>
          </span>
        </span>
      );
    },
  },
};
</script>

