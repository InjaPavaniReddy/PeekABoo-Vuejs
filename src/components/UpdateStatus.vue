<template>
<div class="UpdateStatus">
<h1> {{msg}} </h1>
<form class="container">
   <div >
   <table id="sts">
   <thead>
   <tr>
            <th> Order Id</th>
             <th> Name </th>
             <th> Ordered Date </th>
             <th> Gift Card Value (Rs) </th>
             <th> Commission Amount (5%) </th> 
             <th> Amount Payable </th>
             <th> Update Delivery Status </th>
             
   </tr>
   </thead>
   <tbody v-for="sts in newOrder" :key="sts.id">
   <tr>
        <td> {{sts.id}} </td>
          <td> {{sts.recFN}} {{sts.recLN}} </td>
            <td> {{sts.date}} </td>
              <td> INR {{sts.gcv}} </td>
                <td> INR {{sts.comAmt}} </td>
                <td> INR {{ sts.amtPay}} </td>
                <td>  <button type="button" @click="updateSts"> STS </button> </td>              
              
   </tr>
   </tbody>   
   </table>   
      <button type="button" v-on:click="previous()"> Previous </button>  <br>
        </div>               
        </form>
</div>
</template>
<script>

export default {
    name:'updatestatus',
    data: function(){
       return{
           msg:'Peek-A-Boo Gift Cards - Order Status',
           newOrder:[],
           status:"Delivered"
       }
    },
    methods:{
        GetUpdateSts: function(){
            this.$http.get('http://localhost:3000/newOrder')
            .then(res=> {
                console.log(res.data)
                this.newOrder = res.data
            }, err=> {
                console.log(err)
            })
        },
         previous:function(){
          this.$router.push({path:'/adminprofile'})
          console.log("previous page")
        }
    },
    
    created:function(){
    this.GetUpdateSts()
  }
}
</script>
<style scoped>
h1{
  color: #265606;
}
#sts {

  border-collapse: collapse;
  width: 100%;
}

#sts td, #sts th {
  border: 1px solid #ddd;
  padding: 8px;
}

#sts tr:nth-child(even){background-color: lightgreen;}

#sts tr:hover {background-color: lightgreen;}

#sts th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #265606;
  color: white;
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
  opacity: 0.9;
  
}
button:hover {
  opacity:1;
}
</style>