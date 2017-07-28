  var title = document.getElementById('title').value;
  var link = document.getElementById('link').value;
  var imgUrl = document.getElementById('imgUrl').value;
  var desc = document.getElementById('desc').value;
  function hasShareBtn(funcName) {
    if(pa.isAndroidApp()) {
      window.payapp[funcName]('true');
    }
    return 'true';
  }

  function getShareLink(funcName) {
    if(pa.isAndroidApp()) {
      window.payapp[funcName](link);
    }
    return link;
  }

   function getShareText(funcName) {
    if(pa.isAndroidApp()) {
      window.payapp[funcName](desc);
    }
    return desc;
  }
   function getShareInfo(funcName) {
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

