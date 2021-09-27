<template>
  <div id="products">
    <div class="product" v-for="(product,index) in Products" :key="index">
      <div  class="basket"  @click="deleteToProducts(index)">
        <component :is="basket"/>
      </div>
      <img :src="product.imgSrc">
      <div class="text_product">
        <p class="name_product">{{product.nameProduct}}</p>
        <p class="description_product">{{product.descriptionProduct}}</p>
        <p class="price_product">{{numberWithSpaces(product.priceProduct)}} руб.</p>
      </div>
    </div>
  </div>
</template>

<script>
  import BasketSVG from "~/components/svg/basket";
    export default {
      name: "products",
      data() {
        return {
          basket: BasketSVG,
        }
      },
      computed:{
        Products: function () {
          return this.$store.getters['catalogStore/Products']
        }
      },
      methods:{
        deleteToProducts:function (index) {
          this.$store.dispatch('catalogStore/deleteProductState',index)
        },
        numberWithSpaces(x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
      },
    }
</script>

<style scoped lang="scss">
  #products{
    padding-top: 8px;
    display: flex;
    flex-wrap: wrap;
    width: 1028px;
    .product{
      background: #FFFEFB;
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
      border-radius: 4px;
      margin-bottom: 16px;
      width: 332px;
      height: 423px;
      position: relative;
      &:nth-child(3n+2){
        margin-left: 16px;
        margin-right: 16px;
      }
      &:hover{cursor: pointer;}
      &:hover .basket{display: block;}
      .basket{
        display: none;
        position: absolute;
        top:-8px;
        right: -8px;
      }
      img{
        width: 100%;
        height: 200px;
      }
      .text_product{
        padding: 16px 16px 0;
        .name_product{
          word-wrap:break-word;
          font-size: 20px;
          line-height: 25px;
          height: 25px;
        }
        .description_product{
          word-wrap:break-word;
          overflow: auto;
          padding-top: 16px;
          font-size: 16px;
          line-height: 20px;
          height: 80px;
        }
        .price_product{
          height: 30px;
          padding-top: 32px;
          font-size: 24px;
          line-height: 30px;
        }
        .name_product,.price_product{font-weight: 600;}
        .name_product,.description_product,.price_product{
          margin: 0 !important;
          color: #3F3F3F;
          font-family: 'Source Sans Pro', sans-serif;
        }
      }
    }
  }
  @media screen and (max-width: 400px) {
    #products .product {
      margin-left: 20px;
      margin-right: 20px;
    }
  }
  @media screen and (min-width: 350px) and (max-width: 400px) {
    #products .product {
      width: 370px;
    }
  }
  @media screen and (max-width: 350px) {
    #products .product {
      width: 470px;
    }
  }
  @media screen and (min-width: 1350px)and (max-width: 1455px) {
    #products .product {
      width: 290px;
    }
  }
  @media screen and (min-width: 1300px)and (max-width: 1350px) {
    #products .product {
      width: 280px;
    }
  }
  @media screen and (min-width: 1200px)and (max-width: 1300px) {
    #products .product {
      width: 255px;
    }
  }
  @media screen and (max-width: 1200px) {
    #products .product {
      width: 275px;
      margin-left: 15px;
      margin-right: 15px;
      margin-bottom: 20px;
    }
  }
</style>
