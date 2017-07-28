// 登录页
export function gotoLogin(url){
  if (pa.isAndroidApp()) {
    pa.gotoPageForAll({pageId:'login'});
  } else if (pa.isIOSApp()) {
    pa.gotoPageForAll({pageId:'login'});
  } else {
    // pa.gotoPageForAll({pageId:'webView',url:url});
    // account();
    window.location.href = url;
  }
}
// 邀请好友
export function inviteFid(url){
  if (pa.isAndroidApp()) {
    pa.gotoPageForAll({pageId:url});
  } else if (pa.isIOSApp()) {
    pa.gotoPageForAll({pageId:url});
  } else {
    // pa.gotoPageForAll({pageId:'webView',url:url});
    // account();
    // window.location.href = url;
  }
}

// 分享的方法
export function onResult(success,type)
{
  var msg = (success == 'true') ? '成功' : '失败';
  var share_type = '';
  switch ( type )
  {
    case 'WEIXIN':
      share_type = '微信好友';
      break;
    case 'WEIXIN_CIRCLE':
      share_type = '微信朋友圈';
      break;
    case 'SINA':
      share_type = '新浪微博';
      break;
    case 'SMS':
      share_type = '短信';
      break;
  }
  // var urlCode = '/activity/shareCount';
  // var activityName = $("#activityName").val();
  // var param ={
  //   name:activityName,
  //   type:share_type,
  //   success:msg
  // };
  // function succ(data)
  // {
  // }
  // if(activityName){
  //   ajax(urlCode,"get",param,succ,null);
  // }
}


// 支持全部
export function shareAll()
{
  pa.callFuncWithArg('sharePlatform','ALL');
}
//只支持其中的一个
export function shareOne(args)
{
  pa.callFuncWithArg('sharePlatform',args);
}

export function gotoPage(url) {
  if(document.getElementById('urlBack')){
    var urlBack = document.getElementById('urlBack').value;
    if (pa.isIOSApp() || pa.isAndroidApp()) {
      pa.gotoPageForAll({pageId:'webView',url:url?url:urlBack});
    }
  }
}
