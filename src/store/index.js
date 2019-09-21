import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import token from '../token.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songs: [],
  },
  actions: {
    loadSongs({
      commit
    }) {
      axios
        .get(`https://api.genius.com/search?q=${'shakira'}&access_token=ctLFklRtmEJRx3GAc4Sa0Mx-Q8abviohqAVtsCGiZv9iXW_7vzO7nSOM2m_Gv2VA`)
        .then(data => {
          let songs = data.data.response.hits
          commit('SET_SONGS', songs)
        })
        .catch(error => {
          console.log(error);
        })
    }
  },
  mutations: {
    SET_SONGS(state, songs) {
      state.songs = songs
    }
  }
})