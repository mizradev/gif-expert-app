(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(7),c=n.n(r),i=n(2),s=n(9),u=n(0),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),c.trim().length>2&&t((function(e){return[c].concat(Object(s.a)(e))})),o("")},children:Object(u.jsx)("input",{type:"text",className:"form-control bg-transparent text-white",value:c,onChange:function(e){o(e.target.value)},placeholder:"Ingrese su busqueda y presione enter"})})},j=n(10),l=n(6),d=n.n(l),m=n(8),f=function(){var e=Object(m.a)(d.a.mark((function e(t){var n,a,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&api_key=JhEF1vYAPk05pkraSnNa2F2l6GIAmuIc&limit=10"));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,r=a.data,c=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.id,n=e.title,a=e.url;return console.log(t,a,n),Object(u.jsxs)("div",{className:"card shadow-lg animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{src:a,alt:n}),Object(u.jsxs)("p",{children:[" ",n," "]})]})},p=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({imgs:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){c({imgs:e,loading:!1})}))}),[e]),r}(t),r=n.imgs,c=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),c&&Object(u.jsx)("p",{className:"animate__animated animate__flash animate__infinite infinite",children:"loading..."}),Object(u.jsx)("div",{className:"card-grid",children:r.map((function(e){return Object(u.jsx)(b,Object(j.a)({},e),e.id)}))})]})},h=function(){var e=Object(a.useState)(["one punch"]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"text-center",children:Object(u.jsx)("h2",{children:"Gifgif"})}),Object(u.jsx)(o,{setCategories:r}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(e){return Object(u.jsx)(p,{category:e},e)}))})]})};n(17);c.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.29b909b5.chunk.js.map