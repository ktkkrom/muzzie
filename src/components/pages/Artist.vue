<template lang="html">
  <div>
    <!-- <v-img :src="`${header_image_url}`" width="200"></v-img> -->
    <v-card-title class="headline">
      {{ name }}
    </v-card-title>
    <v-card-text>
      <span> followers_count - {{ followers_count }} </span>
      <div class="body-1 black--text">

      </div>
    </v-card-text>
  </div>
</template>

<script>
import SearchArtists from './SearchArtists.vue'
export default {
  name: 'Artist',
  props: {
    followers_count: Number,
    name: String,
    header_image_url: String
  }
}
</script>

<style lang="css" scoped>
</style>
