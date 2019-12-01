<template>
  <div class="Login">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>登录</span>
      <el-button style="float: right; padding: 3px 0" type="text" @click="login1">注册</el-button>
    </div>
    <div class="paddingBottom">
      <el-row :gutter="20" >
      <el-col :span="6">
        <div class="betall">
          <i class="el-icon-user-solid">
          </i>
          用户名:
        </div>
      </el-col>
      <el-col :span="18">
        <el-input  class="elInput" v-model="username" placeholder="请输入内容">
        </el-input>
      </el-col>  
    </el-row>
    </div>
    <div class="paddingBottom">
      <el-row :gutter="20">
      <el-col :span="6">
        <div class="betall">
         <i class="el-icon-edit"></i>
         密码:
      </div>
      </el-col>
      <el-col :span="18">
        <el-input class="elInput" type="password" v-model="password" placeholder="请输入内容"></el-input>
        </el-input>
      </el-col>  
    </el-row>
    </div>
    <el-row :gutter="20" style="margin-top: 10px">
      <el-col :span="6">
        <div class="space">
        </div>  
      </el-col>
      <el-col :span="6">
        <el-checkbox v-model="checked" >
          记住密码
        </el-checkbox>
      </el-col>
      <el-col :span="8">
        <el-link type="primary" class="beright">
          忘记密码?
        </el-link>
      </el-col>
        
    </el-row>
    <el-row :gutter="20" style="margin-top: 10px">
      <el-col :span="6">
        <div class="space">
        </div>
      </el-col>
      <el-col :span="14">
        <el-button type="primary" size="small" id="signIn" :loading="loading" @click="login" class="loginButton">
      登录
    </el-button>
      </el-col>  
    </el-row>
</el-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username:"",	
      password:"",
      checked:false,
      loading:false,
    }
  },
  methods:{

     login(){
      console.log(this.$cookies.keys())
      var that=this;
      that.loading=true;
      // axios.post("").then((data)=>{
      //   if(data.status===200){
        that.$message("登录成功");
        setTimeout(function(){
           that.$router.push(
            {
              name:"houtaiguanli",
              params:
              {
              username:that.username,
              password:that.password,
              }
            }
        );
        },2000)
        //这是传参到下一个界面上
        that.$cookies.set("username",that.username)
        if(that.checked==true){
          console.log("应该是可以保存了")
          
        that.$cookies.set("password",that.password)
        that.$cookies.set("checked",that.checked)
        }
        else{
        that.$cookies.remove("password",that.password)
        that.$cookies.remove("checked",that.checked)
        };
        this.$emit("changeLState",false);
        this.$emit("giveUser",this.username)
        

  },
  login1(){
      var that=this;
        if(that.checked==true){
          console.log("应该是可以保存了")
          that.$cookies.set("username",that.username)
        that.$cookies.set("password",that.password)
        that.$cookies.set("checked",that.checked)
        }
      
     }, 
},
  computed:{
    jisuan(){
      var username=this.username;
    if(username==this.$cookies.get("username")){
      this.password=this.$cookies.get("password")
    }
    }
    
  },
  created:function(){
    this.username=this.$cookies.get("username")
    if(this.$cookies.isKey("checked")==true){
      this.checked=this.$cookies.get("checked") 

      this.password=this.$cookies.get("password")
    }
    
  }
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 400px;
   position:absolute;
    top:50%;
    left:50%;
    border-radius: 5px;
   -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
   transform:translate(-50%,-50%);
 }
  .login{

  }
  .elInput{
	width: 77%;
}
.betall{
  margin-top: 10px;

}
#signIn{
  float: right;
}
.beright{
  float: right;
}
.loginButton{
  width: 204px
}
.paddingBottom{
  padding-bottom: 20px
}
.space{
  width: 100px;
  height: 10px
}
.Login{
  z-index: -1
}
</style>