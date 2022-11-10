<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand><router-link to="/">Home</router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
       <b-nav-item disabled v-if="!connected"><router-link to="/posts" v-bind:style="{color: color}">List of posts</router-link></b-nav-item>
       <b-nav-item v-if="connected"><router-link to="/posts">List of posts</router-link></b-nav-item>
      </b-navbar-nav>
    </b-collapse>

    <b-navbar-nav class="ml-auto">
        <b-nav-item v-on:click="logout()" v-if="connected">Logout</b-nav-item>
        <b-nav-item v-if="!connected"><router-link to="/login">Login</router-link></b-nav-item>
      </b-navbar-nav>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'HeaderUser',
  data(){
    return {
      color: "gray",
      connected: false
    }
  },
  methods: {
      logout() {
          this.$api
          .post(`user/logout/${this.$store.state.user.id}`, {})
          .then(() => {
              this.$store.commit('setUser', '')
              this.$store.commit('setToken', '')
              this.connected = false
              
              if(this.$route.path == "/"){
               
               window.location.reload()
             }
             else{
               this.$router.push("/")
             }
          })
          .catch((error) => {
              console.log(error)
          })
      }
  },
  created() {
      if(this.$store.state.user){
        this.connected = true
      }
      else{
        this.connected = false
      }
  }
}
</script>

<style scoped>
.navbar{
  padding: 20px 50px;
}

li:nth-of-type(1){
  margin: 0 0 0 60px;
}

a{
  margin: auto;
  color: white;
  text-decoration: none;
}
</style>
