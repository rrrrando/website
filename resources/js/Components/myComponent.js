import { ref } from "vue/dist/vue.esm-bundler.js";
export default {
    setup() {
        const message = "Hello world";
        const sum = ref(0);
        const addFive = () => (sum.value = sum.value + 5);
        return { message, sum, addFive };
    },
    template: `<slot :bla="{ message, sum, addFive }" />`
};
