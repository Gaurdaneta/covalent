(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"Ck+y":function(t,e,a){var o=a("ProS"),n=a("+TT/");a("Nlvd"),a("wD15");var i=a("eT+N");if(!i.isSupported)throw new Error("Sorry your browser not support wordCloud");o.registerLayout((function(t,e){t.eachSeriesByType("wordCloud",(function(a){var r=n.getLayoutRect(a.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()}),s=a.getData(),d=document.createElement("canvas");d.width=r.width,d.height=r.height;var l=d.getContext("2d"),c=a.get("maskImage");if(c)try{l.drawImage(c,0,0,d.width,d.height),function(t){for(var e=t.getContext("2d"),a=e.getImageData(0,0,t.width,t.height),o=e.createImageData(a),n=0,i=0,r=0;r<a.data.length;r+=4)a.data[r+3]>128&&(n+=d=a.data[r]+a.data[r+1]+a.data[r+2],++i);var s=n/i;for(r=0;r<a.data.length;r+=4){var d=a.data[r]+a.data[r+1]+a.data[r+2];a.data[r+3]<128||d>s?(o.data[r]=0,o.data[r+1]=0,o.data[r+2]=0,o.data[r+3]=0):(o.data[r]=255,o.data[r+1]=255,o.data[r+2]=255,o.data[r+3]=255)}e.putImageData(o,0,0)}(d)}catch(w){console.error("Invalid mask image"),console.error(w.toString())}var h=a.get("sizeRange"),u=a.get("rotationRange"),f=s.getDataExtent("value"),m=Math.PI/180,g=a.get("gridSize");function p(t){var e=t.detail.item;t.detail.drawn&&a.layoutInstance.ondraw&&(t.detail.drawn.gx+=r.x/g,t.detail.drawn.gy+=r.y/g,a.layoutInstance.ondraw(e[0],e[1],e[2],t.detail.drawn))}i(d,{list:s.mapArray("value",(function(t,e){var a=s.getItemModel(e);return[s.getName(e),a.get("textStyle.normal.textSize",!0)||o.number.linearMap(t,f,h),e]})).sort((function(t,e){return e[1]-t[1]})),fontFamily:a.get("textStyle.normal.fontFamily")||a.get("textStyle.emphasis.fontFamily")||t.get("textStyle.fontFamily"),fontWeight:a.get("textStyle.normal.fontWeight")||a.get("textStyle.emphasis.fontWeight")||t.get("textStyle.fontWeight"),gridSize:g,ellipticity:r.height/r.width,minRotation:u[0]*m,maxRotation:u[1]*m,clearCanvas:!c,rotateRatio:1,rotationStep:a.get("rotationStep")*m,drawOutOfBound:a.get("drawOutOfBound"),shuffle:!1,shape:a.get("shape")}),d.addEventListener("wordclouddrawn",p),a.layoutInstance&&a.layoutInstance.dispose(),a.layoutInstance={ondraw:null,dispose:function(){d.removeEventListener("wordclouddrawn",p),d.addEventListener("wordclouddrawn",(function(t){t.preventDefault()}))}}}))})),o.registerPreprocessor((function(t){var e=(t||{}).series;!o.util.isArray(e)&&(e=e?[e]:[]);var a=["shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY"];function n(t){t&&o.util.each(a,(function(e){t.hasOwnProperty(e)&&(t["text"+o.format.capitalFirst(e)]=t[e])}))}o.util.each(e,(function(t){if(t&&"wordCloud"===t.type){var e=t.textStyle||{};n(e.normal),n(e.emphasis)}}))}))},Nlvd:function(t,e,a){var o=a("hi0g"),n=a("ProS");n.extendSeriesModel({type:"series.wordCloud",visualColorAccessPath:"textStyle.normal.color",optionUpdated:function(){var t=this.option;t.gridSize=Math.max(Math.floor(t.gridSize),4)},getInitialData:function(t,e){var a=o(["value"],t.data),i=new n.List(a,this);return i.initData(t.data),i},defaultOption:{maskImage:null,shape:"circle",left:"center",top:"center",width:"70%",height:"80%",sizeRange:[12,60],rotationRange:[-90,90],rotationStep:45,gridSize:8,drawOutOfBound:!1,textStyle:{normal:{fontWeight:"normal"}}}})},"Z+aH":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var o=a("fXoL"),n=a("rDig");const i=["td-wordCloud",""];let r=(()=>{class t extends n.c{constructor(t){super("wordCloud",t)}getConfig(){return{shape:this.shape,left:this.left,top:this.top,width:this.width,height:this.height,right:this.right,bottom:this.bottom,sizeRange:this.sizeRange,rotationRange:this.rotationRange,rotationStep:this.rotationStep,gridSize:this.gridSize,drawOutOfBound:this.drawOutOfBound,textStyle:this.textStyle}}}return t.\u0275fac=function(e){return new(e||t)(o.Tb(n.b))},t.\u0275cmp=o.Nb({type:t,selectors:[["td-chart-series","td-wordCloud",""]],inputs:{config:"config",id:"id",name:"name",color:"color",data:"data",animation:"animation",animationThreshold:"animationThreshold",animationDuration:"animationDuration",animationEasing:"animationEasing",animationDelay:"animationDelay",animationDurationUpdate:"animationDurationUpdate",animationEasingUpdate:"animationEasingUpdate",animationDelayUpdate:"animationDelayUpdate",tooltip:"tooltip",shape:"shape",left:"left",top:"top",width:"width",height:"height",right:"right",bottom:"bottom",sizeRange:"sizeRange",rotationRange:"rotationRange",rotationStep:"rotationStep",gridSize:"gridSize",drawOutOfBound:"drawOutOfBound",textStyle:"textStyle"},features:[o.Eb([{provide:n.c,useExisting:Object(o.W)(()=>t)}]),o.Cb],attrs:i,decls:0,vars:0,template:function(t,e){},encapsulation:2,changeDetection:0}),t})()},dKCn:function(t,e,a){"use strict";var o=a("ofXK"),n=(a("h6EL"),a("Z+aH"),a("fXoL"));let i=(()=>{class t{}return t.\u0275mod=n.Rb({type:t}),t.\u0275inj=n.Qb({factory:function(e){return new(e||t)},imports:[[o.c]]}),t})();a.d(e,"a",(function(){return i}))},"eT+N":function(t,e,a){"use strict";var o,n,i,r,s;window.setImmediate||(window.setImmediate=window.msSetImmediate||window.webkitSetImmediate||window.mozSetImmediate||window.oSetImmediate||function(){if(!window.postMessage||!window.addEventListener)return null;var t=[void 0],e="zero-timeout-message";return window.addEventListener("message",(function(a){if("string"==typeof a.data&&a.data.substr(0,e.length)===e){a.stopImmediatePropagation();var o=parseInt(a.data.substr(e.length),36);t[o]&&(t[o](),t[o]=void 0)}}),!0),window.clearImmediate=function(e){t[e]&&(t[e]=void 0)},function(a){var o=t.length;return t.push(a),window.postMessage(e+o.toString(36),"*"),o}}()||function(t){window.setTimeout(t,0)}),window.clearImmediate||(window.clearImmediate=window.msClearImmediate||window.webkitClearImmediate||window.mozClearImmediate||window.oClearImmediate||function(t){window.clearTimeout(t)}),n=function(){var t=document.createElement("canvas");if(!t||!t.getContext)return!1;var e=t.getContext("2d");return!!(e.getImageData&&e.fillText&&Array.prototype.some&&Array.prototype.push)}(),i=function(){if(n){for(var t,e,a=document.createElement("canvas").getContext("2d"),o=20;o;){if(a.font=o.toString(10)+"px sans-serif",a.measureText("\uff37").width===t&&a.measureText("m").width===e)return o+1;t=a.measureText("\uff37").width,e=a.measureText("m").width,o--}return 0}}(),r=function(t){for(var e,a,o=t.length;o;e=Math.floor(Math.random()*o),a=t[--o],t[o]=t[e],t[e]=a);return t},(s=function(t,e){if(n){Array.isArray(t)||(t=[t]),t.forEach((function(e,a){if("string"==typeof e){if(t[a]=document.getElementById(e),!t[a])throw"The element id specified is not found."}else if(!e.tagName&&!e.appendChild)throw"You must pass valid HTML elements, or ID of the element."}));var a={list:[],fontFamily:'"Trebuchet MS", "Heiti TC", "\u5fae\u8edf\u6b63\u9ed1\u9ad4", "Arial Unicode MS", "Droid Fallback Sans", sans-serif',fontWeight:"normal",color:"random-dark",minSize:0,weightFactor:1,clearCanvas:!0,backgroundColor:"#fff",gridSize:8,drawOutOfBound:!1,origin:null,drawMask:!1,maskColor:"rgba(255,0,0,0.3)",maskGapWidth:.3,wait:0,abortThreshold:0,abort:function(){},minRotation:-Math.PI/2,maxRotation:Math.PI/2,rotationStep:.1,shuffle:!0,rotateRatio:.1,shape:"circle",ellipticity:.65,classes:null,hover:null,click:null};if(e)for(var o in e)o in a&&(a[o]=e[o]);if("function"!=typeof a.weightFactor){var s=a.weightFactor;a.weightFactor=function(t){return t*s}}if("function"!=typeof a.shape)switch(a.shape){case"circle":default:a.shape="circle";break;case"cardioid":a.shape=function(t){return 1-Math.sin(t)};break;case"diamond":case"square":a.shape=function(t){var e=t%(2*Math.PI/4);return 1/(Math.cos(e)+Math.sin(e))};break;case"triangle-forward":a.shape=function(t){var e=t%(2*Math.PI/3);return 1/(Math.cos(e)+Math.sqrt(3)*Math.sin(e))};break;case"triangle":case"triangle-upright":a.shape=function(t){var e=(t+3*Math.PI/2)%(2*Math.PI/3);return 1/(Math.cos(e)+Math.sqrt(3)*Math.sin(e))};break;case"pentagon":a.shape=function(t){var e=(t+.955)%(2*Math.PI/5);return 1/(Math.cos(e)+.726543*Math.sin(e))};break;case"star":a.shape=function(t){var e=(t+.955)%(2*Math.PI/10);return(t+.955)%(2*Math.PI/5)-2*Math.PI/10>=0?1/(Math.cos(2*Math.PI/10-e)+3.07768*Math.sin(2*Math.PI/10-e)):1/(Math.cos(e)+3.07768*Math.sin(e))}}a.gridSize=Math.max(Math.floor(a.gridSize),4);var d,l,c,h,u,f,m,g=a.gridSize,p=g-a.maskGapWidth,w=Math.abs(a.maxRotation-a.minRotation),v=Math.min(a.maxRotation,a.minRotation),y=a.rotationStep;switch(a.color){case"random-dark":m=function(){return z(10,50)};break;case"random-light":m=function(){return z(50,90)};break;default:"function"==typeof a.color&&(m=a.color)}var x=null;"function"==typeof a.classes&&(x=a.classes);var M,S=!1,b=[],C=function(t){var e,a,o=t.currentTarget,n=o.getBoundingClientRect();t.touches?(e=t.touches[0].clientX,a=t.touches[0].clientY):(e=t.clientX,a=t.clientY);var i=a-n.top,r=Math.floor((e-n.left)*(o.width/n.width||1)/g),s=Math.floor(i*(o.height/n.height||1)/g);return b[r][s]},T=function(t){var e=C(t);M!==e&&(M=e,e?a.hover(e.item,e.dimension,t):a.hover(void 0,void 0,t))},I=function(t){var e=C(t);e&&(a.click(e.item,e.dimension,t),t.preventDefault())},E=[],R=function(t){if(E[t])return E[t];var e=8*t,o=e,n=[];for(0===t&&n.push([h[0],h[1],0]);o--;){var i=1;"circle"!==a.shape&&(i=a.shape(o/e*2*Math.PI)),n.push([h[0]+t*i*Math.cos(-o/e*2*Math.PI),h[1]+t*i*Math.sin(-o/e*2*Math.PI)*a.ellipticity,o/e*2*Math.PI])}return E[t]=n,n},k=function(){return a.abortThreshold>0&&(new Date).getTime()-f>a.abortThreshold},O=function(e,a,o,n,i){e>=l||a>=c||e<0||a<0||(d[e][a]=!1,o&&t[0].getContext("2d").fillRect(e*g,a*g,p,p),S&&(b[e][a]={item:i,dimension:n}))},D=function(e,a,o){if(a)return!t.some((function(t){var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!0,a,o||{}),!t.dispatchEvent(n)}),this);t.forEach((function(t){var n=document.createEvent("CustomEvent");n.initCustomEvent(e,!0,a,o||{}),t.dispatchEvent(n)}),this)};!function(){var e=t[0];if(e.getContext)l=Math.ceil(e.width/g),c=Math.ceil(e.height/g);else{var o=e.getBoundingClientRect();l=Math.ceil(o.width/g),c=Math.ceil(o.height/g)}if(D("wordcloudstart",!0)){var n,s,p,C,E;if(h=a.origin?[a.origin[0]/g,a.origin[1]/g]:[l/2,c/2],u=Math.floor(Math.sqrt(l*l+c*c)),d=[],!e.getContext||a.clearCanvas)for(t.forEach((function(t){if(t.getContext){var e=t.getContext("2d");e.fillStyle=a.backgroundColor,e.clearRect(0,0,l*(g+1),c*(g+1)),e.fillRect(0,0,l*(g+1),c*(g+1))}else t.textContent="",t.style.backgroundColor=a.backgroundColor,t.style.position="relative"})),n=l;n--;)for(d[n]=[],s=c;s--;)d[n][s]=!0;else{var z=document.createElement("canvas").getContext("2d");z.fillStyle=a.backgroundColor,z.fillRect(0,0,1,1);var P,F,L=z.getImageData(0,0,1,1).data,W=e.getContext("2d").getImageData(0,0,l*g,c*g).data;for(n=l;n--;)for(d[n]=[],s=c;s--;){F=g;t:for(;F--;)for(P=g;P--;)for(p=4;p--;)if(W[4*((s*g+F)*l*g+(n*g+P))+p]!==L[p]){d[n][s]=!1;break t}!1!==d[n][s]&&(d[n][s]=!0)}W=z=L=void 0}if(a.hover||a.click){for(S=!0,n=l+1;n--;)b[n]=[];a.hover&&e.addEventListener("mousemove",T),a.click&&(e.addEventListener("click",I),e.addEventListener("touchstart",I),e.addEventListener("touchend",(function(t){t.preventDefault()})),e.style.webkitTapHighlightColor="rgba(0, 0, 0, 0)"),e.addEventListener("wordcloudstart",(function t(){e.removeEventListener("wordcloudstart",t),e.removeEventListener("mousemove",T),e.removeEventListener("click",I),M=void 0}))}p=0,0!==a.wait?(C=window.setTimeout,E=window.clearTimeout):(C=window.setImmediate,E=window.clearImmediate);var A=function(e,a){t.forEach((function(t){t.removeEventListener(e,a)}),this)},B=function t(){A("wordcloudstart",t),E(X)};!function(e,a){t.forEach((function(t){t.addEventListener("wordcloudstart",a)}),this)}(0,B);var X=C((function e(){if(p>=a.list.length)return E(X),D("wordcloudstop",!1),void A("wordcloudstart",B);f=(new Date).getTime();var o=function(e){var o,n,s;Array.isArray(e)?(o=e[0],n=e[1]):(o=e.word,n=e.weight,s=e.attributes);var h,f,p,M=0===a.rotateRatio?0:Math.random()>a.rotateRatio?0:0===w?v:v+Math.round(Math.random()*w/y)*y,b=function(t,e,o){var n=a.weightFactor(e);if(n<=a.minSize)return!1;var r=1;n<i&&(r=function(){for(var t=2;t*n<i;)t+=2;return t}());var s=document.createElement("canvas"),d=s.getContext("2d",{willReadFrequently:!0});d.font=a.fontWeight+" "+(n*r).toString(10)+"px "+a.fontFamily;var l=d.measureText(t).width/r,c=Math.max(n*r,d.measureText("m").width,d.measureText("\uff37").width)/r,h=l+2*c,u=3*c,f=Math.ceil(h/g),m=Math.ceil(u/g);h=f*g,u=m*g;var p=-l/2,w=.4*-c,v=Math.ceil((h*Math.abs(Math.sin(o))+u*Math.abs(Math.cos(o)))/g),y=Math.ceil((h*Math.abs(Math.cos(o))+u*Math.abs(Math.sin(o)))/g),x=y*g,M=v*g;s.setAttribute("width",x),s.setAttribute("height",M),d.scale(1/r,1/r),d.translate(x*r/2,M*r/2),d.rotate(-o),d.font=a.fontWeight+" "+(n*r).toString(10)+"px "+a.fontFamily,d.fillStyle="#000",d.textBaseline="middle",d.fillText(t,p*r,(w+.5*n)*r);var S=d.getImageData(0,0,x,M).data;if(k())return!1;for(var b,C,T,I=[],E=y,R=[v/2,y/2,v/2,y/2];E--;)for(b=v;b--;){T=g;t:for(;T--;)for(C=g;C--;)if(S[4*((b*g+T)*x+(E*g+C))+3]){I.push([E,b]),E<R[3]&&(R[3]=E),E>R[1]&&(R[1]=E),b<R[0]&&(R[0]=b),b>R[2]&&(R[2]=b);break t}}return{mu:r,occupied:I,bounds:R,gw:y,gh:v,fillTextOffsetX:p,fillTextOffsetY:w,fillTextWidth:l,fillTextHeight:c,fontSize:n}}(o,n,M);if(!b)return!1;if(k())return!1;if(!a.drawOutOfBound){var C=b.bounds;if(C[1]-C[3]+1>l||C[2]-C[0]+1>c)return!1}for(var T=u+1;T--;){var I=R(u-T);a.shuffle&&(I=[].concat(I),r(I));for(var E=0;E<I.length;E++){var D=(h=I[E],void 0,void 0,!!function(t,e,o,n,i){for(var r=i.length;r--;){var s=t+i[r][0],h=e+i[r][1];if(s>=l||h>=c||s<0||h<0){if(!a.drawOutOfBound)return!1}else if(!d[s][h])return!1}return!0}(f=Math.floor(h[0]-b.gw/2),p=Math.floor(h[1]-b.gh/2),0,0,b.occupied)&&(function(e,o,n,i,r,s,d,l,c){var h,u,f=n.fontSize;h=m?m(i,r,f,s,d):a.color,u=x?x(i,r,f,s,d):a.classes,t.forEach((function(t){if(t.getContext){var r=t.getContext("2d"),s=n.mu;r.save(),r.scale(1/s,1/s),r.font=a.fontWeight+" "+(f*s).toString(10)+"px "+a.fontFamily,r.fillStyle=h,r.translate((e+n.gw/2)*g*s,(o+n.gh/2)*g*s),0!==l&&r.rotate(-l),r.textBaseline="middle",r.fillText(i,n.fillTextOffsetX*s,(n.fillTextOffsetY+.5*f)*s),r.restore()}else{var d=document.createElement("span"),m="";m="rotate("+-l/Math.PI*180+"deg) ",1!==n.mu&&(m+="translateX(-"+n.fillTextWidth/4+"px) scale("+1/n.mu+")");var p={position:"absolute",display:"block",font:a.fontWeight+" "+f*n.mu+"px "+a.fontFamily,left:(e+n.gw/2)*g+n.fillTextOffsetX+"px",top:(o+n.gh/2)*g+n.fillTextOffsetY+"px",width:n.fillTextWidth+"px",height:n.fillTextHeight+"px",lineHeight:f+"px",whiteSpace:"nowrap",transform:m,webkitTransform:m,msTransform:m,transformOrigin:"50% 40%",webkitTransformOrigin:"50% 40%",msTransformOrigin:"50% 40%"};for(var w in h&&(p.color=h),d.textContent=i,p)d.style[w]=p[w];if(c)for(var v in c)d.setAttribute(v,c[v]);u&&(d.className+=u),t.appendChild(d)}}))}(f,p,b,o,n,u-T,h[2],M,s),function(e,o,n,i,r,s){var d,h,u=r.occupied,f=a.drawMask;if(f&&((d=t[0].getContext("2d")).save(),d.fillStyle=a.maskColor),S){var m=r.bounds;h={x:(e+m[3])*g,y:(o+m[0])*g,w:(m[1]-m[3]+1)*g,h:(m[2]-m[0]+1)*g}}for(var p=u.length;p--;){var w=e+u[p][0],v=o+u[p][1];w>=l||v>=c||w<0||v<0||O(w,v,f,h,s)}f&&d.restore()}(f,p,0,0,b,e),{gx:f,gy:p,rot:M,info:b}));if(D)return D}}return null}(a.list[p]),n=!D("wordclouddrawn",!0,{item:a.list[p],drawn:o});if(k()||n)return E(X),a.abort(),D("wordcloudabort",!1),D("wordcloudstop",!1),void A("wordcloudstart",B);p++,X=C(e,a.wait)}),a.wait)}}()}function z(t,e){return"hsl("+(360*Math.random()).toFixed()+","+(30*Math.random()+70).toFixed()+"%,"+(Math.random()*(e-t)+t).toFixed()+"%)"}}).isSupported=n,s.minFontSize=i,void 0===(o=(function(){return s}).apply(e,[]))||(t.exports=o)},h6EL:function(t,e,a){t.exports=a("Ck+y")},psNt:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var o=a("mrSG"),n=a("rDig"),i=a("MpVW"),r=a("fXoL"),s=a("cvES"),d=a("cpAi"),l=a("Z+aH");const c=function(){return[8,30]},h=function(t){return[t,30]};let u=(()=>{class t{constructor(t,e){this._cdr=t,this.themeSelector=e,this.themes=Object(n.e)(),this.words=["Covalent","Teradata","Angular","TypeScript","JavaScript","Protractor","Karma","Ruby","Rails","Ruby on Rails","Java","Scala","RSpec","Cucumber","JUnit","Elixir","Twitter Bootstrap","HTML","CSS","SASS","PHP"],this.words2=["Engineering","Applied Science","Engineering Science","Innovation","Tech","Technological","Computing","Informatics","Biotechnology","Science","Telematics","Industry","Research","Information","Development","Cyber","Energy","Techs","Technicians","Computerization","Techno"],this.componentExampleRandomWords=this.generateRandomWords(this.words2),this.config={tooltip:{},series:[{type:"wordCloud",shape:"triangle",sizeRange:[8,50],rotationRange:[-30,30],color:this.randomColor,data:this.generateRandomWords(this.words)}]}}ngOnInit(){return Object(o.a)(this,void 0,void 0,(function*(){this.selectedTheme=this.themeSelector.selected,this._cdr.markForCheck()}))}randomColor(){return"rgb("+[Math.round(160*Math.random()),Math.round(160*Math.random()),Math.round(160*Math.random())].join(",")+")"}generateRandomWords(t){return Array.apply(void 0,Array(30)).map(()=>({name:t[Math.floor(Math.random()*t.length)],value:Math.floor(100*Math.random()),textStyle:{normal:{fontFamily:"sans-serif",fontWeight:"bold"}}}))}selectChartTheme(t){this.themeSelector.select(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Tb(r.h),r.Tb(i.a))},t.\u0275cmp=r.Nb({type:t,selectors:[["wordcloud-demo-basic"]],decls:8,vars:10,consts:[[3,"trigger"],["td-wordCloud","","shape","star",3,"sizeRange","rotationRange","color","data"]],template:function(t,e){1&t&&(r.Qc(0,"        "),r.Yb(1,"td-chart"),r.Qc(2,"\n          "),r.Ub(3,"td-chart-tooltip",0),r.Qc(4,"\n          "),r.Yb(5,"td-chart-series",1),r.Qc(6,"\n          "),r.Xb(),r.Qc(7,"\n        "),r.Xb()),2&t&&(r.Fb(1),r.Nc("height",500,"px"),r.Fb(2),r.qc("trigger","item"),r.Fb(2),r.qc("sizeRange",r.tc(7,c))("rotationRange",r.uc(8,h,-30))("color",e.randomColor)("data",e.componentExampleRandomWords))},directives:[s.a,d.a,l.a],styles:["[_nghost-%COMP%]{width:100%}"],changeDetection:0}),t})()},tE1T:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var o=a("ofXK"),n=a("rDig"),i=a("Qk+/"),r=a("dKCn"),s=a("fXoL");let d=(()=>{class t{}return t.\u0275mod=s.Rb({type:t}),t.\u0275inj=s.Qb({factory:function(e){return new(e||t)},imports:[[n.a,i.a,r.a,o.c]]}),t})()},wD15:function(t,e,a){var o=a("ProS");o.extendChartView({type:"wordCloud",render:function(t,e,a){var n=this.group;n.removeAll();var i=t.getData(),r=t.get("gridSize");t.layoutInstance.ondraw=function(t,e,a,s){var d=i.getItemModel(a),l=d.getModel("textStyle.normal"),c=d.getModel("textStyle.emphasis"),h=new o.graphic.Text({style:o.graphic.setTextStyle({},l,{x:s.info.fillTextOffsetX,y:s.info.fillTextOffsetY+.5*e,text:t,textBaseline:"middle",textFill:i.getItemVisual(a,"color"),fontSize:e}),scale:[1/s.info.mu,1/s.info.mu],position:[(s.gx+s.info.gw/2)*r,(s.gy+s.info.gh/2)*r],rotation:s.rot});n.add(h),i.setItemGraphicEl(a,h),o.graphic.setHoverStyle(h,o.graphic.setTextStyle({},c,null,{forMerge:!0},!0))},this._model=t},remove:function(){this.group.removeAll(),this._model.layoutInstance.dispose()},dispose:function(){this._model.layoutInstance.dispose()}})}}]);