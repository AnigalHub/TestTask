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
    padding: 32px 0 0 32px;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    color: #3F3F3F;
    float: left;
  }

</style>
<style>
  @media screen and (min-width: 1300px)and (max-width: 1455px) {
    #index{width: 1295px !important;}
  }
  @media screen and (min-width: 1300px)and (max-width: 1350px) {
    #index{width: 1280px !important;}
  }
  @media screen and (min-width: 1200px)and (max-width: 1300px) {
    #index{width: 1180px !important;}
  }
  @media screen and (min-width: 1100px) and (max-width: 1200px) {
    #index{width: 1040px !important;}
  }
  @media screen and (min-width: 1005px) and (max-width: 1100px) {
    #index{width: 995px !important;}
  }
  @media screen and (max-width: 1005px) {
    #index{width: 500px !important;}
  }
</style>
