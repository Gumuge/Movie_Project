(this.webpackJsonpmovie_project=this.webpackJsonpmovie_project||[]).push([[0],{34:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},57:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(17),o=c.n(i),s=(c(34),c(9)),r=c(2),l=c(10),j=c.n(l),d=c(13),u=c(11),b=(c(36),"5e6ae076c695e86b13664b973dab9ad5"),h="https://api.themoviedb.org/3/",O="https://image.tmdb.org/t/p/",p=(c(37),c(0));var v=function(e){return Object(p.jsx)("div",{className:"background",style:{backgroundImage:"url(".concat(e.image,")")},children:Object(p.jsxs)("div",{className:"MainDesc",children:[Object(p.jsx)("h2",{children:e.title}),Object(p.jsx)("div",{className:"desc",children:e.desc})]})})},x=c(14),g=c.n(x);c(57);var m=function(e){return Object(p.jsx)("div",{className:"grid_card",children:Object(p.jsx)(s.b,{to:{pathname:"/movie/detail/".concat(e.id)},children:Object(p.jsx)("img",{src:e.poster})})},e.id)};var f=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(),o=Object(u.a)(i,2),s=o[0],r=o[1],l=Object(n.useState)(0),x=Object(u.a)(l,2),f=x[0],k=x[1],_="".concat(h,"movie/popular?api_key=").concat(b,"&language=ko-Korean&page=1");function y(e){return w.apply(this,arguments)}function w(){return(w=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{g.a.get(t).then((function(e){a(e.data.results),r(e.data.results[0]),k(e.data.page)}))}catch(c){console.error(c)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){y(_)}),[]),Object(p.jsxs)("div",{className:"MainPage",children:[s&&Object(p.jsx)(v,{image:"".concat(O,"w1280").concat(s.backdrop_path),title:s.original_title,desc:s.overview}),Object(p.jsxs)("div",{className:"title",children:[Object(p.jsx)("h1",{children:"Movies by latest"}),Object(p.jsx)("hr",{})]}),Object(p.jsx)("div",{className:"contents",children:c.map((function(e){return Object(p.jsx)(m,{poster:"".concat(O,"w500").concat(e.poster_path),id:e.id},e.id)}))}),Object(p.jsxs)("div",{className:"control",children:[Object(p.jsx)("button",{onClick:function(){y(_="".concat(h,"movie/popular?api_key=").concat(b,"&language=ko-Korean&page=").concat(f-1)),console.log("now page = ".concat(f-1))},children:"previous"}),Object(p.jsx)("div",{className:"page",children:f}),Object(p.jsx)("button",{onClick:function(){y(_="".concat(h,"movie/popular?api_key=").concat(b,"&language=ko-Korean&page=").concat(f+1)),console.log("now page = ".concat(f+1))},children:"next"})]})]})};c(63);var k=function(e){var t=e.match.params.MovieId,c="".concat(h,"movie/").concat(t,"?api_key=").concat(b,"&language=ko-Korean"),a=Object(n.useState)(),i=Object(u.a)(a,2),o=i[0],s=i[1];function r(){return(r=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{g.a.get(t).then((function(e){console.log(e),s(e.data)}))}catch(c){console.error(c)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(e){r.apply(this,arguments)}(c)}),[]),console.log(o),console.log(e),Object(p.jsxs)("div",{className:"Info",children:[o&&Object(p.jsx)(v,{image:"".concat(O,"w1280").concat(o.backdrop_path),title:o.original_title,desc:o.overview}),Object(p.jsx)("div",{className:"InfoTitle",children:"Movie Info"}),Object(p.jsx)("div",{children:Object(p.jsxs)("table",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Title"}),Object(p.jsx)("td",{children:null===o||void 0===o?void 0:o.title}),Object(p.jsx)("th",{children:"Popularity"}),Object(p.jsx)("td",{children:null===o||void 0===o?void 0:o.popularity}),Object(p.jsx)("th",{children:"Running Time"}),Object(p.jsxs)("td",{children:[null===o||void 0===o?void 0:o.runtime,"min"]})]}),Object(p.jsx)("tr",{}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Release Date"}),Object(p.jsx)("td",{children:null===o||void 0===o?void 0:o.release_date}),Object(p.jsx)("th",{children:"Status"}),Object(p.jsx)("td",{colSpan:3,children:null===o||void 0===o?void 0:o.status})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Vote Average"}),Object(p.jsx)("td",{children:null===o||void 0===o?void 0:o.vote_average}),Object(p.jsx)("th",{children:"Vote Count"}),Object(p.jsx)("td",{colSpan:3,children:null===o||void 0===o?void 0:o.vote_count})]})]})})]})};var _=function(){return Object(p.jsx)(s.a,{children:Object(p.jsx)("div",{children:Object(p.jsxs)(r.c,{children:[Object(p.jsx)(r.a,{path:"/Movie_Project",exact:!0,children:Object(p.jsx)(f,{})}),Object(p.jsx)(r.a,{exact:!0,path:"/movie/detail/:MovieId",component:k})]})})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,65)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),i(e),o(e)}))};o.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(_,{})}),document.getElementById("root")),o.a.render(Object(p.jsx)(s.a,{basename:"/Movie_Project",children:Object(p.jsx)(_,{})}),document.getElementById("root")),y()}},[[64,1,2]]]);
//# sourceMappingURL=main.1f17131b.chunk.js.map