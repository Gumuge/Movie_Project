(this.webpackJsonpmovie_project=this.webpackJsonpmovie_project||[]).push([[0],{29:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},52:function(e,t,c){},58:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(7),i=c.n(s),o=(c(29),c(8)),r=c.n(o),d=c(21),j=c(11),l=(c(31),"5e6ae076c695e86b13664b973dab9ad5"),u="https://api.themoviedb.org/3/",b="https://image.tmdb.org/t/p/",h=(c(32),c(1));var p=function(e){return Object(h.jsx)("div",{className:"background",style:{backgroundImage:"url(".concat(e.image,")")},children:Object(h.jsxs)("div",{className:"MainDesc",children:[Object(h.jsx)("h2",{children:e.title}),Object(h.jsx)("div",{className:"desc",children:e.desc})]})})},g=c(22),v=c.n(g);c(52);var m=function(e){return Object(h.jsx)("div",{className:"grid_card",children:Object(h.jsx)("img",{src:e.poster})},e.id)};var O=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(),i=Object(j.a)(s,2),o=i[0],g=i[1];function O(){return(O=Object(d.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t="".concat(u,"movie/popular?api_key=").concat(l,"&language=ko-Korean&page=1"),v.a.get(t).then((function(e){a(e.data.results),g(e.data.results[0])}))}catch(c){console.error(c)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){O.apply(this,arguments)}()}),[]),console.log(c),console.log(o),Object(h.jsxs)("div",{className:"MainPage",children:[o&&Object(h.jsx)(p,{image:"".concat(b,"w1280").concat(null===o||void 0===o?void 0:o.backdrop_path),title:o.original_title,desc:o.overview}),Object(h.jsxs)("div",{className:"title",children:[Object(h.jsx)("h1",{children:"Movies by latest"}),Object(h.jsx)("hr",{})]}),Object(h.jsx)("div",{className:"contents",children:c.map((function(e){return Object(h.jsx)(m,{poster:"".concat(b,"w500").concat(e.poster_path),id:e.id},e.id)}))})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,59)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))},x=c(24);i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),i.a.render(Object(h.jsx)(x.a,{basename:"/Movie_Project",children:Object(h.jsx)(O,{})}),document.getElementById("root")),f()}},[[58,1,2]]]);
//# sourceMappingURL=main.987d2e6b.chunk.js.map