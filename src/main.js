import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import domain from './domain'
global.domain = domain;
// import ParticlesJs from './components/ParticlesJS.vue'
Vue.use(Vuex);
// const store=new Vuex.Store({
// state:{isLoading:false},
// mutations:{
//     updateLoadingStatus (state, payload){
//     state.isLoading = payload.isLoading
//     }
// }
// });

// router.beforeEach((to,from ,next)=>{
//     store.commit('updateLoadingStatus',{isLoading:true});
//     next();
// })
// router.afterEach((to)=>{
//     store.commit("updateLoadingStatus",{isLoading:false});
// })

Vue.config.productionTip = false
var ajax1;
var ajax3;
var ajax4;
new Vue({
  data() {
    return {
      navData: [],
      listData: [],
      baseUrl:domain.testUrl
    }
  },
  provide() {
    return {
      r1: this.$data
    }
  },
  mounted() {
    var baseUrl=this.baseUrl;
    var p1 = new Promise((success, error) => {
      ajax1 = new XMLHttpRequest();
      console.log(baseUrl,"url地址")
      ajax1.open("get", ""+baseUrl+"/z_admin/navList", true);
      ajax1.send();
      ajax1.onreadystatechange = () => {
        if (ajax1.readyState == 4 && ajax1.status == 200) {
          console.log("请求成功",JSON.parse(ajax1.responseText));
          var data = JSON.parse(ajax1.responseText);
          console.log(data);
          success(data);
        }
        if (![200, 304].includes(ajax1.status)) {
          console.log("请求失败")
        }
      }
    })
    var p3 = new Promise((success, error) => {
      ajax3 = new XMLHttpRequest();
      ajax3.open("get", ""+baseUrl+"/api/getNewArticle?num=15", true);
      ajax3.send();
      ajax3.onreadystatechange = () => {
        if (ajax3.readyState == 4 && ajax3.status == 200) {
          console.log("请求成功",JSON.parse(ajax3.responseText));
          var data = JSON.parse(ajax3.responseText);
          console.log(data);
          success(data);
        }
        if (![200, 304].includes(ajax3.status)) {6
          console.log("请求错误");
        }
      }
    })

    Promise.all([p1, p3]).then((data) => {
      this.navData = data[0];
      this.listData = data[1];

      console.log(data[0]);
    })

  },
  el: '#app',
  router,
  // store:store,
  components: {
    App
  },
  template: '<App/>'
})
