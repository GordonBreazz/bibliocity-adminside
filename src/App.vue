<template>
  <v-app>
    <app-header />
    <app-content />
    <app-footer />
  </v-app>
</template>

<script>
import AppHeader from './layout/AppHeader'
import AppContent from './layout/AppContent'
import AppFooter from './layout/AppFooter'

export default {

  components: {
    AppHeader,
    AppContent,
    AppFooter
  },
  created () {
     document.title = "Библиогород МАУ ЦБС г. Улан-Удэ";
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
