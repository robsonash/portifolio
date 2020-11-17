<template>
   <div class="container">
<ul>
    <li v-for="pokemon in list_pokemons" :key="pokemon.name">
   {{pokemon.name}}
 <!-- {{pokemon.types}} -->


    </li>

    
</ul>
    </div> 
</template>
<script>
import axios from "axios";

export default {
  
 
  data() {
    return {
        pokemon:{},
     list_pokemons:[],
     show_pokemons:'9'
    };
  },
   name:"Pokemon",
   components:{
 
   },
  mounted() {
    //   axios     
    //   .get("https://pokeapi.co/api/v2/pokemon/")  
    //   .then((r) => {
    //    this.pokemon = r.data;
    //   })
    //   .catch((error) => {
    //      this.loading = false;
    //     this.error = true;        
    //   })
    //   .finally(() => {
    //     this.loading = false;      
    //   });
    //  this.metodofilmesrecomendados(this.id,1)

    // },

fetch(`https://pokeapi.co/api/v2/pokemon`)

.then((response) => response.json())
.then((r) =>{
    r.results.forEach((pokemon)=>{
        const nome_pokemon = pokemon.name;
        fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon.name + "/")
        .then(response => response.json())
        .then(r => {
            this.list_pokemons.push({name: nome_pokemon})
        })
    })
})
  },
};
</script>
<style>
h2 {
  color: #0000ff;
}
.custom{
  margin-bottom: 20px;
}
</style>