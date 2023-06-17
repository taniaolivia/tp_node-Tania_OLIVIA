<template>
    <div>
        <HeaderUser v-if="!admin"/>
        <HeaderAdmin v-if="admin"/>

        <h2><u>LIST OF POSTS</u></h2>
        
        <div class="posts">
            <div class="post" v-for="post in posts" v-bind:key="post.id" v-on:click="chosePost(post)">
                <h4><u>Title</u></h4>
                <span>{{ post.title }}</span>
            </div>
        </div>

    </div>
</template>
  
<script>
  export default {
    name: 'ListPostsPage',

    data() {
        return {
            posts: null,
            admin: false,
            size: "20px",
            chosenPost: null,
        }
    },
    created() {

        if (localStorage.getItem('posts')) {
            this.posts = JSON.parse(localStorage.getItem('posts'));
        } else {
            this.fetchPosts();
        }

        if(this.$store.state.user.admin){
            this.admin = true
        }
        else{
            this.admin = false
        }

    },
    
    methods: {
        chosePost(post) {
            this.chosenPost = post;
            this.$store.commit('setChosenPost', this.chosenPost)
            this.$router.push(`posts/${this.chosenPost._id}`)
        },
        fetchPosts() {
            this.$api
            .get('posts', {
                headers: {
                Authorization: this.$store.state.token,
                },
            })
            .then((res) => {
                this.posts = res.data;
                this.$store.commit('setPosts', this.posts);
                localStorage.setItem('posts', JSON.stringify(this.posts));
            })
            .catch((error) => {
                console.log(error);
            });
        },
    },
    mounted() {
        if (navigator.onLine) {
            this.fetchPosts();
        }
        else {
            this.posts = JSON.parse(localStorage.getItem('posts'));
        }
    },
  }
  </script>
  
<style scoped>
    h2{
        text-align: center;
        margin: 50px 0 70px 0;
    }

    .posts {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .post {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 1em;
        width: 200px;
        height: 130px;
        border: 4px dashed skyblue;
    }
    
    .post span {
        font-size: 1.2em;
    }

    .post:hover {
        background-color: skyblue;
        border: 4px dashed whtie;
        color: white;
        cursor: pointer;
    }
</style>