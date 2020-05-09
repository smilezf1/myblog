<template>
  <div class="loginBox">
    <form class="login">
      <div class="login-top">欢迎登录</div>
      <div class="login-bottom">
        <label>
          <span>管理员:</span>
          <input type="text" name="name" class="text" />
        </label>
        <label>
          <span>密&nbsp;&nbsp;&nbsp;&nbsp;码:</span>
          <input type="password" name="pwd" class="pwd" />
        </label>
        <label>
          <span>验证码:</span>
          <input type="text" name="captcha" style="width:100px;" />
          <img
            src="http://localhost:8081/captcha"
            onclick="this.src=this.src+'?'+Math.random()"
            class="code"
          />
          <!--实现点击变图片：点击图片先让图片的src地址有点变化，这样浏览器就会重新请求这张图片-->
        </label>
        <button type="button" @click="login()">立即登录</button>
      </div>
    </form>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "Login",
  methods: {
    login() {}
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}
.loginBox {
  width: 100%;
  height: 100%;

  box-sizing: border-box;
  background: url("../img/demo2.png") center center !important;
}

.login {
  width: 428px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.login input {
  width: 284px;
  line-height: 40px;
  outline: none;
  border: 1px solid #dae1e6;
  margin-left: 4px;
  margin-top: 25px;
  border-radius: 16px;
}
.login-top {
  width: 100%;
  background: #0371d1;
  color: white;
  font-size: 30px;
  text-align: center;
  line-height: 117px;
  border-radius: 12px 12px 0 0;
}
.login-bottom {
  background: white;
  border-radius: 0 0 12px 12px;
  padding: 20px 30px 50px 30px;
}

.login button {
  outline: none;
  background: #0371d1;
  border-radius: 16px;
  border: none;
  color: white;
  width: 288px;
  line-height: 40px;
  position: relative;
  top: 30px;
  left: 30px;
  cursor: pointer;
}
label {
  display: block;
  color: rgba(191, 191, 191, 0.75);
}
label span {
  position: relative;
  top: 16px;
}
.login .code {
  position: relative;
  top: 14px;
}
</style>