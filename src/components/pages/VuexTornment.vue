<template>
<v-container grid-list-xs,sm,md,lg,xl>
  <SearchBar />
  <v-layout row justify-space-between>
    <v-flex xs16 sm8 md6 lg4 v-for="(item, index) in songs" :key="index">
      <v-card flat class="text-xs-center ma-3" height="98%">
        <h1> {{ item.result.title}} </h1>
        <h3> {{ item.result.full_title}} </h3>
        <span>{{ item.result.path}}</span>
        <img width="200" :src="item.result.song_art_image_url" alt="">
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
  mounted() {
    this.$store.dispatch('loadSongs');
    this.$store.commit('increment', this.keyWord);
  },
  computed: mapState([
    'songs'
  ])
}
</script>

<style lang="css" scoped>
</style>
