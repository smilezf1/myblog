<template>
  <div class="swiper-container Banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(x,i) in BannerDatas" :key="i">
        <router-link to="/">
          <img :src="x.img_path" />
        </router-link>
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/js/swiper.min.js";
import "swiper/dist/css/swiper.min.css";
export default {
  props: ["BannerDatas"],
  name: "Banner",
  updated() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>
<style>
.Banner {
  width: 1000px;
  margin-left: 268px;
}
.Banner .swiper-wrapper {
  transition: all 3s;
}
.Banner img {
  width: 650px;
}
.Banner .swiper-pagination-bullet {
  background: #333;
}
</style>