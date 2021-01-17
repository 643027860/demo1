<template>
  <div class="my_nav">
    <div class="right">
      <Avatar></Avatar>
      <FullScreen></FullScreen>
      <Language></Language>
    </div>
    <Controlmenu></Controlmenu>
    <div style="height: 45px;background-color: rgb(248,248,248)">
      <Music></Music>
    </div>
  </div>
</template>

<script>
  import Controlmenu from '../menus/controlmenu'
  import FullScreen from './fullscreen'
  import Avatar from './avatar'
  import Language from './language'
  import Music from './music'
  export default {
    components:{
      Controlmenu,
      FullScreen,
      Avatar,
      Language,
      Music,
    },
    data () {
      return {}
    },
    mounted () {

    },
    methods: {

    },
  }
</script>

<style lang="less">
  .my_nav{
    background-color: white;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    .right{
      float: right
    }
  }
</style>
