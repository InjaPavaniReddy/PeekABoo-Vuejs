<template>
<div class="OrderHistory">

 <h1> {{msg}} </h1>
<!-- <button v-on:click="GetOrdHistory">Get Order History Data</button> -->
    <!-- <div>{{newOrder}}</div> -->
   
    <form class="container">
   <div >
   <table id="history">
   <thead>
   <tr>
            <th> Order Id</th>
             <th> Name </th>
             <th> Date </th>
             <th> Gift Card Value (Rs) </th>
             <th> Commission Amount (5%) </th> 
             <th> Delivery Status </th>  
   </tr>
   </thead>
   <tbody v-for="getorders in newOrder" :key="getorders.id">
   <tr>
        <td> {{getorders.id}} </td>
          <td> {{getorders.recFN}} {{getorders.recLN}} </td>
            <td> {{getorders.date}} </td>
              <td> INR {{getorders.gcv}} </td>
                <td> INR {{getorders.comAmt}} </td>
                <td> {{getorders.sts}} </td>
                
   </tr>
   </tbody>
   
   </table>
      <button type="button" v-on:click="previous()"> Previous </button>  
<br>
        </div>
        
        </form>
</div>
</template>
<script>

export default {
    name:'orderhistory',
    data: function(){
       return{
           msg:'Bloom Gift Cards - Here is your Order historys',
           newOrder:[]
       }
    },
    methods:{
        GetOrdHistory: function(){
            this.$http.get('http://localhost:3000/newOrder')
            .then(res=> {
                console.log(res.data)
                this.newOrder = res.data
            }, err=> {
                console.log(err)
            })
        },
         previous:function(){
          this.$router.push({path:'/userprofile'})
          console.log("previous page")
      }
      

    },
    
    created:function(){
    this.GetOrdHistory()
  }
    
  
}
</script>

<style scoped>
h1{
  color:#265606
}
#history {

  border-collapse: collapse;
  width: 100%;
}

#history td, #history th {
  border: 1px solid #ddd;
  padding: 8px;
}

#history tr:nth-child(even){background-color: #f2f2f2;}

#history tr:hover {background-color: #ddd;}

#history th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #265606;
  color: black;
}
.container {
  padding: 16px;
  
}
button {
  background-color:#265606;
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
</style>