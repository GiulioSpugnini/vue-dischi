<template>
  <header>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <i class="fab fa-spotify px-4"></i>
    <select class="form-select">
      <option selected>Seleziona il genere..</option>
      <option v-for="(genre,index) in genres" :key="index" >One</option>
    </select>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ['albums', 'genres'],
};
</script>