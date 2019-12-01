<template>
  <div class="houtaiguanli">
     <el-table
    :data="customers"
    style="width: 800px;"
    max-height="250">
    <el-table-column
      fixed
      prop="customerId"
      label="Id"
      width="120">
    </el-table-column>
    <el-table-column
      prop="customerName"
      label="客户姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="telNumber"
      label="电话号码"
      width="120">
    </el-table-column>
    <el-table-column
      prop="level"
      label="会员等级"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, customers)"
          type="text"
          size="small">
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-button type="primary" @click="addCus">添加</el-button>
  <el-dialog
      title="添加地点"
      :visible.sync="dialogVisible"
      width="30%"
      >
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="emptyBox">姓名:</div>
        </el-col>
        <el-col :span="12">
          <el-input v-model="add.customerName"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="emptyBox">电话:</div>
        </el-col>
        <el-col :span="12">
          <el-input v-model="add.phoneNumber  "></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="emptyBox">等级:</div>
        </el-col>
        <el-col :span="12">
          <el-input-number v-model="add.level" :min="0" :max="6" label="描述文字"></el-input-number>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="emptyBox">地址:</div>
        </el-col>
        <el-col :span="12">
          <el-input v-model="add.address"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="emptyBox"></div>
        </el-col>
        <el-col :span="4">
           <el-button type="primary" @click="addMarker">确 定</el-button>
        </el-col>
        <el-col :span="4">
         </el-col>

      </el-row>
            
           
      
      
      
      
</el-dialog> 
   </div>
</template>

<script>
export default {
  name:"houtaiguanli",
    data() {
      return {
        dialogVisible:true,
        add:{
          customerId:5,
          customerName:"",
          address:"",
          level:"",
          phoneNumber:"",
          preference:[]
        },
        customers:[{
          customerId:1,
          customerName:"刘老板",
          telNumber:13333333333,
          level:3,
          preference:["青春","热血"],
          address:"辽宁市沈阳市不知道哪个街道"
        },{
          customerId:2,
          customerName:"杨老板",
          telNumber:13355555555,
          level:0,
          preference:["爱情","校园"],
          address:"云南省不造哪个市不知道哪个街道"
        },{
          customerId:3,
          customerName:"刘老板",
          telNumber:13366666666,
          level:3,
          preference:["健身","沙雕"],
          address:"四川省自贡市不知道哪个街道"
        },{
          customerId:4,
          customerName:"陈老板",
          telNumber:13377777777,
          level:4,
          preference:["搞笑","热血"],
          address:"浙江省瑞安市不知道哪个街道"
        }],
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    },
      methods: {
        addMarker(){
          this.dialogVisible=false;
          var add=this.add;
          var customers=this.customers;
          customers.push(add)
          this.$message({
            type:"success",
            message:"添加成功",
          })
        },
        addCus(){
          this.dialogVisible=true;
        },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.amap-wrapper {
    width: 1440px;
    height: 600px;

  }
  .fontPretty{
    font-family: sans-serif;
    font-size: 20px;
    text-align: center;
  }
  .emptyBox{
    width: 50px;
    height: 50px;
    font-size: 15px;
    line-height: 50px;
    font-weight: bold;
  }
</style>