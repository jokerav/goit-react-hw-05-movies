"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[461],{8565:function(e,t,r){r.d(t,{H:function(){return s},I:function(){return i}});var n=r(5861),a=r(7757),u=r.n(a),o=r(4569),c=r.n(o),i=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("\nhttps://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=9e5cf4f45ae60b7760108794dc459813&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,c().get("\nhttps://api.themoviedb.org/3/search/movie?api_key=9e5cf4f45ae60b7760108794dc459813&language=en-US&query=".concat(t,"&page=1&include_adult=false"));case 4:return r=e.sent,e.abrupt("return",r.data.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},461:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var n=r(907);var a=r(181);function u(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=r(885),c=r(2791),i=r(8565),s=r(501),f=r(184),l=(0,c.lazy)((function(){return r.e(241).then(r.bind(r,4241))})),p=function(){var e=(0,s.lr)({}),t=(0,o.Z)(e,2),r=t[0],n=t[1],a=r.get("querry"),p=(0,c.useState)(a),h=(0,o.Z)(p,2),m=h[0],d=h[1],v=(0,c.useState)([]),b=(0,o.Z)(v,2),y=b[0],g=b[1];return(0,c.useEffect)((function(){(0,i.H)(a).then((function(e){return g(u(e))}))}),[a]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n({querry:m.toLowerCase().trim()}),d(m.toLowerCase().trim())},children:[(0,f.jsx)("input",{onChange:function(e){var t=e.currentTarget.value;d(t)},value:m,name:"input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search films"}),(0,f.jsx)("button",{type:"submit",children:(0,f.jsx)("span",{children:"Search"})})]}),y.length>0&&(0,f.jsx)(l,{movies:y})]})}}}]);
//# sourceMappingURL=461.e6be4433.chunk.js.map