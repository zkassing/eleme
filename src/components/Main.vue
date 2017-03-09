<template>
  <div class="main">
    <vHeader :seller="seller"></vHeader>
    <vTab></vTab>
    <vFooter></vFooter>
  </div>
</template>

<script>
  import vHeader from './Header'
  import vTab from "./Tab"
  import vFooter from "./Footer"

  const ERR_OK = 0;

  export default {
    name: 'hello',
    data () {
      return {
        seller:{}
      }
    },
    created(){
    	this.$http.get('/api/seller').then((response) => {
    		response = response.body;
    		if(response.errno === ERR_OK){
          this.seller = response.data;
        }
      })
    },
    components:{
    	vHeader,vTab,vFooter
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
