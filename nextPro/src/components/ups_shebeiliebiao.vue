<template>
  <div class="hups_shebeiliebiao">
<el-container>
  <el-header>
<el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '../index' }">监控中心</el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/ups_yonghuliebiao' }">用户列表</el-breadcrumb-item>
  <el-breadcrumb-item>设备列表</el-breadcrumb-item>

</el-breadcrumb>
  </el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main><el-tabs v-model="data.activeName" @tab-click="handleClick">
    <el-tab-pane label="全部" name="all">
 <el-table
    :cell-style="callStyle"
    :data="data.tableData"
    style="width: 100%">
    <el-table-column
      prop="deviceName"
      label="设备名称"
      width="180"
>
    </el-table-column>
    <el-table-column
      prop="yunheId"
      label="云盒Id"
      width="180">
    </el-table-column>
    <el-table-column
      prop="deviceCategory"
      label="设备类别"
      width="180">
    </el-table-column>
        <el-table-column
      prop="deviceModel"
      label="设备型号"
      width="180">
    </el-table-column>
     <el-table-column
      prop="deviceState"
      label="设备状态"
      width="180"> <div slot-scope="scope"> 
        <el-tag  type="primary" v-if="change0(scope.row.deviceState)=='a'">{{scope.row.deviceState}}</el-tag>
        <el-tag  type="info" v-if="change0(scope.row.deviceState)=='c'">{{scope.row.deviceState}}</el-tag>
         <el-tag  type="danger" v-if="change0(scope.row.deviceState)=='b'"> {{scope.row.deviceState}}</el-tag></div>

    </el-table-column>
     <el-table-column
      prop="operation"
      label="操作"
      width="180">
     <div slot-scope="scope"> <el-button type="primary" @click="chakan( scope.row.url )">
<!-- {{ scope.row.yunheId }} -->
查看
     </el-button> </div>

    </el-table-column>
  </el-table>



    </el-tab-pane>

 
  <el-tab-pane label="正常设备" name="normal">
 <el-table
    :cell-style="callStyle"
    :data="selectnormal(data.tableData)"
    style="width: 100%">
    <el-table-column
      prop="deviceName"
      label="设备名称"
      width="180"
>
    </el-table-column>
    <el-table-column
      prop="yunheId"
      label="云盒Id"
      width="180">
    </el-table-column>
    <el-table-column
      prop="deviceCategory"
      label="设备类别"
      width="180">
    </el-table-column>
        <el-table-column
      prop="deviceModel"
      label="设备型号"
      width="180">
    </el-table-column>
     <el-table-column
      prop="deviceState"
      label="设备状态"
      width="180"> <div slot-scope="scope"> 
        <el-tag  type="primary" v-if="change0(scope.row.deviceState)=='a'">{{scope.row.deviceState}}</el-tag>
         <el-tag  type="danger" v-if="change0(scope.row.deviceState)=='b'"> {{scope.row.deviceState}}</el-tag>
      <el-tag  type="info" v-if="change0(scope.row.deviceState)=='c'"> {{scope.row.deviceState}}</el-tag></div>

    </el-table-column>
     <el-table-column
      prop="operation"
      label="操作"
      width="180">
     <div slot-scope="scope"> <el-button type="primary" @click="chakan( scope.row.url )">
<!-- {{ scope.row.yunheId }} -->
查看
     </el-button> </div>

    </el-table-column>
  </el-table>



    </el-tab-pane>
    <el-tab-pane label="异常设备" name="abnormal">
     <el-table
    :cell-style="callStyle"
    :data="selectabnormal(data.tableData)"
    style="width: 100%">
    <el-table-column
      prop="deviceName"
      label="设备名称"
      width="180"
>
    </el-table-column>
    <el-table-column
      prop="yunheId"
      label="云盒Id"
      width="180">
    </el-table-column>
    <el-table-column
      prop="deviceCategory"
      label="设备类别"
      width="180">
    </el-table-column>
        <el-table-column
      prop="deviceModel"
      label="设备型号"
      width="180">
    </el-table-column>
     <el-table-column
      prop="deviceState"
      label="设备状态"
      width="180"> <div slot-scope="scope"> 
        <el-tag  type="primary" v-if="change0(scope.row.deviceState)=='a'">{{scope.row.deviceState}}</el-tag>
        <el-tag  type="info" v-if="change0(scope.row.deviceState)=='c'">{{scope.row.deviceState}}</el-tag>
         <el-tag  type="danger" v-if="change0(scope.row.deviceState)=='b'"> {{scope.row.deviceState}}</el-tag></div>

    </el-table-column>
     <el-table-column
      prop="operation"
      label="操作"
      width="180">
     <div slot-scope="scope"> <el-button type="primary" @click="chakan( scope.row.url )">
<!-- {{ scope.row.yunheId }} -->
查看
     </el-button> </div>

    </el-table-column>
  </el-table></el-tab-pane>
    <el-tab-pane label="离线设备" name="offline">
 <el-table
    :cell-style="callStyle"
    :data="selectoffline(data.tableData)"
    style="width: 100%">
    <el-table-column
      prop="deviceName"
      label="设备名称"
      width="180"
>
    </el-table-column>
    <el-table-column
      prop="yunheId"
      label="云盒Id"
      width="180">
    </el-table-column>
    <el-table-column
      prop="deviceCategory"
      label="设备类别"
      width="180">
    </el-table-column>
        <el-table-column
      prop="deviceModel"
      label="设备型号"
      width="180">
    </el-table-column>
     <el-table-column
      prop="deviceState"
      label="设备状态"
      width="180"> <div slot-scope="scope"> 
        <el-tag  type="primary" v-if="change0(scope.row.deviceState)=='a'">{{scope.row.deviceState}}</el-tag>
        <el-tag  type="info" v-if="change0(scope.row.deviceState)=='c'">{{scope.row.deviceState}}</el-tag>
         <el-tag  type="danger" v-if="change0(scope.row.deviceState)=='b'"> {{scope.row.deviceState}}</el-tag></div>

    </el-table-column>
     <el-table-column
      prop="operation"
      label="操作"
      width="180">
     <div slot-scope="scope"> <el-button type="primary" @click="chakan( scope.row.url )">
<!-- {{ scope.row.yunheId }} -->
查看
     </el-button> </div>

    </el-table-column>
  </el-table>
    </el-tab-pane>
  </el-tabs>

 



</el-main>
  </el-container>
</el-container>



  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ups_shebeiliebiao',
  data () {
    return {
      data: {
            activeName: 'second',
            tableData: [{
         deviceName: '2016-05-02',
          yunheId: '陈智健',
          deviceCategory: '上海市普陀区金沙江路 1518 弄',
          deviceModel:"aaa",
          deviceState:"正常",
          url:"../ups_shebeiliebiao",
        }, {
          deviceName: '2016-05-02',
          yunheId: '王小虎',
          deviceCategory: '上海市普陀区金沙江路 1518 弄',
          deviceModel:"aaa",
          deviceState:"异常",
          url:"../ups_shebeiliebiao",
        }, {
           deviceName: '2016-05-02',
          yunheId: '王小虎',
          deviceCategory: '上海市普陀区金沙江路 1518 弄',
          deviceModel:"aaa",
          deviceState:"正常",
          url:"../ups_shebeiliebiao",
        }, {
            deviceName: '2016-05-02',
          yunheId: '王小虎',
          deviceCategory: '上海市普陀区金沙江路 1518 弄',
          deviceModel:"aaa",
          deviceState:"离线",
          url:"../ups_shebeiliebiao",
        }
        , {
          deviceName: '2016-05-02',
          yunheId: '王小虎',
          deviceCategory: '上海市普陀区金沙江路 1518 弄',
          deviceModel:"aaa",
          deviceState:"离线",
          url:"../ups_shebeiliebiao",
        }, {
          deviceName: '2016-05-02',
          yunheId: '王小虎',
          deviceCategory: '上海市普陀区金沙江路 1518 弄',
          deviceModel:"aaa",
          deviceState:"离线",
          url:"../ups_shebeiliebiao",
        }, {
          deviceName: '2016-05-02',
          yunheId: '王小虎',
          deviceCategory: '上海市普陀区金沙江路 1518 弄',
          deviceModel:"aaa",
          deviceState:"异常",
          url:"../ups_shebeiliebiao",
        }]
      }
    }
  },
  methods: {
handleClick(tab, event) {
        console.log(tab, event);
      },
selectnormal(data){
       var tableData=new Array();
       for(var i=0;i<data.length;i++){
        if(data[i].deviceState=="正常"){
          tableData.push(data[i]);
        }
       }
       return tableData;
},
selectabnormal(data){
       var tableData=new Array();
       for(var i=0;i<data.length;i++){
        if(data[i].deviceState=="异常"){
          tableData.push(data[i]);
        }
       }
       return tableData;
},
selectoffline(data){
       var tableData=new Array();
       for(var i=0;i<data.length;i++){
        if(data[i].deviceState=="离线"){
          tableData.push(data[i]);
        }
       }
       return tableData;
},

     chakan(name){
      // var str=''
      // switch(name) {
      //   case '王小虎':
      //      alert("成功了");
      //       break;
      //   default:
      //       str=name;
      // } 
      // return str;
      window.location.href=name;
    },
    //在method里面写上方法
callStyle({row, column, rowIndex, columnIndex}){
    if( columnIndex === 3){ //指定坐标
        return 'background:pink'
    }else{
        return ''
    }
},
change0(deviceState){
  if(deviceState=="正常"){
    return "a";
  }
  else if(deviceState=="异常"){
    return "b";
  }else{
    return "c";
  }
 
},
 




},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>