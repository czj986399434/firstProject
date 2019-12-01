import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../components/Index'
import Login from '../components/Login'
import FirstPage from '../components/FirstPage'
import SecondPage from '../components/SecondPage'
import ThirdPage from '../components/ThirdPage'
import zhangdanguanli from '../components/zhangdanguanli'
import zhangdan from '../components/zhangdan'
import Suppliers from '../components/Suppliers'
import huanshu from '../components/carzulin/huanshu'
import yonghuzhongxin from '../components/carzulin/yonghuzhongxin'
import houtaiguanli from '../components/carzulin/houtaiguanli'
import zulin from '../components/carzulin/zulin'
Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:"/Index",
    	name:"Index",
    	component:Index
    },{
      path:"/Login",
      name:"Login",
      component:Login
    },{
      path:"/FirstPage",
      name:"FirstPage",
      component:FirstPage
    },
    {
      path:"/SecondPage",
      name:"SecondPage",
      component:SecondPage
    },
    {
      path:"/ThirdPage",
      name:"ThirdPage",
      component:ThirdPage
    },{
      path:"/zhangdanguanli",
      name:"zhangdanguanli",
      component:zhangdanguanli
    },{
      path:"/zhangdan",
      name:"zhangdan",
      component:zhangdan
    },{
      path:"/Suppliers",
      name:"Suppliers",
      component:Suppliers
    },{
      path:"/huanshu",
      name:"huanshu",
      component:huanshu
    },{
      path:"/yonghuzhongxin",
      name:"yonghuzhongxin",
      component:yonghuzhongxin
    },
    {
     path:"/houtaiguanli",
     name:"houtaiguanli",
     component:houtaiguanli
    },{
     path:"/zulin",
     name:"zulin",
     component:zulin
    }
  ],
  mode:"history"
})
