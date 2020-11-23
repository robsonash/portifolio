<template>
   <div class="container">
       <h1 class="title is-1">Gerador de link para o WhatsApp</h1>

<!-- aqui é a parte para por dados-->
<div v-if="aparecer === false"  >
<div class="control has-icons-left has-icons-right is-flex is-justify-content-center mb-3">
  <input v-model="numero" class="input is-large" type="text" placeholder="Número do celular" required>
  <span class= "icon is-medium is-left" :class="{'ativado:': ativado,'desativado': desativado}">
    <i class="fas fa-phone"></i>
  </span>
  <span class="icon is-medium is-right" >
    <i class="fas fa-check" :class="{'ativado': ativado,'desativado': desativado,'certo': certo,'menor': menor}"></i>
  </span>
</div>
<div class="control has-icons-left has-icons-right is-flex is-justify-content-center mb-3">
  <input v-model="mensagem" class="input is-large" type="text" placeholder="Mensagem" required>
  <span class="icon is-medium is-left" :class="{'ativado:': ativado,'desativado': desativado}">
   <i class="fas fa-comments"></i>
  </span>
</div>
<div class="buttons is-flex is-justify-content-center">
  <button @click="gerarlink" class="button is-success" :disabled='desabilitado'  >Gerar link</button>
</div>
</div>
<!-- aqui é a parte para voltar-->
<div v-else class="container">
<p class="customp title is-1">Seu link está pronto</p>
<div class="customw is-flex is-align-content-start is-justify-content-start is-flex-direction-column">
<p class="seu is-flex">Seu link</p>
<p @select="this.link" class="resultado is-flex" ref="links">{{link}}</p>
</div>
<div class="is-flex is-align-content-center  is-justify-content-center">
<div class="buttons">
  <button @click="copiar" class="button is-success is-outlined">Copiar Link</button>
    <button @click="gerarnovolink" class="button is-success ">Gerar novo link</button>
</div>

</div>
</div>



<section class="hero ">
  <div class="hero-body">
    <div class="container">
      <p class="title">
        Como funciona
      </p>
      <ul>
          <li>1. Insira o nº do WhatsApp sem se preocupar com hífem ou parênteses(Obrigatório o ddd)</li>
          <li>2. Escreva uma mensagem para começar a conversa (não é obrigatório)</li>
          <li>3. Clique no botão "GERAR LINK"</li>
          <li>4. Antes de usar, faça o teste</li>

      </ul>
    </div>
  </div>
</section>
    </div> 
</template>
<script>
import axios from "axios";

export default {
   name:"Watzap",
   components:{

   },
 
  data() {
    return {
    aparecer:false,
    numero:"",
    mensagem:"",
    link:"",
    ativado:false,
    desativado:true,
    desabilitado:true,
    menor:false,
    certo:false,
    copia:""
    };
  },
  props:['disabled'],
   watch:{
 numero: function(){
     //valida se tem algo no campo 
if(this.numero.length > 0){
    this.ativado = true;
    this.desativado = false
}else{
        this.ativado = false;
    this.desativado = true
}
//valida se ta com 11 numeros 
if(this.numero.length === 11){
    this.certo = true;
    this.menor =false;
}else if(this.numero.length === 0){
     this.certo = false;
    this.menor = false;
}else{
       this.certo = false;
    this.menor = true;
}



// valida de tem mais q 10 numeros
   if(this.numero.length === 11){
  this.desabilitado = false
   }else{
         this.desabilitado = true
   }
 }
   },
   methods:{
       gerarlink:function(){
        this.aparecer = true;
         return this.link = "https://api.whatsapp.com/send?phone=55" + this.numero + "&text=" + this.mensagem;
           
       },
       copiar:function(){
             this.copia = this.$refs.links.innerHTML;
        
                  console.log(this.copia)
             document.execCommand("copy"); 
       },
       gerarnovolink:function(){
         this.link = '',
           this.numero = '';
           this.mensagem = '';
           this.aparecer = false;
       }
   }

};
</script>
<style>
*{
    font-family: 'Montserrat', sans-serif;
}
.custom{
  margin-bottom: 20px;
}
.customp {
    background-color: rgb(75, 177, 75);
    max-width: 600px;
    margin: 0 auto;
    color: white;
    font-size: 1.3rem!important;
    padding: 10px;
    font-weight: 100;
        border-radius: 3px;
        margin-bottom: 5px;
}
.customw{
    border: 1px solid #f1f1f1;
    border-radius: 5px;
    transition: all .2s;
    border-radius: 3px; 
    padding: 10px;
    max-width: 600px;
    margin: 0 auto;
}
    .seu{
 
    font-weight: 500;
     color: #444
    }
    .resultado{
    font-size: 20px;
    font-weight: 500;
        color: #444
    }
.control{
   margin: auto;
   max-width: 600px;
       color: #444
}
label .custom{
    float: left;
}
.ativado{
     opacity: 1;
}
.desativado{
    opacity: 0.3;
}
.menor{
    color: red;
}
.certo{
    color: green;
}
@media screen and (max-width: 500px) {
    .container{
 max-width: 90%;
    }
 .title.is-1 {
    font-size: 2.1rem;
}
  }
</style>