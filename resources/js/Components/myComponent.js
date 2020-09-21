export default {
    render() {
        return this.$scopedSlots.default({
            data: this.$data,
            addFive: addFive
        })
    },
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
