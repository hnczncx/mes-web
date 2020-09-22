<template>
  <div class="app-container BOM-container clearfix">
    <!-- 标签页 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="PBOM" name="first" />
      <el-tab-pane label="EBOM" name="second" />
    </el-tabs>

    <!-- 左-树结构 -->

    <div class="c-left">
      <div class="custom-tree-container">
        <div class="block">
          <div class="warpper">
            <el-tree
              :data="TreeData"
              :props="defaultProps"
              :render-content="renderContent"
              @node-click="handleNodeClick"
              ref="tree"
              node-key="id"
              :key="treeKey"
              current-node-key
              highlight-current
              :expand-on-click-node="false"
              default-expand-all
            />
          </div>
        </div>
      </div>
    </div>

    <!-- 右-BOM信息 -->
    <div class="c-right">
      <div>
        <el-input v-model="input1" placeholder="PBOM" :readonly="true">
          <template slot="prepend">BOM类型</template>
        </el-input>
        <el-input v-model="input2" placeholder="PBOM" :readonly="true">
          <template slot="prepend">代号后缀</template>
        </el-input>

        <el-input v-model="input3" placeholder="连接轴" :readonly="true">
          <template slot="prepend">零件名称</template>
        </el-input>

        <el-input v-model="input4" placeholder="45#" :readonly="true">
          <span slot="prepend">材质</span>
        </el-input>

        <el-input v-model="input5" placeholder="24" :readonly="true">
          <template slot="prepend">数量</template>
        </el-input>
        <el-input v-model="input6" placeholder="v1001-2" :readonly="true">
          <template slot="prepend">版本号</template>
        </el-input>
        <el-input v-model="input7" placeholder="ZN-12-10-49" :readonly="true">
          <template slot="prepend">图号</template>
        </el-input>
        <el-input v-model="input8" placeholder="2 : 1" :readonly="true">
          <template slot="prepend">图纸比例</template>
        </el-input>
        <el-input v-model="input9" placeholder="PBOM" :readonly="true">
          <template slot="prepend">设计人</template>
        </el-input>
        <el-input v-model="input10" placeholder="车床" :readonly="true">
          <template slot="prepend">设备</template>
        </el-input>
        <el-input v-model="input11" placeholder="PBOM" :readonly="true">
          <template slot="prepend">项目</template>
        </el-input>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// 局部滚动（树结构+右侧表单）

.c-left,
.c-right {
  overflow-y: hidden;
  height: calc(100vh - 110px);
  padding-bottom: 40px;
}
.c-left:hover,
.c-right:hover {
  overflow-y: auto;
}
.BOM-container {
  padding-bottom: 0;
}
/*定义滚动条高宽及背景高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 2px;
  height: 2px;
  // background-color: #2c3e50;
}
/*定义滑块颜色+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #409eff;
}
/*定义滚动条轨道内阴影+圆角*/
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0);
}

/* 清除浮动 */
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
// 树结构测试-单选高亮
.warpper {
  padding-top: 20px;
}
.warpper
  .el-tree--highlight-current
  ::v-deep
  .el-tree-node.is-checked
  > .el-tree-node__content {
  background-color: rgb(255, 255, 255);
  color: rgb(64, 158, 255);
}
.warpper
  .el-tree--highlight-current
  ::v-deep
  .el-tree-node.is-current
  > .el-tree-node__content {
  background-color: rgb(255, 255, 255);
  color: rgb(64, 158, 255);
}

.BOM-container {
  // 树结构
  .el-tree {
    font-size: 14px;
  }
  ::v-deep .el-tree-node__content:hover {
    color: #409eff;
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
}
.c-left,
.c-right {
  float: left;
  // padding-bottom: 30px;
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
</style>

<script>
let id = 1000;
export default {
  created() {
    this.$nextTick(function () {
      this.$data.TreeData.forEach((row) => {
        if (row.show) {
          this.$refs.tree.setCurrentKey(row.id);
          this.$refs.tree.store.nodesMap[row.id].expanded = true;
        }
      });
    });
  },
  methods: {
    // 树节点鼠标移入显示菜单弹窗
    display: function () {
      this.showicon = true;
    },
    // 标签页
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 树结构单选并高亮-点击事件
    handleNodeClick: function (v, e) {
      // 点击事件
      console.log(v.id);
      console.log(e.parent.data.id);
    },
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate);
    },

    // 添加一个节点
    append(data) {
      const newChild = { id: id++, label: "newTree", children: [] };
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
    //
    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-popover
              placement="right-end"
              offset="0"
              width="120"
              trigger="hover"
              close-delay="100"
            >
              <ul>
                <li>
                  <el-button type="text" on-click={() => this.append(data)}>
                    添加子节点
                  </el-button>
                </li>
                <li>
                  <el-button type="text">移动到...</el-button>
                </li>
                <li>
                  <el-button type="text">编辑</el-button>
                </li>
                <li>
                  <el-button
                    type="text"
                    on-click={() => this.remove(node, data)}
                  >
                    删除
                  </el-button>
                </li>
              </ul>
              <el-button
                size="mini"
                type="text"
                icon="el-icon-more"
                slot="reference"
                v-show="showicon"
              ></el-button>
            </el-popover>
          </span>
        </span>
      );
    },
  },

  data() {
    return {
      // 树结构
      // r_input3: 1,
      ParmentData: null,
      TreeData: [
        {
          id: 1,
          label: "ZN-02-00-01装配",
          children: [
            {
              id: 3,
              label: "ZN-02-00-01连接轴",
              children: [
                {
                  id: 6,
                  label: "零件1",
                  children: [
                    {
                      id: 9,
                      label: "属性表",
                    },
                  ],
                },
              ],
            },
            {
              id: 4,
              label: "ZN-02-00-01上板",
              children: [
                {
                  id: 7,
                  label: "零件1-2",
                  children: [
                    {
                      id: 10,
                      label: "属性表",
                    },
                  ],
                },
              ],
            },
            {
              id: 5,
              label: "ZN-02-00-01下板",
              children: [
                {
                  id: 8,
                  label: "零件1-3",
                  children: [
                    {
                      id: 11,
                      label: "属性表",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "测试删除节点",
        },
        // 以下节点为左侧树结构长度过长时，局部滚动测试
        {
          id: 2,
          label: "局部滚动测试",
          children: [
            {
              id: 3,
              label: "ZN-02-00-01连接轴",
              children: [
                {
                  id: 6,
                  label: "零件1",
                  children: [
                    {
                      id: 9,
                      label: "属性表",
                    },
                  ],
                },
              ],
            },
            {
              id: 4,
              label: "ZN-02-00-01上板",
              children: [
                {
                  id: 7,
                  label: "零件1-2",
                  children: [
                    {
                      id: 10,
                      label: "属性表",
                    },
                  ],
                },
              ],
            },
            {
              id: 5,
              label: "ZN-02-00-01下板",
              children: [
                {
                  id: 8,
                  label: "零件1-3",
                  children: [
                    {
                      id: 11,
                      label: "属性表",
                    },
                  ],
                },
              ],
            },
            {
              id: 5,
              label: "ZN-02-00-01下板",
              children: [
                {
                  id: 8,
                  label: "零件1-3",
                  children: [
                    {
                      id: 11,
                      label: "属性表",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },

      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      input7: "",
      input8: "",
      input9: "",
      input10: "",
      input11: "",

      // 标签页
      activeName: "first",
      showicon: false,
    };
  },
};
</script>
<style>
/* // 树结构弹窗(以下标签均在script内) */

/* .custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
} */
/* hover */

.el-popover {
  min-width: 120px;
  margin-top: -15px;
}
ul {
  list-style: none;
  padding-left: 10px;
  margin: 0;
}
.el-button--text span {
  color: #606266;
}
.el-button--text span:hover {
  color: #409eff;
}
</style>

