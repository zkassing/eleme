<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper">

    </div>
  </div>
</template>

<style lang="scss" scope>
  .header {
    color: #42b983;

  a {
    color: #2c3e50;
  }

  }
</style>


<script>
  export default{
    props: {
      seller: {
        type: Object
      }
    },
    data(){
      return {
        msg: "header"
      }
    }
  }

</script>
