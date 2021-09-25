<template>
  <div>
    <form method="post">
      <div>
        <label>Наименование товара<component :is="point"/></label>
        <input type="text" name="name" required placeholder="Введите наименование товара" v-model="Product.nameProduct">
        <label>Описание товара</label>
        <textarea type="text" name="description" placeholder="Введите описание товара" v-model="Product.descriptionProduct"></textarea>
        <label>Ссылка на изображение товара<component :is="point"/></label>
        <input name="link" type="url" required placeholder="Введите ссылку" v-model="Product.imgSrc">
        <label>Цена товара<component :is="point"/></label>
        <the-mask type="text" required  placeholder="Введите цену" :mask="['#', '##', '###','# ###', '## ###', '### ###']" v-model="Product.priceProduct"/>
        <p>{{nameError}}</p>
        <button type="submit" :disabled="buttonDisabled" @click="addToProducts(Product)">Добавить товар</button>
      </div>
    </form>
  </div>
</template>

<script>
    import pointSVG from "~/components/svg/point";
    import {mask} from 'vue-the-mask';
    export default {
      directives: {mask},
      name: "form_submission",
      data() {
        return {
          point: pointSVG,
          Product:{
            nameProduct: '',
            descriptionProduct: '',
            imgSrc:'',
            priceProduct: '',
          },
          nameError:'',
        }
      },
      methods:{
        addToProducts:function (Product) {
          this.$store.dispatch('catalogStore/addProductState',Product)
        },
        ValidURL: function (str) {
          let result = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
          return result.test(str);
        }
      },
      computed:{
        buttonDisabled(){
          if (this.Product.nameProduct && this.Product.imgSrc && this.Product.priceProduct && this.ValidURL(this.Product.imgSrc)) {
            this.nameError = ''
            return false;
          }
          if(this.Product.imgSrc && !this.ValidURL(this.Product.imgSrc)){
            this.nameError = 'Введите корректно ссылку на изображение'
          }
          return true;
        },
      },
    }
</script>

<style scoped  lang="scss">
  form{
    position: sticky;
    top: 24px;
    margin: 16px 16px 0 32px;
    padding: 24px;
    width: 332px;
    height: 440px;
    background: #FFFEFB;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  }
  label,p{
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
  }
  label{
     color: #49485E;
     margin-bottom: 4px;
     width: 100%;
  }
  p{
    padding-top: 2px;
    height: 5px;
    color: orangered;
    margin: 0 !important;
  }
  textarea{
    height: 108px;
    max-height: 108px;
  }
  input,textarea{
    padding: 10px 16px 11px;
    border: none !important;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    font-size: 12px;
    line-height: 15px;
    width: 284px;
  }
  label,input,textarea{font-family: 'Source Sans Pro', sans-serif;}
  svg{margin-bottom: 13px;}
  form,input,textarea{border-radius: 4px;}
  button[disabled]{
    background: #EEEEEE;
    box-shadow: none !important;
    color: #B4B4B4;
  }
  button{
    width: 284px;
    height: 36px;
    border: none !important;
    margin-top: 17px ;
    background: #7BAE73;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: white;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
  }
</style>
