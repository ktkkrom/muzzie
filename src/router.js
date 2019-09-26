import VueRouter from 'vue-router';

import NotFound from './components/pages/NotFound.vue';
import SearchSongs from './components/pages/SearchSongs.vue';
import DetailedSong from './components/pages/DetailedSong.vue';
import SongList from './components/pages/SongList.vue';

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
      path: '/artists',
      component: SongList,
      name: "SongList"
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