"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[108],{8108:function(e,t,n){n.r(t);var i=n(885),r=n(4569),c=n.n(r),a=n(2791),s=n(6871),o=n(501),l=n(184);t.default=function(){var e,t,n=(0,s.UO)().movieId,r=(0,a.useState)({}),h=(0,i.Z)(r,2),d=h[0],p=h[1],u=null!==(e=null===(t=(0,s.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";(0,a.useEffect)((function(){return function(e){c().get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=9e5cf4f45ae60b7760108794dc459813&language=en-US")).then((function(e){p(e.data)}))}(n)}),[n]);var f=d.title,j=d.poster_path,v=d.overview;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.rU,{to:u,children:"Back"}),(0,l.jsx)("h1",{children:f}),(0,l.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(j),alt:"Poster to ".concat(f),height:"450px"}),(0,l.jsx)("p",{children:v}),(0,l.jsx)("p",{children:"Additional information"}),(0,l.jsx)("p",{children:(0,l.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,l.jsx)("p",{children:(0,l.jsx)(o.rU,{to:"reviews",children:"Reviews"})}),(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),children:(0,l.jsx)(s.j3,{})})]})}}}]);
//# sourceMappingURL=108.69183a21.chunk.js.map