<template>
  <div>
    <Header
      :albums="albums"
      @select-changed="getAlbumGenre"
      @select-author-changed="getAlbumAuthor"
    />
    <Main :albums="albums" :genreSelected="genreSelected" :authorSelected="authorSelected" />
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
      genreSelected: "",
      authorSelected: "",
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
    getAlbumGenre(key){
     return this.genreSelected=key;
    },
    getAlbumAuthor(key){
     return this.authorSelected=key;
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
