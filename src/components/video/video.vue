<template>
  <div class="my_video">
    <video-player  class="video-player vjs-custom-skin"
                   id="videoDiv"
                   ref="videoPlayer"
                   :playsinline="true"
                   :webkit-playsinline="true"
                   :options="videoPlayerOptions"
                   @play="onPlayerPlay($event)"
                   @pause="onPlayerPause($event)"
                   @ended="onPlayerEnded($event)"
                   @waiting="onPlayerWaiting($event)"
                   @playing="onPlayerPlaying($event)"
                   @loadeddata="onPlayerLoadeddata($event)"
                   @timeupdate="onPlayerTimeupdate($event)"
                   @canplay="onPlayerCanplay($event)"
                   @canplaythrough="onPlayerCanplaythrough($event)"
                   @statechanged="playerStateChanged($event)"
                   @ready="playerReadied"
    ></video-player>
  </div>
</template>

<script>
  // 导入组件
  import {videoPlayer} from 'vue-video-player'
  import {mapActions} from 'vuex'
  export default {
    name: 'VideoPlayer',
    components: {
      videoPlayer
    },
    data () {
      return {
        video:'',         //具体视频
        fileType: 'mp4', // 资源的类型
        videoUrl: '',	// 资源的路径地址
        posterUrl:''  //封面地址
      }
    },
    mounted(){
      this.video = JSON.parse(this.$route.query.video)
      this.posterUrl = this.video.posterUrl
      this.videoUrl = this.video.videoUrl
      this.choiceMenuId('video')
    },
    methods:{
      ...mapActions(['choiceMenuId']),
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

      // DOM元素上的readyState更改导致播放停止
      onPlayerWaiting($event) {
        //console.log(player)
      },

      // 已开始播放回调
      onPlayerPlaying($event) {
       // console.log(player)
      },

      // 当播放器在当前播放位置下载数据时触发
      onPlayerLoadeddata($event) {
       // console.log(player)
      },

      // 当前播放位置发生变化时触发。
      onPlayerTimeupdate($event) {
        //console.log(player)
      },

      //媒体的readyState为HAVE_FUTURE_DATA或更高
      onPlayerCanplay(player) {
        // console.log('player Canplay!', player)
      },

      //媒体的readyState为HAVE_ENOUGH_DATA或更高。这意味着可以在不缓冲的情况下播放整个媒体文件。
      onPlayerCanplaythrough(player) {
        // console.log('player Canplaythrough!', player)
      },

      //播放状态改变回调
      playerStateChanged(playerCurrentState) {
        //console.log('player current update state', playerCurrentState)
      },

      //将侦听器绑定到组件的就绪状态。与事件监听器的不同之处在于，如果ready事件已经发生，它将立即触发该函数。。
      playerReadied(player) {
        //console.log('example player 1 readied', player);
      },
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
          //fluid: true, // 是否流体从而按比例缩放以适应其容器。
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
  }
</script>
<style  lang="less">
  //设置手机端的控制栏
  @media screen and(max-width: 768px){
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
      width: 60px!important;
    }
  }
  @media screen and(min-width:500px){
    video{
      width: 100% !important;
      height: calc(100vh - 95px) !important;
      overflow: hidden;
      object-fit:fill;    //消除留白
    }
    .vjs-poster{  //设置全屏封面图
      background-size:100% 100%;
    }
  }
  //为了填满my_video，设置父div高度和video高度
  #videoDiv>div{
    height: calc(100vh - 95px) !important;
    overflow: hidden;
  }
  .my_video{
    width: 100%;
    height: calc(100vh - 95px);
    background-color: white;
  }

  .video-js .vjs-big-play-button{
    /*对播放按钮的样式进行设置*/
    width: 100px;
    height: 60px;
    border-radius: 10px;
  }
</style>
