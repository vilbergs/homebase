import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Login from './views/Login.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Dashboard },
    { path: '/login', component: Login },
  ],
})

app.use(router)
app.mount('#app')
