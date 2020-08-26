<template>
  <div class="welcome">
    <h1>{{ msg }}</h1>
  <img alt="gift card" src="../assets/peekaboo__logo_design.g.jpg">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function(){
    return {
      msg: ' Peek-A-Boo Gift Cards '
    }
  }
}
</script>

<style scoped>

h1 {
  color: #265606;
}
</style>
