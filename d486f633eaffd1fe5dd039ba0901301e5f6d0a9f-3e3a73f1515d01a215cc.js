(self.webpackChunkbryanfinster_com=self.webpackChunkbryanfinster_com||[]).push([[27],{7055:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var r=n(2122),i=n(1253),o=n(7294),a=n(3935),c=n(5505),s=n(1291),u=n(7544),l=n(4621),d=n(4095),f=n(7329),p=n(9756),m=n(3349),v=n(3552),h=n(1278);function g(e,t){var n=Object.create(null);return e&&o.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,o.isValidElement)(e)?t(e):e}(e)})),n}function x(e,t,n){return null!=n[t]?n[t]:e.props[t]}function b(e,t,n){var r=g(e.children),i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),o=[];for(var a in e)a in t?o.length&&(i[a]=o,o=[]):o.push(a);var c={};for(var s in t){if(i[s])for(r=0;r<i[s].length;r++){var u=i[s][r];c[i[s][r]]=n(u)}c[s]=n(s)}for(r=0;r<o.length;r++)c[o[r]]=n(o[r]);return c}(t,r);return Object.keys(i).forEach((function(a){var c=i[a];if((0,o.isValidElement)(c)){var s=a in t,u=a in r,l=t[a],d=(0,o.isValidElement)(l)&&!l.props.in;!u||s&&!d?u||!s||d?u&&s&&(0,o.isValidElement)(l)&&(i[a]=(0,o.cloneElement)(c,{onExited:n.bind(null,c),in:l.props.in,exit:x(c,"exit",e),enter:x(c,"enter",e)})):i[a]=(0,o.cloneElement)(c,{in:!1}):i[a]=(0,o.cloneElement)(c,{onExited:n.bind(null,c),in:!0,exit:x(c,"exit",e),enter:x(c,"enter",e)})}})),i}var y=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},w=function(e){function t(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind((0,m.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,v.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,i=t.children,a=t.handleExited;return{children:t.firstRender?(n=e,r=a,g(n.children,(function(e){return(0,o.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:x(e,"appear",n),enter:x(e,"enter",n),exit:x(e,"exit",n)})}))):b(e,i,a),firstRender:!1}},n.handleExited=function(e,t){var n=g(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,r.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=(0,p.Z)(e,["component","childFactory"]),i=this.state.contextValue,a=y(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?o.createElement(h.Z.Provider,{value:i},a):o.createElement(h.Z.Provider,{value:i},o.createElement(t,r,a))},t}(o.Component);w.defaultProps={component:"div",childFactory:function(e){return e}};var E=w,Z="undefined"==typeof window?o.useEffect:o.useLayoutEffect;var S=function(e){var t=e.classes,n=e.pulsate,r=void 0!==n&&n,i=e.rippleX,a=e.rippleY,s=e.rippleSize,l=e.in,d=e.onExited,f=void 0===d?function(){}:d,p=e.timeout,m=o.useState(!1),v=m[0],h=m[1],g=(0,c.Z)(t.ripple,t.rippleVisible,r&&t.ripplePulsate),x={width:s,height:s,top:-s/2+a,left:-s/2+i},b=(0,c.Z)(t.child,v&&t.childLeaving,r&&t.childPulsate),y=(0,u.Z)(f);return Z((function(){if(!l){h(!0);var e=setTimeout(y,p);return function(){clearTimeout(e)}}}),[y,l,p]),o.createElement("span",{className:g,style:x},o.createElement("span",{className:b}))},M=o.forwardRef((function(e,t){var n=e.center,a=void 0!==n&&n,s=e.classes,u=e.className,l=(0,i.Z)(e,["center","classes","className"]),d=o.useState([]),p=d[0],m=d[1],v=o.useRef(0),h=o.useRef(null);o.useEffect((function(){h.current&&(h.current(),h.current=null)}),[p]);var g=o.useRef(!1),x=o.useRef(null),b=o.useRef(null),y=o.useRef(null);o.useEffect((function(){return function(){clearTimeout(x.current)}}),[]);var w=o.useCallback((function(e){var t=e.pulsate,n=e.rippleX,r=e.rippleY,i=e.rippleSize,a=e.cb;m((function(e){return[].concat((0,f.Z)(e),[o.createElement(S,{key:v.current,classes:s,timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:i})])})),v.current+=1,h.current=a}),[s]),Z=o.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=t.pulsate,i=void 0!==r&&r,o=t.center,c=void 0===o?a||t.pulsate:o,s=t.fakeElement,u=void 0!==s&&s;if("mousedown"===e.type&&g.current)g.current=!1;else{"touchstart"===e.type&&(g.current=!0);var l,d,f,p=u?null:y.current,m=p?p.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(c||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)l=Math.round(m.width/2),d=Math.round(m.height/2);else{var v=e.touches?e.touches[0]:e,h=v.clientX,E=v.clientY;l=Math.round(h-m.left),d=Math.round(E-m.top)}if(c)(f=Math.sqrt((2*Math.pow(m.width,2)+Math.pow(m.height,2))/3))%2==0&&(f+=1);else{var Z=2*Math.max(Math.abs((p?p.clientWidth:0)-l),l)+2,S=2*Math.max(Math.abs((p?p.clientHeight:0)-d),d)+2;f=Math.sqrt(Math.pow(Z,2)+Math.pow(S,2))}e.touches?null===b.current&&(b.current=function(){w({pulsate:i,rippleX:l,rippleY:d,rippleSize:f,cb:n})},x.current=setTimeout((function(){b.current&&(b.current(),b.current=null)}),80)):w({pulsate:i,rippleX:l,rippleY:d,rippleSize:f,cb:n})}}),[a,w]),M=o.useCallback((function(){Z({},{pulsate:!0})}),[Z]),k=o.useCallback((function(e,t){if(clearTimeout(x.current),"touchend"===e.type&&b.current)return e.persist(),b.current(),b.current=null,void(x.current=setTimeout((function(){k(e,t)})));b.current=null,m((function(e){return e.length>0?e.slice(1):e})),h.current=t}),[]);return o.useImperativeHandle(t,(function(){return{pulsate:M,start:Z,stop:k}}),[M,Z,k]),o.createElement("span",(0,r.Z)({className:(0,c.Z)(s.root,u),ref:y},l),o.createElement(E,{component:null,exit:!0},p))})),k=(0,l.Z)((function(e){return{root:{overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"},ripple:{opacity:0,position:"absolute"},rippleVisible:{opacity:.3,transform:"scale(1)",animation:"$enter ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},ripplePulsate:{animationDuration:"".concat(e.transitions.duration.shorter,"ms")},child:{opacity:1,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"currentColor"},childLeaving:{opacity:0,animation:"$exit ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},childPulsate:{position:"absolute",left:0,top:0,animation:"$pulsate 2500ms ".concat(e.transitions.easing.easeInOut," 200ms infinite")},"@keyframes enter":{"0%":{transform:"scale(0)",opacity:.1},"100%":{transform:"scale(1)",opacity:.3}},"@keyframes exit":{"0%":{opacity:1},"100%":{opacity:0}},"@keyframes pulsate":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.92)"},"100%":{transform:"scale(1)"}}}}),{flip:!1,name:"MuiTouchRipple"})(o.memo(M)),R=o.forwardRef((function(e,t){var n=e.action,l=e.buttonRef,f=e.centerRipple,p=void 0!==f&&f,m=e.children,v=e.classes,h=e.className,g=e.component,x=void 0===g?"button":g,b=e.disabled,y=void 0!==b&&b,w=e.disableRipple,E=void 0!==w&&w,Z=e.disableTouchRipple,S=void 0!==Z&&Z,M=e.focusRipple,R=void 0!==M&&M,C=e.focusVisibleClassName,T=e.onBlur,z=e.onClick,N=e.onFocus,D=e.onFocusVisible,j=e.onKeyDown,I=e.onKeyUp,V=e.onMouseDown,L=e.onMouseLeave,B=e.onMouseUp,P=e.onTouchEnd,W=e.onTouchMove,F=e.onTouchStart,O=e.onDragLeave,K=e.tabIndex,X=void 0===K?0:K,A=e.TouchRippleProps,U=e.type,Y=void 0===U?"button":U,$=(0,i.Z)(e,["action","buttonRef","centerRipple","children","classes","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","onBlur","onClick","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","onDragLeave","tabIndex","TouchRippleProps","type"]),G=o.useRef(null);var H=o.useRef(null),q=o.useState(!1),_=q[0],J=q[1];y&&_&&J(!1);var Q=(0,d.Z)(),ee=Q.isFocusVisible,te=Q.onBlurVisible,ne=Q.ref;function re(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:S;return(0,u.Z)((function(r){return t&&t(r),!n&&H.current&&H.current[e](r),!0}))}o.useImperativeHandle(n,(function(){return{focusVisible:function(){J(!0),G.current.focus()}}}),[]),o.useEffect((function(){_&&R&&!E&&H.current.pulsate()}),[E,R,_]);var ie=re("start",V),oe=re("stop",O),ae=re("stop",B),ce=re("stop",(function(e){_&&e.preventDefault(),L&&L(e)})),se=re("start",F),ue=re("stop",P),le=re("stop",W),de=re("stop",(function(e){_&&(te(e),J(!1)),T&&T(e)}),!1),fe=(0,u.Z)((function(e){G.current||(G.current=e.currentTarget),ee(e)&&(J(!0),D&&D(e)),N&&N(e)})),pe=function(){var e=a.findDOMNode(G.current);return x&&"button"!==x&&!("A"===e.tagName&&e.href)},me=o.useRef(!1),ve=(0,u.Z)((function(e){R&&!me.current&&_&&H.current&&" "===e.key&&(me.current=!0,e.persist(),H.current.stop(e,(function(){H.current.start(e)}))),e.target===e.currentTarget&&pe()&&" "===e.key&&e.preventDefault(),j&&j(e),e.target===e.currentTarget&&pe()&&"Enter"===e.key&&!y&&(e.preventDefault(),z&&z(e))})),he=(0,u.Z)((function(e){R&&" "===e.key&&H.current&&_&&!e.defaultPrevented&&(me.current=!1,e.persist(),H.current.stop(e,(function(){H.current.pulsate(e)}))),I&&I(e),z&&e.target===e.currentTarget&&pe()&&" "===e.key&&!e.defaultPrevented&&z(e)})),ge=x;"button"===ge&&$.href&&(ge="a");var xe={};"button"===ge?(xe.type=Y,xe.disabled=y):("a"===ge&&$.href||(xe.role="button"),xe["aria-disabled"]=y);var be=(0,s.Z)(l,t),ye=(0,s.Z)(ne,G),we=(0,s.Z)(be,ye),Ee=o.useState(!1),Ze=Ee[0],Se=Ee[1];o.useEffect((function(){Se(!0)}),[]);var Me=Ze&&!E&&!y;return o.createElement(ge,(0,r.Z)({className:(0,c.Z)(v.root,h,_&&[v.focusVisible,C],y&&v.disabled),onBlur:de,onClick:z,onFocus:fe,onKeyDown:ve,onKeyUp:he,onMouseDown:ie,onMouseLeave:ce,onMouseUp:ae,onDragLeave:oe,onTouchEnd:ue,onTouchMove:le,onTouchStart:se,ref:we,tabIndex:y?-1:X},xe,$),m,Me?o.createElement(k,(0,r.Z)({ref:H,center:p},A)):null)})),C=(0,l.Z)({root:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},"&$disabled":{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}},disabled:{},focusVisible:{}},{name:"MuiButtonBase"})(R)},838:function(e,t,n){"use strict";var r=n(1253),i=n(2122),o=n(7294),a=n(5505),c=n(4621),s=[0,1,2,3,4,5,6,7,8,9,10],u=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var d=o.forwardRef((function(e,t){var n=e.alignContent,c=void 0===n?"stretch":n,s=e.alignItems,u=void 0===s?"stretch":s,l=e.classes,d=e.className,f=e.component,p=void 0===f?"div":f,m=e.container,v=void 0!==m&&m,h=e.direction,g=void 0===h?"row":h,x=e.item,b=void 0!==x&&x,y=e.justify,w=void 0===y?"flex-start":y,E=e.lg,Z=void 0!==E&&E,S=e.md,M=void 0!==S&&S,k=e.sm,R=void 0!==k&&k,C=e.spacing,T=void 0===C?0:C,z=e.wrap,N=void 0===z?"wrap":z,D=e.xl,j=void 0!==D&&D,I=e.xs,V=void 0!==I&&I,L=e.zeroMinWidth,B=void 0!==L&&L,P=(0,r.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),W=(0,a.Z)(l.root,d,v&&[l.container,0!==T&&l["spacing-xs-".concat(String(T))]],b&&l.item,B&&l.zeroMinWidth,"row"!==g&&l["direction-xs-".concat(String(g))],"wrap"!==N&&l["wrap-xs-".concat(String(N))],"stretch"!==u&&l["align-items-xs-".concat(String(u))],"stretch"!==c&&l["align-content-xs-".concat(String(c))],"flex-start"!==w&&l["justify-xs-".concat(String(w))],!1!==V&&l["grid-xs-".concat(String(V))],!1!==R&&l["grid-sm-".concat(String(R))],!1!==M&&l["grid-md-".concat(String(M))],!1!==Z&&l["grid-lg-".concat(String(Z))],!1!==j&&l["grid-xl-".concat(String(j))]);return o.createElement(p,(0,i.Z)({className:W,ref:t},P))})),f=(0,c.Z)((function(e){return(0,i.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(r){var i=e.spacing(r);0!==i&&(n["spacing-".concat(t,"-").concat(r)]={margin:"-".concat(l(i,2)),width:"calc(100% + ".concat(l(i),")"),"& > $item":{padding:l(i,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var r={};u.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,i.Z)(e,r):e[t.breakpoints.up(n)]=r}(t,e,n),t}),{}))}),{name:"MuiGrid"})(d);t.Z=f},9123:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(2122),i=n(7294),o=n(1253),a=n(5505),c=n(4621),s=n(1664),u=i.forwardRef((function(e,t){var n=e.children,c=e.classes,u=e.className,l=e.color,d=void 0===l?"inherit":l,f=e.component,p=void 0===f?"svg":f,m=e.fontSize,v=void 0===m?"default":m,h=e.htmlColor,g=e.titleAccess,x=e.viewBox,b=void 0===x?"0 0 24 24":x,y=(0,o.Z)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return i.createElement(p,(0,r.Z)({className:(0,a.Z)(c.root,u,"inherit"!==d&&c["color".concat((0,s.Z)(d))],"default"!==v&&c["fontSize".concat((0,s.Z)(v))]),focusable:"false",viewBox:b,color:h,"aria-hidden":!g||void 0,role:g?"img":void 0,ref:t},y),n,g?i.createElement("title",null,g):null)}));u.muiName="SvgIcon";var l=(0,c.Z)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(u);function d(e,t){var n=function(t,n){return i.createElement(l,(0,r.Z)({ref:n},t),e)};return n.muiName=l.muiName,i.memo(i.forwardRef(n))}},1474:function(e,t,n){"use strict";function r(e,t){"function"==typeof e?e(t):e&&(e.current=t)}n.d(t,{Z:function(){return r}})},7544:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),i="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;function o(e){var t=r.useRef(e);return i((function(){t.current=e})),r.useCallback((function(){return t.current.apply(void 0,arguments)}),[])}},1291:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),i=n(1474);function o(e,t){return r.useMemo((function(){return null==e&&null==t?null:function(n){(0,i.Z)(e,n),(0,i.Z)(t,n)}}),[e,t])}},4095:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7294),i=n(3935),o=!0,a=!1,c=null,s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function u(e){e.metaKey||e.altKey||e.ctrlKey||(o=!0)}function l(){o=!1}function d(){"hidden"===this.visibilityState&&a&&(o=!0)}function f(e){var t,n,r,i=e.target;try{return i.matches(":focus-visible")}catch(a){}return o||(n=(t=i).type,!("INPUT"!==(r=t.tagName)||!s[n]||t.readOnly)||"TEXTAREA"===r&&!t.readOnly||!!t.isContentEditable)}function p(){a=!0,window.clearTimeout(c),c=window.setTimeout((function(){a=!1}),100)}function m(){return{isFocusVisible:f,onBlurVisible:p,ref:r.useCallback((function(e){var t,n=i.findDOMNode(e);null!=n&&((t=n.ownerDocument).addEventListener("keydown",u,!0),t.addEventListener("mousedown",l,!0),t.addEventListener("pointerdown",l,!0),t.addEventListener("touchstart",l,!0),t.addEventListener("visibilitychange",d,!0))}),[])}}},1278:function(e,t,n){"use strict";var r=n(7294);t.Z=r.createContext(null)}}]);
//# sourceMappingURL=d486f633eaffd1fe5dd039ba0901301e5f6d0a9f-3e3a73f1515d01a215cc.js.map