import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Profile from './views/Profile.vue'
import { authGuard, init } from './auth'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Dashboard, beforeEnter: authGuard },
    { path: '/profile', component: Profile, beforeEnter: authGuard },
  ],
})

async function initialize() {
  const AuthPlugin = await init({
    onRedirectCallback: (appState) => {
      router.push(
        appState && appState.targetUrl
          ? appState.targetUrl
          : window.location.pathname
      )
    },
  })

  createApp(App).use(AuthPlugin).use(router).mount('#app')
}

initialize()
