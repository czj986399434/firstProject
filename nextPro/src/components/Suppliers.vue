<template>
  <div class="suppliers">
    <el-card class="box-card">
      <el-table
      :data="suppliers"
      style="width: 100%">
      <el-table-column
        prop="supplierId"
        label="供货商Id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="供货商名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="cooperationFrequency"
        label="交易次数"
        width="180">
      </el-table-column>
      <el-table-column
        prop="totalAmount"
        label="总金额">
      </el-table-column>
      <el-table-column
        prop="address"
        label="供货商地址">
      </el-table-column>
    </el-table>
</el-card>
   </div>
</template>

<script>
export default {
  name: 'suppliers',
  data () {
    return {
      suppliers:[{
        supplierId:1,
        name:"刘老板",
        cooperationFrequency:18,
        totalAmount:10800,
        address:"辽宁省沈阳市家里蹲",
      },{
        supplierId:2,
        name:"霍老板",
        cooperationFrequency:15,
        totalAmount:5000,
        address:"山西省不知道什么市",
      },{
        supplierId:3,
        name:"刘老板",
        cooperationFrequency:12,
        totalAmount:3000,
        address:"四川省自贡市",
      },]
    }
  },
  methods:{

    
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-card {
    width: 1000px;
  }
</style>