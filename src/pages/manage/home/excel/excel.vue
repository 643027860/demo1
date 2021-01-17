<template>
  <div class="excelDiv">
    excel
    <vue-xlsx-table @on-click-ok="handleOk"></vue-xlsx-table>
    <div ref="excelView" id="excelView" :style="spreadStyle"></div>
  </div>
</template>

<script>
  import xlsx from 'xlsx'
  import axios from 'axios'
  import {mapActions} from 'vuex'
  export default {
    name: '',
    data () {
      return {}
    },
    methods: {
      ...mapActions(['choiceMenuId']),

      handleOk(data){
        console.log(data)
      },

      excel2html(){
        var vm = this;
        axios.get('https://lidengyin02.obs.cn-south-1.myhuaweicloud.com/0637cd5c-5e06-42c6-b402-e058e2dce124.xlsx',{
            responseType: 'blob'
          })
          .then((response) => {
            var reader = new FileReader();
            reader.onload = e => {
              //预处理
              var binary = '';
              var buf = new Uint8Array(e.target.result);
              var length = buf.byteLength;
              for (var i = 0; i < length; i++) {
                binary += String.fromCharCode(buf[i]);
              }  //读取excel
              const wb = xlsx.read(binary, {type: "binary"});
              console.log("wb",wb);
              //抓取第一个sheet
              let wsname = wb.SheetNames[0];
              let ws = wb.Sheets[wsname];
              // setContent 是用来赋值 this.fileContent = xlsx.utils.sheet_to_html(ws)
              vm.setContent(xlsx.utils.sheet_to_html(ws))
            };
            reader.readAsArrayBuffer(response.data);
          })
          .catch(error => {
            console.log(error);
          });
        return this.fileContent;
      },
    },

    mounted () {
      this.choiceMenuId('excel')
    },
  }
</script>

<style lang="less">
  .excelDiv{

  }
</style>
