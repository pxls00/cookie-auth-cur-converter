// Create app
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// Pinia
import { createPinia } from 'pinia'
app.use(createPinia())

// Router
import router from './router'
app.use(router)

// Styles
import '@/assets/styles/main.scss'

//Custom UI components
import ui from '@/components/ui'
ui.forEach((uiItem) => {
  app.component(uiItem.name, uiItem)
})

// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)

// provide
app.mount('#app')
