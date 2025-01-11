import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import maijia from '@/views/modules/maijia/list'
    import shangpinxinxi from '@/views/modules/shangpinxinxi/list'
    import dingdanxinxi from '@/views/modules/dingdanxinxi/list'
    import yundanxinxi from '@/views/modules/yundanxinxi/list'
    import shangjia from '@/views/modules/shangjia/list'
    import songcangshenqing from '@/views/modules/songcangshenqing/list'
    import shangpinfenlei from '@/views/modules/shangpinfenlei/list'
    import guandanxinxi from '@/views/modules/guandanxinxi/list'
    import discussshangpinxinxi from '@/views/modules/discussshangpinxinxi/list'
    import chukoufapiao from '@/views/modules/chukoufapiao/list'
    import shangpinyuding from '@/views/modules/shangpinyuding/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公告资讯',
        component: news
      }
      ,{
	path: '/maijia',
        name: '买家',
        component: maijia
      }
      ,{
	path: '/shangpinxinxi',
        name: '商品信息',
        component: shangpinxinxi
      }
      ,{
	path: '/dingdanxinxi',
        name: '订单信息',
        component: dingdanxinxi
      }
      ,{
	path: '/yundanxinxi',
        name: '运单信息',
        component: yundanxinxi
      }
      ,{
	path: '/shangjia',
        name: '商家',
        component: shangjia
      }
      ,{
	path: '/songcangshenqing',
        name: '送仓申请',
        component: songcangshenqing
      }
      ,{
	path: '/shangpinfenlei',
        name: '商品分类',
        component: shangpinfenlei
      }
      ,{
	path: '/guandanxinxi',
        name: '关单信息',
        component: guandanxinxi
      }
      ,{
	path: '/discussshangpinxinxi',
        name: '商品信息评论',
        component: discussshangpinxinxi
      }
      ,{
	path: '/chukoufapiao',
        name: '出口发票',
        component: chukoufapiao
      }
      ,{
	path: '/shangpinyuding',
        name: '商品预订',
        component: shangpinyuding
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
