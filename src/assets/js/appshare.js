// window.addEventListener('load',function () {
    let title=document.getElementById('title') ? document.getElementById('title').value : '';
    var link=document.getElementById('link')? document.getElementById('link').value : '';
    var imgUrl=document.getElementById('imgUrl')? document.getElementById('imgUrl').value : '';
    var desc=document.getElementById('desc')? document.getElementById('desc').value : '';
    function hasShareBtn(funcName) {
      alert(1)
      if(pa.isAndroidApp()) {
        window.payapp[funcName]('true');
      }
      return 'true';
    }

    function getShareLink(funcName) {
      alert(2)
      if(pa.isAndroidApp()) {
        window.payapp[funcName](link);
      }
      return link;
    }

    function getShareText(funcName) {
      alert(3)
      if(pa.isAndroidApp()) {
        window.payapp[funcName](desc);
      }
      return desc;
    }
    alert(title)
    function getShareInfo(funcName) {
      // alert(3)
      var result = '{\"shareable\":\"true\",\"info\":{' +
        '\"link\":\"'+link+'\",' +
        '\"text\":\"'+desc+'\",' +
        '\"title\":\"'+title+'\",' +
        '\"icon\":\"'+imgUrl+'\"}}';
      if(pa.isAndroidApp()) {
        window.payapp[funcName](result);
      }
      return result;
    }


// });

