<template>
  <form>
    <label>Наименование товара<component :is="point"/></label>
    <input type="text" name="name" required placeholder="Введите наименование товара">
    <label>Описание товара</label>
    <textarea type="text" name="description" placeholder="Введите описание товара"></textarea>
    <label>Ссылка на изображение товара<component :is="point"/></label>
    <input type="url" name="link" required placeholder="Введите ссылку">
    <label>Цена товара<component :is="point"/></label>
    <input type="text" required placeholder="Введите цену"  v-mask="'## ###'" v-model="inputPriceModel">
    <button disabled type="submit">Добавить товар</button>
  </form>
</template>

<script>
    import pointSVG from "~/components/svg/point";
    export default {
      name: "form_submission",
      data() {
        return {
          point: pointSVG,
          inputPriceModel: '',
        }
      }
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
  label{
     font-size: 10px;
     line-height: 13px;
     letter-spacing: -0.02em;
     color: #49485E;
     margin-bottom: 4px;
     width: 100%;
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
    margin-top: 24px ;
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
