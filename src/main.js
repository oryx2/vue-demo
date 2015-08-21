var Vue = require('vue')
Vue.use(require('vue-resource'));
require('materialize-css/bin/materialize.css');
require('materialize-css/bin/materialize.js');
var Router = require('director').Router
var appOptions = require('./app.vue')
var app = new Vue(appOptions).$mount('#app')
var router = new Router()

router.on('/views/:page', function (page) {
    if(page==='input'){
        app.view = 'input-view'
    }else if(page==='directive'){
        app.view = 'directive-view'
    }else if (page==='component'){
        app.view = 'component-view'
    }
})

router.init();
