const MyNameApp = {
    data() {
        return {
            name: "",
            age: 33,
            city: "Ribeirão Preto",
            input_name: ""
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();
            console.log(this.input_name);
            this.name = this.input_name;
        }
    }
}

Vue.createApp(MyNameApp).mount("#app")