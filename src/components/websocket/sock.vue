<template>
  <div class="myVideo">
  </div>
</template>

<script>
  export default {
    name: '',
    components: {},
    data () {
      return {
        //webPath:'ws://server.natappfree.cc:46660/recorded',   //websocket地址
        //webPath:'ws://bde5587e71261532.natapp.cc:8252/recorded',   //websocket地址
        //webPath:'ws://localhost:8765',   //websocket地址
        //webPath:'ws://bde5587e71261532.natapp.cc:8252/realTime',   //websocket地址
        webPath:'ws://121.36.145.230/ws',   //websocket地址
        websock: null,      //websocket实例
      }
    },
    methods: {
      initWebSocket(){ //初始化websocket
        if ('WebSocket' in window) {
          // 最后面的UUID参数为登录用户的ID
          this.websock = new WebSocket(this.webPath);
        } else {
          alert('当前浏览器 Not support websocket')
        }
        this.websock.onmessage = this.websocketonmessage;
        this.websock.onopen = this.websocketonopen;
        this.websock.onerror = this.websocketonerror;
        this.websock.onclose = this.websocketclose;
        //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
        window.onbeforeunload = function () {
          this.websock.close()
        }
      },
      websocketonopen(){ //连接建立之后执行send方法发送数据
        console.log('已连接')
        //let actions = {"videoId ":"ascascascasca"};
        //this.websocketsend(actions);
      },
      websocketonerror(){//连接建立失败重连
        this.initWebSocket();
      },
      websocketonmessage(e){ //数据接收
        console.log(e)
        console.log(JSON.parse(e.data))
      },
      websocketsend(Data){//数据发送
        console.log(Data)
        this.websock.send(Data);
      },
      websocketclose(e){  //关闭
        console.log('断开连接',e);
      },
    },
    mounted () {
      this.initWebSocket()
    },
    destroyed () {
      if(this.websocket)
        this.websocket.close()      //组件销毁时断开连接
    }
  }
</script>

<style lang="less">

</style>
