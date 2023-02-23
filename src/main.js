import { createApp } from 'vue'

import App from './App.vue'
import store from "./store"
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import { router } from "/router";
import {worker} from "@/mocks/browser";

const vuetify = createVuetify({
    components,
    directives,
})

if (process.env.NODE_ENV === 'development') {
    worker.start()
}

const app = createApp(App)
app.config.unwrapInjectedRef = true
app.use(vuetify)
app.use(store)
app.use(router)
app.mount('#app')


