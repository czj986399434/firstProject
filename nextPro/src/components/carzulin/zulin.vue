<template>
  <div class="zulin">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="可租赁" name="first">
       <el-table
       ref="multipleTable"
       :data="data.expenseDetail"
       tooltip-effect="dark"
       style="width: 100%"
       @selection-change="handleSelectionChange"
       >
       <el-table-column
       type="selection"
       width="55">
     </el-table-column>
     <el-table-column
     prop="goodsId"
     label="商品Id"
     width="180"
     >
   </el-table-column>
   <el-table-column
   prop="goodsTypeId"
   label="商品类型"
   width="180">
 </el-table-column>
 <el-table-column
 prop="number"
 label="商品剩余数量"
 width="180">
</el-table-column>
<el-table-column
prop="rentalCategory"
label="租售类别"
width="180">
</el-table-column>
<el-table-column
prop="date"
label="时间"
width="180"> 

</el-table-column>
<el-table-column
prop="totalAmount"
label="单价"
width="180"> 
</el-table-column>
<el-table-column
prop="limitedTime"
label="限定时间"
width="180"> 
</el-table-column>
</el-table>

</el-tab-pane>
<el-tab-pane label="可购买" name="second">
 <el-table
 ref="multipleTable"
 :data="data.expenseDetail2"
 tooltip-effect="dark"
 style="width: 100%"
 @selection-change="handleSelectionChange"
 >
 <el-table-column
 type="selection"
 width="55">
</el-table-column>
<el-table-column
prop="goodsId"
label="商品Id"
width="180"
>
</el-table-column>
<el-table-column
prop="goodsTypeId"
label="商品类型"
width="180">
</el-table-column>
<el-table-column
prop="number"
label="商品剩余数量"
width="180">
</el-table-column>
<el-table-column
prop="rentalCategory"
label="租售类别"
width="180">
</el-table-column>
<el-table-column
prop="date"
label="时间"
width="180"> 

</el-table-column>
<el-table-column
prop="totalAmount"
label="单价"
width="180"> 
</el-table-column>
<el-table-column
prop="limitedTime"
label="限定时间"
width="180"> 
</el-table-column>
</el-table></el-tab-pane>
<el-tab-pane label="不可用" name="third">
 <el-table
 ref="multipleTable"
 :data="data.expenseDetail3"
 tooltip-effect="dark"
 style="width: 100%"
 @selection-change="handleSelectionChange"
 >
 <el-table-column
 prop="goodsId"
 label="商品Id"
 width="180"
 >
</el-table-column>
<el-table-column
prop="goodsTypeId"
label="商品类型"
width="180">
</el-table-column>
<el-table-column
prop="number"
label="商品剩余数量"
width="180">
</el-table-column>
<el-table-column
prop="rentalCategory"
label="租售类别"
width="180">
</el-table-column>
<el-table-column
prop="date"
label="时间"
width="180"> 

</el-table-column>
<el-table-column
prop="totalAmount"
label="单价"
width="180"> 
</el-table-column>
<el-table-column
prop="limitedTime"
label="限定时间"
width="180"> 
</el-table-column>
</el-table></el-tab-pane>
</el-tabs>
<el-button type="primary">加入订单</el-button>
</div>
</template>

<script>
  export default {
    name: 'zulin',
    data () {
      return {
        activeName: 'second',
        data: {
          zhangdanId:10,
          expenseDetail:[
          {
            goodsId:50,
            goodsTypeId:3,
            number:10,
            rentalCategory:1,
            date:"2017-07-07",
            totalAmount:60,
            limitedTime:"2017-07-11"
          },{
            goodsId:60,
            goodsTypeId:3,
            number:10,
            rentalCategory:1,
            date:"2017-07-07",
            totalAmount:60,
            limitedTime:"2017-07-11"
          },{
            goodsId:70,
            goodsTypeId:3,
            number:10,
            rentalCategory:1,
            date:"2017-07-07",
            totalAmount:60,
            limitedTime:"2017-07-11"
          },
          {
            goodsId:40,
            goodsTypeId:2,
            number:10,
            rentalCategory:1,
            date:"2017-07-07",
            totalAmount:60,
            limitedTime:"2017-07-11"
          }],
          expenseDetail2:[
          {
            goodsId:50,
            goodsTypeId:3,
            number:10,
            rentalCategory:2,
            date:"2017-07-07",
            totalAmount:60,
            limitedTime:"2017-07-11"
          },{
            goodsId:60,
            goodsTypeId:3,
            number:10,
            rentalCategory:2,
            date:"2017-07-07",
            totalAmount:60,
            limitedTime:"2017-07-11"
          },{
            goodsId:70,
            goodsTypeId:3,
            number:10,
            rentalCategory:2,
            date:"2017-07-07",
            totalAmount:60,
            limitedTime:"2017-07-11"
          },
          {
            goodsId:40,
            goodsTypeId:2,
            number:10,
            rentalCategory:2,
            date:"2017-07-07",
            totalAmount:60,
            limitedTime:"2017-07-11"
          }],
          expenseDetail3:[
          {
            goodsId:50,
            goodsTypeId:3,
            number:10,
            rentalCategory:3,
            date:"2017-07-07",
            totalAmount:60,
            limitedTime:"2017-07-11"
          },{
            goodsId:60,
            goodsTypeId:3,
            number:10,
            rentalCategory:3,
            date:"2017-07-07",
            totalAmount:60,
            limitedTime:"2017-07-11"
          },{
            goodsId:70,
            goodsTypeId:3,
            number:10,
            rentalCategory:3,
            date:"2017-07-07",
            totalAmount:60,
            limitedTime:"2017-07-11"
          },
          {
            goodsId:40,
            goodsTypeId:2,
            number:10,
            rentalCategory:3,
            date:"2017-07-07",
            totalAmount:60,
            limitedTime:"2017-07-11"
          }],
        }
      }
    },
    methods:{

     handleClick(tab, event) {
      console.log(tab, event);
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>