/**
 * Created by ztian on 16/1/30.
 */
function EncodeUtf8(s1) {
  // escape函数用于对除英文字母外的字符进行编码。如“Visit W3School!”->"Visit%20W3School%21"
  var s = escape(s1);
  var sa = s.split("%");//sa[1]=u6211
  var retV ="";
  if(sa[0] != "")
  {
    retV = sa[0];
  }
  for(var i = 1; i < sa.length; i ++)
  {
    if(sa[i].substring(0,1) == "u")
    {
      retV += Hex2Utf8(Str2Hex(sa[i].substring(1,5)));
      if(sa[i].length>=6)
      {
        retV += sa[i].substring(5);
      }
    }
    else retV += "%" + sa[i];
  }
  return retV;
}

function Str2Hex(s)
{
  var c = "";
  var n;
  var ss = "0123456789ABCDEF";
  var digS = "";
  for(var i = 0; i < s.length; i ++)
  {
    c = s.charAt(i);
    n = ss.indexOf(c);
    digS += Dec2Dig(eval(n));

  }
  //return value;
  return digS;
}
function Dec2Dig(n1)
{
  var s = "";
  var n2 = 0;
  for(var i = 0; i < 4; i++)
  {
    n2 = Math.pow(2,3 - i);
    if(n1 >= n2)
    {
      s += '1';
      n1 = n1 - n2;
    }
    else
      s += '0';

  }
  return s;

}
function Dig2Dec(s)
{
  var retV = 0;
  if(s.length == 4)
  {
    for(var i = 0; i < 4; i ++)
    {
      retV += eval(s.charAt(i)) * Math.pow(2, 3 - i);
    }
    return retV;
  }
  return -1;
}
function Hex2Utf8(s)
{
  var retS = "";
  var tempS = "";
  var ss = "";
  if(s.length == 16)
  {
    tempS = "1110" + s.substring(0, 4);
    tempS += "10" +  s.substring(4, 10);
    tempS += "10" + s.substring(10,16);
    var sss = "0123456789ABCDEF";
    for(var i = 0; i < 3; i ++)
    {
      retS += "%";
      ss = tempS.substring(i * 8, (eval(i)+1)*8);



      retS += sss.charAt(Dig2Dec(ss.substring(0,4)));
      retS += sss.charAt(Dig2Dec(ss.substring(4,8)));
    }
    return retS;
  }
  return "";
}

function isEmpty(str) {
  return typeof str == "undefined" || null == str || str.length == 0;
}

function getCookie(name) {
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg)){
    return decodeURIComponent((arr[2]));
  }
  else {
    return null;
  }
}
/**
 * 根据args返回要跳转的url
 * @param args 与调用App的gotoPage方法传的args相同,带pageId和其他页面参数
 * @returns 若在配置中能找到匹配的url,则返回填充参数后的url;若找不到,则返回null
 */
function getUrlByArgs(args){
  // 异常处理
  if(null == args) return null;
  var pageId = args["pageId"];
  if(isEmpty(pageId)) return null;

  // 这段代码处理pageId对应复杂值(通过数组管理多个url)的情况,找到匹配的url
  var url = map[pageId];
  if(isEmpty(url)) return null;

  if(typeof url == "object") { // TODO 优化数组判断逻辑
    var temp;
    for(var i in url) {
      temp = url[i];
      var matchKey = temp["matchKey"];
      if(matchKey && temp["matchValue"] == args[matchKey]) {
        break;
      }
    }
    url = temp["matchUrl"];
  }

  if(typeof url != "string") return null;

  // 这段代码处理url,填充参数
  for(var key in args){
    var reg = new RegExp("{" + key + "}","g");
    url = url.replace(reg, args[key]);
  }
  var reg = new RegExp("{[a-zA-Z0-9]+}", "ig"); // TODO 匹配优化
  url = url.replace(reg, "");

  var prefix = window.pa.prefix;
  // 当前url中不为http开头
  // pa.prefix中设置了前缀，且前缀包含http字符串
  if (url.indexOf('http') != 0 && prefix) {
    url = prefix + url;
  }
  return url;
}


(function(){
  window.pa = {
    isAndroid: function() {
      return (/Android/i).test(navigator.userAgent);
    },
    isIOS: function() {
      return (/iPhone|iPad|iPod/i).test(navigator.userAgent);
    },
    isAndroidApp: function () {
      return this.isAndroid() && (/com.rxhui.pay/i).test(navigator.userAgent);
    },
    isIOSApp: function() {
      return this.isIOS() && (/com.rxhui.pay/i).test(navigator.userAgent);
    },
    isApp: function() {
      return this.isAndroidApp() || this.isIOSApp();
    },
    isWeixin: function() {
      var ua = window.navigator.userAgent.toLowerCase();
      return ua.match(/MicroMessenger/i) == 'micromessenger';
    },
    isBroswer: function() {
      return !(this.isApp() || this.isWeixin());
    },
    isLogin: function() {
      return !isEmpty(getCookie("token")) && !isEmpty(getCookie("uid"));
    },
    getClientName: function() {
      return getCookie("clientName");
    },
    getUid: function() {
      return getCookie("userId");
    },
    getMobile: function() {
      return getCookie("mobile");
    },
    getAppVersion: function() {
      return getCookie("appVersion");
    },
    /**
     * 设置当前sdk
     * @param prefix url前缀
     */
    setPrefix: function(prefix) {
      this.prefix = prefix;
    },
    /**
     * 跳转到某个页面,处理全平台
     * @param args
     */
    gotoPageForAll: function(args) {
      this.callFuncWithArg("gotoPage", args);
    },
    /**
     * 跳转到某个页面,只处理移动网站
     * @param page app中的pageId
     * @param args 跳转参数
     */
    gotoPage: function(args) {
      if(args == null) return;
      var url = getUrlByArgs(args);
      console.log(url)
      if(isEmpty(url)) return;

      window.location.href = url;
      alert(window.location.href)
    },
    /**
     * 执行一个方法,处理跨平台调用
     * @param funcName
     * @param args
     * @param alterFunc
     */
    callFuncWithArg: function (funcName, args){
      var appArg = args;
      if(typeof(args) == 'object'){
        appArg = JSON.stringify(args);
      }
      if (this.isAndroidApp()) {

        window.payapp[funcName](appArg);
      } else if (this.isIOSApp()) {
        // ios替换特殊字符 ·
        appArg = appArg.replace(new RegExp(/·/g),' ');
        // ios需要传utf8编码，android不用传
        var utf8Arg = EncodeUtf8(appArg);
        //alert('funcName:'+funcName+' ;参数:'+appArg);
        window.location.href = "objc://" + funcName + ':/' + utf8Arg;
      } else {
        this[funcName](args);
      }
    }
  };
})();

