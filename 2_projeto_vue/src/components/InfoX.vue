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
        <p v-show="mostrar_email">Faça contato comigo: {{ email }}</p>
        <p>Para acessar meu portfolio <a v-bind:href="meu_link" target="_blank">basta clicar aqui</a> </p>
    </div>
</template>

<script>
export default {
    name: "InfoX",
    data() {
        return {
            esta_trabalhando: false,
            mostrar_email: false,
            email: "nathan@email.com",
            meu_link: "https://google.com"
        }
    }
}
</script>