<template>
  <div class="container">
    <section class="hero is-danger">
      <h1 class="title hero is-primary is-medium">Filmes</h1>
    </section>
    <div class="columns is-desktop">
      <aside class="menu">
        <p class="menu-label">CATEGORIAS</p>
        <ul class="menu-list">
          
          <li v-on:click="metodofilmes(populares)">

            <a><i class="fas fa-heart coracao"></i>POPULARES</a>

          </li>

          <li  v-on:click="metodofilmes(maisVotados)">

            <a><i class="fas fa-star estrela"></i>MAIS VOTADO</a>

          </li>
          <li v-on:click="metodofilmes(proximos)">

            <a ><i class="fas fa-hourglass tempo"></i>PRÒXIMOS</a>

          </li>
        </ul>
      </aside>



      <div class="column">
         <div v-if="loading">
                <b-loading v-model="loading" :can-cancel="true">
                <b-icon
                    pack="fas"
                    icon="sync-alt"
                    size="is-large"
                    custom-class="fa-spin">
                </b-icon>
            </b-loading></div> 
          <div v-if="error" >
            Desculpe, informações indisponiveis
          </div>





        <section class="section has-background-success">
          <div  class="custom-linha">

            <div  v-for="filme in filmes.results" :key="filme.id" class="custom-coluna">
              <div class="card">
                <div class="card-image">
                  <figure class="image">
                    <img :src="'https://image.tmdb.org/t/p/w500/' + filme.poster_path" alt="Placeholder image"/>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-6">{{filme.title}}</p>
                      <p class="subtitle is-6">{{filme.vote_average}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>   
 <div>
        <b-pagination
            :total="total"
            v-model="current"
            :range-before="rangeBefore"
            :range-after="rangeAfter"
            :order="order"
            :size="size"
            :simple="isSimple"
            :rounded="isRounded"
            :per-page="perPage"
            :icon-prev="prevIcon"
            :icon-next="nextIcon"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page">
        </b-pagination>
        </div>
        </section>
       
      </div>





    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      filmes:{},
       populares:'popular',
      maisVotados:'top_rated',
      proximos:'upcoming',
      error: false,
      loading: false,


        total: 200,
                current: 10,
                perPage: 10,
                rangeBefore: 3,
                rangeAfter: 3,
                order: 'is-centered',
                size: '',
                isSimple: false,
                isRounded: false,
                prevIcon: 'chevron-left',
                nextIcon: 'chevron-right'
    };
  },
  name: "Api",
  components: {},
  methods:{
       metodofilmes(status){
          this.loading = true;
axios     
        // "https://api.themoviedb.org/3/discover/movie?api_key=553bdd8a7c40214943be5b047025dbb9&language=en-US&sort_by="+ status +".desc&include_adult=false&include_video=false&page=1"

      .get("https://api.themoviedb.org/3/movie/"+ status +"?&language=pt-BR&api_key=553bdd8a7c40214943be5b047025dbb9&page=1")

        
      .then((r) => {
        this.filmes = r.data;
      })
      .catch((error) => {
        this.error = true;
      })
      .finally(() => {
        this.loading = false;
      });
   }},
  mounted() {
    this.metodofilmes(this.populares);
  },
};
</script>
<style>
h2 {
  color: #0000ff;
}
.custom {
  margin-bottom: 20px;
}
.menu {
  padding-top: 60px;
}
.menu-list {
  padding-top: 100px;
}

.menu-list li {
  border: 1px solid black;
  border-radius: 50px;
  margin: 10px;
}
.menu-list li a i {
  float: left;
  padding-right: 30px;
}
.coracao {
  color: red;
}
.estrela {
  color: rgb(202, 202, 41);
}
.tempo {
  color: rgb(114, 67, 221);
}
.custom-linha {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.custom-coluna {
     
      box-shadow: 0rem 2rem 5rem rgba(0,0,0,0.2);
       /*box-shadow: 0rem 2rem 5rem rgb(255 255 255 / 30%);*/
  margin-bottom: 5%!important;
  max-height: 500px;
  width: 30%;
  max-width: 300px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
.section {
  /*background-color: #000000 !important;*/
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-top: 30px;
  padding-top: 30px !important;
}
.card {
  border-radius: 5%;
}
.card-content{
height: 70px!important;
  padding: 0!important;
  margin-top: 10px!important;
  margin-bottom: 10px!important;
}
.media-content p{
  
    color: #546e7a;
}
img{
  width: none!important;

   height: 400px!important;
}
@media screen and (max-width: 1024px) {
  .menu-list {
    margin-left: 50px;
    margin-right: 50px;
    padding: 0;
  }
  img{
  width: none!important;
   height: 400px!important;
}
}
@media screen and (max-width: 700px) {
  .custom-coluna {
    width: 40%;
    max-width: 40%;
  }
  .menu-list {
    padding: 0;
  }
  img{
  width: none!important;
   height: 400px!important;
  
}
}


@media screen and (max-width: 500px) {
  .custom-coluna {
    width: 90%;
      margin-bottom: 50%!important;
    max-width: 90%;
  }
  img{
  width: none!important;
   height: auto!important;
}

}
</style>