!function(t){var e=function(){function e(e){if(this.length=0,!e)return this;if("string"==typeof e){if("#"===e[0]){var a=e.slice(1);if(p.test(a)){var i=l.getElementById(a);return i&&(this[this.length++]=i),this}}if("."===e[0]){var o=e.slice(1);if(p.test(o))return n(l.getElementsByClassName(o),this)}if("<"===e[0]&&">"===e[e.length-1]){var r=l.createElement("div");return r.innerHTML=e,n(r.childNodes,this)}return n(l.querySelectorAll(e),this)}return e instanceof Node||e===t?(this[this.length++]=e,this):e instanceof NodeList||c.isArray(e)?n(e,this):"function"==typeof e?c().ready(e):void 0}function n(t,e){return t?(a(t,function(t){e[e.length++]=t}),e):e}function a(t,e){for(var n=0,a=t.length;a>n;n++)e(t[n])}function i(t,e){if(void 0===e)return c(t);var n=[];return a(t,function(t){m(t,e)&&n.push(t)}),c(n)}function o(t,e,n,i){a(e.split(v),function(e){void 0===i?t.addEventListener(e,n,!1):t.addEventListener(e,function(e){var a=c(e.target).closest(i,t)[0];a&&n.call(a,e)},!1)})}function r(t,e,n){a(e.split(v),function(e){t.removeEventListener(e,n,!1)})}function s(t,e){var n=l.createEvent("Events");if(n.initEvent(t,!0,!0),e)for(var a in e)void 0===n[a]&&(n[a]=e[a]);return n}var c=function(t){return new e(t)},l=t.document,u={}.toString,f=[],d=f.slice,h=f.indexOf,p=/^[\w-]*$/,v=/\s+/g,g=function(){var t={};return function(e){return t[e]||(t[e]=new RegExp("(^|\\s)"+e+"(\\s|$)"))}}(),m=function(){var t=l.body;return t.matchesSelector?function(t,e){return t.matchesSelector(e)}:t.webkitMatchesSelector?function(t,e){return t.webkitMatchesSelector(e)}:t.msMatchesSelector?function(t,e){return t.msMatchesSelector(e)}:t.mozMatchesSelector?function(t,e){return t.mozMatchesSelector(e)}:void 0}();return a(["Object","Array","Function"],function(t){c["is"+t]=function(e){return u.call(e)==="[object "+t+"]"}}),c.extend=function(t){if(void 0===t)return this;if(1===arguments.length){for(var e in t)this[e]=t[e];return this}return a(d.call(arguments,1),function(e){for(var n in e)t[n]=e[n]}),t},c.fn=e.prototype={constructor:e,forEach:function(t){for(var e=0,n=this.length;n>e;e++)t(this[e],e);return this},each:function(t){return this.forEach(function(e,n){t.call(e,n)})},ready:function(t){var e=l.readyState;return"complete"===e||"loaded"===e||"interactive"===e?t():l.addEventListener("DOMContentLoaded",t,!1),this},filter:function(t){return i(this,t)},siblings:function(t){var e=[];return this.forEach(function(t){var n=t.parentNode;n&&a(n.children,function(n){n!==t&&-1===e.indexOf(n)&&e.push(n)})}),i(e,t)},not:function(t){var e=[];return this.forEach(function(n){!m(n,t)&&e.push(n)}),c(e)},find:function(t){var e=[];return this.forEach(function(n){a(n.querySelectorAll(t),function(t){-1===e.indexOf(t)&&e.push(t)})}),c(e)},eq:function(t){return c(this[t])},children:function(t){var e=[];return this.forEach(function(t){a(t.children,function(t){e.push(t)})}),i(e,t)},parent:function(t){var e=[];return this.forEach(function(t){var n=t.parentNode;n&&n!==l&&-1===e.indexOf(n)&&e.push(n)}),i(e,t)},parents:function(t){var e=[];return this.forEach(function(t){for(var n=t.parentNode;n;)n!==l&&-1===e.indexOf(n)&&e.push(n),n=n.parentNode}),i(e,t)},closest:function(t,e){for(var n=this[0];n&&!m(n,t);){var a=n.parentNode;n=a===l?null:n!==e&&a}return c(n)},index:function(t){return t instanceof e&&(t=t[0]),t?h.call(this,t):h.call(this[0].parentNode.children,this[0])},html:function(t){return void 0===t?this[0].innerHTML:this.forEach(function(e){e.innerHTML=t})},text:function(t){return void 0===t?this[0].textContent:this.forEach(function(e){e.textContent=t})},empty:function(){return this.html("")},val:function(t){return void 0===t?this[0].value:this.forEach(function(e){e.value=t})},attr:function(t,e){return"string"==typeof t&&void 0===e?this[0].getAttribute(t):this.forEach(function(n){if(c.isObject(t))for(var a in t)n.setAttribute(a,t[a]);else n.setAttribute(t,e)})},removeAttr:function(t){return this.forEach(function(e){a(t.split(v),function(t){e.removeAttribute(t)})})},css:function(e,n){if("string"==typeof e&&void 0===n){var a=t.getComputedStyle(this[0]);return a[e]}return this.forEach(function(t){var a=t.style;if(c.isObject(e))for(var i in e)a[i]=e[i];else a[e]=n})},show:function(){return this.forEach(function(t){var e=t.getAttribute("data-display")||"block";"none"===e&&(e="block"),t.style.display=e,t.removeAttribute("data-display")})},hide:function(){return this.forEach(function(t){t.setAttribute("data-display",c(t).css("display")),t.style.display="none"})},fadeIn:function(){return this.forEach(function(t){c(t).removeClass("fade-out").addClass("fade-in")})},fadeOut:function(){return this.forEach(function(t){c(t).removeClass("fade-in").addClass("fade-out")})},append:function(t,n){var a=t instanceof e?t:c(t);return this.forEach(function(t){a.forEach(function(e){n?t.insertBefore(e,t.firstChild):t.appendChild(e)})})},prepend:function(t){return this.append(t,!0)},appendTo:function(t){var n=t instanceof e?t:c(t);n.append(this)},prependTo:function(t){var n=t instanceof e?t:c(t);n.append(this,!0)},offset:function(){var e=this[0];return e===t?{left:0,top:0,right:0,bottom:0,width:t.innerWidth,height:t.innerHeight}:e.getBoundingClientRect()},width:function(){var e=this[0];return e===t?t.innerWidth:e.offsetWidth},height:function(){var e=this[0];return e===t?t.innerHeight:e.offsetHeight},is:function(t){var e=this[0];return t&&m(e,t)},addClass:function(t){return this.forEach(function(e){var n=e.className,i=[];a(t.split(v),function(t){!c(e).hasClass(t)&&i.push(t)}),i.length>0&&(e.className+=(n?" ":"")+i.join(" "))})},removeClass:function(t){return this.forEach(function(e){if(void 0===t)return void(e.className="");var n=e.className;a(t.split(v),function(t){n=n.replace(g(t)," ")}),e.className=n.trim()})},hasClass:function(t){return g(t).test(this[0].className)}},c.fn.extend=function(t){c.extend.call(this,t)},c.fn.extend({bind:function(t,e){return this.forEach(function(n){o(n,t,e)})},unbind:function(t,e){return this.forEach(function(n){r(n,t,e)})},delegate:function(t,e,n){return this.forEach(function(a){o(a,t,n,e)})},on:function(t,e,n){return"function"==typeof e?this.bind(t,e):this.delegate(t,e,n)},off:function(t,e){return this.unbind(t,e)},trigger:function(t,e){return t=s(t,e),this.forEach(function(e){e.dispatchEvent(t)})}}),a(["click","touchstart","touchmove","touchend","submit","load","resize","change","select"],function(t){c.fn[t]=function(e){return e?this.bind(t,e):this.trigger(t)}}),c.jsonp=function(){var t=l.getElementsByTagName("head")[0];return function(e,n){var a=/(\.js)$/.test(e),i=l.createElement("script");i.type="text/javascript",i.onload=function(){"function"==typeof n&&n(),!a&&t.removeChild(i)},i.src=e,t.appendChild(i)}}(),c.ajax=function(){function t(t){var e=[];for(var n in t)e.push(n+"="+t[n]);return e.join("&")}var e={method:"get",async:!0};return function(n){n=c.extend({},e,n);var a=new XMLHttpRequest;a.open(n.method,n.url,n.async);var i=n.header;if(i)for(var o in i)a.setRequestHeader(o,i[o]);a.onreadystatechange=function(){if(4===a.readyState&&200===a.status){var t=n.callback;"function"==typeof t&&t(a.responseText)}},a.send(t(n.data))}}(),c}();return"function"==typeof define?void define(function(){return e}):"object"==typeof exports?void(module.exports=e):void(t.jq=t.$=e)}(this),function(t,e){function n(t){var n=e.panelUnloaded;"function"==typeof n&&n(t)}var a=t.document,i=t.location,o=e(a),r=e(a.body);e.isShowQrcode=!0,e.indexSelector="#panel1",e.isMobi=/(iPhone|iPod|iPad|android|windows phone os|iemobile)/i.test(t.navigator.userAgent);var s=function(){var t={};return function(n){var a=e.panelLoaded,i=n[0].id;"function"==typeof a&&a(n,!t[i]),t[i]=!0}}();e.toggleMask=function(){var t=e("#mask");return 0===t.length&&(t=e('<div id="mask" class="fixed"><div><div class="spinner"><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b></div></div></div>'),r.append(t)),function(e){e?t.addClass("visible"):t.removeClass("visible")}}(),e.toggleSidebox=function(){var t=e("#sidebox");return function(a){var i=e.history[e.history.length-1];a?(r.addClass("onsidebox"),s(t),n(i)):(r.removeClass("onsidebox"),n(t),s(i))}}();var c=e("#mainbox");e.toggleHeader=function(t){t?c.removeClass("offheader"):c.addClass("offheader")},e.toggleNavbar=function(t){t?c.removeClass("offnavbar"):c.addClass("offnavbar")},e.setTitle=function(){var t=e(".roottitle .title");return function(e){e&&t.html(e)}}(),e.setSubtitle=function(){var t=e(".subtitle .title");return function(e){e&&t.html(e)}}(),e.loadPanel=function(){var t=e("#navbar a"),i=a.querySelector(".navbox"),o=e(e.indexSelector),r=1e3*parseFloat(o.css("transition-duration")||o.css("-webkit-transition-duration")),l=e.history=[],u=e("#header"),f="hidden"!==c.css("overflow"),d=function(){var t={},e=a.body;return function(n,a){a?t[n]=e.scrollTop:e.scrollTop=t[n]||0}}();return function(a){var o,c;if(a?(o=e(a),o.length>0&&(c=l[l.length-1],l.push(o))):(c=l.pop(),o=l[l.length-1],a="#"+o.attr("id")),o.length>0){if(t.length>0&&t.each(function(){for(var n=(this.getAttribute("data-hash")||this.hash).split("|"),o=0,r=n.length;r>o;o++)n[o]===a&&(t.removeClass("selected"),e(this).addClass("selected"),i.center(this))}),!c)return o.addClass("show opened"),e.setTitle(o.attr("title")),void s(o);if("#"+c.attr("id")!==a){var h=o.attr("data-role"),p=c.attr("data-role");f&&d(c.attr("id"),!0),o.addClass("show"),setTimeout(function(){"root"===h?(e.setTitle(o.attr("title")),e.toggleNavbar(!0),u.removeClass("onsubtitle"),"root"===p?(o.addClass("notrans"),c.addClass("notrans")):(o.removeClass("notrans"),c.removeClass("notrans")),o.removeClass("subopened").addClass("opened"),c.removeClass("opened")):(e.setSubtitle(o.attr("title")),e.toggleNavbar(!1),u.addClass("onsubtitle"),o.removeClass("notrans").addClass("reflow"),c.removeClass("notrans"),o.hasClass("subopened")?(o.removeClass("subopened").addClass("opened"),c.removeClass("opened")):(o.addClass("opened"),c.addClass("subopened").removeClass("opened")))},10),setTimeout(function(){c.removeClass("show"),o.removeClass("reflow"),f&&d(o.attr("id"),!1),n(c),"paneliframe"===c.attr("id")&&c.html("")},r+100),s(o)}}else console.log(a+"面板未找到")}}(),function(){o.on("touchstart","a",function(){e(this).addClass("focus")}),o.on("touchend","a",function(){e(this).removeClass("focus")}),o.on("click",".btn-onsidebox",function(){e.toggleSidebox(!0)}),o.on("click",".btn-offsidebox",function(){e.toggleSidebox(!1)});var t=e("#paneliframe");o.on("click","a",function(n){var a=this.hash;if(a)return n.preventDefault(),void e.loadPanel(a);var i=this.getAttribute("data-href"),o=this.getAttribute("data-title");i&&(n.preventDefault(),t.html('<iframe example="'+i+'"></iframe>'),e.setSubtitle(o||"详情"),e.loadPanel("#paneliframe"))}),o.on("click","#btn-goback",function(){e.loadPanel()})}(),e(function(){e.isShowQrcode&&!e.isMobi&&e.jsonp("http://img.gd.sohu.com/js/qrcode.js",function(){var t=e("#qrcode");0===t.length&&(t=e('<div id="qrcode"></div>'),r.append(t),new QRCode(t[0],{width:t.width(),height:t.height(),text:i.href})),o.on("click","#qrcode",function(){t.fadeOut()})}),r.addClass("loaded");var t=e(".navbox");t.length>0&&t.scroll(),e.loadPanel(e.indexSelector);var n=i.hash;n&&setTimeout(function(){e.loadPanel(n)},400)})}(this,$),function(t,e){e.fn.carousel=function(n){return e.fn.carousel.defaults={isVertical:!1,swipThreshold:50,isAutoPlay:!0,autoPlayInter:8e3,slideCallback:null,isShowTitle:!0,isShowPager:!0},this.each(function(){function a(){C.addClass("pi-carousel").html('<div class="pi-carousel-wrap">'+C.html()+"</div>"+(m?'<div class="pi-carousel-title"></div>':"")),o=C.find(".pi-carousel-wrap"),r=o[0].style,s=o.children("*"),c=s.length,d&&C.addClass("vertical"),l=C.find(".pi-carousel-title");var t="";if(b){t+='<div class="pi-carousel-pager">';for(var e=0,n=c;n>e;e++)t+="<span></span>";t+="</div>"}u=C.append(t).find(".pi-carousel-pager span"),i()}function i(){function e(){i=C.width(),f=C.height(),s.css({width:i+"px",height:f+"px"}),d?(r.width=i+"px",r.height=f*c+"px"):(r.width=i*c+"px",r.height=f+"px")}function n(){p&&(m=setInterval(function(){++k===c&&(k=0),a()},v))}function a(t){var e,n=-k*(d?f:i);if("number"==typeof t)0===k&&t>0&&(t/=2),k===c-1&&0>t&&(t/=2),n+=t;else{"function"==typeof g&&g(k);var a=s.removeClass("current").eq(k).addClass("current").attr("data-title");l.removeClass("visible"),a&&setTimeout(function(){l.addClass("visible").html(a)},200),u.removeClass("selected").eq(k).addClass("selected")}e="translate3d("+(d?"0,"+n+"px,0":n+"px,0,0")+")",o.css({"-webkit-transform":e,transform:e})}var i,f,m,b,y,w,k=0;e(),x.slideToIndex=function(t){k=t,a()},C.on("touchstart",function(t){var e=t.targetTouches[0];b=e.pageX,y=e.pageY,w=0,o.removeClass("transform"),p&&clearInterval(m)}),C.on("touchmove",function(t){var e=t.targetTouches[0],n=e.pageX-b,i=e.pageY-y;d?Math.abs(i)>Math.abs(n)&&(t.preventDefault(),t.stopPropagation(),a(w=i)):Math.abs(n)>Math.abs(i)&&(t.preventDefault(),t.stopPropagation(),a(w=n))}),C.on("touchend",function(t){w>h&&--k<0&&(k=0),-h>w&&++k===c&&(k=c-1),o.addClass("transform"),0!==w&&a(),n()}).trigger("touchend"),t.addEventListener("resize",function(){var t=C.width();t>0&&(e(),a(0))},!1)}var o,r,s,c,l,u,f=e.extend({},e.fn.carousel.defaults,n),d=f.isVertical,h=f.swipThreshold,p=f.isAutoPlay,v=f.autoPlayInter,g=f.slideCallback,m=f.isShowTitle,b=f.isShowPager,C=e(this),x=this;a()})}}(this,$),function(t,e){var n,a,i,o,r,s,c,l,u=t.document,f=e(u),d=e("#customalert");!function(){0===d.length&&(d=e('<div id="customalert"><div><div class="box"><h1 id="customalert-title">提示</h1><p id="customalert-content">是否转到登陆</p><a id="customalert-btnok" class="btn">确定</a><a id="customalert-btncancel" class="btn">关闭</a></div></div></div>'),e(u.body).append(d)),n=e("#customalert-title"),a=e("#customalert-content"),i=e("#customalert-btnok"),o=e("#customalert-btncancel")}(),f.on("click","#customalert-btnok",function(){d.removeClass("visible"),"function"==typeof l&&l(),"function"==typeof r&&r()}),f.on("click","#customalert-btncancel",function(){d.removeClass("visible"),"function"==typeof l&&l(),"function"==typeof s&&s()}),e.customalert=function(t){t=t||{};var u=e.extend({},e.customalert.defaults,t),f=u.title,h=u.content,p=u.btnOkText,v=u.btnCancelText,g=u.isAlert;r=u.btnOkClick,s=u.btnCancelClick,c=u.onShow,l=u.onHide,g?d.addClass("alert"):d.removeClass("alert"),f&&n.html(f),h&&a.html(h),p&&i.text(p),v&&o.text(v),d.addClass("visible"),"function"==typeof c&&c()},e.customalert.defaults={title:"提示",content:"内容",btnOkText:"确定",btnOkClick:null,btnCancelText:"取消",btnCancelClick:null,isAlert:!0,onShow:null,onHide:null}}(this,$),function(t,e){e.fn.flip=function(t){return e.fn.flip.defaults={isVertical:!1,swipThreshold:40,rate:1.3,slideCallback:null},this.each(function(){function n(){l.addClass("pi-flip"),u.eq(0).addClass("visible"),"function"==typeof c&&c(0),a()}function a(){function t(t){t.style.cssText=""}function n(n){var a;"number"==typeof n?u.each(function(t){var i=e(this);t===p?(a=o?"rotate3d(1,0,0,"+-n+"deg)":"rotate3d(0,1,0,"+n+"deg)",i.css({"-webkit-transform":a,transform:a})):(a=o?"rotate3d(1,0,0,"+(180-n)+"deg)":"rotate3d(0,1,0,"+-(180-n)+"deg)",i.css({"-webkit-transform":a,transform:a}))}):(d=!0,e.isFunction(c)&&c(p),u.each(function(t){var i=e(this);t===p?(a=o?"rotate3d(1,0,0,"+-(n?0:-360)+"deg)":"rotate3d(0,1,0,"+(n?0:-360)+"deg)",i.addClass("visible").css({"-webkit-transform":a,transform:a})):(a=o?"rotate3d(1,0,0,"+-(n?180:-180)+"deg)":"rotate3d(0,1,0,"+(n?180:-180)+"deg)",i.removeClass("visible").css({"-webkit-transform":a,transform:a}))}),setTimeout(function(){u.addClass("notrans").each(function(){t(this)}),d=!1},v))}var a,i,f,d,h=u.length,p=0,v=1e3*parseFloat(u.css("transition-duration")||u.css("-webkit-transition-duration"));l.on("touchstart",function(t){if(!d){var e=t.targetTouches[0];a=e.pageX,i=e.pageY,f=0,u.addClass("notrans")}}),l.on("touchmove",function(t){var e=t.targetTouches[0],r=e.pageX-a,c=e.pageY-i;o&&Math.abs(r)<Math.abs(c)&&(t.preventDefault(),t.stopPropagation(),!d&&n(f=c/s)),!o&&Math.abs(r)>Math.abs(c)&&(t.preventDefault(),t.stopPropagation(),!d&&n(f=r/s))}),l.on("touchend",function(e){d||(Math.abs(f)>r?(f>0&&-1===--p&&(p=h-1),0>f&&++p===h&&(p=0),u.removeClass("notrans"),n(f>0)):0!==f&&(u.eq(p).removeClass("notrans"),t(u[p])))})}var i=e.extend({},e.fn.flip.defaults,t),o=i.isVertical,r=i.swipThreshold,s=i.rate,c=i.slideCallback,l=e(this),u=l.children("*");n()})}}(this,$),function(t,e){e.fn.picpager=function(n){return e.fn.picpager.defaults={imgData:null,imgAttrName:null,swipThreshold:40,slideCallback:null},this.each(function(){function a(){f.addClass("pi-picpager").html('<div class="pi-picpager-wrap"><div class="pi-picpager-pic"></div><div class="pi-picpager-pic"></div><div class="pi-picpager-pic"></div></div>'),o=f.find(".pi-picpager-pic"),i()}function i(){function n(t){switch(o.removeClass("notrans"),t){case 1:case-1:v=!0;var n="translate3d("+(1===t?"":"-")+g+"px,0,0)";o.css({"-webkit-transform":n,transform:n}),setTimeout(function(){o.each(function(t){a(e(this).addClass("notrans").css({"-webkit-transform":"translate3d(0,0,0)",transform:"translate3d(0,0,0)"}),m+t-1)}),v=!1},b+100);break;default:o.css({"-webkit-transform":"translate3d(0,0,0)",transform:"translate3d(0,0,0)"})}"function"==typeof u&&u(m,t)}function a(t,e){var n=s[e];t.css({"background-image":n?"url("+(c?n[c]:n)+")":"none"})}var i,r,p,v,g=f.width(),m=0,b=1e3*parseFloat(o.css("transition-duration")||o.css("-webkit-transition-duration"));o.each(function(t){a(e(this),t-1)}),d.slideToIndex=function(t){var e;"number"!=typeof t||0>t||t>=h||t===m||(t>m?(e=-1,a(o.eq(2),t)):(e=1,a(o.eq(0),t)),m=t,n(e))},d.addItem=function(t){e.isArray(t)?s=s.concat(t):s.push(t),h=s.length},f.on("touchstart",function(t){if(!v){var e=t.targetTouches[0];i=e.pageX,r=e.pageY,p=0,o.addClass("notrans")}}),f.on("touchmove",function(t){if(v)t.preventDefault(),t.stopPropagation();else{var e=t.targetTouches[0],n=e.pageX-i,a=e.pageY-r;if(Math.abs(n)>Math.abs(a)){t.preventDefault(),t.stopPropagation(),0===m&&n>0&&(n/=2),m===h-1&&0>n&&(n/=2);var s="translate3d("+(p=n)+"px,0,0)";o.css({"-webkit-transform":s,transform:s})}}}),f.on("touchend",function(t){if(!v){var e;p>l&&(--m<0?m=0:e=1),-l>p&&(++m===h?m=h-1:e=-1),0!==p&&n(e)}}).trigger("touchend"),t.addEventListener("resize",function(){var t=f.width();t>0&&(g=t)},!1)}var o,r=e.extend({},e.fn.picpager.defaults,n),s=r.imgData,c=r.imgAttrName,l=r.swipThreshold,u=r.slideCallback,f=e(this),d=this,h=s.length;a()})}}(this,$),function(t,e){e.fn.scratchcard=function(t){return e.fn.scratchcard.deflunt={fineness:15,paintStyle:"#ccc",text:"",fontColor:"#f00",font:"bold 60px sans-serif",imgSrc:"",scale:2},this.each(function(){function n(){var t='<canvas style="width: 100%; height: 100%;" width="'+C+'" height="'+x+'"></canvas>';b.css({position:"relative","background-image":"url("+g+")","background-size":"100% auto"}).html(t),r=b.find("canvas"),r.css({position:"absolute",top:0,left:0}),l=b.children("canvas")[0].getContext("2d"),a(),i()}function a(){if(l.fillStyle=d,l.fillRect(0,0,C,x),h){l.fillStyle=p,v&&(l.font=v);var t=l.measureText(h).width;l.fillText(h,u.left||(C-t)/2,u.top||x/2+20,C)}}function i(){r.on("touchstart",function(t){var e=b.offset();s=e.left,c=e.top,l.fillStyle="#fff",l.globalCompositeOperation="destination-out",l.beginPath(),o(t)}),r.on("touchmove",function(t){t.preventDefault(),t.stopPropagation(),o(t)}),r.on("touchend",function(t){l.globalCompositeOperation="source-over"})}function o(t){var e=t.targetTouches[0];l.arc((e.pageX-s)*m,(e.pageY-c)*m,f*m,0,2*Math.PI,!0),l.closePath(),l.fill()}var r,s,c,l,u=e.extend({},e.fn.scratchcard.deflunt,t),f=u.fineness,d=u.paintStyle,h=u.text,p=u.fontColor,v=u.font,g=u.imgSrc,m=u.scale,b=e(this),C=b.width()*m,x=b.height()*m;n()})}}(this,$),function(t,e){e.fn.scroll=function(n){return e.fn.scroll.defaults={isVertical:!1,rate:400,timeSpanThreshold:300,maxScroll:400,androidRate:2,isAdjust:!1},this.each(function(){function a(){h.addClass("pi-scroll-item"),i()}function i(){function e(){var t=r?h.height()+parseFloat(h.css("margin-top"))+parseFloat(h.css("margin-bottom")):h.width()+parseFloat(h.css("margin-left"))+parseFloat(h.css("margin-right")),e=r?d.height()-parseFloat(d.css("padding-top"))-parseFloat(d.css("padding-bottom")):d.width()-parseFloat(d.css("padding-left"))-parseFloat(d.css("padding-right"));C=t-e}function n(t){t>0&&(t/=2),-t>C&&(t+=(-t-C)/2);var e="translate3d("+(r?"0,"+(x=t)+"px,0":(x=t)+"px,0,0")+")";h.css({"-webkit-transform":e,transform:e})}function a(t){var e=r?t.offsetTop-h[0].offsetTop-(d.height()-t.clientHeight)/2:t.offsetLeft-h[0].offsetLeft-(d.width()-t.clientWidth)/2;n(0>e?0:C>e?-e:-C)}var i,o,v,g,m,b,C,x=0;e(),d[0].center=a,d.on("touchstart",function(t){var e=t.targetTouches[0];v=t.timeStamp,i=e.pageX,o=e.pageY,m=0,b=x,h.addClass("notrans")}),d.on("touchmove",function(t){var e=t.targetTouches[0],a=e.pageX-i,s=e.pageY-o;r&&Math.abs(a)<Math.abs(s)&&(t.preventDefault(),t.stopPropagation(),n(b+(m=s))),!r&&Math.abs(a)>Math.abs(s)&&(t.preventDefault(),t.stopPropagation(),n(b+(m=a)))}),d.on("touchend",function(t){g=t.timeStamp;var e=g-v,a=e>c?0:m/(p?e/=u:e),i=Math.abs(a)*s;i>l&&(i=l),h.removeClass("notrans"),0>m?n(C>-(x-i)?x-i:-C):m>0&&n(0>x+i?x+i:0)}),f&&d.on("click",function(t){a(t.target)}),t.addEventListener("resize",function(){var t=d.width();t>0&&e()},!1)}var o=e.extend({},e.fn.scroll.defaults,n),r=o.isVertical,s=o.rate,c=o.timeSpanThreshold,l=o.maxScroll,u=o.androidRate,f=o.isAdjust,d=e(this),h=d.children("*"),p=/(android)/i.test(t.navigator.userAgent);a()})}}(this,$),function(t,e){e.fn.swatchbook=function(t){return e.fn.swatchbook.defaults={centerIdx:6,angleInc:8,proximity:45,neighbor:4,initIsClosed:!1,closeIdx:-1,openAt:-1,selectCallback:null,openDelay:25},this.each(function(){function n(){e.isAndroid2&&C.css({"-webkit-backface-visibility":"visible","backface-visibility":"visible"}),p?c=!0:a(u),g>=0&&y>g&&i(x.eq(g)),s()}function a(t){x.each(function(n){var a=e(this),i="rotate("+f*(n-t)+"deg)";setTimeout(function(){a.css({"-webkit-transform":i,transform:i})},n*b)})}function i(t){var e=t.index();e!==w?(x.removeClass("selected"),-1!==v&&e===v?(w=-1,o()):(w=e,t.css({"-webkit-transform":"rotate(0deg)",transform:"rotate(0deg)"}).addClass("selected"),r(t,e))):e===w&&"function"==typeof m&&m(e)}function o(){c?a(u):x.css({"-webkit-transform":"rotate(0deg)",transform:"rotate(0deg)"}),c=!c}function r(t,n){var a,i=k[n];i?a=i:(a=t.siblings(),k[n]=a),a.each(function(t){var a=n>t?f*(t-n):t-n===1?d:d+(t-n-1)*h,i="rotate("+a+"deg)";e(this).css({"-webkit-transform":i,transform:i})})}function s(){x.on("click",function(){i(e(this))})}var c,l=e.extend({},e.fn.swatchbook.defaults,t),u=l.centerIdx,f=l.angleInc,d=l.proximity,h=l.neighbor,p=l.initIsClosed,v=l.closeIdx,g=l.openAt,m=l.selectCallback,b=l.openDelay,C=e(this),x=C.addClass("sb-container").children("*"),y=x.length,w=-1,k=[];n()})}}(this,$),function(t,e){e.fn.turntable=function(t){return e.fn.turntable.defaults={count:12,rotateDeg:3600,duration:7e3,timeFx:"ease-in-out",offset:0},this.each(function(){function n(){i=e('<div class="pi-turntable-pointer"></div>'),f.addClass("pi-turntable").prepend(i),a()}function a(){var t,e;d.turnToIndex=function(n,a){if(!(n>r||e)){var o=c/1e3+"s "+l,f=s+n/r*360+u+"deg",d="rotate("+f+")";i[0].style.cssText="",e=!0,setTimeout(function(){i.css({"-webkit-transition":"-webkit-transform "+o,transition:"transform "+o,"-webkit-transform":d,transform:d}),clearTimeout(t),t=setTimeout(function(){"function"==typeof a&&a(),e=!1},c)},10)}}}var i,o=e.extend({},e.fn.turntable.defaults,t),r=o.count,s=o.rotateDeg,c=o.duration,l=o.timeFx,u=o.offset,f=e(this),d=this;n()})}}(this,$),function(t,e){var n=e(t.document),a=(t.Global={},{}),i={};t.alert=function(t){e.customalert({content:t})},e.panelLoaded=function(t,n){var i=a[t.attr("id")];e.isFunction(i)&&i(t,n)},e.panelUnloaded=function(t){var n=i[t.attr("id")];e.isFunction(n)&&n(t)},a.panelcarousel=function(){return function(t,n){n&&e(".carousel").each(function(){for(var t=this.getAttribute("data-len"),n=this.getAttribute("data-part"),a="",i=0;t>i;i++)a+='<a style="background: url(example/images/'+(n?n+"/":"")+i+'.jpg) center center no-repeat; background-size: cover;" data-title="焦点图示例 '+(i+1)+'"></a>';e(this).html(a).carousel({isVertical:"1"===this.getAttribute("data-isvertical")})})}}(),a.panelflip=function(){return function(t,n){n&&e(".flip").each(function(){for(var t=this.getAttribute("data-len"),n=this.getAttribute("data-part"),a="",i=0;t>i;i++)a+='<a><p style="background: url(example/images/'+(n?n+"/":"")+i+'.jpg) center center no-repeat; background-size: cover;" data-title="焦点图示例 '+(i+1)+'"></p></a>';e(this).html(a).flip({isVertical:"1"===this.getAttribute("data-isvertical")})})}}(),a.panelpicpager=function(){return function(t,n){n&&e.jsonp("http://img.gd.sohu.com/js/jtool.js",function(){var t=1,n=10,a=jtool.proxy;a.pushData({url:"http://app.gd.sohu.com/minisite/xtep/20140530/get.php?act=list&page="+t+"&perpage="+n+"&order=0&code=aa1c9153608a7755b7c20e97c0eade27",success:function(i){var o=e(".picpager").picpager({imgData:i.data.detail,imgAttrName:"image",slideCallback:function(e){e+1===10*t&&(t++,a.pushData({url:"http://app.gd.sohu.com/minisite/xtep/20140530/get.php?act=list&page="+t+"&perpage="+n+"&order=0&code=aa1c9153608a7755b7c20e97c0eade27",success:function(t){o[0].addItem(t.data.detail)}}))}})}})})}}(),a.panelscroll=function(){return function(t,n){n&&e(".scroll").each(function(){e(this).scroll({isVertical:"1"===this.getAttribute("data-isvertical")})})}}(),a.panelswatchbook=function(){return function(t,n){n&&e(".swatchbook").each(function(){e(this).swatchbook({angleInc:25,neighbor:15,proximity:80,initIsClosed:!0,closeIdx:12,selectCallback:function(t){console.log(t)}})})}}(),a.panelscratchcard=function(){return function(t,n){n&&e(".scratchcard").each(function(){e(this).scratchcard({text:"刮开有奖",imgSrc:"example/images/1.jpg"})})}}(),a.panelturntable=function(){return function(t,a){if(a){var i=e("#turntable").turntable({count:10})[0];n.on("click","#turntable_start",function(){var t=parseInt(10*Math.random());i.turnToIndex(t,function(){alert(t+1)})})}}}()}(this,$);