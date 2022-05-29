<template>
<div>
  <h1>Rick and Morty</h1>
  <Cards :personajesProps='personajes'/>
</div>
</template>

<script>
import Cards from '@/components/Cards.vue'
export default {
  data() {
    return{
      personajes:[]
    }
  },

  components:{
    Cards,
  },

 async created() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  this.personajes = data.results;
},

};
</script>

<style></style>
