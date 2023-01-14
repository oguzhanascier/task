<template>

  <router-view/>
</template>

<script>
import { mapActions } from 'vuex';
export default{

 computed:{
  ...mapActions(['getData'])

 } ,
 created(){
 this.getData
 }
}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
body{
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
}
</style>
