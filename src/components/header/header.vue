<template>
  <div class="header">
    <div class="container clearfix">
      <el-row class="PC">
        <el-col :span="3">
          <div class="index-logo">
            <router-link to="/">
              <img src="../../../public/image/pc-logo.png" />
            </router-link>
          </div>
        </el-col>
        <el-col :span="11">
          <el-menu
            :default-active="activeIndex"
            :active-text-color="activeColor"
            :router="true"
            class="el-menu-demo"
            mode="horizontal"
          >
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/solution">解决方案</el-menu-item>
            <el-menu-item index="/product">产品中心</el-menu-item>
            <el-menu-item index="/contactUs">联系我们</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="10">
          <div style="line-height: 80px;" class="text-right">
            <el-button
              round
              :type="button === 'button1' ? 'primary' : ''"
              @click="goLogin('button1')"
              class="btn-box"
              >CMBI 登录</el-button
            >
            <el-button
              round
              :type="button === 'button2' ? 'primary' : ''"
              @click="goLogin('button2')"
              class="btn-box"
              >CPBI 登录</el-button
            >
            <el-button
              round
              :type="button === 'button3' ? 'primary' : ''"
              @click="goLogin('button3')"
              >DataX 登录</el-button
            >
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg Mobile" justify="space-between">
        <el-col :span="8" class="m-box">
          <div class="menu-btn" @click="mobileNav">
            <span></span><span></span><span></span>
          </div>
        </el-col>
        <el-col :span="8" class="m-box m-index-logo" style="padding: 0">
          <router-link to="/">
            <img src="../../assets/image/logo.png" />
          </router-link>
        </el-col>
        <el-col :span="8" class="m-box text-right">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              登录<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                ><a @click="goLogin()">CMBI 登录</a></el-dropdown-item
              >
              <el-dropdown-item
                ><a @click="goLogin()">CPBI 登录</a></el-dropdown-item
              >
              <el-dropdown-item
                ><a @click="goLogin()">DataX 登录</a></el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </div>
    <div :class="['mobile-nav', [mobile_nav ? 'm-nav-show' : 'm-nav-hide']]">
      <el-row>
        <el-col :span="12" style="padding-left: 20px">
          <img src="../../assets/image/logo2.png" />
        </el-col>
        <el-col :span="12" class="text-right" style="padding-right: 20px">
          <i
            class="el-icon-close"
            @click="mobileNav"
            style="color: #FFFFFF;font-size: 30px"
          ></i>
        </el-col>
      </el-row>
      <el-menu
        :default-active="activeIndex"
        :active-text-color="activeColor"
        :router="true"
        class="el-menu-vertical-demo"
        background-color="transparent"
        text-color="#fff"
        style="margin: 20px 0"
      >
        <el-menu-item index="/" class="m-menu-icon icon1" @click="mobileNav">
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item
          index="/solution"
          class="m-menu-icon icon2"
          @click="mobileNav"
        >
          <span slot="title">解决方案</span>
        </el-menu-item>
        <el-menu-item
          index="/product"
          class="m-menu-icon icon3"
          @click="mobileNav"
        >
          <span slot="title">产品中心</span>
        </el-menu-item>
        <el-menu-item
          index="/contactUs"
          class="m-menu-icon icon4"
          @click="mobileNav"
        >
          <span slot="title">联系我们</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {

  data() {
    return {
      activeIndex: '',
      activeColor:'#409EFF',
      mobile_nav:false,
      button:''
    };
  },
  methods: {
    mobileNav(){
      this.mobile_nav = !this.mobile_nav
    },

    getPath(){

      this.activeIndex =this.$route.path

    },
    goLogin(val){

       this.button=val;
    }
  },
  created(){
    this.activeIndex =this.$route.path
  },
  watch: {
    '$route':'getPath'
  },
}
</script>

<style lang="less">
@import "../../style/common.less";
</style>
