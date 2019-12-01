<template>
  <div class="huanzhejiaofei">
   <el-container>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="2" style="font-size: 20px">账单id:{{data.zhangdanId}}</el-col>
        <el-col :span="4">

       </el-col>
      </el-col>
    </el-row>
     <el-divider content-position="left">账单确认</el-divider>
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
label="商品数量"
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
label="总金额"
width="180"> 
</el-table-column>
<el-table-column
prop="limitedTime"
label="限定时间"
width="180"> 
</el-table-column>
</el-table>
<div style="margin-top: 20px">
  <el-row :gutter="20">
    <el-col :span="2"><el-button type="text" icon="el-icon-s-check" @click="dialogVisible = true" >收费结算</el-button>
    </el-col></el-row> </div> 
    <el-dialog
    title="发票信息(交费)"
    :visible.sync="dialogVisible"
    width="30%"
    >
    <el-row :gutter="20">
      <el-col :span="12">发票号:<el-input v-model="invoice.invoiceId"></el-input></el-col>
      <el-col :span="12">客户名称<el-input v-model="invoice.customerName"></el-input></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">交易日期<el-input v-model="invoice.date"></el-input></el-col>
      <el-col :span="12">客户地址
        <el-input v-model="invoice.address"></el-input>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="12">客户手机号<el-input v-model="invoice.telNumber"></el-input></el-col>
    <el-col :span="12">服务类型<el-input v-model="invoice.serviceType"></el-input></el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="12">应收金额<el-input v-model="total" disabled></el-input></el-col>
    <el-col :span="12">税收<el-input v-model="invoice.tax" disabled></el-input></el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="12">商店名称<el-input v-model="invoice.shopName"disabled></el-input></el-col>
    <el-col :span="12">商店联系方式<el-input v-model="invoice.shopTel"disabled></el-input></el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="12">商店地址<el-input v-model="invoice.shopAddress" disabled></el-input></el-col>
  </el-row>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="shoufei" >收费</el-button>
  </span>
</el-dialog>

</el-main>
</el-container>


</div>
</template>
<script src="/vue/vue.min.js"></script>
<script src="/vue/axios.min.js"></script>
<script src="/vue/vue-resource.js"></script>
<script>
  import axios from 'axios'

  export default {
    name: 'huanzhejiaofei',
    data () {
      return {
        selections:[],
       dialogVisible: false,
       options: [{
        value: 'xianjin',
        label: '现金'
      }, {
        value: 'weixin',
        label: '微信'
      }, {
        value: 'zhifubao',
        label: '支付宝'
      }],
      invoice:{
          invoiceId:50,
          customerName:"陈老板",
          date:"2017-07-07",
          address:"商业机密",
          telNumber:13977777777,
          serviceType:"音像租售费",
          tax:0,
          shopName:"江南音像商店",
          shopTel:13799999999,
          shopAddress:"浙江省温州市皮革音像批发中心"
        },
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
      }
    }
  },
  methods: {

    shoufei(){
      this.dialogVisible = false;
      var selections=this.selections;
      var expenseDetail=this.data.expenseDetail;
      for(var i=0;i<selections.length;i++){
        for(var j=0;j<expenseDetail.length;j++){
          if(selections[i].goodsId==expenseDetail[j].goodsId){
            expenseDetail.splice(j,1);
          }
          
        }
      }
      this.$message("收费成功")
    },
   handleSelectionChange(selection){
    this.selections=selection;
   }
  },
  computed:{
    total:function(){
      var selections=this.selections;
      var total=0;
      for(var i=0;i<selections.length;i++){
        total=total+selections[i].totalAmount;
      }
      return total;
    }
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
.el-main {
  border:4px ;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  line-height: 30px;
}
.el-container{
  width:1400px;
}

</style>