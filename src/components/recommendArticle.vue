<template>
  <div class="recommendArticle">
    <Head />
    <Nav />
    <div class="roof"></div>
    <div class="wrapper">
      <transition
        appear
        enter-active-class="animated fadeIn slower"
        leave-active-class="animated fadeOut faster"
      >
        <div class="container">
          <h2 class="top"></h2>
          <div class="content">
            <h3 class="title">{{article.description}}</h3>
            <p class="publish">
              <span>发布时间:{{article.time}}</span>
              <span>发布作者:{{article.author}}</span>
              <span>浏览量:{{article.readnum}}</span>
            </p>
            <div class="text" v-html="article.content"></div>
            <p class="back">
              <button @click="$router.back()" style="bordr:1px solid red;">返回</button>
            </p>
          </div>
        </div>
      </transition>
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
  name: "recommendArticle",
  data() {
    return {
      article: [],
      baseUrl:domain.testUrl
    };
  },
  mounted() {
    var ajax1 = new XMLHttpRequest(),
        baseUrl=this.baseUrl;
    ajax1.open(
      "get",
      ""+baseUrl+"/api/getRecommendText?id=" +
        this.$route.params.id,
      true
    );
    ajax1.send();
    ajax1.onreadystatechange = () => {
      if (ajax1.readyState == 4 && ajax1.status == 200) {
        console.log("请求成功");
        var data = JSON.parse(ajax1.responseText);
        this.article = data;
      }
      if (![200, 304].includes(ajax1.status)) {
        console.log("请求失败");
      }
    };
  },
  components: { Head, Nav, Footer }
};
</script>
<style>
.recommendArticle .container {
  width: 980px;
  margin: 0 auto;
  padding: 0 15px;
  background: rgb(229, 229, 229, 0.6);
  border-left: 1px solid #d2d2d2;
  border-right: 1px solid #d2d2d2;
}
.recommendArticle .container .text img {
  width: 90% !important;
}
.recommendArticle .roof {
  width: 1034px;
  height: 14px;
  position: relative;
  left: 241px;
  background: url("../img/maintopbg.jpg");
}
.recommendArticle .content {
  border: 1px solid #ccc;
  padding: 5px 15px;
  background: rgba(255, 255, 255, 0.3);
  margin: auto 90px;
}
.recommendArticle .content .top {
  border-bottom: #333 2px solid;
  padding: 0 5px;
  margin: 20px 0 10px 0;
}
.recommendArticle .content .title {
  text-align: center;
  font-size: 24px;
  margin: 20px 0;
}
.recommendArticle .content .publish {
  border: 1px dashed #ccc;
  color: #999;
  padding: 5px 0;
  text-align: center;
  font-size: 14px;
}
.recommendArticle .content .publish span {
  margin-right: 8px;
}
.recommendArticle .content .img {
  width: 100%;
}
.recommendArticle .content .text {
  color: #666;
  line-height: 40px;
}
.recommendArticle .content .text p {
  margin-bottom: 5px;
  line-height: 40px;
}
.recommendArticle .content .back {
  text-align: left;
  margin-top: 20px;
}
.recommendArticle .content .back button {
  border: none;
  color: white;
  background: #5d5d5d;
  border-radius: 10px;
  padding: 6px 15px;
  cursor: pointer;
  outline: none;
}
.recommendArticle table {
  background-color: #272822;
  font: 13px/1.4em Monaco, Lucida Console, monospace;
  text-indent: 0;
}
.recommendArticle .base {
  width: 1034px;
  height: 14px;
  position: relative;
  left: 241px;
  background: url("../img/mainendbg.jpg");
}
</style>