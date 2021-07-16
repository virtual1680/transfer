import {createApp } from 'vue';
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// import qTransfer from '../lib/q-transfer.js';
import qTransfer from './lib/index';
const app = createApp(App);
app.use(ElementPlus);
app.use(qTransfer);
app.mount('#app');

