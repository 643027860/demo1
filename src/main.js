import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import $ from 'jquery'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

//图片懒加载
import VueLazyload from 'vue-lazyload'
import loading from './assets/imgs/loading/loading.gif'
Vue.use(VueLazyload, {
  loading
})

//引入video插件及css
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
//引入 hls,视频直播(m3u8)必须引入的
import 'videojs-contrib-hls'
//播放rtmp视频
import 'videojs-flash'
//如果你需要自定义播放器的样式，自己新建一个css
require('./assets/css/video_css/myvideo.css')
Vue.use(VideoPlayer)

//excel表格
//import '../node_modules/vue-xlsx-table/dist/style.css'
import vueXlsxTable from 'vue-xlsx-table'
Vue.use(vueXlsxTable, {rABS: false}) //HTML5 FileReader API 有两个方法可以读取本地文件 readAsBinaryString 和 readAsArrayBuffer, 默认rABS为true，也就是使用readAsBinaryString

//ueditor
import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'


//引入jsmpeg
import '../jsmpeg.min'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render:h=>h(App),
  router,
  store
})

// main.js
// router.beforeEach((to, from, next) => {
//   if (store.getters.token) { // 判断是否有token
//     if (to.path === '/login') {
//       next({ path: '/' });
//     } else {
//       if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
//         store.dispatch('GetInfo').then(res => { // 拉取info
//           const roles = res.data.role;
//           store.dispatch('GenerateRoutes', { roles }).then(() => { // 生成可访问的路由表
//             router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
//             next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
//           })
//         }).catch(err => {
//           console.log(err);
//         });
//       } else {
//         next() //当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入404页面
//       }
//     }
//   } else {
//     if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
//       next();
//     } else {
//       next('/login'); // 否则全部重定向到登录页
//     }
//   }
// });



