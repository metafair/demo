<template>
  <div>
  <router-view></router-view>
  <tabbar/>
  </div>
</template>

<script>
import tabbar from "./components/tabBar/Tabbar.vue"
export default {
  components:{
    tabbar
  }

}
</script>

<style>

</style>
