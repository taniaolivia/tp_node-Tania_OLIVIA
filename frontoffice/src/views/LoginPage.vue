<template>
    <div id="login">
      <HeaderUser/>

      <b-card header="LOGIN">
        <b-form>
            <b-form-group
            id="email"
            label="Email :"
            label-for="email"
            >
                <b-form-input
                    id="email"
                    v-model="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                ></b-form-input>
            </b-form-group>
    
            <b-form-group id="password" label="Password :" label-for="password">
                <b-form-input
                    id="password"
                    v-model="password"
                    placeholder="Enter your password"
                    required
                ></b-form-input>
            </b-form-group>

            <router-link to="/register" id="account">Don't have any account ?</router-link>
            
            <b-button variant="success" v-on:click="login()">Submit</b-button>
        </b-form>
      </b-card>
    </div>
  </template>

<script>
export default {
    name: 'LoginPage',
    data() {
      return {
        email: null,
        password: null,
        admin: false
      }
    },
    methods: {
        login() {
            this.$api
            .post("user/login", {
                email: this.email,
                password: this.password
            })
            .then((res) => {
                this.$store.commit('setToken', res.data.token)
                this.$store.commit('setUser', res.data.user)
                this.$router.push("/")
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

#account{
  float: right;
}
</style>