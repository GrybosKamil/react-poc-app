(this["webpackJsonpreact-poc-app"]=this["webpackJsonpreact-poc-app"]||[]).push([[0],{16:function(e){e.exports=JSON.parse('{"defaultThemeName":"light","themes":{"light":{"id":"T_001","name":"light","colors":{"background":"#FFFFFF","text":"#000000","buttons":{"background":"#AAAAAA","text":"#0000FF"}}},"dark":{"id":"T_002","name":"dark","colors":{"background":"#000000","text":"#FFFFFF","buttons":{"background":"#777777","text":"#0000FF"}}}}}')},22:function(e){e.exports=JSON.parse('{"id":"0","name":"english","for":["en","en-GB","en-US","english"],"language":"English","title":"Title","setThisLanguage":"Set \'English\' language","sidebar":{"index":"Index","languages":"Languages","themes":"Themes","settings":"Settings","notFound":"Not Found"},"themes":{"useTheme":{"dark":"Use \'Dark\' theme","light":"Use \'Light\' theme","custom":"Use \'Custom\' theme"},"dark":"Dark","light":"Light","custom":"Custom"},"pages":{"errors":{"notFound":{"title":"404 Not Found","message":"Page not found, please use sidebar link to visit other page"}}}}')},23:function(e){e.exports=JSON.parse('{"id":"1","name":"polish","for":["pl","polish"],"language":"Polski","title":"Tytu\u0142","setThisLanguage":"Ustaw j\u0119zyk \'Polski\'","sidebar":{"index":"Strona G\u0142\xf3wna","languages":"J\u0119zyki","themes":"Motywy","settings":"Ustawienia","notFound":"Nie Znaleziono"},"themes":{"useTheme":{"dark":"U\u017cyj \'Ciemny\' motyw","light":"U\u017cyj \'Jasny\' motyw","custom":"U\u017cyj \'W\u0142asny\' motyw"},"dark":"Ciemny","light":"Jasny","custom":"W\u0142asny"},"pages":{"errors":{"notFound":{"title":"404 Nie Znaleziono","message":"Strona nie znaleziona, prosz\u0119 u\u017cy\u0107 odno\u015bnika z panelu bocznego aby odwiedzi\u0107 inn\u0105 stron\u0119"}}}}')},31:function(e,t,n){},33:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(21),c=n.n(s),r=(n(30),n(31),n(12)),i=function(e,t){t&&localStorage.setItem(e,JSON.stringify(t))},l=function(e){var t=localStorage.getItem(e);if(t)return JSON.parse(t)},o=n(16),u=n(1),d=Object(a.createContext)({allThemes:{},selectedThemeName:"",selectedTheme:{},setThemeWithName:function(){}}),h=d;function g(e){var t=l("all-themes")||o.themes;i("all-themes",t);var n=Object(a.useState)(l("selected-theme-name")||o.defaultThemeName),s=Object(r.a)(n,2),c=s[0],h=s[1];i("selected-theme-name",c);return Object(u.jsx)(d.Provider,{value:{allThemes:t,selectedTheme:t[c],setThemeWithName:function(e){console.log("Set theme: "+e),i("selected-theme-name",e),h(e)}},children:e.children})}var j={defaultLanguage:"english",languages:{english:n(22),polish:n(23)}},b=Object(a.createContext)({allLanguages:{},selectedLanguageName:"",selectedLanguage:{},setLanguageWithName:function(){}}),m=b;function x(e){var t=l("all-languages")||j.languages;i("all-languages",t);var n=Object(a.useState)(l("selected-language-name")||function(e){var t=window.navigator.language;for(var n in e)if(e[n].for.includes(t))return n}(t)||j.defaultLanguage),s=Object(r.a)(n,2),c=s[0],o=s[1];i("selected-language-name",c);return Object(u.jsx)(b.Provider,{value:{allLanguages:t,selectedLanguage:t[c],setLanguageWithName:function(e){console.log("Set language: "+e),i("selected-language-name",e),o(e)}},children:e.children})}var O=function(){return Object(u.jsx)("div",{className:"header",children:"Header"})},f=function(){return Object(u.jsx)("div",{className:"footer",children:"Footer"})},p=n(3),v=function(){return Object(u.jsx)("div",{children:"Settings"})},y=n(9),k=(n(33),function(){var e=Object(a.useContext)(h).selectedTheme,t=Object(a.useContext)(m).selectedLanguage;return Object(u.jsx)("div",{className:"sidebar-links-container",children:Object(u.jsx)("ul",{className:"sidebar-links",children:[{id:1,path:"/",text:"index"},{id:2,path:"/settings",text:"settings"},{id:3,path:"/themes",text:"themes"},{id:4,path:"/languages",text:"languages"},{id:404,path:"/404",text:"notFound"}].map((function(n){return Object(u.jsx)("li",{children:Object(u.jsx)(y.b,{to:n.path,exact:"/"===n.path,className:"sidebar-link "+n.text,activeClassName:"active-link",style:{backgroundColor:e.colors.background,color:e.colors.text},children:t.sidebar[n.text]})},n.id)}))})})}),N=(n(39),function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"sidebar-title",children:"Sidebar"}),Object(u.jsx)(k,{})]})}),T=n(8),F=n(43),C=n(11),L=n.n(C),S=function(){var e=Object(a.useContext)(h),t=e.allThemes,n=e.selectedTheme,s=e.setThemeWithName,c=Object(a.useContext)(m).selectedLanguage,r=Object.keys(t).map((function(e){return t[e]})),i=1/r.length*100+"%",l=Object(a.useRef)([]);return l.current=r.map((function(e,t){var n;return null!==(n=l.current[t])&&void 0!==n?n:Object(a.createRef)(null)})),Object(a.useEffect)((function(){var e,t={scale:1.1,speed:5e3,max:20,perspective:600,reverse:!0,glare:!0,maxGlare:.5},n=[],a=Object(T.a)(l.current);try{for(a.s();!(e=a.n()).done;){var s=e.value;n.push(new L.a(s.current,t))}}catch(c){a.e(c)}finally{a.f()}return function(){var e,t=Object(T.a)(n);try{for(t.s();!(e=t.n()).done;){e.value.destroy()}}catch(c){t.e(c)}finally{t.f()}}}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"Themes"}),r.map((function(e,t){return Object(u.jsxs)("div",{style:{width:i,display:"inline-block",padding:"15px"},children:[e.name===n.name&&Object(u.jsx)("div",{style:{border:"5px solid green",borderRadius:"15px"},children:"Active"}),Object(u.jsx)(F.a,{ref:l.current[t],style:{backgroundColor:e.colors.background,color:e.colors.text,width:"100%"},active:e.name===n.name,onClick:function(){return s(e.name)},children:c.themes.useTheme[e.name]})]},e.id)}))]})},w=function(){var e=Object(a.useContext)(h).selectedTheme,t=Object(a.useContext)(m),n=t.allLanguages,s=t.selectedLanguage,c=t.setLanguageWithName,r=Object.keys(n).map((function(e){return n[e]})),i=1/r.length*100+"%",l=Object(a.useRef)([]);return l.current=r.map((function(e,t){var n;return null!==(n=l.current[t])&&void 0!==n?n:Object(a.createRef)(null)})),Object(a.useEffect)((function(){var e,t={scale:1.1,speed:5e3,max:20,perspective:600,reverse:!0,glare:!0,maxGlare:.5},n=[],a=Object(T.a)(l.current);try{for(a.s();!(e=a.n()).done;){var s=e.value;n.push(new L.a(s.current,t))}}catch(c){a.e(c)}finally{a.f()}return function(){var e,t=Object(T.a)(n);try{for(t.s();!(e=t.n()).done;){e.value.destroy()}}catch(c){t.e(c)}finally{t.f()}}}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:s.sidebar.languages}),r.map((function(t,n){return Object(u.jsxs)("div",{style:{width:i,display:"inline-block",padding:"15px"},children:[t.name===s.name&&Object(u.jsx)("div",{style:{border:"5px solid green",borderRadius:"15px"},children:"Active"}),Object(u.jsx)(F.a,{ref:l.current[n],style:{backgroundColor:e.colors.background,color:e.colors.text,width:"100%"},active:t.name===s.name,onClick:function(){return c(t.name)},children:t.setThisLanguage})]},t.id)}))]})},z=function(){var e=Object(a.useContext)(m).selectedLanguage;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e.pages.errors.notFound.title}),Object(u.jsx)("h4",{children:e.pages.errors.notFound.message})]})},J=(n(40),function(e){var t=Object(a.useContext)(h).selectedTheme;return Object(u.jsxs)("div",{className:"page-content-container container",children:[Object(u.jsx)("div",{className:"col-3  page-sidebar",children:Object(u.jsx)(N,{})}),Object(u.jsx)("div",{className:"col-9 page-content",style:{backgroundColor:t.colors.background,color:t.colors.text},children:Object(u.jsxs)(p.d,{children:[Object(u.jsx)(p.b,{exact:!0,path:"/",children:Object(u.jsx)("div",{children:"Index"})}),Object(u.jsx)(p.b,{exact:!0,path:"/settings",children:Object(u.jsx)(v,{})}),Object(u.jsx)(p.b,{exact:!0,path:"/themes",children:Object(u.jsx)(S,{})}),Object(u.jsx)(p.b,{exact:!0,path:"/languages",children:Object(u.jsx)(w,{})}),Object(u.jsxs)(p.b,{path:"*",children:[Object(u.jsx)(z,{}),Object(u.jsx)(p.a,{to:"/404"})]})]})})]})}),U=(n(41),function(){return Object(u.jsx)(g,{children:Object(u.jsx)(x,{children:Object(u.jsx)("div",{className:"app-container",children:Object(u.jsxs)("div",{className:"site-content",children:[Object(u.jsx)(O,{}),Object(u.jsx)(J,{}),Object(u.jsx)(f,{})]})})})})});c.a.render(Object(u.jsx)(a.StrictMode,{children:Object(u.jsx)(y.a,{basename:"/react-poc-app",children:Object(u.jsx)(U,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.5ac6296c.chunk.js.map