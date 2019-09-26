<template>
<div>
  <SearchArtists />
  <v-container grid-list-xs,sm,md,lg,xl>
    <v-layout column>
      <v-flex justify-center xs16 sm8 md6 lg4 v-for="item in things">
        <v-card flat class="text-xs-center ma-3" height="98%">
          <h3> {{ item.title}} </h3>
          <img width="50" :src="item.header_image_thumbnail_url" alt="">
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
import SearchArtists from './SearchArtists.vue'
import axios from 'axios';
import token from '../../token.js'
import {
  mapState
} from 'vuex'
export default {
  name: 'SongList',
  components: {
    SearchArtists
  },
  computed: mapState([
    'things'
  ]),
}
</script>

<style lang="css" scoped>
</style>
