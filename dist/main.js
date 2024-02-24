(()=>{"use strict";var n,e,t,r,o,a,i,c,s,l,u,p,d,f,h={365:(n,e,t)=>{t.d(e,{A:()=>d});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),c=t(417),s=t.n(c),l=new URL(t(798),t.b),u=i()(o()),p=s()(l);u.push([n.id,`* {\n    padding: 0px;\n    margin: 0px;\n}\n\nbody, html {\n    height: 100%;\n    font-family: "Anton", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n  }\n\n#Container {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    background-image: url(${p});\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n#header {\n    color: rgb(144, 238, 145);\n    -webkit-text-stroke: .1px black;\n    font-size: xx-large;\n}\n\n#list-blocks {\n    display: flex;\n    flex-direction: row;\n}\n\n.blocks {\n    list-style: none;\n    border: 2px solid black;\n    background-color: rgb(245, 245, 245);\n    border-radius: 5px;\n    height: 150px;\n    width: 130px;\n    margin: 2%;\n}\n\n#locationWeather {\n    display: flex;\n    width: 100vw;\n    justify-content: center;\n    gap: .5%;\n}\n\n#userLabel {\n    color: rgb(144, 238, 145);\n    -webkit-text-stroke: .9px black;\n    font-size: x-large;\n}\n\n#userLocation {\n    background-color: rgb(245, 245, 245);\n    border-radius: 5px;\n    color: green;\n    cursor: pointer;\n    display: inline-block;\n    padding: 4px 20px;\n    text-align: center;\n    text-decoration: none;\n    transition: all 250ms;\n    border: 1px solid black;\n    font-size: 16px;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n}\n\n#userLocation:focus {\n    outline-color: rgb(229, 246, 223);\n    outline-style: none;\n}\n\nbutton {\n  background-color: #c2fbd7;\n  border-radius: 5px;\n  color: green;\n  cursor: pointer;\n  display: inline-block;\n  padding: 4px 20px;\n  text-align: center;\n  text-decoration: none;\n  transition: all 250ms;\n  border: 1px solid black;\n  font-size: 16px;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n}\n\nbutton:hover {\n  box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;\n}`,""]);const d=u},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],u=a[l]||0,p="".concat(l," ").concat(u);a[l]=u+1;var d=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var u=t(a[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},798:(n,e,t)=>{n.exports=t.p+"23bf50f44e40e7e18d82.jpg"}},b={};function g(n){var e=b[n];if(void 0!==e)return e.exports;var t=b[n]={id:n,exports:{}};return h[n](t,t.exports,g),t.exports}g.m=h,g.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return g.d(e,{a:e}),e},g.d=(n,e)=>{for(var t in e)g.o(e,t)&&!g.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),g.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;g.g.importScripts&&(n=g.g.location+"");var e=g.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=n})(),g.b=document.baseURI||self.location.href,g.nc=void 0,n=g(72),e=g.n(n),t=g(825),r=g.n(t),o=g(659),a=g.n(o),i=g(56),c=g.n(i),s=g(540),l=g.n(s),u=g(113),p=g.n(u),d=g(365),(f={}).styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(d.A,f),d.A&&d.A.locals&&d.A.locals,document.getElementById("locationWeather").addEventListener("submit",(function(n){n.preventDefault();let e=document.getElementById("userLocation").value;fetch(`https://api.weatherapi.com/v1/forecast.json?q=${e}&days=3&key=0ade93a78b6c4f04b7d23501240502`).then((n=>{if(!n.ok)throw new Error("Network response was not ok");return n.json()})).then((n=>{})).catch((n=>{console.error("There was a problem with the fetch operation:",n)}))}))})();