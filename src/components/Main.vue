<template>
  <main class="container">
    <ul
      class="d-flex flex-wrap justify-content-center my-1"
      v-if="(genreSelected==''  && authorSelected=='' )"
    >
      <li
        id="album"
        class="text-center m-2 p-2"
        v-for="album in albums"
        :key="album.title"
      >
        <img class="p-2" :src="album.poster" alt="" />
        <h4 class="p-2">{{ album.title }}</h4>
        <h5 class="text-secondary">{{ album.author }}</h5>
        <h6 class="text-secondary">{{ album.year }}</h6>
      </li>
    </ul>
    <ul class="d-flex flex-wrap justify-content-center my-1" v-if="authorSelected=='' && genreSelected!=''">
      <li
        id="album"
        class="text-center m-2 p-2"
        v-for="album in albumsFilteredByGenre"
        :key="album.title"
      >
        <img class="p-2" :src="album.poster" alt="" />
        <h4 class="p-2">{{ album.title }}</h4>
        <h5 class="text-secondary">{{ album.author }}</h5>
        <h6 class="text-secondary">{{ album.year }}</h6>
      </li>
    </ul>
    <ul class="d-flex flex-wrap justify-content-center my-1">
      <li
        id="album"
        class="text-center m-2 p-2"
        v-for="album in albumsFilteredByAuthor"
        :key="album.title"
      >
        <img class="p-2" :src="album.poster" alt="" />
        <h4 class="p-2">{{ album.title }}</h4>
        <h5 class="text-secondary">{{ album.author }}</h5>
        <h6 class="text-secondary">{{ album.year }}</h6>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: "Main",
  props: ["albums", "genreSelected", "authorSelected"],
  computed: {
    albumsFilteredByGenre() {
      const albumsByGenre = [];
      this.albums.forEach((album) => {
        if (album.genre === this.genreSelected) albumsByGenre.push(album);
      });
      return albumsByGenre;
    },
    albumsFilteredByAuthor() {
      const albumsByAuthor = [];
      this.albums.forEach((album) => {
        if (album.author === this.authorSelected) albumsByAuthor.push(album);
      });
      return albumsByAuthor;
    },
  },
};
</script>