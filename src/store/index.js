import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import token from '../token.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songs: [],
    things: []
  },
  mutations: {
    SET_SONGS(state, songs) {
      state.songs = songs
    },
    searchSongs(state, word) {
      state.word = word
    },
    searchArtists(state, id) {
      state.id
    },
    setArtist(state, things) {
      state.things = things
    }
  },
  actions: {
    loadSongs(context, word) {
      context.commit('searchSongs', word)
      axios.get(`https://api.genius.com/search?q=${word}&access_token=${token}`)
        .then(response => {
          let songs = response.data.response.hits
          context.commit('SET_SONGS', songs)
        })
        .catch(error => {
          console.log(error);
        })
    },
    getList(context, id) {
      context.commit('searchArtists', id)
      axios.get(`https://api.genius.com/artists/${id}/songs?&access_token=${token}`)
        .then(response => {
          let things = response.data.response.songs
          context.commit('setArtist', things)
        })
        .catch(error => {
          console.log(error);
        })
    },
  }
})