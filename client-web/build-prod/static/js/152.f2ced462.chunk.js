"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[152],{55152:function(e,t,o){o.d(t,{Z:function(){return lt}});var n=o(70885),r=o(4942),i=o(63366),a=o(87462),s=o(72791),p=o(28182),c=o(94419),l=o(90183),u=o(12065),f=o(60277),d=o(74142),m=o(85513),h=o(49853),v=o(8085),g=o(47563),b=o(75721),y=o(99723);function w(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function x(e){return e instanceof w(e).Element||e instanceof Element}function O(e){return e instanceof w(e).HTMLElement||e instanceof HTMLElement}function Z(e){return"undefined"!==typeof ShadowRoot&&(e instanceof w(e).ShadowRoot||e instanceof ShadowRoot)}var T=Math.max,P=Math.min,R=Math.round;function E(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function M(){return!/^((?!chrome|android).)*safari/i.test(E())}function j(e,t,o){void 0===t&&(t=!1),void 0===o&&(o=!1);var n=e.getBoundingClientRect(),r=1,i=1;t&&O(e)&&(r=e.offsetWidth>0&&R(n.width)/e.offsetWidth||1,i=e.offsetHeight>0&&R(n.height)/e.offsetHeight||1);var a=(x(e)?w(e):window).visualViewport,s=!M()&&o,p=(n.left+(s&&a?a.offsetLeft:0))/r,c=(n.top+(s&&a?a.offsetTop:0))/i,l=n.width/r,u=n.height/i;return{width:l,height:u,top:c,right:p+l,bottom:c+u,left:p,x:p,y:c}}function k(e){var t=w(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function D(e){return e?(e.nodeName||"").toLowerCase():null}function L(e){return((x(e)?e.ownerDocument:e.document)||window.document).documentElement}function S(e){return j(L(e)).left+k(e).scrollLeft}function A(e){return w(e).getComputedStyle(e)}function W(e){var t=A(e),o=t.overflow,n=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+r+n)}function C(e,t,o){void 0===o&&(o=!1);var n=O(t),r=O(t)&&function(e){var t=e.getBoundingClientRect(),o=R(t.width)/e.offsetWidth||1,n=R(t.height)/e.offsetHeight||1;return 1!==o||1!==n}(t),i=L(t),a=j(e,r,o),s={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(n||!n&&!o)&&(("body"!==D(t)||W(i))&&(s=function(e){return e!==w(e)&&O(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:k(e);var t}(t)),O(t)?((p=j(t,!0)).x+=t.clientLeft,p.y+=t.clientTop):i&&(p.x=S(i))),{x:a.left+s.scrollLeft-p.x,y:a.top+s.scrollTop-p.y,width:a.width,height:a.height}}function B(e){var t=j(e),o=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-o)<=1&&(o=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:n}}function H(e){return"html"===D(e)?e:e.assignedSlot||e.parentNode||(Z(e)?e.host:null)||L(e)}function N(e){return["html","body","#document"].indexOf(D(e))>=0?e.ownerDocument.body:O(e)&&W(e)?e:N(H(e))}function F(e,t){var o;void 0===t&&(t=[]);var n=N(e),r=n===(null==(o=e.ownerDocument)?void 0:o.body),i=w(n),a=r?[i].concat(i.visualViewport||[],W(n)?n:[]):n,s=t.concat(a);return r?s:s.concat(F(H(a)))}function I(e){return["table","td","th"].indexOf(D(e))>=0}function q(e){return O(e)&&"fixed"!==A(e).position?e.offsetParent:null}function U(e){for(var t=w(e),o=q(e);o&&I(o)&&"static"===A(o).position;)o=q(o);return o&&("html"===D(o)||"body"===D(o)&&"static"===A(o).position)?t:o||function(e){var t=/firefox/i.test(E());if(/Trident/i.test(E())&&O(e)&&"fixed"===A(e).position)return null;var o=H(e);for(Z(o)&&(o=o.host);O(o)&&["html","body"].indexOf(D(o))<0;){var n=A(o);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return o;o=o.parentNode}return null}(e)||t}var V="top",z="bottom",_="right",X="left",Y="auto",G=[V,z,_,X],J="start",K="end",Q="viewport",$="popper",ee=G.reduce((function(e,t){return e.concat([t+"-"+J,t+"-"+K])}),[]),te=[].concat(G,[Y]).reduce((function(e,t){return e.concat([t,t+"-"+J,t+"-"+K])}),[]),oe=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function ne(e){var t=new Map,o=new Set,n=[];function r(e){o.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!o.has(e)){var n=t.get(e);n&&r(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){o.has(e.name)||r(e)})),n}function re(e){var t;return function(){return t||(t=new Promise((function(o){Promise.resolve().then((function(){t=void 0,o(e())}))}))),t}}var ie={placement:"bottom",modifiers:[],strategy:"absolute"};function ae(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function se(e){void 0===e&&(e={});var t=e,o=t.defaultModifiers,n=void 0===o?[]:o,r=t.defaultOptions,i=void 0===r?ie:r;return function(e,t,o){void 0===o&&(o=i);var r={placement:"bottom",orderedModifiers:[],options:Object.assign({},ie,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,p={state:r,setOptions:function(o){var s="function"===typeof o?o(r.options):o;c(),r.options=Object.assign({},i,r.options,s),r.scrollParents={reference:x(e)?F(e):e.contextElement?F(e.contextElement):[],popper:F(t)};var l=function(e){var t=ne(e);return oe.reduce((function(e,o){return e.concat(t.filter((function(e){return e.phase===o})))}),[])}(function(e){var t=e.reduce((function(e,t){var o=e[t.name];return e[t.name]=o?Object.assign({},o,t,{options:Object.assign({},o.options,t.options),data:Object.assign({},o.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(n,r.options.modifiers)));return r.orderedModifiers=l.filter((function(e){return e.enabled})),r.orderedModifiers.forEach((function(e){var t=e.name,o=e.options,n=void 0===o?{}:o,i=e.effect;if("function"===typeof i){var s=i({state:r,name:t,instance:p,options:n}),c=function(){};a.push(s||c)}})),p.update()},forceUpdate:function(){if(!s){var e=r.elements,t=e.reference,o=e.popper;if(ae(t,o)){r.rects={reference:C(t,U(o),"fixed"===r.options.strategy),popper:B(o)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(e){return r.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<r.orderedModifiers.length;n++)if(!0!==r.reset){var i=r.orderedModifiers[n],a=i.fn,c=i.options,l=void 0===c?{}:c,u=i.name;"function"===typeof a&&(r=a({state:r,options:l,name:u,instance:p})||r)}else r.reset=!1,n=-1}}},update:re((function(){return new Promise((function(e){p.forceUpdate(),e(r)}))})),destroy:function(){c(),s=!0}};if(!ae(e,t))return p;function c(){a.forEach((function(e){return e()})),a=[]}return p.setOptions(o).then((function(e){!s&&o.onFirstUpdate&&o.onFirstUpdate(e)})),p}}var pe={passive:!0};function ce(e){return e.split("-")[0]}function le(e){return e.split("-")[1]}function ue(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function fe(e){var t,o=e.reference,n=e.element,r=e.placement,i=r?ce(r):null,a=r?le(r):null,s=o.x+o.width/2-n.width/2,p=o.y+o.height/2-n.height/2;switch(i){case V:t={x:s,y:o.y-n.height};break;case z:t={x:s,y:o.y+o.height};break;case _:t={x:o.x+o.width,y:p};break;case X:t={x:o.x-n.width,y:p};break;default:t={x:o.x,y:o.y}}var c=i?ue(i):null;if(null!=c){var l="y"===c?"height":"width";switch(a){case J:t[c]=t[c]-(o[l]/2-n[l]/2);break;case K:t[c]=t[c]+(o[l]/2-n[l]/2)}}return t}var de={top:"auto",right:"auto",bottom:"auto",left:"auto"};function me(e){var t,o=e.popper,n=e.popperRect,r=e.placement,i=e.variation,a=e.offsets,s=e.position,p=e.gpuAcceleration,c=e.adaptive,l=e.roundOffsets,u=e.isFixed,f=a.x,d=void 0===f?0:f,m=a.y,h=void 0===m?0:m,v="function"===typeof l?l({x:d,y:h}):{x:d,y:h};d=v.x,h=v.y;var g=a.hasOwnProperty("x"),b=a.hasOwnProperty("y"),y=X,x=V,O=window;if(c){var Z=U(o),T="clientHeight",P="clientWidth";if(Z===w(o)&&"static"!==A(Z=L(o)).position&&"absolute"===s&&(T="scrollHeight",P="scrollWidth"),r===V||(r===X||r===_)&&i===K)x=z,h-=(u&&Z===O&&O.visualViewport?O.visualViewport.height:Z[T])-n.height,h*=p?1:-1;if(r===X||(r===V||r===z)&&i===K)y=_,d-=(u&&Z===O&&O.visualViewport?O.visualViewport.width:Z[P])-n.width,d*=p?1:-1}var E,M=Object.assign({position:s},c&&de),j=!0===l?function(e){var t=e.x,o=e.y,n=window.devicePixelRatio||1;return{x:R(t*n)/n||0,y:R(o*n)/n||0}}({x:d,y:h}):{x:d,y:h};return d=j.x,h=j.y,p?Object.assign({},M,((E={})[x]=b?"0":"",E[y]=g?"0":"",E.transform=(O.devicePixelRatio||1)<=1?"translate("+d+"px, "+h+"px)":"translate3d("+d+"px, "+h+"px, 0)",E)):Object.assign({},M,((t={})[x]=b?h+"px":"",t[y]=g?d+"px":"",t.transform="",t))}var he={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,o=e.options,n=e.name,r=o.offset,i=void 0===r?[0,0]:r,a=te.reduce((function(e,o){return e[o]=function(e,t,o){var n=ce(e),r=[X,V].indexOf(n)>=0?-1:1,i="function"===typeof o?o(Object.assign({},t,{placement:e})):o,a=i[0],s=i[1];return a=a||0,s=(s||0)*r,[X,_].indexOf(n)>=0?{x:s,y:a}:{x:a,y:s}}(o,t.rects,i),e}),{}),s=a[t.placement],p=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=p,t.modifiersData.popperOffsets.y+=c),t.modifiersData[n]=a}},ve={left:"right",right:"left",bottom:"top",top:"bottom"};function ge(e){return e.replace(/left|right|bottom|top/g,(function(e){return ve[e]}))}var be={start:"end",end:"start"};function ye(e){return e.replace(/start|end/g,(function(e){return be[e]}))}function we(e,t){var o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(o&&Z(o)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function xe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Oe(e,t,o){return t===Q?xe(function(e,t){var o=w(e),n=L(e),r=o.visualViewport,i=n.clientWidth,a=n.clientHeight,s=0,p=0;if(r){i=r.width,a=r.height;var c=M();(c||!c&&"fixed"===t)&&(s=r.offsetLeft,p=r.offsetTop)}return{width:i,height:a,x:s+S(e),y:p}}(e,o)):x(t)?function(e,t){var o=j(e,!1,"fixed"===t);return o.top=o.top+e.clientTop,o.left=o.left+e.clientLeft,o.bottom=o.top+e.clientHeight,o.right=o.left+e.clientWidth,o.width=e.clientWidth,o.height=e.clientHeight,o.x=o.left,o.y=o.top,o}(t,o):xe(function(e){var t,o=L(e),n=k(e),r=null==(t=e.ownerDocument)?void 0:t.body,i=T(o.scrollWidth,o.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=T(o.scrollHeight,o.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-n.scrollLeft+S(e),p=-n.scrollTop;return"rtl"===A(r||o).direction&&(s+=T(o.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:s,y:p}}(L(e)))}function Ze(e,t,o,n){var r="clippingParents"===t?function(e){var t=F(H(e)),o=["absolute","fixed"].indexOf(A(e).position)>=0&&O(e)?U(e):e;return x(o)?t.filter((function(e){return x(e)&&we(e,o)&&"body"!==D(e)})):[]}(e):[].concat(t),i=[].concat(r,[o]),a=i[0],s=i.reduce((function(t,o){var r=Oe(e,o,n);return t.top=T(r.top,t.top),t.right=P(r.right,t.right),t.bottom=P(r.bottom,t.bottom),t.left=T(r.left,t.left),t}),Oe(e,a,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Te(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Pe(e,t){return t.reduce((function(t,o){return t[o]=e,t}),{})}function Re(e,t){void 0===t&&(t={});var o=t,n=o.placement,r=void 0===n?e.placement:n,i=o.strategy,a=void 0===i?e.strategy:i,s=o.boundary,p=void 0===s?"clippingParents":s,c=o.rootBoundary,l=void 0===c?Q:c,u=o.elementContext,f=void 0===u?$:u,d=o.altBoundary,m=void 0!==d&&d,h=o.padding,v=void 0===h?0:h,g=Te("number"!==typeof v?v:Pe(v,G)),b=f===$?"reference":$,y=e.rects.popper,w=e.elements[m?b:f],O=Ze(x(w)?w:w.contextElement||L(e.elements.popper),p,l,a),Z=j(e.elements.reference),T=fe({reference:Z,element:y,strategy:"absolute",placement:r}),P=xe(Object.assign({},y,T)),R=f===$?P:Z,E={top:O.top-R.top+g.top,bottom:R.bottom-O.bottom+g.bottom,left:O.left-R.left+g.left,right:R.right-O.right+g.right},M=e.modifiersData.offset;if(f===$&&M){var k=M[r];Object.keys(E).forEach((function(e){var t=[_,z].indexOf(e)>=0?1:-1,o=[V,z].indexOf(e)>=0?"y":"x";E[e]+=k[o]*t}))}return E}function Ee(e,t,o){return T(e,P(t,o))}var Me={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,n=e.name,r=o.mainAxis,i=void 0===r||r,a=o.altAxis,s=void 0!==a&&a,p=o.boundary,c=o.rootBoundary,l=o.altBoundary,u=o.padding,f=o.tether,d=void 0===f||f,m=o.tetherOffset,h=void 0===m?0:m,v=Re(t,{boundary:p,rootBoundary:c,padding:u,altBoundary:l}),g=ce(t.placement),b=le(t.placement),y=!b,w=ue(g),x="x"===w?"y":"x",O=t.modifiersData.popperOffsets,Z=t.rects.reference,R=t.rects.popper,E="function"===typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,M="number"===typeof E?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),j=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,k={x:0,y:0};if(O){if(i){var D,L="y"===w?V:X,S="y"===w?z:_,A="y"===w?"height":"width",W=O[w],C=W+v[L],H=W-v[S],N=d?-R[A]/2:0,F=b===J?Z[A]:R[A],I=b===J?-R[A]:-Z[A],q=t.elements.arrow,Y=d&&q?B(q):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},K=G[L],Q=G[S],$=Ee(0,Z[A],Y[A]),ee=y?Z[A]/2-N-$-K-M.mainAxis:F-$-K-M.mainAxis,te=y?-Z[A]/2+N+$+Q+M.mainAxis:I+$+Q+M.mainAxis,oe=t.elements.arrow&&U(t.elements.arrow),ne=oe?"y"===w?oe.clientTop||0:oe.clientLeft||0:0,re=null!=(D=null==j?void 0:j[w])?D:0,ie=W+te-re,ae=Ee(d?P(C,W+ee-re-ne):C,W,d?T(H,ie):H);O[w]=ae,k[w]=ae-W}if(s){var se,pe="x"===w?V:X,fe="x"===w?z:_,de=O[x],me="y"===x?"height":"width",he=de+v[pe],ve=de-v[fe],ge=-1!==[V,X].indexOf(g),be=null!=(se=null==j?void 0:j[x])?se:0,ye=ge?he:de-Z[me]-R[me]-be+M.altAxis,we=ge?de+Z[me]+R[me]-be-M.altAxis:ve,xe=d&&ge?function(e,t,o){var n=Ee(e,t,o);return n>o?o:n}(ye,de,we):Ee(d?ye:he,de,d?we:ve);O[x]=xe,k[x]=xe-de}t.modifiersData[n]=k}},requiresIfExists:["offset"]};var je={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,o=e.state,n=e.name,r=e.options,i=o.elements.arrow,a=o.modifiersData.popperOffsets,s=ce(o.placement),p=ue(s),c=[X,_].indexOf(s)>=0?"height":"width";if(i&&a){var l=function(e,t){return Te("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Pe(e,G))}(r.padding,o),u=B(i),f="y"===p?V:X,d="y"===p?z:_,m=o.rects.reference[c]+o.rects.reference[p]-a[p]-o.rects.popper[c],h=a[p]-o.rects.reference[p],v=U(i),g=v?"y"===p?v.clientHeight||0:v.clientWidth||0:0,b=m/2-h/2,y=l[f],w=g-u[c]-l[d],x=g/2-u[c]/2+b,O=Ee(y,x,w),Z=p;o.modifiersData[n]=((t={})[Z]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,o=e.options.element,n=void 0===o?"[data-popper-arrow]":o;null!=n&&("string"!==typeof n||(n=t.elements.popper.querySelector(n)))&&we(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ke(e,t,o){return void 0===o&&(o={x:0,y:0}),{top:e.top-t.height-o.y,right:e.right-t.width+o.x,bottom:e.bottom-t.height+o.y,left:e.left-t.width-o.x}}function De(e){return[V,_,z,X].some((function(t){return e[t]>=0}))}var Le=se({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,o=e.instance,n=e.options,r=n.scroll,i=void 0===r||r,a=n.resize,s=void 0===a||a,p=w(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",o.update,pe)})),s&&p.addEventListener("resize",o.update,pe),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",o.update,pe)})),s&&p.removeEventListener("resize",o.update,pe)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,o=e.name;t.modifiersData[o]=fe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,o=e.options,n=o.gpuAcceleration,r=void 0===n||n,i=o.adaptive,a=void 0===i||i,s=o.roundOffsets,p=void 0===s||s,c={placement:ce(t.placement),variation:le(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,me(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:p})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,me(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:p})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var o=t.styles[e]||{},n=t.attributes[e]||{},r=t.elements[e];O(r)&&D(r)&&(Object.assign(r.style,o),Object.keys(n).forEach((function(e){var t=n[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],r=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:o[e]).reduce((function(e,t){return e[t]="",e}),{});O(n)&&D(n)&&(Object.assign(n.style,i),Object.keys(r).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]},he,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var r=o.mainAxis,i=void 0===r||r,a=o.altAxis,s=void 0===a||a,p=o.fallbackPlacements,c=o.padding,l=o.boundary,u=o.rootBoundary,f=o.altBoundary,d=o.flipVariations,m=void 0===d||d,h=o.allowedAutoPlacements,v=t.options.placement,g=ce(v),b=p||(g===v||!m?[ge(v)]:function(e){if(ce(e)===Y)return[];var t=ge(e);return[ye(e),t,ye(t)]}(v)),y=[v].concat(b).reduce((function(e,o){return e.concat(ce(o)===Y?function(e,t){void 0===t&&(t={});var o=t,n=o.placement,r=o.boundary,i=o.rootBoundary,a=o.padding,s=o.flipVariations,p=o.allowedAutoPlacements,c=void 0===p?te:p,l=le(n),u=l?s?ee:ee.filter((function(e){return le(e)===l})):G,f=u.filter((function(e){return c.indexOf(e)>=0}));0===f.length&&(f=u);var d=f.reduce((function(t,o){return t[o]=Re(e,{placement:o,boundary:r,rootBoundary:i,padding:a})[ce(o)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:o,boundary:l,rootBoundary:u,padding:c,flipVariations:m,allowedAutoPlacements:h}):o)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,Z=!0,T=y[0],P=0;P<y.length;P++){var R=y[P],E=ce(R),M=le(R)===J,j=[V,z].indexOf(E)>=0,k=j?"width":"height",D=Re(t,{placement:R,boundary:l,rootBoundary:u,altBoundary:f,padding:c}),L=j?M?_:X:M?z:V;w[k]>x[k]&&(L=ge(L));var S=ge(L),A=[];if(i&&A.push(D[E]<=0),s&&A.push(D[L]<=0,D[S]<=0),A.every((function(e){return e}))){T=R,Z=!1;break}O.set(R,A)}if(Z)for(var W=function(e){var t=y.find((function(t){var o=O.get(t);if(o)return o.slice(0,e).every((function(e){return e}))}));if(t)return T=t,"break"},C=m?3:1;C>0;C--){if("break"===W(C))break}t.placement!==T&&(t.modifiersData[n]._skip=!0,t.placement=T,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},Me,je,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,o=e.name,n=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,a=Re(t,{elementContext:"reference"}),s=Re(t,{altBoundary:!0}),p=ke(a,n),c=ke(s,r,i),l=De(p),u=De(c);t.modifiersData[o]={referenceClippingOffsets:p,popperEscapeOffsets:c,isReferenceHidden:l,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":u})}}]}),Se=o(96174),Ae=o(21217),We=o(75878);function Ce(e){return(0,Ae.Z)("MuiPopperUnstyled",e)}(0,We.Z)("MuiPopperUnstyled",["root"]);var Be=o(57271),He=o(80184),Ne=["anchorEl","children","component","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","slotProps","slots","TransitionProps"],Fe=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function Ie(e){return"function"===typeof e?e():e}var qe={},Ue=s.forwardRef((function(e,t){var o,r=e.anchorEl,p=e.children,l=e.component,u=e.direction,f=e.disablePortal,d=e.modifiers,m=e.open,h=e.ownerState,v=e.placement,y=e.popperOptions,w=e.popperRef,x=e.slotProps,O=void 0===x?{}:x,Z=e.slots,T=void 0===Z?{}:Z,P=e.TransitionProps,R=(0,i.Z)(e,Ne),E=s.useRef(null),M=(0,g.Z)(E,t),j=s.useRef(null),k=(0,g.Z)(j,w),D=s.useRef(k);(0,b.Z)((function(){D.current=k}),[k]),s.useImperativeHandle(w,(function(){return j.current}),[]);var L=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(v,u),S=s.useState(L),A=(0,n.Z)(S,2),W=A[0],C=A[1];s.useEffect((function(){j.current&&j.current.forceUpdate()})),(0,b.Z)((function(){if(r&&m){Ie(r);var e=[{name:"preventOverflow",options:{altBoundary:f}},{name:"flip",options:{altBoundary:f}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:function(e){var t=e.state;C(t.placement)}}];null!=d&&(e=e.concat(d)),y&&null!=y.modifiers&&(e=e.concat(y.modifiers));var t=Le(Ie(r),E.current,(0,a.Z)({placement:L},y,{modifiers:e}));return D.current(t),function(){t.destroy(),D.current(null)}}}),[r,f,d,m,y,L]);var B={placement:W};null!==P&&(B.TransitionProps=P);var H=(0,c.Z)({root:["root"]},Ce,{}),N=null!=(o=null!=l?l:T.root)?o:"div",F=(0,Be.Z)({elementType:N,externalSlotProps:O.root,externalForwardedProps:R,additionalProps:{role:"tooltip",ref:M},ownerState:(0,a.Z)({},e,h),className:H.root});return(0,He.jsx)(N,(0,a.Z)({},F,{children:"function"===typeof p?p(B):p}))})),Ve=s.forwardRef((function(e,t){var o=e.anchorEl,r=e.children,p=e.container,c=e.direction,l=void 0===c?"ltr":c,u=e.disablePortal,f=void 0!==u&&u,d=e.keepMounted,m=void 0!==d&&d,h=e.modifiers,v=e.open,g=e.placement,b=void 0===g?"bottom":g,w=e.popperOptions,x=void 0===w?qe:w,O=e.popperRef,Z=e.style,T=e.transition,P=void 0!==T&&T,R=(0,i.Z)(e,Fe),E=s.useState(!0),M=(0,n.Z)(E,2),j=M[0],k=M[1];if(!m&&!v&&(!P||j))return null;var D=p||(o?(0,y.Z)(Ie(o)).body:void 0);return(0,He.jsx)(Se.Z,{disablePortal:f,container:D,children:(0,He.jsx)(Ue,(0,a.Z)({anchorEl:o,direction:l,disablePortal:f,modifiers:h,ref:t,open:P?!j:v,placement:b,popperOptions:x,popperRef:O},R,{style:(0,a.Z)({position:"fixed",top:0,left:0,display:v||!m||P&&!j?null:"none"},Z),TransitionProps:P?{in:v,onEnter:function(){k(!1)},onExited:function(){k(!0)}}:null,children:r}))})})),ze=o(69120),_e=["components","componentsProps","slots","slotProps"],Xe=(0,f.ZP)(Ve,{name:"MuiPopper",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),Ye=s.forwardRef((function(e,t){var o,n=(0,ze.Z)(),r=(0,m.Z)({props:e,name:"MuiPopper"}),s=r.components,p=r.componentsProps,c=r.slots,l=r.slotProps,u=(0,i.Z)(r,_e),f=null!=(o=null==c?void 0:c.root)?o:null==s?void 0:s.Root;return(0,He.jsx)(Xe,(0,a.Z)({direction:null==n?void 0:n.direction,slots:{root:f},slotProps:null!=l?l:p},u,{ref:t}))})),Ge=o(89511),Je=o(57933),Ke=o(51853),Qe=o(42763),$e=o(15178);function et(e){return(0,Ae.Z)("MuiTooltip",e)}var tt=(0,We.Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),ot=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];var nt=(0,f.ZP)(Ye,{name:"MuiTooltip",slot:"Popper",overridesResolver:function(e,t){var o=e.ownerState;return[t.popper,!o.disableInteractive&&t.popperInteractive,o.arrow&&t.popperArrow,!o.open&&t.popperClose]}})((function(e){var t,o=e.theme,n=e.ownerState,i=e.open;return(0,a.Z)({zIndex:(o.vars||o).zIndex.tooltip,pointerEvents:"none"},!n.disableInteractive&&{pointerEvents:"auto"},!i&&{pointerEvents:"none"},n.arrow&&(t={},(0,r.Z)(t,'&[data-popper-placement*="bottom"] .'.concat(tt.arrow),{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}}),(0,r.Z)(t,'&[data-popper-placement*="top"] .'.concat(tt.arrow),{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}}),(0,r.Z)(t,'&[data-popper-placement*="right"] .'.concat(tt.arrow),(0,a.Z)({},n.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}})),(0,r.Z)(t,'&[data-popper-placement*="left"] .'.concat(tt.arrow),(0,a.Z)({},n.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})),t))})),rt=(0,f.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:function(e,t){var o=e.ownerState;return[t.tooltip,o.touch&&t.touch,o.arrow&&t.tooltipArrow,t["tooltipPlacement".concat((0,h.Z)(o.placement.split("-")[0]))]]}})((function(e){var t,o,n=e.theme,i=e.ownerState;return(0,a.Z)({backgroundColor:n.vars?n.vars.palette.Tooltip.bg:(0,u.Fq)(n.palette.grey[700],.92),borderRadius:(n.vars||n).shape.borderRadius,color:(n.vars||n).palette.common.white,fontFamily:n.typography.fontFamily,padding:"4px 8px",fontSize:n.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:n.typography.fontWeightMedium},i.arrow&&{position:"relative",margin:0},i.touch&&{padding:"8px 16px",fontSize:n.typography.pxToRem(14),lineHeight:"".concat((o=16/14,Math.round(1e5*o)/1e5),"em"),fontWeight:n.typography.fontWeightRegular},(t={},(0,r.Z)(t,".".concat(tt.popper,'[data-popper-placement*="left"] &'),(0,a.Z)({transformOrigin:"right center"},i.isRtl?(0,a.Z)({marginLeft:"14px"},i.touch&&{marginLeft:"24px"}):(0,a.Z)({marginRight:"14px"},i.touch&&{marginRight:"24px"}))),(0,r.Z)(t,".".concat(tt.popper,'[data-popper-placement*="right"] &'),(0,a.Z)({transformOrigin:"left center"},i.isRtl?(0,a.Z)({marginRight:"14px"},i.touch&&{marginRight:"24px"}):(0,a.Z)({marginLeft:"14px"},i.touch&&{marginLeft:"24px"}))),(0,r.Z)(t,".".concat(tt.popper,'[data-popper-placement*="top"] &'),(0,a.Z)({transformOrigin:"center bottom",marginBottom:"14px"},i.touch&&{marginBottom:"24px"})),(0,r.Z)(t,".".concat(tt.popper,'[data-popper-placement*="bottom"] &'),(0,a.Z)({transformOrigin:"center top",marginTop:"14px"},i.touch&&{marginTop:"24px"})),t))})),it=(0,f.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:function(e,t){return t.arrow}})((function(e){var t=e.theme;return{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:(0,u.Fq)(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}})),at=!1,st=null;function pt(e,t){return function(o){t&&t(o),e(o)}}var ct=s.forwardRef((function(e,t){var o,r,u,f,g,b,y,w,x,O,Z,T,P,R,E,M,j,k,D,L=(0,m.Z)({props:e,name:"MuiTooltip"}),S=L.arrow,A=void 0!==S&&S,W=L.children,C=L.components,B=void 0===C?{}:C,H=L.componentsProps,N=void 0===H?{}:H,F=L.describeChild,I=void 0!==F&&F,q=L.disableFocusListener,U=void 0!==q&&q,V=L.disableHoverListener,z=void 0!==V&&V,_=L.disableInteractive,X=void 0!==_&&_,Y=L.disableTouchListener,G=void 0!==Y&&Y,J=L.enterDelay,K=void 0===J?100:J,Q=L.enterNextDelay,$=void 0===Q?0:Q,ee=L.enterTouchDelay,te=void 0===ee?700:ee,oe=L.followCursor,ne=void 0!==oe&&oe,re=L.id,ie=L.leaveDelay,ae=void 0===ie?0:ie,se=L.leaveTouchDelay,pe=void 0===se?1500:se,ce=L.onClose,le=L.onOpen,ue=L.open,fe=L.placement,de=void 0===fe?"bottom":fe,me=L.PopperComponent,he=L.PopperProps,ve=void 0===he?{}:he,ge=L.slotProps,be=void 0===ge?{}:ge,ye=L.slots,we=void 0===ye?{}:ye,xe=L.title,Oe=L.TransitionComponent,Ze=void 0===Oe?v.Z:Oe,Te=L.TransitionProps,Pe=(0,i.Z)(L,ot),Re=(0,d.Z)(),Ee="rtl"===Re.direction,Me=s.useState(),je=(0,n.Z)(Me,2),ke=je[0],De=je[1],Le=s.useState(null),Se=(0,n.Z)(Le,2),Ae=Se[0],We=Se[1],Ce=s.useRef(!1),Be=X||ne,Ne=s.useRef(),Fe=s.useRef(),Ie=s.useRef(),qe=s.useRef(),Ue=(0,$e.Z)({controlled:ue,default:!1,name:"Tooltip",state:"open"}),Ve=(0,n.Z)(Ue,2),ze=Ve[0],_e=Ve[1],Xe=ze,tt=(0,Ke.Z)(re),ct=s.useRef(),lt=s.useCallback((function(){void 0!==ct.current&&(document.body.style.WebkitUserSelect=ct.current,ct.current=void 0),clearTimeout(qe.current)}),[]);s.useEffect((function(){return function(){clearTimeout(Ne.current),clearTimeout(Fe.current),clearTimeout(Ie.current),lt()}}),[lt]);var ut=function(e){clearTimeout(st),at=!0,_e(!0),le&&!Xe&&le(e)},ft=(0,Ge.Z)((function(e){clearTimeout(st),st=setTimeout((function(){at=!1}),800+ae),_e(!1),ce&&Xe&&ce(e),clearTimeout(Ne.current),Ne.current=setTimeout((function(){Ce.current=!1}),Re.transitions.duration.shortest)})),dt=function(e){Ce.current&&"touchstart"!==e.type||(ke&&ke.removeAttribute("title"),clearTimeout(Fe.current),clearTimeout(Ie.current),K||at&&$?Fe.current=setTimeout((function(){ut(e)}),at?$:K):ut(e))},mt=function(e){clearTimeout(Fe.current),clearTimeout(Ie.current),Ie.current=setTimeout((function(){ft(e)}),ae)},ht=(0,Qe.Z)(),vt=ht.isFocusVisibleRef,gt=ht.onBlur,bt=ht.onFocus,yt=ht.ref,wt=s.useState(!1),xt=(0,n.Z)(wt,2)[1],Ot=function(e){gt(e),!1===vt.current&&(xt(!1),mt(e))},Zt=function(e){ke||De(e.currentTarget),bt(e),!0===vt.current&&(xt(!0),dt(e))},Tt=function(e){Ce.current=!0;var t=W.props;t.onTouchStart&&t.onTouchStart(e)},Pt=dt,Rt=mt;s.useEffect((function(){if(Xe)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||ft(e)}}),[ft,Xe]);var Et=(0,Je.Z)(W.ref,yt,De,t);xe||0===xe||(Xe=!1);var Mt=s.useRef({x:0,y:0}),jt=s.useRef(),kt={},Dt="string"===typeof xe;I?(kt.title=Xe||!Dt||z?null:xe,kt["aria-describedby"]=Xe?tt:null):(kt["aria-label"]=Dt?xe:null,kt["aria-labelledby"]=Xe&&!Dt?tt:null);var Lt=(0,a.Z)({},kt,Pe,W.props,{className:(0,p.Z)(Pe.className,W.props.className),onTouchStart:Tt,ref:Et},ne?{onMouseMove:function(e){var t=W.props;t.onMouseMove&&t.onMouseMove(e),Mt.current={x:e.clientX,y:e.clientY},jt.current&&jt.current.update()}}:{});var St={};G||(Lt.onTouchStart=function(e){Tt(e),clearTimeout(Ie.current),clearTimeout(Ne.current),lt(),ct.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",qe.current=setTimeout((function(){document.body.style.WebkitUserSelect=ct.current,dt(e)}),te)},Lt.onTouchEnd=function(e){W.props.onTouchEnd&&W.props.onTouchEnd(e),lt(),clearTimeout(Ie.current),Ie.current=setTimeout((function(){ft(e)}),pe)}),z||(Lt.onMouseOver=pt(Pt,Lt.onMouseOver),Lt.onMouseLeave=pt(Rt,Lt.onMouseLeave),Be||(St.onMouseOver=Pt,St.onMouseLeave=Rt)),U||(Lt.onFocus=pt(Zt,Lt.onFocus),Lt.onBlur=pt(Ot,Lt.onBlur),Be||(St.onFocus=Zt,St.onBlur=Ot));var At=s.useMemo((function(){var e,t=[{name:"arrow",enabled:Boolean(Ae),options:{element:Ae,padding:4}}];return null!=(e=ve.popperOptions)&&e.modifiers&&(t=t.concat(ve.popperOptions.modifiers)),(0,a.Z)({},ve.popperOptions,{modifiers:t})}),[Ae,ve]),Wt=(0,a.Z)({},L,{isRtl:Ee,arrow:A,disableInteractive:Be,placement:de,PopperComponentProp:me,touch:Ce.current}),Ct=function(e){var t=e.classes,o=e.disableInteractive,n=e.arrow,r=e.touch,i=e.placement,a={popper:["popper",!o&&"popperInteractive",n&&"popperArrow"],tooltip:["tooltip",n&&"tooltipArrow",r&&"touch","tooltipPlacement".concat((0,h.Z)(i.split("-")[0]))],arrow:["arrow"]};return(0,c.Z)(a,et,t)}(Wt),Bt=null!=(o=null!=(r=we.popper)?r:B.Popper)?o:nt,Ht=null!=(u=null!=(f=null!=(g=we.transition)?g:B.Transition)?f:Ze)?u:v.Z,Nt=null!=(b=null!=(y=we.tooltip)?y:B.Tooltip)?b:rt,Ft=null!=(w=null!=(x=we.arrow)?x:B.Arrow)?w:it,It=(0,l.Z)(Bt,(0,a.Z)({},ve,null!=(O=be.popper)?O:N.popper,{className:(0,p.Z)(Ct.popper,null==ve?void 0:ve.className,null==(Z=null!=(T=be.popper)?T:N.popper)?void 0:Z.className)}),Wt),qt=(0,l.Z)(Ht,(0,a.Z)({},Te,null!=(P=be.transition)?P:N.transition),Wt),Ut=(0,l.Z)(Nt,(0,a.Z)({},null!=(R=be.tooltip)?R:N.tooltip,{className:(0,p.Z)(Ct.tooltip,null==(E=null!=(M=be.tooltip)?M:N.tooltip)?void 0:E.className)}),Wt),Vt=(0,l.Z)(Ft,(0,a.Z)({},null!=(j=be.arrow)?j:N.arrow,{className:(0,p.Z)(Ct.arrow,null==(k=null!=(D=be.arrow)?D:N.arrow)?void 0:k.className)}),Wt);return(0,He.jsxs)(s.Fragment,{children:[s.cloneElement(W,Lt),(0,He.jsx)(Bt,(0,a.Z)({as:null!=me?me:Ye,placement:de,anchorEl:ne?{getBoundingClientRect:function(){return{top:Mt.current.y,left:Mt.current.x,right:Mt.current.x,bottom:Mt.current.y,width:0,height:0}}}:ke,popperRef:jt,open:!!ke&&Xe,id:tt,transition:!0},St,It,{popperOptions:At,children:function(e){var t=e.TransitionProps;return(0,He.jsx)(Ht,(0,a.Z)({timeout:Re.transitions.duration.shorter},t,qt,{"data-foo":"bar",children:(0,He.jsxs)(Nt,(0,a.Z)({},Ut,{children:[xe,A?(0,He.jsx)(Ft,(0,a.Z)({},Vt,{ref:We})):null]}))}))}}))]})})),lt=ct}}]);
//# sourceMappingURL=152.f2ced462.chunk.js.map