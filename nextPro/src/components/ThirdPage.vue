<template>
  <div class="ThirdPage">
试验回调函数
<el-input v-model="data.name" style="width:100px;display: block;"></el-input>
<el-button @click="getId(getAge)"> 哈哈验证</el-button>
<el-button @click="Immediately">这是立即</el-button>
{{data.name}},{{data.id}},{{data.age}}

  </div>
</template>

<script>
  import Login from './Login'
  import base from '../utils/Song.js'
export default {
  name: 'ThirdPage',
  components:{
      "Login":Login
  },
  data () {
    return {
      data:{
      	allName:[
      	{
      		id:1,
      	  name:3333
      	},{
      		id:2,
      	  name:4444
      	},{
      		id:3,
      	  name:5555
      	}],
      	test:[
      	{
      	  id:1,
      	  age:18	
      	},{
      	  id:2,
      	  age:19	
      	},
      	{
      	  id:1,
      	  age:20	
      	}],
      	name:"",
      	age:"",
      	id:"",

      }
    }
  },
  created(){
   base.aaa();
  },

  methods:{
  	Immediately:function(){
  		var name=this.data.name;
  		var allName=this.data.allName;
  		for(var i=0;i<3;i++){
      	if(name-allName[i].name==0){
      		console.log("找到了")
      		this.data.id=allName[i].id
      	}
      	else{
      		console.log("meizhaodao")
      	}
      	}
      	var id=this.data.id;
      	var test=this.data.test;
      	for(var i=0;i<3;i++){
      		if(id==test[i].id){
      		this.data.age=test[i].age
      	}
      }
  	},
    getId:function(yanzheng){
        var name=this.data.name;
      var allName=this.data.allName;
      for(var i=0;i<3;i++){

      	if(name-allName[i].name==0){
      		console.log("找到了")
      		this.data.id=allName[i].id
      	}
      	else{
      		console.log("没找到")
      	}
      }
      console.log("这是现在的ID");
      console.log(this.data.id)
      yanzheng(this.data.id)
    },
    getAge:function(id){
    	console.log("执行了回调函数")
      var id=id;
      var test=this.data.test;
      for(var i=0;i<3;i++){
      	if(id==test[i].id){
      		this.data.age=test[i].age
      	}
      	else{
      		
      	}
      }
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>