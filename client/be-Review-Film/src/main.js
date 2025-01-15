import './style.css'
import 'font-awesome/css/font-awesome.css';
import router from './router';


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.use(router)
app.mount('#app')
