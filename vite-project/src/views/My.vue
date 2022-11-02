<template>
  <div>
    <p @click="dian">点击跳转到登录页</p>
  </div>
</template>

<script>
export default {
  data() {
      return {
         
      }
  },
  methods: {
      dian() {

          this.$router.push("/login");
      },
      
      },


  }










  
</script>

<style>

</style>