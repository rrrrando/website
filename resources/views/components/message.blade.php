<my-component v-slot="{ bla }">
  <span>@{{ bla.message }}</span>
  <button @click="bla.addFive">Add</button>
  <span>@{{ bla.sum }}</span>
</my-component>