<template>
  <main class="container">
    <ul class="d-flex flex-wrap justify-content-center my-1">
      <li id="album" class="text-center m-2 p-2" v-for="album in albumsFiltered" :key="album.genre">
            <img class="p-2" :src="album.poster" alt="">
            <h4 class="p-2" >{{ album.title }}</h4>
            <h5 class="text-secondary">{{ album.author }}</h5>
            <h6 class="text-secondary">{{ album.year }}</h6>
      </li>
    </ul>
  </main>
</template>

<script>

export default {
  name: "Main",
  props:['albums', 'newAlbums'],
  data(){
    return{
      albumsByGenre:[],
    }
  },
  computed:{
    albumsFiltered(){
      const albumsByGenre=[];
      this.albums.filter(album=>{
        if(album.genre===this.newAlbums) albumsByGenre.push(album);
      });
      return albumsByGenre;
    }
  },
  methods:{
  }
};

</script>