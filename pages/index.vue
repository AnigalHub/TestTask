<template>
   <div>
     <div class="background">
       <div class="flex-container">
         <h1>Добавление товара</h1>
         <sorting/>
       </div>
       <div class="flex-container">
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
  .background{
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
  @media screen and (max-width: 400px) {
    .background{
      width: 1300px;
    }
  }
</style>
