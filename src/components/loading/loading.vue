<template>
  <div class="load_more_box">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    mounted () {

    },
    methods: {},
  }
</script>

<style lang="less">
  /* 上拉加载 */
  .load_more_box {
    height:40px;
    line-height:40px;
    position:relative;
    text-align:center;
  }
  .load_more_box span {
    width:5px;
    height:5px;
    margin:0 1px;
    display:inline-block;
    vertical-align:middle;
    background:#9b59b6;
    animation:load_more_box 1.5s  infinite ease-in-out;
  }
  .load_more_box span:nth-child(2) {
    animation-delay:.2s;
  }
  .load_more_box span:nth-child(3) {
    animation-delay:.4s;
  }
  .load_more_box span:nth-child(4) {
    animation-delay:.6s;
  }
  .load_more_box span:nth-child(5) {
    animation-delay:.8s;
  }
  @keyframes load_more_box {
    0% {
      height:5px;
      background:#9b59b6;
    }
    25% {
      height:25px;
      background:#0081ff;
    }
    50% {
      height:5px;
      background:#9b59b6;
    }
    100% {
      height:5px;
      background:#9b59b6;
    }
  }
</style>
