function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{OMbk:function(e,n,o){"use strict";o.r(n);var a,t,l,d,c,r,s=o("ofXK"),i=o("PdbM"),m=o("tyNb"),b=o("fXoL"),f=o("MJ5V"),p=o("v+MA"),u=((l=function e(){_classCallCheck(this,e),this.basicFlavoredMarkdown="\n    ## Checkboxes\n\n    - [x] My checkbox\n    - [x] My second checkbox\n    - [ ] My empty checkbox\n\n    ## List\n\n    + One\n      + subline\n    + Two\n    + Three\n      + subline\n      + second subline\n  "}).\u0275fac=function(e){return new(e||l)},l.\u0275cmp=b.Nb({type:l,selectors:[["flavored-markdown-demo-basic"]],decls:2,vars:1,template:function(e,n){1&e&&(b.Yb(0,"td-flavored-markdown"),b.Qc(1),b.Xb()),2&e&&(b.Fb(1),b.Rc(n.basicFlavoredMarkdown))},directives:[p.a],styles:[""]}),l),k=((t=function e(){_classCallCheck(this,e),this.inlineFlavoredMarkdown="\n    ## Inline\n\n    Inline piece of code `var obj: Type = bla;`\n\n    ## Snippet\n\n    ```typescript\n      @Component({\n        selector: 'demo',\n        styleUrls: ['./demo.component.scss'],\n        templateUrl: './demo.component.html',\n      })\n      export class DemoComponent {\n        property: Type;\n      }\n    ```\n  "}).\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Nb({type:t,selectors:[["flavored-markdown-demo-inline"]],decls:2,vars:1,template:function(e,n){1&e&&(b.Yb(0,"td-flavored-markdown"),b.Qc(1),b.Xb()),2&e&&(b.Fb(1),b.Rc(n.inlineFlavoredMarkdown))},directives:[p.a],styles:[""]}),t),w=((a=function e(){_classCallCheck(this,e),this.tablesFlavoredMarkdown="\n    | Tables   |      Are      |  Cool |\n    |----------|--------------:|------:|\n    | col 1 is | left-aligned  | $1600 |\n    | col 2 is | right-aligned |   $12 |\n    | col 3 is | right-aligned |    $1 |\n  "}).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=b.Nb({type:a,selectors:[["flavored-markdown-demo-tables"]],decls:2,vars:1,template:function(e,n){1&e&&(b.Yb(0,"td-flavored-markdown"),b.Qc(1),b.Xb()),2&e&&(b.Fb(1),b.Rc(n.tablesFlavoredMarkdown))},directives:[p.a],styles:[""]}),a),v=o("Xva0"),h=((d=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||d)},d.\u0275cmp=b.Nb({type:d,selectors:[["flavored-markdown-demo-loader"]],decls:1,vars:1,consts:[[3,"url"]],template:function(e,n){1&e&&b.Ub(0,"td-flavored-markdown-loader",0),2&e&&b.qc("url","https://github.com/angular/angular/blob/master/README.md")},directives:[v.a],styles:[""]}),d),y=[{path:"",component:(c=function e(){_classCallCheck(this,e)},c.\u0275fac=function(e){return new(e||c)},c.\u0275cmp=b.Nb({type:c,selectors:[["flavored-markdown-demo"]],decls:8,vars:8,consts:[[3,"demoId","demoTitle"]],template:function(e,n){1&e&&(b.Yb(0,"demo-component",0),b.Ub(1,"flavored-markdown-demo-basic"),b.Xb(),b.Yb(2,"demo-component",0),b.Ub(3,"flavored-markdown-demo-inline"),b.Xb(),b.Yb(4,"demo-component",0),b.Ub(5,"flavored-markdown-demo-tables"),b.Xb(),b.Yb(6,"demo-component",0),b.Ub(7,"flavored-markdown-demo-loader"),b.Xb()),2&e&&(b.qc("demoId","flavored-markdown-demo-basic")("demoTitle","Checkboxes & Lists"),b.Fb(2),b.qc("demoId","flavored-markdown-demo-inline")("demoTitle","Inline Code & Snippets"),b.Fb(2),b.qc("demoId","flavored-markdown-demo-tables")("demoTitle","Tables"),b.Fb(2),b.qc("demoId","flavored-markdown-demo-loader")("demoTitle","Flavored Markdown Loader"))},directives:[f.a,u,k,w,h],styles:[""]}),c)}],C=((r=function e(){_classCallCheck(this,e)}).\u0275mod=b.Rb({type:r}),r.\u0275inj=b.Qb({factory:function(e){return new(e||r)},imports:[[m.f.forChild(y)],m.f]}),r),M=o("Krbs");o.d(n,"FlavoredMarkdownDemoModule",(function(){return T}));var F,T=((F=function e(){_classCallCheck(this,e)}).\u0275mod=b.Rb({type:F}),F.\u0275inj=b.Qb({factory:function(e){return new(e||F)},imports:[[M.a,C,i.a,s.c]]}),F)}}]);