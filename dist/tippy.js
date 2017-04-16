!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Tippy=t()}(this,function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var t=("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self,function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e,t){!function(t,i){e.exports=function(){function e(e,t){if(1!==e.nodeType)return[];var i=window.getComputedStyle(e,null);return t?i[t]:i}function t(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function i(n){if(!n||["HTML","BODY","#document"].indexOf(n.nodeName)!==-1)return window.document.body;var o=e(n),r=o.overflow,s=o.overflowX,a=o.overflowY;return/(auto|scroll)/.test(r+a+s)?n:i(t(n))}function n(e){return"HTML"===e.nodeName||e.firstElementChild.offsetParent===e}function o(e){return null!==e.parentNode?o(e.parentNode):e}function r(e){var t=e&&e.offsetParent,i=t&&t.nodeName;return i&&"BODY"!==i&&"HTML"!==i?t:window.document.documentElement}function s(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return window.document.documentElement;var i=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,a=i?e:t,l=i?t:e,p=document.createRange();p.setStart(a,0),p.setEnd(l,0);var f=p.commonAncestorContainer;if(e!==f&&t!==f)return n(f)?f:r(f);var u=o(e);return u.host?s(u.host,t):s(e,o(t).host)}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",i="top"===t?"scrollTop":"scrollLeft",n=e.nodeName;if("BODY"===n||"HTML"===n){var o=window.document.documentElement;return(window.document.scrollingElement||o)[i]}return e[i]}function l(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=a(t,"top"),o=a(t,"left"),r=i?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=o*r,e.right+=o*r,e}function p(e,t){var i="x"===t?"Left":"Top",n="Left"===i?"Right":"Bottom";return Number(e["border"+i+"Width"].split("px")[0])+Number(e["border"+n+"Width"].split("px")[0])}function f(){var e=window.document.body,t=window.document.documentElement;return{height:Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight),width:Math.max(e.scrollWidth,e.offsetWidth,t.clientWidth,t.scrollWidth,t.offsetWidth)}}function u(e){return Z({},e,{right:e.left+e.width,bottom:e.top+e.height})}function d(t){var i=navigator.appVersion.indexOf("MSIE 10")!==-1,n={};if(i){try{n=t.getBoundingClientRect()}catch(e){}var o=a(t,"top"),r=a(t,"left");n.top+=o,n.left+=r}else n=t.getBoundingClientRect();var s={left:n.left,top:n.top,width:n.right-n.left,height:n.bottom-n.top},l=void 0,d=void 0;if("HTML"===t.nodeName){var c=f();l=c.width,d=c.height}else l=t.clientWidth||s.right-s.left,d=t.clientHeight||s.bottom-s.top;var h=t.offsetWidth-l,m=t.offsetHeight-d;if(h||m){var v=e(t);h-=p(v,"x"),m-=p(v,"y"),s.width-=h,s.height-=m}return u(s)}function c(t,n){var o=navigator.appVersion.indexOf("MSIE 10")!==-1,r=d(t),s=d(n),a=i(t),p={top:r.top-s.top,left:r.left-s.left,bottom:r.top-s.top+r.height,right:r.left-s.left+r.width,width:r.width,height:r.height},f="HTML"===n.nodeName;if(f||"BODY"===n.nodeName){var u=e(n),c=o&&f?0:+u.borderTopWidth.split("px")[0],h=o&&f?0:+u.borderLeftWidth.split("px")[0],m=o&&f?0:+u.marginTop.split("px")[0],v=o&&f?0:+u.marginLeft.split("px")[0];p.top-=c-m,p.bottom-=c-m,p.left-=h-v,p.right-=h-v,p.marginTop=m,p.marginLeft=v}return n.contains(a)&&(o||"BODY"!==a.nodeName)&&(p=l(p,n)),p}function h(e){var t=window.document.documentElement,i=c(e,t),n=Math.max(t.clientWidth,window.innerWidth||0),o=Math.max(t.clientHeight,window.innerHeight||0),r=a(t),s=a(t,"left");return u({top:r-i.top+i.marginTop,left:s-i.left+i.marginLeft,width:n,height:o})}function m(i){var n=i.nodeName;return"BODY"!==n&&"HTML"!==n&&("fixed"===e(i,"position")||m(t(i)))}function v(e,n,o,r){var a={top:0,left:0},l=s(e,n);if("viewport"===r)a=h(l);else{var p=void 0;"scrollParent"===r?(p=i(t(e)),"BODY"===p.nodeName&&(p=window.document.documentElement)):p="window"===r?window.document.documentElement:r;var u=c(p,l);if("HTML"!==p.nodeName||m(l))a=u;else{var d=f(),v=d.height,g=d.width;a.top+=u.top-u.marginTop,a.bottom=v+u.top,a.left+=u.left-u.marginLeft,a.right=g+u.left}}return a.left+=o,a.top+=o,a.right-=o,a.bottom-=o,a}function g(e,t,i,n){if(e.indexOf("auto")===-1)return e;var o=v(i,n,0,"scrollParent"),r={top:t.top-o.top,right:o.right-t.right,bottom:o.bottom-t.bottom,left:t.left-o.left},s=Object.keys(r).sort(function(e,t){return r[t]-r[e]})[0],a=e.split("-")[1];return s+(a?"-"+a:"")}function b(e){var t=!1,i=0,n=document.createElement("span");return new MutationObserver(function(){e(),t=!1}).observe(n,{attributes:!0}),function(){t||(t=!0,n.setAttribute("x-index",i),i+=1)}}function y(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},oe))}}function w(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function E(e,t,i){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===i});var n=w(e,function(e){return e[t]===i});return e.indexOf(n)}function O(e){var t=void 0;if("HTML"===e.nodeName){var i=f();t={width:i.width,height:i.height,left:0,top:0}}else t={width:e.offsetWidth,height:e.offsetHeight,left:e.offsetLeft,top:e.offsetTop};return u(t)}function x(e){var t=window.getComputedStyle(e),i=parseFloat(t.marginTop)+parseFloat(t.marginBottom),n=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return{width:e.offsetWidth+n,height:e.offsetHeight+i}}function T(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function L(e,t,i,n){n=n.split("-")[0];var o=x(t),r={position:e,width:o.width,height:o.height},s=["right","left"].indexOf(n)!==-1,a=s?"top":"left",l=s?"left":"top",p=s?"height":"width",f=s?"width":"height";return r[a]=i[a]+i[p]/2-o[p]/2,r[l]=n===l?i[l]-o[f]:i[T(l)],r}function k(e,t,i){return c(i,s(t,i))}function A(e){for(var t=[!1,"ms","webkit","moz","o"],i=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var o=t[n],r=o?""+o+i:e;if(void 0!==window.document.body.style[r])return r}return null}function M(e,o){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"top",s=i(e),l=0,p=m(o);return n("BODY"===s.nodeName?window.document.documentElement:s)&&(o.contains(s)&&p||!p)&&(l=a(s,r)),o===s||["BODY","HTML"].indexOf(s.nodeName)===-1?l+M(t(s),o,r):l}function C(e){var t={};return e&&"[object Function]"===t.toString.call(e)}function N(e,t){return e.some(function(e){var i=e.name;return e.enabled&&i===t})}function S(e,t,i){var n=w(e,function(e){return e.name===t});return!!n&&e.some(function(e){return e.name===i&&e.enabled&&e.order<n.order})}function D(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function _(e,t){return window.removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function H(e,t,i){return(void 0===i?e:e.slice(0,E(e,"name",i))).forEach(function(e){e.enabled&&C(e.function)&&(t=e.function(t,e))}),t}function P(e,t){Object.keys(t).forEach(function(i){t[i]!==!1?e.setAttribute(i,t[i]):e.removeAttribute(i)})}function I(e,t){Object.keys(t).forEach(function(i){var n="";["width","height","top","right","bottom","left"].indexOf(i)!==-1&&D(t[i])&&(n="px"),e.style[i]=t[i]+n})}function W(e,t,n,o){var r="BODY"===e.nodeName,s=r?window:e;s.addEventListener(t,n,{passive:!0}),r||W(i(s.parentNode),t,n,o),o.push(s)}function B(e,t,n,o){n.updateBound=o,window.addEventListener("resize",n.updateBound,{passive:!0});var r=i(e);return W(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function j(e,t){var i={position:e.offsets.popper.position},n={"x-placement":e.placement},o=Math.round(e.offsets.popper.left),r=Math.round(e.offsets.popper.top),s=A("transform");return t.gpuAcceleration&&s?(i[s]="translate3d("+o+"px, "+r+"px, 0)",i.top=0,i.left=0,i.willChange="transform"):(i.left=o,i.top=r,i.willChange="top, left"),I(e.instance.popper,Z({},i,e.styles)),P(e.instance.popper,Z({},n,e.attributes)),e.offsets.arrow&&I(e.arrowElement,e.offsets.arrow),e}function F(e,t,i,n,o){var r=k(o,t,e);return i.placement=g(i.placement,r,t,e),t.setAttribute("x-placement",i.placement),i}function R(e,t){if(!S(e.instance.modifiers,"arrow","keepTogether"))return console.warn("WARNING: `keepTogether` modifier is required by arrow modifier in order to work, be sure to include it before `arrow`!"),e;var i=t.element;if("string"==typeof i){if(!(i=e.instance.popper.querySelector(i)))return e}else if(!e.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var n=e.placement.split("-")[0],o=u(e.offsets.popper),r=e.offsets.reference,s=["left","right"].indexOf(n)!==-1,a=s?"height":"width",l=s?"top":"left",p=s?"left":"top",f=s?"bottom":"right",d=x(i)[a];r[f]-d<o[l]&&(e.offsets.popper[l]-=o[l]-(r[f]-d)),r[l]+d>o[f]&&(e.offsets.popper[l]+=r[l]+d-o[f]);var c=r[l]+r[a]/2-d/2,h=c-u(e.offsets.popper)[l];return h=Math.max(Math.min(o[a]-d,h),0),e.arrowElement=i,e.offsets.arrow={},e.offsets.arrow[l]=h,e.offsets.arrow[p]="",e}function Y(e){return"end"===e?"start":"start"===e?"end":e}function q(e,t){if(N(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var i=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),n=e.placement.split("-")[0],o=T(n),r=e.placement.split("-")[1]||"",s=[];return s="flip"===t.behavior?[n,o]:t.behavior,s.forEach(function(a,l){if(n!==a||s.length===l+1)return e;n=e.placement.split("-")[0],o=T(n);var p=u(e.offsets.popper),f=e.offsets.reference,d=Math.floor,c="left"===n&&d(p.right)>d(f.left)||"right"===n&&d(p.left)<d(f.right)||"top"===n&&d(p.bottom)>d(f.top)||"bottom"===n&&d(p.top)<d(f.bottom),h=d(p.left)<d(i.left),m=d(p.right)>d(i.right),v=d(p.top)<d(i.top),g=d(p.bottom)>d(i.bottom),b="left"===n&&h||"right"===n&&m||"top"===n&&v||"bottom"===n&&g,y=["top","bottom"].indexOf(n)!==-1,w=!!t.flipVariations&&(y&&"start"===r&&h||y&&"end"===r&&m||!y&&"start"===r&&v||!y&&"end"===r&&g);(c||b||w)&&(e.flipped=!0,(c||b)&&(n=s[l+1]),w&&(r=Y(r)),e.placement=n+(r?"-"+r:""),e.offsets.popper=L(e.instance.state.position,e.instance.popper,e.offsets.reference,e.placement),e=H(e.instance.modifiers,e,"flip"))}),e}function U(e){var t=u(e.offsets.popper),i=e.offsets.reference,n=e.placement.split("-")[0],o=Math.floor,r=["top","bottom"].indexOf(n)!==-1,s=r?"right":"bottom",a=r?"left":"top",l=r?"width":"height";return t[s]<o(i[a])&&(e.offsets.popper[a]=o(i[a])-t[l]),t[a]>o(i[s])&&(e.offsets.popper[a]=o(i[s])),e}function z(e,t){var i=e.placement,n=e.offsets.popper,o=void 0;return D(t.offset)?o=[t.offset,0]:(o=t.offset.split(" "),o=o.map(function(t,n){var o=t.match(/(\d*\.?\d*)(.*)/),r=+o[1],s=o[2],a=i.indexOf("right")!==-1||i.indexOf("left")!==-1;1===n&&(a=!a);var l=a?"height":"width";if(0===s.indexOf("%")){var p=void 0;switch(s){case"%p":p=e.offsets.popper;break;case"%":case"$r":default:p=e.offsets.reference}return u(p)[l]/100*r}if("vh"===s||"vw"===s){return("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*r}return"px"===s?+r:+t})),e.placement.indexOf("left")!==-1?(n.top+=o[0],n.left-=o[1]||0):e.placement.indexOf("right")!==-1?(n.top+=o[0],n.left+=o[1]||0):e.placement.indexOf("top")!==-1?(n.left+=o[0],n.top-=o[1]||0):e.placement.indexOf("bottom")!==-1&&(n.left+=o[0],n.top+=o[1]||0),e}function G(e,t){var i=t.boundariesElement||r(e.instance.popper),n=v(e.instance.popper,e.instance.reference,t.padding,i);t.boundaries=n;var o=t.priority,s=u(e.offsets.popper),a={primary:function(e){var i=s[e];return s[e]<n[e]&&!t.escapeWithReference&&(i=Math.max(s[e],n[e])),Q({},e,i)},secondary:function(e){var i="right"===e?"left":"top",o=s[i];return s[e]>n[e]&&!t.escapeWithReference&&(o=Math.min(s[i],n[e]-("right"===e?s.width:s.height))),Q({},i,o)}};return o.forEach(function(e){var t=["left","top"].indexOf(e)!==-1?"primary":"secondary";s=Z({},s,a[t](e))}),e.offsets.popper=s,e}function X(e){var t=e.placement,i=t.split("-")[0],n=t.split("-")[1];if(n){var o=e.offsets.reference,r=u(e.offsets.popper),s=["bottom","top"].indexOf(i)!==-1,a=s?"left":"top",l=s?"width":"height",p={start:Q({},a,o[a]),end:Q({},a,o[a]+o[l]-r[l])};e.offsets.popper=Z({},r,p[n])}return e}function V(e){if(!S(e.instance.modifiers,"hide","preventOverflow"))return console.warn("WARNING: preventOverflow modifier is required by hide modifier in order to work, be sure to include it before hide!"),e;var t=e.offsets.reference,i=w(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<i.top||t.left>i.right||t.top>i.bottom||t.right<i.left){if(e.hide===!0)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(e.hide===!1)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}function $(e){var t=e.placement,i=t.split("-")[0],n=u(e.offsets.popper),o=u(e.offsets.reference),r=["left","right"].indexOf(i)!==-1,s=["top","left"].indexOf(i)===-1;return n[r?"left":"top"]=o[t]-(s?n[r?"width":"height"]:0),e.placement=T(t),e.offsets.popper=u(n),e}for(var J=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},K=(function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}()),Q=(function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}),Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},ee=["native code","[object MutationObserverConstructor]"],te=function(e){return ee.some(function(t){return(e||"").toString().indexOf(t)>-1})},ie="undefined"!=typeof window,ne=["Edge","Trident","Firefox"],oe=0,re=0;re<ne.length;re+=1)if(ie&&navigator.userAgent.indexOf(ne[re])>=0){oe=1;break}var se=ie&&te(window.MutationObserver),ae=se?b:y,le={computeAutoPlacement:g,debounce:ae,findIndex:E,getBordersSize:p,getBoundaries:v,getBoundingClientRect:d,getClientRect:u,getOffsetParent:r,getOffsetRect:O,getOffsetRectRelativeToArbitraryNode:c,getOuterSizes:x,getParentNode:t,getPopperOffsets:L,getReferenceOffsets:k,getScroll:a,getScrollParent:i,getStyleComputedProperty:e,getSupportedPropertyName:A,getTotalScroll:M,getWindowSizes:f,isFixed:m,isFunction:C,isModifierEnabled:N,isModifierRequired:S,isNative:te,isNumeric:D,removeEventListeners:_,runModifiers:H,setAttributes:P,setStyles:I,setupEventListeners:B},pe={shift:{order:100,enabled:!0,function:X},offset:{order:200,enabled:!0,function:z,offset:0},preventOverflow:{order:300,enabled:!0,function:G,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,function:U},arrow:{order:500,enabled:!0,function:R,element:"[x-arrow]"},flip:{order:600,enabled:!0,function:q,behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,function:$},hide:{order:800,enabled:!0,function:V},applyStyle:{order:900,enabled:!0,gpuAcceleration:!0,function:j,onLoad:F}},fe={placement:"bottom",eventsEnabled:!0,onCreate:function(){},onUpdate:function(){},modifiers:pe},ue=function(){function e(t,i){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};J(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=ae(this.update.bind(this)),this.options=Z({},e.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t.jquery?t[0]:t,this.popper=i.jquery?i[0]:i,I(this.popper,{position:"absolute"}),this.modifiers=Object.keys(e.Defaults.modifiers).map(function(t){return Z({name:t},e.Defaults.modifiers[t])}),this.modifiers=this.modifiers.map(function(e){var t=o.modifiers&&o.modifiers[e.name]||{};return Z({},e,t)}),o.modifiers&&(this.options.modifiers=Z({},e.Defaults.modifiers,o.modifiers),Object.keys(o.modifiers).forEach(function(t){if(void 0===e.Defaults.modifiers[t]){var i=o.modifiers[t];i.name=t,n.modifiers.push(i)}})),this.modifiers=this.modifiers.sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&C(e.onLoad)&&e.onLoad(n.reference,n.popper,n.options,e,n.state)}),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r}return K(e,[{key:"update",value:function(){if(!this.state.isDestroyed){var e={instance:this,styles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=k(this.state,this.popper,this.reference),e.placement=g(this.options.placement,e.offsets.reference,this.popper,this.reference),e.originalPlacement=this.options.placement,e.offsets.popper=L(this.state,this.popper,e.offsets.reference,e.placement),e=H(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}},{key:"destroy",value:function(){return this.state.isDestroyed=!0,N(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.left="",this.popper.style.position="",this.popper.style.top="",this.popper.style[A("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}},{key:"enableEventListeners",value:function(){this.state.eventsEnabled||(this.state=B(this.reference,this.options,this.state,this.scheduleUpdate))}},{key:"disableEventListeners",value:function(){this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=_(this.reference,this.state))}}]),e}();return ue.Utils=le,ue.placements=["auto","auto-start","auto-end","top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],ue.Defaults=fe,ue}()}()})),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),o=function(){function o(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e(this,o),"addEventListener"in window&&!/MSIE 9/i.test(navigator.userAgent)&&!window.operamini&&(this.defaultSettings={html:!1,position:"top",animation:"shift",animateFill:!0,arrow:!1,delay:0,trigger:"mouseenter focus",duration:400,hideDuration:400,interactive:!1,theme:"dark",offset:0,hideOnClick:!0,multiple:!1,followCursor:!1,inertia:!1,popperOptions:{}},this.settings=this._applyGlobalSettings(i),this.classNames={popper:"tippy-popper",tooltip:"tippy-tooltip",content:"tippy-tooltip-content"},this.tooltippedEls=t instanceof Element?[t]:[].slice.call(document.querySelectorAll(t)),this._createBus(),this._createTooltips(),this._handleDocumentEvents())}return n(o,[{key:"_applyGlobalSettings",value:function(e){return"function"!=typeof Object.assign&&(Object.assign=function(e,t){for(var i=Object(e),n=1;n<arguments.length;n++){var o=arguments[n];if(null!=o)for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(i[r]=o[r])}return i}),this.callbacks={wait:e.wait,beforeShown:e.beforeShown||new Function,shown:e.shown||new Function,beforeHidden:e.beforeHidden||new Function,hidden:e.hidden||new Function},Object.assign(this.defaultSettings,e)}},{key:"_createBus",value:function(){o.bus||(o.bus={refs:[],tooltippedEls:[],poppers:[]})}},{key:"_closest",value:function(e,t){if(!Element.prototype.matches)if(e.matchesSelector)Element.prototype.matches=Element.prototype.matchesSelector;else if(e.webkitMatchesSelector)Element.prototype.matches=Element.prototype.webkitMatchesSelector;else if(e.mozMatchesSelector)Element.prototype.matches=Element.prototype.mozMatchesSelector;else{if(!e.msMatchesSelector)return e;Element.prototype.matches=Element.prototype.msMatchesSelector}return Element.prototype.closest||(Element.prototype.closest=function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement}}),e.closest(t)}},{key:"_hideAllPoppers",value:function(e){var t=this;o.bus.refs.forEach(function(i){document.body.contains(i.popper)&&(e?i.popper!==e.popper&&i.settings.hideOnClick===!0&&t.hide(i.popper,i.settings.hideDuration):i.settings.hideOnClick===!0&&t.hide(i.popper,i.settings.hideDuration))})}},{key:"_handleDocumentEvents",value:function(){var e=this,t=function(t){var i=e._closest(t,"[data-tooltipped]"),n=e._closest(t,"."+e.classNames.popper),o={};return i?(o.type="tooltippedEl",o.target=i):n?(o.type="popper",o.target=n):o=null,o},i=function(e){var i=-1,n=-1,r=t(e);return r&&("tooltippedEl"===r.type?i=o.bus.tooltippedEls.indexOf(r.target):"popper"===r.type&&(n=o.bus.poppers.indexOf(r.target))),{tooltippedElIndex:i,popperIndex:n}},n=function(t){var n=i(t.target),r=n.tooltippedElIndex!==-1;if(n.popperIndex!==-1&&o.bus.refs[n.popperIndex].settings.interactive)return;if(r){var s=o.bus.refs[n.tooltippedElIndex];if(!s.settings.multiple&&(s.settings.trigger.indexOf("click")!==-1||o.touchUser))return e._hideAllPoppers(s);if(s.settings.hideOnClick!==!0||s.settings.trigger.indexOf("click")!==-1)return}e._closest(t.target,"[data-tippy-controller]")||e._hideAllPoppers()},r=function e(){o.touchUser=!0,document.body.classList.add("tippy-touch"),document.removeEventListener("touchstart",e)};o.bus.listeners||(o.bus.listeners={touchstart:r,click:n},document.addEventListener("touchstart",r),document.addEventListener("click",n))}},{key:"_createPopperInstance",value:function(e,n,o){var r=i({placement:o.position},o.popperOptions||{},{modifiers:i({},o.popperOptions?o.popperOptions.modifiers:{},{offset:i({offset:parseInt(o.offset)},o.popperOptions&&o.popperOptions.modifiers?o.popperOptions.modifiers.offset:{})})});document.body.appendChild(n);var s=new t(e,n,r);return s.disableEventListeners(),document.body.removeChild(n),s}},{key:"_createPopperElement",value:function(e,t){var i=document.createElement("div");i.setAttribute("class",this.classNames.popper),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&i.classList.add("tippy-iOS-fix");var n=document.createElement("div");if(n.setAttribute("class",this.classNames.tooltip+" "+t.theme+" leave"),n.setAttribute("data-animation",t.animation),t.arrow){var o=document.createElement("div");o.setAttribute("x-arrow",""),n.appendChild(o)}if(t.animateFill){n.setAttribute("data-animatefill","");var r=document.createElement("div");r.setAttribute("class","leave"),r.setAttribute("x-circle",""),n.appendChild(r)}t.inertia&&n.setAttribute("data-inertia","");var s=document.createElement("div");if(s.setAttribute("class",this.classNames.content),t.html){var a=void 0;t.html instanceof Element?(s.innerHTML=t.html.innerHTML,a=t.html.id||"tippy-html-template"):(s.innerHTML=document.getElementById(t.html.replace("#","")).innerHTML,a=t.html),i.classList.add("html-template"),i.setAttribute("tabindex","0"),n.setAttribute("data-template-id",a)}else s.innerHTML=e;return n.appendChild(s),i.appendChild(n),i}},{key:"_applyIndividualSettings",value:function(e){var t=e.getAttribute("data-html")||this.settings.html;t&&"false"!==t||(t=!1);var i=e.getAttribute("data-position")||this.settings.position,n=e.getAttribute("data-animation")||this.settings.animation,o=e.getAttribute("data-animatefill")||this.settings.animateFill;"false"===o&&(o=!1);var r=e.getAttribute("data-arrow")||this.settings.arrow;r&&"false"!==r?o=!1:r=!1;var s=e.getAttribute("data-trigger")||this.settings.trigger;s&&(s=s.trim().split(" "));var a=e.getAttribute("data-theme")||this.settings.theme;a&&(a+="-theme");var l=parseInt(e.getAttribute("data-delay"));l||0===l||(l=this.settings.delay);var p=parseInt(e.getAttribute("data-duration"));p||0===p||(p=this.settings.duration);var f=parseInt(e.getAttribute("data-hideduration"));f||0===f||(f=this.settings.hideDuration);var u=e.getAttribute("data-interactive")||this.settings.interactive;"false"===u&&(u=!1);var d=parseInt(e.getAttribute("data-offset"));d||0===d||(d=this.settings.offset);var c=e.getAttribute("data-hideonclick")||this.settings.hideOnClick;"false"===c&&(c=!1);var h=e.getAttribute("data-multiple")||this.settings.multiple;"false"===h&&(h=!1);var m=e.getAttribute("data-followcursor")||this.settings.followCursor;"false"===m&&(m=!1);var v=e.getAttribute("data-inertia")||this.settings.inertia;return"false"===v&&(v=!1),{html:t,position:i,animation:n,animateFill:o,arrow:r,delay:l,trigger:s,duration:p,hideDuration:f,interactive:u,theme:a,offset:d,hideOnClick:c,multiple:h,followCursor:m,inertia:v,popperOptions:this.settings.popperOptions}}},{key:"_getEventListenerMethods",value:function(e,t,i){var n=this,r=function(){if(i.delay){var e=setTimeout(function(){return n.show(t,i.duration)},i.delay);t.setAttribute("data-delay",e)}else n.show(t,i.duration)},s=function(){return n.callbacks.wait?n.callbacks.wait(r):r()},a=function(){return n.hide(t,i.hideDuration)};return{handleTrigger:function(e){if(i.interactive&&e.target.classList.add("active"),"click"===e.type&&"visible"===t.style.visibility&&"persistent"!==i.hideOnClick)return a();s()},handleMouseleave:function(o){if(i.interactive){var r=function o(r){n._closest(r.target,"."+n.classNames.popper)!==t&&n._closest(r.target,"[data-tooltipped]")!==e&&i.trigger.indexOf("click")===-1&&(document.removeEventListener("mousemove",o),e.classList.remove("active"),a())};return void document.addEventListener("mousemove",r)}a()},handleBlur:function(e){!o.touchUser&&e.relatedTarget&&(n._closest(e.relatedTarget,"."+n.classNames.popper)||a())}}}},{key:"_createTrigger",value:function(e,t,i){if("manual"!==e){var n=[];return t.addEventListener(e,i.handleTrigger),n.push({event:e,method:i.handleTrigger}),"mouseenter"===e&&(t.addEventListener("mouseleave",i.handleMouseleave),n.push({event:"mouseleave",method:i.handleMouseleave})),"focus"===e&&(t.addEventListener("blur",i.handleBlur),n.push({event:"blur",method:i.handleBlur})),n}}},{key:"_pushIntoBus",value:function(e){o.bus.refs.push(e),o.bus.tooltippedEls.push(e.tooltippedEl),o.bus.poppers.push(e.popper)}},{key:"_removeTitle",value:function(e){var t=e.getAttribute("title");e.setAttribute("data-original-title",t||"html"),e.removeAttribute("title")}},{key:"_createTooltips",value:function(){var e=this;this.tooltippedEls.forEach(function(t){t.setAttribute("data-tooltipped","");var i=e._applyIndividualSettings(t),n=t.getAttribute("title");if(n||i.html){e._removeTitle(t);var o=e._createPopperElement(n,i),r=e._createPopperInstance(t,o,i),s=e._getEventListenerMethods(t,o,i),a=[];i.trigger.forEach(function(i){a=a.concat(e._createTrigger(i,t,s))}),e._pushIntoBus({tooltippedEl:t,popper:o,settings:i,listeners:a,instance:r})}})}},{key:"_followCursor",value:function(e){var t=o.bus.refs[o.bus.tooltippedEls.indexOf(this)],i=t.popper.getAttribute("x-placement"),n=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,r=Math.round(t.popper.offsetWidth/2),s=Math.round(t.popper.offsetHeight/2),a=e.clientX-r,l=e.clientY+n-50;"left"===i?(a=e.clientX-2*r-10,l=e.clientY+n-s):"right"===i?(a=e.clientX+15,l=e.clientY+n-s):"bottom"===i&&(l=e.clientY+n+15),t.popper.style.WebkitTransform="translate3d("+a+"px, "+l+"px, 0)",t.popper.style.transform="translate3d("+a+"px, "+l+"px, 0)"}},{key:"_adjustFlip",value:function(e,t){var i=this,n=function(){i.hide(e.popper,0,!1),setTimeout(function(){return i.show(e.popper,t,!1)},0)};setTimeout(function(){e.adjusted||e.settings.position===e.popper.getAttribute("x-placement")?e.adjusted&&e.settings.position===e.popper.getAttribute("x-placement")&&(e.adjusted=!1,n()):(e.adjusted=!0,n())},0)}},{key:"getPopperElement",value:function(e){try{return o.bus.refs[o.bus.tooltippedEls.indexOf(e)].popper}catch(e){throw new Error("[Tippy error]: Element does not exist in any Tippy instances")}}},{key:"show",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.defaultSettings.duration,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if("visible"!==e.style.visibility){var r=o.bus.refs[o.bus.poppers.indexOf(e)],s=e.querySelector("."+this.classNames.tooltip),a=e.querySelector("[x-circle]");e.querySelector("[x-arrow]");if(this._adjustFlip(r,i),n&&this.callbacks.beforeShown(),document.body.appendChild(e),e.style.visibility="visible",r.settings.followCursor&&!o.touchUser?r.hasFollowCursorListener||(r.hasFollowCursorListener=!0,r.tooltippedEl.addEventListener("mousemove",this._followCursor)):r.instance.enableEventListeners(),r.instance.update(),getComputedStyle(s).opacity,s.style.WebkitTransitionDuration=i+"ms",s.style.transitionDuration=i+"ms",s.classList.add("enter"),s.classList.remove("leave"),a){var l=getComputedStyle(a);l.transform||l.WebkitTransform,l.transform,a.style.WebkitTransitionDuration=i+"ms",a.style.transitionDuration=i+"ms",a.classList.add("enter"),a.classList.remove("leave")}var p=function(){"hidden"!==e.style.visibility&&(r.settings.trigger.indexOf("click")!==-1&&e.focus(),t.callbacks.shown())};clearTimeout(r.showTimeout),r.showTimeout=setTimeout(p,i)}}},{key:"hide",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.settings.duration,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(clearTimeout(e.getAttribute("data-delay")),document.body.contains(e)){n&&this.callbacks.beforeHidden(),e.style.visibility="hidden";var r=o.bus.refs[o.bus.poppers.indexOf(e)],s=e.querySelector("."+this.classNames.tooltip),a=e.querySelector("[x-circle]");r.tooltippedEl.classList.remove("active"),i===this.defaultSettings.hideDuration?s.style.transitionDuration?i=parseInt(s.style.transitionDuration.replace("ms","")):s.style.WebkitTransitionDuration&&(i=parseInt(s.style.WebkitTransitionDuration.replace("ms",""))):(s.style.WebkitTransitionDuration=i+"ms",s.style.transitionDuration=i+"ms",a&&(a.style.WebkitTransitionDuration=i+"ms",a.style.transitionDuration=i+"ms")),s.classList.add("leave"),s.classList.remove("enter"),a&&(a.classList.add("leave"),a.classList.remove("enter")),r.settings.html&&r.settings.trigger.indexOf("click")!==-1&&r.tooltippedEl.focus();var l=function(){"visible"!==e.style.visibility&&(r.hasFollowCursorListener&&(r.tooltippedEl.removeEventListener("mousemove",t._followCursor),r.hasFollowCursorListener=!1),r.instance.disableEventListeners(),document.body.contains(e)&&document.body.removeChild(e),n&&t.callbacks.hidden())};clearTimeout(r.hideTimeout),r.hideTimeout=setTimeout(l,i)}}},{key:"destroy",value:function(e){var t=o.bus.poppers.indexOf(e),i=o.bus.refs[t];i.listeners.forEach(function(e){return i.tooltippedEl.removeEventListener(e.event,e.method)}),i.instance.destroy(),o.bus.poppers.splice(t,1),o.bus.tooltippedEls.splice(t,1),o.bus.refs.splice(t,1)}},{key:"update",value:function(e){var t=o.bus.poppers.indexOf(e),i=o.bus.refs[t],n=e.querySelector("."+this.classNames.content);i.settings.html?n.innerHTML=i.settings.html instanceof Element?i.settings.html.innerHTML:document.getElementById(i.settings.html.replace("#","")).innerHTML:(n.innerHTML=i.tooltippedEl.getAttribute("title")||i.tooltippedEl.getAttribute("data-original-title"),this._removeTitle(i.tooltippedEl))}}]),o}();return window.Tippy=o,o});
