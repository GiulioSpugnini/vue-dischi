<template>
  <div>
    <Header
      :albums="albums"
      @select-changed="getAlbumsRemaning"
    />
    <Main :albums="albums" :newAlbums="newAlbums" />
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
      newAlbums: [],
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
    getAlbumsRemaning(key){
     return this.newAlbums=key;
    }
  },
  
  mounted() {
    this.getAlbum();
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
