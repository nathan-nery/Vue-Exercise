<template>
  <div>
    <PrimeiroComponente />
    <LifeCycle />
    <PessoaX />
  </div>
</template>

<script>
import LifeCycle from "./components/LifeCycle.vue"
import PessoaX from './components/PessoaX.vue'
import PrimeiroComponente from './components/PrimeiroComponente.vue'

  export default {
    name: 'App',
    components: {
      PrimeiroComponente,
      LifeCycle,
      PessoaX
    }
  }
</script>

<style>

</style>
