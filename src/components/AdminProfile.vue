<template>
<div class="adminprofile">
<h1> {{msg}} </h1>
<form class="container">
                <router-link to="/updatests" exact> Order Status</router-link>
               <br>
                <router-link to="/commissionreport" exact> Commission Report </router-link>
                 <br>
                <button type="button" v-on:click="logout()"> Log Out</button>
             
</form>
</div>
</template>
<script>

export default {
    name:'adminprofile',
    data: function(){
        return{
            msg:"Hi Pavani",
            up:"userName"
        }
    },
    methods:{
        logout(){
             this.$router.push({path:'/admin'})
            console.log("Admin Logging Off")
        }
    }   
}

</script>

<style scoped>
h1{
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