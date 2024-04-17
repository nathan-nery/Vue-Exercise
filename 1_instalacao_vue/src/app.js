const MyNameApp = {
    data() {
        return{
            name: "Nathan",
            age: "33",
            input_name: ""
        }
    },
    methods: {
        submitForm(e) {

            e.preventDefault();

            console.log(this.input_name)

            this.name = this.input_name
        }
    }
}

const app = Vue.createApp(MyNameApp);
app.mount("#app");