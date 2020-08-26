<template>
<div class="commission">
<h1> {{msg}} </h1>
<form class="container">
   <div >
   <table id="com">
   <thead>
   <tr>
            <th> Order Id</th>
             <th> Recipient Name </th>
            <th> Gift Card Value (Rs) </th>
             <th> Commission Amount (5%) </th> 
             
   </tr>
   </thead>
   <tbody v-for="getcom in newOrder" :key="getcom.id">
   <tr>
        <td> {{getcom.id}} </td>
          <td> {{getcom.recFN}} {{getcom.recLN}} </td>
              <td> INR {{getcom.gcv}} </td>
                <td> {{getcom.comAmt}} </td>
              
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
           msg:'Bloom Gift Cards - Commission Report',
           newOrder:[]
       }
    },
    methods:{
        GetComReport: function(){
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
      },
      totcom:function(){
        this.newOrder.comAmt = this.newOrder.comAmt + this.newOrder.comAmt
        console.log("comm")
      }

    },
    
    created:function(){
    this.GetComReport()
  }
    
  
}
    </script>  

<style scoped>
h1{
  color: #265606;
}
#com {

  border-collapse: collapse;
  width: 100%;
}

#com td, #com th {
  border: 1px solid #ddd;
  padding: 8px;
}

#com tr:nth-child(even){background-color: lightgreen;}

#com tr:hover {background-color: lightgrey;}

#com th {
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
  color:black;
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