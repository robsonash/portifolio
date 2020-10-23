<template>
  <div class="container">
    <div>
      <section class="hero has-background-info">
        <h1 class="title hero is-primary is-medium">Tempo</h1>
        
       
       
          <div class="custom subtitle is-3">
           <div class="columns">
  <div class="column">
    
               <div class="control">
             <!-- <div class="column  "> -->
              <h3 class="has-text-white is-size-4 "> Selecione o Estado </h3>
               <!-- </div> -->
               <div class="select ">
            <select  is-primary v-on:change="pegarEstado" v-model="selecionado" placeholder="Selecione o Estado">
                <option v-for="estado in estados" :value="estado.ab" :key="estado.es" >
                  {{ estado.ab }}
                </option>
             </select>
                </div>   
                </div>
              </div>        
          <div v-if="selecionado" class="column  ">
              <div class="control level level-left">
                   <!-- <div class="column "> -->
                   <h3 class="has-text-white is-size-4">Selecione a Cidade</h3>
                     <!-- </div> -->
                <div class="select ">
                  <select v-on:change="pegarCidade" v-model="atual" placeholder="Selecione a Cidade">
                    <option  v-for="cidade in cidades" :value="cidade.split(':')[1]" :key="cidade">
                          {{ cidade.split(":")[1] }}
                    </option>
                  </select>
                </div>
              </div>
           </div>
                 </div>
            <br/>
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
          <div v-if="error" >
            {{this.atual =''}}
            Desculpe, sem informações desse cidade.
          </div>
            
           
             
           
          
           
            <!-- <ul>
              <img
                :src="'http://openweathermap.org/img/wn/' + tempo.weather[0].icon + '@2x.png' "/>
              <li>Cidade:{{ tempo.name }}</li>
              <li>Temperatura:{{ tempo.main.temp }}</li>
              <li>Descrição:{{ tempo.weather[0].description }}</li>
              <br/>
            </ul> -->
          
            <div  v-if="atual">
              <img
                :src="'http://openweathermap.org/img/wn/' + tempo2.weather[0].icon + '@2x.png' " /><br />
             <span v-if="selecionado">Estado:{{ selecionado }}</span><br>
              <span>Cidade:{{ tempo2.name }}</span
              ><br />
              <span>Temperatura: {{ tempo2.main.temp }} G°</span
              ><br />
              <span>Descrição:{{ tempo2.weather[0].description }}</span
              ><br />
            </div>
            <div v-else>Selecione o Estado e a Cidade</div>
          </div>
        </div>
      </section>
    </div>
    <div class="block">

</div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      texto: "https://educacao.dadosabertosbr.com/api/cidades/",
      ativado: "",
      ativadocidade: "",
      atual: "",
      selecionado: "",
      cidades: [],
      tempo2: [],
      tempo: [],
      error: false,
      loading: false,
      estados: [
        { es: "Acre", ab: "AC" },
        { es: "Alagoas", ab: "AL" },
        { es: "Amapá", ab: "AP" },
        { es: "Amazonas", ab: "AM" },
        { es: "Bahia", ab: "BA" },
        { es: "Ceará", ab: "CE" },
        { es: "Distrito Federal", ab: "DF" },
        { es: "Espírito Santo", ab: "ES" },
        { es: "Goiás", ab: "GO" },
        { es: "Maranhão", ab: "MA" },
        { es: "Mato Grosso", ab: "MT" },
        { es: "Mato Grosso do Sul", ab: "MS" },
        { es: "Minas Gerais", ab: "MG" },
        { es: "Pará", ab: "PA" },
        { es: "Paraíba", ab: "PB" },
        { es: "Paraná", ab: "PR" },
        { es: "Pernambuco", ab: "PE" },
        { es: "Piauí", ab: "PI" },
        { es: "Rio de Janeiro", ab: "RJ" },
        { es: "Rio Grande do Norte", ab: "RN" },
        { es: "Rio Grande do Sul", ab: "RS" },
        { es: "Rondônia", ab: "RO" },
        { es: "Roraima", ab: "RR" },
        { es: "Santa Catarina", ab: "SC" },
        { es: "São Paulo", ab: "SP" },
        { es: "Sergipe", ab: "SE" },
        { es: "Tocantins", ab: "TO" },
      ],
    };
  },
  name: "Tempo",
  components: {},
  methods: {
    pegarCidade() {
        this.error = false;
         this.loading = true;
      axios
        .get(
          "http://api.openweathermap.org/data/2.5/weather?q=" + this.atual + "&lang=pt_br&units=metric&appid=54521ad49f6786d40c7ad2d72fc42d32"
        )

        .then((res) => {
          this.tempo2 = res.data;
          this.ativadocidade = this.atual;
          this.atual;
          //this.atual = '';
        })

        .catch((error) => {
          this.error = true;
        })
         .finally(() => {
          this.loading = false;
        });
    },
    pegarEstado() {
      this.error = false;
         this.loading = true;
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/educacao.dadosabertosbr.com/api/cidades/" + this.selecionado
        )

        .then((resposta) => {
          this.cidades = resposta.data;

          this.ativado = this.selecionado;
          //  this.atual = this.ativado ;
          //.selecionado = "";
          // this.atual = '';
        })

        .catch((error) => {
          this.error = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  // mounted() {
  //   axios
  //     .get(
  //       "http://api.openweathermap.org/data/2.5/weather?q=S%C3%A3o%20Paulo&lang=pt_br&units=metric&appid=54521ad49f6786d40c7ad2d72fc42d32"
  //     )
  //     .then((r) => {
  //       this.tempo = r.data;
  //     })

  //     .catch((error) => {
  //       this.error = true;
  //     })
  //     .finally(() => {
  //       this.loading = false;
  //     });
  // },
};
</script>
<style>
h2 {
  color: #0000ff;
}

.custom {
  margin-bottom: 20px;
}
</style>