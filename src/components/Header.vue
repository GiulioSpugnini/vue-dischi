<template>
  <header>
    <div class="col-6">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <i class="fab fa-spotify px-4"></i>
    </div>
    <div class="col-6 d-flex justify-content-center">
      <select
        class="form-select"
        v-model="key"
        @change="$emit('select-changed', key)">
        <option value='All'>Seleziona il genere..</option>
        <option v-for="(album,index) in albumFilter" :key="index">
          {{ album }}
        </option>
      </select>
      <select
        class="form-select"
        v-model="authorKey"
        @change="$emit('select-author-changed', authorKey)">
        <option value='All' >Seleziona l'artista..</option>
        <option v-for="(album,index) in albumFilterByArtist" :key="index">
          {{ album }}
        </option>
      </select>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["albums"],
  data() {
    return {
      key: "All",
      authorKey: "All",
    };
  },
  computed: {
    albumFilter() {
      const albumFiltered = [];
      this.albums.forEach((album) => {
        if (!albumFiltered.includes(album.genre))
          albumFiltered.push(album.genre);
      });
      return albumFiltered;
    },
    albumFilterByArtist() {
      const albumFilteredByAuthor = [];
      this.albums.forEach((album) => {
        if (!albumFilteredByAuthor.includes(album.author))
          albumFilteredByAuthor.push(album.author);
      });
      return albumFilteredByAuthor;
    },
  },
};
</script>