<template>
  <div class="allChars">
    <div class="allCharsDiv">
      <div class="charDiv">
        <Pie :option="option1"></Pie>
      </div>
      <div class="charDiv">
        <Bar :option="option2"></Bar>
      </div>
    </div>
    <div class="allCharsDiv">
      <div class="charDiv">
        <Line1 :option="option3"></Line1>
      </div>
      <div style="float: left;">
        <pieLine></pieLine>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import Pie from '../../../../components/charts/pie'
  import Bar from '../../../../components/charts/bar'
  import Line1 from '../../../../components/charts/line'
  import pieLine from '../../../../components/charts/pieLine'
  export default {
    name: '',
    components: {
      Bar,
      Line1,
      Pie,
      pieLine
    },
    data () {
      return {
        option1:[],
        option2:[],
        option3:[],
      }
    },
    methods: {
      ...mapActions(['choiceMenuId']),
    },
    watch: {},
    computed: {},
    created () {

    },
    mounted () {
      this.choiceMenuId('allChars')
    },
    beforeDestroy () {

    },
    destroyed () {

    },
  }
</script>

<style lang="less">
  .allChars{
    min-height: calc(100vh - 95px);
    .allCharsDiv{
      width: 60%;
      margin: 100px auto;
      text-align: center;
      &:before,&:after{
        content: '';
        display: table;
        clear: both;
      }
      .charDiv{
        margin: 0 50px;
        height: 400px;
        float: left;
      }
    }
  }
</style>
