<template>
    <div>
        <HeaderUser v-if="!admin"/>
        <HeaderAdmin v-if="admin"/>
        
        <h2><u>POST</u></h2>

        <div class="infos-container">
            <div class="infos">
                <div class="info">
                    <h4><u>Title</u></h4>
                    <span>{{ post.title }}</span>
                </div>

                <div class="info">
                    <h4><u>Content</u></h4>
                    <span>{{ post.content }}</span>
                </div>

                <div class="info">
                    <h4><u>Created at</u></h4>
                    <span>{{ post.created_at }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
  export default {
    name: 'ListPostsPage',

    data() {
        return {
            post: null,
            admin: false,
            size: "20px"
        }
    },
    created() {
        if (localStorage.getItem('post')) {
            this.post = JSON.parse(localStorage.getItem('post'));
        } else {
            this.fetchPost();
        }
        
        if(this.$store.state.user.admin){
            this.admin = true
        }
        else{
            this.admin = false
        }
    },
    methods: {
        fetchPost() {
            this.$api
            .get(`posts/${this.$store.state.post._id}`, {
                headers: {
                    "Authorization": this.$store.state.token
                }
            })
            .then(res => {
                this.post = res.data
                localStorage.setItem('post', JSON.stringify(this.post));

            })
            .catch(error => {
                console.log(error)
            })
        },
    },
    mounted() {
        if (navigator.onLine) {
            this.fetchPost();
        }
        else {
            this.post = JSON.parse(localStorage.getItem('post'));
        }
    },
}

</script>
  
<style scoped>
    h2{
        text-align: center;
        margin: 50px 0 70px 0;
    }
    
    .infos-container {
        display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
    }

    .infos {
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       width: 400px;
       height: auto;
       border: 4px dashed skyblue;
    }

    .info {
        margin: 1em auto;
        text-align: center;
    }
</style>