@props(['data'])

<invoice-form :data="{{ $data }}" v-slot="{data}">
    <p>Name: @{{ data.customer.name }}</p>
    <p>country: @{{ data.customer.country }}</p>
    <customer-form  :customer="data.customer" v-slot="{ customer }" >
        <p>Name: @{{ customer.name }}</p>
        <p>country: @{{ customer.country }}</p>
        <x-input v-model="customer.name" id="1" label="Customer Name: " vue />
        <p>
            <input type="text" v-model="customer.country">
        </p>
    </customer-form>
</invoice-form>
