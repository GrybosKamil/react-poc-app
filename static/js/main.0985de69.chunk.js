(this["webpackJsonpreact-poc-app"]=this["webpackJsonpreact-poc-app"]||[]).push([[0],{18:function(e){e.exports=JSON.parse('{"defaultThemeName":"light","themes":{"light":{"id":"T_001","name":"light","theme":{"backgroundColor":"#EFEFEF","textColor":"#101010","sidebar":{"backgroundColor":"lightblue","textColor":"blue","navbar":{"backgroundColor":"lightgrey","textColor":"#654321","textTransform":"uppercase"}},"pageContent":{"backgroundColor":"lightgrey","textColor":"#121232","themes":{"activeTheme":{"backgroundColor":"red","borderColor":"lightgreen","textColor":"white"}},"languages":{"activeLanguage":{"backgroundColor":"red","borderColor":"lightgreen","textColor":"white"}}}}},"dark":{"id":"T_002","name":"dark","theme":{"backgroundColor":"#202020","textColor":"#EFEFEF","sidebar":{"backgroundColor":"blue","textColor":"lightblue","navbar":{"backgroundColor":"lightgrey","textColor":"#654321","textTransform":"uppercase"}},"pageContent":{"backgroundColor":"lightgrey","textColor":"#121232","themes":{"activeTheme":{"backgroundColor":"red","borderColor":"lightgreen","textColor":"white"}},"languages":{"activeLanguage":{"backgroundColor":"red","borderColor":"lightgreen","textColor":"white"}}}}}}}')},24:function(e,t,n){},26:function(e){e.exports=JSON.parse('{"id":"0","name":"english","for":["en","en-GB","en-US","english"],"language":"English","title":"Title","setThisLanguage":"Set \'English\' language","sidebar":{"index":"Index","languages":"Languages","themes":"Themes","settings":"Settings","notFound":"Not Found"},"themes":{"useTheme":{"dark":"Use \'Dark\' theme","light":"Use \'Light\' theme","custom":"Use \'Custom\' theme"},"dark":"Dark","light":"Light","custom":"Custom"},"pages":{"errors":{"notFound":{"title":"404 Not Found","message":"Page not found, please use sidebar link to visit other page"}}}}')},27:function(e){e.exports=JSON.parse('{"id":"1","name":"polish","for":["pl","polish"],"language":"Polski","title":"Tytu\u0142","setThisLanguage":"Ustaw j\u0119zyk \'Polski\'","sidebar":{"index":"Strona G\u0142\xf3wna","languages":"J\u0119zyki","themes":"Motywy","settings":"Ustawienia","notFound":"Nie Znaleziono"},"themes":{"useTheme":{"dark":"U\u017cyj \'Ciemny\' motyw","light":"U\u017cyj \'Jasny\' motyw","custom":"U\u017cyj \'W\u0142asny\' motyw"},"dark":"Ciemny","light":"Jasny","custom":"W\u0142asny"},"pages":{"errors":{"notFound":{"title":"404 Nie Znaleziono","message":"Strona nie znaleziona, prosz\u0119 u\u017cy\u0107 odno\u015bnika z panelu bocznego aby odwiedzi\u0107 inn\u0105 stron\u0119"}}}}')},35:function(e,t,n){},37:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(25),c=n.n(a),o=(n(34),n(35),n(14)),s=function(e,t){t&&localStorage.setItem(e,JSON.stringify(t))},l=function(e){var t=localStorage.getItem(e);if(t)return JSON.parse(t)},i=n(18),d=n(0),u=Object(r.createContext)({allThemes:{},selectedThemeName:"",selectedTheme:{},setThemeWithName:function(){}}),h=u;function g(e){var t=i.themes;s("all-themes",t);var n=Object(r.useState)(i.defaultThemeName),a=Object(o.a)(n,2),c=a[0],l=a[1];s("selected-theme-name",c);return Object(d.jsx)(u.Provider,{value:{allThemes:t,selectedTheme:t[c],setThemeWithName:function(e){console.log("Set theme: "+e),s("selected-theme-name",e),l(e)}},children:e.children})}var j={defaultLanguage:"english",languages:{english:n(26),polish:n(27)}},b=Object(r.createContext)({allLanguages:{},selectedLanguageName:"",selectedLanguage:{},setLanguageWithName:function(){}}),m=b;function x(e){var t=l("all-languages")||j.languages;s("all-languages",t);var n=Object(r.useState)(l("selected-language-name")||function(e){var t=window.navigator.language;for(var n in e)if(e[n].for.includes(t))return n}(t)||j.defaultLanguage),a=Object(o.a)(n,2),c=a[0],i=a[1];s("selected-language-name",c);return Object(d.jsx)(b.Provider,{value:{allLanguages:t,selectedLanguage:t[c],setLanguageWithName:function(e){console.log("Set language: "+e),s("selected-language-name",e),i(e)}},children:e.children})}var O=function(){var e=Object(r.useContext)(h).selectedTheme;return console.log(e),Object(d.jsx)("div",{className:"header",style:{color:e.theme.textColor},children:"Header"})},f=function(){var e=Object(r.useContext)(h).selectedTheme;return Object(d.jsx)("div",{className:"footer",style:{color:e.theme.textColor},children:"Footer"})},v=n(9),p=(n(37),function(){var e=Object(r.useContext)(h).selectedTheme,t=Object(r.useContext)(m).selectedLanguage,n=e.theme.sidebar.navbar;return Object(d.jsx)("div",{className:"sidebar-links-container",children:Object(d.jsx)("ul",{className:"sidebar-links",children:[{id:1,path:"/",text:"index"},{id:2,path:"/settings",text:"settings"},{id:3,path:"/themes",text:"themes"},{id:4,path:"/languages",text:"languages"},{id:404,path:"/404",text:"notFound"}].map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(v.b,{to:e.path,exact:"/"===e.path,className:"sidebar-link "+e.text,activeClassName:"active-link",style:{textTransform:n.textTransform,backgroundColor:n.backgroundColor,color:n.textColor},children:t.sidebar[e.text]})},e.id)}))})})}),C=(n(42),function(){var e=Object(r.useContext)(h).selectedTheme.theme.sidebar;return Object(d.jsxs)("div",{className:"sidebar",style:{backgroundColor:e.backgroundColor,color:e.textColor},children:[Object(d.jsx)("div",{className:"sidebar-title",children:"Sidebar"}),Object(d.jsx)(p,{})]})}),y=n(3),k=function(){return Object(d.jsx)("div",{children:"Settings"})},T=n(8),N=n(46),L=n(11),w=n.n(L),S=n(12),F=n.n(S),E=n(13),z=function(){var e=Object(r.useContext)(h),t=e.allThemes,n=e.selectedTheme,a=e.setThemeWithName,c=Object(r.useContext)(m).selectedLanguage,o=Object.keys(t).map((function(e){return t[e]})),s=1/o.length*100+"%",l=Object(r.useRef)([]);l.current=o.map((function(e,t){var n;return null!==(n=l.current[t])&&void 0!==n?n:Object(r.createRef)(null)})),Object(r.useEffect)((function(){var e,t={scale:1.1,speed:5e3,max:20,perspective:600,reverse:!0,glare:!0,maxGlare:.5},n=[],r=Object(T.a)(l.current);try{for(r.s();!(e=r.n()).done;){var a=e.value;n.push(new F.a(a.current,t))}}catch(c){r.e(c)}finally{r.f()}return function(){var e,t=Object(T.a)(n);try{for(t.s();!(e=t.n()).done;){e.value.destroy()}}catch(c){t.e(c)}finally{t.f()}}}),[]);var i=Object.keys(Object(E.flatten)(n.theme)),u=n.theme.pageContent.themes;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"Themes"}),o.map((function(e,t){return Object(d.jsxs)("div",{style:{width:s,display:"inline-block",padding:"15px"},children:[e.name===n.name&&Object(d.jsx)("div",{style:{border:"5px solid green",borderRadius:"15px",borderColor:u.activeTheme.borderColor,color:u.activeTheme.textColor},children:"Active"}),Object(d.jsx)(N.a,{ref:l.current[t],style:{backgroundColor:e.theme.backgroundColor,color:e.theme.textColor,width:"100%"},active:e.name===n.name,onClick:function(){return a(e.name)},children:c.themes.useTheme[e.name]})]},e.id)})),Object(d.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Elem ID"}),Object(d.jsx)("th",{children:"Value"})]})}),Object(d.jsx)("tbody",{children:i.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e}),Object(d.jsx)("td",{children:w.a.get(n.theme,e)})]},e)}))})]})})]})},J=function(){var e=Object(r.useContext)(h).selectedTheme,t=Object(r.useContext)(m),n=t.allLanguages,a=t.selectedLanguage,c=t.setLanguageWithName,o=Object.keys(n).map((function(e){return n[e]})),s=1/o.length*100+"%",l=Object(r.useRef)([]);l.current=o.map((function(e,t){var n;return null!==(n=l.current[t])&&void 0!==n?n:Object(r.createRef)(null)})),Object(r.useEffect)((function(){var e,t={scale:1.1,speed:5e3,max:20,perspective:600,reverse:!0,glare:!0,maxGlare:.5},n=[],r=Object(T.a)(l.current);try{for(r.s();!(e=r.n()).done;){var a=e.value;n.push(new F.a(a.current,t))}}catch(c){r.e(c)}finally{r.f()}return function(){var e,t=Object(T.a)(n);try{for(t.s();!(e=t.n()).done;){e.value.destroy()}}catch(c){t.e(c)}finally{t.f()}}}),[]);var i=Object.keys(Object(E.flatten)(a)),u=e.theme.pageContent.languages;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:a.sidebar.languages}),o.map((function(e,t){return Object(d.jsxs)("div",{style:{width:s,display:"inline-block",padding:"15px"},children:[e.name===a.name&&Object(d.jsx)("div",{style:{backgroundColor:u.activeLanguage.backgroundColor,border:"5px solid",borderRadius:"15px",borderColor:u.activeLanguage.borderColor,color:u.activeLanguage.textColor},children:"Active"}),Object(d.jsx)(N.a,{ref:l.current[t],style:{backgroundColor:u.backgroundColor,color:u.textColor,width:"100%"},active:e.name===a.name,onClick:function(){return c(e.name)},children:e.setThisLanguage})]},e.id)})),Object(d.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Elem ID"}),Object(d.jsx)("th",{children:"Value"})]})}),Object(d.jsx)("tbody",{children:i.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e}),Object(d.jsx)("td",{children:w.a.get(a,e)})]},e)}))})]})})]})},I=function(){var e=Object(r.useContext)(m).selectedLanguage;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:e.pages.errors.notFound.title}),Object(d.jsx)("h4",{children:e.pages.errors.notFound.message})]})},U=(n(24),function(){var e=Object(r.useContext)(h).selectedTheme.theme.pageContent;return Object(d.jsx)("div",{className:"page-content",style:{backgroundColor:e.backgroundColor,color:e.text},children:Object(d.jsxs)(y.d,{children:[Object(d.jsx)(y.b,{exact:!0,path:"/",children:Object(d.jsx)("div",{children:"Index"})}),Object(d.jsx)(y.b,{exact:!0,path:"/settings",children:Object(d.jsx)(k,{})}),Object(d.jsx)(y.b,{exact:!0,path:"/themes",children:Object(d.jsx)(z,{})}),Object(d.jsx)(y.b,{exact:!0,path:"/languages",children:Object(d.jsx)(J,{})}),Object(d.jsxs)(y.b,{path:"*",children:[Object(d.jsx)(I,{}),Object(d.jsx)(y.a,{to:"/404"})]})]})})}),W=function(){Object(r.useContext)(h).selectedTheme;return Object(d.jsxs)("div",{className:"page-content-container container",children:[Object(d.jsx)("div",{className:"col-3 page-sidebar",children:Object(d.jsx)(C,{})}),Object(d.jsx)("div",{className:"col-9 page-content",children:Object(d.jsx)(U,{})})]})},R=(n(44),function(){var e=Object(r.useContext)(h).selectedTheme;return Object(d.jsx)("div",{className:"app-container",style:{backgroundColor:e.theme.backgroundColor,color:e.theme.text},children:Object(d.jsxs)("div",{className:"site-content",children:[Object(d.jsx)(O,{}),Object(d.jsx)(W,{}),Object(d.jsx)(f,{})]})})}),P=function(){return Object(d.jsx)(g,{children:Object(d.jsx)(x,{children:Object(d.jsx)(R,{})})})};c.a.render(Object(d.jsx)(r.StrictMode,{children:Object(d.jsx)(v.a,{children:Object(d.jsx)(P,{})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.0985de69.chunk.js.map