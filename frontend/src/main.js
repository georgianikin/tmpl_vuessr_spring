import App from './App.vue'
import { createSSRApp } from 'vue'
import { createHead } from '@vueuse/head'
import routerOptions from './router'
import { createRouter } from 'vue-router'

import store from './store'

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  const app = createSSRApp(App)
  const head = createHead()
  
  const router = createRouter(routerOptions)

	/*router.beforeEach((to, from, nex) => {
	    const user = store.state.user;  //store with namespaced  modules
	    if (to.path !== '/login' && !user.authenticated) {
	       nex("/login") //proceed to the route
	    } else nex()  //redirect to login
	
	})*/

  app.use(router)
  app.use(store)
  app.use(head)
  return { app, router, head }
}
