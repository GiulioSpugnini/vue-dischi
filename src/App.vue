<template>
  <div>
    <Header :albums="albums" :genres="genres" />
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
      genres: [],
    };
  },

  methods: {
    getAlbum() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/array/music")
        .then((res) => {
          this.albums = res.data.response;
      this.getGenre();
        });
    },
    getGenre() {
     this.genres= this.albums.filter((album) => {
        if (album.includes(this.albums.genre));
      });
    },
  },
  mounted() {
    this.getAlbum();
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
