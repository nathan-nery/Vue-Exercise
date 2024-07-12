<template>
  <div>
    <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
    <p v-else>Estou buscando novas oportunidades!</p>
    <p>Utilizo as seguintes tecnologias:</p>
    <ul>
      <li>Javascript</li>
      <li>PHP</li>
      <li>Python</li>
    </ul>
    <div>
      <button @click="showEmail">Mostrar e-mail</button>
    </div>
    <p v-show="mostrar_email">Faça contato comigo: {{ email }}</p>
    <p>
      Para acessar meu portfolio
      <a :href="meu_link" target="_blank">basta clicar aqui</a>
    </p>
    <PictureX />
  </div>
</template>

<script>
import PictureX from "./PictureX.vue";

export default {
  name: "InfoX",
  data() {
    return {
      esta_trabalhando: false,
      mostrar_email: false,
      email: "nathan@email.com",
      meu_link: "https://google.com",
    };
  },
  components: {
    PictureX,
  },
  methods: {
    showEmail() {
      console.log("Testando métodos");
    },
  },
};
</script>
