<template>
<v-container grid-list-xs,sm,md,lg,xl>
  <SearchBar />
  <v-layout row>
    <v-flex justify-center xs16 sm8 md6 lg4 v-for="item in songs">
      <v-card flat class="text-xs-center ma-3" height="98%">
        <h3> {{ item.result.title}} </h3>
        <div class="search-border">
          <p> {{ item.result.full_title}} </p>
        </div>
        <img position height="200" width="200" :src="item.result.song_art_image_url" alt="">
        <div class="button">
          <v-btn color="deep-purple" @click="goToSong(item.result.id)">show more</v-btn>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
  <v-row align="center" justify="center">
    <v-img src="../../assets/bg.jpg" aspect-ratio="2" class="grey lighten-2" max-width="200%" max-height="100%"></v-img>
  </v-row>
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
    goToSong(item) {
      this.$router.push({
        name: "DetailedSong",
        params: {
          songId: item
        }
      });
    }
  },
}
</script>

<style lang="css" scoped>
.button {
  text-align: center;
}
p {
  font-size: 12px;
}
.search-border, h3 {
  border: 2px solid white;
  height: 40px;
  text-align: center;
}
.search-border {
  margin-top: 20px;
}
img {
 margin-left: 100px;
}
</style>
