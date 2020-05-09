<template>
  <div class="Head">
    <div class="Head-top"></div>
    <div class="Head-content">
      <div class="logo">smile的个人博客</div>
      <div class="clearFloat"></div>
    </div>
    <!-- 路由显示器 -->
    <router-view />
  </div>
</template>
<script>
var ajax;
export default {
  name: "Head",
  data() {
    return {
      navData: []
    };
  },
  methods: {}
};
</script>
<style scoped>
.Head {
  margin-bottom: 10px;
}
.Head-top {
  height: 28px;
  background: url("../img/topbg.jpg") repeat-x;
}
.Head-content {
  width: 1000px;
  margin: 10px auto;
  padding: 20px 10px 10px 10px;
}
.Head-content .logo {
  font-size: 26px;
  color: #333;
  font-family: "微软雅黑", sans-serif;
  font-weight: bold;
  float: left;
}
.Head-content .logo img {
  width: 200px;
}
.Head-content .logo span {
  font-style: initial;
}
.Head-content .motto {
  float: right;
}

.Head-content .login {
  float: right;
}
.Head-content .login button {
  width: 50px;
  height: 28px;
  background: #333;
  color: white;
  border: none;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  outline: none;
}
.Head-content .login button a {
  display: inline-block;
  width: 100%;
  height: 100%;
  line-height: 28px;
}
.clearFloat {
  content: "";
  display: block;
  clear: both;
}
.nav {
  background: url("../img/navbg.png") no-repeat;
}
.nav-content {
  width: 75%;
  height: 64px;
  color: white;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
}
</style>