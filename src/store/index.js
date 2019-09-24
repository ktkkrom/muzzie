import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import token from '../token.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songs: []
  },
  mutations: {
    SET_SONGS(state, songs) {
      state.songs = songs
    },
    searchSongs(state, word) {
      state.word = word
    }
  },
  actions: {
    loadSongs(context, word) {
      context.commit('searchSongs', word)
      console.log(word);
      axios.get(`https://api.genius.com/search?q=${word}&access_token=ctLFklRtmEJRx3GAc4Sa0Mx-Q8abviohqAVtsCGiZv9iXW_7vzO7nSOM2m_Gv2VA`)
        .then(response => {
          let songs = response.data.response.hits
          console.log(songs);
          context.commit('SET_SONGS', songs)
        })
        .catch(error => {
          console.log(error);
        })
    }
  },
})