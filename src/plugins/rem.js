(function (designWidth, maxWidth) {
  var doc = document,
    win = window;
  var docEl = doc.documentElement;
  var tid;
  var rootItem, rootStyle;
  function refreshRem() {
    var width = docEl.getBoundingClientRect().width;
    // alert(width);
    // console.log(width);
    if (!maxWidth) {
      maxWidth = 540;
    }
    if (width > maxWidth) {
      width = maxWidth;
    }
    // if (width > 1600) {
    //   width = 1600;
    // }
    //与淘宝做法不同，直接采用简单的rem换算方法1rem=100px
    // console.log(width);
    // console.log(designWidth);
    var oldSize = (width * 100) / designWidth;
    // console.log(rem);
    var rem = oldSize;
    console.log('rem:'+rem);
    // /* 获取设置后的字体大小情况 - 因微信设置APP字体大小后会影响该设置 */
    // var nowSize = window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize;
    // console.log('nowSize:'+nowSize);
    // var oldSizeValue = parseFloat(oldSize,10);
    // var nowSizeValue = parseFloat(nowSize,10);

    // /* 当差值大于1时重新按差比计算出正确的px值 */
    // if((nowSizeValue - oldSizeValue) > 1 || (nowSizeValue - oldSizeValue) < -1){
    //   var diff = (oldSizeValue / nowSizeValue);
    //   // docEl.style.fontSize = (clientWidth/docWidth*100*diff) + 'px';
    //   rem = oldSizeValue*diff;
    // }

    //兼容UC开始
    rootStyle = "html{font-size:" + rem + "px !important}";
    rootItem =
      document.getElementById("rootsize") || document.createElement("style");
    if (!document.getElementById("rootsize")) {
      document.getElementsByTagName("head")[0].appendChild(rootItem);
      rootItem.id = "rootsize";
    }
    if (rootItem.styleSheet) {
      rootItem.styleSheet.disabled || (rootItem.styleSheet.cssText = rootStyle);
    } else {
      try {
        rootItem.innerHTML = rootStyle;
      } catch (f) {
        rootItem.innerText = rootStyle;
      }
    }
    //兼容UC结束

    console.log('rem:'+rem);
    docEl.style.fontSize = rem + "px";
  }
  refreshRem();

  win.addEventListener(
    "resize",
    function () {
      clearTimeout(tid); //防止执行两次
      tid = setTimeout(refreshRem, 300);
    },
    false
  );

  win.addEventListener(
    "pageshow",
    function (e) {
      if (e.persisted) {
        // 浏览器后退的时候重新计算
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
      }
    },
    false
  );

  if (doc.readyState === "complete") {
    doc.body.style.fontSize = "16px";
  } else {
    doc.addEventListener(
      "DOMContentLoaded",
      function () {
        doc.body.style.fontSize = "16px";
      },
      false
    );
  }

  //禁止微信浏览器改变字体设置
  if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {  
    handleFontSize();
  } else {
    
    if (document.addEventListener) {
    
      document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
    } else if (document.attachEvent) {
    
      //IE浏览器，非W3C规范
      document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
    }
  }
  function handleFontSize() {
    
    // 设置网页字体为默认大小
    WeixinJSBridge.invoke('setFontSizeCallback', {
       'fontSize' : 0 });
    // 重写设置网页字体大小的事件
    WeixinJSBridge.on('menu:setfont', function() {
      
      WeixinJSBridge.invoke('setFontSizeCallback', {
       'fontSize' : 0 });
    })
  }
})(1920, 5000);
