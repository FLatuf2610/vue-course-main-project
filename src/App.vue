<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Layout/Navbar.vue';
export default{
  components:{Navbar}
}
</script>

<template>
  <Navbar/>
  <router-view></router-view>
</template>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
}

</style>
