webpackJsonp([11],{"52R2":function(t,i){},"fgc/":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("fnxk"),g={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"video"},[e("div",{staticStyle:{"padding-top":"15px"}},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},t._l(t.Videos.content,function(i,a){return e("div",{key:a,staticClass:"col-lg-3 col-md-4 col-sm-6 col-xs-6 video_lis",on:{mouseenter:function(e){return t.hoverimg(i)},mouseleave:function(e){return t.outimg(i)},click:function(){return t.goVideo(i)}}},[e("div",{staticClass:"video_imgs_div"},[e("img",{attrs:{id:"my_video_img"+i.id,src:i.posterUrl,alt:""}}),t._v(" "),e("span",{staticClass:"video_titles_font noselect hovernosee"},[t._v("念啥看得开哈三等奖安康市大萨达卡")]),t._v(" "),e("span",{staticClass:"video_titles_time noselect hovernosee"},[t._v("1:32")])])])}),0),t._v(" "),t.Videos!=[]?e("div",{staticClass:"pages"},[e("div",{staticClass:"block"},[e("el-pagination",{attrs:{layout:"prev, pager, next",total:1*t.Videos.totalSize,"current-page":1*t.pageNum,"page-size":1*t.pageSize},on:{"current-change":function(i){return t.reqVideosPage(i)}}})],1)]):t._e()])])])},staticRenderFns:[]};var p=function(t){e("52R2")},c=e("VU/8")(a.a,g,!1,p,"data-v-019f69ca",null);i.default=c.exports},fnxk:function(t,i,e){"use strict";(function(t){var a=e("NYxO"),g=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t};i.a={data:function(){return{Videos:"",pageNum:3,pageSize:16}},components:{},mounted:function(){this.choiceMenuId("video"),this.Videos={content:[{id:"1",name:"小树苗",posterUrl:"https://img.tukuppt.com/bg_grid/00/12/29/XT7fTgX3B7.jpg!/fh/350",videoUrl:"https://img.tukuppt.com/video_show/2269348/00/01/95/5b4de62445335.mp4",gitUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587829069471&di=3f0ac6ea87ec916c489cd12c31a24c63&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170416%2F0446653d60e041029e82b9b3737c89b2.gif"},{id:"2",name:"森林",posterUrl:"https://img.tukuppt.com/bg_grid/00/19/83/O93nS0cqmF.jpg!/fh/350",videoUrl:"https://img.tukuppt.com/video_show/2418175/00/02/49/5b7147f3a6ac4_10s_big.mp4",gitUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587829100816&di=3f0d2aed4a9ab7a84186db4628afa605&imgtype=0&src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F66842051.jpeg"},{id:"3",name:"小树苗",posterUrl:"https://img.tukuppt.com/bg_grid/00/12/29/XT7fTgX3B7.jpg!/fh/350",videoUrl:"https://img.tukuppt.com/video_show/2269348/00/01/95/5b4de62445335_10s_big.mp4",gitUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587829069471&di=3f0ac6ea87ec916c489cd12c31a24c63&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170416%2F0446653d60e041029e82b9b3737c89b2.gif"},{id:"4",name:"森林",posterUrl:"https://img.tukuppt.com/bg_grid/00/19/83/O93nS0cqmF.jpg!/fh/350",videoUrl:"https://img.tukuppt.com/video_show/2418175/00/02/49/5b7147f3a6ac4_10s_big.mp4",gitUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587829100816&di=3f0d2aed4a9ab7a84186db4628afa605&imgtype=0&src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F66842051.jpeg"},{id:"5",name:"小树苗",posterUrl:"https://img.tukuppt.com/bg_grid/00/12/29/XT7fTgX3B7.jpg!/fh/350",videoUrl:"https://img.tukuppt.com/video_show/2269348/00/01/95/5b4de62445335_10s_big.mp4",gitUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587829069471&di=3f0ac6ea87ec916c489cd12c31a24c63&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170416%2F0446653d60e041029e82b9b3737c89b2.gif"},{id:"6",name:"森林",posterUrl:"https://img.tukuppt.com/bg_grid/00/19/83/O93nS0cqmF.jpg!/fh/350",videoUrl:"https://img.tukuppt.com/video_show/2418175/00/02/49/5b7147f3a6ac4_10s_big.mp4",gitUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587829100816&di=3f0d2aed4a9ab7a84186db4628afa605&imgtype=0&src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F66842051.jpeg"},{id:"7",name:"小树苗",posterUrl:"https://img.tukuppt.com/bg_grid/00/12/29/XT7fTgX3B7.jpg!/fh/350",videoUrl:"https://img.tukuppt.com/video_show/2269348/00/01/95/5b4de62445335_10s_big.mp4",gitUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587829069471&di=3f0ac6ea87ec916c489cd12c31a24c63&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170416%2F0446653d60e041029e82b9b3737c89b2.gif"},{id:"8",name:"森林",posterUrl:"https://img.tukuppt.com/bg_grid/00/19/83/O93nS0cqmF.jpg!/fh/350",videoUrl:"https://img.tukuppt.com/video_show/2418175/00/02/49/5b7147f3a6ac4_10s_big.mp4",gitUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587829100816&di=3f0d2aed4a9ab7a84186db4628afa605&imgtype=0&src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F66842051.jpeg"},{id:"9",name:"小树苗",posterUrl:"https://img.tukuppt.com/bg_grid/00/12/29/XT7fTgX3B7.jpg!/fh/350",videoUrl:"https://img.tukuppt.com/video_show/2269348/00/01/95/5b4de62445335_10s_big.mp4",gitUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587829069471&di=3f0ac6ea87ec916c489cd12c31a24c63&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170416%2F0446653d60e041029e82b9b3737c89b2.gif"},{id:"10",name:"森林",posterUrl:"https://img.tukuppt.com/bg_grid/00/19/83/O93nS0cqmF.jpg!/fh/350",videoUrl:"https://img.tukuppt.com/video_show/2418175/00/02/49/5b7147f3a6ac4_10s_big.mp4",gitUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587829100816&di=3f0d2aed4a9ab7a84186db4628afa605&imgtype=0&src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F66842051.jpeg"},{id:"11",name:"小树苗",posterUrl:"https://img.tukuppt.com/bg_grid/00/12/29/XT7fTgX3B7.jpg!/fh/350",videoUrl:"https://img.tukuppt.com/video_show/2269348/00/01/95/5b4de62445335_10s_big.mp4",gitUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587829069471&di=3f0ac6ea87ec916c489cd12c31a24c63&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170416%2F0446653d60e041029e82b9b3737c89b2.gif"},{id:"12",name:"森林",posterUrl:"https://img.tukuppt.com/bg_grid/00/19/83/O93nS0cqmF.jpg!/fh/350",videoUrl:"https://img.tukuppt.com/video_show/2418175/00/02/49/5b7147f3a6ac4_10s_big.mp4",gitUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587829100816&di=3f0d2aed4a9ab7a84186db4628afa605&imgtype=0&src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F66842051.jpeg"},{id:"13",name:"小树苗",posterUrl:"https://img.tukuppt.com/bg_grid/00/12/29/XT7fTgX3B7.jpg!/fh/350",videoUrl:"https://img.tukuppt.com/video_show/2269348/00/01/95/5b4de62445335_10s_big.mp4",gitUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587829069471&di=3f0ac6ea87ec916c489cd12c31a24c63&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170416%2F0446653d60e041029e82b9b3737c89b2.gif"},{id:"14",name:"森林",posterUrl:"https://img.tukuppt.com/bg_grid/00/19/83/O93nS0cqmF.jpg!/fh/350",videoUrl:"https://img.tukuppt.com/video_show/2418175/00/02/49/5b7147f3a6ac4_10s_big.mp4",gitUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587829100816&di=3f0d2aed4a9ab7a84186db4628afa605&imgtype=0&src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F66842051.jpeg"},{id:"15",name:"小树苗",posterUrl:"https://img.tukuppt.com/bg_grid/00/12/29/XT7fTgX3B7.jpg!/fh/350",videoUrl:"https://img.tukuppt.com/video_show/2269348/00/01/95/5b4de62445335_10s_big.mp4",gitUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587829069471&di=3f0ac6ea87ec916c489cd12c31a24c63&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170416%2F0446653d60e041029e82b9b3737c89b2.gif"},{id:"16",name:"森林",posterUrl:"https://img.tukuppt.com/bg_grid/00/19/83/O93nS0cqmF.jpg!/fh/350",videoUrl:"https://img.tukuppt.com/video_show/2418175/00/02/49/5b7147f3a6ac4_10s_big.mp4",gitUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587829100816&di=3f0d2aed4a9ab7a84186db4628afa605&imgtype=0&src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F66842051.jpeg"}],totalSize:200,pageNum:3,pageSize:16}},methods:g({},Object(a.b)(["choiceMenuId"]),{goVideo:function(t){this.$router.push({name:"video1",query:{video:JSON.stringify(t)}})},hoverimg:function(i){t("#my_video_img"+i.id).attr("src",i.gitUrl)},outimg:function(i){t("#my_video_img"+i.id).attr("src",i.posterUrl)},reqVideosPage:function(t){console.log(t)}})}}).call(i,e("7t+N"))}});