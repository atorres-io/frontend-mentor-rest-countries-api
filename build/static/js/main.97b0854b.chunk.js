(this["webpackJsonpfrontend-mentor-rest-countries-api"]=this["webpackJsonpfrontend-mentor-rest-countries-api"]||[]).push([[0],{163:function(e,t,a){},165:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(21),s=a.n(r),o=a(16),i=a(55),l=a(9),p=a(182),d=a(98),j=a(30),x=a.n(j),b=a(47),h=a(26),u=a.n(h),m=a(57),g=a(13),O=a.n(g),f=a(188),v=a(69),y=a(177),w=a(189),k=a(178),N=a(180),S=a(169),C=a(181),I=a(92),F=a.n(I),R=a(93),W=a.n(R),z=a(2);function B(e){var t=e.children,a=e.window,n=Object(y.a)({target:a?a():void 0});return Object(z.jsx)(w.a,{appear:!1,direction:"down",in:!n,children:t})}var L=O()((function(e){return{appbar:{backgroundColor:"var(--appbar)",color:"var(--text)",boxShadow:"0 5px 10px -5px rgb(0 0 0 / 10%)",padding:"0 calc(4vw + ".concat(e.spacing(2),"px)")},spaceBetween:{justifyContent:"space-between"},button:{color:"var(--text)",textTransform:"capitalize",fontSize:"14px",fontWeight:600}}}))((function(e){var t=e.classes,a=e.state,n=e.setState;return Object(z.jsx)(B,Object(v.a)(Object(v.a)({},e),{},{children:Object(z.jsx)(k.a,{className:t.appbar,elevation:0,children:Object(z.jsxs)(N.a,{disableGutters:!0,className:t.spaceBetween,children:[Object(z.jsx)(S.a,{variant:"h1",component:"h1",children:"Where in the world?"}),Object(z.jsx)(C.a,{onClick:"dark"===a?function(){n("light"),document.documentElement.setAttribute("data-theme","light")}:function(){n("dark"),document.documentElement.setAttribute("data-theme","dark")},className:t.button,startIcon:"dark"===a?Object(z.jsx)(F.a,{}):Object(z.jsx)(W.a,{}),children:"Dark Mode"})]})})}))})),D=a(190),E=a(183),Z=a(94),A=a.n(Z),P=O()((function(e){return{root:{backgroundColor:"var(--element)",width:"400px",marginRight:e.spacing(1),marginBottom:e.spacing(4),padding:"".concat(e.spacing(1.2),"px ").concat(e.spacing(2.5),"px"),borderRadius:"5px",boxShadow:"0 0 12px -5px rgb(0 0 0 / 20%)"},input:{backgroundColor:"transparent",fontSize:"14px",fontWeight:300,color:"var(--text)","&::placeholder":{fontSize:"12px",fontWeight:300,color:"var(--text)"}}}}))(D.a);var T=O()((function(e){return{lightIcon:{color:"var(--text)",opacity:"0.7"},darkIcon:{color:"var(--text)",opacity:"0.7"}}}))((function(e){var t=e.classes,a=e.state,n=e.handleFetchSearch;c.a.useEffect((function(){document.getElementById("search").addEventListener("input",(function(e){r(e.target.value)}))}),[]);var r=function(e){n(e)};return Object(z.jsx)(P,{id:"search",variant:"filled",placeholder:"Search for a country...",startAdornment:Object(z.jsx)(E.a,{position:"start",children:Object(z.jsx)(A.a,{fontSize:"small",className:"dark"===a?t.darkIcon:t.lightIcon})})})})),q=a(95),J=a.n(q),M=a(96),G=a.n(M);var U=O()((function(e){return{dropdown:{position:"relative",width:"200px",backgroundColor:"var(--element)",boxShadow:"0 0 12px -5px rgb(0 0 0 / 20%)",borderRadius:"5px"},dropdownLabel:{display:"flex",flexFlow:"row nowrap",justifyContent:"space-between",alignItems:"center",padding:"".concat(e.spacing(1.75),"px ").concat(e.spacing(2.5),"px"),cursor:"pointer","& span":{color:"var(--text)",fontSize:"14px",fontWeight:300}},dropdownOptions:{position:"absolute",top:"55px",width:"200px",backgroundColor:"var(--element)",color:"var(--text)",boxShadow:"0 0 12px -5px rgb(0 0 0 / 20%)",borderRadius:"5px",zIndex:5,overflow:"hidden"},option:{padding:"".concat(e.spacing(1),"px ").concat(e.spacing(3.5),"px"),cursor:"pointer",transition:"background-color 250ms ease","&:hover":{backgroundColor:"rgb(0 0 0 / 10%)"},"&:first-child":{padding:"".concat(e.spacing(2.5),"px ").concat(e.spacing(3.5),"px ").concat(e.spacing(1),"px ").concat(e.spacing(3.5),"px")},"&:last-child":{padding:"".concat(e.spacing(1),"px ").concat(e.spacing(3.5),"px ").concat(e.spacing(2.5),"px ").concat(e.spacing(3.5),"px")}},lightIcon:{color:"var(--text)"},darkIcon:{color:"var(--text)"}}}))((function(e){var t=e.classes,a=e.state,n=e.handleFetchRegion,r=c.a.useState(!1),s=Object(o.a)(r,2),i=s[0],l=s[1];c.a.useEffect((function(){document.getElementById("dropdown").addEventListener("click",(function(e){p(e.target.dataset.value)}))}),[]);var p=function(e){n(e)};return Object(z.jsxs)("div",{className:t.dropdown,children:[Object(z.jsxs)("div",{className:t.dropdownLabel,onClick:function(){l(!i)},children:[Object(z.jsx)("span",{children:"Filter by Region"}),i?Object(z.jsx)(J.a,{fontSize:"small",className:"dark"===a?t.darkIcon:t.lightIcon}):Object(z.jsx)(G.a,{fontSize:"small",className:"dark"===a?t.darkIcon:t.lightIcon})]}),Object(z.jsxs)("div",{id:"dropdown",className:t.dropdownOptions,style:i?{display:"block"}:{display:"none"},children:[Object(z.jsx)("div",{className:t.option,"data-value":"all",children:"All"}),Object(z.jsx)("div",{className:t.option,"data-value":"africa",children:"Africa"}),Object(z.jsx)("div",{className:t.option,"data-value":"americas",children:"America"}),Object(z.jsx)("div",{className:t.option,"data-value":"asia",children:"Asia"}),Object(z.jsx)("div",{className:t.option,"data-value":"europe",children:"Europe"}),Object(z.jsx)("div",{className:t.option,"data-value":"oceania",children:"Oceania"})]})]})})),Y=a(184),H=a(185),K=a(186),Q=a(187);var V=O()((function(e){return{card:{width:"100%",maxWidth:"265px",height:"auto",backgroundColor:"var(--element)",borderRadius:"8px",boxShadow:"0 0 12px -5px rgb(0 0 0 / 20%)",transition:"transform 250ms ease",margin:e.spacing(2),"&:hover":{transform:"translateY(-5px)"},"& h2":{color:"var(--text)"},"& span":{color:"var(--text)"}},padding:{padding:e.spacing(4)},media:{boxShadow:"inset 0 -12px 15px -2px rgb(0 0 0 / 20%)"}}}))((function(e){var t=e.classes,a=e.datas,n=e.onClickCard;return Object(z.jsx)(c.a.Fragment,{children:a.map((function(e){return Object(z.jsx)(Y.a,{elevation:0,className:t.card,children:Object(z.jsxs)(H.a,{onClick:function(){return n(e.name)},children:[Object(z.jsx)(K.a,{className:t.media,component:"img",alt:"Country flag",height:"150",image:e.flag,title:"Country flag"}),Object(z.jsxs)(Q.a,{className:t.padding,children:[Object(z.jsx)(S.a,{variant:"h2",component:"h2",children:e.name}),Object(z.jsxs)("p",{children:[Object(z.jsxs)(S.a,{variant:"body2",component:"span",children:["Population:"," "]}),Object(z.jsx)(S.a,{variant:"body1",component:"span",children:e.population.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,",")})]}),Object(z.jsxs)("p",{children:[Object(z.jsxs)(S.a,{variant:"body2",component:"span",children:["Region:"," "]}),Object(z.jsx)(S.a,{variant:"body1",component:"span",children:e.region})]}),Object(z.jsxs)("p",{children:[Object(z.jsxs)(S.a,{variant:"body2",component:"span",children:["Capital:"," "]}),Object(z.jsx)(S.a,{variant:"body1",component:"span",children:""===e.capital?"Undefined":e.capital})]})]})]})},e.name)}))})}));var X=O()((function(e){return{skeleton:{width:"100%",maxWidth:"265px",height:"313px",borderRadius:"8px",backgroundImage:"var(--gradient)",boxShadow:"0 0 12px -5px rgb(0 0 0 / 20%)",backgroundSize:"800px 104px",animation:"shineEffect 1.2s forwards infinite linear",margin:e.spacing(2)}}}))((function(e){var t=e.classes;return Object(z.jsxs)(c.a.Fragment,{children:[Object(z.jsx)(f.a,{container:!0,className:t.skeleton}),Object(z.jsx)(f.a,{container:!0,className:t.skeleton}),Object(z.jsx)(f.a,{container:!0,className:t.skeleton}),Object(z.jsx)(f.a,{container:!0,className:t.skeleton}),Object(z.jsx)(f.a,{container:!0,className:t.skeleton}),Object(z.jsx)(f.a,{container:!0,className:t.skeleton}),Object(z.jsx)(f.a,{container:!0,className:t.skeleton}),Object(z.jsx)(f.a,{container:!0,className:t.skeleton}),Object(z.jsx)(f.a,{container:!0,className:t.skeleton}),Object(z.jsx)(f.a,{container:!0,className:t.skeleton}),Object(z.jsx)(f.a,{container:!0,className:t.skeleton}),Object(z.jsx)(f.a,{container:!0,className:t.skeleton})]})}));var $=O()((function(e){return{wrapperDashboard:{display:"flex",justifyContent:"center",alignItems:"flex-start",width:"100%",height:"auto",backgroundColor:"transparent"},header:{display:"flex",flexFlow:"row wrap",justifyContent:"space-between",alignItems:"flex-start",width:"100%",height:"auto",margin:"calc(64px + ".concat(e.spacing(4.5),"px) 0 ").concat(e.spacing(4.5),"px 0"),padding:"0 calc(4vw + ".concat(e.spacing(2),"px)"),backgroundColor:"transparent"},main:{display:"flex",flexFlow:"row wrap",alignItems:"flex-start",width:"100%",maxWidth:"1440px",height:"auto",backgroundColor:"transparent",padding:"0 4vw",marginBottom:e.spacing(5)}}}))((function(e){var t=e.classes,a=e.state,n=e.setState,r=c.a.useState(!0),s=Object(o.a)(r,2),i=s[0],p=s[1],d=c.a.useState([]),j=Object(o.a)(d,2),h=j[0],g=j[1],O=Object(l.f)();c.a.useEffect((function(){0===h.length?u.a.get("https://restcountries.eu/rest/v2/all").then((function(e){var t=e.data;g(t),p(!1)})):p(!1)}),[h]);var v=function(){var e=Object(b.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p(!0),"all"!==t){e.next=7;break}return e.next=4,u.a.get("https://restcountries.eu/rest/v2/all");case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,u.a.get("https://restcountries.eu/rest/v2/region/".concat(t));case 9:e.t0=e.sent;case 10:a=e.t0,g(a.data),p(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(b.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p(!0),""!==t){e.next=7;break}return e.next=4,u.a.get("https://restcountries.eu/rest/v2/all");case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,u.a.get("https://restcountries.eu/rest/v2/name/".concat(t));case 9:e.t0=e.sent;case 10:a=e.t0,g(a.data),p(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(e){var t=String(e);localStorage.setItem("tab",t),O.push("/".concat(t))};return Object(z.jsxs)(f.a,{container:!0,className:t.wrapperDashboard,children:[Object(z.jsx)(L,{state:a,setState:n}),Object(z.jsxs)(f.a,{container:!0,className:t.header,children:[Object(z.jsx)(T,{state:a,handleFetchSearch:y}),Object(z.jsx)(U,{state:a,handleFetchRegion:v})]}),Object(z.jsx)(m.a,{query:{maxWidth:560},children:function(e){return e?Object(z.jsx)("main",{className:t.main,style:{justifyContent:"center"},children:i?Object(z.jsx)(X,{}):Object(z.jsx)(V,{datas:h,onClickCard:w})}):Object(z.jsx)("main",{className:t.main,style:{justifyContent:"space-between"},children:i?Object(z.jsx)(X,{}):Object(z.jsx)(V,{datas:h,onClickCard:w})})}})]})})),_=a(97),ee=a.n(_),te=O()((function(e){return{root:{padding:"".concat(e.spacing(1),"px ").concat(e.spacing(5),"px"),color:"var(--text)",backgroundColor:"var(--element)",borderRadius:"5px",fontSize:"14px",textTransform:"none",marginBottom:e.spacing(5)}}}))(C.a);var ae=O()((function(e){return{wrapperDetails:{display:"flex",justifyContent:"center",alignItems:"flex-start",width:"100%",height:"auto",backgroundColor:"transparent"},header:{display:"flex",flexFlow:"row wrap",justifyContent:"flex-start",alignItems:"flex-start",width:"100%",height:"auto",margin:"calc(64px + ".concat(e.spacing(4.5),"px) 0 ").concat(e.spacing(4.5),"px 0"),padding:"0 calc(4vw + ".concat(e.spacing(2),"px)"),backgroundColor:"transparent"},main:{display:"flex",flexFlow:"row wrap",justifyContent:"center",alignItems:"center",width:"100%",maxWidth:"1440px",height:"auto",backgroundColor:"transparent",padding:"0 calc(4vw + ".concat(e.spacing(2),"px)")},flag:{width:"40%",minWidth:"300px",objectFit:"cover",objectPosition:"center center",marginBottom:"3rem",aspectRatio:"16 / 9"},wrapperInformation:{height:"auto",color:"var(--text)"},wrapperZones:{display:"flex",flexWrap:"nowrap",width:"100%",height:"auto",backgroundColor:"transparent",padding:"0 ".concat(e.spacing(10),"px")},leftZone:{height:"auto",marginBottom:e.spacing(2),marginRight:e.spacing(4),"& p":{margin:"".concat(e.spacing(.5),"px 0")}},rightZone:{height:"auto","& p":{margin:"".concat(e.spacing(.5),"px 0")}}}}))((function(e){var t=e.classes,a=e.state,n=e.setState,r=c.a.useState({}),s=Object(o.a)(r,2),i=s[0],p=s[1],d=c.a.useState(""),j=Object(o.a)(d,2),h=j[0],g=j[1],O=c.a.useState(""),v=Object(o.a)(O,2),y=v[0],w=v[1],k=c.a.useState(""),N=Object(o.a)(k,2),C=N[0],I=N[1],F=c.a.useState([]),R=Object(o.a)(F,2),W=(R[0],R[1]),B=Object(l.f)();return c.a.useEffect((function(){Object(b.a)(x.a.mark((function e(){var t,a,n,c,r,s,o,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("tab"),e.next=3,u.a.get("https://restcountries.eu/rest/v2/name/".concat(t));case 3:return a=e.sent,n=a.data[0],c=n.currencies,r=n.languages,s=n.topLevelDomain,o=n.borders,e.next=7,u.a.get("https://restcountries.eu/rest/v2/alpha?codes=".concat(o.join(";")));case 7:i=e.sent,W(i.data.map((function(e){return e.name}))),p(a.data[0]),w(c.map((function(e){return e.name})).join(", ")),I(r.map((function(e){return e.name})).join(", ")),g(s.join(", "));case 13:case"end":return e.stop()}}),e)})))()}),[]),Object(z.jsxs)(f.a,{container:!0,className:t.wrapperDetails,children:[Object(z.jsx)(L,{state:a,setState:n}),Object(z.jsx)(f.a,{container:!0,className:t.header,children:Object(z.jsx)(te,{variant:"contained",startIcon:Object(z.jsx)(ee.a,{}),onClick:function(){localStorage.setItem("tab","/"),B.push("/")},children:"Back"})}),Object(z.jsxs)("main",{className:t.main,children:[Object(z.jsx)("img",{className:t.flag,src:i.flag,alt:"Country Flag",loading:"lazy"}),Object(z.jsx)(m.a,{query:{maxWidth:849},children:function(e){return e?Object(z.jsxs)(f.a,{container:!0,className:t.wrapperInformation,style:{width:"100%",flexDirection:"column"},children:[Object(z.jsx)(S.a,{variant:"h1",component:"h1",style:{paddingLeft:"0",marginBottom:"1rem"},children:i.name}),Object(z.jsxs)(f.a,{container:!0,className:t.wrapperZones,style:{flexDirection:"column",padding:"0"},children:[Object(z.jsxs)("div",{className:t.leftZone,style:{width:"auto"},children:[Object(z.jsxs)("p",{children:[Object(z.jsxs)(S.a,{variant:"body2",component:"span",children:["Native Name:"," "]}),Object(z.jsx)(S.a,{variant:"body1",component:"span",children:i.nativeName})]}),Object(z.jsxs)("p",{children:[Object(z.jsxs)(S.a,{variant:"body2",component:"span",children:["Population:"," "]}),Object(z.jsx)(S.a,{variant:"body1",component:"span",children:i.population})]}),Object(z.jsxs)("p",{children:[Object(z.jsxs)(S.a,{variant:"body2",component:"span",children:["Region:"," "]}),Object(z.jsx)(S.a,{variant:"body1",component:"span",children:i.region})]}),Object(z.jsxs)("p",{children:[Object(z.jsxs)(S.a,{variant:"body2",component:"span",children:["Sub Region:"," "]}),Object(z.jsx)(S.a,{variant:"body1",component:"span",children:i.subregion})]}),Object(z.jsxs)("p",{children:[Object(z.jsxs)(S.a,{variant:"body2",component:"span",children:["Capital:"," "]}),Object(z.jsx)(S.a,{variant:"body1",component:"span",children:i.capital})]})]}),Object(z.jsxs)("div",{className:t.rightZone,style:{width:"auto"},children:[Object(z.jsxs)("p",{children:[Object(z.jsxs)(S.a,{variant:"body2",component:"span",children:["Top Level Domain:"," "]}),Object(z.jsx)(S.a,{variant:"body1",component:"span",children:h})]}),Object(z.jsxs)("p",{children:[Object(z.jsxs)(S.a,{variant:"body2",component:"span",children:["Currencies:"," "]}),Object(z.jsx)(S.a,{variant:"body1",component:"span",children:y})]}),Object(z.jsxs)("p",{children:[Object(z.jsxs)(S.a,{variant:"body2",component:"span",children:["Languages:"," "]}),Object(z.jsx)(S.a,{variant:"body1",component:"span",children:C})]})]})]})]}):Object(z.jsxs)(f.a,{container:!0,className:t.wrapperInformation,style:{width:"60%",flexDirection:"row"},children:[Object(z.jsx)(S.a,{variant:"h1",component:"h1",style:{paddingLeft:"80px",marginBottom:"1rem"},children:i.name}),Object(z.jsxs)(f.a,{container:!0,className:t.wrapperZones,style:{flexDirection:"row"},children:[Object(z.jsxs)("div",{className:t.leftZone,style:{width:"auto"},children:[Object(z.jsxs)("p",{children:[Object(z.jsxs)(S.a,{variant:"body2",component:"span",children:["Native Name:"," "]}),Object(z.jsx)(S.a,{variant:"body1",component:"span",children:i.nativeName})]}),Object(z.jsxs)("p",{children:[Object(z.jsxs)(S.a,{variant:"body2",component:"span",children:["Population:"," "]}),Object(z.jsx)(S.a,{variant:"body1",component:"span",children:i.population})]}),Object(z.jsxs)("p",{children:[Object(z.jsxs)(S.a,{variant:"body2",component:"span",children:["Region:"," "]}),Object(z.jsx)(S.a,{variant:"body1",component:"span",children:i.region})]}),Object(z.jsxs)("p",{children:[Object(z.jsxs)(S.a,{variant:"body2",component:"span",children:["Sub Region:"," "]}),Object(z.jsx)(S.a,{variant:"body1",component:"span",children:i.subregion})]}),Object(z.jsxs)("p",{children:[Object(z.jsxs)(S.a,{variant:"body2",component:"span",children:["Capital:"," "]}),Object(z.jsx)(S.a,{variant:"body1",component:"span",children:i.capital})]})]}),Object(z.jsxs)("div",{className:t.rightZone,style:{width:"auto",marginLeft:"32px"},children:[Object(z.jsxs)("p",{children:[Object(z.jsxs)(S.a,{variant:"body2",component:"span",children:["Top Level Domain:"," "]}),Object(z.jsx)(S.a,{variant:"body1",component:"span",children:h})]}),Object(z.jsxs)("p",{children:[Object(z.jsxs)(S.a,{variant:"body2",component:"span",children:["Currencies:"," "]}),Object(z.jsx)(S.a,{variant:"body1",component:"span",children:y})]}),Object(z.jsxs)("p",{children:[Object(z.jsxs)(S.a,{variant:"body2",component:"span",children:["Languages:"," "]}),Object(z.jsx)(S.a,{variant:"body1",component:"span",children:C})]})]})]})]})}})]})]})})),ne={typography:{h1:{fontSize:"clamp(16px, 2vw, 20px)",fontWeight:800},h2:{fontSize:"17px",fontWeight:800,marginBottom:"1rem"},body1:{fontSize:"14px",fontWeight:300},body2:{fontSize:"14px",fontWeight:600}}};var ce=function(){var e=c.a.useState("light"),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(z.jsx)(p.a,{theme:Object(d.a)(ne),children:Object(z.jsx)(i.a,{children:Object(z.jsxs)(l.c,{children:[Object(z.jsx)(l.a,{path:"/",exact:!0,children:Object(z.jsx)($,{state:a,setState:n})}),Object(z.jsx)(l.a,{path:"/:name",exact:!0,children:Object(z.jsx)(ae,{state:a,setState:n})})]})})})},re=(a(163),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,191)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))});s.a.render(Object(z.jsx)(c.a.StrictMode,{children:Object(z.jsx)(ce,{})}),document.getElementById("root")),re()}},[[165,1,2]]]);
//# sourceMappingURL=main.97b0854b.chunk.js.map