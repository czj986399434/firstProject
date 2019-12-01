<template>
  <div class="yonghuzhongxin" >

   <el-tabs tab-position="left"  style="width: 800px;" type="border-card">
    <el-tab-pane label="首页">
      <el-avatar> user </el-avatar>
      <el-row >
        <el-col :span="2"></el-col>
        <el-col :span="2"><el-tag><span>Lv3</span></el-tag></el-col>
        <el-col :span="6"><el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="success" ></el-progress></el-col>
        <el-col :span="6"></el-col>
      </el-row>
      <div class="rows">
        <div >姓名:</div><el-input
        placeholder="请输入内容"
        v-model="data.name"
        :disabled="true"
        class="input1">
      </el-input>
      <div class="buqi"></div>
    </div>
    <div class="rows">
      <div>号码:</div>
      <el-input
      placeholder="请输入内容"
      v-model="data.phoneNum"
      :disabled="true"
      class="input1">
    </el-input>
    <div class="buqi"></div>
  </div>
  <div class="rows">
      <div>出生:</div>
      <el-date-picker
      v-model="data.birth"
      type="date"
      placeholder="选择日期"
      class="input1">
    </el-date-picker>
    <div class="buqi"></div>
  </div>
   <div class="rows">
      <div>地址:</div>
      <el-input
      placeholder="请输入内容"
      v-model="data.address"
      @blur="update"
      class="input1">
    </el-input>
    <div class="buqi"></div>
  </div>
  <div class="rows">
      <div>爱好:</div>
      <el-tag
      style="margin-left: 20px"
  :key="tag"
  v-for="tag in data.hobbies"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)">
  {{tag}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisible"
  v-model="inputValue"
  ref="saveTagInput"
  size="small"
  @keyup.enter.native="handleInputConfirm"
  @blur="handleInputConfirm"

>
</el-input>
<el-button v-else class="button-new-tag" style=" margin-left: 20px"size="small" @click="showInput">+ New Tag</el-button>

    <div class="buqi"></div>
  </div>
<div class="rows">
      <div>定位:</div>
      <div class="input1" style="text-indent: 2em;font-style: italic;">您是一位苍老的{{ageRange}}后，却依旧爱好<div v-for="hobby in data.hobbies" style="display: inline">{{hobby}},</div>真是着实令人感动</div>
    <div class="buqi"></div>
  </div>
</el-tab-pane>
<el-tab-pane label="借买详情">
<el-table
 class="table11"
    :data="data.orders"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="rentalCategory"
      label="租借种类"
      width="120">
    </el-table-column>
    <el-table-column
      prop="goodTypeName"
      label="物品类型"
      width="120">
    </el-table-column>
    <el-table-column
      prop="goodsName"
      label="物品名称">
    </el-table-column>
    <el-table-column
      prop="rentalAmount"
      label="租买数目"
      width="120">
    </el-table-column>
    <el-table-column
      prop="rentalTime"
      label="借买日期"
      width="120">
    </el-table-column>
    <el-table-column
      prop="deadLine"
      label="限定日期"
      width="120">
    </el-table-column>
    <el-table-column
      prop="exceedTime"
      label="返还日期"
      width="120">
    </el-table-column>
    <el-table-column
      prop="exceedAmount"
      label="返还数目"
      width="120">
    </el-table-column>
    <el-table-column
      prop="state"
      label="状态"
      width="120">
    </el-table-column>
  </el-table>





</el-tab-pane>
<el-tab-pane label="会员权益"><el-steps  direction="vertical" :active="3">
  <el-step title="等级 1" description="您可以，不，您基本什么都不可以，只能进行购买"></el-step>

  <el-step title="等级 2" description="您可以进行租借"></el-step>
  <el-step title="等级 3" description="您可以享受专属推荐"></el-step>
  <el-step title="等级 4" description="您可以享受面向高级会员的折扣"></el-step>

  <el-step title="等级 5" description="您的可借数目加4"></el-step>
  <el-step title="等级 6" description="您可以获得优先通道"></el-step>
  <el-step title="等级 7" description="更多功能尽请期待"></el-step>

</el-steps></el-tab-pane>
</el-tabs>
</div>
</template>

<script>
  export default {
    name: 'yonghuzhongxin',
    data () {
      return {
        data:{
          phoneNum:13940000000,
          name:"陈智健",
          address:"浙江省温州皮革中心",
          birth:"1998-04-27",
          hobbies:["热血","搞笑"],
         orders:[{
          rentalCategory:"租借",
          goodTypeName:"cd",
          goodsName:"人生无限公司",
          rentalTime:"2019-11-24",
          deadLine:"2019-11-28",
          rentalAmount:1,
          exceedTime:"2018-11-26",
          exceedAmount:1,
          state:"正常"
        },{
          rentalCategory:"购买",
          goodTypeName:"录像带",
          goodsName:"人生无限公司",
          rentalTime:"2019-11-24",
          rentaldAmount:1,
          state:"失效"
        },{
          rentalCategory:"租借",
          goodTypeName:"dvd",
          goodsName:"人生无限公司",
          rentalTime:"2019-11-24",
          deadLine:"2019-11-28",
          rentalAmount:1,
          exceedTime:"2018-11-29",
          exceedAmount:1,
          state:"超时"
        },]
        },

        inputVisible:false,
        inputValue: '',
        imgURL:'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        isCollapse: true,
        srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ]
      }
    },
    methods:{
      tableRowClassName({row, rowIndex}) {
        console.log(row.state)
        if (row.state === "超时") {
          return 'warning-row';
        } else if (row.state === "失效") {
          return 'info-row';
        }
        return '';
      },
     update(){
      this.$message({
        type:"success",
        message:"修改成功"
      })
     },
     handleClose(tag) {
        this.data.hobbies.splice(this.data.hobbies.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.data.hobbies.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }


    },
    computed:{
      ageRange(){
        var birth=this.data.birth;
        var births=birth.split("-");
        var year=births[0].split("");
        if(year[2]==9){
          if(year[3]>=5){
            return '95';
          }
          else{
            return '120';
          }
        }
        else if(year[2]==0){
          return "00";
        }
        else if(year[2]==8){
          return "80";
        }
      }
    },
    mounted(){
      var aaa=document.querySelectorAll(".warning-row");
      for(var i=0;i<aaa.length;i++){
         aaa[i].style.backgroundColor="#F56C6C"
    }
     var bbb=document.querySelectorAll(".info-row");
      for(var i=0;i<bbb.length;i++){
          
           bbb[i].style.background="oldlace"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rows{
  height: 50px;
  width: 500px;
  display: flex;
  align-items: center;
}
div div div{
  flex-grow: 1;
}
.input1{
  flex-grow:9;
  width: 50px;
}
.buqi{
  flex-grow:5;
}
.el-table .warning-row {
    background: oldlace;
  }

.el-table .info-row {
    background-color: #f0f9eb;
  }
</style>