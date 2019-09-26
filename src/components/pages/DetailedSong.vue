<template lang="html">
  <div class="">
    <Song
    :id="id"
    :title="title"
    :header_image_url="header_image_url"
    :lyrics_owner_id="lyrics_owner_id"
    v-if="id != null"
    />
  </div>
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
    token: token,
    lyrics_owner_id: ''
  }),
  mounted() {
    let data = axios.get(`https://api.genius.com/songs/${this.$route.params.songId}?&access_token=${this.token}`)
      .then(response => {
        this.id = response.data.response.song.id;
        this.title = response.data.response.song.title;
        this.header_image_url = response.data.response.song.header_image_url;
        this.lyrics_owner_id = response.data.response.song.lyrics_owner_id
      })
  }
}
</script>

<style lang="css" scoped>
div {
  margin-top: 50px;
}
</style>
