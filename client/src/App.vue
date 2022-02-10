<template id="app"> 
    <router-view/>   
</template>
<script>
export default {
  sockets:{
      connect: function(){
        console.log('socket connected')
      },
    },
  }
</script>
<style lang="scss">
html,body{
  height : 100%;
  background-color : #222324;
  
}
</style>
