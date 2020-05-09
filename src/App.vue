<template>
  <div id="app">
    <div class="snow"></div>
    <router-view />
    <Load v-if="isLoading" />
  </div>
</template>
<script>
import Home from "@/components/Home";
import Load from "@/components/Load";
import Jquery from "jquery";
var _this = this;
export default {
  name: "App",
  data() {
    return {
      isLoading: true
    };
  },
  components: { Home, Load },
  mounted() {
    setTimeout(function() {
      document.body.className += "loaded";
    }, 3000);
    setTimeout(function() {
      _this.isLoading = false;
    }, 4000);
  }
};
</script>
<style>
@import url(assets/animate.css);
#app {
  height: 100%;
  cursor: url("./img/normal.png"), auto;
}
body {
  background: url("./img/bg.jpg") repeat;
}
.snow {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: url("img/snow1.png"), url("img/snow2.png");
  -webkit-animation: snow 15s linear infinite;
  animation: snow 15s linear infinite;
  z-index: -1;
}
@keyframes snow {
  0% {
    background-position: 0 0, 0 0;
  }
  100% {
    background-position: 500px 1000px, 500px 500px;
  }
}
@-webkit-keyframes snow {
  0% {
    background-position: 0 0, 0 0;
  }
  100% {
    background-position: 500px 1000px, 500px 500px;
  }
}
</style>
