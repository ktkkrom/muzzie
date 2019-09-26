<template lang="html">
  <div>
    <v-toolbar>
      <v-toolbar-title ><img src="https://img.icons8.com/wired/64/000000/music.png"></v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-toolbar-items>
        <v-btn text ><router-link class="deep-purple--text router-link" to="/songs">songs</router-link></v-btn>
        <v-btn text><router-link  class="router-link deep-purple--text" to="/artists">artists</router-link></v-btn>
        <v-btn text><router-link class="router-link deep-purple--text" to="/about">about</router-link></v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="css" scoped>
a {  text-decoration: none;}
</style>
