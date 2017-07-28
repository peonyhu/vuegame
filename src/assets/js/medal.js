import Vue from 'vue'
window.onload = function () {
  var userInfo = new Vue({
    el:'#medal',
    data:{

      keptOptions:{
        styles:{
          w:'auto',//弹出框宽度
          h:'auto'//弹出框高度
        },
        // states:{
          // type:type,
          // msg:msg
        // },
        closeFn:function () {

        }
      },
      showModifyback:false,
      isShowKeptBox:false
    },
    components:{
      'modify-user':{
        props:['showModifyback'],
        template:'#modifyInfo',
        data:function () {
          return{
            objWidth:'auto',
            objHeight:'auto',
            screenWidth:document.documentElement.clientWidth,
            screenHeight:document.documentElement.clientHeight,
            scrollleft:document.documentElement.scrollLeft || document.body.scrollLeft,
            scrolltop:document.documentElement.scrollTop || document.body.scrollTop,
            fullHeight:document.body.scrollHeight,
            fullWidth:document.documentElement.scrollWidth,
            submited:0
          }
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
        ready:function(){
          window.addEventListener('resize',this.handleResize);
          window.addEventListener('scroll',this.handleResize);
        },
        methods:{
          removeAlert:function () {
            this.showModifyback=false;
          },
          alertBoxStyleMobile:function(){
            return {
              width:this.screenWidth + 'px',
              height:this.fullHeight + 'px'
            };
          },
          handleResize:function(event){
            this.screenWidth = document.documentElement.clientWidth;
            this.screenHeight = document.documentElement.clientHeight;
            this.scrollleft = document.documentElement.scrollLeft || document.body.scrollLeft;
            this.scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
            this.fullHeight = document.body.scrollHeight;
            this.fullWidth = document.documentElement.scrollWidth;
          },
        }
      }
    },
    methods:{
      modifyAlert:function(){
        this.showModifyback=true;
      },
      // getUserInfo:function(){
      // var timestamp = Date.parse(new Date());
      // this.$http.post('/api/userInfo?timestamp='+timestamp,{},{
      //   emulateJSON:true
      // }).then(function(res){
      //   var data=res.data;
      //   //console.log(data)
      //   if(data.message.code==0)
      //   {
      //     this.userData.name=data.data.user.name;
      //     this.userData.gender=data.data.user.gender;
      //     this.userData.mobile=data.data.user.mobile;
      //     this.userData.tel=data.data.user.tel;
      //     this.userData.email=data.data.user.email;
      //     this.userData.department=data.data.user.department;
      //     this.userData.card=data.data.user.card;
      //     this.userData.gname=data.data.user.gname;
      //     this.userData.position=data.data.user.position;
      //   }
      //   else
      //   {
      //alert(data.message.message);
      // alertSuccess(this,data.message.message);
      // }

      // })
      // }
    }
  });
}

// userInfo.getUserInfo();
