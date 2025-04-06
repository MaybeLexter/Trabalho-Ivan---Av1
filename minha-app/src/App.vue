<template>
  <v-app>
    <CasteloNav />
    <v-main class="main-content">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import CasteloNav from '@/components/CasteloNav.vue'
</script>

<style>

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}


.v-application {
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),
    url('https://cdna.artstation.com/p/assets/images/images/083/367/432/original/kobe-ouano-vampire-castle-watermarked.gif?1735733105') !important;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  min-height: 100vh;
}


.main-content {
  padding-top: 64px !important;
  min-height: 100vh;
  margin: 0;
  padding-left: 0 !important;
  padding-right: 0 !important;
}


.container {
  width: 100%;
  max-width: 100% !important;
  padding: 16px;
}


.v-app-bar {
  position: fixed;
  width: 100%;
  z-index: 1000;
  background-color: rgba(20, 20, 20, 0.9) !important;
  backdrop-filter: blur(8px);
}
</style>