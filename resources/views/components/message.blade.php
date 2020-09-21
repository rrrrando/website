<my-component #default="{ message, addFive, sum }" >
        <div>
            <span>@{{ message }}</span>
            <button @click="addFive()">Add</button>
            <span>@{{ sum }}</span>
        </div>
</my-component>
