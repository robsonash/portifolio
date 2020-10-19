<template>
  <div class="container">
    <div>
      <section class="hero is-danger">
        <h1 class="title hero is-primary is-medium">Filmes</h1>
      </section>
      <div class="columns">
        <aside class="menu">
          <p class="menu-label">CATEGORIAS</p>
          <ul class="menu-list">
            <li><a><i class="fas fa-heart coracao"></i>POPULARES</a></li>
            <li><a><i class="fas fa-star estrela"></i>MAIS VOTADO</a></li>
            <li><a><i class="fas fa-hourglass tempo"></i>PRÒXIMOS</a></li>
          </ul>
        </aside>
      </div>
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
      loading: true,
    };
  },
  name: "Api",
  components: {},
  mounted() {
    axios
      .get("http://api.coindesk.com/v1/bpi/currentprice.json")
      .then((r) => {
        //console.log(r.data.bpi.USD.rate_float);
        this.bitcoin_price = r.data.bpi.USD.rate_float;
        // console.log(r.data)
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
.menu-list{
  padding-top: 100px;
 
}

.menu-list li{
  
  border: 1px solid black;
  border-radius: 50px;
  margin: 10px;
}
.menu-list  li a i{
  float: left;
padding-right: 30px;
}
.coracao{
  color: red;
}
 .estrela{
 color: rgb(202, 202, 41);
}
 .tempo{
color: rgb(114, 67, 221);
}

</style>