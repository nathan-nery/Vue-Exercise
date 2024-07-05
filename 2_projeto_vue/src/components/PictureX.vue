<template>
    <img :src="avatar" :alt="descricao">
</template>

<script>
export default {
    name: "PictureX",
    data() {
        return {
            avatar: "/img/avatar.png",
            descricao: "Nathan Nery"
        }
    }
}
</script>