<template>
  <div id="app">
    
<Header />

    <div :class="['mobile-nav',[mobile_nav?'m-nav-show':'m-nav-hide']]">
      <el-row>
        <el-col :span="12" style="padding-left: 20px">
          <img src="./assets/image/logo2.png">
        </el-col>
        <el-col :span="12" class="text-right" style="padding-right: 20px">
          <i class="el-icon-close" @click="mobileNav" style="color: #FFFFFF;font-size: 30px"></i>
        </el-col>
      </el-row>
    </div>
    <div :class="['main-content',{'pdb0':activeIndex == '/contactUs'}]">
      <router-view :class="[activeIndex == '/contactUs'?'':'content']"></router-view>
    </div>


    
  </div>
</template>

<script>
import Footer from './components/footer/Footer';
import ElCol from "element-ui/packages/col/src/col";
import Header from './components/header/header.vue'

export default {

  components: {
    ElCol,Header, Footer
  },
  data() {
    return {
      
      activeColor:'#409EFF',
      mobile_nav:false
     
    };
  },
  methods: {

    mobileNav(){
      this.mobile_nav = !this.mobile_nav
    }

  },
  created(){
    this.activeIndex =this.$route.path
  },

}










</script>

<style lang="less">
@import "./style/common.less";

</style>
