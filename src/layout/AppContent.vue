<template>
  <v-main class="grey lighten-5" >
    <v-container v-if="($route.name == 'Login' || $route.name == 'Registration')" fill-height fluid>
       <v-row align="center"
      justify="center">
      <router-view ></router-view>
      </v-row>
    </v-container>    
    <v-container class="white" style="box-shadow: 0 0 10px rgba(0,0,0,0.1);" v-else>
      <router-view ></router-view>
    </v-container>    
  </v-main>
</template>

<script>
export default {}
</script>

<style>
</style>
