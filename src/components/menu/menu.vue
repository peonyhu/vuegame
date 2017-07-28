<template>
  <div class="menu" :index="index">
    <div class="menu-red">
      <h1>{{amount}}元</h1>
      <p>爽活宝红包</p>
    </div>
    <div class="menu-process">
      <p class="line" v-if="this.index<2">{{menuMsg}}<strong>成功绑卡</strong></p>
      <p v-else>邀请<em class="c_ff4d2b">{{menuMsg}}位</em>首投≥1万元<br>的好友</p>
      <span v-if="finished"><em>待完成</em></span>
      <span v-else class="finished"><em></em></span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import data from '@/util/mock';
  import $ from 'jquery';
  export default {
    props:{
      amount:'',
      menuMsg:'',
      index:''
    },
    data(){
      return{
        finished:true
      }
    },
    methods:{
      friendNum(){
        let params = {
          ut:this.$route.query.ut,
          friendId:this.$route.query.friendId
        };
        console.log(this.$route.query)
        this.$http.post('http://g.cn',params,{
          emulateJSON:true
        }).then((res)=>{
          let data = res.data;
          if(data.message.code == 0 && this.index == 0){
            this.finished = false;
          }else if(data.message.code == 1 && this.index<=1){
              this.finished = false;
          }else if(data.message.code == 2 && this.index<=2){
            this.finished = false;
          }else if(data.message.code == 3 && this.index<=3){
            this.finished = false;
          }else if(data.message.code == 4 && this.index<=4){
            this.finished = false;
          }
          console.log(data.message.code +'||'+ this.index);
        })
      },
    },
    mounted(){
      this.friendNum();
    },
    filters:{
    }
  }
</script>
<style scoped>
  .hide{
    display: none;}
</style>
