const mix = require('laravel-mix');
require("laravel-mix-vue3");

mix.vue3('resources/js/app.js', 'public/js')
    .webpackConfig({
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm-bundler.js'
            },
        },
    }).version();
