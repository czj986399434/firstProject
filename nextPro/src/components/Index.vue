<template>
  <div class="index">
    position:{{position}}
   </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
       position:this.$route.query.position
    }
  },
  methods:{

    
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>