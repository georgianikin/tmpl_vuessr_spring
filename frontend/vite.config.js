const vuePlugin = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')
import Inspect from 'vite-plugin-inspect'

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  plugins: [
    vuePlugin(),
    vueJsx(),
    Inspect(),
    {
      name: 'virtual',
    }
  ],
  build: {
	cssCodeSplit: true,
    minify: true
  },
  server: {
	  proxy: {
	    '/api': {
	      target: 'http://localhost:9000/',
	      changeOrigin: true,
	    }
	  }	
	}
}