<template>
    <div id="container">
        <h1>Resultado da Simulação</h1>
        <div class="caixas">
            <div class="box">
                <h4>Valor Final Bruto</h4>
                <h4>R${{valorFinalBruto}}</h4>
            </div>
            <div class="box">
                <h4>Alíquota do IR</h4>
                <h4> {{aliquotaIR}}%</h4>
            </div>
            <div class="box">
                <h4> Valor Pago em IR</h4>
                <h4>R$ {{valorPagoIR}}</h4>
            </div>
        </div>
        <div class="caixas">
            <div class="box">
                <h4>Valor Final Líquido</h4>
                <h4 class="colorGreen">R$ {{valorFinalLiquido}}</h4>
            </div>
            <div class="box">
                <h4>Valor Total Investido</h4>
                <h4>R$ {{valorTotalInvestido}}</h4>
            </div>
            <div class="box">
                <h4>Ganho Líquido</h4>
                <h4 class="colorGreen">R$ {{ganhoLiquido}}</h4>
            </div>
        </div>
        <Grafico />
    </div>
</template>

<script>
import Grafico from "./Grafico.vue"

import { mapState } from "vuex";


export default {
    name: 'Resultado',
    components: {Grafico},
    computed: mapState([
    "valorFinalBruto",
    "valorFinalLiquido",
    "ganhoLiquido",
    "resposta",
    "tipoIndexacao",
    "tipoRendimento",
    "aliquotaIR",
    "valorPagoIR",
    "valorTotalInvestido"
  ]),
}
</script>

<style scoped>
#container {
  width: 50%;
  background: white;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  margin: 2%;
}

.caixas {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.box {
    border: 1px solid black;
    width: 30%;
    margin: 1%;
}

.colorGreen {
    color: rgba(5, 196, 5, 0.918);
}
</style>
