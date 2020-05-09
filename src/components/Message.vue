<template>
  <div class="Message">
    <Head />
    <Nav />
    <div class="roof"></div>
    <div class="wrapper">
      <div class="container">
        <div class="content">
          <transition
            appear
            enter-active-class="animated fadeIn "
            leave-active-class="animated fadeOut faseter"
          >
            <form class="leaveWord">
              <h4 class="top">
                <img src="../img/pencil.png" />发表评论
              </h4>
              <div class="formList">
                <label>
                  <input
                    class="name"
                    name="name"
                    v-model="name"
                    placeholder="您的称呼"
                    @focus="changeBor($event)"
                    @blur="recoverB($event)"
                  />
                </label>
                <label>
                  <input
                    class="mail"
                    name="mail"
                    v-model="mail"
                    placeholder="您的邮箱"
                    @focus="changeBor($event)"
                    @blur="recoverB($event)"
                  />
                </label>
                <label>
                  <textarea
                    placeholder="说点什么吧 O(∩_∩)O~~"
                    v-model="content"
                    name="content"
                    @focus="changeBor($event)"
                    @blur="recoverB($event)"
                  ></textarea>
                </label>
                <button class="sub" type="button" @click="sub($event)">提交评论</button>
              </div>
            </form>
          </transition>
          <!-- 评论框 -->
          <div class="comments">
            <h4 class="top">
              <div class="left" style="float:left;">
                <img src="../img/comments.png" />
                <span>评论列表</span>
              </div>
              <div class="right" style="float:right;">
                <img src="../img/bell.png" />
                <span>参与讨论</span>
              </div>
            </h4>
            <ul class="commentlist">
              <li v-for="x in messageData" :key="x.id">
                <div class="left">
                  <img src="../img/people.png" />
                </div>
                <div class="right">
                  <p class="name">
                    {{x.name}}
                    <span class="observer">评论者</span>
                    <span style="color:#999;margin-left:8px;font-size:14px;">{{x.time}}</span>
                  </p>
                  <p class="retext">{{x.content}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
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
import axios from "axios";
import $ from "jquery";
var session = require("express-session");

export default {
  name: "Message",
  data() {
    return {
      messageData: [],
      name: "",
      mail: "",
      content: "",
      captcha: "",
      id: "",
      baseUrl:domain.testUrl
    };
  },
  methods: {
    changeBor(e) {
      e.target.setAttribute(
        "style",
        "border-color:rgba(250,34,70,0.7);box-shadow:0 0 8px rgba(250,34,70,0.7)"
      );
    },
    recoverB(e) {
      e.target.setAttribute("style", "border-color:'';box-shadow:''");
    },
    sub(e) {
      let baseUrl=this.baseUrl;
      $.ajax({
        url: ""+baseUrl+"/z_admin/guesetbookListSet",
        method: "post",
        data: {
          name: $("form").serializeJson().name,
          mail: $("form").serializeJson().mail,
          content: $("form").serializeJson().content,
          captcha: $("form").serializeJson().captcha
        },
        success: function(data) {
          alert("评论成功");
          console.log(data);
        }
      });
      var ajax1 = new XMLHttpRequest();
      ajax1.open(
        "get",
        ""+baseUrl+"/z_admin/guestbookList",
        true
      );
      ajax1.send();
      ajax1.onreadystatechange = () => {
        if (ajax1.readyState == 4 && ajax1.status == 200) {
          console.log("请求成功");
          var data = JSON.parse(ajax1.responseText);
          console.log(data);
          this.messageData = data;
        }
        if (![200, 304].includes(ajax1.status)) {
          console.log("请求错误");
        }
      };
      this.name = "";
      this.mail = "";
      this.content = "";
    }
  },
  mounted() {
    let baseUrl=this.baseUrl;
    (function($) {
      $.fn.serializeJson = function() {
        var serializeObj = {};
        var array = this.serializeArray();
        var str = this.serialize();
        $(array).each(function() {
          if (serializeObj[this.name]) {
            if ($.isArray(serializeObj[this.name])) {
              serializeObj[this.name].push(this.value);
            } else {
              serializeObj[this.name] = [serializeObj[this.name], this.value];
            }
          } else {
            serializeObj[this.name] = this.value;
          }
        });
        return serializeObj;
      };
    })($);
    var ajax1 = new XMLHttpRequest();
    ajax1.open("get", ""+baseUrl+"/z_admin/guestbookList", true);
    ajax1.send();
    ajax1.onreadystatechange = () => {
      if (ajax1.readyState == 4 && ajax1.status == 200) {
        console.log("请求成功");
        var data = JSON.parse(ajax1.responseText);
        this.messageData = data;
      }
      if (![200, 304].includes(ajax1.status)) {
        console.log("请求错误");
      }
    };
  },
  updated() {},
  components: { Head, Nav, Footer }
};
</script>
<style scoped>
.Message {
  background: url("../img/footside.jpg") center bottom no-repeat;
}
.Message .roof {
  width: 1034px;
  height: 14px;
  position: relative;
  left: 241px;
  background: url("../img/maintopbg.jpg");
}
.Message .content {
  width: 970px;
  margin: 0 auto;
  border-left: 1px solid #d2d2d2;
  border-right: 1px solid #d2d2d2;
  padding: 20px 5px;

  padding: 20px;
}
.Message .verify {
  margin-top: 10px;
}
.Message .leaveWord {
  position: relative;
}
.Message .formList {
  text-align: center;
  margin-top: 10px;
}
.content .leaveWord input {
  width: 285px;
  height: 44px;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
  border: 1px solid #398e9f;
  border-radius: 3px;
  margin-bottom: 20px;
  margin-right: 10px;
}
.content .leaveWord input::-webkit-input-placeholder {
  color: #398e9f;
}
.content .leaveWord .name {
  background: url("../img/user.png") no-repeat 14px 14px/12px 12px;
}
.content .leaveWord .mail {
  background: url("../img/mail.png") no-repeat 14px 14px/12px 12px;
}
.content .leaveWord textarea {
  width: 560px;
  height: 130px;
  border: 1px solid #398e9f;
  border-radius: 3px;
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.05);
  margin-left: 140px;
  outline: none;
  padding: 10px;
  resize: none;
}
.content .leaveWord textarea::-webkit-input-placeholder {
  color: #398e9f;
}
.content .leaveWord .sub {
  width: 150px;
  height: 40px;
  background: #398e9f;
  border: none;
  cursor: pointer;
  color: white;
  outline: none;
  border-radius: 3px;
  position: relative;
  top: 40px;
  left: -155px;
  margin-bottom: 30px;
}
.Message input,
.Message textarea {
  background: none;
}
.Message .base {
  width: 1034px;
  height: 14px;
  position: relative;
  left: 241px;
  background: url("../img/mainendbg.jpg");
}
.Message .commentlist li {
  width: 85%;
  border: 1px solid #398e9f;
  margin: 10px auto;
  color: #666;
  padding: 15px;
  display: flex;
  align-items: center;
  position: relative;
}
.Message .commentlist .right .observer {
  background: #398e9f;
  color: white;
  margin-left: 10px;
  font-size: 12px;
  border-radius: 3px;
  padding: 2px 7px 2.5px;
  opacity: 0.9;
}
.Message .commentlist li img {
  width: 50px;
  border-radius: 50%;
  border: 1px solid #ddd;
  background: #f1f1f1;
  padding: 2px;
}
.Message .commentlist .retext {
  margin-top: 12px;
}
.Message .commentlist .left {
  float: left;
  margin-right: 10px;
}
.Message .commentlist .right {
  float: left;
}
.Message .commentlist .del {
  position: absolute;
  right: 20px;
  top: 55px;
  cursor: pointer;
  background: #e14522;
  color: white;
  font-size: 12px;
  border-radius: 3px;
  padding: 4px;
}
.Message .leaveWord .top,
.Message .comments .top {
  height: 30px;
  border-bottom: 1px solid #398e9f;
  color: #398e9f;
  font-weight: 300;
}
.Message .leaveWord .top img,
.Message .comments .top img {
  width: 25px;
  position: relative;
  top: 6px;
  left: 4px;
  margin-right: 4px;
}
.Message .comments .top .left,
.Message .comments .top .right {
  cursor: pointer;
}
.Message .commentlist .left img:hover,
.Message .commentlist .right img:hover {
  cursor: pointer;
  transform: rotate(360deg);
  transition: transform 0.5s ease-out;
}
.Message .comments > .top span:hover {
  color: #e14522;
  transition: all 0.3s ease-out 0s;
}
</style>