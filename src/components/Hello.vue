<template>
  <div ref="content">
    <input type="hidden" name="" id="urlBack" value="/">
    <div class="m-banner">
      <div class="m-banner-txt"></div>
    </div>
    <div class="m-bn" id="inviteFrd">
      <span></span>
      <a href="javascript:;" id="trackVue" @click="inviteBn">立即邀请好友，赢取大礼</a>
    </div>
    <div class="m-con">
      <div class="m-medal m-medal1 clearfix">
        <div class="title clearfix">
          <span></span>
          <div class="msg">
            <h1>邀请好友，送您红包</h1>
            <p>好友注册→绑卡→首投，红包步步升级</p>
            <p>*爽活宝红包，购买满200元即可抵扣现金</p>
          </div>
        </div>
          <menu-msg ref="menu" v-for="(amount, index) in amounts" :key="amount.id" :index="index" :amount="amount.money" :menuMsg="amount.msg"></menu-msg>
        <div class="award clearfix">
          <a href="javascript:;" id="awardmsg1" class="mt29 pd44" @click="alertbox(1)"><em>奖励说明</em> >></a>
        </div>
      </div>
      <div class="m-medal m-medal2 clearfix">
        <div class="title clearfix">
          <span></span>
          <div class="msg">
            <h1>好友投资，您返现</h1>
            <p>邀请人可获得好友每笔投资金额的0.5%作为返现奖金(活期产品为活动期间内好友所获收益的15%)，不设上限。好友投资越给力，您的返现越得利。</p>
          </div>
        </div>
        <div class="example">
          <span class="img"></span>
          <ul class="table clearfix">
            <li>
              <span>好友投资金额</span>
              <span>产品期限</span>
              <span>邀请人返现</span>
            </li>
            <li>
              <span></span>
              <span>28天</span>
              <span>38.35元</span>
            </li>
            <li>
              <span></span>
              <span>91天</span>
              <span>124.66元</span>
            </li>
            <li>
              <span></span>
              <span>365天</span>
              <span>500元</span>
            </li>
            <span class="money"></span>
          </ul>
          <div class="cash">
            <p>目前，您有待收返现总额：<em>1030</em>元</p>
            <p>*奖励将于5月15日统一发放</p>
          </div>
          <div class="award clearfix">
            <!--<router-link to="/advisorDetail">-->
            <a href="javascript:;" class="invite" @click="inviteDet"><em>查看邀请明细 >></em></a>
            <!--</router-link>-->
            <a href="javascript:;" id="awardmsg2" @click="alertbox(2)" class="details"><em>奖励说明</em> >></a>
          </div>

        </div>
      </div>
      <div class="m-medal m-medal3 clearfix">
        <div class="title clearfix">
          <span></span>
          <div class="msg">
            <h1>好友投资，您返现</h1>
            <p>邀请人可获得好友每笔投资金额的0.5%作为返现奖金(活期产品为活动期间内好友所获收益的15%)，不设上限。好友投资越给力，您的返现越得利。</p>
          </div>
        </div>
        <div class="example">
          <span class="img"></span>
          <ul class="table clearfix">
            <li>
              <span>好友投资金额</span>
              <span>产品期限</span>
              <span>邀请人返现</span>
            </li>
            <li>
              <span></span>
              <span>28天</span>
              <span>38.35元</span>
            </li>
            <li>
              <span></span>
              <span>91天</span>
              <span>124.66元</span>
            </li>
            <li>
              <span></span>
              <span>365天</span>
              <span>500元</span>
            </li>
            <span class="money"></span>
          </ul>
          <div class="cash">
            <p>目前，您有待收返现总额：<em>1030</em>元</p>
            <p>*奖励将于5月15日统一发放</p>
          </div>
          <div class="award clearfix">
            <a href="#" class="invite"><em>查看邀请明细 >></em></a>
            <a href="javascript:;" id="awardmsg3" @click="alertbox(3)"><em>奖励说明</em> >></a>
          </div>
        </div>
      </div>
    </div>
    <!--<alertmsg v-show="alertIsShow" ref="parent" v-on:myHeight="toAlertHeight" v-on:myWidth="toAlertWidth" :objHeight="offsetHeight" :objWidth="offsetWidth" :objShow="dataBn"></alertmsg>-->
    <!--<alertmsg v-if="alertIsShow" ref="parent" :objShow="dataBn"></alertmsg>-->
    <alertmsg v-show="alertIsShow" ref="alertmsg" :oStyle="objectStyle" v-on:myHeight="toAlertHeight" v-on:myWidth="toAlertWidth"></alertmsg>
  </div>
</template>

<script type="text/ecmascript-6">
  import alertmsg from '@/components/alertmsg/alertmsg';
  import menu from '@/components/menu/menu';
  import {gotoPage,shareAll} from '@/common/js/appmethod';
  export default {
    name: 'app',
    data(){
      return {
        alertIsShow:false,
        objectStyle:{
          offsetHeight: '',
          offsetWidth: ''
        },
        resourceNews: window.location.hostname,
        amounts:[
          { money: '5', msg:'首次邀请好友' },
          { money: '10',msg:'首次邀请好友'},
          { money: '30' ,msg:'1'},
          { money: '100',msg:'3' },
          { money: '150',msg:'6'}
        ]
      }
    },
    methods:{
      toAlertHeight: function(height) { // mychlid事件触发调用的方法
        this.objectStyle.offsetHeight = height; // massage就是子组件穿过来的内容
      },
      toAlertWidth: function(width) { // mychlid事件触发调用的方法
        this.objectStyle.offsetWidth = width; // massage就是子组件穿过来的内容
      },
      alertbox(dataBn){
        let msgCon;
        if(dataBn==1){
            msgCon = '<div class="m-cont-msgm m-cont-explain">' +
                '<a class="close"></a>'+
                '<h1>奖励说明1</h1>' +
                '<ul class="m-cont-split clearfix">' +
                '<li></li><li><span></span></li><li></li></ul>' +
                '<p>1.同一用户，5个红包均可以领取，但单个红包仅可领取一次。注册与绑卡奖励实时发放，投资奖励于第二个工作日12:00之前发放；</p>' +
                '<p>2.被邀请用户通过点击活动页邀请链接注册，即奖励红包188元</p>' +
                '<p>3.如有任何恶意刷奖行为，一经查实，所有奖励将不予承诺</p>' +
                '</div>';
        }else if(dataBn ==2){
            msgCon = '<div class="m-cont-msgm m-cont-explain"><a class="close"></a><h1>奖励说明2</h1>' +
            '<ul class="m-cont-split clearfix"><li></li><li><span></span></li><li></li></ul>' +
            '<div id="wrapper" ref="wrapper"><div class="control-height" id="scroller">' +
            '<p>1.同一用户，5个同一用户同一用户同一用户同一用户同被邀请用户通过点击活动页邀请链接注册被邀请用户通过点击活动页邀请链接注册被邀请用户通过点击活动页邀请链接注册被邀请用户通过点击活动页邀请链接注册被邀请用户通过点击活动页邀请链接注册被邀请用户通过点击活动页邀请链接注册被邀请用户通过点击活动页邀请链接注册一用户同一用户同一用户同一用户同一用户同一用户同一用户同一用户红包均可以领取，但单个红包但单个红包仅可领取一次但单个红包仅可领取一次但单个红包仅可领取一次但单个红包仅可领取一次但单个红包仅可领取一次但单个红包仅可领取一次但单个红包仅可领取一次但单个红包仅可领取一次但单个红包仅可领取一次但单个红包仅可领取一次但单个红包仅可领取一次但单个红包仅可领取一次但单个红包仅可领取一次但单个红包仅可领取一次但单个红包仅可领取一次但单个红包仅可领取一次但单个红包仅可领取一次但单个红包仅可领取一次但单个红包仅可领取一次仅可领取一次。注册与绑卡奖励实时发放，投资奖励于第二个工作日12:00之前发放；</p>' +
            '<p>2.被邀请用户通过点击活动页邀请链接注册，即奖励红包188元</p>' +
            '<p>3.如有任何恶意刷奖行为，一经查实，所有奖励将不予承诺</p></div></div>' +
            '</div>';
        }
        this.alertIsShow = true;
        this.$refs.alertmsg.alertMsgSuper(msgCon);
        if(dataBn ==2 ){
          this.$nextTick(()=>{
            this.$refs.alertmsg._initScroll();
          })
        }
      },
      toNum(a){
        var a = a.toString();
        //也可以这样写 var c=a.split(/\./);
        var c=a.split('.');
        var num_place=["","0","00","000","0000"],r=num_place.reverse();
        for (var i=0;i<c.length;i++){
          var len=c[i].length;
          c[i]=r[len]+c[i];
        }
        var res= c.join('');
        return res;
      },
      inviteBn(){
        let appVersion;
        if(pa.isApp())
        {
          appVersion = pa.getAppVersion();
        }else{
          appVersion = this.toNum('1.1.0');
        }
        let str2 = this.toNum('5.12.0');
        if(appVersion < str2){
          let msgCon = '<div class="m-cont-msgm m-cont-explain"><a class="close"></a><p class="update">请点击页面右上角分享按钮，赶快邀请好友注册吧！</p></div>';
          this.$refs.alertmsg.alertMsgSuper(msgCon);
          this.alertIsShow = true;
        }else{
          shareAll();
        }
      },
      inviteDet(){
        let url;
        if(pa.isIOSApp() || pa.isAndroidApp()){
          url = `${this.resourceNews}advisorDetail`;
          gotoPage(url);
        }else{
          url = '/advisorDetail'
          this.$router.push({path:url});
        }

      },
      trackEvent(){
        _hmt.push(['_trackEvent', 'M_testVue', 'click', 'M_test1']);
      }
    },
    mounted(){
      document.getElementById('trackVue').addEventListener('click',this.trackEvent);
    },
    components: {
      alertmsg,
      'menu-msg':menu
    }
  }
</script>
<style>
  .m-cont-msgm.m-cont-explain{
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }
</style>
