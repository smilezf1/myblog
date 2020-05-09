<template>
  <div class="Skill">
    <Head />
    <Nav />
    <div class="roof"></div>
    <div class="main">
      <div class="container">
        <h2 class="top">
          <strong>技术文章</strong>
          <span>您现在的位置：网站首页>>技术文章</span>
        </h2>
        <ul class="box">
          <transition-group
            appear
            enter-active-class="animated fadeIn slower"
            leave-active-class="animated fadeOut faster"
            tag="div"
          >
            <li v-for="k in listData" :key="k.id">
              <div class="box-l">{{k.tag}}</div>
              <div class="box-m">
                <h2 class="t">
                  <router-link :to="'/Article'.concat(k.id)">{{k.description}}</router-link>
                </h2>
                <p class="m" v-html="k.content" style="height:48px;overflow:hidden"></p>
                <div class="b">
                  <span>{{k.source}}</span>
                  <span class="read">已有{{k.readnum}}人阅读</span>
                  <span class="time">{{k.time}}</span>
                </div>
              </div>
              <div class="box-r">
                <router-link to="/">
                  <img :src="k.img_path" @mouseover="aa($event)" @mouseout="bb($event)" />
                </router-link>
              </div>
            </li>
          </transition-group>
        </ul>
      </div>
    </div>
    <div class="base"></div>

    <Footer />
  </div>
</template>
<script>
import Head from "@/components/Head";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export default {
  name: "Skill",
  data(){
    return{
      baseUrl:domain.testUrl
    }
  },
  mounted() {
    var ajax = new XMLHttpRequest(),
         baseUrl=this.baseUrl;
    ajax.open(
      "get",
      ""+baseUrl+"/api/getArticleList2?id=6",
      true
    );
    ajax.send();
    ajax.onreadystatechange = () => {
      if (ajax.readyState == 4 && ajax.status == 200) {
        console.log("请求成功");
        var data = JSON.parse(ajax.responseText);
        this.listData = data;
        console.log(data);
      }
      if (![200, 304].includes(ajax.status)) {
        console.log("请求错误");
      }
    };
  },
  data() {
    return {
      listData: []
    };
  },
  methods: {
    aa(e) {
      e.target.setAttribute("style", "transform:scale(1.1);transition:all 1s");
    },
    bb(e) {
      e.target.setAttribute("style", "transform:scale(1);transition:all 1s");
    }
  },
  components: { Head, Nav, Footer }
};
</script>
<style>
.Skill {
  background: url("../img/footside.jpg") center bottom no-repeat;
}
.Skill .main {
  width: 971px;
  min-height: 700px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  background: rgba(255, 255, 255, 0.3);
  position: relative;
  left: -15px;
}
.Skill .roof {
  width: 1034px;
  height: 14px;
  position: relative;
  left: 225px;
  background: url("../img/maintopbg.jpg");
}
.Skill .main .top {
  border-bottom: 2px solid #333;
  color: #171717;
  height: 31px;
  line-height: 31px;
  font-size: 14px;
}
.Skill .main .top strong {
  float: left;
}
.Skill .main .top span {
  float: right;
  font-size: 12px;
  color: #666;
  font-weight: normal;
}
.Skill .main .box > div {
  margin-top: 7px;
}

.Skill .main .box li {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  border-bottom: 1px solid #838484;
}
.Skill .main .box-l {
  font-size: 40px;
  color: #aeaeae;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.Skill .main .box-m {
  width: 600px;
  margin-left: 90px;
  overflow: hidden;
  padding: 20px 0;
}
.Skill .main .box-m .read,
.Skill .main .box-m .time {
  font-size: 14px;
}
.Skill .main .box-m .t {
  width: 100%;
}
.Skill .main .box-r {
  width: 25%;
}
.Skill .main .box-r a {
  display: inline-block;
  overflow: hidden;
  border-radius: 5px;
}
.Skill .main .box-r img {
  width: 100%;
  border-radius: 2px;
  display: block;
}
.Skill .main .box-m .t {
  background: #333;
  color: #fff;
  font-size: 18px;
  font-weight: normal;
  padding: 5px 10px;
  margin-bottom: 10px;
}
.Skill .main .box-m .m {
  font-size: 14px;
  color: #555;
  margin: 20px 0;
  height: 41px !important;
  overflow: hidden;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.Skill .main .box-m .b span {
  margin-right: 20px;
}
.Skill .main .box-m .b .read,
.Skill .main .box-m .b .time {
  color: #999;
}
.Skill .base {
  width: 1034px;
  height: 14px;
  position: relative;
  left: 225px;
  background: url("../img/mainendbg.jpg");
}
</style>