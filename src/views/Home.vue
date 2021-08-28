<template>
  <div class="map-page">
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      color="primary"
      @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>

  </div>
</template>

<script>

// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  }
}
</script>
<style>
.hidden-button {
  display: none;
}

.map-page {
  padding-top: 20px;
}
.v-parallax__image-container {
  opacity: 1;
}
#litmap .v-parallax__image-container {
  opacity: 0.5;
}
</style>
