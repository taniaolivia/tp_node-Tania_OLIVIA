<template>
    <div id="createPost">
      <HeaderAdmin/>
      <b-card header="CREATE A POST">
        <b-form>
            <b-form-group id="title" label="Title :" label-for="title">
                <b-form-input id="title" v-model="title" type="text" placeholder="Enter a title" required/>
            </b-form-group>
    
            <b-form-group id="content" label="Content :" label-for="content">
                <b-form-textarea id="title" v-model="content" placeholder="Enter a content" rows="3" max-rows="6" required/>
            </b-form-group>
            
            <b-button variant="success" v-on:click="createPost()">Add</b-button>
        </b-form>
      </b-card>
    </div>
  </template>

<script>
export default {
    name: 'CreatePostPage',

    data() {
      return {
          email: null,
          password: null,
          admin: false,
          title: null,
          content: null
      }
    },
    methods: {
      createPost(){
        this.$api
            .post("posts", 
            {
              title: this.title,
              content: this.content
            },
            {
                headers: {
                    "Authorization": this.$store.state.token
                }
            })
            .then(res => {
                this.posts = res
                this.$router.push("/posts");
            })
            .catch((error) => {
                console.log(error)
            })
      }
    }
}
</script>

<style scoped>
.card{
    margin: 5rem auto;
    max-width: 500px;
}

.card-header{
    text-align: center;
    font-size: 25px;
    background-color: rgb(66, 64, 64);
    color: white;
    padding: 20px;
}

form{
    padding: 30px 30px 50px 30px;
}

.form-control{
    margin: 10px 0 20px 0;
}

.btn-success{
    margin: 35px 40% 0 40%;
}

table{
  border: 4px solid black;
  width: 20px !important;
}
</style>