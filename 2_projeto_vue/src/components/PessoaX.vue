<template>
    <div>
        <h2>Esta é a descrição da pessoa: {{ nome }}</h2>
        <InfoX />
        <FormVue />
    </div>
</template>

<script>
import InfoX from './InfoX.vue'
import FormVue from './FormVue.vue'

export default {
    name: "PessoaX",
    data() {
        return {
            nome: "Nathan"
        }
    },
    components: {
        InfoX,
        FormVue
    }
}
</script>