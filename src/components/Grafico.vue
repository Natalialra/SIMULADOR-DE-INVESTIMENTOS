<template>
    <div class="container">
        <div class="row">
            <h4>Projeção de Valores</h4>
            <Bar />
            <p>Tempo (meses)</p>
        </div>
    </div>
</template>

<script>
import Bar from './Bar'

import { mapState } from "vuex";

export default {

    name: 'Grafico',
    components: {
    Bar
  },
    computed: mapState([
   
  ]),
}
</script>

<style >
    
</style>