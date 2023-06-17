import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: () =>
            import ('../views/HomePage.vue')
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: () =>
            import ('../views/LoginPage.vue')
    },
    {
        path: '/register',
        name: 'RegisterPage',
        component: () =>
            import ('../views/RegisterPage.vue')
    },
    {
        path: '/posts',
        name: 'ListPostsPage',
        component: () =>
            import ('../views/ListPostsPage.vue')
    },
    {
        path: '/addPost',
        name: 'CreatePostPage',
        component: () =>
            import ('../views/CreatePostPage.vue')
    },
    {
        path: '/posts/:postId',
        name: 'PostPage',
        component: () =>
            import ('../views/PostPage.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router