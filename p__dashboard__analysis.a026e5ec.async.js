(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"14J3":function(e,t,a){"use strict";a("cIOH"),a("1GLa")},BMrR:function(e,t,a){"use strict";var n=a("qrJ5");t["a"]=n["a"]},GZ0F:function(e,t,a){"use strict";var n=a("q1tI"),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},o=r,l=a("6VBw"),s=function(e,t){return n["createElement"](l["a"],Object.assign({},e,{ref:t,icon:o}))};s.displayName="EllipsisOutlined";t["a"]=n["forwardRef"](s)},KBXm:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};t.default=n},UXoT:function(e,t,a){e.exports={iconGroup:"antd-pro-pages-dashboard-analysis-style-iconGroup",anticon:"antd-pro-pages-dashboard-analysis-style-anticon",rankingList:"antd-pro-pages-dashboard-analysis-style-rankingList",rankingItemNumber:"antd-pro-pages-dashboard-analysis-style-rankingItemNumber",active:"antd-pro-pages-dashboard-analysis-style-active",rankingItemTitle:"antd-pro-pages-dashboard-analysis-style-rankingItemTitle",salesExtra:"antd-pro-pages-dashboard-analysis-style-salesExtra",currentDate:"antd-pro-pages-dashboard-analysis-style-currentDate",salesCard:"antd-pro-pages-dashboard-analysis-style-salesCard",salesBar:"antd-pro-pages-dashboard-analysis-style-salesBar",salesRank:"antd-pro-pages-dashboard-analysis-style-salesRank",salesCardExtra:"antd-pro-pages-dashboard-analysis-style-salesCardExtra",salesTypeRadio:"antd-pro-pages-dashboard-analysis-style-salesTypeRadio",offlineCard:"antd-pro-pages-dashboard-analysis-style-offlineCard",trendText:"antd-pro-pages-dashboard-analysis-style-trendText",rankingTitle:"antd-pro-pages-dashboard-analysis-style-rankingTitle",salesExtraWrap:"antd-pro-pages-dashboard-analysis-style-salesExtraWrap"}},cCPh:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("jiSn"));function r(e){return e&&e.__esModule?e:{default:e}}var o=n;t.default=o,e.exports=o},jCWc:function(e,t,a){"use strict";a("cIOH"),a("1GLa")},jXcd:function(e,t,a){"use strict";a.r(t);a("14J3");var n=a("BMrR"),r=(a("jCWc"),a("kPKH")),o=(a("qVdP"),a("jsC+")),l=(a("lUTK"),a("BvKs")),s=a("1OyB"),i=a("vuIU"),c=a("Ji7U"),u=a("LK+K"),f=a("GZ0F"),p=a("q1tI"),d=a.n(p),y=a("Hx5s"),b=a("9kvl"),h=(a("T2oS"),a("W9HT")),m=function(){return d.a.createElement("div",{style:{paddingTop:100,textAlign:"center"}},d.a.createElement(h["a"],{size:"large"}))},g=a("wd/R"),v=a.n(g);function O(e){return 1*e<10?"0".concat(e):e}function E(e){var t=new Date,a=864e5;if("today"===e)return t.setHours(0),t.setMinutes(0),t.setSeconds(0),[v()(t),v()(t.getTime()+(a-1e3))];if("week"===e){var n=t.getDay();t.setHours(0),t.setMinutes(0),t.setSeconds(0),0===n?n=6:n-=1;var r=t.getTime()-n*a;return[v()(r),v()(r+(7*a-1e3))]}var o=t.getFullYear();if("month"===e){var l=t.getMonth(),s=v()(t).add(1,"months"),i=s.year(),c=s.month();return[v()("".concat(o,"-").concat(O(l+1),"-01 00:00:00")),v()(v()("".concat(i,"-").concat(O(c+1),"-01 00:00:00")).valueOf()-1e3)]}return[v()("".concat(o,"-01-01 00:00:00")),v()("".concat(o,"-12-31 23:59:59"))]}var P=a("UXoT"),T=a.n(P),k=d.a.lazy((function(){return Promise.all([a.e(3),a.e(4),a.e(60),a.e(12),a.e(62)]).then(a.bind(null,"CqmX"))})),S=d.a.lazy((function(){return Promise.all([a.e(3),a.e(4),a.e(5),a.e(63),a.e(59)]).then(a.bind(null,"qpEo"))})),C=d.a.lazy((function(){return Promise.all([a.e(2),a.e(3),a.e(4),a.e(11),a.e(58)]).then(a.bind(null,"ceP7"))})),j=d.a.lazy((function(){return Promise.all([a.e(2),a.e(3),a.e(4),a.e(12),a.e(65)]).then(a.bind(null,"8gNO"))})),w=d.a.lazy((function(){return Promise.all([a.e(3),a.e(4),a.e(61),a.e(12),a.e(64)]).then(a.bind(null,"vvVX"))})),D=function(e){Object(c["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;Object(s["a"])(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r)),e.state={salesType:"all",currentTabKey:"",rangePickerValue:E("year")},e.reqRef=0,e.timeoutId=0,e.handleChangeSalesType=function(t){e.setState({salesType:t.target.value})},e.handleTabChange=function(t){e.setState({currentTabKey:t})},e.handleRangePickerChange=function(t){var a=e.props.dispatch;e.setState({rangePickerValue:t}),a({type:"dashboardAndanalysis/fetchSalesData"})},e.selectDate=function(t){var a=e.props.dispatch;e.setState({rangePickerValue:E(t)}),a({type:"dashboardAndanalysis/fetchSalesData"})},e.isActive=function(t){var a=e.state.rangePickerValue;if(!a)return"";var n=E(t);return n&&a[0]&&a[1]&&a[0].isSame(n[0],"day")&&a[1].isSame(n[1],"day")?T.a.currentDate:""},e}return Object(i["a"])(a,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;this.reqRef=requestAnimationFrame((function(){e({type:"dashboardAndanalysis/fetch"})}))}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"dashboardAndanalysis/clear"}),cancelAnimationFrame(this.reqRef),clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e,t=this.state,a=t.rangePickerValue,s=t.salesType,i=t.currentTabKey,c=this.props,u=c.dashboardAndanalysis,b=c.loading,h=u.visitData,g=u.visitData2,v=u.salesData,O=u.searchData,E=u.offlineData,P=u.offlineChartData,D=u.salesTypeData,x=u.salesTypeDataOnline,R=u.salesTypeDataOffline;e="all"===s?D:"online"===s?x:R;var _=d.a.createElement(l["a"],null,d.a.createElement(l["a"].Item,null,"\u64cd\u4f5c\u4e00"),d.a.createElement(l["a"].Item,null,"\u64cd\u4f5c\u4e8c")),A=d.a.createElement("span",{className:T.a.iconGroup},d.a.createElement(o["a"],{overlay:_,placement:"bottomRight"},d.a.createElement(f["a"],null))),I=i||E[0]&&E[0].name;return d.a.createElement(y["b"],null,d.a.createElement(d.a.Fragment,null,d.a.createElement(p["Suspense"],{fallback:d.a.createElement(m,null)},d.a.createElement(k,{loading:b,visitData:h})),d.a.createElement(p["Suspense"],{fallback:null},d.a.createElement(S,{rangePickerValue:a,salesData:v,isActive:this.isActive,handleRangePickerChange:this.handleRangePickerChange,loading:b,selectDate:this.selectDate})),d.a.createElement(n["a"],{gutter:24,style:{marginTop:24}},d.a.createElement(r["a"],{xl:12,lg:24,md:24,sm:24,xs:24},d.a.createElement(p["Suspense"],{fallback:null},d.a.createElement(C,{loading:b,visitData2:g,searchData:O,dropdownGroup:A}))),d.a.createElement(r["a"],{xl:12,lg:24,md:24,sm:24,xs:24},d.a.createElement(p["Suspense"],{fallback:null},d.a.createElement(j,{dropdownGroup:A,salesType:s,loading:b,salesPieData:e,handleChangeSalesType:this.handleChangeSalesType})))),d.a.createElement(p["Suspense"],{fallback:null},d.a.createElement(w,{activeKey:I,loading:b,offlineData:E,offlineChartData:P,handleTabChange:this.handleTabChange}))))}}]),a}(p["Component"]);t["default"]=Object(b["b"])((function(e){var t=e.dashboardAndanalysis,a=e.loading;return{dashboardAndanalysis:t,loading:a.effects["dashboardAndanalysis/fetch"]}}))(D)},jiSn:function(e,t,a){"use strict";function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(a("q1tI")),o=s(a("KBXm")),l=s(a("KQxl"));function s(e){return e&&e.__esModule?e:{default:e}}function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function c(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var l=r?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}return a.default=e,t&&t.set(e,a),a}var u=function(e,t){return r.createElement(l.default,Object.assign({},e,{ref:t,icon:o.default}))};u.displayName="EllipsisOutlined";var f=r.forwardRef(u);t.default=f},"jsC+":function(e,t,a){"use strict";var n=a("XBQK"),r=a("q1tI"),o=a("TSYQ"),l=a.n(o),s=a("cCPh"),i=a.n(s),c=a("2/Rp"),u=a("H84U");function f(e){return f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p.apply(this,arguments)}function d(e,t){return g(e)||m(e,t)||b(e,t)||y()}function y(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function b(e,t){if(e){if("string"===typeof e)return h(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function m(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done);n=!0)if(a.push(l.value),t&&a.length===t)break}catch(i){r=!0,o=i}finally{try{n||null==s["return"]||s["return"]()}finally{if(r)throw o}}return a}}function g(e){if(Array.isArray(e))return e}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function E(e,t,a){return t&&O(e.prototype,t),a&&O(e,a),e}function P(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function k(e){return function(){var t,a=w(e);if(j()){var n=w(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return S(this,t)}}function S(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?C(e):t}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var D=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},x=c["a"].Group,R=function(e){P(a,e);var t=k(a);function a(){var e;return v(this,a),e=t.apply(this,arguments),e.renderButton=function(t){var a=t.getPopupContainer,o=t.getPrefixCls,s=e.props,u=s.prefixCls,f=s.type,y=s.disabled,b=s.onClick,h=s.htmlType,m=s.children,g=s.className,v=s.overlay,O=s.trigger,E=s.align,P=s.visible,T=s.onVisibleChange,k=s.placement,S=s.getPopupContainer,C=s.href,j=s.icon,w=void 0===j?r["createElement"](i.a,null):j,R=s.title,_=s.buttonsRender,A=D(s,["prefixCls","type","disabled","onClick","htmlType","children","className","overlay","trigger","align","visible","onVisibleChange","placement","getPopupContainer","href","icon","title","buttonsRender"]),I=o("dropdown-button",u),M={align:E,overlay:v,disabled:y,trigger:y?[]:O,onVisibleChange:T,placement:k,getPopupContainer:S||a};"visible"in e.props&&(M.visible=P);var B=r["createElement"](c["a"],{type:f,disabled:y,onClick:b,htmlType:h,href:C,title:R},m),K=r["createElement"](c["a"],{type:f},w),q=_([B,K]),z=d(q,2),V=z[0],N=z[1];return r["createElement"](x,p({},A,{className:l()(I,g)}),V,r["createElement"](n["a"],M,N))},e}return E(a,[{key:"render",value:function(){return r["createElement"](u["a"],null,this.renderButton)}}]),a}(r["Component"]);R.__ANT_BUTTON=!0,R.defaultProps={placement:"bottomRight",type:"default",buttonsRender:function(e){return e}},n["a"].Button=R;t["a"]=n["a"]},kPKH:function(e,t,a){"use strict";var n=a("/kpp");t["a"]=n["a"]}}]);