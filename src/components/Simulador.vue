<template>
  <div id="container">
    <h1>Simulador</h1>
    <div id="informacoes">
      <div id="rendimento">
        <p>Rendimento</p>
        <div id="buttons">
          <button
            id="btnbruto"
            class="btns"
            :class="{ botaoSelecionado: tipoRendimento == 'bruto' }"
            @click="setTipoRendimento('bruto')"
          >
            Bruto
          </button>
          <button
            id="btnliquido"
            class="btns"
            :class="{ botaoSelecionado: tipoRendimento == 'liquido' }"
            @click="setTipoRendimento('liquido')"
          >
            Liquido
          </button>
        </div>
        <label for="Aporte"> Aporte Inicial</label>
        <input type="text" id="inputaporte" class="inputconfig" :v-bind="aporteMensal"/>
        <label for="Prazo"> Prazo (em meses)</label>
        <input type="number" class="inputconfig" />
        <label for="IPCA">IPCA (ao ano)</label>
        <input type="number" class="inputconfig" v-model="valorIpca" disabled />
        <button id="btnlimpar" @click="limparCampos">Limpar Campos</button>
      </div>
      <div id="indexacao">
        <p>Tipos de Indexação</p>
        <div id="buttons">
          <button
            id="btnpre"
            class="btns"
            :class="{ botaoSelecionado: tipoIndexacao == 'pre' }"
            @click="setTipoIndexacao('pre')"
          >
            <i></i>PRE
          </button>
          <button
            id="btnpos"
            class="btns"
            :class="{ botaoSelecionado: tipoIndexacao == 'pos' }"
            @click="setTipoIndexacao('pos')"
          >
            <i></i>POS
          </button>
          <button
            id="btnfixado"
            class="btns"
            :class="{ botaoSelecionado: tipoIndexacao == 'ipca' }"
            @click="setTipoIndexacao('ipca')"
          >
            <i></i>FIXADO
          </button>
        </div>
        <label for="Aporte"> Aporte Mensal</label>
        <input 
          type="string" 
          class="inputconfig" 
          v-model="aporteMensal"  />
        <label for="Rentabilidade"> Rentabilidade</label>
        <input type="number" class="inputconfig" />
        <label for="CDI">CDI (ao ano)</label>
        <input type="number" class="inputconfig" v-model="valorCdi" disabled />
        <button id="btnlimpar" @click="simular">Simular</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Simulador",
  data() {
    return {
      cdi: JSON,
      ipca: JSON,
      aporteMensal: 0
    };
  },
  created() {
    axios.get("http://localhost:3000/indicadores").then((response) => {
      this.$store.dispatch("ATRIBUIVALOR", response);
    });
  },
  computed: mapState([
    "valorCdi",
    "valorIpca",
    "resposta",
    "aplicarCorBruto",
    "tipoIndexacao",
    "tipoRendimento",

  ]),
  methods: {
    setTipoIndexacao(param) {
      this.$store.dispatch("SET_TIPO_INDEXACAO", param);
    },
    setTipoRendimento(param) {
      this.$store.dispatch("SET_TIPO_RENDIMENTO", param);
    },
    verificaSelecao(payload) {
      this.$store.dispatch("VERIFICARSELECAO", payload);
    },
    geraGrafico(payload) {
      this.$store.dispatch('GERA_GRAFICO', payload);
    },
    simular() {
      axios.get("http://localhost:3000/simulacoes").then((response) => {
        this.verificaSelecao(response.data);
        this.geraGrafico(response.data)
      });
    },
    limparCampos() {
      this.$store.dispatch("LIMPAR_CAMPOS");
    }
  },
};
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

#informacoes {
  width: 90%;
  background: white;
  display: flex;
  flex-direction: row;
  margin: 2%;
}

#rendimento {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3%;
}

#indexacao {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3%;
}

#buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 5% 0;
}

.btns {
  width: 35%;
  height: 50px;
  border: none;
  font-size: 1rem;
  border: 1px solid gray;
}

#btnbruto {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

#btnliquido {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

#btnlimpar {
  width: 70%;
  height: 60px;
  border-radius: 10px;
  margin: 10% 0;
  font-size: 1rem;
}

label {
  margin: 10% 0 7% 0;
}

.inputconfig {
  border: none;
  border-bottom: 1px solid rgb(105, 103, 103);
  width: 70%;
  text-align: center;
  font-size: 1rem;
}

.botaoSelecionado {
  background: orangered;
}

</style>
