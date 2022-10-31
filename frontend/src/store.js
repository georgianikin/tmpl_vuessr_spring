
import Vuex from 'vuex'

//init store
const store = new Vuex.Store({
    state: {
        globalError: '',
        user: {
            authenticated: false
        }
     },
     mutations: {
         setGlobalError (state, error) {
             state.globalError = error
         }
     }
})

export default store