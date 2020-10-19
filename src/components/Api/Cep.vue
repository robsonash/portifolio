<template>
  <div class="container">
    <div>
      <section class="custom-section hero is-danger">
        <h1 class="title hero is-primary is-medium custom-titulo">
          Buscar pelo cep
        </h1>

        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <div class="field">
              <div class="control">
                <input
                  class="input is-warning"
                  v-model="poiscep"
                  type="number"
                  placeholder="Digite seu cep"
                />
              </div>
            </div>
            <button class="custom-button button" @click="pesquisar">
              Pesquisar
            </button>
          </div>
        </div>

        <ul>
          <span class="icon">
            <i class="icone fas fa-home fa-3x"></i>
          </span>
           <div v-if="loading"> 
               <b-loading v-model="loading" :can-cancel="true">
                <b-icon
                    pack="fas"
                    icon="sync-alt"
                    size="is-large"
                    custom-class="fa-spin">
                </b-icon>
            </b-loading></div>
      <div v-else>
           <div class="has-text-black" v-if="error">desculpe, não encontramos seu cep </div>
          <div v-else>
          <li v-for="(dados, index) in endereco" :key="dados.cep">
            <span class="is-capitalized has-text-weight-bold">
              {{ index }}:</span>
            {{ dados }}
          </li></div></div>
        </ul>
      </section>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      endereco: {},
      poiscep: "",
      url: "",
      loading:false,
      error: false
    };
  },
  name: "Api",
  methods: {
    pesquisar() {
      this.loading = true
                setTimeout(() => {
                    this.loading = false
                },1000)



      this.url = "https://viacep.com.br/ws/" + this.poiscep + "/json";
      fetch(this.url)
        .then((r) => r.json())
        .then((r) => {
           this.error = false;
          this.endereco = r;
        }).catch(error => {
      this.error = true;
    });
    },
    carregando() {
              
            }
    
    
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
span {
  color: black !important;
}
span .icone {
  color: rgb(0, 0, 0);
  background-color: #ffff0000;
}
.custom-titulo {
  background-color: #000473 !important;
}
.custom-section {
  background-color: #ffdd57 !important;
}
.custom-button {
  background-color: #ff9c35;
}
li {
  color: black !important;
}
</style>