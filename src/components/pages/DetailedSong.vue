<template lang="html">
  <div class="">

    <Song
    :id="id"
    :title="title"
    :header_image_url="header_image_url"
    :release_date="release_date"
    v-if="id != null"
    />
    <span> release_date: {{ release_date }} </span>
  </div>
  <!-- <NotFound msg="Requested song does not exist" v-else/> -->
</template>

<script>
import axios from 'axios';
import token from '../../token.js';
import Song from './Song.vue';
import NotFound from './NotFound.vue';
export default {
  name: 'DetailedSong',
  components: {
    Song,
    NotFound
  },
  data: () => ({
    id: null,
    title: '',
    header_image_url: '',
    release_date: '',
    token: token
  }),
  mounted() {
    let data = axios.get(`https://api.genius.com/songs/${this.$route.params.songId}?&access_token=${this.token}`)
      .then(response => {
        this.id = response.data.response.song.id;
        this.title = response.data.response.song.title;
        this.header_image_url = response.data.response.song.header_image_url;
        this.release_date = response.data.response.song.release_date
      })
  }
}
</script>

<style lang="css" scoped>
</style>
