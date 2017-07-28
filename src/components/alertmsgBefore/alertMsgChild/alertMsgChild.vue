<template>
  <div class="alertMsgChild clearfix" ref="show">
    <div class="m-cont-msgm" :style="show"><div class="close" @click="removeAlert(touchMove)"></div><div v-html="conMsg">{{this.conMsg}}</div></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import iScroll from 'iscroll';
  export default{
    props: {
      objShow:''
    },
    data(){
      return {
        conMsg:''
       }
    },
    computed:{
      show(){
          if(this.$parent.$parent.alertIsShow == true) {
            if (this.objShow == 1) {
              this.conMsg = this.$parent.$parent.con1;
            } else if (this.objShow == 2) {
              this.conMsg = this.$parent.$parent.con2;
            }
            else if (this.objShow == 4) {
              this.conMsg = this.$parent.$parent.msgerror;
            }
            this.$nextTick(() => {
              this.boxStyle();
              if(this.objShow == 2){
                this._initScroll();
              }
            })
          }
      }
    },
    methods:{
        removeAlert(callback){
          this.$parent.$parent.alertIsShow = false;
          callback && callback();
        },
        touchMove(){
            document.removeEventListener('touchmove', this.preventDefault, false);
        },
        boxStyle(){
          this.$emit('myHeight',parseFloat(this.$refs.show.offsetHeight));
          this.$emit('myWidth',parseFloat(this.$refs.show.offsetWidth));
        },
        _initScroll(){
              var wrapper = document.getElementById('wrapper');
              var myScroll1;
              myScroll1 = new iScroll(wrapper,{
                    mouseWheel: true,
                    scrollbars: true,
                    click:true
               });
            document.addEventListener('touchmove', this.preventDefault, false);
        },
        preventDefault(e){
            e.preventDefault();
        }
    }
  }
</script>
<style>
  .alertMsgChild{
    padding:0 1.5rem;
    position: relative;
  }
</style>
