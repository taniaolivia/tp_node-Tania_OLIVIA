<template>
  <div id="home">
    <HeaderAdmin v-if="admin"/>
    <HeaderUser v-else/>

    <div id="welcome">
      <h1>Welcome {{user}} !</h1>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
      return {
        admin: false,
        user: ""
      }
  },
  created(){

    if(this.$store.state.user && this.$store.state.user.admin !== undefined){
        this.admin = true
    }
    else{
      this.admin = false
    }

    if(this.$store.state.user && this.$store.state.user.email !== undefined){
      this.user = this.$store.state.user.email
    }
    else{
      this.user = ""
    }
  },
}
</script>

<style scoped>
#welcome{
  margin: 350px 0;
}

h1{
  text-align: center;
}
</style>
