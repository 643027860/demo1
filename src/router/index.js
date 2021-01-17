import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/home',
      name:'home',
      meta:{requireAuth:true},
      component:resolve => require(['../pages/home/home'],resolve),
    },
    {
      path:'/manage',
      name:'manage',
      component:resolve =>require(['../pages/manage/home/home'],resolve),
      children:[
        {
          path:'charts',
          name:'charts',
          component:resolve => require(['../pages/manage/home/charts/charts'],resolve),
          children:[
            {
              path:'bar',
              name:'bar',
              component:resolve => require(['../pages/manage/home/charts/bar'],resolve),
            },
            {
              path:'line',
              name:'line',
              component:resolve => require(['../pages/manage/home/charts/line'],resolve),
            },
            {
              path:'pie',
              name:'pie',
              component:resolve => require(['../pages/manage/home/charts/pie'],resolve),
            },
            {
              path:'allchars',
              name:'allChars',
              component:resolve => require(['../pages/manage/home/charts/allChars'],resolve),
            }
          ],
          redirect:{
            name: 'bar'
          }
        },
        {
          path: 'role',
          name:'role',
          component:resolve =>require(['../pages/manage/home/role/role'],resolve),
        },
        {
          path:'video',
          name:'video',
          component:resolve => require(['../pages/manage/home/video/video'],resolve),
        },
        {
          path:'/ueditor',
          name:'ueditor',
          component:resolve => require(['../components/ueditor/ueditor'],resolve),
        },
      ],
      redirect:{
        name: 'charts'
      }
    },
    {
      path:'/login',
      name:'login',
      component:resolve => require(['../pages/login/login'],resolve),
    },
    {
      path:'/error',
      name:'error',
      component:resolve => require(['../pages/error/error'],resolve),
    },
    {
      path:'/',
      redirect:to => {
        return 'login'
      }
    },
    {
      path:'',
      redirect:to => {
        return '/login'
      }
    },
    {
      path:'*',
      redirect:to => {
        return '/error'
      }
    },
  ]
})
