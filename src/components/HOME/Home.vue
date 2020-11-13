<template>
<div class="container">
 <!-- <div class="notification custom">
     <b-carousel>
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <section :class="`hero  is-medium is-${carousel.color}`">
                <img class="imgcustom" :src= carousel.imagem />
                <div class="hero-body customhero has-text-centered">
                    <h1 class="title">{{carousel.text}}</h1>
                </div>
            </section>
        </b-carousel-item>
    </b-carousel>
  </div> -->
 <Portifolio/>
</div>
</template>
<script>
import Portifolio from '../HOME/Portifolio'
import dna from '../../assets/dna.jpg'
import robson from '../../assets/wa.jpg'

export default {
   name: 'Home',
   components: {
  Portifolio
  },
  props: {
    msg: String
  },
     data(){
        return {
               test: 0,
               carousels: [
                { imagem: dna, text: 'primary', color: 'primary' },
                 { imagem: robson, text: 'info', color: 'info' }
                // { imagem: dna, text: 'success', color: 'success' },
                // { imagem: dna, text: 'warning', color: 'warning' },
                // { imagem: dna, text: 'danger', color: 'danger' },
            ]
        }
    }}
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.custom{
    padding: 1rem 1rem 1rem 1rem ;
}
.customhero{
    padding: 3rem 1.5rem!important;

}
.imgcustom{
    max-height:400px;
}
</style>
