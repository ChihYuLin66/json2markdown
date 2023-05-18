import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import App from './App.vue'

const app = createApp(App)

app.config.devtools = true;

app.mount('#app')