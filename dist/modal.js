!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Bulma",[],t):"object"==typeof exports?exports.Bulma=t():e.Bulma=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(2),i=(r=o)&&r.__esModule?r:{default:r};function a(e){return this instanceof a?e instanceof a?e:(e instanceof HTMLElement?this._elem=e:this._elem=document.querySelector(e),e||(this._elem=document.createElement("div")),this._elem.hasOwnProperty(a.id)||(this._elem[a.id]=i.default.uid++),this):new a(e)}a.VERSION="0.11.0",a.id="bulma-"+(new Date).getTime(),a.cache=new i.default,a.plugins={},a.create=function(e,t){if(!e||!a.plugins.hasOwnProperty(e))throw new Error("[BulmaJS] A plugin with the key '"+e+"' has not been registered.");return new a.plugins[e].handler(t)},a.registerPlugin=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(!e)throw new Error("[BulmaJS] Key attribute is required.");a.plugins[e]={priority:n,handler:t},a.prototype[e]=function(t){return new a.plugins[e].handler(t,this)}},a.parseDocument=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=Object.keys(a.plugins).sort((function(e,t){return a.plugins[e].priority<a.plugins[t].priority}));a.each(t,(function(t){a.plugins[t].handler.hasOwnProperty("parseDocument")?a.plugins[t].handler.parseDocument(e):console.error("[BulmaJS] Plugin "+t+" does not have a parseDocument method. Automatic document parsing is not possible for this plugin.")}))},a.createElement=function(e,t){t||(t=[]),"string"==typeof t&&(t=[t]);var n=document.createElement(e);return a.each(t,(function(e){n.classList.add(e)})),n},a.findOrCreateElement=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"div",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=t.querySelector(e);if(!o){0===r.length&&(r=e.split(".").filter((function(e){return e})));var i=a.createElement(n,r);return t.appendChild(i),i}return o},a.each=function(e,t){var n=void 0;for(n=0;n<e.length;n++)t(e[n],n)},a.ajax=function(e){return new Promise((function(t,n){var r=new XMLHttpRequest;r.open("GET",e,!0),r.onload=function(){r.status>=200&&r.status<400?t(a._stripScripts(r.responseText)):n()},r.onerror=function(){return n()},r.send()}))},a._stripScripts=function(e){var t=document.createElement("div");t.innerHTML=e;for(var n=t.getElementsByTagName("script"),r=n.length;r--;)n[r].parentNode.removeChild(n[r]);return t.innerHTML.replace(/  +/g," ")},a.prototype.data=function(e,t){return t?(a.cache.set(this._elem[a.id],e,t),this):a.cache.get(this._elem[a.id],e)},a.prototype.destroyData=function(){return a.cache.destroy(this._elem[a.id]),this},a.prototype.getElement=function(){return this._elem},document.addEventListener("DOMContentLoaded",(function(){window.hasOwnProperty("bulmaOptions")&&!1===window.bulmaOptions.autoParseDocument||a.parseDocument()})),t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=u(n(3)),a=u(n(0));function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments[1];if(l(this,e),t.root=n instanceof a.default?n._elem:n,this.config=new i.default(r({},this.constructor.defaultConfig(),t)),!n&&!this.config.has("parent"))throw new Error("A plugin requires a root and/or a parent.");this.parent=this.config.get("parent",t.root?t.root.parentNode:null),this._events={}}return o(e,null,[{key:"defaultConfig",value:function(){return{}}}]),o(e,[{key:"on",value:function(e,t){this._events.hasOwnProperty(e)||(this._events[e]=[]),this._events[e].push(t)}},{key:"trigger",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this._events.hasOwnProperty(e))for(var n=0;n<this._events[e].length;n++)this._events[e][n](t)}},{key:"destroy",value:function(){(0,a.default)(this.root).destroyData()}}]),e}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data={}}return r(e,[{key:"set",value:function(e,t,n){this._data.hasOwnProperty(e)||(this._data[e]={}),this._data[e][t]=n}},{key:"get",value:function(e,t){if(this._data.hasOwnProperty(e))return this._data[e][t]}},{key:"destroy",value:function(e){this._data.hasOwnProperty(e)&&delete this._data[e]}}]),e}();o.uid=1,t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(i(this,e),"object"!==(void 0===t?"undefined":r(t)))throw new TypeError("initialConfig must be of type object.");this._items=t}return o(e,[{key:"set",value:function(e,t){if(!e||!t)throw new Error("A key and value must be provided when setting a new option.");this._items[e]=t}},{key:"has",value:function(e){if(!e)throw new Error("A key must be provided.");return this._items.hasOwnProperty(e)&&this._items[e]}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t&&!this.has(e)?"function"==typeof t?t():t:this._items[e]}}]),e}();t.default=a},,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Modal=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n(0)),i=a(n(1));function a(e){return e&&e.__esModule?e:{default:e}}var u=t.Modal=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.style=r.config.get("style"),r.root=r.config.get("root"),r.root.classList.contains("modal")||r.root.classList.add("modal"),r.parent?r.parent.appendChild(r.root):r.root.parentNode?r.parent=r.root.parentNode:(r.parent=document.body,r.parent.appendChild(r.root)),r.background=o.default.findOrCreateElement(".modal-background",r.root),r.content="card"===r.style?o.default.findOrCreateElement(".modal-card",r.root):o.default.findOrCreateElement(".modal-content",r.root),r.closable=r.config.get("closable"),r.body=r.config.get("body"),r.title=r.config.get("title"),r.config.get("bodyUrl")?o.default.ajax(r.config.get("bodyUrl")).then((function(e){r.body=e,r.buildModal()})):r.buildModal(),(0,o.default)(r.root).data("modal",r),r.trigger("init"),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,null,[{key:"parseDocument",value:function(){}},{key:"defaultConfig",value:function(){return{style:"card",closable:!0}}}]),r(t,[{key:"buildModal",value:function(){"card"===this.style?this.createCardStructure():this.content.innerHTML||(this.content.innerHTML=this.body),this.closable&&(this.closeButton="card"===this.style?o.default.findOrCreateElement(".delete",this.header,"button"):o.default.findOrCreateElement(".modal-close",this.root,"button")),"card"===this.style&&this.createButtons(),this.setupEvents()}},{key:"createCardStructure",value:function(){this.header=o.default.findOrCreateElement(".modal-card-head",this.content,"header"),this.headerTitle=o.default.findOrCreateElement(".modal-card-title",this.header,"p"),this.headerTitle.innerHTML||(this.headerTitle.innerHTML=this.title),this.cardBody=o.default.findOrCreateElement(".modal-card-body",this.content,"section"),this.cardBody.innerHTML||(this.cardBody.innerHTML=this.body),this.footer=o.default.findOrCreateElement(".modal-card-foot",this.content,"footer")}},{key:"setupEvents",value:function(){var e=this;this.closable&&(this.closeButton.addEventListener("click",this.close.bind(this)),this.keyupListenerBound=function(t){return e.keyupListener(t)},document.addEventListener("keyup",this.keyupListenerBound),this.background.addEventListener("click",this.close.bind(this)))}},{key:"createButtons",value:function(){var e=this.config.get("buttons",[]),t=this;o.default.each(e,(function(e){var n=o.default.createElement("button",e.classes);n.innerHTML=e.label,n.addEventListener("click",(function(t){e.onClick(t)})),t.footer.appendChild(n)}))}},{key:"open",value:function(){this.root.classList.add("is-active"),document.documentElement.classList.add("is-clipped"),this.trigger("open")}},{key:"close",value:function(){this.root.classList.remove("is-active"),document.documentElement.classList.remove("is-clipped"),this.trigger("close")}},{key:"keyupListener",value:function(e){if(this.root.classList.contains("is-active")){var t=e.key||e.keyCode;"Escape"!==t&&"Esc"!==t&&27!==t||this.close()}}},{key:"destroy",value:function(){(function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this),this.root.remove(),this.parent=null,this.root=null,this.background=null,this.content=null,"card"===this.style&&(this.header=null,this.headerTitle=null,this.cardBody=null,this.footer=null),this.closable&&(this.closeButton=null,document.removeEventListener("keyup",this.keyupListenerBound)),this.config.gets=[],this.trigger("destroyed")}}]),t}(i.default);o.default.registerPlugin("modal",u),t.default=o.default}]).default}));