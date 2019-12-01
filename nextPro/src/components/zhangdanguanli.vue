<template>
  <div class="zhangdanguanli">
    <el-container>
      <el-main><el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部" name="all">
         <el-table
         :cell-style="callStyle"
         :data="contracts"
         style="width: 100%">
         <el-table-column
         prop="contractId"
         label="订单Id"
         width="180"
         >
       </el-table-column>
       <el-table-column
       prop="totalAmount"
       label="总金额"
       width="180">
     </el-table-column>
     <el-table-column
     prop="date"
     label="时间"
     width="180">
   </el-table-column>
   <el-table-column
   prop="rentalCategory"
   label="租售类别"
   width="180"> <div slot-scope="scope"> 
    <el-tag  type="primary" v-if="change0(scope.row.rentalCategory)==1">{{scope.row.rentalCategory}}</el-tag>
    <el-tag  type="info" v-if="change0(scope.row.rentalCategory)==2">{{scope.row.rentalCategory}}</el-tag>
    <el-tag  type="danger" v-if="change0(scope.row.rentalCategory)==3"> {{scope.row.rentalCategory}}</el-tag></div>

  </el-table-column>
  <el-table-column
  prop="operation"
  label="操作"
  width="180">
  <div slot-scope="scope"> <el-button type="text" @click="chakan( scope.row.url )">
    <!-- {{ scope.row.yunheId }} -->
    明细
  </el-button><el-button type="text" @click="chakan( scope.row.url )">
  <!-- {{ scope.row.yunheId }} -->
  发票明细
</el-button> </div>

</el-table-column>
</el-table>



</el-tab-pane>


<el-tab-pane label="租借订单" name="normal">
 <el-table
 :cell-style="callStyle"
 :data="selectnormal(contracts)"
 style="width: 100%">
 <el-table-column
 prop="contractId"
 label="订单Id"
 width="180"
 >
</el-table-column>
<el-table-column
prop="totalAmount"
label="总金额"
width="180">
</el-table-column>
<el-table-column
prop="date"
label="时间"
width="180">
</el-table-column>
<el-table-column
prop="rentalCategory"
label="租售类别"
width="180"> <div slot-scope="scope"> 
  <el-tag  type="primary" v-if="change0(scope.row.rentalCategory)==1">{{scope.row.rentalCategory}}</el-tag>
  <el-tag  type="info" v-if="change0(scope.row.rentalCategory)==2">{{scope.row.rentalCategory}}</el-tag>
  <el-tag  type="danger" v-if="change0(scope.row.rentalCategory)==3"> {{scope.row.rentalCategory}}</el-tag></div>

</el-table-column>
<el-table-column
prop="operation"
label="操作"
width="180">
<div slot-scope="scope"> <el-button type="text" @click="chakan( scope.row.url )">
  <!-- {{ scope.row.yunheId }} -->
  明细
</el-button><el-button type="text" @click="chakan( scope.row.url )">
  <!-- {{ scope.row.yunheId }} -->
  发票明细
</el-button> </div>

</el-table-column>
</el-table>



</el-tab-pane>
<el-tab-pane label="出售订单" name="abnormal">
 <el-table
 :cell-style="callStyle"
 :data="selectabnormal(contracts)"
 style="width: 100%">
 <el-table-column
 prop="contractId"
 label="订单Id"
 width="180"
 >
</el-table-column>
<el-table-column
prop="totalAmount"
label="总金额"
width="180">
</el-table-column>
<el-table-column
prop="date"
label="时间"
width="180">
</el-table-column>
<el-table-column
prop="rentalCategory"
label="租售类别"
width="180"> <div slot-scope="scope"> 
  <el-tag  type="primary" v-if="change0(scope.row.rentalCategory)==1">{{scope.row.rentalCategory}}</el-tag>
  <el-tag  type="info" v-if="change0(scope.row.rentalCategory)==2">{{scope.row.rentalCategory}}</el-tag>
  <el-tag  type="danger" v-if="change0(scope.row.rentalCategory)==3"> {{scope.row.rentalCategory}}</el-tag></div>

</el-table-column>
<el-table-column
prop="operation"
label="操作"
width="180">
<div slot-scope="scope"> <el-button type="text" @click="chakan( scope.row.url )">
  <!-- {{ scope.row.yunheId }} -->
  明细
</el-button><el-button type="text" @click="chakan( scope.row.url )">
  <!-- {{ scope.row.yunheId }} -->
  发票明细
</el-button> </div>

</el-table-column>
</el-table></el-tab-pane>
<el-tab-pane label="进货订单" name="offline">
 <el-table
 :cell-style="callStyle"
 :data="selectoffline(contracts)"
 style="width: 100%">
 <el-table-column
 prop="contractId"
 label="订单Id"
 width="180"
 >
</el-table-column>
<el-table-column
prop="totalAmount"
label="总金额"
width="180">
</el-table-column>
<el-table-column
prop="date"
label="时间"
width="180">
</el-table-column>
<el-table-column
prop="rentalCategory"
label="租售类别"
width="180"> <div slot-scope="scope"> 
  <el-tag  type="primary" v-if="change0(scope.row.rentalCategory)==1">{{scope.row.rentalCategory}}</el-tag>
  <el-tag  type="info" v-if="change0(scope.row.rentalCategory)==2">{{scope.row.rentalCategory}}</el-tag>
  <el-tag  type="danger" v-if="change0(scope.row.rentalCategory)==3"> {{scope.row.rentalCategory}}</el-tag></div>

</el-table-column>
<el-table-column
prop="operation"
label="操作"
width="180">
<div slot-scope="scope"> <el-button type="text" @click="chakan( scope.row.url )">
  <!-- {{ scope.row.yunheId }} -->
  明细
</el-button> <el-button type="text" @click="chakan( scope.row.url )">
  <!-- {{ scope.row.yunheId }} -->
  发票明细
</el-button> </div>

</el-table-column>
</el-table>
</el-tab-pane>
</el-tabs>





</el-main>
</el-container>




</div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'zhangdanguanli',
    data () {
      return {
        activeName:"all",
        contracts:[{
          contractId:10,
          totalAmount:240,
          date:"2017-07-07",
          rentalCategory:"租借",
        },{
          contractId:11,
          totalAmount:500,
          date:"2017-07-07",
          rentalCategory:"进货",
        },{
          contractId:12,
          totalAmount:240,
          date:"2017-07-07",
          rentalCategory:"出售",
        },{
          contractId:13,
          totalAmount:240,
          date:"2017-07-07",
          rentalCategory:"租借",
        },{
          contractId:10,
          totalAmount:240,
          date:"2017-07-07",
          rentalCategory:"租借",
        }],
        
      }
    },
    methods: {
      chakan(){
        this.$router.push({path:"/zhangdan"})
      },
      handleClick(tab, event) {

      },
      selectnormal(data){
       var tableData=new Array();
       for(var i=0;i<data.length;i++){
        if(data[i].rentalCategory=="租借"){
          tableData.push(data[i]);
        }
      }
      return tableData;
    },
    selectabnormal(data){
     var tableData=new Array();
     for(var i=0;i<data.length;i++){
      if(data[i].rentalCategory=="出售"){
        tableData.push(data[i]);
      }
    }
    return tableData;
  },
  selectoffline(data){
   var tableData=new Array();
   for(var i=0;i<data.length;i++){
    if(data[i].rentalCategory=="进货"){
      tableData.push(data[i]);
    }
  }
  return tableData;
},
callStyle({row, column, rowIndex, columnIndex}){
    if( columnIndex === 3){ //指定坐标
      return ""
    }else{
      return ''
    }
  },
  change0(rentalCategory){
    if(rentalCategory=="租借"){
      return 1;
    }
    else if(rentalCategory=="出售"){
      return 2;
    }else{
      return 3;
    }

  },





},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>