<template>
  <div>
    <div class="container out">
      <div class="col-lg-3 one">
      </div>
      <div class="col-lg-3 two">
      </div>
      <div class="col-lg-3 three">
      </div>
      <div class="col-lg-3 four">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'demo',
    mounted () {

    }
  }
</script>
<style lang="less">
  .out{
    height: 300px;
    div{
      height: 100%;
    }
    .one{
      background-color: red;
    }
    .two{
      background-color: green;
    }
    .three{
      background-color: blue;
    }
    .four{
      background-color: yellow;
    }
  }
</style>
