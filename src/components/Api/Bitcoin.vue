<template>
   <div class="container">
  <div> 
    <section class="hero is-danger ">  
  <h1 class="title hero is-primary is-medium ">Bitcoin</h1>
    Preço atual do bitcoin
    <div v-if="loading">carregando...</div>
    <div v-else>
    <div v-if="error">desculpe, não podemos pegar a informação no momento. tenta novamente masi tarde </div>
    <div class=" custom subtitle is-3  " v-else>uss: {{ bitcoin_price }}</div>
    </div> 
</section> 
 </div> 
    </div> 
</template>
<script>
import axios from "axios";

export default {
  
 
  data() {
    return {
      bitcoin_price: 0,
      error: false,
      loading:true
    };
  },
   name:"Api",
   components:{
 
   },
  mounted() {
    axios.get("http://api.coindesk.com/v1/bpi/currentprice.json")
    .then(r => {
      //console.log(r.data.bpi.USD.rate_float);
      this.bitcoin_price = r.data.bpi.USD.rate_float;
      // console.log(r.data)
    })
    .catch(error => {
      this.error = true;
    })
    .finally(() =>{
      this.loading = false;
    });
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