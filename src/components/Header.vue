<template lang="html">
  <div>

    <v-toolbar>
      <v-toolbar-title>Muzzor</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn text><router-link class="router-link" to="/songs">songs</router-link></v-btn>
        <v-btn text><router-link class="router-link" to="/about">about</router-link></v-btn>
          <v-btn text><router-link class="router-link" to="/artists">artists</router-link></v-btn>
        <v-btn text>ghhghgg</v-btn>
        <v-btn text>fdf</v-btn>


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
</style>
