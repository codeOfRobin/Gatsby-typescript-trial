(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{145:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(152),i=n(156),o=n(153),c=n(159);t.default=function(){return r.createElement(c.a,null,r.createElement(i.a,null,r.createElement(o.a,null,r.createElement("h1",null,"404: Page not found."),r.createElement("p",null,"You've hit the void. ",r.createElement(a.Link,{to:"/"},"Go back.")))))}},150:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"d",function(){return a}),n.d(t,"a",function(){return i}),n.d(t,"f",function(){return o}),n.d(t,"c",function(){return c}),n.d(t,"e",function(){return l});var r={brand:"#663399",lilac:"#9d7cbf",accent:"#ffb238",success:"#37b635",warning:"#ec1818",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",black:"#000"},a={sansSerif:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},i={xs:0,sm:576,md:768,lg:992,xl:1200},o={md:720,lg:960,xl:1140},c={fontSize:{regular:16,large:18},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.45,heading:1.2},containerPadding:1.5},l={header:60}},152:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return h});var r=n(0),a=n.n(r),i=n(4),o=n.n(i),c=n(149),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(27);n.d(t,"waitForRouteChange",function(){return s.c});var d=n(155),u=n.n(d);n.d(t,"PageRenderer",function(){return u.a});var m=n(38);n.d(t,"parsePath",function(){return m.a});var f=a.a.createContext({}),h=function(e){return a.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(e,t,n){"use strict";var r=n(0),a=n(151),i=n(150),o=n(154),c=Object(a.a)("div",{target:"e1c6zxln0"})("position:relative;margin-left:auto;margin-right:auto;width:auto;max-width:",Object(o.a)(i.f.lg),"em;");t.a=function(e){var t=e.children,n=e.className;return r.createElement(c,{className:n},t)}},154:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(150),a=function(e){return e/r.c.fontSize.regular}},155:function(e,t,n){var r;e.exports=(r=n(158))&&r.default||r},156:function(e,t,n){"use strict";var r=n(0),a=n(151),i=n(150),o=Object(a.a)("div",{target:"e20rco30"})("display:block;flex:1;position:relative;padding:",i.c.containerPadding,"rem;margin-bottom:3rem;");t.a=function(e){var t=e.children,n=e.className;return r.createElement(o,{className:n},t)}},157:function(e){e.exports={data:{site:{siteMetadata:{title:"gatsby-starter-typescript-plus",description:"A starter kit for TypeScript-based Gatsby projects with sensible defaults."}}}}},158:function(e,t,n){"use strict";n.r(t);n(39);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),c=n(52),l=n(1),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(c.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},159:function(e,t,n){"use strict";var r=n(157),a=n(0),i=n(160),o=n.n(i),c=n(152),l=(n(161),n(81)),s=n(150),d=n(154);Object(l.injectGlobal)("html{box-sizing:border-box;}*,*::before,*::after{box-sizing:inherit;}html{font-size:",s.c.fontSize.regular,"px !important;line-height:",s.c.lineHeight.regular," !important;}body{width:100%;overflow-x:hidden;overflow-y:scroll;font-family:",s.d.sansSerif,";color:",s.b.black,";background-color:",s.b.white,";-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}a{color:",s.b.brand,";text-decoration:none;&:hover,&:focus{text-decoration:underline;}}img{max-width:100%;object-fit:contain;position:relative;}figure{margin:2rem 0;}figcaption{font-size:80%;}table{width:100%;margin-bottom:1rem;border:1px solid ",s.b.ui.light,";font-size:85%;border-collapse:collapse;}td,th{padding:.25rem .5rem;border:1px solid ",s.b.ui.light,";}th{text-align:left;}tbody{tr{&:nth-child(odd){td{background-color:",s.b.ui.whisper,";}tr{background-color:",s.b.ui.whisper,";}}}}h1,h2,h3,h4,h5,h6{margin-top:1.414rem;margin-bottom:.5rem;color:",s.b.black,";font-weight:600;line-height:",s.c.lineHeight.heading,";text-rendering:optimizeLegibility;}h1{margin-top:0;font-size:",s.c.headingSizes.h1,"rem;}h2{font-size:",s.c.headingSizes.h2,"rem;}h3{font-size:",s.c.headingSizes.h3,"rem;}h4,h5,h6{font-size:",s.c.headingSizes.h4,"rem;}p{margin-top:0;margin-bottom:1rem;}strong{color:",s.b.black,";}ul,ol,dl{margin-top:0;margin-bottom:1rem;}dt{font-weight:bold;}dd{margin-bottom:.5rem;}hr{position:relative;margin:1.5rem 0;border:0;border-top:1px solid ",s.b.ui.light,";}blockquote{margin:.8rem 0;padding:.5rem 1rem;border-left:.25rem solid ",s.b.ui.light,";color:",s.b.gray.calm,";p{&:last-child{margin-bottom:0;}}@media (min-width:",Object(d.a)(s.a.md),"em){padding-right:5rem;padding-left:1.25rem;}}");var u=n(151),m=n(162),f=n(153),h=Object(u.a)("header",{target:"e14yya1q0"})("height:",s.e.header,"px;padding:0 ",s.c.containerPadding,"rem;background-color:",s.b.brand,";color:",Object(m.a)(.5,s.b.white),";"),g=Object(u.a)(f.a,{target:"e14yya1q1"})("display:flex;flex-direction:row;align-items:center;height:100%;"),b=Object(u.a)(c.Link,{target:"e14yya1q2"})("color:",s.b.white,";font-size:1.5rem;font-weight:600;&:hover,&:focus{text-decoration:none;}"),p=function(e){var t=e.title;return a.createElement(h,null,a.createElement(g,null,a.createElement(b,{to:"/"},t)))},y=Object(u.a)("div",{target:"e17su9850"})("display:flex;flex-direction:column;min-height:100vh;"),v=function(e){var t=e.children,n=e.className;return a.createElement(y,{className:n},t)},w=Object(u.a)("main",{target:"e1qy7fsr0"})("display:flex;flex-direction:column;flex:1;"),x=function(e){var t=e.children,n=e.className;return a.createElement(w,{className:n},t)};t.a=function(e){var t=e.children;return a.createElement(c.StaticQuery,{query:"991718019",render:function(e){return a.createElement(v,null,a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:"gatsbyjs, gatsby, javascript, sample, something"}]}),a.createElement(p,{title:e.site.siteMetadata.title}),a.createElement(x,null,t))},data:r})}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-d4c5307ce310520c2762.js.map