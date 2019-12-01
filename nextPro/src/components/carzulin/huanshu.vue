<template>
  <div class="huanshu">
    <div class="corner">
      <i class="el-icon-loading"></i>
      <span>{{count}}</span></div>
      <el-row :gutter="0"> 
        <el-col :span="5"><el-tag ><span >还碟</span></el-tag></el-col>
        <el-col :span="12"><el-tag ><span >请放入感应</span></el-tag></el-col>
      </el-row>
      <el-table
      class="table1"
      :data="rental"
      border
      style="width: 80%">
      <el-table-column
      prop="customerName"
      label="客户姓名"
      width="180">
    </el-table-column>
    <el-table-column
    prop="goodTypeName"
    label="归还类别"
    width="180">
  </el-table-column>
  <el-table-column
  prop="goodsName"
  label="碟名">
</el-table-column>
<el-table-column
  prop="rentalTime"
  label="租赁时间">
</el-table-column>
<el-table-column
  prop="deadLine"
  label="最终期限">
</el-table-column>
<el-table-column
  prop="rentalAmount"
  label="租赁总数">
</el-table-column>
<el-table-column
  prop="xceedTime"
  label="归还时间">
</el-table-column>
<el-table-column
  prop="exceedAmount"
  label="归还数目">
</el-table-column>
</el-table>
<div class="guihuan"><el-button  type="primary" @click="guihuan" plain>点击确认归还</el-button></div>

</div>
</template>

<script>
  var getTime;
  export default {
    name: 'huanshu',
    data () {
      return {
        count:60,
        rental:[{
          customerName:"kiki",
          goodTypeName:"录像带",
          goodsName:"人生无限公司",
          rentalTime:"2019-11-24",
          deadLine:"2019-11-28",
          rentalAmount:1,
          xceedTime:"2018-11-26",
          exceedAmount:1
        },
        {
          customerName:"chuchu",
          goodTypeName:"cd",
          goodsName:"奥利给",
          rentalTime:"2019-11-24",
          deadLine:"2019-11-27",
          rentalAmount:2,
          xceedTime:"2018-11-26",
          exceedAmount:1
        },],
      }
    },
    methods:{
      guihuan(){
        this.$message("已成功还书")
        this.rental=[];
      }
    },
    computed:{
    },
    mounted(){
      var that=this;
      getTime=setInterval(function(){
        that.count=that.count-1;
        console.log(that.count)
        if(that.count===0){
        clearInterval(getTime)
        // alert("请重新感应")
      }
      },1000)
      
      console.log(this.count)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div span{
  font-size: 20px;
}
.corner{
  position: fixed;
  right: 70px;
  top:50px;
  font-size: 50px;
}
.guihuan{
  margin-top: 20px;
  width: 80%;
  height: 50px;
  display:flex;
  align-items: center;
  justify-content:center;
}

</style>