<template>
<div class="admin">
<span>
<h1> {{msg}} </h1>
</span>
<form class="container">
<label> <b> Admin User : </b> </label>
<input type="text" placeholder="Admin ID" v-model.lazy="adm.adminUser" required>
<br>
<label> <b> Admin Pass : </b> </label>
<input type="text"  placeholder="Admin Password" v-model.lazy="adm.adminPass" required>
<br>
<button type="button" v-on:click="adminLogin()"> Admin Log-In </button>
</form>
</div>
</template>
<script>
export default{
    name:"admin",
    data: function(){
        return {
            msg:"Peek-A-Boo Gift Cards - Administrator",
            adm:{
                "adminUser":"",
                "adminPass":""
            },
          error:[]
          
        }
    },
    methods:{
        adminLogin(){
            let validAdminBloom = this.ValidateAdmin()
        if(validAdminBloom){
            this.$http.get("http://localhost:3000/admin")
            .then(res=> {
                console.log(res)
                 this.$router.push({path:'/adminprofile'})
            }, err=> {
                console.log(err)
            })
        }

        },
        ValidateAdmin: function(){
            console.log("Validating Admin credentials ")
            if(this.adm.id==1){
                 this.error.push("Id must be one only")
                  console.log("Welcome admin")
                return false
            }
            if(this.adm.adminUser != "admin" && this.adm.adminPass != "admin"){
                console.log("Sorry, You are Not admin")
                return false
            }
            return true
    }
} 
}

</script>
<style scoped>
h1,b{
  color:#265606
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
  opacity: 0.9;
  
}
button:hover {
  opacity:1;
}
.container {
  padding: 16px;
  
}
</style>