import Vue from 'vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import '../node_modules/bulma/css/bulma.css'
import 'buefy/dist/buefy.css'
import App from './App.vue'
import Home from './components/HOME/Home.vue'
import Bitcoin from './components/Api/Bitcoin.vue'
import Cep from './components/Api/Cep.vue'
import Tempo from './components/Api/Tempo.vue'
import Filme from './components/Api/Filme.vue'
import Watzap from './components/Api/Watzap.vue'
import Pokemon from './components/Api/Pokemon.vue'
import NotFound from './components/NotFound';



Vue.use(VueRouter);

const router = new VueRouter({
  mode:"history",
  routes:[
    { path:'/',component:Home },
    { path:'/api/bitcoin',component:Bitcoin },
    { path:'/api/cep',component:Cep },
    { path:'/api/tempo',component:Tempo },
    { path:'/api/filme',component:Filme },
    { path:'/api/watzap',component:Watzap },
    { path:'/api/pokemon',component:Pokemon },
   { path:'*',component:NotFound }
    
  ]
});



Vue.use(Buefy);



Vue.prototype.$eventBus = new Vue()




Vue.config.productionTip = false


router.afterEach((to,from,next)=>{
  // if(typeof backgroundhtml === "undefined"){
    if(from.fullPath === "/api/filme"){
      // this.$eventBus.$emit('tiracor', this.backgroundhtml)
      console.log("cor",this)
    next;}
    else{
     next
    }
  });


new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
