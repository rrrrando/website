import { ref, computed } from "vue/dist/vue.esm-bundler.js";
export default {
    props: {
        something: {
            type: String,
            default: ""
        }
    },
    setup(props) {
        const message = "Hello world";
        const sum = ref(0);
        const addFive = () => (sum.value = sum.value + 5);
        const somethingMore = computed(() => props.something + "...");
        return { message, sum, addFive, somethingMore };
    },
    template: `<slot :bla="{ message, sum, addFive, something, somethingMore }" />`
};
