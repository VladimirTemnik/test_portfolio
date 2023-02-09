import { createApp } from 'vue'


import App from './App.vue'
import store from "./store"
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import { router } from "/router";


const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App)
app.config.unwrapInjectedRef = true
app.use(vuetify)
app.use(store)
app.use(router)
app.mount('#app')


