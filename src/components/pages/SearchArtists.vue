<template lang="html">
  <div class="">
    <h1> enter the name </h1>
    <v-flex xs12 md8 lg10>
      <v-text-field
      name="keyWord"
      label="Search an artist by id"
      id="keyWord"
      v-model="keyWord"
      >
      </v-text-field>
    </v-flex>
    <v-btn   @click="search()">
      <span>Search</span>
    </v-btn>
    <p> {{ name }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import token from '../../token.js'
export default {
  name: 'SearchArtists',
  props: {
    name: String
  },
  data() {
    return {
      keyWord: '',
      token: token
    }
  },
  methods: {
    search(keyWord) {
      axios.get(`https://api.genius.com/artists/${this.keyWord}?&access_token=${this.token}`)
        .then(response => {
          response.data.response.artist;
          console.log(response.data.response.artist.name);
        });
    }
  }
}
</script>

<style lang="css" scoped>
</style>
