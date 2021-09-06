(this["webpackJsonpjob-listing-with-multi-select"]=this["webpackJsonpjob-listing-with-multi-select"]||[]).push([[0],{25:function(n,e,t){"use strict";t.r(e);var a,r,o=t(1),i=t.n(o),c=t(13),d=t.n(c),l=t(5),s=t(3),m=t(2),u=Object(m.b)(a||(a=Object(s.a)(["",""])),Object(m.c)(r||(r=Object(s.a)(["\n  :root {\n    --desaturated-dark-cyan: hsl(180, 29%, 50%);\n    --light-grayish-cyan-background: hsl(180, 52%, 96%);\n    --light-grayish-cyan-filter-pill: hsl(180, 31%, 95%);\n    --dark-grayish-cyan: hsl(180, 8%, 52%);\n    --very-dark-grayish-cyan: hsl(180, 14%, 20%);\n\n    --ff-brand: 'Spartan', sans-serif;\n    --fs-global: 0.97em;\n    --fw-normal: 500;\n    --fw-bold: 700;\n\n    --box-shadow: 0px 8px 24px rgba(91, 164, 164, 0.25);\n    --timing-cubic: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: var(--ff-brand);\n  }\n\n  html {\n    font-size: 1vw;\n    font-weight: var(--fw-normal);\n    -ms-overflow-style: none; /* for Internet Explorer, Edge */\n    scrollbar-width: none; /* for Firefox */\n    overflow-y: scroll;\n    background: ",";\n    &::-webkit-scrollbar {\n      display: none; /* for Chrome, Safari, and Opera */\n    }\n\n    @media screen and (max-width: 1000px) {\n      font-size: var(---fs-global);\n    }\n  }\n"])),(function(n){return n.theme.body})));u.displayName="GlobalStyles";var b,p,f=u,g=m.d.section(b||(b=Object(s.a)(["\n  background: ",";\n  transition: all 0.2s ease-out;\n"])),(function(n){return n.theme.body}));g.displayName="Section";var h,j,v=m.d.div(p||(p=Object(s.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 5.56em 11.11em;\n\n  @media screen and (max-width: 1000px) {\n    padding: 2.78em 1.67em;\n  }\n"])));v.displayName="Container";var x=m.d.img(h||(h=Object(s.a)(["\n  width: 100%;\n  height: 11.11em;\n  object-fit: cover;\n  transform: scale(1.1);\n\n  @media screen and (max-width: 1000px) {\n    height: 7.2em;\n  }\n"])));x.displayName="Image";var y=m.d.div(j||(j=Object(s.a)(["\n  overflow: hidden;\n  background: ",";\n"])),(function(n){return n.theme.decoBg}));y.displayName="Wrapper";var O,w,k,S,F,N=t.p+"static/media/bg-header-desktop.8694f466.svg",C=t.p+"static/media/bg-header-mobile.9cb13612.svg",z=t(0),J=m.d.button(O||(O=Object(s.a)(["\n  position: absolute;\n  top: 1em;\n  right: 7em;\n  font-size: 1.6em;\n  width: 2em;\n  height: 2em;\n  display: grid;\n  place-items: center;\n  border: none;\n  background: hsl(180, 29%, 50%);\n  background: ",";\n  border-radius: 0.2em;\n  transition: all 0.2s ease-out;\n\n  &:active {\n    transform: scale(0.95);\n  }\n\n  @media screen and (max-width: 1000px) {\n    top: 0.5em;\n    right: 1em;\n  }\n  @media screen and (max-width: 786px) {\n    top: 0.63em;\n  }\n"])),(function(n){return n.theme.cardBg}));J.displayName="Button";var T=Object(m.e)(w||(w=Object(s.a)(["\n  from{\n    transform: scale(0.5)\n  }\n  to{\n    transform: scale(1)\n  }\n"]))),B=Object(m.e)(k||(k=Object(s.a)(["\n  from{\n    transform: scale(0.5) rotate(0deg)\n  }\n  to{\n    transform: scale(1) rotate(360deg)\n  }\n"]))),A=m.d.span(S||(S=Object(s.a)(["\n  animation: "," 0.2s ease-out forwards;\n"])),T);A.displayName="Icon";var D=m.d.span(F||(F=Object(s.a)(["\n  animation: "," 0.2s ease-out forwards;\n"])),B);D.displayName="SunIcon";var E,I,W,M,L,R,P,H,U,V,Y,K,G,X,Z,q=function(n){var e=n.theme,t=n.toggleTheme;return Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)(J,{title:"Theme Toggler",onClick:t,children:["light"===e&&Object(z.jsx)(A,{children:"\ud83c\udf1c"}),"dark"===e&&Object(z.jsx)(D,{children:"\ud83c\udf1e"})]})})},Q=function(n){var e=n.theme,t=n.toggleTheme,a=Object(o.useState)(N),r=Object(l.a)(a,2),i=r[0],c=r[1],d=function(){window.innerWidth<=786?c(C):c(N)};return Object(o.useEffect)((function(){d()}),[]),Object(o.useEffect)((function(){return window.addEventListener("resize",d),function(){return window.removeEventListener("resize",d)}}),[]),Object(z.jsx)(g,{children:Object(z.jsxs)(y,{children:[Object(z.jsx)(x,{src:i,alt:"decorated image"}),Object(z.jsx)(q,{theme:e,toggleTheme:t})]})})},$=t(4),_=t(6),nn=[{id:1,company:"Photosnap",logo:"https://i.ibb.co/XyCMjgw/photosnap.png",new:!0,featured:!0,position:"Senior Frontend Developer",role:"Frontend",level:"Senior",postedAt:"1d ago",contract:"Full Time",location:"USA Only",languages:["HTML","CSS","JavaScript"],tools:[]},{id:2,company:"Manage",logo:"https://i.ibb.co/cDKpYwj/manage.png",new:!0,featured:!0,position:"Fullstack Developer",role:"Fullstack",level:"Midweight",postedAt:"1d ago",contract:"Part Time",location:"Remote",languages:["Python"],tools:["React"]},{id:3,company:"Account",logo:"https://i.ibb.co/n3wcHth/account.png",new:!0,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2d ago",contract:"Part Time",location:"USA Only",languages:["JavaScript"],tools:["React","Sass"]},{id:4,company:"MyHome",logo:"https://i.ibb.co/hZpvng1/myhome.png",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"5d ago",contract:"Contract",location:"USA Only",languages:["CSS","JavaScript"],tools:[]},{id:5,company:"Loop Studios",logo:"https://i.ibb.co/2cD647y/loop-studios.png",new:!1,featured:!1,position:"Software Engineer",role:"Fullstack",level:"Midweight",postedAt:"1w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript"],tools:["Ruby","Sass"]},{id:6,company:"FaceIt",logo:"https://i.ibb.co/G0NkcNY/faceit.png",new:!1,featured:!1,position:"Junior Backend Developer",role:"Backend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"UK Only",languages:["Ruby"],tools:["RoR"]},{id:7,company:"Shortly",logo:"https://i.ibb.co/xS2BB04/shortly.png",new:!1,featured:!1,position:"Junior Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"Worldwide",languages:["HTML","JavaScript"],tools:["Sass"]},{id:8,company:"Insure",logo:"https://i.ibb.co/bBTm25V/insure.png",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"USA Only",languages:["JavaScript"],tools:["Vue","Sass"]},{id:9,company:"Eyecam Co.",logo:"https://i.ibb.co/jTK0HRz/eyecam-co.png",new:!1,featured:!1,position:"Full Stack Engineer",role:"Fullstack",level:"Midweight",postedAt:"3w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript","Python"],tools:["Django"]},{id:10,company:"The Air Filter Company",logo:"https://i.ibb.co/7Cs5gWY/the-air-filter-company.png",new:!1,featured:!1,position:"Front-end Dev",role:"Frontend",level:"Junior",postedAt:"1mo ago",contract:"Part Time",location:"Worldwide",languages:["JavaScript"],tools:["React","Sass"]}],en=Object(o.createContext)(),tn=function(n){var e=n.children,t=Object(o.useState)(nn.map((function(n){return Object(_.a)(Object(_.a)({},n),{},{show:!0})}))),a=Object(l.a)(t,2),r=a[0],i=a[1],c=Object(o.useState)([]),d=Object(l.a)(c,2),s=d[0],m=d[1];return Object(o.useEffect)((function(){var n=s.map((function(n){return n.text})),e=r.map((function(e){var t=[e.role,e.level].concat(Object($.a)(e.languages),Object($.a)(e.tools),[e.new&&"New",e.featured&&"Featured"]);return n.every((function(n){return t.includes(n)}))?Object(_.a)(Object(_.a)({},e),{},{show:!0}):Object(_.a)(Object(_.a)({},e),{},{show:!1})}));i(e)}),[s]),Object(z.jsx)(en.Provider,{value:{allJobs:r,setAllJobs:i,filters:s,setFilters:m,removeFilter:function(n){var e=s.filter((function(e){return e.id!==n.id}));m(e)},addFilter:function(n){if(!s.some((function(e){return e.text===n}))){var e={id:(new Date).getTime(),text:n};m((function(n){return[].concat(Object($.a)(n),[e])}))}return!1},clearAllFilters:function(){m([])}},children:e})},an=Object(m.c)(E||(E=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),rn=Object(m.c)(I||(I=Object(s.a)(["\n  transition: all 0.2s var(--timing-cubic);\n"]))),on=Object(m.e)(W||(W=Object(s.a)(["\n  from {\n    opacity: 0;\n    transform: translatey(2.22em);\n  }\n  to {\n    opacity: 1;\n    transform: translatey(0);\n  }\n"]))),cn=m.d.div(M||(M=Object(s.a)(["\n  background: ",";\n\n  padding: 2.22em 2.78em;\n  border-radius: 0.5em;\n  ","\n  margin-bottom: 1.67em;\n  box-shadow: ",";\n  animation: "," 0.2s var(--timing-cubic) forwards;\n  border-left: ",";\n\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n\n  @media screen and (max-width: 1000px) {\n    align-items: flex-end;\n  }\n\n  @media screen and (max-width: 789px) {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 1.67em;\n    margin-bottom: 2.78em;\n  }\n"])),(function(n){return n.theme.cardBg}),an,(function(n){return"light"===n.theme?"var(--box-shadow)":"none"}),on,(function(n){return n.featured?"0.35em solid var(--desaturated-dark-cyan)":null}));cn.displayName="Wrapper";var dn=m.d.div(L||(L=Object(s.a)(["\n  ","\n  flex-wrap: wrap;\n  height: 100%;\n\n  @media screen and (max-width: 1000px) {\n    &:last-of-type {\n      justify-content: flex-end;\n    }\n  }\n\n  @media screen and (max-width: 789px) {\n    &:last-of-type {\n      justify-content: flex-start;\n      margin-top: 1.39em;\n      padding-top: 0.56em;\n      border-top: 0.07em solid var(--very-dark-grayish-cyan);\n    }\n  }\n"])),an);dn.displayName="Column";var ln=m.d.div(R||(R=Object(s.a)(["\n  margin-left: 1.67em;\n\n  @media screen and (max-width: 1000px) {\n    margin-left: 0;\n    margin-top: 1.67em;\n    width: 100%;\n  }\n\n  @media screen and (max-width: 789px) {\n    margin-top: 1.11em;\n  }\n"])));ln.displayName="CompanyInfoWrapper";var sn=m.d.img(P||(P=Object(s.a)(["\n  width: 6.11em;\n  height: 6.11em;\n  border-radius: 100vw;\n\n  @media screen and (max-width: 789px) {\n    width: 3.33em;\n    height: 3.33em;\n    margin-top: -3.4em;\n  }\n"])));sn.displayName="CompanyLogo";var mn=m.d.h2(H||(H=Object(s.a)(["\n  font-size: var(--fs-global);\n  font-weight: var(--fw-bold);\n  color: var(--desaturated-dark-cyan);\n  display: inline;\n\n  @media screen and (max-width: 789px) {\n    font-size: 0.83em;\n  }\n"])));mn.displayName="CompanyName";var un=m.d.h3(U||(U=Object(s.a)(["\n  color: ",";\n  margin: 0.8em 0 0.6em;\n  ",";\n  cursor: pointer;\n\n  &:hover {\n    color: var(--desaturated-dark-cyan);\n  }\n\n  @media screen and (max-width: 789px) {\n    font-size: 0.97em;\n    margin: 0.8em 0;\n  }\n"])),(function(n){return n.theme.text}),rn);un.displayName="JobTitle";var bn=m.d.div(V||(V=Object(s.a)(["\n  ","\n\n  @media screen and (max-width: 1000px) {\n    width: 85%;\n  }\n\n  @media screen and (max-width: 789px) {\n    width: 90%;\n  }\n"])),an);bn.displayName="MetaInfoWrapper";var pn=m.d.span(Y||(Y=Object(s.a)(["\n  color: var(--dark-grayish-cyan);\n  font-size: 0.97em;\n\n  @media screen and (max-width: 789px) {\n    font-size: 12px;\n  }\n"])));pn.displayName="MetaInfo";var fn=m.d.div(K||(K=Object(s.a)(["\n  width: 0.2em;\n  height: 0.2em;\n  margin: 0 0.8em;\n  border-radius: 100vw;\n  background: var(--dark-grayish-cyan);\n"])));fn.displayName="MetaInfoDot";var gn=m.d.button(G||(G=Object(s.a)(["\n  font-size: var(--fs-global);\n  color: ",";\n  background: ",";\n  padding: 0.56em;\n  margin-left: 0.56em;\n  border-radius: 0.3em;\n  outline: none;\n  border: none;\n  font-weight: var(--fw-bold);\n  ",";\n  cursor: pointer;\n\n  :hover {\n    color: white;\n    background: ",";\n  }\n\n  @media screen and (max-width: 1000px) {\n    margin: 0.56em 0.56em 0;\n  }\n\n  @media screen and (max-width: 789px) {\n    margin: 1.11em 1.11em 0 0;\n    font-size: 0.83em;\n  }\n"])),(function(n){return n.theme.pillText}),(function(n){return n.theme.pillBg}),rn,(function(n){return n.theme.pillBgDark}));gn.displayName="Skill";var hn=m.d.span(X||(X=Object(s.a)(["\n  padding: 0.69em 0.69em 0.42em;\n  background: var(--desaturated-dark-cyan);\n  color: white;\n  border-radius: 100vw;\n  margin-left: 1.11em;\n  text-transform: uppercase;\n  font-size: 0.69em;\n  font-weight: var(--fw-bold);\n  cursor: pointer;\n\n  @media screen and (max-width: 789px) {\n    font-size: 0.56em;\n  }\n"])));hn.displayName="NewJob";var jn=Object(m.d)(hn)(Z||(Z=Object(s.a)(["\n  background: var(--very-dark-grayish-cyan);\n"])));jn.displayName="FeaturedJob";var vn,xn,yn,On,wn,kn=function(n){var e=n.job,t=Object(o.useContext)(en),a=t.filters,r=t.addFilter,i=[e.role,e.level].concat(Object($.a)(e.languages),Object($.a)(e.tools));return Object(z.jsxs)(cn,{featured:e.featured,children:[Object(z.jsxs)(dn,{children:[Object(z.jsx)(sn,{src:e.logo,alt:"".concat(e.company," Logo")}),Object(z.jsxs)(ln,{children:[Object(z.jsx)(mn,{children:e.company}),e.new&&Object(z.jsx)(hn,{onClick:function(){return r("New")},children:"New!"}),e.featured&&Object(z.jsx)(jn,{onClick:function(){return r("Featured")},children:"Featured"}),Object(z.jsx)(un,{children:e.position}),Object(z.jsxs)(bn,{children:[Object(z.jsx)(pn,{children:e.postedAt}),Object(z.jsx)(fn,{}),Object(z.jsx)(pn,{children:e.contract}),Object(z.jsx)(fn,{}),Object(z.jsx)(pn,{children:e.location})]})]})]}),Object(z.jsx)(dn,{children:i.map((function(n,e){return Object(z.jsx)(gn,{isAlreadySelected:a.some((function(n){return n.text===i[e]})),onClick:function(){r(i[e])},children:n},e)}))})]},e.id)},Sn=function(){var n=Object(o.useContext)(en).allJobs;return Object(z.jsx)(g,{children:Object(z.jsxs)(v,{children:[Object(z.jsx)(In,{}),n.map((function(n){return n.show&&Object(z.jsx)(kn,{job:n},n.id)}))]})})},Fn=m.d.div(vn||(vn=Object(s.a)(["\n  width: 100%;\n  min-height: 5.3em;\n  background: ",";\n  box-shadow: ",";\n  margin-bottom: 2.78em;\n  border-radius: 0.5em;\n  display: flex;\n  align-items: center;\n  padding: 0.83em 1.39em;\n  margin-top: -8.3em;\n  position: sticky;\n  top: 1.67em;\n  z-index: 2;\n\n  @media screen and (max-width: 1000px) {\n    margin-top: -5.5em;\n    padding: 0.42em 0.84em;\n  }\n\n  @media screen and (max-width: 789px) {\n    margin-top: -6em;\n    font-size: 0.83em;\n    margin-bottom: 3.5em;\n  }\n"])),(function(n){return n.theme.cardBg}),(function(n){return"light"===n.theme?"var(--box-shadow)":"none"}));Fn.displayName="Wrapper";var Nn=m.d.div(xn||(xn=Object(s.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"])));Nn.displayName="FilterPillsWrapper";var Cn=m.d.input(yn||(yn=Object(s.a)(["\n  padding: 0.28em 0;\n  border: none;\n  outline: none;\n  font-size: var(--fs-global);\n  color: var(--desaturated-dark-cyan);\n  font-weight: var(--fw-bold);\n  background: ",";\n"])),(function(n){return n.theme.cardBg}));Cn.displayName="FilterInput";var zn=m.d.button(On||(On=Object(s.a)(["\n  margin-left: auto;\n  background: none;\n  border: none;\n  color: var(--desaturated-dark-cyan);\n  text-decoration: underline;\n  font-weight: var(--fw-bold);\n  font-size: 0.9em;\n  opacity: 0.5;\n  transition: all 0.2s var(--timing-cubic);\n\n  &:hover {\n    opacity: 1;\n  }\n"])));zn.displayName="ClearButton";var Jn=m.d.p(wn||(wn=Object(s.a)(["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 1.39em;\n  color: var(--desaturated-dark-cyan);\n  opacity: 0.5;\n  font-size: var(--fs-global);\n  font-weight: var(--fw-bold);\n\n  @media screen and (max-width: 1000px) {\n    left: 0.84em;\n  }\n"])));Jn.displayName="Placeholder";var Tn,Bn,An,Dn,En=t(17),In=function(){var n=Object(o.useState)(""),e=Object(l.a)(n,2),t=e[0],a=e[1],r=Object(o.useState)([]),i=Object(l.a)(r,2),c=i[0],d=i[1],s=Object(o.useRef)(null),m=Object(o.useContext)(en),u=m.allJobs,b=m.filters,p=m.setFilters,f=m.clearAllFilters,g=Object(o.useCallback)((function(n){"Enter"===n.key&&t.length>0&&c.includes(t)&&(p((function(n){return[].concat(Object($.a)(n),[{id:(new Date).getTime(),text:t}])})),a(""),s.current.blur())}),[p,t]);Object(o.useEffect)((function(){return document.addEventListener("keyup",g),function(){return document.removeEventListener("keyup",g)}}),[g]);var h=function(n){var e,t=[],a=Object(En.a)(n);try{for(a.s();!(e=a.n()).done;){var r=e.value;r&&!t.includes(r)&&t.push(r)}}catch(o){a.e(o)}finally{a.f()}return t}(u.map((function(n){return[n.role,n.level].concat(Object($.a)(n.languages),Object($.a)(n.tools),[n.new&&"New",n.featured&&"Featured"])})).reduce((function(n,e){return[].concat(Object($.a)(n),Object($.a)(e))}))).sort();return Object(o.useEffect)((function(){var n=h.filter((function(n){return n.toLowerCase().includes(t.toLowerCase())}));d(n)}),[t]),Object(z.jsxs)(Fn,{onClick:function(){return s.current.focus()},children:[Object(z.jsx)(Nn,{children:b.map((function(n){return Object(z.jsx)(Kn,{filter:n},n.id)}))}),0===t.length&&0===b.length&&Object(z.jsx)(Jn,{children:"Search your dream job..."}),Object(z.jsx)(Cn,{type:"text",autoComplete:"off",size:t.length?t.length:1,value:t,onChange:function(n){return a(n.target.value)},ref:s}),t.length>0&&Object(z.jsx)($n,{value:t,setValue:a,dropdownTexts:c}),Object(z.jsx)(zn,{onClick:function(){f(),a(""),s.current.blur()},children:"Clear"})]})},Wn=Object(m.e)(Tn||(Tn=Object(s.a)(["\n  from {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n"]))),Mn=m.d.div(Bn||(Bn=Object(s.a)(["\n  display: flex;\n  overflow: hidden;\n  margin: 0.56em;\n  animation: "," 0.2s var(--timing-cubic) forwards;\n\n  @media screen and (max-width: 789px) {\n    margin: 0.28em;\n  }\n"])),Wn);Mn.displayName="Wrapper";var Ln=m.d.span(An||(An=Object(s.a)(["\n  font-size: var(--fs-global);\n  color: var(--desaturated-dark-cyan);\n  background: var(--light-grayish-cyan-filter-pill);\n  padding: 0.56em 0.56em 0.28em;\n  font-weight: var(--fw-bold);\n  border: 0.14em solid var(--desaturated-dark-cyan);\n  border-radius: 0.3em 0 0 0.3em;\n  border-right: none;\n  user-select: none;\n\n  @media screen and (max-width: 789px) {\n    font-size: 0.83em;\n  }\n"])));Ln.displayName="Pill";var Rn=m.d.button(Dn||(Dn=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.22em;\n  border: none;\n  outline: none;\n  background: var(--desaturated-dark-cyan);\n  transition: var(--timing-cubic);\n  border: 0.14em solid var(--desaturated-dark-cyan);\n  border-left: none;\n  border-radius: 0 0.3em 0.3em 0;\n\n  &:hover {\n    background: ",";\n    border-color: ",";\n  }\n\n  & > img {\n    width: 0.8em;\n    height: 0.8em;\n  }\n"])),(function(n){return n.theme.pillBgDark}),(function(n){return n.theme.pillBgDark}));Rn.displayName="RemoveButton";var Pn,Hn,Un,Vn,Yn=t.p+"static/media/icon-remove.70c075ce.svg",Kn=function(n){var e=n.filter,t=Object(o.useContext)(en).removeFilter;return Object(z.jsxs)(Mn,{children:[Object(z.jsx)(Ln,{children:e.text}),Object(z.jsx)(Rn,{onClick:function(){return t(e)},children:Object(z.jsx)("img",{src:Yn,alt:"remove filter"})})]})},Gn=Object(m.e)(Pn||(Pn=Object(s.a)(["\n  from {\n    opacity: 0;\n    transform: translatey(2.22em);\n  }\n  to {\n    opacity: 1;\n    transform: translatey(0);\n  }\n"]))),Xn=m.d.div(Hn||(Hn=Object(s.a)(["\n  width: 100%;\n  max-height: 24em;\n  background: ",";\n  box-shadow: ",";\n  border-radius: 0.5em;\n  margin-top: -2.22em;\n  position: absolute;\n  left: 0;\n  top: 8em;\n  z-index: 2;\n  animation: "," 0.2s var(--timing-cubic) forwards;\n\n  -ms-overflow-style: none; /* for Internet Explorer, Edge */\n  scrollbar-width: none; /* for Firefox */\n  overflow-y: scroll;\n\n  &::-webkit-scrollbar {\n    display: none; /* for Chrome, Safari, and Opera */\n  }\n"])),(function(n){return n.theme.cardBg}),(function(n){return"light"===n.theme?"var(--box-shadow)":"none"}),Gn);Xn.displayName="Wrapper";var Zn=m.d.p(Un||(Un=Object(s.a)(["\n  font-size: 0.83em;\n  color: var(--desaturated-dark-cyan);\n  padding: 0.56em 1.11em;\n  font-weight: var(--fw-normal);\n  user-select: none;\n  cursor: pointer;\n  transition: padding 0.2s ease-out;\n  border-left: 0.3em solid transparent;\n\n  &:first-of-type {\n    padding-top: 1.11em;\n  }\n  &:last-of-type {\n    padding-bottom: 0.97em;\n  }\n\n  &:hover {\n    padding-left: 1.56em;\n    border-color: var(--desaturated-dark-cyan);\n  }\n"])));Zn.displayName="DropdownItem";var qn=m.d.div(Vn||(Vn=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  padding: 1.11em;\n  font-size: 0.83em;\n  color: red;\n\n  & > img {\n    width: 3em;\n    margin-left: 0.56em;\n  }\n"])));qn.displayName="Empty";var Qn=t.p+"static/media/itachi-troll-face.e37f91a5.png",$n=function(n){var e=n.setValue,t=n.dropdownTexts,a=Object(o.useContext)(en).addFilter;return Object(z.jsx)(Xn,{children:t.length>0?t.map((function(n,t){return Object(z.jsx)(Zn,{onClick:function(){a(n),e("")},children:n},t)})):Object(z.jsxs)(qn,{children:[Object(z.jsx)("p",{children:"We don't have such category at the moment."}),Object(z.jsx)("img",{src:Qn,alt:""})]})})},_n={body:"#effafa",cardBg:"#fff",text:"#1c1d1d",pillBg:"hsl(180, 31%, 95%)",pillText:"hsl(180, 29%, 50%)",pillBgDark:"hsl(180, 29%, 50%)",decoBg:"hsl(180, 29%, 50%)"},ne={body:"#1c1d1d",cardBg:"#292b2b",text:"#fff",pillBg:"hsl(180, 29%, 50%)",pillText:"hsl(180, 31%, 95%)",pillBgDark:"hsl(180, 29%, 40%)",decoBg:"hsl(180, 29%, 35%)"},ee=function(){var n=Object(o.useState)(localStorage.getItem("theme")||"light"),e=Object(l.a)(n,2),t=e[0],a=e[1],r=function(n){localStorage.setItem("theme",n),a(n)};return Object(o.useEffect)((function(){matchMedia("(prefers-color-scheme: dark)").matches&&a("dark")}),[]),[t,function(){r("light"===t?"dark":"light")}]},te=function(){var n=ee(),e=Object(l.a)(n,2),t=e[0],a=e[1];return Object(z.jsx)(m.a,{theme:"light"===t?_n:ne,children:Object(z.jsxs)(tn,{children:[Object(z.jsx)(f,{}),Object(z.jsx)(Q,{theme:t,toggleTheme:a}),Object(z.jsx)(Sn,{})]})})};d.a.render(Object(z.jsx)(i.a.StrictMode,{children:Object(z.jsx)(te,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.ed2fc085.chunk.js.map