import './assets/scss/app.scss';
import "@voerro/vue-tagsinput/dist/style.css";

import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import VoerroTagsInput from '@voerro/vue-tagsinput';
Vue.component('tags-input', VoerroTagsInput);
 
Vue.use(VueAxios, axios)

import App from './App.vue'
import Example from './Example.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

