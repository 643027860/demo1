<template>
  <div class="uEditor" v-if="myConfig">
    <vue-ueditor-wrap v-model="msg" :config="myConfig"></vue-ueditor-wrap>
  </div>
</template>
<script>
  import VueUeditorWrap from "vue-ueditor-wrap"
  import axios from 'axios'
  export default {
    name: 'UE',
    components:{
      VueUeditorWrap
    },
    data() {
      return {
        msg:'aaa',
        editor: null,          //编辑器对象
        contenturl:'',         //文章返回的URl
        content:'',            //正文内容
        content1:'',           //正文内容纯文本格式
        myConfig:''
      }
    },
    async created(){
      this.init()
    },
    mounted() {

    },

    methods: {
      //初始化编辑器
      init(){
        var myconfig = ''
        axios.get("http://124.70.40.181:8257/ssmweb/ueditor.do")
          .then(response=>{
            myconfig = JSON.parse(response.data)
            myconfig.initialFrameWidth = '100%'
            myconfig.initialFrameHeight = 300
            myconfig.UEDITOR_HOME_URL = '/static/UE/'
            myconfig.maximumWords = 100000
            var _this = this
            this.myConfig = myconfig
          })
      },
      //清空编辑器
      clearContent() { // 清空编辑器内容
        this.content1 = ''
        this.content = ''
        this.contenturl = ''
        return this.editor.execCommand('cleardoc');
      },
    },

    //销毁编辑器
    beforeDestroy() {
      // 组件销毁的时候，要销毁 UEditor 实例
      if (this.editor !== null && this.editor.destroy) {
        this.editor.destroy();
      }
    }
  }
</script>

<style lang="less">

</style>
