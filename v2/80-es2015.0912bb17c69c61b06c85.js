(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{laIH:function(t,e,n){"use strict";n.r(e);var o=n("ofXK"),r=n("tyNb"),i=n("Wp6s"),a=n("QibW"),c=n("f0Cb"),l=n("wZkO"),s=n("3Pt+"),u=n("Q3DV"),d=n("eTLM"),m=n("l09l"),g=n("fXoL"),p=n("bTqV"),b=n("uBmD"),h=n("qDEf");function v(t,e){if(1&t&&(g.Yb(0,"mat-radio-button",10),g.Qc(1),g.Ub(2,"br"),g.Qc(3,"\n      "),g.Xb()),2&t){const t=e.$implicit;g.qc("value",t),g.Fb(1),g.Sc("\n        ",t.name,"\n        ")}}function w(t){return JSON.stringify(t,void 0,4)}const f=[{url:"https://github.com/Teradata/covalent/blob/develop/README.md"}],x=[{url:"https://github.com/Teradata/covalent/blob/develop/README.md",title:"Covalent"},{url:"https://raw.githubusercontent.com/angular/angular/master/README.md",title:"Angular"},{markdownString:"\n\n# Raw markdown example\n \n> Amazing\n\n1. List\n2. of\n3. items\n\n",title:"Raw markdown"}],Q=[{title:"Covalent",children:[{title:"Components",children:[{url:"https://raw.githubusercontent.com/Teradata/covalent/develop/src/platform/core/loading/README.md",title:"tdLoading"}]}]},x[1],x[2]];let k=(()=>{class t{constructor(t){this._markdownNavigatorWindowService=t,this.options=[{name:"Multi-level",value:Q},{name:"Bi-level",value:x},{name:"Single-level",value:f}],this.selected=this.options[0],this.currentTree=this.selected.value,this.input=w(this.currentTree),this.compareByTitle=(t,e)=>t.title===e.title}get windowConfig(){return{items:this.currentTree,startAt:this.startAt,compareWith:this.compareByTitle}}selectOption(){this.startAt=void 0,this.use(this.selected.value)}use(t){this.currentTree=t,this.input=w(this.currentTree),this._markdownNavigatorWindowService.isOpen&&this.openWindow()}applyInput(){this.use(JSON.parse(this.input))}demoStartAt(){this.selected=this.options[0],this.startAt={title:"tdLoading"},this.use(JSON.parse(JSON.stringify(this.selected.value)))}openWindow(){this._markdownNavigatorWindowService.open(this.windowConfig)}}return t.\u0275fac=function(e){return new(e||t)(g.Tb(m.b))},t.\u0275cmp=g.Nb({type:t,selectors:[["markdown-navigator-demo"]],decls:28,vars:9,consts:[["layout-xs","column","layout-sm","column","layout-gt-sm","row","layout-align","center center"],["layout","column","flex","30","flex-xs","100","flex-order","2","flex-order-gt-sm","1",1,"pad-bottom-lg"],["layout","column",1,"push-bottom-sm",3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],["layout-xs","column","flex-xs","100","layout-align-xs","start start"],["mat-raised-button","","color","accent",1,"text-upper","push-bottom",3,"click"],["mat-raised-button","","color","none",1,"text-upper",3,"click"],["flex","",3,"language","ngModel","ngModelChange"],["flex-gt-sm","50","layout","column","flex-order-sm","1","flex-order-xs","1","flex-order-gt-sm","2",1,"demo-markdown-container"],[1,"mat-card","mat-elevation-z4","overflow-scroll",3,"items"],[3,"value"]],template:function(t,e){1&t&&(g.Qc(0,"\n"),g.Yb(1,"div",0),g.Qc(2,"\n  "),g.Yb(3,"div",1),g.Qc(4,"\n    "),g.Yb(5,"mat-radio-group",2),g.gc("ngModelChange",(function(t){return e.selected=t}))("change",(function(t){return e.selectOption()})),g.Qc(6,"\n      "),g.Oc(7,v,4,2,"mat-radio-button",3),g.Qc(8,"\n    "),g.Xb(),g.Qc(9,"\n    "),g.Yb(10,"div",4),g.Qc(11,"\n      "),g.Yb(12,"button",5),g.gc("click",(function(t){return e.applyInput()})),g.Qc(13,"Try"),g.Xb(),g.Qc(14,"\n      "),g.Yb(15,"button",6),g.gc("click",(function(t){return e.openWindow()})),g.Qc(16,"\n        Open Draggable Window\n      "),g.Xb(),g.Qc(17,"\n    "),g.Xb(),g.Qc(18,"\n    "),g.Yb(19,"td-code-editor",7),g.gc("ngModelChange",(function(t){return e.currentTree=t})),g.Xb(),g.Qc(20,"\n  "),g.Xb(),g.Qc(21,"\n  "),g.Yb(22,"div",8),g.Qc(23,"\n      "),g.Ub(24,"td-markdown-navigator",9),g.Qc(25,"\n  "),g.Xb(),g.Qc(26,"\n"),g.Xb(),g.Qc(27,"\n")),2&t&&(g.Fb(5),g.qc("ngModel",e.selected),g.Fb(2),g.qc("ngForOf",e.options),g.Fb(12),g.Nc("height",200,"px"),g.qc("language","json")("ngModel",e.currentTree),g.Fb(5),g.Nc("height",450,"px"),g.qc("items",e.currentTree))},directives:[a.b,s.l,s.o,o.s,p.b,b.a,h.a,a.a],styles:["mat-radio-button[_ngcontent-%COMP%]{margin:8px}.demo-markdown-container[_ngcontent-%COMP%], [_nghost-%COMP%]{width:100%}.demo-markdown-container[_ngcontent-%COMP%]{max-width:400px}"]}),t})();var y=n("XkJo"),M=n("lDlI"),O=n("dE5l");n.d(e,"MarkdownNavigatorDemoModule",(function(){return C}));const T=Object(u.c)({overviewDemoComponent:k,id:"markdown-navigator"});let C=(()=>{class t{}return t.\u0275mod=g.Rb({type:t}),t.\u0275inj=g.Qb({factory:function(e){return new(e||t)},providers:[],imports:[[o.c,O.a,i.e,p.c,a.c,c.b,l.f,s.h,s.p,d.a,y.a,M.a,m.a,r.f.forChild(T)]]}),t})()}}]);