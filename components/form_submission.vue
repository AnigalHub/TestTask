<template>
  <form>
    <label>Наименование товара<component :is="point"/></label>
    <input type="text" placeholder="Введите наименование товара">
    <label>Описание товара</label>
    <textarea type="text" placeholder="Введите описание товара"></textarea>
    <label>Ссылка на изображение товара<component :is="point"/></label>
    <input type="text" placeholder="Введите ссылку">
    <label>Цена товара<component :is="point"/></label>
    <input type="text" placeholder="Введите цену">
  </form>
</template>

<script>
    export default {
        name: "form"
    }
</script>

<style scoped  lang="scss">
  form{
    position: sticky;
    top: 24px;
    margin-left: 32px;
    margin-top: 16px;
    margin-right: 16px;
    padding: 24px;
    width: 332px;
    height: 440px;
    background: #FFFEFB;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
  }
  label{
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485E;
    margin-bottom: 4px;
    width: 100%;
  }
  textarea{height: 108px;}
  input,textarea{
    padding: 10px 0 11px 16px;
    border: none !important;
    background: #FFFEFB;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-size: 12px;
    line-height: 15px;
    font-family: 'Source Sans Pro', sans-serif;
    width: 284px;
  }
  svg{margin-bottom: 13px;}
</style>
