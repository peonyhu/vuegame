<template>
  <div class="alertmsg">
    <div id="alertBox" :style="alertBoxStyle">
      <div id="alertShadow"></div>
      <div id="alertContent-super" :style="alertBoxStyleMobile" ref='conHeight'>
        <div class="m-cont-tiped clearfix">
          <!--<alertMsgChild :objShow="objShow" :objHeight="objHeight" :objWidth="objWidth" v-on:myHeight1="toAlertHeight1" v-on:myWidth1="toAlertWidth1"></alertMsgChild>-->
          <alertMsgChild :objShow="objShow" v-on:myHeight="toAlertHeight" v-on:myWidth="toAlertWidth"></alertMsgChild>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import alertMsgChild from '@/components/alertMsgChild/alertMsgChild';
  export default{
      props:{
        objShow:''
      },
      data(){
        return {
          objWidth:'',
          objHeight:'',
          screenWidth:document.documentElement.clientWidth,
          screenHeight:document.documentElement.clientHeight,
          scrollleft:document.documentElement.scrollLeft || document.body.scrollLeft,
          scrolltop:document.documentElement.scrollTop || document.body.scrollTop,
          fullHeight:document.body.scrollHeight,
          fullWidth:document.documentElement.scrollWidth
          }
      },
      computed:{
        objLeft:function(){
          return (this.screenWidth - this.objWidth)/2 ;
        },
        objTop:function(){
          return (this.screenHeight - this.objHeight)/2;
        },
        alertBoxStyle(){
          return {
              width:this.fullWidth + 'px',
              height:this.fullHeight + 'px'
          }
        },
        alertBoxStyleMobile(){
            if(this.$parent.alertIsShow == true)
            {
////                this.$emit('myHeight',parseFloat(this.$refs.conHeight.boxHeight));
////                this.$emit('myWidth',parseFloat(this.$refs.conHeight.offsetWidth));
//              this.$nextTick(() => {
//                this.$emit('myWidth',parseFloat(this.objWidth));
//                this.$emit('myHeight',parseFloat(this.objHeight));
//              })

            }
            return {
                width:this.objWidth + 'px',
                height:this.objHeight+ 'px',
                left:this.objLeft + 'px',
                top:this.objTop + 'px'
            }
        }
      },
      mounted(){
        window.addEventListener('resize',this.handleResize);
        window.addEventListener('scroll',this.handleResize);
      },
      methods:{
        removeAlert(callback){
            this.$parent.alertIsShow = false;
            callback && callback();
        },
        handleResize:function(event){
          this.screenWidth = document.documentElement.clientWidth;
          this.screenHeight = document.documentElement.clientHeight;
          this.scrollleft = document.documentElement.scrollLeft || document.body.scrollLeft;
          this.scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
          this.fullHeight = document.body.scrollHeight;
          this.fullWidth = document.documentElement.scrollWidth;
        },
        toAlertHeight: function(height) { // mychlid事件触发调用的方法
            this.objHeight = height; // massage就是子组件穿过来的内容
        },
        toAlertWidth: function(width) { // mychlid事件触发调用的方法
            this.objWidth = width; // massage就是子组件穿过来的内容
        }
//        toFather(){
////            let height = this.$emit('myChild',parseFloat(this.$refs.aa.offsetHeight))// 使用$emit来向父组件传播
////            return height;
//          var heightDiv = parseFloat(this.$refs.aa.offsetHeight);
//          return heightDiv;
//        }
      },
      components: {
        alertMsgChild
      }
  }
</script>
<style>

</style>
