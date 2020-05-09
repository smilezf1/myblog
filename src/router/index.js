import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from "@/components/Login"
import  Record from '@/components/Record'
import Course from '@/components/Course'
import Message from '@/components/Message'
import Skill from '@/components/Skill'
import List from '@/components/List'
//内容组件
import Article from '@/components/Article'
import rankArticle from '@/components/rankArticle'
import recommendArticle from '@/components/recommendArticle'
Vue.use(Router)
export default new Router({
  routes: [
    {path:"/",component:Home},
    {path:"/index",component:Home},
    {path:"/login",component:Login},
    {path:"/record",component:Record},
    {path:"/skill",component:Skill},
    {path:"/course",component:Course},
    {path:"/message",component:Message},
    {path:'/index/List',component:List},
    {path:"/Article:id",component:Article},
    {path:"/rankArticle:id",component:rankArticle},
    {path:"/recommendArticle:id",component:recommendArticle}
]
})
