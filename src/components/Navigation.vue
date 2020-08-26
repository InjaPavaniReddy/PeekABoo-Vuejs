<template>

    <div class="topnav">
    <a class="active" > <img alt="Cat logo" src="../assets/cat-png-logo-1.png"> </a> 
    <a> <router-link to="/" exact>Home</router-link> </a>
    <a>  <router-link to="/register" exact>Register</router-link> </a>
    <a>  <router-link to="/admin" exact>Admin</router-link> </a>       
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>

.topnav {
  background-color:#62BE26 ;
  overflow: hidden;
}

.topnav a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px 12px;
  text-decoration: none;
  font-size: 25px;
 
}

.topnav a:hover {
  background-color:#265606 ;
 color: white;
}

.topnav a.active {
  background-color: #62BE26;
  color: white;
}

.router-link-active{
    background-color: lightgreen;
}

</style>