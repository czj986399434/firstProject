<template>
  <div id="app">
  	<el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="160px" >
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu default-active="1-4-1" 
        class="el-menu-vertical-demo" 
        @open="handleOpen" 
        @close="handleClose" 
        :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">
              <router-link to="/Index">
                Index
              </router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/Login">
                登录
              </router-link>
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3" @click="toMapp">
             账单
           </el-menu-item>
         </el-menu-item-group>
         <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">
            <router-link to="/SecondPage">
              第二页
            </router-link>
          </el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="2-1">
            <router-link to="/ThirdPage">
              第三页
            </router-link>
          </el-menu-item>
          <el-menu-item index="2-2" @click="tohuanshu">
           还书
         </el-menu-item>
         <el-menu-item index="2-3" @click="toyonghuguanli">
           用户中心
         </el-menu-item>
       </el-menu-item-group>
       <el-menu-item-group title="分组2">
        <el-menu-item index="2-4">
          <router-link to="/zhangdanguanli">
            账单管理
          </router-link>
        </el-menu-item>
        <el-menu-item index="2-5" @click="tohoutaiguanli">
         后台管理
       </el-menu-item>
     </el-menu-item-group>
     <el-submenu index="2-6">
      <span slot="title">选项4</span>
      <el-menu-item index="1-6-1" @click="toSupplier">
        供货商
      </el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>
    <i class="el-icon-document"></i>
    <span slot="title" >导航三</span>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">导航四</span>
  </el-menu-item>
</el-menu>
</el-aside>
<el-container>
  <el-header style="text-align: right; font-size: 12px">

    <el-dropdown>
      <i class="el-icon-setting" 
      style="margin-right: 15px;display: inline-block;">
    </i>
    <span>{{username}}</span>
    <el-image
    style="width: 20px; height: 20px"
    :src="imgURL"
    :fit="fit"
    :preview-src-list="srcList"></el-image>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>
        <router-link to="/SecondPage" class="font1">查看个人中心</router-link>
      </el-dropdown-item>
      <el-dropdown-item class="font1">新增</el-dropdown-item>
      <el-dropdown-item class="font1" ><span @click="cancel">退出</span></el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</el-header>

<el-main>
  <Login v-if="LoginState" v-on:changeLState="OK($event)" v-on:giveUser="getU($event)"></Login>
  <router-view></router-view>

</el-main>
</el-container>
</el-container>





</div>
</template>

<script>
  import Login from './components/Login'
  export default {

    name: 'App',
    components:{
      "Login":Login
    },
    data() {
      return {
        LoginState:false,
        fit:'fill',
        username:"",
        imgURL:'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        isCollapse: true,
        srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ]
      };
    },
    methods: {
      tohoutaiguanli(){
        this.$router.push({
          path:"/houtaiguanli"
        })
      },
      toyonghuguanli(){
        this.$router.push({
          path:"/yonghuzhongxin"
        })
      },
      tohuanshu(){
        this.$router.push({
          path:"/huanshu"
        })
      },
      toSupplier(){
        this.$router.push({
          path:"/Suppliers"
        })
      },
      toMapp(){
       this.$router.push({
        path:"/zhangdan"
      })
     },
     getU(username){
       this.username=username
     },
     OK(LoginState){
      this.LoginState=LoginState
    },
    cancel(){
      this.LoginState=true;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed:{
      // username:function(){
      //   var username=this.$cookies.get("username")
      //   console.log("username")
      //   return username
      // }
    }

  }
</script>

<style>
.amap-wrapper {
  width: 500px;
  height: 500px;
}
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}


.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.user{
  height: 30px;
  width:30px;
  background-color: #fff;
  display:inline-block;

  border-radius: 50%;
}
.font1{
  text-decoration: none;
  color: #000;
}
</style>
