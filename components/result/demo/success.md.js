webpackJsonp([70],{3:function(n,t,e){"use strict";e(7),e(6)},6:function(n,t){},7:function(n,t){},12:function(n,t){"use strict";function e(n,t){var e={},a={};return Object.keys(n).forEach(function(s){t.indexOf(s)!==-1?e[s]=n[s]:a[s]=n[s]}),[e,a]}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=e,n.exports=t["default"]},23:function(n,t,e){"use strict";function a(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function s(n){var t=c.createClass({displayName:"TouchableFeedbackComponent",getInitialState:function(){return{touchFeedback:!1}},setTouchFeedbackState:function(n){this.setState({touchFeedback:n})},onTouchStart:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onTouchEnd:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},onTouchCancel:function(n){this.props.onTouchCancel&&this.props.onTouchCancel(n),this.setTouchFeedbackState(!1)},render:function(){return c.createElement(n,o({},this.props,{touchFeedback:this.state.touchFeedback,onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel}))}});return t}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n};t["default"]=s;var r=e(1),c=a(r);n.exports=t["default"]},24:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function p(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}function u(n){return"string"==typeof n}function i(n){return u(n.type)&&E(n.props.children)?h.cloneElement(n,{},n.props.children.split("").join(" ")):u(n)?(E(n)&&(n=n.split("").join(" ")),h.createElement("span",null,n)):n}Object.defineProperty(t,"__esModule",{value:!0});var f=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},d=function(){function n(n,t){var e=[],a=!0,s=!1,o=void 0;try{for(var r,c=n[Symbol.iterator]();!(a=(r=c.next()).done)&&(e.push(r.value),!t||e.length!==t);a=!0);}catch(p){s=!0,o=p}finally{try{!a&&c["return"]&&c["return"]()}finally{if(s)throw o}}return e}return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),k=e(1),h=s(k),b=e(2),m=a(b),y=e(26),g=a(y),v=e(12),O=a(v),T=e(23),j=a(T),w=/^[\u4e00-\u9fa5]{2}$/,E=w.test.bind(w),P=function(n){function t(){c(this,t);for(var e=arguments.length,a=Array(e),s=0;s<e;s++)a[s]=arguments[s];var o=p(this,n.call.apply(n,[this].concat(a)));return o.onClick=function(){o.props.onClick(o)},o}return l(t,n),t.prototype.render=function(){var n,t=(0,O["default"])(this.props,["children","className","prefixCls","type","size","inline","disabled","htmlType","icon","loading","touchFeedback"]),e=d(t,2),a=e[0],s=a.children,o=a.className,c=a.prefixCls,p=a.type,l=a.size,u=a.inline,k=a.disabled,b=a.htmlType,y=a.icon,v=a.loading,T=a.touchFeedback,j=e[1],w=(0,m["default"])((n={},r(n,o,o),r(n,c,!0),r(n,c+"-primary","primary"===p),r(n,c+"-ghost","ghost"===p),r(n,c+"-warning","warning"===p),r(n,c+"-small","small"===l&&u),r(n,c+"-loading",v),r(n,c+"-inline",u),r(n,c+"-disabled",k),r(n,c+"-touchFeedback",T),n)),E=v?"loading":y,P=h.Children.map(s,i);return h.createElement("button",f({},j,{type:b||"button",className:w,disabled:k,onClick:this.onClick}),E?h.createElement(g["default"],{type:E}):null,P)},t}(h.Component);P.propTypes={prefixCls:k.PropTypes.string,size:k.PropTypes.oneOf(["large","small"]),htmlType:k.PropTypes.oneOf(["submit","button","reset"]),icon:k.PropTypes.bool},P.defaultProps={prefixCls:"am-button",size:"large",inline:!1,disabled:!1,loading:!1,onClick:function(){}},t["default"]=(0,j["default"])(P),n.exports=t["default"]},27:function(n,t,e){"use strict";e(3),e(34),e(28)},28:function(n,t){},127:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function p(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}function u(){}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=e(1),f=s(i),d=e(24),k=a(d),h=e(2),b=a(h),m=function(n){function t(){return c(this,t),p(this,n.apply(this,arguments))}return l(t,n),t.prototype.render=function(){var n,t=this.props,e=t.prefixCls,a=t.imgUrl,s=t.title,o=t.message,c=t.buttonText,p=t.buttonClick,l=t.buttonType,u=t.className,i=(0,b["default"])((n={},r(n,""+e,!0),r(n,u,u),n));return f.createElement("div",{className:i},f.createElement("div",{className:e+"-pic",style:{backgroundImage:"url("+a+")"}}),""!==s?f.createElement("div",{className:e+"-title"},s):null,""!==o?f.createElement("div",{className:e+"-message"},o):null,""!==c?f.createElement("div",{className:e+"-button"},f.createElement(k["default"],{type:l,onClick:p},c)):null)},t}(f.Component);t["default"]=m,m.defaultProps={prefixCls:"am-result",imgUrl:"",title:"",message:"",buttonText:"",buttonType:"",buttonClick:u},n.exports=t["default"]},128:function(n,t,e){"use strict";e(3),e(27),e(143)},143:function(n,t){},791:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}var s=(e(128),e(127)),o=a(s),r=e(1),c=a(r),p=e(4);a(p);n.exports={content:[],meta:{order:0,title:"\u652f\u4ed8\u6210\u529f",filename:"components/result/demo/success.md",id:"components-result-demo-success"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Result <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> ResultExample <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Result</span>\n    <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://zos.alipayobjects.com/rmsportal/yRUDxcBPvzZTDHK.png<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u652f\u4ed8\u6210\u529f<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >message={&lt;div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> fontSize<span class="token punctuation" >:</span> <span class="token string" >\'0.72rem\'</span><span class="token punctuation" >,</span> color<span class="token punctuation" >:</span> <span class="token string" >\'#000\'</span><span class="token punctuation" >,</span> lineHeight<span class="token punctuation" >:</span> <span class="token number" >1</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token number" >998.00</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>del</span><span class="token punctuation" >></span></span><span class="token number" >1098</span>\u5143<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>del</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span>\n  <span class="token operator" >/</span><span class="token operator" >></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ResultExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){return c["default"].createElement(o["default"],{imgUrl:"https://zos.alipayobjects.com/rmsportal/yRUDxcBPvzZTDHK.png",title:"\u652f\u4ed8\u6210\u529f",message:c["default"].createElement("div",null,c["default"].createElement("div",{style:{fontSize:"0.72rem",color:"#000",lineHeight:1}},"998.00"),c["default"].createElement("del",null,"1098\u5143"))})};return c["default"].createElement(n,null)}}}});