import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import CustomInput from './components/UI/CustomInput.vue'
import BaseButton from './components/UI/BaseButton.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
const app = createApp(App)
library.add(faBars,faXmark)
app.use(router)
app.use(store)
app.component('custom-input',CustomInput)
app.component('font-awesome-icon',FontAwesomeIcon)
app.component('base-button',BaseButton)
app.mount('#app')
