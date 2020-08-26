<template>
  <div class="userprofile">
    <h1> {{msg}} </h1>
    <form class="container">        
      <a><router-link to="/newOrder" exact> Order Gift Card </router-link> </a><br>      
      <a><router-link to="/orderhistory" exact> Order History </router-link> </a><br><br>
      <a><button type="button" v-on:click="logout()"> Log Out</button>    </a>       
    </form>
  </div>
</template>

<script>
export default {
    name:'userprofile',
    data: function(){
        return{
            msg:"Peek-A-Boo Gift Cards",
            up:"userName"
        }
    },
    methods:{
        logout(){
             this.$router.push({path:'/register'})
            console.log("User Logging Off")
        }
    }   
}


</script>

<style scoped>
h1,a {
  color: #265606;
}
.container {
  padding: 16px;
  
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
button:hover {
  opacity:1;
}
</style>