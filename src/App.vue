<template>
  <div id="app" >
    <Simulador />
    <Resultado v-if="mostrarResultado"/> 
  </div>
</template>

<script>
import Resultado from './components/Resultado.vue'
import Simulador from './components/Simulador.vue'

import { mapState } from "vuex";

export default {
  name: 'App',
  components: {
    Simulador,
    Resultado
  },
  computed: mapState([
    "mostrarResultado",
    
  ]),
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgba(128, 128, 128, 0.445);
  margin-top: 60px;
  display: flex;
  flex-direction: row;
}
</style>
