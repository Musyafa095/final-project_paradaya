import './style.css'
import 'font-awesome/css/font-awesome.css';
import router from './router';


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
pinia.use(({store}) => {
    store.router = markRaw(router)

})
app.use(router)
app.mount('#app')
