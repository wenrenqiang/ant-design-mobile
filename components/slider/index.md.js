webpackJsonp([117],{804:function(t,e,d){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}var r=d(1),n=(o(r),d(4));o(n);t.exports={content:["section",["h3","\u5b9a\u4e49\uff0fDefinition"],["p","\u6ed1\u5757\u5141\u8bb8\u7528\u6237\u5728\u4e00\u4e2a\u9650\u5b9a\u8303\u56f4\u5185\u8c03\u6574\u67d0\u4e2a\u6570\u503c\u6216\u8fdb\u7a0b\u3002"],["h3","\u89c4\u5219 / Rule"],["ul",["li",["p","\u7531\u4e00\u6761\u6c34\u5e73\u7684\u8f68\u8ff9\u548c\u4e00\u4e2aThumb(\u6ed1\u5757\u4e2d\u652f\u6301\u7528\u6237\u6c34\u5e73\u62d6\u62fd\u7684\u5706\u5f62\u63a7\u4ef6)\u7ec4\u6210\uff1b"]],["li",["p","\u5de6\u8fb9\u548c\u53f3\u8fb9\u652f\u6301\u4f7f\u7528\u81ea\u5b9a\u4e49\u56fe\u7247\u6765\u8868\u8ff0\u76f8\u5bf9\u7684\u6700\u5c0f\u503c\u4e0e\u6700\u5927\u503c\u7684\u542b\u4e49\uff1b"]],["li",["p","\u586b\u5145\u8f68\u9053\u5de6\u8fb9\u7f18\u6700\u5c0f\u503c\u4e4b\u95f4\u5230Thumb\u4e4b\u95f4\u7684\u90e8\u5206\uff1b"]],["li",["p","\u5b9a\u4e49Thumb\u7684\u5916\u89c2\uff0c\u8ba9\u7528\u6237\u4e00\u770b\u5c31\u77e5\u9053\u6ed1\u5757\u5f53\u524d\u7684\u72b6\u6001\u3002"]]]],meta:{category:"UI Controls",type:"UI Controls",chinese:"\u6ed1\u52a8\u8f93\u5165\u6761",english:"Slider",filename:"components/slider/index.md"},toc:["ul",["li",["a",{href:"#API"},"API"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"],["th","\u8bf4\u660e"]]],["tbody",["tr",["td","min"],["td","Number"],["td","0"],["td","\u6700\u5c0f\u503c"]],["tr",["td","max"],["td","Number"],["td","100"],["td","\u6700\u5927\u503c"]],["tr",["td","marks ",["code","web"]],["td","Object{Number:String}"],["td","{ }"],["td","\u523b\u5ea6\u6807\u8bb0\uff0ckey \u7684\u7c7b\u578b\u5fc5\u987b\u4e3a ",["code","Number"]," \u4e14\u53d6\u503c\u5728\u95ed\u533a\u95f4 ","[min, max]"," \u5185"]],["tr",["td","step"],["td","Number or null"],["td","1"],["td","\u6b65\u957f\uff0c\u53d6\u503c\u5fc5\u987b\u5927\u4e8e 0\uff0c\u5e76\u4e14\u53ef\u88ab (max - min) \u6574\u9664\u3002\u5f53 ",["code","marks"]," \u4e0d\u4e3a\u7a7a\u5bf9\u8c61\u65f6\uff0c\u53ef\u4ee5\u8bbe\u7f6e ",["code","step"]," \u4e3a ",["code","null"],"\uff0c\u6b64\u65f6 Slider \u7684\u53ef\u9009\u503c\u4ec5\u6709 marks \u6807\u51fa\u6765\u7684\u90e8\u5206\u3002"]],["tr",["td","dots ",["code","web"]],["td","Boolean"],["td","false"],["td","\u662f\u5426\u53ea\u80fd\u62d6\u62fd\u5230\u523b\u5ea6\u4e0a"]],["tr",["td","value"],["td","Number"],["td"],["td","\u8bbe\u7f6e\u5f53\u524d\u53d6\u503c\u3002"]],["tr",["td","defaultValue"],["td","Number"],["td","0 or ","[0, 0]"],["td","\u8bbe\u7f6e\u521d\u59cb\u53d6\u503c\u3002"]],["tr",["td","included ",["code","web"]],["td","Boolean"],["td","true"],["td",["code","marks"]," \u4e0d\u4e3a\u7a7a\u5bf9\u8c61\u65f6\u6709\u6548\uff0c\u503c\u4e3a true \u65f6\u8868\u793a\u503c\u4e3a\u5305\u542b\u5173\u7cfb\uff0cfalse \u8868\u793a\u5e76\u5217"]],["tr",["td","disabled"],["td","Boolean"],["td","false"],["td","\u503c\u4e3a ",["code","true"]," \u65f6\uff0c\u6ed1\u5757\u4e3a\u7981\u7528\u72b6\u6001"]],["tr",["td","onChange"],["td","Function"],["td","Noop"],["td","\u5f53 Slider \u7684\u503c\u53d1\u751f\u6539\u53d8\u65f6\uff0c\u4f1a\u89e6\u53d1 onChange \u4e8b\u4ef6\uff0c\u5e76\u628a\u6539\u53d8\u540e\u7684\u503c\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002"]],["tr",["td","onAfterChange"],["td","Function"],["td","Noop"],["td","\u4e0e ",["code","ontouchend"]," \u89e6\u53d1\u65f6\u673a\u4e00\u81f4\uff0c\u628a\u5f53\u524d\u503c\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002"]],["tr",["td","tipFormatter ",["code","web"]],["td","Function or null"],["td","IDENTITY"],["td","Slider \u4f1a\u628a\u5f53\u524d\u503c\u4f20\u7ed9 ",["code","tipFormatter"],"\uff0c\u5e76\u5728 Tooltip \u4e2d\u663e\u793a ",["code","tipFormatter"]," \u7684\u8fd4\u56de\u503c\uff0c\u82e5\u4e3a null\uff0c\u5219\u9690\u85cf Tooltip\u3002"]]]]]}}});