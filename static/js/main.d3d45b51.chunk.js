(this.webpackJsonpprofile=this.webpackJsonpprofile||[]).push([[0],{15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),l=(a(14),a(15),a(2)),o=a(19),s=a(20),m=a(21);function u(e){var t=e.children,a=e.style,c=void 0===a?{}:a,i=e.title,u=void 0===i?"":i,f=e.center,d=void 0!==f&&f,h=e.noHover,p=void 0!==h&&h,v=Object(n.useState)(!1),g=Object(l.a)(v,2),w=g[0],b=g[1];function E(){b(!0)}function y(){b(!1)}return r.a.createElement("div",{className:"app-chrome ".concat(p?"no-hover":""),style:c},r.a.createElement("div",{className:"flex flex-row items-center justify-between app-bar pa2"},r.a.createElement("div",{className:"flex flex-row items-center",onMouseEnter:E,onMouseMove:E,onMouseLeave:y,onMouseOut:y},r.a.createElement("div",{className:"traffic-light red flex justify-center items-center"},r.a.createElement(o.a,{color:w?"#222":"#00000000",size:10})),r.a.createElement("div",{className:"traffic-light yellow flex justify-center items-center"},r.a.createElement(s.a,{color:w?"#222":"#00000000",size:10})),r.a.createElement("div",{className:"traffic-light green flex justify-center items-center"},r.a.createElement(m.a,{color:w?"#222":"#00000000",size:10}))),r.a.createElement("div",{className:"theme-blue window-title"},u),d&&r.a.createElement("div",{className:"flex flex-row items-center vb-hidden"},r.a.createElement("div",{className:"traffic-light red"}),r.a.createElement("div",{className:"traffic-light yellow"}),r.a.createElement("div",{className:"traffic-light green"}))),t)}var f=a(8);function d(e){var t=e.messages,a=void 0===t?[]:t,c=Object(n.useState)(""),i=Object(l.a)(c,2),o=i[0],s=i[1],m=Object(n.useState)([]),u=Object(l.a)(m,2),d=u[0],h=u[1],p=Object(n.useRef)(),v=Object(n.useRef)();function g(e){h((function(t){return[].concat(Object(f.a)(t),[e])})),s("")}var w=Object(n.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(e!==a.length){var t=0,n=a[e];""===n.trim().length&&g(n);var r=setInterval((function(){if(t===n.length)return clearInterval(r),g(n),void setTimeout((function(){w(e+1)}),1e3);s((function(e){return e+n[t]})),t+=1}),40)}else v.current.focus()}),[a]),b="flex flex-row align-center";function E(e){if(!/\[(.+)\]\((.+)\)/.test(e))return e;var t=/(.*)\[(.+)\]\((.+)\)(.*)/.exec(e);return r.a.createElement("span",null,t[1],r.a.createElement("a",{className:"app-text input blue",href:t[3]},t[2]),t[4])}return Object(n.useEffect)((function(){w(0)}),[w]),Object(n.useEffect)((function(){p.current.scrollTop=p.current.scrollHeight}),[d]),r.a.createElement("div",{className:"app-body",ref:p},d&&d.map((function(e,t){return r.a.createElement("div",{key:e+t,className:"".concat(b," mb2")},r.a.createElement("div",{className:"app-text b theme-blue mr2"}," $"),r.a.createElement("div",{className:"app-text"},E(e)))})),r.a.createElement("div",{className:b},r.a.createElement("div",{className:"app-text b theme-blue mr2"}," $"),r.a.createElement("textarea",{className:"app-text input",onKeyDown:function(e){"Enter"===e.key&&(e.stopPropagation(),g(o))},onChange:function(e){s(e.currentTarget.value)},value:E(o),ref:v})))}var h=a(22),p=a(23),v=a(24);function g(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(0),o=Object(l.a)(i,2),s=o[0],m=o[1],u=Object(n.useCallback)((function(){var e=window.scrollY;s!==e&&(c(e>30),m(e))}),[s]);Object(n.useEffect)((function(){return window.addEventListener("scroll",u),function(){window.removeEventListener("scroll",u)}}),[u]);var f=a?"white":"dark-gray",d=a?"bg-dark-gray":"";return r.a.createElement("nav",{className:"w-100 fixed flex justify-between items-center ".concat(d)},r.a.createElement("div",{className:"flex justify-between items-center"},r.a.createElement("a",{className:"link white-70 hover-white no-underline flex items-center pa3",href:"https://linkedin.com/in/actuallydan"},r.a.createElement(h.a,{className:f}),r.a.createElement("title",null,"linkedin.com/in/actuallydan")),r.a.createElement("a",{className:"link dim ".concat(a?"white":"near-black"," b f6 f5-ns dib mr3"),href:"https://github.com/actuallydan",title:"Home"},"Dan Kral"),r.a.createElement("a",{className:"link dim ".concat(f," f6 f5-ns dn dib-ns"),href:"mailto:dankral01@gmail.com",title:"dankral01@gmail.com"},"Contact")),r.a.createElement("div",{className:"flex justify-between items-center"},r.a.createElement("a",{className:"link hover-white no-underline flex items-center pa3",href:"https://github.com/actuallydan",title:"actuallydan"},r.a.createElement(p.a,{className:f})),r.a.createElement("a",{className:"link hover-white no-underline flex items-center pa3",href:"https://www.linkedin.com/in/actuallydan/",title:"linkedin.com/in/actuallydan"},r.a.createElement(v.a,{className:f}))))}var w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement("div",{className:"App"},r.a.createElement(u,{title:"hello.txt",center:!0,noHover:!0},r.a.createElement(d,{messages:["Hi there! My name is Dan.","I'm a fullstack web developer who loves React.js","I care too much about cross-platform applications and building a decentralized future","but for now I'm just obsessed with Javascript.","I've built software for a parking company,","a gas station chain,","a pharmaceutical technology company,","my university,","private individuals,","and now I'm teaching others in my free-time at [Trilogy Education Services](https://www.trilogyed.com/)."," ","I'm also on the hunt for a new full-time career move,","feel free to checkout [my portfolio](https://actuallydan.github.io),","or send me an email at dankral01@gmail.com!"," ","\ud83d\udd2d I\u2019m currently building [athar.es](https://github.com/atharesinc/athares)","\ud83d\udcac Ask me about React, GraphQL, economics, and completely hypothetical governments","\ud83d\udceb How to reach me: dankral01@gmail.com","\ud83d\ude04 Pronouns: he/him/his"]})),r.a.createElement("div",{className:"w-100 center mt4"},r.a.createElement("section",{className:"flex flex-wrap"},[{name:"athar.es",href:"https://athar.es",img:"./images/athares-1.png",repo:"https://github.com/atharesinc/athares",fullName:"Athares",description:"Athares is a Distributed Democracy Platform where users can form groups with Chat and Governance without a group admin."},{name:"tadu.herokuapp.com",href:"https://tadu.herokuapp.com",img:"./images/tadu-2.png",fullName:"Tadu",repo:"https://github.com/actuallydan/tadu",description:"Tadu is a task organizer that uses Machine Learning to help you schedule tasks when you're likely to complete them."},{name:"bradysgolfcarts.com",href:"https://bradysgolfcarts.com",img:"./images/brady-carts.png",fullName:"Scott Brady's Used Golf Carts",description:"Client work for the owner of a full-service golf cart repair and service company."},{name:"natureatlas.org",href:"https://natureatlas.org/plants/earth/",img:"./images/nature-atlas-2.png",fullName:"Nature Atlas",description:"Led by Millersville University's Dr. Chris Hardy, I helped migrate Nature Atlas to AWS and integrate image upload to their bio-statistic research app, as well as integrate a live-poll tracker for observations made in the field."}].map((function(e){return r.a.createElement("div",{key:e.name,className:" w-100 w-50-ns pa2-ns"},r.a.createElement("div",{className:"pv2"},r.a.createElement("a",{href:e.href,className:"ph2 ph0-ns pb3 link db"},r.a.createElement(u,{key:e.name,title:e.name},r.a.createElement("img",{src:e.img,alt:"screenshot of "+e.name}))),r.a.createElement("div",{className:"flex items-center"},e.repo&&r.a.createElement("a",{className:"link hover-white no-underline mr2",href:e.repo,title:e.repo},r.a.createElement(p.a,{className:"link near-black hover-white",size:18})),r.a.createElement("h3",{className:"f5 f4-ns near-black"},e.fullName)),r.a.createElement("h3",{className:"f6 f5 fw4 mt1 near-black"},e.description)))}))))))},b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");b?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):E(t,e)}))}}()},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.d3d45b51.chunk.js.map