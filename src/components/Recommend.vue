<template>
  <div class="Recommend">
    <div class="title">
      <span>个人推荐</span>
    </div>
    <ul class="content">
      <li v-for=" x in listData" :key="x.id">
        <div class="R-left">
          <router-link to="/">
            <img :src="x.img_path" />
          </router-link>
        </div>
        <div class="R-right">
          <div class="r-title">
            <span @mouseover="changeColor($event)" @mouseout="removeColor($event)">
              <router-link :to="'/recommendArticle'.concat(x.id)">{{x.description}}</router-link>
            </span>
          </div>
          <div class="r-time">{{x.time}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Recommend",
  data() {
    return {
      listData: [],
      baseUrl:domain.testUrl
    };
  },
  mounted() {
    var ajax1 = new XMLHttpRequest(),
         baseUrl=this.baseUrl;
    ajax1.open("get", ""+baseUrl+"/api/getRecommend", true);
    ajax1.send();
    ajax1.onreadystatechange = () => {
      if (ajax1.status == 200 && ajax1.readyState == 4) {
        console.log("请求成功");
        var data = JSON.parse(ajax1.responseText);
        this.listData = data;
        console.log(data);
      }
      if (![200, 304].includes(ajax1.status)) {
        console.log("请求错误");
      }
    };
  },
  methods: {
    changeColor(e) {
      e.target.setAttribute("style", "color:#1890ff;transition:'all 1s'");
    },
    removeColor(e) {
      e.target.setAttribute("style", "color:'';transition:'all 1s'");
    }
  }
};
</script>
<style scoped>
.Recommend .title {
  height: 44px;
  background: url("../img/rtitbg.png") no-repeat;
  margin-top: 10px;
  color: white;
  font-size: 18px;
  font-weight: 700;
}
.Recommend .title span {
  position: relative;
  left: 26px;
  top: 7px;
}
.Recommend .content {
  height: 400px;
}
.Recommend li {
  padding: 5px;
}
.Recommend li:after {
  content: "";
  display: block;
  clear: both;
}
.Recommend .R-left {
  float: left;
}
.Recommend .R-left a {
  display: inline-block;
}
.Recommend .R-left img {
  width: 130px;
}
.Recommend li .R-right {
  width: 125px;
  float: left;
  margin-left: 20px;
  color: rgb(102, 102, 102);
  font-size: 14px;
  position: relative;
  height: 91px;
}
.Recommend li .R-right .r-title a {
  text-decoration: underline;
}
.Recommend li .R-right .r-time {
  width: 100%;
  position: absolute;
  bottom: 20px;
}
.Recommend .content li {
  margin-top: 10px;
}
</style>