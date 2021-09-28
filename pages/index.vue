<template>
   <div id="index">
     <div class="background">
       <div class="flex-container">
         <h1>Добавление товара</h1>
         <sorting/>
       </div>
       <div class="flex-container block_2">
         <form_submission/>
         <products/>
       </div>
     </div>
  </div>
</template>

<script>
import Sorting from "~/components/sorting";
import Form_submission from "~/components/form_submission";
import Products from "~/components/products";
export default {
  components: {Products, Form_submission, Sorting},
  created: function () {
    this.$store.dispatch('catalogStore/refreshSavedState')
  }
}
</script>
<style  lang="scss">
  body{margin: 0 !important;}
  #index{
    margin-left: auto;
    margin-right: auto;
    width: 1440px;
    position: relative;
  }
  .flex-container{display: flex;}
  h1{
    margin: 0 !important;
    padding-top: 32px;
    padding-left: 32px;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    color: #3F3F3F;
    float: left;
  }
  /*
  @media screen and (min-width: 350px)and (max-width: 400px) {
    .background{
      width: 1200px;
    }
  }
  @media screen and (min-width: 240px)and (max-width: 350px)  {
    .background{
      width: 900px;
    }
  }
  @media screen and (max-width: 240px) {
    .background{
      width: 300px;
    }
    .block_2{
      flex-direction: row;
      display: block;
    }
  }*/

</style>
<style>
  @media screen and (min-width: 1300px)and (max-width: 1455px) {
    #index{
      width: 1295px !important;
    }
  }
  @media screen and (min-width: 1300px)and (max-width: 1350px) {
    #index{
      width: 1280px !important;
    }
  }
  @media screen and (min-width: 1200px)and (max-width: 1300px) {
    #index{
      width: 1180px !important;
    }
  }
  @media screen and (max-width: 1200px) {
    #index{
      width: 1040px !important;
    }
  }
</style>
