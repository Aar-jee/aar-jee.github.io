(this.webpackJsonpTodo_App=this.webpackJsonpTodo_App||[]).push([[0],{18:function(e,t,n){e.exports=n(50)},23:function(e,t,n){},48:function(e,t){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(2),r=n.n(c),i=(n(23),n(3)),u=(n(24),n(16)),l=n.n(u),s=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("Rohit"),u=Object(i.a)(r,2),s=u[0],h=u[1],m=Object(a.useState)([]),p=Object(i.a)(m,2),f=p[0],d=p[1];Object(a.useEffect)((function(){l.a.get("https://hn.algolia.com/api/v1/search?query="+s).then((function(e){d(e.data.hits)}))}),[s]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{value:n,onChange:function(e){c(e.target.value)},onKeyUp:function(e){13===e.keyCode&&h(e.target.value)}}),f&&f.map((function(e,t){return o.a.createElement("ul",{key:t},o.a.createElement("li",null,e.title))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(49),n(48);r.a.render(o.a.createElement(s,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.4b2132eb.chunk.js.map