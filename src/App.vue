<template>
  <div :style="{backgroundColor: this.backgroundhtml}"  id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<!--  -->
    <Menu/>
       <router-view></router-view>
  
  </div>
</template>



<script>
 
import Menu from './components/Menu.vue'

export default {
data() {
    return {
        backgroundhtml:""
  }},
  name: 'App',
  components: {
    Menu

  },
created(){

this.$eventBus.$on('poecor',(backgroundhtml) =>{
this.backgroundhtml = "#060606!important";})
  
},
beforeUpdate(){

 this.$eventBus.$on('tiracor',(backgroundhtml) =>{
 this.backgroundhtml = "";

}
   )
},



  methods:{

  },
  
}
</script>






<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
