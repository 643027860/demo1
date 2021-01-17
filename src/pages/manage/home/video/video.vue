<template>
  <div class="video">
    <div style="padding-top: 15px;">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6 video_lis" v-for="(video,index) in Videos.content" :key="index" @mouseenter="hoverimg(video)" @mouseleave="outimg(video)" @click="() => goVideo(video)">
            <div class="video_imgs_div">
              <img :id="'my_video_img'+video.id" :src="video.posterUrl" alt="">
              <span class="video_titles_font noselect hovernosee">念啥看得开哈三等奖安康市大萨达卡</span>
              <span class="video_titles_time noselect hovernosee">1:32</span>
            </div>
          </div>
        </div>
        <div class="pages" v-if="Videos!=[]">
          <div class="block">
            <el-pagination
              layout="prev, pager, next"
              :total="Videos.totalSize*1"
              :current-page="pageNum*1"
              :page-size="pageSize*1"
              @current-change="(currentPage)=>reqVideosPage(currentPage)"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    data () {
      return {
        Videos:'',     //视频列表
        pageNum:3,    //当前页
        pageSize:16,  //每页行数
      }
    },
    components:{

    },
    mounted () {
      this.choiceMenuId('video')
      this.Videos = {
        content:[
          {
            id:'1',
            name:'小树苗',
            posterUrl:'https://img.tukuppt.com/bg_grid/00/12/29/XT7fTgX3B7.jpg!/fh/350',
            videoUrl:'https://img.tukuppt.com/video_show/2269348/00/01/95/5b4de62445335.mp4',
            gitUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2649804732,1949931658&fm=26&gp=0.jpg'
          },
          {
            id:'2',
            name:'森林',
            posterUrl:'https://img.tukuppt.com/bg_grid/00/19/83/O93nS0cqmF.jpg!/fh/350',
            videoUrl:'https://img.tukuppt.com/video_show/2418175/00/02/49/5b7147f3a6ac4_10s_big.mp4',
            gitUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2649804732,1949931658&fm=26&gp=0.jpg'
          },
          {
            id:'3',
            name:'小树苗',
            posterUrl:'https://img.tukuppt.com/bg_grid/00/12/29/XT7fTgX3B7.jpg!/fh/350',
            videoUrl:'https://img.tukuppt.com/video_show/2269348/00/01/95/5b4de62445335_10s_big.mp4',
            gitUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2649804732,1949931658&fm=26&gp=0.jpg'
          },
          {
            id:'4',
            name:'森林',
            posterUrl:'https://img.tukuppt.com/bg_grid/00/19/83/O93nS0cqmF.jpg!/fh/350',
            videoUrl:'https://img.tukuppt.com/video_show/2418175/00/02/49/5b7147f3a6ac4_10s_big.mp4',
            gitUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2649804732,1949931658&fm=26&gp=0.jpg'
          },
          {
            id:'5',
            name:'小树苗',
            posterUrl:'https://img.tukuppt.com/bg_grid/00/12/29/XT7fTgX3B7.jpg!/fh/350',
            videoUrl:'https://img.tukuppt.com/video_show/2269348/00/01/95/5b4de62445335_10s_big.mp4',
            gitUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2649804732,1949931658&fm=26&gp=0.jpg'
          },
          {
            id:'6',
            name:'森林',
            posterUrl:'https://img.tukuppt.com/bg_grid/00/19/83/O93nS0cqmF.jpg!/fh/350',
            videoUrl:'https://img.tukuppt.com/video_show/2418175/00/02/49/5b7147f3a6ac4_10s_big.mp4',
            gitUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2649804732,1949931658&fm=26&gp=0.jpg'
          },
          {
            id:'7',
            name:'小树苗',
            posterUrl:'https://img.tukuppt.com/bg_grid/00/12/29/XT7fTgX3B7.jpg!/fh/350',
            videoUrl:'https://img.tukuppt.com/video_show/2269348/00/01/95/5b4de62445335_10s_big.mp4',
            gitUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2649804732,1949931658&fm=26&gp=0.jpg'
          },
          {
            id:'8',
            name:'森林',
            posterUrl:'https://img.tukuppt.com/bg_grid/00/19/83/O93nS0cqmF.jpg!/fh/350',
            videoUrl:'https://img.tukuppt.com/video_show/2418175/00/02/49/5b7147f3a6ac4_10s_big.mp4',
            gitUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2649804732,1949931658&fm=26&gp=0.jpg'
          },
          {
            id:'9',
            name:'小树苗',
            posterUrl:'https://img.tukuppt.com/bg_grid/00/12/29/XT7fTgX3B7.jpg!/fh/350',
            videoUrl:'https://img.tukuppt.com/video_show/2269348/00/01/95/5b4de62445335_10s_big.mp4',
            gitUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2649804732,1949931658&fm=26&gp=0.jpg'
          },
          {
            id:'10',
            name:'森林',
            posterUrl:'https://img.tukuppt.com/bg_grid/00/19/83/O93nS0cqmF.jpg!/fh/350',
            videoUrl:'https://img.tukuppt.com/video_show/2418175/00/02/49/5b7147f3a6ac4_10s_big.mp4',
            gitUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2649804732,1949931658&fm=26&gp=0.jpg'
          },
          {
            id:'11',
            name:'小树苗',
            posterUrl:'https://img.tukuppt.com/bg_grid/00/12/29/XT7fTgX3B7.jpg!/fh/350',
            videoUrl:'https://img.tukuppt.com/video_show/2269348/00/01/95/5b4de62445335_10s_big.mp4',
            gitUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2649804732,1949931658&fm=26&gp=0.jpg'
          },
          {
            id:'12',
            name:'森林',
            posterUrl:'https://img.tukuppt.com/bg_grid/00/19/83/O93nS0cqmF.jpg!/fh/350',
            videoUrl:'https://img.tukuppt.com/video_show/2418175/00/02/49/5b7147f3a6ac4_10s_big.mp4',
            gitUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2649804732,1949931658&fm=26&gp=0.jpg'
          },
          {
            id:'13',
            name:'小树苗',
            posterUrl:'https://img.tukuppt.com/bg_grid/00/12/29/XT7fTgX3B7.jpg!/fh/350',
            videoUrl:'https://img.tukuppt.com/video_show/2269348/00/01/95/5b4de62445335_10s_big.mp4',
            gitUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2649804732,1949931658&fm=26&gp=0.jpg'
          },
          {
            id:'14',
            name:'森林',
            posterUrl:'https://img.tukuppt.com/bg_grid/00/19/83/O93nS0cqmF.jpg!/fh/350',
            videoUrl:'https://img.tukuppt.com/video_show/2418175/00/02/49/5b7147f3a6ac4_10s_big.mp4',
            gitUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2649804732,1949931658&fm=26&gp=0.jpg'
          },
          {
            id:'15',
            name:'小树苗',
            posterUrl:'https://img.tukuppt.com/bg_grid/00/12/29/XT7fTgX3B7.jpg!/fh/350',
            videoUrl:'https://img.tukuppt.com/video_show/2269348/00/01/95/5b4de62445335_10s_big.mp4',
            gitUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2649804732,1949931658&fm=26&gp=0.jpg'
          },
          {
            id:'16',
            name:'森林',
            posterUrl:'https://img.tukuppt.com/bg_grid/00/19/83/O93nS0cqmF.jpg!/fh/350',
            videoUrl:'https://img.tukuppt.com/video_show/2418175/00/02/49/5b7147f3a6ac4_10s_big.mp4',
            gitUrl:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2649804732,1949931658&fm=26&gp=0.jpg'
          },
        ],
        totalSize:200,
        pageNum:3,
        pageSize:16,
      }
    },
    methods: {
      ...mapActions(['choiceMenuId']),
      goVideo(video){
        this.$router.push({name:'video1',query:{video:JSON.stringify(video)}})
      },
      //鼠标悬浮到某一图片上
      hoverimg(video){
        $("#my_video_img"+video.id).attr('src',video.gitUrl)
      },
      //鼠标移开某一图片上
      outimg(video){
        $("#my_video_img"+video.id).attr('src',video.posterUrl)
      },
      //获取视频分页列表
      reqVideosPage(pageNum){
        console.log(pageNum)
      },
    },
  }
</script>

<style scoped lang="less">
  @media screen and(max-width: 768px){
    .video{
      .video_lis{
        height: 120px!important;
        margin-bottom: 16px!important;
        .video_imgs_div{
          margin: 0 -7px!important;
          img{
            height: 120px!important;
          }
          .video_titles_font{
            left: 7px!important;
            width: 65% !important;
            font-size: 10px!important;
          }
        }
      }
    }
  }
  @media screen and(max-width: 400px){
    .video{
      .video_lis{
        height: 100px!important;
        margin-bottom: 10px!important;
        .video_imgs_div{
          margin: 0 -10px!important;
          img{
            height: 100px!important;
          }
          .video_titles_time{
            right: 7px!important;
            font-size: 12px!important;
          }
        }
      }
    }
  }
  .video{
    width: 100%;
    min-height: calc(100vh - 100px);
    background-color: white;
    position: relative;
    padding-bottom: 50px;
    .video_lis{
      border-radius: 10px;
      margin-bottom: 26px;
      height: 200px;
      overflow: hidden;
      .video_imgs_div{
        overflow: hidden;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        margin: 0 -5px!important;
        img{
          border-radius: 6px;
          width: 100%;
          height: 200px;
        }
        .noselect{//不能选中
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        .hovernosee{
          transition: 0.6s;
        }
        .video_titles_font{
          position: absolute;
          bottom: 0;
          left: 17px;
          z-index: 1;
          overflow: hidden;
          width: 200px;
          height: 30px;
          color: #fff;
          text-align: left;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 14px;
          line-height: 30px;
          transition: 0.8s;
        }
        .video_titles_time{
          position: absolute;
          right: 14px;
          bottom: 0;
          z-index: 1;
          overflow: hidden;
          width: 100px;
          height: 30px;
          color: #fff;
          text-align: right;
          font-size: 15px;
          font-family: Arial;
          line-height: 30px;
          transition: 0.8s;
        }
      }
      .video_imgs_div:hover .hovernosee{
        color: rgba(0,0,0,0);
      }
    }
    .pages{
      position: absolute;
      bottom: 15px;
      left: 50%;
      transform: translate3d(-50%,0,0);
    }
  }
</style>
