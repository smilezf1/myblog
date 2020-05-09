<template>
  <ul class="List">
    <transition-group
      appear
      enter-active-class="animated fadeIn slower"
      leave-active-class="animated fadeOut faster"
    >
      <li v-for="x in  r1.listData" :key="x.id">
        <h3 class="title">
          <span class="navTitle">
            <router-link to="/">个人博客</router-link>
          </span>
          <span @mouseover="cc($event)" @mouseout="dd($event)">
            <router-link class="navDesc" :to="'/Article'.concat(x.id)">{{x.description}}</router-link>
          </span>
          <router-view />
        </h3>
        <div class="info">
          <router-link to="/" class="info-img">
            <img :src="x.img_path" @mouseover="aa($event)" @mouseout="bb($event)" />
          </router-link>
          <p class="text" v-html="x.content"></p>
        </div>
        <div class="author">
          <span class="time">{{x.time}}</span>
          <span class="viewNum">
            浏览(
            <span>{{x.readnum}}</span>)
          </span>
          <span class="read">
            <router-link :to="'/Article'.concat(x.id)">阅读原文>></router-link>
          </span>
        </div>
      </li>
    </transition-group>
  </ul>
</template>
<script>
import $ from "jquery";
export default {
  name: "List",
  inject: ["r1"],
  updated() {
    this.$nextTick(function() {
      $(".List .info .text ul").css({});
      var uls = document.querySelectorAll(".List .info .text ul");
      uls.forEach((v, i) => {
        v.style.cssText =
          "height:72px;overflow:hidden;-webkit-line-clamp:3;display:-webkit-box;-webkit-box-orient:vertical";
      });
    });
  },
  methods: {
    aa(e) {
      e.target.setAttribute("style", "transform:scale(1.1);transition:all 1s");
    },
    bb(e) {
      e.target.setAttribute("style", "transform:scale(1);transition:all 1s");
    },
    cc(e) {
      e.target.setAttribute("style", "text-decoration:underline;");
    },
    dd(e) {
      e.target.setAttribute("style", "text-decoration:none;");
    }
  }
};
</script>
<style scoped>
.List {
  padding-bottom: 30px;
  position: relative;
  z-index: 2;
}
.List li {
  border-bottom: 1px solid #ccc;
  padding: 10px;
}
.List .title {
  margin-bottom: 5px;
}
.List .title .navTitle {
  background: #333;
  color: white;
  font-size: 14px;
  padding: 2px 5px;
  position: relative;
  font-weight: 400;
}
.List .title .navTitle:after {
  content: "";
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-left-color: #333;
  margin: 0px;
  padding: 0px;
  position: absolute;
  top: 6px;
  right: -10px;
}
.List .navDesc {
  font-size: 24px;
  font-weight: 500;
  margin-left: 8px;
}
.List .info {
  margin-top: 20px;
}
.List .info-img {
  border-radius: 5px;
  overflow: hidden;
}
.List .info:after {
  content: "";
  display: block;
  clear: both;
}
.List .info a {
  float: left;
  width: 180px;
}
.List .info a img {
  width: 100%;
  display: block;
  border-radius: 5px;
}
.List .info .text {
  width: 70%;
  height: 72px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  float: right;
  color: #888 !important;
  margin: 10px 0 0 9px;
  font-size: 14px;
  line-height: 24px;
}

.List .author {
  color: #838383;
  font-size: 12px;
  margin-top: 20px;
}
.List .author .time {
  font-size: 12px;
  padding-left: 20px;
  background: url("../img/posttime.gif") no-repeat 0px 2px;
}
.List .author .viewNum {
  padding-left: 30px;
  background: url("../img/newsbg04.png") no-repeat 11px 2px;
}
.List .author .viewNum span {
  color: #333;
}
.List .author .read {
  float: right;
  color: #333;
  font-size: 14px;
}
.List .author .read:hover {
  text-decoration: underline;
}
</style>