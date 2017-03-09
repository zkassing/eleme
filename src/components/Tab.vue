<template>
  <div class="tab">
    <nav>
      <ul>
        <li><router-link to="/goods">商品</router-link></li>
        <li><router-link to="/ratings">评价</router-link></li>
        <li><router-link to="/seller">商家</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scope>
  ul{
    display: flex;
    justify-content: space-between;
    height: 40px;
    font-size:14px;
    color: rgb(77,85,93);
    line-height: 40px;
    border-bottom:solid 1px rgba(7,17,27,.1);

    li{
      flex: 1;
      a{
        display: block;
        text-align: center;
      }
    }
    .active{
      color:rgb(240,20,20)
    }
  }
</style>

<script>
  export default{
    name: "tab",
    data(){
        return{
            msg:"tab"
        }
    }


  }
</script>
