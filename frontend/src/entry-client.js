import { createApp } from './main'
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';

const { app, router } = createApp()

// wait until router is ready before mounting to ensure hydration match
router.isReady().then(() => {
  app.mount('#app')
})
