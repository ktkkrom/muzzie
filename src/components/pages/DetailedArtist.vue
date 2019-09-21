<template lang="html">
  <div class="">

    <Artist
    :id="id"
    :name="name"
    v-if="id != null"
    />
    <span> name: {{ name }} </span>
  </div>
  <!-- <NotFound msg="Requested song does not exist" v-else/> -->
</template>

<script>
import axios from 'axios';
import token from '../../token.js';
import Artist from './Artist.vue';
import NotFound from './NotFound.vue';
export default {
  name: 'DetailedArtist',
  components: {
    Artist,
    NotFound
  },
  data: () => ({
    id: null,
    name: '',
  }),
  mounted() {
    let data = axios.get(`https://api.genius.com/artists/${this.$route.params.artistId}?&access_token=${this.token}`)
      .then(response => {
        this.id = response.data.response.artist.id;
        this.name = response.data.response.artist.title;

      })
  }
}
</script>

<style lang="css" scoped>
</style>
