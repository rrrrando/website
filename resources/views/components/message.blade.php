<my-component v-slot="{ bla }" something="hey">
  <div>@{{ bla.message }}</div>
  <button @click="bla.addFive">Add</button>
  <div>@{{ bla.sum }}</div>
  <div>@{{ bla.something }}</div>
  <div>@{{ bla.somethingMore }}</div>
</my-component>