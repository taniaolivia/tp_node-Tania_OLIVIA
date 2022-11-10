<template>
    <div>
        <HeaderUser v-if="!admin"/>
        <HeaderAdmin v-if="admin"/>
        <h2><u>LIST OF POSTS</u></h2>
        <b-table sticky-header bordered striped hover :items="posts" head-variant="dark"> 
        </b-table>
    </div>
</template>
  
<script>
  export default {
    name: 'ListPostsPage',

    data() {
        return {
            posts: null,
            admin: false,
            size: "20px"
        }
    },
    created() {
        this.$api
            .get("posts", {
                headers: {
                    "Authorization": this.$store.state.token
                }
            })
            .then(res => {
                this.posts = res.data
            })
            .catch(error => {
                console.log(error)
            })
        
        if(this.$store.state.user.admin){
            this.admin = true
        }
        else{
            this.admin = false
        }
    }
  }
  </script>
  
<style scoped>
    h2{
        text-align: center;
        margin: 50px 0 70px 0;
    }
</style>