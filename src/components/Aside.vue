<template>
  <div class="aside">
    <div class="attention">
      <h3 class="title">
        <span>关注我</span>
      </h3>
      <ul class="content">
        <li>
          <router-link to="/" target="_blank" title="我的后台">
            <img
              src="../img/gz01.png"
              @mouseover="aa($event)"
              @mouseout="bb($event)"
              @click="login()"
            />我的后台
          </router-link>
        </li>
        <li>
          <router-link to="/" title="我的电话">
            <img src="../img/tel_phone.png" @mouseover="aa($event)" @mouseout="bb($event)" />我的电话
          </router-link>
        </li>

        <li>
          <router-link to="/" title="我的邮箱">
            <img src="../img/email.png" @mouseover="aa($event)" @mouseout="bb($event)" />我的邮箱
          </router-link>
        </li>
        <li>
          <router-link to="/" title="QQ联系我">
            <img src="../img/qq.png" @mouseover="aa($event)" @mouseout="bb($event)" />我的QQ
          </router-link>
        </li>
      </ul>
    </div>
    <Recommend />
    <Rank />
    <div class="photo">
      <img src="../img/yuanfen.jpg" style="width:100%;" />
    </div>
  </div>
</template>
<script>
import Recommend from "@/components/Recommend.vue";
import Rank from "@/components/Rank.vue";
export default {
  name: "Aside",
  components: { Recommend, Rank },
  data(){
    return{
      baseUrl:domain.testUrl
    }
  },
  methods: {
    aa(e) {
      e.target.setAttribute("style", "opacity:0.7;transition:all 0.3s");
    },
    bb(e) {
      e.target.setAttribute("style", "opacity:1;transition:all 0.3s");
    },
    login() {
      window.location.href = ""+this.baseUrl+"/login";
    },
    qq() {
      window.location.href = "https://im.qq.com";
    }
  }
};
</script>
<style scoped>
.aside .attention .title,
.aside .recommend .title,
.aside .rank .title {
  height: 44px;
  background: url("../img/rtitbg.png") no-repeat;
  margin-top: 10px;
}
.aside .attention .title span,
.aside .recommend .title span,
.aside .rank .title span {
  color: white;
  font-size: 18px;
  position: relative;
  top: 7px;
  left: 35px;
}
.aside .attention .content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.aside .attention .content li {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  color: #747f8c;
}
.aside .photo {
  margin-top: 20px;
}
.aside .photo img {
  display: block;
}
</style>