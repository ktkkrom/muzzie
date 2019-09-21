<template lang="html">
  <div>
    <v-img :src="`${header_image_url}`" width="200"></v-img>
    <v-card-title class="headline">
      {{ title }}
    </v-card-title>
    <v-card-text>
      <span> id - {{ id }} </span>
      <div class="body-1 black--text">

      </div>
    </v-card-text>
  </div>
</template>

<script>
export default {
  name: 'Song',
  props: {
    id: Number,
    title: String,
    header_image_url: String
  }
}
</script>

<style lang="css" scoped>
</style>
