(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[42],{"09Wf":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n("CWQg"),r=Object(a["a"])("success","processing","error","default","warning"),o=Object(a["a"])("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime")},"14J3":function(e,t,n){"use strict";n("cIOH"),n("1GLa")},"5ejW":function(e,t,n){e.exports={title:"antd-pro-pages-profile-basic-style-title"}},BMrR:function(e,t,n){"use strict";var a=n("qrJ5");t["a"]=a["a"]},I7zK:function(e,t,n){"use strict";n.r(t);n("IzEo");var a=n("bx4M"),r=(n("g9YV"),n("wCAj")),o=(n("/zsF"),n("PArb")),c=(n("bP8k"),n("gFTJ")),i=n("1OyB"),l=n("vuIU"),s=n("Ji7U"),u=n("LK+K"),m=(n("Awhp"),n("KrTs")),d=n("q1tI"),p=n.n(d),f=n("Hx5s"),b=n("9kvl"),y=n("5ejW"),v=n.n(y),g=[{title:"\u65f6\u95f4",dataIndex:"time",key:"time"},{title:"\u5f53\u524d\u8fdb\u5ea6",dataIndex:"rate",key:"rate"},{title:"\u72b6\u6001",dataIndex:"status",key:"status",render:function(e){return"success"===e?p.a.createElement(m["a"],{status:"success",text:"\u6210\u529f"}):p.a.createElement(m["a"],{status:"processing",text:"\u8fdb\u884c\u4e2d"})}},{title:"\u64cd\u4f5c\u5458ID",dataIndex:"operator",key:"operator"},{title:"\u8017\u65f6",dataIndex:"cost",key:"cost"}],h=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return Object(l["a"])(n,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"profileAndbasic/fetchBasic"})}},{key:"render",value:function(){var e=this.props,t=e.profileAndbasic,n=e.loading,i=t.basicGoods,l=t.basicProgress,s=[];if(i.length){var u=0,m=0;i.forEach((function(e){u+=Number(e.num),m+=Number(e.amount)})),s=i.concat({id:"\u603b\u8ba1",num:u,amount:m})}var d=function(e,t,n){var a={children:e,props:{}};return n===i.length&&(a.props.colSpan=0),a},b=[{title:"\u5546\u54c1\u7f16\u53f7",dataIndex:"id",key:"id",render:function(e,t,n){return n<i.length?p.a.createElement("a",{href:""},e):{children:p.a.createElement("span",{style:{fontWeight:600}},"\u603b\u8ba1"),props:{colSpan:4}}}},{title:"\u5546\u54c1\u540d\u79f0",dataIndex:"name",key:"name",render:d},{title:"\u5546\u54c1\u6761\u7801",dataIndex:"barcode",key:"barcode",render:d},{title:"\u5355\u4ef7",dataIndex:"price",key:"price",align:"right",render:d},{title:"\u6570\u91cf\uff08\u4ef6\uff09",dataIndex:"num",key:"num",align:"right",render:function(e,t,n){return n<i.length?e:p.a.createElement("span",{style:{fontWeight:600}},e)}},{title:"\u91d1\u989d",dataIndex:"amount",key:"amount",align:"right",render:function(e,t,n){return n<i.length?e:p.a.createElement("span",{style:{fontWeight:600}},e)}}];return p.a.createElement(f["c"],null,p.a.createElement(a["a"],{bordered:!1},p.a.createElement(c["a"],{title:"\u9000\u6b3e\u7533\u8bf7",style:{marginBottom:32}},p.a.createElement(c["a"].Item,{label:"\u53d6\u8d27\u5355\u53f7"},"1000000000"),p.a.createElement(c["a"].Item,{label:"\u72b6\u6001"},"\u5df2\u53d6\u8d27"),p.a.createElement(c["a"].Item,{label:"\u9500\u552e\u5355\u53f7"},"1234123421"),p.a.createElement(c["a"].Item,{label:"\u5b50\u8ba2\u5355"},"3214321432")),p.a.createElement(o["a"],{style:{marginBottom:32}}),p.a.createElement(c["a"],{title:"\u7528\u6237\u4fe1\u606f",style:{marginBottom:32}},p.a.createElement(c["a"].Item,{label:"\u7528\u6237\u59d3\u540d"},"\u4ed8\u5c0f\u5c0f"),p.a.createElement(c["a"].Item,{label:"\u8054\u7cfb\u7535\u8bdd"},"18100000000"),p.a.createElement(c["a"].Item,{label:"\u5e38\u7528\u5feb\u9012"},"\u83dc\u9e1f\u4ed3\u50a8"),p.a.createElement(c["a"].Item,{label:"\u53d6\u8d27\u5730\u5740"},"\u6d59\u6c5f\u7701\u676d\u5dde\u5e02\u897f\u6e56\u533a\u4e07\u5858\u8def18\u53f7"),p.a.createElement(c["a"].Item,{label:"\u5907\u6ce8"},"\u65e0")),p.a.createElement(o["a"],{style:{marginBottom:32}}),p.a.createElement("div",{className:v.a.title},"\u9000\u8d27\u5546\u54c1"),p.a.createElement(r["a"],{style:{marginBottom:24},pagination:!1,loading:n,dataSource:s,columns:b,rowKey:"id"}),p.a.createElement("div",{className:v.a.title},"\u9000\u8d27\u8fdb\u5ea6"),p.a.createElement(r["a"],{style:{marginBottom:16},pagination:!1,loading:n,dataSource:l,columns:g})))}}]),n}(d["Component"]);t["default"]=Object(b["b"])((function(e){var t=e.profileAndbasic,n=e.loading;return{profileAndbasic:t,loading:n.effects["profileAndbasic/fetchBasic"]}}))(h)},bP8k:function(e,t,n){"use strict";n("cIOH"),n("jhiw")},gFTJ:function(e,t,n){"use strict";var a=n("q1tI"),r=n("TSYQ"),o=n.n(r),c=n("Zm9Q"),i=n("ACnJ"),l=n("6CfX"),s=n("H84U");function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){return void 0!==e&&null!==e}var d=function(e){var t,n=e.itemPrefixCls,r=e.component,c=e.span,i=e.className,l=e.style,s=e.bordered,d=e.label,p=e.content,f=e.colon,b=r;return s?a["createElement"](b,{className:o()((t={},u(t,"".concat(n,"-item-label"),m(d)),u(t,"".concat(n,"-item-content"),m(p)),t),i),style:l,colSpan:c},m(d)?d:p):a["createElement"](b,{className:o()("".concat(n,"-item"),i),style:l,colSpan:c},d&&a["createElement"]("span",{className:o()("".concat(n,"-item-label"),u({},"".concat(n,"-item-colon"),f))},d),p&&a["createElement"]("span",{className:o()("".concat(n,"-item-content"))},p))},p=d;function f(e,t,n){var r=t.colon,o=t.prefixCls,c=t.bordered,i=n.component,l=n.type,s=n.showLabel,u=n.showContent;return e.map((function(e,t){var n=e.props,m=n.label,d=n.children,f=n.prefixCls,b=void 0===f?o:f,y=n.className,v=n.style,g=n.span,h=void 0===g?1:g,E=e.key;return"string"===typeof i?a["createElement"](p,{key:"".concat(l,"-").concat(E||t),className:y,style:v,span:h,colon:r,component:i,itemPrefixCls:b,bordered:c,label:s?m:null,content:u?d:null}):[a["createElement"](p,{key:"label-".concat(E||t),className:y,style:v,span:1,colon:r,component:i[0],itemPrefixCls:b,bordered:c,label:m}),a["createElement"](p,{key:"content-".concat(E||t),className:y,style:v,span:2*h-1,component:i[1],itemPrefixCls:b,bordered:c,content:d})]}))}var b=function(e){var t=e.prefixCls,n=e.vertical,r=e.row,o=e.index,c=e.bordered;return n?a["createElement"](a["Fragment"],null,a["createElement"]("tr",{key:"label-".concat(o),className:"".concat(t,"-row")},f(r,e,{component:"th",type:"label",showLabel:!0})),a["createElement"]("tr",{key:"content-".concat(o),className:"".concat(t,"-row")},f(r,e,{component:"td",type:"content",showContent:!0}))):a["createElement"]("tr",{key:o,className:"".concat(t,"-row")},f(r,e,{component:c?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0}))},y=b,v=function(e){var t=e.children;return t},g=v;function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e,t){return j(e)||k(e,t)||x(e,t)||w()}function w(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function x(e,t){if(e){if("string"===typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function k(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done);a=!0)if(n.push(c.value),t&&n.length===t)break}catch(l){r=!0,o=l}finally{try{a||null==i["return"]||i["return"]()}finally{if(r)throw o}}return n}}function j(e){if(Array.isArray(e))return e}function C(e){return C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}var N={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function S(e,t){if("number"===typeof e)return e;if("object"===C(e))for(var n=0;n<i["b"].length;n++){var a=i["b"][n];if(t[a]&&void 0!==e[a])return e[a]||N[a]}return 3}function O(e,t,n){var r=e;return(void 0===t||t>n)&&(r=a["cloneElement"](e,{span:n}),Object(l["a"])(void 0===t,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),r}function A(e,t){var n=Object(c["a"])(e).filter((function(e){return e})),a=[],r=[],o=t;return n.forEach((function(e,c){var i,l=null===(i=e.props)||void 0===i?void 0:i.span,s=l||1;if(c===n.length-1)return r.push(O(e,l,o)),void a.push(r);s<o?(o-=s,r.push(e)):(r.push(O(e,s,o)),a.push(r),o=t,r=[])})),a}function P(e){var t,n=e.prefixCls,r=e.title,c=e.column,l=void 0===c?N:c,u=e.colon,m=void 0===u||u,d=e.bordered,p=e.layout,f=e.children,b=e.className,v=e.style,g=e.size,w=a["useContext"](s["b"]),x=w.getPrefixCls,I=w.direction,k=x("descriptions",n),j=a["useState"]({}),O=E(j,2),P=O[0],B=O[1],J=S(l,P);a["useEffect"]((function(){var e=i["a"].subscribe((function(e){"object"===C(l)&&B(e)}));return function(){i["a"].unsubscribe(e)}}),[]);var W=A(f,J);return a["createElement"]("div",{className:o()(k,b,(t={},h(t,"".concat(k,"-").concat(g),g&&"default"!==g),h(t,"".concat(k,"-bordered"),!!d),h(t,"".concat(k,"-rtl"),"rtl"===I),t)),style:v},r&&a["createElement"]("div",{className:"".concat(k,"-title")},r),a["createElement"]("div",{className:"".concat(k,"-view")},a["createElement"]("table",null,a["createElement"]("tbody",null,W.map((function(e,t){return a["createElement"](y,{key:t,index:t,colon:m,prefixCls:k,vertical:"vertical"===p,bordered:d,row:e})}))))))}P.Item=g;t["a"]=P},jCWc:function(e,t,n){"use strict";n("cIOH"),n("1GLa")},jhiw:function(e,t,n){e.exports={"ant-descriptions-title":"ant-descriptions-title","ant-descriptions-view":"ant-descriptions-view","ant-descriptions-row":"ant-descriptions-row","ant-descriptions-item-label":"ant-descriptions-item-label","ant-descriptions-item-colon":"ant-descriptions-item-colon","ant-descriptions-item-no-label":"ant-descriptions-item-no-label","ant-descriptions-item-content":"ant-descriptions-item-content","ant-descriptions-item":"ant-descriptions-item","ant-descriptions-middle":"ant-descriptions-middle","ant-descriptions-small":"ant-descriptions-small","ant-descriptions-bordered":"ant-descriptions-bordered","ant-descriptions-rtl":"ant-descriptions-rtl"}},kPKH:function(e,t,n){"use strict";var a=n("/kpp");t["a"]=a["a"]}}]);