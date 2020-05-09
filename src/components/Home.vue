<template>
  <div class="Home">
    <Head />
    <Nav />
    <div class="main">
      <div class="main-top"></div>
      <div class="main-container">
        <!-- <Banner :BannerDatas="BannerData"/> -->
        <div class="left">
          <List />
        </div>
        <div class="right">
          <Aside />
        </div>
      </div>
      <div class="main-bottom"></div>
    </div>
    <Footer />
  </div>
</template>  
<script>
import Head from "@/components/Head.vue";
import Banner from "@/components/Banner.vue";
import List from "@/components/List.vue";
import Aside from "@/components/Aside.vue";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import A from "../heart.js";
import Load from "@/components/Load.vue";
//npm安装第三方js动画库 npm install velocity-animate
//导入
import Velocity from "velocity-animate";
var ajax3;
var _this = this;
export default {
  mounted() {},
  name: "Home",
  components: { Head, Banner, List, Aside, Nav, Footer, Load },
  data() {
    return {
      listData: []
    };
  }
};
</script>
<style >
.Home {
  background: url("../img/footside.jpg") center bottom no-repeat;
}
.main {
  width: 1000px;
  margin: 0 auto;
}
.main-top,
.main-bottom {
  width: 1034px;
  height: 14px;
  position: relative;
  left: -12px;
}
.main-top {
  background: url("../img/maintopbg.jpg") no-repeat 0px 0px;
}
.main-bottom {
  background: url("../img/mainendbg.jpg") no-repeat 0px 0px;
}
.main-container {
  width: 1000px;
  min-height: 1400px;
  margin-left: 16px;
  border-left: 1px solid #d2d2d2;
  border-right: 1px solid #d2d2d2;
  padding: 5px;
  margin: auto;
}
.main-container:after {
  content: "";
  display: block;
  clear: both;
}
.main-container .left {
  float: left;
  width: 65%;
  box-sizing: border-box;
}
.main-container .right {
  float: right;
  width: 30%;
  height: 400px;

  box-sizing: border-box;
}
</style>