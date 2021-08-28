<template>
  <v-app>
    <app-nav-drawer />
    <app-header />
    <app-content />
    <app-footer />
  </v-app>
</template>

<script>
import AppNavDrawer from './layout/AppNavDrawer'
import AppHeader from './layout/AppHeader'
import AppContent from './layout/AppContent'
import AppFooter from './layout/AppFooter'

export default {
  data () {
    return {
    }
  },
  components: {
    AppNavDrawer,
    AppHeader,
    AppContent,
    AppFooter
  },
  created () {
    // document.title = "Библиогород МАУ ЦБС г. Улан-Удэ";
  }
}
