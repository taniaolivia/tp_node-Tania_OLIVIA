import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})
export default new Vuex.Store({
    plugins: [vuexLocal.plugin],
    state: {
        token: ""
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        setUser(state, user) {
            state.user = user
        }
    },
    actions: {},
    modules: {}
})