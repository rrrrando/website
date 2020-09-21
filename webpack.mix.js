const mix = require('laravel-mix');
require("laravel-mix-vue3");

mix.vue3('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
