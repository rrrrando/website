import { ref } from 'vue/dist/vue.runtime.esm-bundler'
export default {
    props: {
        data: Object
    },
    setup(props) {
        const data = ref(props.data)
        return {
            data
        }
    },
    template: `<slot :data="data"></slot>`
}
