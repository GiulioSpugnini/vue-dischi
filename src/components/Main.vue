<template>
  <main class="container">
    <ul class="row">
      <li id="album" class="col-2 text-center" v-for="album in albums" :key="album.title">
        <img :src="album.poster" alt="">
        <h2>{{ album.title }}</h2>
        <h5>{{ album.author }}</h5>
        <h6>{{ album.year }}</h6>
      </li>
    </ul>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "Main",

  data() {
    return {
      albums: [],
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
  },
  mounted() {
    this.getAlbum();
  },
};
</script>

<style>
</style>