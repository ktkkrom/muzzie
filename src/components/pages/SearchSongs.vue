<template lang="html">
<v-container grid-list-xs,sm,md,lg,xl>
  <SearchBar @searchSongs="searchSongs"/>
  <v-layout row  justify-space-between>
    <v-flex xs16 sm8 md6 lg4 v-for="song in songs" :key="song.song">
      <v-card  flat class="text-xs-center ma-3" height="98%">
        <Song
          :id="song.id"
          :title="song.title"
          :header_image_url="song.header_image_url"
          :annotation_count="song.annotation_count"
        />
        <!-- :url="song.multimedia[0].url" -->
        <v-btn @click="goToSong(song.id)">open</v-btn>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import SearchBar from './SearchBar.vue';
import Song from './Song.vue';
import axios from 'axios';
import token from '../../token.js'

export default {
  name: 'SearchSongs',
  components: {
    SearchBar,
    Song
  },
  data: () => ({
    songs: [],
    token: token,
  }),
  methods: {
    searchSongs(word) {
      axios.get(`https://api.genius.com/search?q=${word}&access_token=${this.token}`)
        .then(response => {
          this.songs = response.data.response.hits[1]
          console.log(response.data.response.hits[1].header_image_url)
        });
    },
    goToSong(id) {
      this.$router.push({
        name: "DetailedSong",
        params: {
          songId: id
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
