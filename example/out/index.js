!function(t){var e=function(){function e(e){if(this.length=0,!e)return this;if("string"==typeof e){if("#"===e[0]){var i=e.slice(1);if(p.test(i)){var a=l.getElementById(i);return a&&(this[this.length++]=a),this}}if("."===e[0]){var o=e.slice(1);if(p.test(o))return n(l.getElementsByClassName(o),this)}if("<"===e[0]&&">"===e[e.length-1]){var r=l.createElement("div");return r.innerHTML=e,n(r.childNodes,this)}return n(l.querySelectorAll(e),this)}return e instanceof Node||e===t?(this[this.length++]=e,this):e instanceof NodeList||c.isArray(e)?n(e,this):"function"==typeof e?c().ready(e):void 0}function n(t,e){return t?(i(t,function(t){e[e.length++]=t}),e):e}function i(t,e){for(var n=0,i=t.length;i>n;n++)e(t[n])}function a(t,e){if(void 0===e)return c(t);var n=[];return i(t,function(t){m(t,e)&&n.push(t)}),c(n)}function o(t,e,n,a){i(e.split(v),function(e){void 0===a?t.addEventListener(e,n,!1):t.addEventListener(e,function(e){var i=c(e.target).closest(a,t)[0];i&&n.call(i,e)},!1)})}function r(t,e,n){i(e.split(v),function(e){t.removeEventListener(e,n,!1)})}function s(t,e){var n=l.createEvent("Events");if(n.initEvent(t,!0,!0),e)for(var i in e)void 0===n[i]&&(n[i]=e[i]);return n}var c=function(t){return new e(t)},l=t.document,u={}.toString,f=[],d=f.slice,h=f.indexOf,p=/^[\w-]*$/,v=/\s+/g,g=function(){var t={};return function(e){return t[e]||(t[e]=new RegExp("(^|\\s)"+e+"(\\s|$)"))}}(),m=function(){var t=l.body;return t.matchesSelector?function(t,e){return t.matchesSelector(e)}:t.webkitMatchesSelector?function(t,e){return t.webkitMatchesSelector(e)}:t.msMatchesSelector?function(t,e){return t.msMatchesSelector(e)}:t.mozMatchesSelector?function(t,e){return t.mozMatchesSelector(e)}:void 0}();return i(["Object","Array","Function"],function(t){c["is"+t]=function(e){return u.call(e)==="[object "+t+"]"}}),c.extend=function(t){if(void 0===t)return this;if(1===arguments.length){for(var e in t)this[e]=t[e];return this}return i(d.call(arguments,1),function(e){for(var n in e)t[n]=e[n]}),t},c.fn=e.prototype={constructor:e,forEach:function(t){for(var e=0,n=this.length;n>e;e++)t(this[e],e);return this},each:function(t){return this.forEach(function(e,n){t.call(e,n)})},ready:function(t){var e=l.readyState;return"complete"===e||"loaded"===e||"interactive"===e?t():l.addEventListener("DOMContentLoaded",t,!1),this},filter:function(t){return a(this,t)},siblings:function(t){var e=[];return this.forEach(function(t){var n=t.parentNode;n&&i(n.children,function(n){n!==t&&-1===e.indexOf(n)&&e.push(n)})}),a(e,t)},not:function(t){var e=[];return this.forEach(function(n){!m(n,t)&&e.push(n)}),c(e)},find:function(t){var e=[];return this.forEach(function(n){i(n.querySelectorAll(t),function(t){-1===e.indexOf(t)&&e.push(t)})}),c(e)},eq:function(t){return c(this[t])},children:function(t){var e=[];return this.forEach(function(t){i(t.children,function(t){e.push(t)})}),a(e,t)},parent:function(t){var e=[];return this.forEach(function(t){var n=t.parentNode;n&&n!==l&&-1===e.indexOf(n)&&e.push(n)}),a(e,t)},parents:function(t){var e=[];return this.forEach(function(t){for(var n=t.parentNode;n;)n!==l&&-1===e.indexOf(n)&&e.push(n),n=n.parentNode}),a(e,t)},closest:function(t,e){for(var n=this[0];n&&!m(n,t);){var i=n.parentNode;n=i===l?null:n!==e&&i}return c(n)},index:function(t){return t instanceof e&&(t=t[0]),t?h.call(this,t):h.call(this[0].parentNode.children,this[0])},html:function(t){return void 0===t?this[0].innerHTML:this.forEach(function(e){e.innerHTML=t})},text:function(t){return void 0===t?this[0].textContent:this.forEach(function(e){e.textContent=t})},empty:function(){return this.html("")},val:function(t){return void 0===t?this[0].value:this.forEach(function(e){e.value=t})},attr:function(t,e){return"string"==typeof t&&void 0===e?this[0].getAttribute(t):this.forEach(function(n){if(c.isObject(t))for(var i in t)n.setAttribute(i,t[i]);else n.setAttribute(t,e)})},removeAttr:function(t){return this.forEach(function(e){i(t.split(v),function(t){e.removeAttribute(t)})})},css:function(e,n){if("string"==typeof e&&void 0===n){var i=t.getComputedStyle(this[0]);return i[e]}return this.forEach(function(t){var i=t.style;if(c.isObject(e))for(var a in e)i[a]=e[a];else i[e]=n})},show:function(){return this.forEach(function(t){var e=t.getAttribute("data-display")||"block";"none"===e&&(e="block"),t.style.display=e,t.removeAttribute("data-display")})},hide:function(){return this.forEach(function(t){t.setAttribute("data-display",c(t).css("display")),t.style.display="none"})},fadeIn:function(){return this.forEach(function(t){c(t).removeClass("fade-out").addClass("fade-in")})},fadeOut:function(){return this.forEach(function(t){c(t).removeClass("fade-in").addClass("fade-out")})},append:function(t,n){var i=t instanceof e?t:c(t);return this.forEach(function(t){i.forEach(function(e){n?t.insertBefore(e,t.firstChild):t.appendChild(e)})})},prepend:function(t){return this.append(t,!0)},appendTo:function(t){var n=t instanceof e?t:c(t);n.append(this)},prependTo:function(t){var n=t instanceof e?t:c(t);n.append(this,!0)},offset:function(){var e=this[0];return e===t?{left:0,top:0,right:0,bottom:0,width:t.innerWidth,height:t.innerHeight}:e.getBoundingClientRect()},width:function(){var e=this[0];return e===t?t.innerWidth:e.offsetWidth},height:function(){var e=this[0];return e===t?t.innerHeight:e.offsetHeight},is:function(t){var e=this[0];return t&&m(e,t)},addClass:function(t){return this.forEach(function(e){var n=e.className,a=[];i(t.split(v),function(t){!c(e).hasClass(t)&&a.push(t)}),a.length>0&&(e.className+=(n?" ":"")+a.join(" "))})},removeClass:function(t){return this.forEach(function(e){if(void 0===t)return void(e.className="");var n=e.className;i(t.split(v),function(t){n=n.replace(g(t)," ")}),e.className=n.trim()})},hasClass:function(t){return g(t).test(this[0].className)}},c.fn.extend=function(t){c.extend.call(this,t)},c.fn.extend({bind:function(t,e){return this.forEach(function(n){o(n,t,e)})},unbind:function(t,e){return this.forEach(function(n){r(n,t,e)})},delegate:function(t,e,n){return this.forEach(function(i){o(i,t,n,e)})},on:function(t,e,n){return"function"==typeof e?this.bind(t,e):this.delegate(t,e,n)},off:function(t,e){return this.unbind(t,e)},trigger:function(t,e){return t=s(t,e),this.forEach(function(e){e.dispatchEvent(t)})}}),i(["click","touchstart","touchmove","touchend","submit","load","resize","change","select"],function(t){c.fn[t]=function(e){return e?this.bind(t,e):this.trigger(t)}}),c.jsonp=function(){var t=l.getElementsByTagName("head")[0];return function(e,n){var i=/(\.js)$/.test(e),a=l.createElement("script");a.type="text/javascript",a.onload=function(){"function"==typeof n&&n(),!i&&t.removeChild(a)},a.src=e,t.appendChild(a)}}(),c.ajax=function(){function t(t){var e=[];for(var n in t)e.push(n+"="+t[n]);return e.join("&")}var e={method:"get",async:!0};return function(n){n=c.extend({},e,n);var i=new XMLHttpRequest;i.open(n.method,n.url,n.async);var a=n.header;if(a)for(var o in a)i.setRequestHeader(o,a[o]);i.onreadystatechange=function(){if(4===i.readyState&&200===i.status){var t=n.callback;"function"==typeof t&&t(i.responseText)}},i.send(t(n.data))}}(),c}();return"function"==typeof define?void define(function(){return e}):"object"==typeof exports?void(module.exports=e):void(t.jq=t.$=e)}(this),function(t,e){var n=t.document,i=e(n),a=e(n.body);e.isShowQrcode=!0,e.isMobi=/(iPhone|iPod|iPad|android|windows phone os|iemobile)/i.test(t.navigator.userAgent),e.toggleMask=function(){var t=e("#mask");return 0===t.length&&(t=e('<div id="mask"><i class="spinner"></i></div>'),a.append(t)),function(e){e?t.addClass("visible"):t.removeClass("visible")}}(),e(function(){a.addClass("loaded"),i.on("touchstart","a",function(){e(this).addClass("focus")}),i.on("touchend","a",function(){e(this).removeClass("focus")}),e.isShowQrcode&&!e.isMobi&&e.jsonp("http://img.gd.sohu.com/js/qrcode.js",function(){var t=e("#qrcode");0===t.length&&(t=e('<div id="qrcode"></div>'),a.append(t),new QRCode(t[0],{width:t.width(),height:t.height(),text:location.href})),i.on("click","#qrcode",function(){t.fadeOut()})})})}(this,$),function(t,e){function n(t){var n=e.panelUnloaded;"function"==typeof n&&n(t)}var i=t.document,a=e(i),o=e(i.body);e.indexSelector="#panel1";var r=function(){var t={};return function(n){var i=e.panelLoaded,a=n[0].id;"function"==typeof i&&i(n,!t[a]),t[a]=!0}}();e.toggleSidebox=function(){var t=e("#sidebox");return function(i){var a=e.history[e.history.length-1];i?(o.addClass("onsidebox"),r(t),n(a)):(o.removeClass("onsidebox"),n(t),r(a))}}();var s=e("#mainbox");e.toggleHeader=function(t){t?s.removeClass("offheader"):s.addClass("offheader")},e.toggleNavbar=function(t){t?s.removeClass("offnavbar"):s.addClass("offnavbar")},e.setTitle=function(){var t=e(".roottitle .title");return function(e){e&&t.html(e)}}(),e.setSubtitle=function(){var t=e(".subtitle .title");return function(e){e&&t.html(e)}}(),e.loadPanel=function(){var t=e("#navbar a"),a=i.querySelector(".navbox"),c=e(e.indexSelector),l=1e3*parseFloat(c.css("transition-duration")||c.css("-webkit-transition-duration")),u=e.history=[],f=e("#header"),d="hidden"!==s.css("overflow"),h=function(){var t={},e=i.body;return function(n,i){i?t[n]=e.scrollTop:e.scrollTop=t[n]||0}}();return function(i){var s,c;if(i?(s=e(i),s.length>0&&(c=u[u.length-1],u.push(s))):(c=u.pop(),s=u[u.length-1],i="#"+s.attr("id")),s.length>0){if(t.length>0&&t.each(function(){for(var n=(this.getAttribute("data-hash")||this.hash).split("|"),o=0,r=n.length;r>o;o++)n[o]===i&&(t.removeClass("selected"),e(this).addClass("selected"),a.center(this))}),!c)return s.addClass("show opened"),e.setTitle(s.attr("title")),void r(s);if("#"+c.attr("id")!==i){var p=s.attr("data-role"),v=c.attr("data-role");d&&h(c.attr("id"),!0),s.addClass("show"),setTimeout(function(){"root"===p?(e.setTitle(s.attr("title")),e.toggleNavbar(!0),f.removeClass("onsubtitle"),"root"===v?(s.addClass("notrans"),c.addClass("notrans")):(s.removeClass("notrans"),c.removeClass("notrans")),s.removeClass("subopened").addClass("opened"),c.removeClass("opened")):(e.setSubtitle(s.attr("title")),e.toggleNavbar(!1),f.addClass("onsubtitle"),o.removeClass("notrans").addClass("reflow"),c.removeClass("notrans"),s.hasClass("subopened")?(s.removeClass("subopened").addClass("opened"),c.removeClass("opened")):(s.addClass("opened"),c.addClass("subopened").removeClass("opened"))),d&&h(s.attr("id"),!1),r(s)},10),setTimeout(function(){c.removeClass("show"),o.removeClass("reflow"),"paneliframe"===c.attr("id")&&c.html(""),n(c)},l+100)}}else console.log(i+"面板未找到")}}(),e(function(){a.on("click",".btn-onsidebox",function(){e.toggleSidebox(!0)}),a.on("click",".btn-offsidebox",function(){e.toggleSidebox(!1)});var t=e("#paneliframe");a.on("click","a",function(n){var i=this.hash;if(i)return n.preventDefault(),void e.loadPanel(i);var a=this.getAttribute("data-href"),o=this.getAttribute("data-title");a&&(n.preventDefault(),t.html('<iframe example="'+a+'"></iframe>'),e.setSubtitle(o||"详情"),e.loadPanel("#paneliframe"))}),a.on("click","#btn-goback",function(){e.loadPanel()});var n=e(".navbox");n.length>0&&n.scroll(),e.loadPanel(e.indexSelector);var i=location.hash;i&&setTimeout(function(){e.loadPanel(i)},400)})}(this,$),function(t,e){e.fn.carousel=function(n){return e.fn.carousel.defaults={isVertical:!1,swipThreshold:50,isAutoPlay:!0,autoPlayInter:8e3,slideCallback:null,isShowTitle:!0,isShowPager:!0},this.each(function(){function i(){C.addClass("pi-carousel").html('<div class="pi-carousel-wrap">'+C.html()+"</div>"+(m?'<div class="pi-carousel-title"></div>':"")),o=C.find(".pi-carousel-wrap"),r=o[0].style,s=o.children("*"),c=s.length,d&&C.addClass("vertical"),l=C.find(".pi-carousel-title");var t="";if(b){t+='<div class="pi-carousel-pager">';for(var e=0,n=c;n>e;e++)t+="<span></span>";t+="</div>"}u=C.append(t).find(".pi-carousel-pager span"),a()}function a(){function e(){a=C.width(),f=C.height(),s.css({width:a+"px",height:f+"px"}),d?(r.width=a+"px",r.height=f*c+"px"):(r.width=a*c+"px",r.height=f+"px")}function n(){p&&(m=setInterval(function(){++k===c&&(k=0),i()},v))}function i(t){var e,n=-k*(d?f:a);if("number"==typeof t)0===k&&t>0&&(t/=2),k===c-1&&0>t&&(t/=2),n+=t;else{"function"==typeof g&&g(k);var i=s.removeClass("current").eq(k).addClass("current").attr("data-title");l.removeClass("visible"),i&&setTimeout(function(){l.addClass("visible").html(i)},200),u.removeClass("selected").eq(k).addClass("selected")}e="translate3d("+(d?"0,"+n+"px,0":n+"px,0,0")+")",o.css({"-webkit-transform":e,transform:e})}var a,f,m,b,y,w,k=0;e(),x.slideToIndex=function(t){k=t,i()},C.on("touchstart",function(t){var e=t.targetTouches[0];b=e.pageX,y=e.pageY,w=0,o.removeClass("transform"),p&&clearInterval(m)}),C.on("touchmove",function(t){var e=t.targetTouches[0],n=e.pageX-b,a=e.pageY-y;d?Math.abs(a)>Math.abs(n)&&(t.preventDefault(),t.stopPropagation(),i(w=a)):Math.abs(n)>Math.abs(a)&&(t.preventDefault(),t.stopPropagation(),i(w=n))}),C.on("touchend",function(t){w>h&&--k<0&&(k=0),-h>w&&++k===c&&(k=c-1),o.addClass("transform"),0!==w&&i(),n()}).trigger("touchend"),t.addEventListener("resize",function(){var t=C.width();t>0&&(e(),i(0))},!1)}var o,r,s,c,l,u,f=e.extend({},e.fn.carousel.defaults,n),d=f.isVertical,h=f.swipThreshold,p=f.isAutoPlay,v=f.autoPlayInter,g=f.slideCallback,m=f.isShowTitle,b=f.isShowPager,C=e(this),x=this;i()})}}(this,$),function(t,e){var n,i,a,o,r,s,c,l,u=t.document,f=e(u),d=e("#customalert");!function(){0===d.length&&(d=e('<div id="customalert"><div class="box"><h1 id="customalert-title">提示</h1><p id="customalert-content">是否转到登陆</p><a id="customalert-btnok" class="btn">确定</a><a id="customalert-btncancel" class="btn">关闭</a></div></div>'),e(u.body).append(d)),n=e("#customalert-title"),i=e("#customalert-content"),a=e("#customalert-btnok"),o=e("#customalert-btncancel")}(),f.on("click","#customalert-btnok",function(){d.removeClass("visible"),"function"==typeof l&&l(),"function"==typeof r&&r()}),f.on("click","#customalert-btncancel",function(){d.removeClass("visible"),"function"==typeof l&&l(),"function"==typeof s&&s()}),e.customalert=function(t){t=t||{};var u=e.extend({},e.customalert.defaults,t),f=u.title,h=u.content,p=u.btnOkText,v=u.btnCancelText,g=u.isAlert;r=u.btnOkClick,s=u.btnCancelClick,c=u.onShow,l=u.onHide,g?d.addClass("alert"):d.removeClass("alert"),f&&n.html(f),h&&i.html(h),p&&a.text(p),v&&o.text(v),d.addClass("visible"),"function"==typeof c&&c()},e.customalert.defaults={title:"提示",content:"内容",btnOkText:"确定",btnOkClick:null,btnCancelText:"取消",btnCancelClick:null,isAlert:!0,onShow:null,onHide:null}}(this,$),function(t,e){e.fn.flip=function(t){return e.fn.flip.defaults={isVertical:!1,swipThreshold:40,rate:1.3,slideCallback:null},this.each(function(){function n(){l.addClass("pi-flip"),u.eq(0).addClass("visible"),"function"==typeof c&&c(0),i()}function i(){function t(t){t.style.cssText=""}function n(n){var i;"number"==typeof n?u.each(function(t){var a=e(this);t===p?(i=o?"rotate3d(1,0,0,"+-n+"deg)":"rotate3d(0,1,0,"+n+"deg)",a.css({"-webkit-transform":i,transform:i})):(i=o?"rotate3d(1,0,0,"+(180-n)+"deg)":"rotate3d(0,1,0,"+-(180-n)+"deg)",a.css({"-webkit-transform":i,transform:i}))}):(d=!0,e.isFunction(c)&&c(p),u.each(function(t){var a=e(this);t===p?(i=o?"rotate3d(1,0,0,"+-(n?0:-360)+"deg)":"rotate3d(0,1,0,"+(n?0:-360)+"deg)",a.addClass("visible").css({"-webkit-transform":i,transform:i})):(i=o?"rotate3d(1,0,0,"+-(n?180:-180)+"deg)":"rotate3d(0,1,0,"+(n?180:-180)+"deg)",a.removeClass("visible").css({"-webkit-transform":i,transform:i}))}),setTimeout(function(){u.addClass("notrans").each(function(){t(this)}),d=!1},v))}var i,a,f,d,h=u.length,p=0,v=1e3*parseFloat(u.css("transition-duration")||u.css("-webkit-transition-duration"));l.on("touchstart",function(t){if(!d){var e=t.targetTouches[0];i=e.pageX,a=e.pageY,f=0,u.addClass("notrans")}}),l.on("touchmove",function(t){var e=t.targetTouches[0],r=e.pageX-i,c=e.pageY-a;o&&Math.abs(r)<Math.abs(c)&&(t.preventDefault(),t.stopPropagation(),!d&&n(f=c/s)),!o&&Math.abs(r)>Math.abs(c)&&(t.preventDefault(),t.stopPropagation(),!d&&n(f=r/s))}),l.on("touchend",function(e){d||(Math.abs(f)>r?(f>0&&-1===--p&&(p=h-1),0>f&&++p===h&&(p=0),u.removeClass("notrans"),n(f>0)):0!==f&&(u.eq(p).removeClass("notrans"),t(u[p])))})}var a=e.extend({},e.fn.flip.defaults,t),o=a.isVertical,r=a.swipThreshold,s=a.rate,c=a.slideCallback,l=e(this),u=l.children("*");n()})}}(this,$),function(t,e){e.fn.picpager=function(n){return e.fn.picpager.defaults={imgData:null,imgAttrName:null,swipThreshold:40,slideCallback:null},this.each(function(){function i(){f.addClass("pi-picpager").html('<div class="pi-picpager-wrap"><div class="pi-picpager-pic"></div><div class="pi-picpager-pic"></div><div class="pi-picpager-pic"></div></div>'),o=f.find(".pi-picpager-pic"),a()}function a(){function n(t){switch(o.removeClass("notrans"),t){case 1:case-1:v=!0;var n="translate3d("+(1===t?"":"-")+g+"px,0,0)";o.css({"-webkit-transform":n,transform:n}),setTimeout(function(){o.each(function(t){i(e(this).addClass("notrans").css({"-webkit-transform":"translate3d(0,0,0)",transform:"translate3d(0,0,0)"}),m+t-1)}),v=!1},b+100);break;default:o.css({"-webkit-transform":"translate3d(0,0,0)",transform:"translate3d(0,0,0)"})}"function"==typeof u&&u(m,t)}function i(t,e){var n=s[e];t.css({"background-image":n?"url("+(c?n[c]:n)+")":"none"})}var a,r,p,v,g=f.width(),m=0,b=1e3*parseFloat(o.css("transition-duration")||o.css("-webkit-transition-duration"));o.each(function(t){i(e(this),t-1)}),d.slideToIndex=function(t){var e;"number"!=typeof t||0>t||t>=h||t===m||(t>m?(e=-1,i(o.eq(2),t)):(e=1,i(o.eq(0),t)),m=t,n(e))},d.addItem=function(t){e.isArray(t)?s=s.concat(t):s.push(t),h=s.length},f.on("touchstart",function(t){if(!v){var e=t.targetTouches[0];a=e.pageX,r=e.pageY,p=0,o.addClass("notrans")}}),f.on("touchmove",function(t){if(v)t.preventDefault(),t.stopPropagation();else{var e=t.targetTouches[0],n=e.pageX-a,i=e.pageY-r;if(Math.abs(n)>Math.abs(i)){t.preventDefault(),t.stopPropagation(),0===m&&n>0&&(n/=2),m===h-1&&0>n&&(n/=2);var s="translate3d("+(p=n)+"px,0,0)";o.css({"-webkit-transform":s,transform:s})}}}),f.on("touchend",function(t){if(!v){var e;p>l&&(--m<0?m=0:e=1),-l>p&&(++m===h?m=h-1:e=-1),0!==p&&n(e)}}).trigger("touchend"),t.addEventListener("resize",function(){var t=f.width();t>0&&(g=t)},!1)}var o,r=e.extend({},e.fn.picpager.defaults,n),s=r.imgData,c=r.imgAttrName,l=r.swipThreshold,u=r.slideCallback,f=e(this),d=this,h=s.length;i()})}}(this,$),function(t,e){e.fn.scratchcard=function(t){return e.fn.scratchcard.deflunt={fineness:15,paintStyle:"#ccc",text:"",fontColor:"#f00",font:"bold 60px sans-serif",imgSrc:"",scale:2},this.each(function(){function n(){var t='<canvas style="width: 100%; height: 100%;" width="'+C+'" height="'+x+'"></canvas>';b.css({position:"relative","background-image":"url("+g+")","background-size":"100% auto"}).html(t),r=b.find("canvas"),r.css({position:"absolute",top:0,left:0}),l=b.children("canvas")[0].getContext("2d"),i(),a()}function i(){if(l.fillStyle=d,l.fillRect(0,0,C,x),h){l.fillStyle=p,v&&(l.font=v);var t=l.measureText(h).width;l.fillText(h,u.left||(C-t)/2,u.top||x/2+20,C)}}function a(){r.on("touchstart",function(t){var e=b.offset();s=e.left,c=e.top,l.fillStyle="#fff",l.globalCompositeOperation="destination-out",l.beginPath(),o(t)}),r.on("touchmove",function(t){t.preventDefault(),t.stopPropagation(),o(t)}),r.on("touchend",function(t){l.globalCompositeOperation="source-over"})}function o(t){var e=t.targetTouches[0];l.arc((e.pageX-s)*m,(e.pageY-c)*m,f*m,0,2*Math.PI,!0),l.closePath(),l.fill()}var r,s,c,l,u=e.extend({},e.fn.scratchcard.deflunt,t),f=u.fineness,d=u.paintStyle,h=u.text,p=u.fontColor,v=u.font,g=u.imgSrc,m=u.scale,b=e(this),C=b.width()*m,x=b.height()*m;n()})}}(this,$),function(t,e){e.fn.scroll=function(n){return e.fn.scroll.defaults={isVertical:!1,rate:400,timeSpanThreshold:300,maxScroll:400,androidRate:2,isAdjust:!1},this.each(function(){function i(){h.addClass("pi-scroll-item"),a()}function a(){function e(){var t=r?h.height()+parseFloat(h.css("margin-top"))+parseFloat(h.css("margin-bottom")):h.width()+parseFloat(h.css("margin-left"))+parseFloat(h.css("margin-right")),e=r?d.height()-parseFloat(d.css("padding-top"))-parseFloat(d.css("padding-bottom")):d.width()-parseFloat(d.css("padding-left"))-parseFloat(d.css("padding-right"));C=t-e}function n(t){t>0&&(t/=2),-t>C&&(t+=(-t-C)/2);var e="translate3d("+(r?"0,"+(x=t)+"px,0":(x=t)+"px,0,0")+")";h.css({"-webkit-transform":e,transform:e})}function i(t){var e=r?t.offsetTop-h[0].offsetTop-(d.height()-t.clientHeight)/2:t.offsetLeft-h[0].offsetLeft-(d.width()-t.clientWidth)/2;n(0>e?0:C>e?-e:-C)}var a,o,v,g,m,b,C,x=0;e(),d[0].center=i,d.on("touchstart",function(t){var e=t.targetTouches[0];v=t.timeStamp,a=e.pageX,o=e.pageY,m=0,b=x,h.addClass("notrans")}),d.on("touchmove",function(t){var e=t.targetTouches[0],i=e.pageX-a,s=e.pageY-o;r&&Math.abs(i)<Math.abs(s)&&(t.preventDefault(),t.stopPropagation(),n(b+(m=s))),!r&&Math.abs(i)>Math.abs(s)&&(t.preventDefault(),t.stopPropagation(),n(b+(m=i)))}),d.on("touchend",function(t){g=t.timeStamp;var e=g-v,i=e>c?0:m/(p?e/=u:e),a=Math.abs(i)*s;a>l&&(a=l),h.removeClass("notrans"),0>m?n(C>-(x-a)?x-a:-C):m>0&&n(0>x+a?x+a:0)}),f&&d.on("click",function(t){i(t.target)}),t.addEventListener("resize",function(){var t=d.width();t>0&&e()},!1)}var o=e.extend({},e.fn.scroll.defaults,n),r=o.isVertical,s=o.rate,c=o.timeSpanThreshold,l=o.maxScroll,u=o.androidRate,f=o.isAdjust,d=e(this),h=d.children("*"),p=/(android)/i.test(t.navigator.userAgent);i()})}}(this,$),function(t,e){e.fn.swatchbook=function(t){return e.fn.swatchbook.defaults={centerIdx:6,angleInc:8,proximity:45,neighbor:4,initIsClosed:!1,closeIdx:-1,openAt:-1,selectCallback:null,openDelay:25},this.each(function(){function n(){e.isAndroid2&&C.css({"-webkit-backface-visibility":"visible","backface-visibility":"visible"}),p?c=!0:i(u),g>=0&&y>g&&a(x.eq(g)),s()}function i(t){x.each(function(n){var i=e(this),a="rotateZ("+f*(n-t)+"deg)";setTimeout(function(){i.css({"-webkit-transform":a,transform:a})},n*b)})}function a(t){var e=t.index();e!==w?(x.removeClass("selected"),-1!==v&&e===v?(w=-1,o()):(w=e,t.css({"-webkit-transform":"rotateZ(0deg)",transform:"rotateZ(0deg)"}).addClass("selected"),r(t,e))):e===w&&"function"==typeof m&&m(e)}function o(){c?i(u):x.css({"-webkit-transform":"rotateZ(0deg)",transform:"rotateZ(0deg)"}),c=!c}function r(t,n){var i,a=k[n];a?i=a:(i=t.siblings(),k[n]=i),i.each(function(t){var i=n>t?f*(t-n):t-n===1?d:d+(t-n-1)*h,a="rotateZ("+i+"deg)";e(this).css({"-webkit-transform":a,transform:a})})}function s(){x.on("click",function(){a(e(this))})}var c,l=e.extend({},e.fn.swatchbook.defaults,t),u=l.centerIdx,f=l.angleInc,d=l.proximity,h=l.neighbor,p=l.initIsClosed,v=l.closeIdx,g=l.openAt,m=l.selectCallback,b=l.openDelay,C=e(this),x=C.addClass("sb-container").children("*"),y=x.length,w=-1,k=[];n()})}}(this,$),function(t,e){e.fn.turntable=function(t){return e.fn.turntable.defaults={count:12,rotateDeg:3600,duration:7e3,timeFx:"cubic-bezier(0.42,0,0.25,1)",offset:0},this.each(function(){function n(){a=e('<div class="pi-turntable-pointer"></div>'),f.addClass("pi-turntable").prepend(a),i()}function i(){var t,e;d.turnToIndex=function(n,i){if(!(n>r||e)){var o=c/1e3+"s "+l,f=s+n/r*360+u+"deg",d="rotateZ("+f+")";a[0].style.cssText="",e=!0,setTimeout(function(){a.css({"-webkit-transition":"-webkit-transform "+o,transition:"transform "+o,"-webkit-transform":d,transform:d}),clearTimeout(t),t=setTimeout(function(){"function"==typeof i&&i(),e=!1},c)},40)}}}var a,o=e.extend({},e.fn.turntable.defaults,t),r=o.count,s=o.rotateDeg,c=o.duration,l=o.timeFx,u=o.offset,f=e(this),d=this;n()})}}(this,$),function(t,e){var n=e(t.document),i=(t.Global={},{}),a={};t.alert=function(t){e.customalert({content:t})},e.panelLoaded=function(t,n){var a=i[t.attr("id")];e.isFunction(a)&&a(t,n)},e.panelUnloaded=function(t){var n=a[t.attr("id")];e.isFunction(n)&&n(t)},i.panelcarousel=function(){return function(t,n){n&&e(".carousel").each(function(){for(var t=this.getAttribute("data-len"),n=this.getAttribute("data-part"),i="",a=0;t>a;a++)i+='<a style="background: url(images/'+(n?n+"/":"")+a+'.jpg) center center no-repeat; background-size: cover;" data-title="焦点图示例 '+(a+1)+'"></a>';e(this).html(i).carousel({isVertical:"1"===this.getAttribute("data-isvertical")})})}}(),i.panelflip=function(){return function(t,n){n&&e(".flip").each(function(){for(var t=this.getAttribute("data-len"),n=this.getAttribute("data-part"),i="",a=0;t>a;a++)i+='<a><p style="background: url(images/'+(n?n+"/":"")+a+'.jpg) center center no-repeat; background-size: cover;" data-title="焦点图示例 '+(a+1)+'"></p></a>';e(this).html(i).flip({isVertical:"1"===this.getAttribute("data-isvertical")})})}}(),i.panelpicpager=function(){return function(t,n){n&&e.jsonp("http://img.gd.sohu.com/js/jtool.js",function(){var t=1,n=10,i=jtool.proxy;i.pushData({url:"http://app.gd.sohu.com/minisite/xtep/20140530/get.php?act=list&page="+t+"&perpage="+n+"&order=0&code=aa1c9153608a7755b7c20e97c0eade27",success:function(a){var o=e(".picpager").picpager({imgData:a.data.detail,imgAttrName:"image",slideCallback:function(e){e+1===10*t&&(t++,i.pushData({url:"http://app.gd.sohu.com/minisite/xtep/20140530/get.php?act=list&page="+t+"&perpage="+n+"&order=0&code=aa1c9153608a7755b7c20e97c0eade27",success:function(t){o[0].addItem(t.data.detail)}}))}})}})})}}(),i.panelscroll=function(){return function(t,n){n&&e(".scroll").each(function(){e(this).scroll({isVertical:"1"===this.getAttribute("data-isvertical")})})}}(),i.panelswatchbook=function(){return function(t,n){n&&e(".swatchbook").each(function(){e(this).swatchbook({angleInc:25,neighbor:15,proximity:80,initIsClosed:!0,closeIdx:12,selectCallback:function(t){console.log(t)}})})}}(),i.panelscratchcard=function(){return function(t,n){n&&e(".scratchcard").each(function(){e(this).scratchcard({text:"刮开有奖",imgSrc:"images/3.jpg"})})}}(),i.panelturntable=function(){return function(t,i){if(i){var a=e("#turntable").turntable({count:10})[0];n.on("click","#turntable_start",function(){var t=parseInt(10*Math.random());a.turnToIndex(t,function(){alert(t+1)})})}}}()}(this,$);