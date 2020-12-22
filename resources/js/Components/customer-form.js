export default {
    props: {
        customer: Object
    },
    template: `<slot :customer="customer"></slot>`
}
