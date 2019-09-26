<template lang="html">
  <div class="">
    <div class="text-field">
      <v-text-field
      name="keyWord"
      label="enter artists id"
      id="keyWord"
      v-model="keyWord"
      >
    </v-text-field>

    <v-btn  class="deep-purple--text" @click="search()">
      <span>Search</span>
    </v-btn>
    <v-btn class="deep-purple--text" @click="getData()">
      <span> Explore </span>
    </v-btn>
    </div>
    <div>
      <v-row align="center" justify="center">
      <v-img :src="`${header_image_url}`"  max-width="300" max-height="300"></v-img>
      <p class="blockquote"> {{name}} </p>
      <p class="blockquote">  <a v-bind:href="`${url}`"> {{ url }} </a></p>
      </v-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SearchSongs from './SearchSongs.vue'
import token from '../../token.js'
export default {
  name: 'SearchArtists',
  data() {
    return {
      info: null,
      keyWord: '',
      name: '',
      token: token,
      url: '',
      header_image_url: '',
      id: ''
    }
  },
  methods: {
    search(keyWord) {
      axios.get(`https://api.genius.com/artists/${this.keyWord}?&access_token=${this.token}`)
        .then(response => {
          this.info = response.data.response.artist;
          this.name = this.info.name,
            this.url = this.info.url,
            this.id = this.info.id,
            this.header_image_url = this.info.header_image_url
          console.log(this.id);
        });
    },
    getData() {
      this.$store.dispatch('getList', this.id)
    }

  }
}
</script>

<style lang="css" scoped>
.button {
  color: red;
  margin-left: 10px;
}
v-img {
  text-align: center;
}
.text-field {
  margin-left:150px;
  width: 80%
}
</style>
