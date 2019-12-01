<template>
  <div class="FirstPage">
    
    传过来的参数：{{this.$route.params.username}};{{this.$route.params.password}}
    <div class="space">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstPage',
  data () {
    return {
      
    }
  },
  methods:{

    
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.space{
  background-image:url(../assets/james3.jpg) ;
  width:100%;
  height: 800px
}
.back{

}
</style>