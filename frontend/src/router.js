import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory
} from 'vue-router'


// Auto generates routes from vue files under ./pages
// https://vitejs.dev/guide/features.html#glob-import

const routes = [
    {
	 path: '/',
     component: () => import('./components/layouts/PortalLayout.vue'),
     children: [
		{path: '', component: () => import('./components/portal/Home.vue')},
	 ]
    },
    {
	 path: '/admin',
     component: () => import('./components/layouts/AdminLayout.vue')
     //children: []
    }
  ]

export function createRouter() {
  return _createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes
  })
}
