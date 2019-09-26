<template>
<div>
  <v-card class="mx-auto" max-width="610">
    <v-img :src="`${header_image_url}`" width="600" height="400"></v-img>
    <v-card-title height="50">
      <div> {{ title }}</div>
    </v-card-title>
    <v-card-actions>
      <v-btn class="mx-2" fab dark small color="deep-purple">
        <v-icon dark>mdi-heart</v-icon>
      </v-btn>
      <div class="flex-grow-1"></div>
    </v-card-actions>
  </v-card>
</div>
</template>
<script>
export default {
  name: 'Song',
  data: () => ({
    //
  }),
  props: {
    id: Number,
    title: String,
    header_image_url: String
  }
}
</script>

<style lang="css" scoped>
v-img {
  margin-left: 100px;
}
</style>
