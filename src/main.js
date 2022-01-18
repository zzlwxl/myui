import { createApp } from 'vue'
import './index.scss'
import './lib/zzl.scss'
import App from './App.vue'
import router from './router'
import 'github-markdown-css'

createApp(App).use(router).mount('#app')
