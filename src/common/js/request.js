/**
 * 解析url参数
 * @example ?id=12345&a=b
 * @return Object {id:12345,a:b}
 */
export function urlParse() {
  let url = window.location.search;
  let obj = {};
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  // ['?id=12345', '&a=b']
  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substring(1).split('=');
      let key = decodeURIComponent(tempArr[0]);
      let val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    });
  }
  return obj;
};
export function urlSite() {
  let url = window.location.hostname;
  let arr = url.split('.');
  let arr1 = decodeURIComponent(arr[1]);
  let arr2 = decodeURIComponent(arr[2]);
  let tempArr = `${arr1}.${arr2}`;
  return tempArr;
}
export function alertLayer(con)
{
  let title = cont.msgTitle;
  let msg = cont.msgCont;
  let w = cont.msgWidth;
  let h = cont.msgHeight;
  title = title ? title : '';
  let H,W;
  W = w ? (w + 'px') : 'auto';
  if(h == 'auto')
  {
    H = 'auto';
  }else {
    H = h + 'px';
  }
  // if(typeof(cont) == 'object')
  // {
  //        this.conMsg ='<div class="m-layer-cont1" style="width:'+W+';height:'+H+';"><p v-demo>ddddd</p><h2 class="m-layer-title1">'+title+'<a href="javascript:;" ref="aa" @click="remove" class="m-layer-close1"></a></h2>'+msg+'</div>';
  // }else{
  //   this.conMsg = cont;
  // }
}

