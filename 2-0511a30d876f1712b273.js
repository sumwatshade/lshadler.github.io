(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{169:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r}),n.d(t,"e",function(){return i}),n.d(t,"c",function(){return o}),n.d(t,"d",function(){return s});var a={brand:"#123632",lilac:"#9d7cbf",accent:"#ffb238",success:"#37b635",warning:"#ec1818",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",black:"#000"},r={xs:0,sm:576,md:768,lg:992,xl:1200},i={md:720,lg:960,xl:1140},o={fontSize:{regular:16,large:18},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.45,heading:1.2},containerPadding:1.5},s={header:60}},171:function(e,t,n){"use strict";n.d(t,"b",function(){return f});var a=n(12),r=n(0),i=n.n(r),o=n(5),s=n.n(o),d=n(43),l=n.n(d);n.d(t,"a",function(){return l.a});n(173);var c=i.a.createContext({});function u(e){var t=e.staticQueryData,n=e.data,r=e.query,o=e.render,s=n?n.data:t[r]&&t[r].data;return Object(a.d)(i.a.Fragment,null,s&&o(s),!s&&Object(a.d)("div",null,"Loading (StaticQuery)"))}var f=function(e){var t=e.data,n=e.query,r=e.render,i=e.children;return Object(a.d)(c.Consumer,null,function(e){return Object(a.d)(u,{data:t,query:n,render:r||i,staticQueryData:e})})};f.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},172:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(169),r=function(e){return e/a.c.fontSize.regular}},173:function(e,t,n){var a;e.exports=(a=n(179))&&a.default||a},174:function(e,t,n){"use strict";var a=n(170),r=n(12),i=(n(0),n(169)),o=n(172),s=Object(a.a)("div",{target:"e1ty5jj20"})("position:relative;margin-left:auto;margin-right:auto;width:auto;max-width:",Object(o.a)(i.e.lg),"em;");t.a=function(e){var t=e.children,n=e.className;return Object(r.d)(s,{className:n},t)}},175:function(e,t,n){"use strict";var a=n(170),r=n(12),i=(n(0),n(169)),o=Object(a.a)("div",{target:"e1b23cjf0"})("display:block;flex:1;position:relative;padding:",i.c.containerPadding,"rem;margin-bottom:3rem;");t.a=function(e){var t=e.children,n=e.className;return Object(r.d)(o,{className:n},t)}},176:function(e,t,n){"use strict";var a=n(170),r=n(171),i=n(169),o=Object(a.a)(r.a,{target:"euldt3d0"})("text-decoration:none;color:",i.b.white,';display:inline-block;white-space:nowrap;margin:0 1vw;transition:all 200ms ease-in;position:relative;:after{position:absolute;bottom:0;left:0;right:0;width:0%;content:".";color:transparent;background:goldenrod;height:1px;transition:all 0.4s ease-in;}:hover{color:goldenrod;::after{width:100%;}}@media (max-width:',i.a.md,"px){padding:20px 0;font-size:1.5rem;z-index:6;color:",i.b.brand,"}");t.a=o},177:function(e,t,n){"use strict";var a=n(12),r=n(178),i=n(0),o=n(180),s=n.n(o),d=n(171),l=(n(181),n(169)),c=n(172),u="\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: "+l.c.fontSize.regular+"px !important;\n    line-height: "+l.c.lineHeight.regular+" !important;\n  }\n\n  body {\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    color: "+l.b.black+";\n    background-color: "+l.b.ui.whisper+";\n  }\n\n  a {\n    color: "+l.b.brand+";\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n    }\n  }\n\n  img {\n    max-width: 100%;\n    object-fit: contain;\n    position: relative;\n  }\n\n  figure {\n    margin: 2rem 0;\n  }\n\n  figcaption {\n    font-size: 80%;\n  }\n\n  table {\n    width: 100%;\n    margin-bottom: 1rem;\n    border: 1px solid "+l.b.ui.light+";\n    font-size: 85%;\n    border-collapse: collapse;\n  }\n\n  td,\n  th {\n    padding: .25rem .5rem;\n    border: 1px solid "+l.b.ui.light+";\n  }\n\n  th {\n    text-align: left;\n  }\n\n  tbody {\n    tr {\n      &:nth-of-type(odd) {\n        td {\n          background-color: "+l.b.ui.whisper+";\n        }\n        tr {\n          background-color: "+l.b.ui.whisper+";\n        }\n      }\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 1.414rem;\n    margin-bottom: .5rem;\n    color: "+l.b.black+";\n    line-height: "+l.c.lineHeight.heading+";\n    text-rendering: optimizeLegibility;\n  }\n\n  h1 {\n    margin-top: 0;\n    font-size: "+l.c.headingSizes.h1+"rem;\n  }\n\n  h2 {\n    font-size: "+l.c.headingSizes.h2+"rem;\n  }\n\n  h3 {\n    font-size: "+l.c.headingSizes.h3+"rem;\n  }\n\n  h4, h5, h6 {\n    font-size: "+l.c.headingSizes.h4+"rem;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  strong {\n    color: "+l.b.black+";\n  }\n\n  ul,\n  ol,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  dt {\n    font-weight: bold;\n  }\n\n  dd {\n    margin-bottom: .5rem;\n  }\n\n  hr {\n    position: relative;\n    margin: 1.5rem 0;\n    border: 0;\n    border-top: 1px solid "+l.b.ui.light+";\n  }\n\n  blockquote {\n    margin: .8rem 0;\n    padding: .5rem 1rem;\n    border-left: .25rem solid "+l.b.ui.light+";\n    color: "+l.b.gray.calm+";\n\n    p {\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    @media (min-width: "+Object(c.a)(l.a.md)+"em) {\n      padding-right: 5rem;\n      padding-left: 1.25rem;\n    }\n  }\n",f=n(170),g=n(182),p=n(176),h=function(){return Object(a.d)(i.Fragment,null,Object(a.d)(p.a,{to:"/resume"},"Resume"),Object(a.d)(p.a,{to:"/blog"},"Blog"),Object(a.d)(p.a,{to:"/band"},"Band"))},m=n(174),b=Object(f.a)("header",{target:"egq1dt60"})("height:",l.d.header,"px;padding:0 ",l.c.containerPadding,"rem;background-color:",l.b.brand,";color:",Object(g.a)(.5,l.b.white),";"),y=Object(f.a)(m.a,{target:"egq1dt61"})("height:100%;display:flex;background-color:",l.b.brand,";position:relative;justify-content:space-between;align-items:center;margin:0 auto;padding:0 5vw;z-index:2;align-self:center;@media (max-width:",l.a.md,"px){position:sticky;top:0;left:0;right:0;left:0;}"),v=Object(f.a)(d.a,{target:"egq1dt62"})("color:",l.b.white,";font-size:1.2rem;font-weight:600;&:hover,&:focus{color:goldenrod;text-decoration:none;}"),w=Object(f.a)("div",{target:"egq1dt63"})({name:"m4mdps",styles:"display:none;height:100%;cursor:pointer;align-self:flex-end;@media (max-width:768px){display:flex;}"}),S=Object(f.a)("div",{target:"egq1dt64"})("display:flex;height:100%;justify-content:flex-end;align-items:center;z-index:10;@media (max-width:",l.a.md,"px){flex-direction:column;position:fixed;width:100%;justify-content:flex-start;padding-top:10vh;background-color:#fff;transition:all 0.3s ease-in;top:60px;left:",function(e){return e.open?"-100%":"0"},";}"),O=Object(f.a)("div",{target:"egq1dt65"})("background-color:",l.b.white,";align-self:flex-end;width:30px;height:3px;transition:all .3s linear;align-self:center;position:relative;transform:",function(e){return e.open?"rotate(-45deg)":"inherit"},";::before,::after{width:30px;height:3px;background-color:",l.b.white,';content:"";position:absolute;transition:all 0.3s linear;}::before{transform:',function(e){return e.open?"rotate(-90deg) translate(-10px, 0px)":"rotate(0deg)"},";top:-10px;}::after{opacity:",function(e){return e.open?"0":"1"},";transform:",function(e){return e.open?"rotate(90deg) ":"rotate(0deg)"},";top:10px;}"),x=function(e){var t=e.title,n=i.useState(!1),r=n[0],o=n[1];return Object(a.d)(b,null,Object(a.d)(y,null,Object(a.d)(v,{to:"/"},t),Object(a.d)(w,{onClick:function(){return o(!r)}},r?Object(a.d)(O,{open:!0}):Object(a.d)(O,{open:!1})),r?Object(a.d)(S,{open:!1},Object(a.d)(h,null)):Object(a.d)(S,{open:!0},Object(a.d)(h,null))))},j=Object(f.a)("div",{target:"eqtlurf0"})({name:"zf0iqh",styles:"display:flex;flex-direction:column;min-height:100vh;"}),z=function(e){var t=e.children,n=e.className;return Object(a.d)(i.Fragment,null,Object(a.d)(a.a,{styles:function(){return Object(a.c)(u)}}),Object(a.d)(j,{className:n},t))},E=Object(f.a)("main",{target:"ee4gq390"})({name:"b95f0i",styles:"display:flex;flex-direction:column;flex:1;"}),L=function(e){var t=e.children,n=e.className;return Object(a.d)(E,{className:n},t)};t.a=function(e){var t=e.children;return Object(a.d)(d.b,{query:"991718019",render:function(e){return Object(a.d)(z,null,Object(a.d)(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:e.site.siteMetadata.keywords}]}),Object(a.d)(x,{title:e.site.siteMetadata.title}),Object(a.d)(L,null,t))},data:r})}},178:function(e){e.exports={data:{site:{siteMetadata:{title:"lshadler.github.io",description:"A personal website for Lucas Shadler"}}}}},179:function(e,t,n){"use strict";n.r(t);n(67);var a=n(0),r=n.n(a),i=n(5),o=n.n(i),s=n(68),d=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json)):null};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},185:function(e,t,n){"use strict";var a=n(11);t.__esModule=!0,t.default=void 0;var r,i=a(n(8)),o=a(n(45)),s=a(n(101)),d=a(n(44)),l=a(n(0)),c=a(n(5)),u=function(e){var t=(0,d.default)({},e),n=t.resolutions,a=t.sizes,r=t.critical;return n&&(t.fixed=n,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.fluid,n=e.fixed;return(t&&t[0]||n&&n[0]).src},g=Object.create({}),p=function(e){var t=u(e),n=f(t);return g[n]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,b=m&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map(function(e){var t=e.src,n=e.srcSet,a=e.srcSetWebp,r=e.media,i=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},a&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:a,sizes:i}),l.default.createElement("source",{media:r,srcSet:n,sizes:i}))})}function w(e){var t=[],n=[];return e.forEach(function(e){return(e.media?t:n).push(e)}),t.concat(n)}function S(e){return e.map(function(e){var t=e.src,n=e.media,a=e.tracedSVG;return l.default.createElement("source",{key:t,media:n,srcSet:a})})}function O(e){return e.map(function(e){var t=e.src,n=e.media,a=e.base64;return l.default.createElement("source",{key:t,media:n,srcSet:a})})}function x(e,t){var n=e.srcSet,a=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?a:n)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var j=function(e,t){var n=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),r);return n&&(n.observe(e),y.set(e,t)),function(){n.unobserve(e),y.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)}).join("")+"<img "+l+o+s+n+a+t+i+r+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},E=function(e){var t=e.src,n=e.imageVariants,a=e.generateSources,r=e.spreadProps,i=l.default.createElement(L,(0,d.default)({src:t},r));return n.length>1?l.default.createElement("picture",null,a(n),i):i},L=l.default.forwardRef(function(e,t){var n=e.sizes,a=e.srcSet,r=e.src,i=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading"]);return l.default.createElement("img",(0,d.default)({sizes:n,srcSet:a,src:r},f,{onLoad:o,onError:c,ref:t,loading:u,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});L.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var k=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=m&&p(t),n.addNoScript=!(t.critical&&!t.fadeIn),n.useIOSupport=!h&&b&&!t.critical&&!n.seenBefore;var a=t.critical||m&&(h||!n.useIOSupport);return n.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn},n.imageRef=l.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,o.default)((0,o.default)(n))),n.handleRef=n.handleRef.bind((0,o.default)((0,o.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=u(e),n=f(t),g[n]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=u(this.props),t=e.title,n=e.alt,a=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,p=e.fluid,h=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,w=e.itemProp,x=e.loading,j=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,d.default)({opacity:j?1:0,transition:k?"opacity "+b+"ms":"none"},s),I="boolean"==typeof m?"lightgray":m,q={transitionDelay:b+"ms"},V=(0,d.default)({opacity:this.state.imgLoaded?0:1},k&&q,s,f),N={title:t,alt:this.state.isVisible?"":n,style:V,className:g};if(p){var T=p,C=T[0];return l.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(C.srcSet)},l.default.createElement(y,{style:{width:"100%",paddingBottom:100/C.aspectRatio+"%"}}),I&&l.default.createElement(y,{title:t,style:(0,d.default)({backgroundColor:I,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&q)}),C.base64&&l.default.createElement(E,{src:C.base64,spreadProps:N,imageVariants:T,generateSources:O}),C.tracedSVG&&l.default.createElement(E,{src:C.tracedSVG,spreadProps:N,imageVariants:T,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,v(T),l.default.createElement(L,{alt:n,title:t,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)({alt:n,title:t,loading:x},C,{imageVariants:T}))}}))}if(h){var P=h,M=P[0],W=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},i);return"inherit"===i.display&&delete W.display,l.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},I&&l.default.createElement(y,{title:t,style:(0,d.default)({backgroundColor:I,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},k&&q)}),M.base64&&l.default.createElement(E,{src:M.base64,spreadProps:N,imageVariants:P,generateSources:O}),M.tracedSVG&&l.default.createElement(E,{src:M.tracedSVG,spreadProps:N,imageVariants:P,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,v(P),l.default.createElement(L,{alt:n,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,d.default)({alt:n,title:t,loading:x},M,{imageVariants:P}))}}))}return null},t}(l.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),I=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});k.propTypes={resolutions:R,sizes:I,fixed:c.default.oneOfType([R,c.default.arrayOf(R)]),fluid:c.default.oneOfType([I,c.default.arrayOf(I)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var q=k;t.default=q}}]);
//# sourceMappingURL=2-0511a30d876f1712b273.js.map