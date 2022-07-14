import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router.js'
import store from './store/index.js';

//global components 
import BaseButton from './components/ui/BaseButton.vue';
import PageHeader from './components/layout/PageHeader.vue';
import SubHeader from './components/layout/SubHeader.vue';

const app = createApp(App);

app.use(router);
app.use(store);
app.component('base-button', BaseButton);
app.component('page-header', PageHeader);
app.component('sub-header', SubHeader);

app.mount('#app');