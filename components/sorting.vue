<template>
    <div id="sorting">По умолчанию
      <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.48532 1.24264L4.24268 4.48528L1.00003 1.24264" stroke="#B4B4B4"/>
      </svg>
    </div>
</template>

<script>
    export default {
        name: "sorting"
    }
</script>

<style scoped lang="scss">
  #sorting{
    float: left;
    width: 121.49px;
    height: 36px;
    background: #FFFEFB;
    color: #B4B4B4;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    margin-top: 31px;
    margin-right: 31.51px;
    margin-left: 1008px;
    padding: 10px 16px 11px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 12px;
    line-height: 15px;
    svg{
      padding-left: 5px;
    }
  }
</style>
