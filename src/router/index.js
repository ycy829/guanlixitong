import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home/home'
import Menber from '@/components/menber/menber'
import Shopcart from '@/components/shopcart/shopcart'
import User from '@/components/user/user'
import NewsList from '@/components/news/newsList'
import NewsDeatail from '@/components/news/newsDeatail'
import PhotoShare from '@/components/photo/photoShare'
import PhotoDetail from '@/components/photo/photoDetail'
import GoodsList from '@/components/goods/goodsList'
import GoodsDetail from '@/components/goods/goodsDetail'


Vue.use(Router)


export default new Router({
  mode: 'history',
  linkActiveClass:'mui-active',
  routes: [
    
      // path: '/',
      // name: 'Home',
      // component: Home
      { path: '/', redirect: { name: 'home' } }, //重定向
      { name: 'home', path: '/home', component: Home },//首页
      { name: 'menber', path: '/menber', component: Menber },
      { name: 'shopcart', path: '/shopcart', component: Shopcart },//购物车
      { name: 'user', path: '/user', component: User },//搜索
      { name: 'news.list',path:'/news/list',component:NewsList},//新闻列表
      { name: 'news.deatail',path:'/news/deatail',component:NewsDeatail},//新闻详情
      { name: 'photo.share',path:'/photo/share',component:PhotoShare},//图文分享
      { name: 'photo.detail',path:'/photo/detail/:id',component:PhotoDetail},//图文详情
      { name: 'goods.list',path:'/goods/list',component:GoodsList},//商品列表
      { name: 'goods.detail',path:'/goods/detail',component:GoodsDetail},//商品详情

  ]
})
