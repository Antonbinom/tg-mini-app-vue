
import { createApp } from 'vue'
import App from './App.vue'
import VueTelegram from 'vue-tg'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import '@/styles/main.css'
import 'primeicons/primeicons.css';


const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});
app.use(router)
app.use(VueTelegram)

app.mount('#app')

