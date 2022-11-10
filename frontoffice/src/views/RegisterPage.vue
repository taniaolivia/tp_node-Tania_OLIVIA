<template>
    <div id="register">
      <HeaderUser/>
      <b-card header="REGISTER">
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
            
            <b-form-group label="Admin :" v-slot="{ ariaDescribedby }">
              <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" value="1">Yes</b-form-radio>
              <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" value="0">No</b-form-radio>
            </b-form-group>

            <router-link to="login" id="account">Already have an account ?</router-link>

            <b-button variant="success" v-on:click="register()">Submit</b-button>
        </b-form>
        <p>{{message}}</p>
      </b-card>
    </div>
  </template>

<script>
export default {
    name: 'RegisterPage',
    data() {
      return {
          email: null,
          password: null,
          selected: 0,
          message: ""
      }
    },
    methods: {
      register() {
        this.$api
          .post("user/register", {
            email: this.email,
            password: this.password,
            admin: this.selected
          })
          .then(() => {
            this.$router.push("/login")
          })
          .catch(() => {
              this.message = "Account already existed !"
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

#admin{
  margin-left: 20px;
}

#account{
  float: right;
}

p{
  color: red;
  text-align: center;
}
</style>