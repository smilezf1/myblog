<template>
  <div class="Rank">
    <div class="title">
      <span>点击排行</span>
    </div>
    <ul class="content">
      <li v-for="x in rankData" :key="x.id">
        <router-link :to="'/rankArticle'.concat(x.id)">{{x.description}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Rank",
  data() {
    return {
      rankData: [],
      baseUrl:domain.testUrl
    };
  },
  mounted() {
    var ajax1 = new XMLHttpRequest(),
    baseUrl=this.baseUrl;
    ajax1.open("get", ""+baseUrl+"/api/getRank", true);
    ajax1.send();
    ajax1.onreadystatechange = () => {
      if (ajax1.status == 200 && ajax1.readyState == 4) {
        console.log("请求成功");
        var data = JSON.parse(ajax1.responseText);
        this.rankData = data;
      }
      if (![200, 304].includes(ajax1.status)) {
        console.log("请求错误");
      }
    };
  }
};
</script>
<style>
.Rank .title {
  height: 44px;
  background: url("../img/rtitbg.png") no-repeat;
  margin-top: 10px;
  color: white;
  font-size: 18px;
  font-weight: 700;
}
.Rank .title span {
  position: relative;
  left: 26px;
  top: 7px;
}
.Rank .content {
  height: 350px;
  padding: 10px;
}
.Rank .content li {
  background: url("../img/libg.jpg") no-repeat 9px 7px;
  padding-left: 20px;
  color: red;
  margin: 20px 0;
}
</style>