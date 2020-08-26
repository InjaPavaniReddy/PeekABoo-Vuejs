<template>
  <div class="Register">
    <span>
      <h1> {{msg}} </h1>
    </span>
    <form class="container">
      <label> <span class="mandatory"> * </span> <b>User Name </b> </label> : 
      <input type="text" placeholder="Enter User name " v-model.lazy="reg.userName" required> 
      <br>
      <label> <span class="mandatory"> * </span> <b>Email </b> </label> :
      <input type="text" placeholder="Enter Email" v-model.lazy="reg.email" required>
      <br>
      <label> <span class="mandatory"> * </span> <b>Password </b> </label> :
      <input type="text" placeholder="Enter Password" v-model.lazy="reg.password" required> 
      <br>
      <label> <span class="mandatory"> * </span> <b> Confirm  Password </b> </label> :
      <input type="text" placeholder="Enter Confirm Password" v-model.lazy="reg.confirmPassword" required>
      <br>
      <button type="button"  v-on:click="PeekABooSignUp()">SignUp</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data: function(){
    return {
          msg:"Pee-A-Boo : SignUp",
          reg:{
             "userName":"",
             "email": "",
             "password": "",
             "confirmPassword":""
          },
          error:[]
      }
  },
  methods:{
    PeekABooSignUp: function(){
      let registration = this.ValidateRegister()
      if(localStorage){
          localStorage.setItem("reg"+this.reg.id, JSON.stringify(this.reg))
      }
      if(registration){
              this.$http.get('http://localhost:3000/register')
                .then(res=>{
                  console.log(res)
                  this.$router.push({path:'/userprofile'})
                }, err=>{
                  console.log(err)
                })
          }
    },
     ValidateRegister: function(){
     console.log("Validating User details");
     if(this.reg.id == 0){
       this.error.push("Id must be non zero")
       return false
     }
     if(this.reg.userName === ""){
       this.error.push("Username is required")
       return false
     }
     if(this.reg.email === ""){
       this.error.push("Email is required")
       return false
     }     
     return true
   }
  } 
}
</script>

<style scoped>
h1,b {
  color: #265606;
}
input[type=text] {
  width: 25%;
  padding: 10px;
  margin: 5px 0 22px 0;
  border: none;
  background: #ebebe0;
   float:center;
  align-content: left;
}

button {
  background-color:lightgreen;
  color: black;
  padding: 10px;
  margin: 5px 0 22px 0;
  border: none;
  cursor: pointer;
  width: 18%;
  opacity: 1.2;  
}

.mandatory{
  color:red;
  }

button:hover {
  opacity:1;
}
.container {
  padding: 18px;
  
}


</style>