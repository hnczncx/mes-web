<template>
<div>
  <el-table
    :data="tableData"
    style="width: 100%;margin-bottom: 20px;"
    row-key="id"
    
    default-expand-all
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <el-table-column
      prop="icon"
      
      width="80">
    </el-table-column>
    <el-table-column
      prop="ttype"
      
      width="100">
    </el-table-column>
    <el-table-column
      prop="tdescribe">
    </el-table-column>
    <el-table-column
      prop="operation">
      <el-button type="text" style="padding:0">提交</el-button>
        <el-button type="text" style="padding:0">编辑</el-button>
        <el-button type="text" style="padding:0">删除</el-button>
    </el-table-column>
  </el-table>

  
</div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          id: 1,
          ttype: '线下任务1',
          tdescribe: '零件设计及工艺数据处理',
          children: [{
              id: 31,
               tdescribe: 'BOM信息创建',
            }, {
              id: 32,
               tdescribe: 'CAPP工艺设计和PLM产品数据管理、生产设备',
            }]
        },
        {
          id: 2,
          ttype: '线下任务2',
          tdescribe: '零件设计及工艺数据处理',
          children: [{
              id: 31,
               tdescribe: 'BOM信息创建',
            }, {
              id: 32,
               tdescribe: 'CAPP工艺设计和PLM产品数据管理、生产设备',
            }]
        },
        {
          id: 3,
          ttype: '线下任务3',
          tdescribe: '零件设计及工艺数据处理',
          children: [{
              id: 31,
               tdescribe: 'BOM信息创建',
            }, {
              id: 32,
               tdescribe: 'CAPP工艺设计和PLM产品数据管理、生产设备',
            }]
        },
        {
          id: 4,
          ttype: '线下任务4',
          tdescribe: '零件设计及工艺数据处理',
          children: [{
              id: 31,
               tdescribe: 'BOM信息创建',
            }, {
              id: 32,
               tdescribe: 'CAPP工艺设计和PLM产品数据管理、生产设备',
            }]
        },
        ],
        }
    },
    methods: {
      load(tree, treeNode, resolve) {
        setTimeout(() => {
          resolve([
            {
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }
          ])
        }, 1000)
      }
    },
  }
</script>