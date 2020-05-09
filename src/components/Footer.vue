<template>
  <div class="footer">
    <div class="footer-content">
      <div class="left">
        <p>
          All Rights Reserved 版权所有：
          <router-link to="/">smile个人博客</router-link>备案号：蜀ICP备00000000号
        </p>
      </div>
      <div class="right">
        <p>Design by Smile</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style scoped>
.footer {
  width: 100%;
  background: url("../img/footerbg.png") repeat-x;
  padding: 20px 0;
  margin-top: 20px;
  color: #ccc;
}
.footer-content {
  width: 1000px;
  margin: 0 auto;
}
.footer-content p {
  line-height: 24px;
  font-size: 14px;
}
.footer-content:after {
  content: "";
  display: block;
  clear: both;
}
.footer-content .left {
  float: left;
}
.footer-content .right {
  float: right;
}
</style>