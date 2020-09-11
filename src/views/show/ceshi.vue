<template>
  <div class="show-container">
<el-menu
    :default-active="this.$route.path"
     class="el-menu-demo"
     mode="horizontal"
     @select="handleSelect"
     router
     background-color="#fff"
     text-color="#333"
     active-text-color="#0084ff"
     >
     <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
          <template slot="title">
             <span> {{ item.navItem }}</span>
          </template>
     </el-menu-item>
</el-menu>
<el-main class="detailed-content">
	<router-view />
</el-main>


  </div>
</template>

<script>

  export default {

    data() {
    return {
        navList:[
             {name:'/show/CAD', navItem:'CAD'},
             {name:'/show/MES',navItem:'MES'},
             {name:'/show/index',navItem:'index'},
        ]
                      
    }
  },
  methods: {
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    
      }
  }
}
</script>

