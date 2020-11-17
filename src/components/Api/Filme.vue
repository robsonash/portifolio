<template>
<div>
  <div class="container">
<section class="hero is-danger">
      <h1 class="title hero is-primary is-medium">Filmes</h1>
    </section>

  </div>
   <div>
  
    <div  class="columns is-desktop">
      <aside class="menu">
        <p class="menu-label">CATEGORIAS</p>
        <ul class="menu-list">
          
          <li  class="botaocor"> 
           <b-switch  v-model="modoescuro"><span :style="{color: this.textocolor}" class="letras" >Mude de cor</span></b-switch>
            </li>
          <li v-on:click="metodofilmes(populares,1)">

            <a><i class="fas fa-heart coracao"></i>POPULARES</a>

          </li>

          <li  v-on:click="metodofilmes(maisVotados,1)">

            <a><i class="fas fa-star estrela"></i>MAIS VOTADO</a>

          </li>
          <li v-on:click="metodofilmes(proximos,1)">

            <a><i class="fas fa-hourglass tempo"></i>PRÒXIMOS</a>

          </li>
          <!-- <li class="inputfilme">
<div class="field">
  <div class="control">
    <input v-model="idinput" class="input" type="text"   placeholder="Procure o filme">
  </div>
</div>
</li> -->
          
          
     <li class="liprocura">
            <b-field label="Search..." :label-position="labelPosition">
            <b-input v-model="idinput" class="liprocurainput" placeholder="Search..."  type="search"></b-input>
            <p class="liprocurap control">
              <b-button v-if="idinput.length > 0"  v-on:click="metodoprocurafilmes(idinput,1)" class="liprocurabutton button is-primary">Search</b-button>
                <b-button v-else v-on:click="metodoprocurafilmes(this.idinput,1)" disabled class="liprocurabutton button is-primary">Search</b-button>
            </p>
        </b-field>
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





        <!-- <section :style="this.customStyle" class="section has-background-success"> -->

<!--mudando as cores-->
    <section v-bind:style="{backgroundColor: this.backgroundsesao}" class="section has-background-success">












<div class="colunm recomendados">
<div v-if="this.atual === this.populares" class="custom-linha recomenlinha">
  <h1>FILMES RECOMENDADOS</h1>
    </div>
    <div v-else-if="this.atual === this.maisVotados" class="custom-linha recomenlinha">
  <h1>FILMES MAIS VOTADOS</h1>
    </div>
    <div v-else-if="this.atual === this.proximos" class="custom-linha recomenlinha">
  <h1>LANÇAMENTOS</h1>
    </div>

    </div>







        <div v-if="filmesId"  class="custom-linha-filme">
             <div class="custom-coluna-filme"> 
              <div class="card">
                <div class="card-image">
                  <figure  class="image">
                    <img v-if="detalhefilme.poster_path" :src="'https://image.tmdb.org/t/p/w500/' + detalhefilme.poster_path" alt="Placeholder image"/>
                     <img v-else  src="../../assets/not_found.svg" alt="Placeholder image"/>
                  </figure> 
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-6">{{detalhefilme.title}}</p>
                      <p class="subtitle is-6">{{detalhefilme.vote_average}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>  



<!-- mudando a as cores  -->
              <div :style="{backgroundColor: this.backgrounddetalhe,color: this.detalhecor}" class="custom-coluna-filme-detalhes"> 
       
  
       
       
       
       
       
       
       
                <a href="#" id="scroll"></a>
                <div class="titulo">
                <h1 class="is-size-2">{{detalhefilme.title}}</h1>
                </div>
                <div>
                  <div class="clasificacaoLinguagem">
<div class="classificação">  
    <i class=" estrela fas fa-star"></i>
    <i class="estrela fas fa-star"></i>
    <i class="estrela fas fa-star"></i>
    <i class="estrela fas fa-star"></i>
    <i class="estrela fas fa-star"></i>
    <h6> {{ detalhefilme.vote_average}}</h6>
</div>
<div class="linguagem-original">
    <h6>{{detalhefilme.spoken_languages && detalhefilme.spoken_languages.length > 0 ? detalhefilme.spoken_languages[0].name : ''}} / {{detalhefilme.runtime}} MIN</h6>
</div>
</div>
                  
                 <!-- <p>{{detalhefilme.genres[0].name}} : {{detalhefilme.genres[1].name}}</p> -->
                 

<!-- Você está recebendo esse erro porque alguns dos objetos têm sight.photosas undefined. Você pode adicionar uma verificação como esta antes de acessar o índice zero:

<div @click='selectSight(index)' v-for='(sight, index) in sights'>
    {{ sight.name }}
    {{ sight.photos && sight.photos.length > 0 ? sight.photos[0].photo_reference : '' }}
</div> -->
<div class="generoVolta">
<p class="generotitulo is-size-6">Gênero</p>


<div class="generoName">
<div  v-for="genero in detalhefilme.genres" :key="genero.id">
  <i class="bolinha fas fa-dot-circle"></i> {{genero.name}}
</div></div>
    <!-- <p v-if="detalhefilme.genres[0].name" class="is-size-5"><i class="bolinha fas fa-dot-circle"></i> {{detalhefilme.genres && detalhefilme.genres.length > 0 ? detalhefilme.genres[0].name : ''}}  </p> 
     <p  v-if="detalhefilme.genres[1].name" class="is-size-5"><i class="bolinha fas fa-dot-circle"></i> {{detalhefilme.genres && detalhefilme.genres.length > 0 ? detalhefilme.genres[1].name : ''}}</p>  -->
    </div> 
    <div class="sinopse">
                  <p class="sinopsea is-size-6">A SINOPSE</p>
                   <p class="sinopseb is-size-6">{{detalhefilme.overview}}</p>
    </div>
              </div>
             <div class="botoes"> 
                <button v-on:click="metodofilmes(populares,1)" class="button is-medium   is-rounded"> <span class="iconeBotao icon is-small">
  <i class="fas fa-arrow-left"></i>
    </span>Home</button>
                <a :href="link + detalhefilme.id" target="_blank"> <button class=" button is-medium   is-rounded"> <span class="iconeBotao icon is-small">
   <i class="fas fa-link"></i>
    </span>TMDB</button></a>
               <button @click="isImageModalActive = true" class="button is-medium   is-rounded"> <span class="iconeBotao icon is-small">
    <i class="fas fa-play"></i>
    </span>Trailer</button>
             </div>
               <b-modal v-model="isImageModalActive">
     
             
               <iframe width="800" height="455" :src="this.videos + this.videoarrumadu()"
               frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            
        </b-modal>
                 </div>
<div class="colunm recomendados">
 
<div class="custom-linha recomenlinha"><h1>FILMES RECOMENDADOS</h1>
    </div>   </div>














           <div  class="custom-linha">
    
            <div  v-for="filme in recomendados.results" :key="filme.id" class="custom-coluna">
              
              <div v-on:click="metodofilmesId(filme.id)" class="card">
                <div class="card-image">
                  <figure  class="image">
                    <img v-if="filme.poster_path" :src="'https://image.tmdb.org/t/p/w500/' + filme.poster_path" alt="Placeholder image"/>

                     <img v-else  src="../../assets/not_found.svg" alt="Placeholder image"/>
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
          </div>  



  <div v-else-if="procuradoativo" class="custom-linha">
            <div  v-for="filme in filmeprocurado.results" :key="filme.id" class="custom-coluna">
              <div v-on:click="metodofilmesId(filme.id)" class="card">
                <div class="card-image">
                  <figure  class="image">
                    <img v-if="filme.poster_path" :src="'https://image.tmdb.org/t/p/w500/' + filme.poster_path" alt="Placeholder image"/>

                     <img v-else  src="../../assets/not_found.svg" alt="Placeholder image"/>
                  </figure> 
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-6 ">{{filme.title}}</p>
                      <p class="subtitle is-6">{{filme.vote_average}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 






























          <div v-else-if="normalfilme = true" class="custom-linha">
            <div  v-for="filme in filmes.results" :key="filme.id" class="custom-coluna">
              <div v-on:click="metodofilmesId(filme.id)" class="card">
                <div class="card-image">
                  <figure  class="image">
                    <img v-if="filme.poster_path" :src="'https://image.tmdb.org/t/p/w500/' + filme.poster_path" alt="Placeholder image"/>

                     <img v-else  src="../../assets/not_found.svg" alt="Placeholder image"/>
                  </figure> 
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-6 ">{{filme.title}}</p>
                      <p class="subtitle is-6">{{filme.vote_average}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>   
         <div>
        <b-pagination
        v-if="normalfilme === true"
            :total="total"
            v-on:change="metodofilmes(atual,current)"
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
          <b-pagination
        v-else-if="procuradoativo === true"
            :total="total"
            v-on:change="metodoprocurafilmes(id,current)"
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
          <b-pagination
        v-else-if="recomendadoPag === true"
            :total="total"
            v-on:change="metodofilmesrecomendados(id,current)"
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
  </div>
</template>
<script>
import axios from "axios";
import {EventBus} from '../../main.js'
export default {
  data() {
    return {
      labelPosition: 'on-border',
       isImageModalActive: false,
      id:'',
      idinput:'',
      populares:'popular',
      maisVotados:'top_rated',
      proximos:'upcoming',
      videos:"https://www.youtube.com/embed/",
      error: false,
      loading: false,
      atual:'',
      link:"https://www.themoviedb.org/movie/",
      detalhefilme:{},
      recomendados:{},
      filmes:{},
      video:{},
      filmeprocurado:{},
      filmesId: false,
      normalfilme:true,
      recomendadoPag:false,
      procuradoativo:false,
                total: '',
                current: 1,
                perPage: 20,
                rangeBefore: 3,
                rangeAfter: 3,
                order: 'is-centered',
                size: '',
                isSimple: false,
                isRounded: false,
                prevIcon: 'chevron-left',
                nextIcon: 'chevron-right',
                modoescuro:false,



                backgroundsesao:"",
                textocolor:"",
                backgrounddetalhe:"",
                detalhecor:"",
                backgroundhtml:"",
                backgroundmenu:""
//                  <!-- cores #060606 para o html  -->
//  <!-- cor do detalhe #5640406b -->
//  <!-- menu #fbfbfb5e ou #c9e85f0d -->
                // size: '',
                // type: null,
                // passiveType: null,
                // isRounded: false,
                // isOutlined: true,
                // leftLabel: false,
    };
  },
  name: "Api",
  components: {},
watch:{
 
  modoescuro: function(){
    if(this.modoescuro){

      this.textocolor = "white!important",
      this.backgroundsesao ="black!important",
      this.backgrounddetalhe = "#5640406b!important",
      this.detalhecor = "white!important",
      this.backgroundhtml = "#060606!important",
      this.backgroundmenu = "#fbfbfb5e!important"
      this.$eventBus.$emit('poecor', this.backgroundhtml)
      this.$eventBus.$emit('muda', this.modoescuro)
    }else{
      this.backgroundsesao ="",
      this.backgrounddetalhe = "",
      this.detalhecor = "",
      this.backgroundhtml = "",
      this.backgroundmenu = ""
      this.textocolor = "",
      this.$eventBus.$emit('tiracor', this.backgroundhtml)
      this.$eventBus.$emit('muda', this.modoescuro)
    } 
  }
},

 beforeRouteUpdate(to,from,next){
  console.log(this);
  next;
},
  methods:{
   
videoarrumadu(){
return this.video.results && this.video.results.length > 0 ? this.video.results[0].key : ''
},

metodoprocurafilmes(id,pagina){
      this.procuradoativo = true;
      this.normalfilme = false;
      this.recomendadoPag = false;
      this.filmesId = false;
      this.video = {};
      this.error = false;
      this.atual = '';
      this.id = id;
      this.current = pagina;
      this.loading = true;
axios    
      .get("https://api.themoviedb.org/3/search/movie?language=pt-BR&api_key=553bdd8a7c40214943be5b047025dbb9&query="+ id +"&page=" + pagina)  
      .then((r) => {
       this.filmeprocurado = r.data;
       this.total = this.filmeprocurado.total_results;
      })
      .catch((error) => {
         this.loading = false;
        this.error = true;        
      })
      .finally(() => {
        this.loading = false;      
      });


},

    metodofilmesId(id){
         this.normalfilme = false;
        this.procuradoativo = false;
        
        this.filmesId = true;
        this.video = {};
        this.error = false;
        this.atual = '';
        this.id = id;
        this.current = 1;
        this.loading = true;
axios     
      .get("https://api.themoviedb.org/3/movie/"+ id +"?language=pt-BR&api_key=553bdd8a7c40214943be5b047025dbb9")  
      .then((r) => {
       this.detalhefilme = r.data;
      })
      .catch((error) => {
         this.loading = false;
        this.error = true;        
      })
      .finally(() => {
        this.loading = false;    
         window.location.href='#scroll';  
      });
axios     
      .get("https://api.themoviedb.org/3/movie/" + id + "/videos?api_key=553bdd8a7c40214943be5b047025dbb9")  
      .then((r) => {
       this.video = r.data;
      })
      .catch((error) => {
         this.loading = false;
        this.error = true;        
      })
      .finally(() => {
        this.loading = false;      
      });
     this.metodofilmesrecomendados(this.id,1)

    },




       metodofilmesrecomendados(id,pagina){
      this.recomendadoPag = true;
  



      this.filmes = {};
      this.error = false;
      this.loading = true;
      this.current = pagina;
      console.log(" current " + pagina);
console.log(" current " + this.current);
    //        console.log(" id antes da requisição " + id)
    // console.log("valor total antes da requisição " + this.total)
   
  axios     

   .get("https://api.themoviedb.org/3/movie/"+ id +"/recommendations?language=pt-BR&api_key=acff09132ee8b54bee9960d2117ceea8&page="+ pagina)
   
      .then((r) => {
        this.recomendados = r.data;
         this.total = this.recomendados.total_results; 
   console.log("recomendados total_results" +this.total)
     console.log("depois current " + pagina);
console.log("depois current " + this.current);
  
      })
      .catch((error) => {
         this.loading = false;
        this.error = true;
        //  console.log("erro valor total" + this.total)
        //   console.log("erro id " + id)
        //      console.log("o erro foi no 3 metodo")
      })
      .finally(() => {
        this.loading = false;
        
      });




    },














       metodofilmes(status,pagina){
       
          this.procuradoativo = false;
          this.recomendadoPag = false;
           this.normalfilme = true;

          this.detalhefilme = '';
          this.recomendados = '';      
          this.filmesId = false;
          this.loading = true;
          this.atual = status;
          this.current = pagina;

axios     
        // "https://api.themoviedb.org/3/discover/movie?api_key=553bdd8a7c40214943be5b047025dbb9&language=en-US&sort_by="+ status +".desc&include_adult=false&include_video=false&page=1"

      .get("https://api.themoviedb.org/3/movie/"+ status +"?&language=pt-BR&api_key=553bdd8a7c40214943be5b047025dbb9&page="+ pagina)

        
      .then((r) => {
        this.filmes = r.data;
        this.total = this.filmes.total_results; 
         console.log("total de paginas " + this.filmes.total_results); 
         console.log("sessao atual  " + this.atual); 
           console.log("variavel total " + this.current); 
          console.log("pagina atual " + this.current); 
          console.log("-------------------------------------------------------------------------------- " ); 
         
      })
      .catch((error) => {
         this.loading = false;
        this.error = true;
        console.log("o erro foi no primeiro metodo")
      })
      .finally(() => {
        this.loading = false;
          
      });
   }},
  mounted() {
    this.metodofilmes(this.populares,1);
    
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
  max-width: 250px;
}

.menu-list li {
  border: 1px solid black;
  border-radius: 50px;
  margin: 10px;
}
.menu-list a{
  border-radius: 50px;
    color: #4a4a4a;
    display: block;
    padding: .5em .75em;
}
.menu-list li a i{
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
      width: 100%;
}

.custom-linha-filme{
   display: flex;
  flex-wrap: wrap;
 
}
.custom-coluna-filme {
     border-radius: 5%;
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
.custom-coluna-filme-detalhes{
  width: 70%;
  background: rgb(248, 248, 248);
  height: 500px;
}

.custom-coluna {
      min-width: 300px;
     border-radius: 5%;
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
 background-color: #ffffff !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-top: 30px;
  padding-top: 30px !important;
}
.card {
  border-radius: 5%;
  cursor: pointer;
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
.image img{
  width: none!important;

   height: 400px!important;
}

.classificacao{margin-bottom: 10px;
  justify-content: center;
    display: flex;
}
.linguagem-original{margin-bottom: 10px;
   font-family: Montserrat, sans-serif;
    text-transform: uppercase;
        line-height: normal;
}
.genero{
  display: inline-block;
}
.generotitulo{
      position: relative;
    font-weight: 700;
    margin-right: 10px;
}
.generoVolta{
  display: flex!important;
 justify-content: center;
    text-transform: uppercase;
    margin-bottom: 10px;
}
.generoName{
  display: flex;
  justify-content: center;
  font-family: Montserrat, sans-serif;
  text-transform: uppercase;
  flex-wrap: wrap;
}
.bolinha{
  color: #9aa7ad;


} 
.titulo{
   font-family: Montserrat, sans-serif;
   text-transform: uppercase;
}
.button{
  margin: 10px!important;
}
.botoes{
  
  padding: 10px;
    font-family: Montserrat, sans-serif;
}.iconeBotao{

  margin-right:15px!important ;
}

.sinopsea{
    background-color: #5584ad40;
    text-decoration: underline;
    margin-bottom: 10px;
    color: #249191;
}




.recomendados{
      font-size: 30px;
    display: contents;
}
.recomenlinha{
  width: 100%;
}
.inputfilme{
  border: none!important;

  background-color: black;
}


.inputfilme input {
      border: none!important;
    border-radius: 50%!important;
  text-align: center;
  background-color: black;
  color: white;
}
 .inputfilme ::-webkit-input-placeholder {

   color: white!important;
}
 .inputfilme input:focus::-webkit-input-placeholder {
   color: transparent!important;
}
.liprocura {

border: 0!important;
border-radius: 0!important;
}     
 .liprocurabutton {
margin: 0!important;
    }
.liprocurap span{
  color: white!important;
}
.botaocor{
  border: 0!important;
  border-radius: 0!important;
}















@media screen and (max-width: 1266px) {
  .custom-coluna-filme-detalhes{
    display: inline;width: 100%;
  }
 
  .menu-list {
    margin-left: 50px;
    margin-right: 50px;
    padding: 0;
  }
  .image img{
  width: none!important;
   height: 400px!important;
}
}
@media screen and (max-width: 1024px) {
  .menu-list {
    margin-left: 50px;
    margin-right: 50px;
    padding: 0;
     
  max-width: 100%!important
  }
  .image img{
  width: none!important;
   height: 400px!important;
}.liprocura{
    justify-content: center;
    display: flex;
  }.custom-linha-filme{
    justify-content: center;
  }.custom-coluna-filme{
        
    display: contents;
    width: 100%;
  }
}
@media screen and (max-width: 700px) {
   .custom-coluna-filme{
        
    display: contents;
    width: 90%;
  }
  .custom-coluna {
    width: 40%;
    max-width: 40%;
  }
  .menu-list {
    padding: 0;
 
  max-width: 100%!important

  }
  .image img{
  width: none!important;
   height: 400px!important;
  
}iframe{
  width: 100%!important;
}.liprocura{
    justify-content: center;
    display: flex;
  }.custom-linha-filme{
    justify-content: center;
  }
}


@media screen and (max-width: 500px) {
  .custom-linha-filme{
    justify-content: center;
  }
  .generoVolta{
        flex-direction: column;
  }
  .custom-coluna-filme-detalhes{
    display: table;
  }
  .custom-coluna-filme{
    display: contents;
    width: 90%;
  }
  .column{
    padding: 0!important;
  }
  .columns{
    margin-left: 0!important;
   margin-right: 0!important;
  }
  .pagination{
        margin: 0!important;
  }
  .liprocura{
    justify-content: center;
    display: flex;
  }
  .custom-coluna {

    width:90%;
      margin-bottom: 40%!important;
    max-width: 100%;
  }
  .image img{
  width: none!important;
   height: auto!important;
}
iframe{
  width: 100%!important;
}
.menu-list{
  max-width: 100%!important
}
}
</style>