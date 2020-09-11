
<template>
  <div class="FundMangerDetail">
    <div class="baseBox W100 BGCW MT20">
      <!-- 引用你的组件 -->
      <Accordion class="rightFixed0"
                 :Accordionindex="0"
                 :isSlotSecond="0"
                 :AccordionData="baseInformation">
        <div class="baseInformation"
             slot="First">
             <!-- 放入你要插入到内容 -->
          <baseInformation></baseInformation>
        </div>
      </Accordion>
      <!-- 一个页面中可以i写多个 -->
    </div>
  </div>
</template>
<script>
// import Accordion from "@/view//zhedieceshi";
// import baseInformation from "./Models/baseInformation";
export default {
  components: {
    Accordion,
    baseInformation,
  },
  data() {
    return {
      bodyScroll: "",
      baseInformation: "基本资料",
    };
  },
  mounted(){
  },
  methods: {

    
  }
};
</script>
<style  rel="stylesheet/scss" lang="scss">
</style>

