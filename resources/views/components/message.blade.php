<my-component #default="{ message, addFive, sum }" >
            <span>@{{ message }}</span>
            <button @click="addFive()">Add</button>
            <span>@{{ sum }}</span>
</my-component>
