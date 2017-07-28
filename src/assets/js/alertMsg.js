import Vue from 'vue'
function alertMsgSuper(vueObj,width,height,msg,closeFn) {
  vueObj.keptOptions = {
      styles:{
        w:width,//弹出框宽度
        h:height//弹出框高度
      },
      states:{
        // type:type,
        msg:msg
      },
      closeFn:closeFn
    }
  vueObj.isShowKeptBox = true;
}
 Vue.component('kept-box',{
  props:['is-show','kept-option'],
  data:function(){
    return{
      objWidth:this.keptOption.styles.w,
      objHeight:this.keptOption.styles.h,
      screenWidth:document.documentElement.clientWidth,
      screenHeight:document.documentElement.clientHeight,
      scrollleft:document.documentElement.scrollLeft || document.body.scrollLeft,
      scrolltop:document.documentElement.scrollTop || document.body.scrollTop,
      fullHeight:document.body.scrollHeight,
      fullWidth:document.documentElement.scrollWidth
    };
  },
  computed:{
    objLeft:function(){
      return (this.screenWidth - this.objWidth)/2 + this.scrollleft;
    },
    objTop:function(){
      return (this.screenHeight - this.objHeight)/2 + this.scrolltop;
    },
    alertBoxStyleMobile:function(){
      return {
        width:this.screenWidth + 'px',
        height:this.fullHeight + 'px'
      };
    },
    alertBoxStyle:function(){
      return {
        width:this.fullWidth + 'px',
        height:this.fullHeight + 'px'
      };
    },
    layerWrapStyle:function(){
      return {
        width:this.objWidth + 'px',
        height:this.objHeight + 'px',
        left:this.objLeft + 'px',
        top:this.objTop + 'px'
      };
    },
    layerWrapStyleMobile:function(){
      return {
        width:this.objWidth + 'px',
        height:this.objHeight + 'px',
        left:(this.screenWidth - this.objWidth)/2 + 'px',
        top:(this.screenHeight - this.objHeight)/2 + 'px'
      };
    }
  },
  template:'<div id="alertBox" :style=""alertBoxStyle>\
    <div id="alertShadow"></div>\
    <div id="alertContent-super" :style="alertBoxStyleMobile">\
    <div class="close" @click="closeAlert(keptOption.closeFn)"></div>\
    </div>\
    </div>\ ',
  ready:function(){
    window.addEventListener('resize',this.handleResize);
    window.addEventListener('scroll',this.handleResize);
  },
  methods:{
    handleResize:function(event){
      this.screenWidth = document.documentElement.clientWidth;
      this.screenHeight = document.documentElement.clientHeight;
      this.scrollleft = document.documentElement.scrollLeft || document.body.scrollLeft;
      this.scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
      this.fullHeight = document.body.scrollHeight;
      this.fullWidth = document.documentElement.scrollWidth;
    },
    closeAlert:function(callback){
      this.$parent.isShowKeptBox = false;
      callback && callback();
    }
  }
})

