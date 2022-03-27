const vuePlugin = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  plugins: [
    vuePlugin(),
    vueJsx(),
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