<template>
  <div id="app">
    <b-container>
      <h2>Список препаратов:</h2>
        <b-form>
          <b-row>
            <b-col>
              <b-input-group class="w-100" prepend="Название">
                <b-form-input></b-form-input>
              </b-input-group>
            </b-col>
            <b-col cols="3">
              <b-button type="submit" variant="success">Найти в аптечке</b-button>
              <b-button type="submit" variant="success">Добавить в список</b-button>
            </b-col>
          </b-row>
        </b-form>
        <b-overlay  class="w-100 h-100">
          <b-table :fields="fields" >
           <!-- <template #cell(name)='{item}'>
              <div><span>bb</span></div>
              <div>90</div>
            </template>
            <template #cell(amount)='{item}'>
              <b-checkbox>9</b-checkbox>
            </template>
            <template #cell(storage)='{item}'>
              <b-button variant="danger">X</b-button>
            </template>
            <template #cell(year)='{item}'>
              <b-button variant="danger">X</b-button>
            </template> -->
          </b-table>
        </b-overlay>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data(){
    return{
      /**Столбцы таблицы */
      fields:[
        { key: "name", label: "Название" },
        { key: "amount", label: "Количество" },
        { key: "storage", label: "Место хранения" },
        { key: "year", label: "Срок годности" },
      ],
    }
  },
}
</script>

<style>
  body{
    margin: 0 !important;
    padding: 0 !important;
  }
  #app {
    height: 100vh;
    margin: 0 !important;
    padding: 4vh !important;
    background: honeydew;
  }
  h2{
    text-align: center;
    font-family: 'STIX Two Math', serif;
    margin-bottom: 4vh !important;
  }
  .container{
    background: #fff;
    min-height: 95vh;
    max-width: 55% !important;
    padding: 2vh;
    box-shadow: 1px 1px 5px;
    border-radius: 1px;
  }
  .col{
    margin-top: 2.5vh !important;
    padding-right: 0 !important;
  }
  .col-3{
    width: 20% !important;
  }
  button{
    width: 100%;
    margin-bottom: 1vh !important;
  }
  .input-group-text,.form-control {
    border: 1px solid #198754 !important;
  }

</style>
