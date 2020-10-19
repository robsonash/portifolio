<template>
<div class="container">

  
  <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
    </a>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-end">
      
      <a class="navbar-item">
      <router-link  class="navbar-item" to="/">Home</router-link>
      </a>
      <div class="navbar-item has-dropdown is-hoverable collapsible">
      <a class="navbar-link" >
      <router-link class="navbar-item" to="#">Api</router-link>
      </a>
        <div class="navbar-dropdown is-boxed">
      <a class="navbar-item" >
      <router-link class="navbar-item" to="/api/bitcoin">Bitcoin</router-link>
      </a>
       <a class="navbar-item" >
      <router-link class="navbar-item" to="/api/cep">Cep</router-link>
      </a>
      <a class="navbar-item" >
      <router-link class="navbar-item" to="/api/tempo">Tempo</router-link>
      </a>
      </div>
      </div>
    </div>

         
     
  </div>
</nav>
 
</div>
   
</template>




<script>
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
export default {
  name: 'Menu',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
