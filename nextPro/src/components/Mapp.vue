<template>
  <div id="Mapp">

    <div class="amap-wrapper">
      <el-amap class="amap-box" vid="map" 
        :zoom="zoom"
        :center="center"
        :events="events">
        <el-amap-marker v-for="(mymarker,index) in mymarkers"
         v-bind:key="index"
        :vid="mymarker"
        :position="mymarker.position" 
        :title="mymarker.title"
        :visible="true"
        :events="mymarker.events">
        </el-amap-marker>
      </el-amap>
<!--       <el-amap-info-window
      :position="window.position"
      :template="window.template"
      :visible="true"
      :event="window.event">
      </el-amap-info-window> -->
    </div>
    <el-button @click="F5">刷新</el-button>
    <el-input v-model="arrive" style="z-index: -1"></el-input>
  </div>
</template>

<script>
import Login from './Login'
export default {
  name: 'Mapp',
  components:{
      "Login":Login
  },
  data(){
    let self=this;
   return{
      lng: 0,
      lat: 0,
      address: '',
      name:'',
      count: 1,
      po:[121.5273285, 31.21515044],
      arrive:"",
      events:{
        
      },
      zoom: 14,
      center: [121.5273285, 31.21515044],    
      mymarkers:[
             {
            address:"",
            position: [121.5273285, 31.21515044],
            events:{
              init(instance){
                // console.log(instance)
              },
               click:()=>{
                
                 console.log(self.mymarkers[0].position)
                 this.$router.push({
                  path:"/Index",query:{position:self.mymarkers[0].position}
                 })

               },
               dblclick:(e)=>{
                var position0=this.mymarkers[0].position
                alert(this.mymarkers[0].position)
                self.mymarkers[0].title=this.$options.methods.mapCoor(position0)
                // console.log(this.$options.methods)
                console.log("坐标"+this.arrive)
               }
            },
            title:"点击获得详细信息",
            
          },
          {
            address:"aaa",
            position: [121.5263285, 31.21565044],
            events:{
              click:(e)=>{
                console.log(this.mymarkers[0].title)
                this.mymarkers[0].title=this.mapCoor(self.mymarkers[0].position)
              },
               dblclick:(e)=>{
                let mymarker=self.mymarkers[0];
                let position0=self.mymarkers[0].position
                self.mapCoor(position0);
                console.log(self.arrive)
                mymarker.address=self.arrive;
                console.log(mymarker.address)
                mymarker.title=self.arrive;
                alert(position0)
               }
            },
            title:"ccc"
          }
          ],
          
         
   }
  },
  methods:{
    F5(){
      this.aaaa();
    },
    aaaa(){
      var self=this;
     var mymarkers=self.mymarkers;
     for(var i=0;i<mymarkers.length;i++){
      mymarkers[i].address=self.mapCoor(mymarkers[i].position);
      mymarkers[i].title=mymarkers[i].address
     }
   },
mapCoor(lnglatXY){
　　　　var _this = this;
　　　　AMap.service('AMap.Geocoder',function() {//回调函数
　　　　　　var geocoder = new AMap.Geocoder({});
　　　　　　geocoder.getAddress(lnglatXY, function (status, result) {
　　　　　　　　if (status === 'complete' && result.info === 'OK') {
　　　　　　　　　　//获得了有效的地址信息:
　　　　　　　　　　_this.arrive = result.regeocode.formattedAddress;
}
　　　　　　　　else {
　　　　　　　　　　_this.arrive = "暂无位置";
　　　　　　　　}
　　　　　　});
　　　　})
          return _this.arrive;
　　},
  },
  created(){
     // this.aaaa();
  },
  mounted(){
     
  }
}
</script>

<style>
.amap-wrapper {
    width: 1440px;
    height: 600px;

  }
</style>
