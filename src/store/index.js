import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    comAporte: [],
    semAporte: [],
    dataGrafico2: [39, 80, 40, 20, 12, 11, 32, 20, 12, 39, 10, 40],
    valorCdi: 0,
    valorIpca: 0,
    valorFinalBruto: 0,
    valorFinalLiquido: 0,
    ganhoLiquido: 0,
    aliquotaIR: 0,
    valorPagoIR: 0,
    valorTotalInvestido: 0,
    tipoIndexacao: "pre",
    tipoRendimento: "bruto",
    resposta: '',
    mostrarResultado: false,
   
  },
  mutations: {
    ATRIBUIVALOR(state, response) {
      state.valorCdi = response.data[0].valor 
      state.valorIpca = response.data[1].valor
    },
    SET_TIPO_INDEXACAO(state, payload) {
      state.tipoIndexacao = payload
    },
    SET_TIPO_RENDIMENTO(state, payload) {
      state.tipoRendimento = payload
    },
    VERIFICARSELECAO(state, payload) {
      state.mostrarResultado = true
      payload.forEach(element => {
        if (element.tipoIndexacao === state.tipoIndexacao && element.tipoRendimento === state.tipoRendimento) {
        state.resposta = element
        state.valorFinalBruto = element.valorFinalBruto
        state.valorFinalLiquido = element.valorFinalLiquido
        state.ganhoLiquido = element.ganhoLiquido
        state.aliquotaIR = element.aliquotaIR
        state.valorPagoIR = element.valorPagoIR
        state.valorTotalInvestido = element.valorTotalInvestido
        }
      });
    },
    GERA_GRAFICO(state, payload) {
      payload.forEach(element => {
        if (element.tipoIndexacao === state.tipoIndexacao && element.tipoRendimento === state.tipoRendimento) {
        state.comAporte = element.graficoValores.comAporte
        state.semAporte = element.graficoValores.semAporte
        }
      });
    },
    LIMPAR_CAMPOS(state) {
      state.valorFinalBruto = ''
      state.valorFinalLiquido = ''
      state.ganhoLiquido = ''
      state.mostrarResultado = false

    }
  },
  actions: {
    ATRIBUIVALOR(context, response) {
      context.commit('ATRIBUIVALOR', response)
    },
    SET_TIPO_INDEXACAO(context, payload) {
      context.commit('SET_TIPO_INDEXACAO', payload)
    },
    SET_TIPO_RENDIMENTO(context, payload) {
      context.commit('SET_TIPO_RENDIMENTO', payload)
    },
    VERIFICARSELECAO(context, payload) {
      context.commit('VERIFICARSELECAO', payload)
    },
    GERA_GRAFICO(context, payload) {
      context.commit('GERA_GRAFICO', payload)
    },
    LIMPAR_CAMPOS(context) {
      context.commit('LIMPAR_CAMPOS')
    }
  },
  modules: {
  }
})
