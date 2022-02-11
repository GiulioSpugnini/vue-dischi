<template>
  <div>
    <Header :albums="albums" :albumsFiltered="albumsFiltered" @select-changed="mioMetodo" />
    <Main :albums="albums" />
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
  data() {
    return {
      albums: [],
      albumsFiltered: [],
    };
  },

  methods: {
    getAlbum() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/array/music")
        .then((res) => {
          this.albums = res.data.response;    
        });
    },
    albumFilter() {
     this.albumsFiltered= this.albums.filter((album) => {
        if (!album.includes(this.albums.genre));
      });
    },
  },
  mioMetodo(){
    console.log('cambiato');
  },
  mounted() {
    this.getAlbum();
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
