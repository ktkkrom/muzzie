import VueRouter from 'vue-router';

import NotFound from './components/pages/NotFound.vue';
import SearchSongs from './components/pages/SearchSongs.vue';
import VuexTornment from './components/pages/VuexTornment.vue';
import DetailedSong from './components/pages/DetailedSong.vue';
import SearchArtists from './components/pages/SearchArtists.vue';
import Artist from './components/pages/Artist.vue';

export default new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: {
        name: "SearchSongs"
      }
    },
    {
      path: '/songs',
      component: SearchSongs,
      name: "SearchSongs"
    },
    {
      path: '/about',
      component: VuexTornment
    },
    {
      path: '/artists',
      component: SearchArtists
    },
    {
      path: '/artists/:artistId',
      component: Artist
    },
    {
      path: '/songs/:songId',
      component: DetailedSong,
      name: "DetailedSong"
    },
    {
      path: '*',
      component: NotFound,
      props: {
        msg: "Cannot find the page you requested"
      }
    }
  ]
});