"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[933],{9933:function(e,t,n){n.r(t);var a=n(885),r=n(2791),u=n(4569),o=n.n(u),c=n(501),s=n(184),i=(0,r.lazy)((function(){return n.e(241).then(n.bind(n,4241))}));t.default=function(){var e=(0,c.lr)({}),t=(0,a.Z)(e,2),n=t[0],u=t[1],l=n.get("querry"),f=(0,r.useState)(l),h=(0,a.Z)(f,2),p=h[0],m=h[1],d=(0,r.useState)([]),g=(0,a.Z)(d,2),v=g[0],b=g[1];return(0,r.useEffect)((function(){var e;null!==(e=l)&&o().get("\nhttps://api.themoviedb.org/3/search/movie?api_key=9e5cf4f45ae60b7760108794dc459813&language=en-US&query=".concat(e,"&page=1&include_adult=false")).then((function(e){b(e.data.results)}))}),[l]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u({querry:p.toLowerCase().trim()}),m(p.toLowerCase().trim())},children:[(0,s.jsx)("input",{onChange:function(e){var t=e.currentTarget.value;m(t)},value:p,name:"input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search films"}),(0,s.jsx)("button",{type:"submit",children:(0,s.jsx)("span",{children:"Search"})})]}),v.length>0&&(0,s.jsx)(i,{movies:v})]})}}}]);
//# sourceMappingURL=933.b1f9e9ae.chunk.js.map