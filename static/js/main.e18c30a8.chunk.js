(this.webpackJsonpmovie_project=this.webpackJsonpmovie_project||[]).push([[0],{21:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(14),i=c.n(s),o=(c(21),c(4)),r=c.n(o),d=c(15),l=c(5),u=(c(23),"5e6ae076c695e86b13664b973dab9ad5"),j="https://api.themoviedb.org/3/",b="https://image.tmdb.org/t/p/",p=(c(24),c(0));var h=function(e){return Object(p.jsx)("div",{className:"background",style:{backgroundImage:"url(".concat(e.image,")")},children:Object(p.jsxs)("div",{className:"MainDesc",children:[Object(p.jsx)("h2",{children:e.title}),Object(p.jsx)("div",{className:"desc",children:e.desc})]})})},g=c(16),v=c.n(g);c(44);var f=function(e){return Object(p.jsx)("div",{className:"grid_card",children:Object(p.jsx)("img",{src:e.poster})},e.id)};var m=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(),i=Object(l.a)(s,2),o=i[0],g=i[1];function m(){return(m=Object(d.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t="".concat(j,"movie/popular?api_key=").concat(u,"&language=ko-Korean&page=1"),v.a.get(t).then((function(e){a(e.data.results),g(e.data.results[0])}))}catch(c){console.error(c)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){m.apply(this,arguments)}()}),[]),console.log(c),console.log(o),Object(p.jsxs)("div",{className:"MainPage",children:[o&&Object(p.jsx)(h,{image:"".concat(b,"w1280").concat(null===o||void 0===o?void 0:o.backdrop_path),title:o.original_title,desc:o.overview}),Object(p.jsxs)("div",{className:"title",children:[Object(p.jsx)("h1",{children:"Movies by latest"}),Object(p.jsx)("hr",{})]}),Object(p.jsx)("div",{className:"contents",children:c.map((function(e){return Object(p.jsx)(f,{poster:"".concat(b,"w500").concat(e.poster_path),id:e.id})}))})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root")),O()}},[[45,1,2]]]);
//# sourceMappingURL=main.e18c30a8.chunk.js.map