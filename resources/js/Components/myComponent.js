export default {
    template: '<div><slot v-bind="$data" :addFive="addFive" /></div>',
    data() {
        return {
            message: 'Hello World!',
            sum: 0
        }
    },
    methods: {
        addFive() {
            this.sum = this.sum + 5;
        }
    }
}
