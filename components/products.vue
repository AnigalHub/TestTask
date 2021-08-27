<template>
  <div id="products">
    <div class="product" v-for="product in Products" :key="product.index">
      <component class="basket" :is="basket"/>
      <img :src="product.img_src" :alt="product.img_alt">
      <div class="text_product">
        <p class="name_product">{{product.name_product}}</p>
        <p class="description_product">{{product.description_product}}</p>
        <p class="price_product">{{product.price_product}}</p>
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
          Products:[
            {img_src:"./img.jpg", img_alt:"продукт", name_product:"Наименование товара", price_product:"10 000 руб.", description_product:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк", },
            {img_src:"./img.jpg", img_alt:"продукт", name_product:"Наименование товара", price_product:"10 000 руб.", description_product:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк", },
            {img_src:"./img.jpg", img_alt:"продукт", name_product:"Наименование товара", price_product:"10 000 руб.", description_product:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк", },
            {img_src:"./img.jpg", img_alt:"продукт", name_product:"Наименование товара", price_product:"10 000 руб.", description_product:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк", },
            {img_src:"./img.jpg", img_alt:"продукт", name_product:"Наименование товара", price_product:"10 000 руб.", description_product:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк", },
            {img_src:"./img.jpg", img_alt:"продукт", name_product:"Наименование товара", price_product:"10 000 руб.", description_product:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк", },
            {img_src:"./img.jpg", img_alt:"продукт", name_product:"Наименование товара", price_product:"10 000 руб.", description_product:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк", },
            {img_src:"./img.jpg", img_alt:"продукт", name_product:"Наименование товара", price_product:"10 000 руб.", description_product:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк", },
            {img_src:"./img.jpg", img_alt:"продукт", name_product:"Наименование товара", price_product:"10 000 руб.", description_product:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк", },
            {img_src:"./img.jpg", img_alt:"продукт", name_product:"Наименование товара", price_product:"10 000 руб.", description_product:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк", },
            {img_src:"./img.jpg", img_alt:"продукт", name_product:"Наименование товара", price_product:"10 000 руб.", description_product:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк", },
            {img_src:"./img.jpg", img_alt:"продукт", name_product:"Наименование товара", price_product:"10 000 руб.", description_product:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк", },
          ]
        }
      }
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
          font-size: 20px;
          line-height: 25px;
        }
        .description_product{
          padding-top: 16px;
          font-size: 16px;
          line-height: 20px;
        }
        .price_product{
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

</style>
