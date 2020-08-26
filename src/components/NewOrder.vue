<template>
  <div class="newOrder">
    <span>
      <h2> {{msg}} </h2>
    </span>
    <form class="container">
      <label> <b>Date : </b> </label> 
      <input type="date" v-model="newOrder.date" >
      <br>
      <label> <b> First Name : </b> </label> 
      <input type="text" placeholder="Enter First Name" v-model.lazy="newOrder.recFN">
      <br>
      <label> <b> Last Name : </b> </label> 
      <input type="text" placeholder="Enter Last Name" v-model.lazy="newOrder.recLN">
      <br>
      <label> <b> Gift Card Value (Rs) : </b> </label> 
      <input type="number" placeholder="Enter Gift Card Value" v-model.lazy="newOrder.gcv">
      <br>
      <label> <b> Commission Amount : </b> </label> 
      <input type="number" placeholder="Commission Amt" @click="TotalComm" v-model.lazy="newOrder.comAmt">
      <br>
      <label> <b> Amount Payable: </b> </label> 
      <input type="number" placeholder="Payable Amt" @click="AmtPayable" v-model.lazy="newOrder.amtPay">
      <br>
      <label> <b> Mobile No : </b> </label> 
      <input type="number" placeholder="Mobile No" v-model.lazy="newOrder.recMob">
      <br>
      <label> <b> Address : </b> </label> 
      <input type="text" placeholder="Address" v-model.lazy="newOrder.addr">
     <br>
     <button type="button" v-on:click="PlaceOrder()"> Place Order </button>
     <br>
     <button type="button" v-on:click="previous()"> User Profile </button>  
      <br>
    </form>
  </div>
</template>

<script>
export default {
    name:'newOrder',
    data:function(){
        return{
            msg:"Pee-A-Boo Gift Cards - Place New Order Here",
            id:null,
            newOrder:{
                "date": "",
                "recFN":"",
                "recLN":"",
                "gcv":"",
                "comAmt":"",
                "amtPay":"",
                "recMob":"",
                "addr":"",
                "sts":"Order Placed"
            },
            error:[]
        }
    },

    methods:{
        PlaceOrder: function(){
           let validateOrder = this.ValidatePO()
      if(localStorage){
          localStorage.setItem("newOrder"+this.newOrder.id, JSON.stringify(this.newOrder))
      }
      if(validateOrder){
          this.$http.post('http://localhost:3000/newOrder', this.newOrder)
          .then(res=>{
              console.log(res)
          },err=>{
              console.log(err)
          })
      }
    },
    ValidatePO: function(){
       console.log("Placing new Order")
       if(this.newOrder.id == 0){
       this.error.push("Id must be non zero")
       return false
     }

     return true
    },
     previous:function(){
          this.$router.push({path:'/userprofile'})
          console.log("previous page")
      },
      TotalComm(){        
          this.newOrder.comAmt =  this.newOrder.gcv * 10 / 100         
      },
      AmtPayable(){
      var v1=  +this.newOrder.gcv
        var v2 = this.newOrder.comAmt
        var res= v1 +v2
        this.newOrder.amtPay =res
      }

    }
}
</script>
<style scoped>

input[type=text] , input[type=date], input[type=number]{
  width: 25%;
  padding: 10px;
  margin: 5px 0 22px 0;
  border: none;
  background: lightgrey;
   float:center;
  align-content: left;
}

h2,b{
  color: #265606
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

.mandatory{color:red;}

</style>