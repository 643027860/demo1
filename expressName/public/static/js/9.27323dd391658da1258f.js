webpackJsonp([9],{"2w1R":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Xxa5"),o=n.n(i),r=n("mtWM"),a=n.n(r);var d={name:"UE",data:function(){return{editor:null,contenturl:"",content:"",content1:""}},created:function(){var t,e=this;return(t=o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.init();case 1:case"end":return t.stop()}},t,e)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function i(o,r){try{var a=e[o](r),d=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(d).then(function(t){i("next",t)},function(t){i("throw",t)});t(d)}("next")})})()},mounted:function(){},methods:{init:function(){var t=this,e="";a.a.get("http://124.70.40.181:8257/ssmweb/ueditor.do").then(function(n){(e=JSON.parse(n.data)).initialFrameWidth="100%",e.initialFrameHeight=300,e.maximumWords=1e5;var i=t;t.editor=UE.getEditor("editor",e),t.editor.ready(function(){UE.getEditor("editor").addListener("contentChange",function(){i.content=UE.getEditor("editor").getContent(),i.content1=UE.getEditor("editor").getContentTxt()})}),UE.Editor.prototype._bkGetActionUrl=UE.Editor.prototype.getActionUrl,UE.Editor.prototype.getActionUrl=function(t){return"uploadimage"==t||"uploadscrawl"==t||"uploadimage"==t?"http://124.70.40.181:8257/ssmweb/upload.do":"uploadvideo"==t?"http://124.70.40.181:8257/ssmweb/videoUpload":"uploadfile"==t?"http://124.70.40.181:8257/ssmweb/uploadVideoFiles.do":this._bkGetActionUrl.call(this,t)}})},clearContent:function(){return this.content1="",this.content="",this.contenturl="",this.editor.execCommand("cleardoc")}},beforeDestroy:function(){null!==this.editor&&this.editor.destroy&&this.editor.destroy()}},c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:n("bX7U"),alt:""}}),this._v(" "),e("div",{staticClass:"uEditor"},[e("div",{attrs:{id:"editor",type:"text/plain"}})])])}]};var s=n("VU/8")(d,c,!1,function(t){n("jezD")},null,null);e.default=s.exports},bX7U:function(t,e,n){t.exports=n.p+"static/img/logo.da4316a.png"},jezD:function(t,e){}});