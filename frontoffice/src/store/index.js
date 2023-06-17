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
        token: "",
        user: "",
        posts: [],
        post: "",
        visitedPages: []
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        setUser(state, user) {
            state.user = user
        },
        setPosts(state, posts) {
            state.posts = posts
        },
        setChosenPost(state, post) {
            state.post = post
        },
        setVisitedPages(state, visitedPages) {
            state.visitedPages = visitedPages
        },
    },
    actions: {},
    modules: {}
})