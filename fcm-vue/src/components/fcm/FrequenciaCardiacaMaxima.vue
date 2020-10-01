<template>
  <div>
    <div class="container mt-3">
      <div class="card mb-3">
        <div class="card-header">
          Cálculo da Freqüencia Cardíaca Máxima
        </div>
        <div class="card-body">
          <form>
            <div class="row">
              <div class="col-4">
                <label for="name">Nome</label>
                <input type="text" v-model="nome" id="name" class="form-control">
              </div>
              <div class="col-4">
                <label for="idade">Idade</label>
                <input type="number" v-model="idade" id="idade" class="form-control">
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class=" container">
      <div class="card">
        <div class="card-header">
          Olá {{ nome }}. A seguir estão suas faixas de freqüencia cardíaca por objetivo.
        </div>
        <div class="card-body">
          <p>Máxima: {{ maxima() }}</p>
          <p>Condicionamento: {{ condicionamento() }}</p>
          <p>Queima de Gordura: {{ queima() }}</p>
        </div>
        <div class="card-footer min-h-50">
          <span id="spanText">{{ textoMotivacional() }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FrequenciaCardiacaMaxima",
  props: {
    nome: String,
    idade: Number
  },
  methods: {
    isIdadeValida() {
      return (this.idade) && (this.idade.length > 0 || this.idade > 0);
    },
    maxima() {
      return this.isIdadeValida() ? 220 - this.idade : 0;
    },
    condicionamento() {
      return this.isIdadeValida() ? (220 - this.idade) * 0.80 : 0;
    },
    queima() {
      return this.isIdadeValida() ? (220 - this.idade) * 0.65 : 0;
    },
    textoMotivacional() {
      let texto = "";
      if (this.isIdadeValida()) {
        if (this.idade < 20) {
          texto = " você tem a juventude à sua disposição!";
        } else if (this.idade < 40) {
          texto = " bora manter a atividade porque temos muito a perder!";
        } else if (this.idade < 60) {
          texto = " chegamos num ponto onde não temos mais escolha! Pratique atividade física!";
        } else if (this.idade < 80) {
          texto = " ainda dá tempo de tentar esticar um pouco a qualidade de vida, vamos nos exercitar!";
        } else if (this.idade < 100) {
          texto = " espero que tenha feito algo por você nesse tempo!";
        } else if (this.idade < 150) {
          texto = " ainda por aqui?!!?";
        } else {
          texto = " tá de brincadeira né?";
        }
        texto = `${this.nome}, ${texto}`;
      }
      return texto;
    }
  }
}
</script>

<style scoped>

</style>