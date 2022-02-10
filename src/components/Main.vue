<template>
  <main class="container">
    <ul class="d-flex flex-wrap justify-content-between my-1">
      <li id="album" class="text-center m-2 p-2" v-for="album in albums" :key="album.title">
        <img class="p-2" :src="album.poster" alt="">
        <h4 class="p-2">{{ album.title.toUpperCase() }}</h4>
        <h5 class="text-secondary">{{ album.author }}</h5>
        <h6 class="text-secondary">{{ album.year }}</h6>
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