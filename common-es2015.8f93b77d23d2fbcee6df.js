(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0/6H":function(o,n,t){"use strict";t.d(n,"a",function(){return r});var e=t("A36C"),c=t("iWo5"),i=t("qULd");const r=(o,n)=>{let t,r;const a=(o,e,c)=>{if("undefined"==typeof document)return;const i=document.elementFromPoint(o,e);i&&n(i)?i!==t&&(b(),s(i,c)):b()},s=(o,n)=>{t=o,r||(r=t);const c=t;Object(e.f)(()=>c.classList.add("ion-activated")),n()},b=(o=!1)=>{if(!t)return;const n=t;Object(e.f)(()=>n.classList.remove("ion-activated")),o&&r!==t&&t.click(),t=void 0};return Object(c.createGesture)({el:o,gestureName:"buttonActiveDrag",threshold:0,onStart:o=>a(o.currentX,o.currentY,i.a),onMove:o=>a(o.currentX,o.currentY,i.b),onEnd:()=>{b(!0),Object(i.e)(),r=void 0}})}},"74mu":function(o,n,t){"use strict";t.d(n,"a",function(){return c}),t.d(n,"b",function(){return i}),t.d(n,"c",function(){return e}),t.d(n,"d",function(){return a});const e=(o,n)=>null!==n.closest(o),c=(o,n)=>"string"==typeof o&&o.length>0?Object.assign({"ion-color":!0,["ion-color-"+o]:!0},n):n,i=o=>{const n={};return(o=>void 0!==o?(Array.isArray(o)?o:o.split(" ")).filter(o=>null!=o).map(o=>o.trim()).filter(o=>""!==o):[])(o).forEach(o=>n[o]=!0),n},r=/^[a-z][a-z0-9+\-.]*:/,a=async(o,n,t,e)=>{if(null!=o&&"#"!==o[0]&&!r.test(o)){const c=document.querySelector("ion-router");if(c)return null!=n&&n.preventDefault(),c.push(o,t,e)}return!1}},ZaV5:function(o,n,t){"use strict";t.d(n,"a",function(){return e}),t.d(n,"b",function(){return c});const e=async(o,n,t,e,c)=>{if(o)return o.attachViewToDom(n,t,c,e);if("string"!=typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");const i="string"==typeof t?n.ownerDocument&&n.ownerDocument.createElement(t):t;return e&&e.forEach(o=>i.classList.add(o)),c&&Object.assign(i,c),n.appendChild(i),i.componentOnReady&&await i.componentOnReady(),i},c=(o,n)=>{if(n){if(o)return o.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},"fr+C":function(o,n,t){"use strict";t.d(n,"a",function(){return p});var e=t("mrSG"),c=t("AytR"),i=t("fXoL"),r=t("sZkV"),a=t("ofXK"),s=t("tyNb"),b=t("QPBi");const l=function(){return["/"]},u=function(){return["/wizard"]},d=function(){return["/sorgenti"]};function m(o,n){if(1&o){const o=i.Tb();i.Sb(0,"ion-grid",5),i.Sb(1,"ion-row",6),i.Sb(2,"ion-col",7),i.Nb(3,"img",8),i.Rb(),i.Rb(),i.Sb(4,"ion-row"),i.Sb(5,"ion-col",9),i.Sb(6,"h1",10),i.Dc(7),i.dc(8,"transloco"),i.Rb(),i.Rb(),i.Rb(),i.Sb(9,"ion-row"),i.Sb(10,"ion-col",9),i.Sb(11,"h3",11),i.Dc(12),i.dc(13,"transloco"),i.Rb(),i.Rb(),i.Rb(),i.Sb(14,"ion-row"),i.Sb(15,"ion-col",9),i.Sb(16,"a",12),i.ac("click",function(){return i.uc(o),i.cc().closeModal(250)}),i.Sb(17,"h3",11),i.Dc(18),i.dc(19,"transloco"),i.Rb(),i.Rb(),i.Sb(20,"a",12),i.ac("click",function(){return i.uc(o),i.cc().closeModal(250)}),i.Sb(21,"h3",11),i.Dc(22),i.dc(23,"transloco"),i.Rb(),i.Rb(),i.Sb(24,"a",12),i.ac("click",function(){return i.uc(o),i.cc().closeModal(250)}),i.Sb(25,"h3",11),i.Dc(26),i.dc(27,"transloco"),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Sb(28,"ion-row"),i.Sb(29,"ion-col",9),i.Sb(30,"h3",11),i.Dc(31),i.dc(32,"transloco"),i.Rb(),i.Nb(33,"ul",13),i.dc(34,"transloco"),i.Rb(),i.Rb(),i.Sb(35,"ion-row"),i.Sb(36,"ion-col",9),i.Sb(37,"h3",11),i.Dc(38),i.dc(39,"transloco"),i.Rb(),i.Nb(40,"ul",13),i.dc(41,"transloco"),i.Rb(),i.Rb(),i.Sb(42,"ion-row",14),i.Sb(43,"ion-col",15),i.Sb(44,"h3",11),i.Dc(45),i.dc(46,"transloco"),i.Rb(),i.Sb(47,"p",16),i.Dc(48),i.dc(49,"transloco"),i.Sb(50,"a",17),i.Dc(51,"Sheldon.studio"),i.Rb(),i.Rb(),i.Sb(52,"p",16),i.Dc(53),i.dc(54,"transloco"),i.Sb(55,"a",18),i.Dc(56,"Team Monithon"),i.Rb(),i.Rb(),i.Sb(57,"p",16),i.Dc(58),i.dc(59,"transloco"),i.Sb(60,"a",17),i.Dc(61,"Sheldon.studio"),i.Rb(),i.Dc(62," & "),i.Sb(63,"a",18),i.Dc(64,"Team Monithon"),i.Rb(),i.Rb(),i.Sb(65,"p",19),i.dc(66,"transloco"),i.Dc(67),i.dc(68,"transloco"),i.Rb(),i.Rb(),i.Rb(),i.Sb(69,"ion-row",20),i.Sb(70,"ion-col",7),i.Nb(71,"img",21),i.Rb(),i.Rb(),i.Sb(72,"ion-row",22),i.Sb(73,"ion-col",23),i.Sb(74,"div",24),i.Dc(75),i.Rb(),i.Rb(),i.Rb(),i.Rb()}if(2&o){const o=i.cc();i.Bb(7),i.Ec(i.ec(8,19,"about.projectFinder.titolo")),i.Bb(5),i.Ec(i.ec(13,21,"about.projectFinder.sottotitolo")),i.Bb(4),i.jc("routerLink",i.mc(49,l)),i.Bb(2),i.Ec(i.ec(19,23,"about.projectFinder.noWizard")),i.Bb(2),i.jc("routerLink",i.mc(50,u)),i.Bb(2),i.Ec(i.ec(23,25,"about.projectFinder.wizardComuni")),i.Bb(2),i.jc("routerLink",i.mc(51,d)),i.Bb(2),i.Ec(i.ec(27,27,"about.projectFinder.wizardSorgenti")),i.Bb(5),i.Ec(i.ec(32,29,"about.projectFinder.cosaPuoiFare")),i.Bb(2),i.jc("innerHTML",i.ec(34,31,"about.projectFinder.htmlCosaPuoiFare"),i.vc),i.Bb(5),i.Ec(i.ec(39,33,"about.projectFinder.metodologia")),i.Bb(2),i.jc("innerHTML",i.ec(41,35,"about.projectFinder.htmlMetodologia"),i.vc),i.Bb(5),i.Ec(i.ec(46,37,"about.credits")),i.Bb(3),i.Fc("",i.ec(49,39,"about.design")," "),i.Bb(5),i.Fc(" ",i.ec(54,41,"about.dataAnalysis")," "),i.Bb(5),i.Fc(" ",i.ec(59,43,"about.softwareDevelopment")," "),i.Bb(7),i.jc("innerHTML",i.ec(66,45,"about.projectFinder.colophon"),i.vc),i.Bb(2),i.Fc(" ",i.ec(68,47,"about.colo")," "),i.Bb(8),i.Fc("Project Finder - v.",o.version,"")}}function h(o,n){if(1&o&&(i.Sb(0,"ion-grid",5),i.Sb(1,"ion-row",6),i.Sb(2,"ion-col",7),i.Nb(3,"img",25),i.Rb(),i.Rb(),i.Sb(4,"ion-row"),i.Sb(5,"ion-col",9),i.Sb(6,"h1",10),i.Dc(7),i.dc(8,"transloco"),i.Rb(),i.Rb(),i.Rb(),i.Sb(9,"ion-row"),i.Sb(10,"ion-col",9),i.Sb(11,"h3",11),i.Dc(12),i.dc(13,"transloco"),i.Rb(),i.Rb(),i.Rb(),i.Sb(14,"ion-row"),i.Sb(15,"ion-col",9),i.Sb(16,"h3",11),i.Dc(17),i.dc(18,"transloco"),i.Rb(),i.Nb(19,"ul",13),i.dc(20,"transloco"),i.Rb(),i.Rb(),i.Sb(21,"ion-row",14),i.Sb(22,"ion-col",15),i.Sb(23,"h3",11),i.Dc(24),i.dc(25,"transloco"),i.Rb(),i.Sb(26,"p",16),i.Dc(27),i.dc(28,"transloco"),i.Sb(29,"a",17),i.Dc(30,"Sheldon.studio"),i.Rb(),i.Rb(),i.Sb(31,"p",16),i.Dc(32),i.dc(33,"transloco"),i.Sb(34,"a",18),i.Dc(35,"Team Monithon"),i.Rb(),i.Rb(),i.Sb(36,"p",16),i.Dc(37),i.dc(38,"transloco"),i.Sb(39,"a",17),i.Dc(40,"Sheldon.studio"),i.Rb(),i.Dc(41," & "),i.Sb(42,"a",18),i.Dc(43,"Team Monithon"),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Sb(44,"ion-row",20),i.Sb(45,"ion-col",7),i.Nb(46,"img",21),i.Rb(),i.Rb(),i.Sb(47,"ion-row",22),i.Sb(48,"ion-col",23),i.Sb(49,"div",24),i.Dc(50),i.Rb(),i.Rb(),i.Rb(),i.Rb()),2&o){const o=i.cc();i.Bb(7),i.Ec(i.ec(8,9,"about.reportFinder.titolo")),i.Bb(5),i.Ec(i.ec(13,11,"about.reportFinder.sottotitolo")),i.Bb(5),i.Ec(i.ec(18,13,"about.reportFinder.cosaPuoiFare")),i.Bb(2),i.jc("innerHTML",i.ec(20,15,"about.reportFinder.htmlCosaPuoiFare"),i.vc),i.Bb(5),i.Ec(i.ec(25,17,"about.credits")),i.Bb(3),i.Fc("",i.ec(28,19,"about.design")," "),i.Bb(5),i.Fc(" ",i.ec(33,21,"about.dataAnalysis")," "),i.Bb(5),i.Fc(" ",i.ec(38,23,"about.softwareDevelopment")," "),i.Bb(13),i.Fc("Report Finder - v.",o.version,"")}}let p=(()=>{class o{constructor(o){this.modalController=o,this.mode=c.a.mode,this.version=c.a.version}ngOnInit(){}closeModal(o=50){return Object(e.a)(this,void 0,void 0,function*(){setTimeout(()=>Object(e.a)(this,void 0,void 0,function*(){yield this.modalController.dismiss("Modal Removed")}),o)})}}return o.\u0275fac=function(n){return new(n||o)(i.Mb(r.p))},o.\u0275cmp=i.Gb({type:o,selectors:[["app-about-page"]],inputs:{modal_title:"modal_title"},decls:7,vars:4,consts:[[1,"monithon-about-header"],["slot","end"],[1,"monithon-close-modal",3,"click"],[1,"monithon-about-modal-content",3,"fullscreen","scrollY"],["class","monithon-about-grid",4,"ngIf"],[1,"monithon-about-grid"],[1,"monithon-logo-row"],["size-md","4","size-sm","6",1,"monithon-about-col","monithon-colophon-container"],["src","../../assets/img/logo_monithon.svg",1,"monithon-about-logo"],["text-center","","size-md","4","size-sm","6",1,"monithon-about-col"],[1,"monithon-about-titolo"],[1,"monithon-about-titolo-sezione"],[3,"routerLink","click"],[3,"innerHTML"],[1,"monithon-credits-row"],["size-md","4","size-sm","6",1,"monithon-about-col","monithon-credits-container"],[1,"monithon-about-credit"],["href","https://sheldon.studio/","target","_blank"],["href","https://www.monithon.eu","target","_blank"],[1,"monithon-about-credit",3,"innerHTML"],[1,"monithon-colophon-row"],["src","../../assets/img/eu_flag.png",1,"monithon-about-eu-flag"],[1,"monithon-colophon-row","monithon-app-info-row"],["size-md","4","size-sm","6",1,"monithon-about-col","monithon-colophon-container","monithon-app-info-container"],[1,"monithon-about-version-number"],["src","/assets/img/logo_monithon.svg",1,"monithon-about-logo"]],template:function(o,n){1&o&&(i.Sb(0,"ion-header",0),i.Sb(1,"ion-toolbar"),i.Sb(2,"ion-buttons",1),i.Sb(3,"ion-icon",2),i.ac("click",function(){return n.closeModal()}),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Sb(4,"ion-content",3),i.Bc(5,m,76,52,"ion-grid",4),i.Bc(6,h,51,25,"ion-grid",4),i.Rb()),2&o&&(i.Bb(4),i.jc("fullscreen",!0)("scrollY",!1),i.Bb(1),i.jc("ngIf","projectFinder"==n.mode),i.Bb(1),i.jc("ngIf","reportFinder"==n.mode))},directives:[r.f,r.l,r.b,r.g,r.d,a.n,r.e,r.k,r.c,s.i,r.r],pipes:[b.d],styles:[".monithon-about-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]{--background:#fff}.monithon-about-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .monithon-about-header[_ngcontent-%COMP%]{background-image:unset}.monithon-about-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .monithon-close-modal[_ngcontent-%COMP%]{background-image:url(\"data:image/svg+xml,%3Csvg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Ccircle cx='14' cy='14' r='12' stroke='white' stroke-width='2'/%3E%3Cpath d='M13.375 18.2351H15.2031V18.1136C15.2287 16.6435 15.6506 15.9851 16.7372 15.3139C17.8814 14.6236 18.5845 13.652 18.5845 12.2138C18.5845 10.1364 17.0121 8.73011 14.6662 8.73011C12.5121 8.73011 10.7862 9.98935 10.7031 12.2905H12.6463C12.723 10.9354 13.6882 10.3409 14.6662 10.3409C15.7528 10.3409 16.6349 11.0632 16.6349 12.1946C16.6349 13.147 16.0405 13.8182 15.2798 14.2912C14.0909 15.0199 13.3878 15.7422 13.375 18.1136V18.2351ZM14.3402 22.1214C15.0369 22.1214 15.6186 21.5526 15.6186 20.843C15.6186 20.1463 15.0369 19.571 14.3402 19.571C13.6371 19.571 13.0618 20.1463 13.0618 20.843C13.0618 21.5526 13.6371 22.1214 14.3402 22.1214Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A\");background-size:cover;background-repeat:no-repeat;width:28px;height:28px;cursor:pointer}.monithon-about-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .monithon-about-col[_ngcontent-%COMP%]{margin:auto}.monithon-about-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .monithon-about-modal-content[_ngcontent-%COMP%]{-ms-overflow-style:none;scrollbar-width:none}.monithon-about-modal[_ngcontent-%COMP%]   .modal-wrapper[_ngcontent-%COMP%]   .monithon-about-modal-content[_ngcontent-%COMP%]::-webkit-scrollbar{width:0!important}"]}),o})()},h3R7:function(o,n,t){"use strict";t.d(n,"a",function(){return e});const e={bubbles:{dur:1e3,circles:9,fn:(o,n,t)=>{const e=o*n/t-o+"ms",c=2*Math.PI*n/t;return{r:5,style:{top:9*Math.sin(c)+"px",left:9*Math.cos(c)+"px","animation-delay":e}}}},circles:{dur:1e3,circles:8,fn:(o,n,t)=>{const e=n/t,c=o*e-o+"ms",i=2*Math.PI*e;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":c}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(o,n)=>({r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}})},lines:{dur:1e3,lines:12,fn:(o,n,t)=>({y1:17,y2:29,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":o*n/t-o+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(o,n,t)=>({y1:12,y2:20,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":o*n/t-o+"ms"}})}}},qULd:function(o,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"b",function(){return r}),t.d(n,"c",function(){return c}),t.d(n,"d",function(){return s}),t.d(n,"e",function(){return a});const e={getEngine(){const o=window;return o.TapticEngine||o.Capacitor&&o.Capacitor.isPluginAvailable("Haptics")&&o.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(o){const n=this.getEngine();if(!n)return;const t=this.isCapacitor()?o.style.toUpperCase():o.style;n.impact({style:t})},notification(o){const n=this.getEngine();if(!n)return;const t=this.isCapacitor()?o.style.toUpperCase():o.style;n.notification({style:t})},selection(){this.impact({style:"light"})},selectionStart(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionStart():o.gestureSelectionStart())},selectionChanged(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionChanged():o.gestureSelectionChanged())},selectionEnd(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionEnd():o.gestureSelectionEnd())}},c=()=>{e.selection()},i=()=>{e.selectionStart()},r=()=>{e.selectionChanged()},a=()=>{e.selectionEnd()},s=o=>{e.impact(o)}}}]);