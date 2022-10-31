
import { createMemoryHistory, createWebHistory } from 'vue-router'

export default {
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  routes: [
	    {
		 path: '/',
	     component: () => import('./components/layouts/PortalLayout.vue'),
	     children: [
			{path: '', component: () => import('./components/portal/Home.vue')},
		 ]
	    },
	    {
			path: '/login',
			name: 'Login',
	     	component: () => import('./components/layouts/AdminLayout.vue')
		},
	    {
		 path: '/admin',
	     component: () => import('./components/layouts/AdminLayout.vue')
	     //children: []
	    }
	]
}
/*
const router = VueRouter.createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR ? VueRouter.createMemoryHistory() : VueRouter.createWebHistory(),
    routes
  })

router.beforeResolve((to, from, next) => {
    const user = store.state.user.user;  //store with namespaced  modules
    if (to.matched.some(record => record.meta.requiresLogin) && user.isLoggedIn) {
       next() //proceed to the route
    } else next("/login")  //redirect to login

})

export default router*/