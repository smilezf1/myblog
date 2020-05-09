<template>
  <div class="nav">
    <ul class="nav-content">
      <li v-for="x in r1.navData" :key="x.id">
        <router-link :to="{path:x.navKeywords}">{{x.navName}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  // props:["navDatas"],
  name: "Nav",
  inject: ["r1"],
  mounted() {
    console.log(x.navName);
  }
};
</script>
<style>
.nav {
  width: 1000px;
  margin: 0 auto;
  background: url("../img/navbg.png") 0px 0px no-repeat;
}
.nav-content {
  width: 75%;
  height: 64px;
  color: white;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;
}
</style>