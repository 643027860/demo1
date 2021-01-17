<template>
  <div class="myHistory">
    <div class="container-fluid">
      <div class="row" >
        <div class="col-lg-12">
          <div class="searchHistory">
            <ul>
              <li v-show="false">
              <span class="titleSpan">
                地点：
              </span>
                <el-select v-model="addition" placeholder="请选择地点" size="small">
                  <el-option
                    v-for="add in additions"
                    :key="add.id"
                    :label="add.name"
                    :value="add.id">
                  </el-option>
                </el-select>
              </li>
              <li>
              <span class="titleSpan">
                起始时间：
              </span>
                <el-date-picker
                  v-model="fromTime"
                  type="date"
                  size="small"
                  value-format="yyyy-MM-dd"
                  placeholder="选择起始日期">
                </el-date-picker>
              </li>
              <li>
              <span class="titleSpan">
                结束时间：
              </span>
                <el-date-picker
                  v-model="toTime"
                  type="date"
                  size="small"
                  value-format="yyyy-MM-dd"
                  placeholder="选择结束日期">
                </el-date-picker>
              </li>
              <li v-show="false">
              <span class="titleSpan">
                违规情况：
              </span>
                <el-select v-model="addition" placeholder="请选择违规类型" size="small">
                  <el-option
                    v-for="add in additions"
                    :key="add.id"
                    :label="add.name"
                    :value="add.id">
                  </el-option>
                </el-select>
              </li>
              <li>
                <el-button icon="el-icon-search" size="small" @click="toSearch"></el-button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row" style="margin-bottom: 15px">
        <div class="col-lg-12">
          <div class="historyLists">
            <el-scrollbar style="height: 100%;">
              <div class="myHistoryLists">
                <el-table
                  :data="historys"
                  style="width: 100%"
                  height="217"
                  :cell-style="rowClass"
                  :header-cell-style="headClass"
                  :default-sort = "{prop: 'liuliang', order: 'descending'}"
                >
                  <el-table-column
                    prop="addition"
                    label="地点"
                    min-width="180">
                  </el-table-column>
                  <el-table-column
                    prop="liuliang"
                    label="车流量"
                    sortable
                    min-width="180">
                  </el-table-column>
                  <el-table-column
                    prop="weigui"
                    label="违规车流量"
                    sortable
                    min-width="180">
                  </el-table-column>
                  <el-table-column
                    prop="date"
                    label="日期"
                    sortable
                    min-width="180">
                  </el-table-column>
                  <el-table-column
                    prop="time"
                    label="时间"
                    sortable
                    min-width="180">
                  </el-table-column>
                  <el-table-column
                    label="操作"
                    width="100"
                  >
                    <template slot-scope="scope">
                      <el-button type="text">查看回放</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-scrollbar>
          </div>
        </div>
      </div>
      <div class="row" style="margin-bottom: 15px">
        <div class="col-lg-5 col-md-6 col-sm-6 col-xs-12">
          <div class="myHistoryVideo historyMarginBottom">
            <video-player  class="video-player vjs-custom-skin"
                           ref="videoPlayer"
                           :playsinline="true"
                           :webkit-playsinline="true"
                           :options="videoPlayerOptions"
                           @play="onPlayerPlay($event)"
                           @pause="onPlayerPause($event)"
                           @ended="onPlayerEnded($event)"
            ></video-player>
          </div>
        </div>
        <div class="col-lg-7 col-md-6 col-sm-6 col-xs-12 clearPaddingMargin">
          <div class="myHistoryLine">
            <HistoryLiuLiang :option="oldLiuLiang" :xTime="xTime"></HistoryLiuLiang>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="myHistoryBar">
            <HistoryLiuLiangBar :option="oldLiuLiangBar" :xTime="xTime"></HistoryLiuLiangBar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {REQVIDEOLISTS,REQVIDEO} from '../../../../api/types'
  import {videoPlayer} from 'vue-video-player'
  import HistoryLiuLiang from './historyLiuLiang'
  import HistoryLiuLiangBar from './historyLiuLiangBar'
  export default {
    name: '',
    components: {
      videoPlayer,
      HistoryLiuLiang,
      HistoryLiuLiangBar,
    },
    data () {
      return {
        historys:[],    //历史监控信息
        additions:[],   //监控地点数组
        oldLiuLiang:[], //车流量与违规车流量折线图数据
        oldLiuLiangBar:[], //车流量与违规车流量柱状图数据
        xTime:[],       //车流量与违规车流量折线图x轴数据

        /*查询条件*/
        addition:'',    //监控地点
        pageNum:1,      //查询页数
        pageSize:6,   //查询行数
        fromTime:'',  //开始时间
        toTime:'',    //结束时间

        /*视频数据*/
        videoId:'',     //视频ID
        fileType: 'mp4', // 视频的类型
        videoUrl: 'http://121.36.145.230/715eebca-d974-40b1-b1b4-62df6e6a73be.mp4',	// 视频的路径地址
        posterUrl:'http://121.36.145.230/a513dac5-5cf6-4640-9984-f24c4aa7011a.jpg',  //视频封面地址

        /*标注握手*/
        websock: null,      //websocket实例
        webPath:'ws://bde5587e71261532.natapp.cc:8252/recorded'//websocket地址
      }
    },
    methods: {
      ...mapActions(['choiceMenuId']),
      // 表头样式设置
      headClass () {
        return 'text-align: center;border-bottom: 1px solid rgb(22, 123, 224);'
      },
      // 表格样式设置
      rowClass () {
        return 'text-align: center;border-bottom: 1px solid rgb(22, 123, 224);'
      },
      //搜索
      async toSearch(){
        var {fromTime,toTime,pageNum,pageSize} = this
        if(fromTime&&toTime){
          console.log(fromTime,toTime,pageNum,pageSize)
          var result = await REQVIDEOLISTS({fromTime,toTime,pageNum,pageSize})
          console.log(result)
          this.historys = result.list
          console.log(this.historys)
        }
      },
      //标注握手
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
          this.websocket.close()
        }
      },
      websocketonopen(){ //连接建立之后执行send方法发送数据
        console.log('已连接')
        this.websocketsend(this.videoId+'');
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
      // 播放回调
      onPlayerPlay(player) {
        //console.log('player play!', player)
      },
      // 暂停回调
      onPlayerPause(player) {
        //console.log('player pause!', player)
      },
      // 视频播完回调
      onPlayerEnded($event) {
        this.$refs.videoPlayer.player.src(this.videoUrl)
      },
    },
    watch: {
    },
    computed: {
      videoPlayerOptions () {
        const videoPlayerOptions = {
          playbackRates: [0.75, 1.0, 1.25, 1.5,2.0], //播放速度
          autoplay: false, // 是否自动播放。
          muted: true, // 是否静音播放，默认情况下将会消除任何音频。
          loop: false, // 是否循环播放。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          //aspectRatio: '16:10', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: false, // 是否流体从而按比例缩放以适应其容器。
          flash:{hls:{withCreadentials:false}},//可以播放rtmp视频
          html5:{hls:{withCreadentials:false}},//可以播放m3u8视频
          sources: [{
            type: 'video/' + this.fileType,
            src: this.videoUrl // 视频url地址
          }],
          objectFit:"cover",
          poster: this.posterUrl, // 封面地址
          notSupportedMessage: '此视频暂无法播放...', // 当无法播放时允许覆盖Video.js，显示的默认信息。
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: true
          }
        }
        return videoPlayerOptions
      }
    },
    created () {
      //this.toSearch()
      if(this.$route.query.videoId){
        this.fromTime = JSON.parse(this.$route.query.fromTime)
        this.toTime = JSON.parse(this.$route.query.toTime)
        this.videoId = JSON.parse(this.$route.query.videoId)
        this.toSearch()
        this.initWebSocket()
      }
    },
    mounted () {
      this.choiceMenuId('history')
      // this.historys = [
      //   {
      //     addition: '路口一',   //监控地点
      //     liuliang: 50,
      //     weigui: 4,
      //     date:'2020-05-25', //压线日期
      //     time:'14:51:38', //压线时间
      //   },
      //   {
      //     addition: '路口二',   //监控地点
      //     liuliang: 30,
      //     weigui: 7,
      //     date:'2020-05-25', //压线日期
      //     time:'14:51:40', //压线时间
      //   },
      //   {
      //     addition: '路口三',   //监控地点
      //     liuliang: 10,
      //     weigui: 3,
      //     date:'2020-05-25', //压线日期
      //     time:'14:51:42', //压线时间
      //   },
      //   {
      //     addition: '路口四',   //监控地点
      //     liuliang: 50,
      //     weigui: 2,
      //     date:'2020-05-25', //压线日期
      //     time:'14:51:44', //压线时间
      //   },
      //   {
      //     addition: '路口五',   //监控地点
      //     liuliang: 70,
      //     weigui: 1,
      //     date:'2020-05-25', //压线日期
      //     time:'14:51:46', //压线时间
      //   },
      //   {
      //     addition: '路口六',   //监控地点
      //     liuliang: 90,
      //     weigui: 7,
      //     date:'2020-05-25', //压线日期
      //     time:'14:51:48', //压线时间
      //   },
      //   {
      //     addition: '路口七',   //监控地点
      //     liuliang: 50,
      //     weigui: 8,
      //     date:'2020-05-25', //压线日期
      //     time:'14:51:50', //压线时间
      //   },
      //   {
      //     addition: '路口八',   //监控地点
      //     liuliang: 30,
      //     weigui: 0,
      //     date:'2020-05-25', //压线日期
      //     time:'14:51:52', //压线时间
      //   },
      //   {
      //     addition: '路口九',   //监控地点
      //     liuliang: 10,
      //     weigui: 4,
      //     date:'2020-05-25', //压线日期
      //     time:'14:51:54', //压线时间
      //   },
      //   {
      //     addition: '路口十',   //监控地点
      //     liuliang: 50,
      //     weigui: 3,
      //     date:'2020-05-25', //压线日期
      //     time:'14:51:56', //压线时间
      //   },
      // ]
      this.additions = [
        {
          id:1,
          name:'监控一',
        },
        {
          id:2,
          name:'监控二',
        },
        {
          id:3,
          name:'监控三',
        },
      ]
      this.oldLiuLiang = [
        {
          name: '车流量',
          type: 'line',
          data: [100,60,70,90,100,30,20,55,66,77,88,99,11,22,33,44,22,76],
        },
        {
          name: '违规车数',
          type: 'line',
          data: [11,8,6,3,0,2,4,9,11,33,11,8,6,3,0,2,4,9,11,33],
        },
      ]
      this.oldLiuLiangBar = [
        {
          name: '车流量',
          type: 'bar',
          data: [100,60,70,90,100,30,20,55,66,77,88,99,11,22,33,44,22,76],
        },
        {
          name: '违规车数',
          type: 'bar',
          data: [11,8,6,3,0,2,4,9,11,33,11,8,6,3,0,2,4,9,11,33],
        },
      ]
      this.xTime = [
        '2020-05-25 14:51:38',
        '2020-05-25 14:51:38',
        '2020-05-25 14:51:38',
        '2020-05-25 14:51:38',
        '2020-05-25 14:51:38',
        '2020-05-25 14:51:38',
        '2020-05-25 14:51:38',
        '2020-05-25 14:51:38',
        '2020-05-25 14:51:38',
        '2020-05-25 14:51:38',
        '2020-05-25 14:51:38',
        '2020-05-25 14:51:38',
        '2020-05-25 14:51:38',
        '2020-05-25 14:51:38',
        '2020-05-25 14:51:38',
        '2020-05-25 14:51:38',
        '2020-05-25 14:51:38',
        '2020-05-25 14:51:38',
      ]
    },
    beforeDestroy () {

    },
    destroyed () {
      if(this.websocket)
        this.websocket.close()      //组件销毁时断开连接
    },
  }
</script>

<style lang="less">
  @import './myHistory.less';
  @media screen and(max-width: 768px){
    .myHistory{
      .clearPaddingMargin{
        padding-left: 15px!important;
      }     //移动端还原左边距
      .historyMarginBottom{       //移动端底部边距
        margin-bottom: 12px;
      }
      .searchHistory{
        li{
          span.titleSpan{
            width: 80px!important;
            text-align: right!important;
          }
        }
      }
      .myHistoryVideo{
        .video-js{
          height: 240px!important;
          width: 100% !important;
          overflow: hidden;
        }
        .vjs-custom-skin > .video-js .vjs-control-bar{
          font-size: 10px!important;
        }
        .video-js .vjs-control-bar{
          height: 2.5em!important;
        }
        .video-js .vjs-time-control{
          line-height: 2.5em!important;
        }
        .vjs-custom-skin > .video-js .vjs-big-play-button{
          height: 50px!important;
          line-height: 50px!important;
          font-size: 2em!important;
        }
        .video-js .vjs-big-play-button{
          /*对播放按钮的样式进行设置*/
          width: 60px!important;
        }
      }
    }
  }
  .myHistory{
    margin-bottom: 15px;
    .clearPaddingMargin{
      padding-left: 0;
    }
    .searchHistory{
      ul{
        margin: 10px;
        padding: 0;
        &:before,&:after{
          content: '';
          display: table;
          clear: both;
        }
        li{
          margin: 0;
          padding: 5px;
          height: 50px;
          overflow: hidden;
          list-style: none;
          float: left;
          span.titleSpan{
            height: 40px;
            line-height: 40px;
            display: inline-block;
            color: white;
          }
          .el-button{
            width: 32px;
            height: 32px;
            margin-top: 4px;
            padding: 6px 8px 10px;
            background: rgb(32,62,92);
            border: 1px solid rgb(4,51,77);
            i{
              height: 16px;
              width: 16px;
              font-size: 16px;
              color: white;
            }
          }             //搜索按钮妮样式
          .el-range-separator{

          }    //时间选择器中至的样式
          .el-input__prefix{
            height: 32px;
            line-height: 32px;

          }
          .el-input__suffix{
            height: 32px;
            line-height: 32px;
            .el-input__suffix-inner{
              height: 32px;
              line-height: 32px;
            }
          }     //地点选择器那个倒三角样式
          .el-input__inner,.el-range-input{   //选择器的背景色
            border: 0;
            background: rgb(4,51,77);
            color:white;
          }
        }
      }
    }
    .historyLists {
      height: 217px;
      background-color: rgb(1, 49, 74);
      .el-scrollbar__wrap {
        overflow-x: hidden;
        overflow-y: hidden;
      }
      .myHistoryLists {
        height: 217px;
        overflow-y: auto;
        overflow-x: auto;
        th{
          padding: 1px 0;
          overflow: hidden;
          color: white!important;
          background-color: rgb(24, 96, 154) !important;
          .cell{
            height: 34px;
            line-height: 34px;
            span{
              height: 34px;
            }
          }
        }       //列表头部样式
        .el-table__row{
          height: 35px;
          line-height: 35px;
          overflow: hidden;
          color: white;
          font-size: 14px;
          text-align: left;
          box-sizing: border-box;
          background-color: rgb(1, 49, 74);
          border-bottom: 1px solid rgb(22, 123, 224);
          td{
            padding: 6px 0;
            button{
              padding: 0;
              height: 23px;
              line-height: 23px;
            }
          }
        }
        .el-table--enable-row-hover .el-table__body tr:hover>td{
          background-color: rgb(40, 85, 120) !important;
        }
        .el-table::before{
          height: 0!important;
        }
      }
    }
    .myHistoryVideo{
      padding: 5px;
      background: rgb(24,96,154);
      video{
        object-fit:fill;    //消除留白
      }
      .video-js{
        height: 340px;
        width: 100% !important;
        overflow: hidden;
      }
      .vjs-poster{     //设置全屏封面图
        background-size:100% !important;
      }
      .video-js .vjs-big-play-button{
        /*对播放按钮的样式进行设置*/
        width: 100px;
        height: 60px;
        border-radius: 10px;
      }
    }
    .myHistoryLine{
      padding: 5px;
      background: rgb(24,96,154);
    }
    .myHistoryBar{
      padding: 5px;
      background: rgb(24,96,154);
    }
  }
</style>
