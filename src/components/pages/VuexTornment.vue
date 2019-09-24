<template>
<v-container grid-list-xs,sm,md,lg,xl>
  <SearchBar />
  <v-layout row justify-space-between>
    <v-flex xs16 sm8 md6 lg4 v-for="(item, index) in songs" :key="index">
      <v-card flat class="text-xs-center ma-3" height="98%">
        <h1> {{ item.result.title}} </h1>
        <h3> {{ item.result.full_title}} </h3>
        <h4>{{ item.result.path}}</h4>
        <img width="200" :src="item.result.song_art_image_url" alt="">
        <v-btn @click="goToSong(song.id)">open</v-btn>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import SearchBar from './SearchBar.vue'
import axios from 'axios';
import Song from './Song.vue';
import token from '../../token.js'
import {
  mapState
} from 'vuex'
export default {
  name: 'About',
  components: {
    SearchBar,
    Song
  },
  computed: mapState([
    'songs'
  ]),
  methods: {
    goToSong(id) {
      this.$router.push({
        name: "DetailedSong",
        params: {
          songId: id
        }
      })
    }
  },
}
</script>

<style lang="css" scoped>
</style>
