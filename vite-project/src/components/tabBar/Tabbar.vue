<template>
  <van-tabbar v-model="active" active-color="#fff" inactive-color="#fff">
  <van-tabbar-item class="back"  to="/frist" icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item class="back" to="/huodong" icon="point-gift-o">市场</van-tabbar-item>
  <van-tabbar-item class="back" to="/shichang" icon="friends-o">活动</van-tabbar-item>
  <van-tabbar-item class="back" to="/my" icon="setting-o">我的</van-tabbar-item>
</van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  computed:{
    active:{
      
        get(){
          
            return this.$route.meta.num
        },
        set(){}
    }
  }
}
</script>

<style scoped>

.back{
  background-color: #2F3042 ;
}


</style>