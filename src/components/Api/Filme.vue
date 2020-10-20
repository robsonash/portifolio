<template>
  <div class="container">
    <section class="hero is-danger">
      <h1 class="title hero is-primary is-medium">Filmes</h1>
    </section>
    <div class="columns is-desktop">
      <aside class="menu">
        <p class="menu-label">CATEGORIAS</p>
        <ul class="menu-list">
          <li>
            <a><i class="fas fa-heart coracao"></i>POPULARES</a>
          </li>
          <li>
            <a><i class="fas fa-star estrela"></i>MAIS VOTADO</a>
          </li>
          <li>
            <a><i class="fas fa-hourglass tempo"></i>PRÒXIMOS</a>
          </li>
        </ul>
      </aside>
      <div class="column">
        <section class="section has-background-success">
          <div class="custom-linha">
            <div class="custom-coluna">


              <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>
  </div>
</div>
         
            
            </div>
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
     filmes:[],
      error: false,
      loading: true,
    };
  },
  name: "Api",
  components: {},
  mounted() {
    axios
      .get("https://api.themoviedb.org/3/discover/movie?api_key=553bdd8a7c40214943be5b047025dbb9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
      .then((r) => {
     this.filmes = r.data;
     console.log(filmes)
      })
      .catch((error) => {
        this.error = true;
      })
      .finally(() => {
        this.loading = false;
      });
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

 
  max-height: 500px;
  width: 30%;
  max-width: 300px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
.section{
  padding-left: 0!important;
   padding-right: 0!important;
  margin-top: 30px;
  padding-top: 30px!important;
}
.card{
border-radius: 5%
}
@media screen and (max-width: 1024px) {

.menu-list{
  margin-left: 50px;
  margin-right: 50px;
 padding: 0;
}
}
@media screen and (max-width: 700px) {
.custom-coluna {
 width: 40%;
 max-width: 40%;

  
}
.menu-list{
 padding: 0;
}
}

@media screen and (max-width: 500px) {
.custom-coluna {
 width: 90%;
 max-width: 90%;

  
}
 
}
</style>