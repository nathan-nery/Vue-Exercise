<template>
    <form action="">
        <div>
            <InputText />
        </div>
        <div>
            <InputText />
        </div>
        <div>
            <SubmitVue />
        </div>
    </form>
</template>

<script>
import InputText from './form/InputText.vue';
import SubmitVue from './form/SubmitVue.vue';

    export default {
        name: "FormVue",
        components: {
            InputText,
            SubmitVue
        }
    }
</script>