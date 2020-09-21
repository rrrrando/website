import { createApp } from 'vue';
require('./bootstrap');

const app = createApp({})
const files = require.context('./Components', true, /\.js$/i)
files.keys().map(key => app.component(key.split('/').pop().split('.')[0], files(key).default))

app.mount('#app')
