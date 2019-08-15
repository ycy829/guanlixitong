// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//Mint:引入mint-ui
import Mint from 'Mint-ui';
//Mint:引入css
import 'mint-ui/lib/style.css';
//Mint:安装插件
Vue.use(Mint);

// Axios.interceptors.request.use(function(config){
// 	Mint.Indicator.open({
// 	  text: 'Loading...',
// 	  spinnerType: 'fading-circle'
// 	});
// 	return config;
// });
// Axios.interceptors.response.use(function(config){
// 	Mint.Indicator.close();
// 	return config;
// })
//Mui
import '../static/vendor/mui/dist/css/mui.css';
//全局样式（自己的）
import '../static/css/global.css';
// import '../static/js/rem.js';
import '../static/font/iconfont.css';

import Moment from 'Moment';
import NavBar from '../src/components/common/navBar.vue';
import Comment from '../src/components/common/comment.vue';
import MySwipe from '../src/components/common/mySwipe';

import VuePreview from 'vue2-preview';
Vue.use(VuePreview);

Moment.locale('zh-cn');
Moment.relativeTimeThreshold('s', 60);
Moment.relativeTimeThreshold('m', 60);
Moment.relativeTimeThreshold('h', 24);
Moment.relativeTimeThreshold('d', 30);
Moment.relativeTimeThreshold('M', 12);
Vue.filter('changeData',function(value){

	var data1=Moment(value).format('YYYYMMDD');
	console.log(data1)
	return Moment(data1).fromNow()
});
Vue.filter('showData',function(value){

	// var data1=Moment(value).format('YYYYMMDD');
	// console.log(data1)
	return Moment(value).format('YYYY-MM-DD')
});
Vue.component('navBar',NavBar); //navBar组件
Vue.component('comment',Comment);//comment组件
Vue.component('mySwipe',MySwipe)//mySwipe组件



//Axios:引入axios
import Axios from 'axios';
//挂载原型
Vue.prototype.$ajax = Axios;
//默认配置
Axios.defaults.baseURL="http://www.liulongbin.top:3005/api/";



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
