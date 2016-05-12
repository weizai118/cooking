webpackJsonp([1],[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var s=n(1),i=o(s),l=n(4),a=o(l);new i["default"]({el:"body",components:{App:a["default"]}})},,function(e,t){e.exports='<div class="dialog d-popup-center" v-if=rendered v-show=visible :transition=transition :class="{ showclose: showClose }" _v-93bd3b62=""> <div class=dialog-content _v-93bd3b62=""> <slot _v-93bd3b62=""></slot> </div> </div>'},function(e,t,n){e.exports='<header class="header">\n  <nav class="nav">\n    <ul class="nav-list">\n      <li class="nav-item">\n        <a class="nav-link" href="http://cookingjs.github.io/">Docs</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" href="http://cookingjs.github.io/list-of-plugins.html">Plugins</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" href="https://github.com/ElemeFE/cooking">Github</a>\n      </li>\n    </ul>\n  </nav>\n\n  <div class="main-wrap">\n    <h1 class="headline">\n      <img class="logo" src="'+n(14)+'" alt="logo">\n      cooking\n    </h1>\n    <p class="desc">更易上手的前端构建工具</p>\n    <input class="install" @click="handleCopyCmd" value="npm install cooking -g" readonly>\n\n    <div class="buttongroup">\n      <iframe class="button" src="https://ghbtns.com/github-btn.html?user=elemefe&repo=cooking&type=star&count=true" frameborder="0" scrolling="0" width="80px" height="20px"></iframe>\n      <iframe class="button" src="https://ghbtns.com/github-btn.html?user=elemefe&repo=cooking&type=fork&count=true" frameborder="0" scrolling="0" width="80px" height="20px"></iframe>\n    </div>\n  </div>\n</header>\n\n<section class="intro">\n  <h1 class="headline">不仅简单而且高效</h1>\n  <p class="text">cooking 的目标是将你从繁琐的构建配置中解放出来，同时还省去每个项目都要安装一堆开发依赖的麻烦。基于 webapck 但更友好的配置项、易用的扩展配置机制，让你专注项目忘掉配置。</p>\n  <video class="video" controls preload="auto">\n    <source :src="VideoUrl" type="video/mp4">\n  </video>\n</section>\n\n<div class="warp">\n  <section class="info grid">\n    <div class="feature grid-col">\n      <h1 class="feature-title">基于 webpack</h1>\n      <p class="feature-text">如果重写原配置文件，只需少量甚至不修改，即可让 cooking 使用已有的 webapck 配置文件。<a href="http://cookingjs.github.io/migration-guide" class="link">迁移指南</a></p>\n    </div>\n\n    <div class="feature grid-col">\n      <h1 class="feature-title">项目零开发依赖</h1>\n      <p class="feature-text">多个项目共用同一个 webpack，省去项目内安装多个开发依赖的过程，从创建项目到启动开发环境花费时间不到十秒。</p>\n    </div>\n\n    <div class="feature grid-col">\n      <h1 class="feature-title">个性化设置</h1>\n      <p class="feature-text">除了插件、脚手架之外，还提供指令、依赖包的扩展，可以将 cooking 打造成适合自己团队使用的构建工具。</p>\n    </div>\n\n    <div class="feature grid-col">\n      <h1 class="feature-title">脚手架</h1>\n      <p class="feature-text">内置脚手架功能，能快速创建包含 cooking 配置文件的空项目。脚手架为 Github 远程仓库，可以轻松定义自己的脚手架。</p>\n    </div>\n\n    <div class="feature grid-col">\n      <h1 class="feature-title">配置简单</h1>\n      <p class="feature-text">将 webpack 的常见配置转换成更直观的参数，简单的配置即可实现 devServer、chunk、ES6 预处理、ESLint 等功能。提供 API，轻松增加修改配置。</p>\n    </div>\n\n    <div class="feature grid-col">\n      <h1 class="feature-title">插件机制</h1>\n      <p class="feature-text">cooking 只包含最基本的功能，可以用插件机制来增强功能。每个项目可以使用不同的插件，只有在需要时才自动安装。</p>\n    </div>\n  </section>\n</div>\n\n<section class="quickstart">\n  <h1 class="headline">快速开始</h1>\n  <code class="shell">\n    <div class="comment"># 创建一个项目为 my-project 的 vue 项目</div>\n    <div class="command">$ cooking create my-project vue</div>\n    <br />\n    <div class="comment"># 启动开发模式 (Development)</div>\n    <div class="command">$ cooking watch</div>\n  </code>\n  <p class="more">更详细的使用方式请<a class="link" href="http://cookingjs.github.io">参考文档</a></p>\n</section>\n\n<footer class="footer">\n  <a href="https://github.com/ElemeFE/" target="_blank" class="copyright">&copy; ElemeFE</a>\n</footer>\n'},function(e,t,n){var o,s;n(10),o=n(8),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,n){var o,s;n(11),o=n(9),s=n(2),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,n){!function(t,o){e.exports=o(n(7),n(1))}(this,function(e,t){return function(e){function t(o){if(n[o])return n[o].exports;var s=n[o]={exports:{},id:o,loaded:!1};return e[o].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(5),i=o(s),l=n(3),a=n(2),r=o(a),c=n(1);n(4);var u=1,d=[],f=function(e){if(-1===d.indexOf(e)){var t=function(e){var t=e.__vue__;if(!t){var n=e.previousSibling;n.__vue__&&(t=n.__vue__)}return t};i["default"].transition(e,{afterEnter:function(e){var n=t(e);n&&n.doAfterOpen&&n.doAfterOpen()},afterLeave:function(e){var n=t(e);n&&n.doAfterClose&&n.doAfterClose()}})}},p=function(e){return 3===e.nodeType?e.nextElementSibling:e};t["default"]={props:{visible:{type:Boolean,twoWay:!0,"default":!1},transition:{"default":"pop-bounce"},openDelay:{},closeDelay:{},zIndex:{},modal:{type:Boolean,"default":!1},modalClass:{},closeOnPressEscape:{type:Boolean,"default":!1},closeOnClickModal:{type:Boolean,"default":!1}},created:function(){this.transition&&f(this.transition)},compiled:function(){this._popupId="popup-"+u++,r["default"].register(this._popupId,this),(0,c.addClass)(p(this.$el),"d-popup")},beforeDestroy:function(){r["default"].deregister(this._popupId),r["default"].closeModal(this._popupId)},data:function(){return{rendered:!1}},watch:{visible:function(e){var t=this;if(e){if(this._opening)return;this.rendered?this.open():(this.rendered=!0,i["default"].nextTick(function(){t.open()}))}else this.close()}},methods:{open:function(e){var t=this;if(!this.rendered)return this.rendered=!0,void(this.visible=!0);var n=(0,l.merge)({},this,e);this._closeTimer&&(clearTimeout(this._closeTimer),this._closeTimer=null),clearTimeout(this._openTimer);var o=Number(n.openDelay);o>0?this._openTimer=setTimeout(function(){t._openTimer=null,t.doOpen(n)},o):this.doOpen(n)},doOpen:function(e){if(!this.willOpen||this.willOpen()){this._opening=!0,this.visible=!0;var t=p(this.$el),n=e.modal;n&&(this._closing&&(r["default"].closeModal(this._popupId),this._closing=!1),r["default"].openModal(this._popupId,r["default"].nextZIndex(),t,e.modalClass)),"static"===(0,c.getStyle)(t,"position")&&(0,c.setStyle)(t,"position","absolute");var o=e.zIndex;n?t.style.zIndex=r["default"].nextZIndex():o&&(t.style.zIndex=o),this.onOpen&&this.onOpen(),this.transition||this.doAfterOpen()}},doAfterOpen:function(){this._opening=!1},close:function(){var e=this;if(!this.willClose||this.willClose()){null!==this._openTimer&&(clearTimeout(this._openTimer),this._openTimer=null),clearTimeout(this._closeTimer);var t=Number(this.closeDelay);t>0?this._closeTimer=setTimeout(function(){e._closeTimer=null,e.doClose()},t):this.doClose()}},doClose:function(){this.visible=!1,this._closing=!0,this.onClose&&this.onClose(),this.transition||this.doAfterClose()},doAfterClose:function(){r["default"].closeModal(this._popupId),this._closing=!1}}}},function(t,n){t.exports=e},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),s=function(){var e=l.modalDom;return e||(e=document.createElement("div"),l.modalDom=e,(0,o.on)(e,"touchmove",function(e){e.preventDefault(),e.stopPropagation()}),(0,o.on)(e,"click",function(){l.doOnModalClick&&l.doOnModalClick()})),e},i={},l={zIndex:1e3,getInstance:function(e){return i[e]},register:function(e,t){e&&t&&(i[e]=t)},deregister:function(e){e&&(i[e]=null,delete i[e])},nextZIndex:function(){return l.zIndex++},modalStack:[],doOnModalClick:function(){var e=l.modalStack[l.modalStack.length-1];if(e){var t=l.getInstance(e.id);t&&t.closeOnClickModal&&t.close()}},openModal:function(e,t,n,i){if(e&&void 0!==t){for(var l=this.modalStack,a=0,r=l.length;r>a;a++){var c=l[a];if(c.id===e)return}var u=s();(0,o.addClass)(u,"d-modal modal-enter"),i&&(0,o.addClass)(u,i),setTimeout(function(){(0,o.removeClass)(u,"modal-enter")},300),n&&n.parentNode&&11!==n.parentNode.nodeType?n.parentNode.appendChild(u):document.body.appendChild(u),t&&(u.style.zIndex=t),u.style.display="",this.modalStack.push({id:e,zIndex:t,modalClass:i})}},closeModal:function(e){var t=this.modalStack,n=s();if(t.length>0){var i=t[t.length-1];if(i.id===e)(0,o.removeClass)(n,i.modalClass),t.pop(),t.length>0&&(n.style.zIndex=t[t.length-1].zIndex);else for(var l=t.length-1;l>=0;l--)if(t[l].id===e){t.splice(l,1);break}}0===t.length&&(n.parentNode&&n.parentNode.removeChild(n),n.style.display="none")}};(0,o.on)(window,"keydown",function(e){if(27===e.keyCode&&l.modalStack.length>0){var t=l.modalStack[l.modalStack.length-1];if(!t)return;var n=l.getInstance(t.id);n.closeOnPressEscape&&n.close()}}),t["default"]=l},function(e,t){"use strict";function n(e){for(var t=1,n=arguments.length;n>t;t++){var o=arguments[t];for(var s in o)if(o.hasOwnProperty(s)){var i=o[s];void 0!==i&&(e[s]=i)}}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.merge=n},function(e,t){},function(e,n){e.exports=t}])})},function(e,t,n){!function(t,n){e.exports=n()}(this,function(){"use strict";var e={};e["typeof"]="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};var t=function(){return document.addEventListener?function(e,t,n){e&&t&&n&&e.addEventListener(t,n,!1)}:function(e,t,n){e&&t&&n&&e.attachEvent("on"+t,n)}}(),n=function(){return document.removeEventListener?function(e,t,n){e&&t&&e.removeEventListener(t,n,!1)}:function(e,t,n){e&&t&&e.detachEvent("on"+t,n)}}(),o=function(e,o,s){var i=function l(){s&&s.apply(this,arguments),t(e,o,l)};n(e,o,i)},s=/([\:\-\_]+(.))/g,i=/^moz([A-Z])/,l=Number(document.documentMode),a=function(e){return e.replace(s,function(e,t,n,o){return o?n.toUpperCase():n}).replace(i,"Moz$1")},r=9>l?function(e,t){if(!e||!t)return null;t=a(t),"float"===t&&(t="styleFloat");try{switch(t){case"opacity":try{return e.filters.item("alpha").opacity/100}catch(n){return 1}break;default:return e.style[t]||e.currentStyle?e.currentStyle[t]:null}}catch(n){return e.style[t]}}:function(e,t){if(!e||!t)return null;t=a(t),"float"===t&&(t="cssFloat");try{var n=document.defaultView.getComputedStyle(e,"");return e.style[t]||n?n[t]:null}catch(o){return e.style[t]}},c=function v(t,n,o){if(t&&n)if("object"===("undefined"==typeof n?"undefined":e["typeof"](n)))for(var s in n)n.hasOwnProperty(s)&&v(t,s,n[s]);else n=a(n),"opacity"===n&&9>l?t.style.filter=isNaN(o)?"":"alpha(opacity="+100*o+")":t.style[n]=o},u=function(e){return(e||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")},d=function(e,t){if(!e||!t)return!1;if(-1!=t.indexOf(" "))throw new Error("className should not contain space.");return e.classList?e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1},f=function(e,t){if(e){var n=e.className;!(t||"").split;for(var o=(t||"").split(" "),s=0,i=o.length;i>s;s++){var l=o[s];l&&(e.classList?e.classList.add(l):d(e,l)||(n+=" "+l))}e.classList||(e.className=n)}},p=function(e,t){if(e&&t){for(var n=t.split(" "),o=" "+e.className+" ",s=0,i=n.length;i>s;s++){var l=n[s];l&&(e.classList?e.classList.remove(l):d(e,l)&&(o=o.replace(" "+l+" "," ")))}e.classList||(e.className=u(o))}},h={on:t,off:n,once:o,getStyle:r,setStyle:c,hasClass:d,addClass:f,removeClass:p};return h})},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(5),i=o(s),l=n(13),a=o(l);t["default"]={name:"app",components:{VDialog:i["default"]},template:n(3),data:function(){return{showDemo:!1}},created:function(){this.VideoUrl=a["default"]},methods:{handleCopyCmd:function(e){e.target.select()}}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(6),i=o(s);n(12),t["default"]={name:"dialog",mixins:[i["default"]],props:{showClose:{type:Boolean,"default":!0},showModal:{type:Boolean,"default":!0},modal:{"default":!0},closeOnClickModal:{"default":!0},title:String},data:function(){return{}}}},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){e.exports=n.p+"static/demo.mp4"},function(e,t,n){e.exports=n.p+"static/logo.f3eae12.svg"}]);