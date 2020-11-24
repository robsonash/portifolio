<template>
  <div>
    <div class="container">
      <div class="columns">
        <div class="column">
          <img class="" src="../../assets/robsonola.png" />
        </div>
        <div class="column is-flex is-align-items-center">
          <h1 class="is-size-1-mobile is-size-1 has-text-grey-dark">
            Veja meu trabalho no link dentro do menu ali em cima
          </h1>
        </div>
      </div>
      <div
        class="columns is-flex is-justify-content-center is-align-items-center"
      >
        <h1 class="stack is-size-1-mobile is-size-1">MINHA STACK</h1>
      </div>

<!--primeira linha-->
      <div class="columns is-flex is-flex-wrap-wrap is-justify-content-center is-align-items-center">
        <div
          class="column is-3  is-flex is-justify-content-center is-align-items-center"
        >
          <img class="linguagens html" src="../../assets/html.png" />
        </div>
        <div
          class="column is-3  is-flex is-justify-content-center is-align-items-center"
        >
          <img class="linguagens css" src="../../assets/css.png" />
        </div>
        <div
          class="column is-3  is-flex is-justify-content-center is-align-items-center"
        >
          <img class="linguagens js" src="../../assets/javascript.png" />
        </div>
      </div>
      <!--segunda linha-->
          <div class="columns is-flex is-flex-wrap-wrap is-justify-content-center is-align-items-center">
       <div
          class="column is-3 is-flex is-justify-content-center is-align-items-center"
        >
          <img class="linguagens php" src="../../assets/php.png" />
        </div>
        <div
          class="column is-3 is-flex is-justify-content-center is-align-items-center"
        >
          <img class="linguagens bootstrap" src="../../assets/bootstrap.png" />
        </div>
         <div
          class="column is-3 is-flex is-justify-content-center is-align-items-center"
        >
          <img class="linguagens mysql" src="../../assets/mysql.png" />
        </div>
   <div
          class="column is-3 is-flex is-justify-content-center is-align-items-center"
        >
          <img class="linguagens git" src="../../assets/git.png" />
        </div>
           </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
.container {
  margin-bottom: 30px;
}
.column {
  margin: 10px;
}
.has-background-danger-light {
  background-color: #ff000069 !important;
}
.fab {
  font-size: 300px;
  font-family: "Font Awesome 5 Brands";
}
.linguagens {
  border-radius: 10px;
    cursor: pointer;
    padding: 20px;
    max-width: 250px;
    max-height: 250px;
    border: 1px solid #00000017;
    transition: all 0.3s;
}
.linguagens:hover {
    /* background-color: #f7a619d4; */
   transform:scale(1.25);
   box-shadow: 0px 0px 50px 1px #3526f952;
}
/* .html{
    background-color: #f71919d4;
}
.css{
     background-color: #193df7d4;
}
.js{
background-color: #f7a619d4;
}
.php{
background-color: #a17ec6;
}
.bootstrap{
background-color: #673AB7;
}
.mysql{
background-color: #05b1ff;
}
.git{
background-color: #E91E63;
} */

.linguagens:hover.html {
    background-color: #f71919d4;
}
.linguagens:hover.css {
    background-color: #193df7d4;
}
.linguagens:hover.js {
    background-color: #f7a619d4;
}
.linguagens:hover.php {
    background-color: #f71919d4;
}
.linguagens:hover.bootstrap {
    background-color: #193df7d4;
}
.linguagens:hover.mysql {
    background-color: #f7a619d4;
}
.linguagens:hover.git {
    background-color: #f7a619d4;
}
.stack {
  padding-top: 80px;
  padding-bottom: 20px;
  font-family: cursive;
  border-top: 1px solid #ff9800;
  width: 800px;
  color: #0d69ff !important;
}
</style>
