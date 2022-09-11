<template>
<div>
    <vue-winwheel :segments="options" />

    </div>  
</template>

<script>
import VueWinwheel from '@robsonash/vue-winwheel-reversion/vue-winwheel'
export default {
  components:{
    VueWinwheel
    
  },
  data(){
    return{
        showModal: false,
	  pageTitle       : "Vue-Wheel",
      wheelSize       : 400,
      btnColor        : "",
      btnText         : "",
      lineWidth       : 3,
      duration        : 5,
      spin       	  : 5,
      options:[
					{
						textFillStyle: '#000000',
						fillStyle: '#98fb98',
						text:'Teste 1',
                        desc: "https://chat.whatsapp.com/CnPQDMbCkB7EzSDEnTzcB5"
					},
					{
						textFillStyle: '#000000',
						fillStyle: '#fa8072',
						text:'Teste 2',
                        desc: "https://chat.whatsapp.com/ChgHuJ1cb5aAlsAutfNnGy"
					},
					{
						textFillStyle: '#000000',
						fillStyle: '#4169e1',
						text:'Teste 3',
                        desc: "https://chat.whatsapp.com/C4JyGbUEkxy9WElwifcYb9"
					},

				]
    }
  },
  methods: {
}
}
</script>

<style>
.vue-winwheel .wheel-wrapper .btn.btn-play {
    width: 600px;
}
.modal-container {
        width: 90%;
}
@media screen and (max-width: 600px) {
     .modal-container {
            padding: 20px 10px;
        font-size: 13px;
        
}  
.vue-winwheel .wheel-wrapper .btn.btn-play {
    width: 300px;
} 
}
@media screen and (max-width: 500px) {
     .modal-container {
        
        font-size: 10px;
} 

}
.modal-default-button{
    font-weight: bold;
    border: 1px solid #3f51b5;
    color: white;
    width: 149px;
    height: 35px;
    border-radius: 10px;
    background: #e91e63;
}
</style>