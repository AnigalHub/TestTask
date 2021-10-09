<template>
  <div id="sorting">
    <div class="dropdown">
      <span>
       {{sort}}
        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.48532 1.24264L4.24268 4.48528L1.00003 1.24264" stroke="#B4B4B4"/>
        </svg>
      </span>
      <div class="dropdown-content">
        <div @click="SortByPriceMinProducts()">По цене min</div>
        <div @click="SortByPriceMaxProducts()">По цене max</div>
        <div @click="SortByNameProducts()">По наименованию</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "sorting",
      data() {
        return {
          sort:"По умолчанию",
        }
      },

      methods:{
        SortByNameProducts:function () {
          this.$store.dispatch('catalogStore/SortByName')
          this.sort = "По наименова..."
        },
        SortByPriceMinProducts:function () {
          this.$store.dispatch('catalogStore/SortByPriceMin')
          this.sort = "По цене min"
        },
        SortByPriceMaxProducts:function () {
          this.$store.dispatch('catalogStore/SortByPriceMax')
          this.sort = "По цене max"
        },
      }
    }
</script>

<style scoped lang="scss">
  .dropdown {
    float: left;
    width: 121.49px;
    height: 36px;
    border: none;
    margin: 31px 0 0 1008px;
    padding: 10px 5px 11px 16px;
    font-size: 12px;
    line-height: 15px;
    position: relative;
    display: inline-block;
    cursor: pointer;
    svg{margin-left: 5px;}
  }
    .dropdown,.dropdown-content div {
      font-family: 'Source Sans Pro', sans-serif;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      background: #FFFEFB;
      color: #B4B4B4;
    }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    top: 35px;
    left: 0;
    cursor: pointer;
    z-index: 1;
    div{
      width: 121.49px;
      font-size: 11px;
      line-height: 15px;
      padding: 5px 16px;
    }
  }
  .dropdown:hover .dropdown-content {display: block;}

  @media screen and (min-width: 350px)and (max-width: 400px) {
    .dropdown { margin-left: 808px;}
  }
  @media screen and (max-width: 350px) {
    .dropdown { margin-left: 608px;}
  }
  @media screen and (min-width: 1350px)and (max-width: 1500px) {
    .dropdown {margin-left: 800px;}
  }
  @media screen and (min-width: 1200px)and (max-width: 1350px) {
    .dropdown {margin-left: 750px;}
  }
  @media screen and (max-width: 1200px) {
    .dropdown {margin-left: 580px;}
  }
  @media screen and (min-width: 500px) and (max-width: 1005px) {
    .dropdown {margin-left: 250px;}
  }
  @media screen and (max-width: 800px) {
    .dropdown {margin-left: 40px;}
  }
  @media screen and (max-width: 500px) {
    .dropdown {margin-left: 0; float: right}
  }
</style>
