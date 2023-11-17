"use strict";(self.webpackChunkyoutube_client_app=self.webpackChunkyoutube_client_app||[]).push([[41],{2041:(Ct,f,a)=>{a.r(f),a.d(f,{YoutubeModule:()=>bt});var r=a(95),y=a(6208),_=a(9909),c=a(676),T=a(493);const{selectRouteParams:w}=(0,T.VF)(),g=(0,c.ZF)("cardsInfo"),h=(0,c.P1)(g,e=>e.cardsInfo?.items),A=(0,c.P1)(g,e=>e.pagesInfo),U=(0,c.P1)(g,e=>e.isLoading),v=(0,c.P1)(g,e=>e.page),P=(0,c.P1)(g,e=>e.customCards),I=(0,c.P1)(h,w,(e,{detailsId:s})=>e&&e.find(o=>o.id===s)||null);var t=a(9468),u=a(6814);let q=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-loader"]],decls:5,vars:0,consts:[[1,"lds-ring","mt-[250px]"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0),t._UZ(1,"div")(2,"div")(3,"div")(4,"div"),t.qZA())},styles:[".lds-ring[_ngcontent-%COMP%]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:8px;border:8px solid #000000;border-radius:50%;animation:_ngcontent-%COMP%_lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#000000 transparent transparent transparent}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){animation-delay:-.45s}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){animation-delay:-.3s}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){animation-delay:-.15s}@keyframes _ngcontent-%COMP%_lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]})}return e})();var k=a(4199),p=a(6733);let F=(()=>{class e{constructor(n){this.store=n,this.pagesInfo$=this.store.select(A),this.page$=this.store.select(v)}ngOnInit(){this.subscription=this.pagesInfo$.subscribe(i=>{this.pagesInfo=i});const n=this.page$.subscribe(i=>{this.page=i});this.subscription.add(n)}nextPage(){this.pagesInfo.nextPage&&this.store.dispatch(p.Jc({pageToken:this.pagesInfo.nextPage,searchValue:this.pagesInfo.searchValue,page:this.page+=1}))}prevPage(){this.pagesInfo.prevPage&&this.store.dispatch(p.Jc({pageToken:this.pagesInfo.prevPage,searchValue:this.pagesInfo.searchValue,page:this.page-=1}))}ngOnDestroy(){this.subscription.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(c.yh))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-pagination"]],decls:8,vars:3,consts:[[1,"flex","justify-center","text-2xl","pb-5","pt-6"],[1,"select-none","rounded-md","bg-red-500","p-1","text-center","align-middle","font-sans","text-xs","font-bold","uppercase","text-white","shadow-md","shadow-red-500/20","transition-all","hover:shadow-lg","hover:shadow-red-500/40",3,"click"],["src","assets/arrow-left.svg","alt","Turn left",1,"w-7","h-7","mt-[-2px]"],[1,"mx-3","pt-[2px]"],["src","assets/arrow-right.svg","alt","Turn right",1,"w-7","h-7","mt-[-2px]"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return o.prevPage()}),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3),t._uU(4),t.ALo(5,"async"),t.qZA(),t.TgZ(6,"button",1),t.NdJ("click",function(){return o.nextPage()}),t._UZ(7,"img",4),t.qZA()()),2&i&&(t.xp6(4),t.Oqu(t.lcZ(5,1,o.page$)))},dependencies:[u.Ov]})}return e})();var O=a(2490),x=a(7663);function Y(e,s){if(1&e&&(t.TgZ(0,"div",12),t._uU(1),t.qZA()),2&e){const n=s.$implicit;t.xp6(1),t.hij(" ",n," ")}}let J=(()=>{class e{constructor(n){this.store=n}removeCustomCard(n){this.store.dispatch(p.F1({customCardId:n}));const i=localStorage.getItem("customCards");if(i){const o=JSON.parse(i);o.filter(d=>d.id!==n),localStorage.setItem("customCards",JSON.stringify(o))}}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(c.yh))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-custom-card"]],inputs:{customCard:"customCard"},decls:30,vars:7,consts:[[1,"relative","flex","flex-col","text-gray-700","h-full","bg-white","shadow-md","w-96","rounded-xl","bg-clip-border","border-b-4","box-border",3,"appCardColor"],[1,"relative","h-56","mx-4","-mt-6","overflow-hidden","text-white","shadow-lg","rounded-xl","bg-blue-gray-500","bg-clip-border","shadow-blue-gray-500/40"],["src","assets/custom-card.svg","alt","img-blur-shadow",1,"hover:scale-105","ease-in","mt-[-20px]","h-[224px]","m-auto"],[1,"p-6","pt-3"],[1,"block","mb-2","font-sans","text-xl","antialiased","font-semibold","leading-snug","tracking-normal","text-blue-gray-900"],[1,"description","overflow-hidden"],[1,"desc-item","mb-1"],[1,"inline","item__title","font-medium","text-base"],[1,"desc-item","flex","justify-start","items-center","flex-wrap"],[1,"item__title","font-medium","text-base"],["class","tag shadow-md rounded-md py-1 px-2 ml-1 w-fit",4,"ngFor","ngForOf"],[1,"p-6","pt-0","mt-auto","flex","justify-between","items-center",3,"click"],[1,"tag","shadow-md","rounded-md","py-1","px-2","ml-1","w-fit"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3)(4,"div",4),t._uU(5),t.qZA(),t.TgZ(6,"div",5)(7,"div",6)(8,"span",7),t._uU(9,"Date:"),t.qZA(),t._uU(10),t.qZA(),t.TgZ(11,"div",6)(12,"span",7),t._uU(13,"Video link:"),t.qZA(),t._uU(14),t.qZA(),t.TgZ(15,"div",6)(16,"span",7),t._uU(17,"Image link:"),t.qZA(),t._uU(18),t.qZA(),t.TgZ(19,"div",6)(20,"span",7),t._uU(21,"Description:"),t.qZA(),t._uU(22),t.qZA(),t.TgZ(23,"div",8)(24,"div",9),t._uU(25,"Tags:"),t.qZA(),t.YNc(26,Y,2,1,"div",10),t.qZA()()(),t.TgZ(27,"button",11),t.NdJ("click",function(){return o.removeCustomCard(o.customCard.id)}),t.TgZ(28,"app-button"),t._uU(29,"Remove"),t.qZA()()()),2&i&&(t.Q6J("appCardColor",o.customCard.date),t.xp6(5),t.hij(" ",o.customCard.title," "),t.xp6(5),t.hij(" ",o.customCard.date," "),t.xp6(4),t.hij(" ",o.customCard.linkVideo," "),t.xp6(4),t.hij(" ",o.customCard.img," "),t.xp6(4),t.hij(" ",o.customCard.description," "),t.xp6(4),t.Q6J("ngForOf",o.customCard.tags))},dependencies:[O.r,u.sg,x.F]})}return e})();function N(e,s){1&e&&(t.ynx(0),t.TgZ(1,"div",2),t._UZ(2,"app-loader"),t.qZA(),t.BQk())}function D(e,s){1&e&&t._UZ(0,"app-custom-card",7),2&e&&t.Q6J("customCard",s.$implicit)}function Q(e,s){if(1&e&&(t.ynx(0),t.YNc(1,D,1,1,"app-custom-card",6),t.ALo(2,"async"),t.BQk()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,1,n.customCards$))}}function M(e,s){if(1&e&&t._UZ(0,"app-card",10),2&e){const n=t.oxw().$implicit;t.Q6J("card",n)}}function $(e,s){if(1&e&&(t.ynx(0),t.YNc(1,M,1,1,"app-card",9),t.BQk()),2&e){const n=s.index,i=t.oxw(3);t.xp6(1),t.Q6J("ngIf",n<i.customCardsCount)}}function S(e,s){if(1&e&&(t.ynx(0),t.YNc(1,$,2,1,"ng-container",8),t.ALo(2,"async"),t.BQk()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,1,n.cards$))}}function L(e,s){if(1&e&&(t.ynx(0),t._UZ(1,"app-card",10),t.BQk()),2&e){const n=s.$implicit;t.xp6(1),t.Q6J("card",n)}}function V(e,s){if(1&e&&(t.YNc(0,L,2,1,"ng-container",8),t.ALo(1,"async")),2&e){const n=t.oxw(2);t.Q6J("ngForOf",t.lcZ(1,1,n.cards$))}}function j(e,s){1&e&&t._UZ(0,"app-pagination")}function B(e,s){if(1&e&&(t.TgZ(0,"div",3),t.YNc(1,Q,3,3,"ng-container",4),t.YNc(2,S,3,3,"ng-container",0),t.YNc(3,V,2,3,"ng-template",null,5,t.W1O),t.qZA(),t.YNc(5,j,1,0,"app-pagination",4),t.ALo(6,"async")),2&e){const n=t.MAs(4),i=t.oxw();t.xp6(1),t.Q6J("ngIf",1===i.page),t.xp6(1),t.Q6J("ngIf",1===i.page)("ngIfElse",n),t.xp6(3),t.Q6J("ngIf",t.lcZ(6,4,i.cards$))}}let R=(()=>{class e{constructor(n){this.store=n,this.cards$=this.store.select(h),this.isLoading$=this.store.select(U),this.page$=this.store.select(v),this.customCards$=this.store.select(P),this.page=1}ngOnInit(){this.subscription=this.customCards$.subscribe(i=>{i&&(this.customCardsCount=20-i.length)});const n=this.page$.subscribe(i=>{this.page=i});this.subscription.add(n)}ngOnDestroy(){const n=this.customCards$.subscribe(i=>localStorage.setItem("customCards",JSON.stringify(i)));this.subscription.unsubscribe(),n.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(c.yh))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-youtube-page"]],decls:4,vars:4,consts:[[4,"ngIf","ngIfElse"],["content",""],[1,"w-full","flex","justify-center"],[1,"cards__container","mt-14"],[4,"ngIf"],["secondPage",""],[3,"customCard",4,"ngFor","ngForOf"],[3,"customCard"],[4,"ngFor","ngForOf"],[3,"card",4,"ngIf"],[3,"card"]],template:function(i,o){if(1&i&&(t.YNc(0,N,3,0,"ng-container",0),t.ALo(1,"async"),t.YNc(2,B,7,6,"ng-template",null,1,t.W1O)),2&i){const d=t.MAs(3);t.Q6J("ngIf",t.lcZ(1,2,o.isLoading$))("ngIfElse",d)}},dependencies:[u.sg,u.O5,q,k.A,F,J,u.Ov],styles:[".cards__container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(384px,1fr));justify-items:center;gap:40px 10px}"]})}return e})();var H=a(4664),E=a(9666),X=a(269),G=a(7398),b=a(5125),z=a(313);let W=(()=>{class e{constructor(n){this.location=n}onClick(){this.location.back()}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(u.Ye))};static#e=this.\u0275dir=t.lG2({type:e,selectors:[["","appHistoryBack",""]],hostBindings:function(i,o){1&i&&t.NdJ("click",function(){return o.onClick()})}})}return e})();function K(e,s){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"button",22),t.NdJ("click",function(){t.CHM(n);const o=t.oxw().ngIf,d=t.oxw();return t.KtG(d.removeFavorite(o.id))}),t._UZ(2,"img",23),t.qZA(),t.BQk()}}function tt(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"button",22),t.NdJ("click",function(){t.CHM(n);const o=t.oxw().ngIf,d=t.oxw();return t.KtG(d.addFavorite(o))}),t._UZ(1,"img",24),t.qZA()}}function et(e,s){if(1&e&&(t.TgZ(0,"div")(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5),t.YNc(6,K,3,0,"ng-container",6),t.YNc(7,tt,2,0,"ng-template",null,7,t.W1O),t.qZA(),t.TgZ(9,"div",8)(10,"div",9),t._uU(11),t.qZA(),t.TgZ(12,"div",10),t._uU(13),t.ALo(14,"date"),t.qZA()(),t.TgZ(15,"div",11)(16,"div"),t._uU(17,"Description:"),t.qZA(),t.TgZ(18,"div",12),t._uU(19),t.qZA()(),t.TgZ(20,"div",13)(21,"div",14),t._UZ(22,"img",15),t.TgZ(23,"div",16),t._uU(24),t.qZA()(),t.TgZ(25,"div",14),t._UZ(26,"img",17),t.TgZ(27,"div",16),t._uU(28),t.qZA()(),t.TgZ(29,"div",14),t._UZ(30,"img",18),t.TgZ(31,"div",16),t._uU(32),t.qZA()(),t.TgZ(33,"div",14),t._UZ(34,"img",19),t.TgZ(35,"div",16),t._uU(36),t.qZA()()()(),t.TgZ(37,"button",20),t._UZ(38,"img",21),t.qZA()()()),2&e){const n=s.ngIf,i=t.MAs(8),o=t.oxw();t.xp6(1),t.Q6J("appCardColor",n.snippet.publishedAt),t.xp6(2),t.Q6J("src",n.snippet.thumbnails.maxres.url,t.LSH),t.xp6(3),t.Q6J("ngIf",o.isFavorite)("ngIfElse",i),t.xp6(5),t.hij(" ",n.snippet.title," "),t.xp6(2),t.hij(" ",t.xi3(14,11,n.snippet.publishedAt,"fullDate")," "),t.xp6(6),t.Oqu(n.snippet.description),t.xp6(5),t.Oqu(n.statistics.viewCount),t.xp6(4),t.Oqu(n.statistics.likeCount),t.xp6(4),t.Oqu(n.statistics.dislikeCount),t.xp6(4),t.Oqu(n.statistics.commentCount)}}let nt=(()=>{class e{constructor(n){this.store=n,this.isFavorite=!1,this.card$=this.store.select(I),this.favCards$=this.store.select(z.up)}addFavorite(n){this.store.dispatch(b.dL({newCard:n}))}removeFavorite(n){this.store.dispatch(b.S4({key:n}))}ngOnInit(){this.subscription=this.card$.subscribe(i=>{null!==i&&(this.cardId=i.id)});const n=this.favCards$.pipe((0,H.w)(i=>(0,E.D)(i??[]).pipe((0,X.s)(o=>o.id===this.cardId),(0,G.U)(o=>!!o)))).subscribe(i=>{this.isFavorite=!!i});this.subscription.add(n)}ngOnDestroy(){this.subscription.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(c.yh))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-details"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"flex","relative","flex-row","mt-4","m-auto","text-gray-700","bg-white","shadow-xl","max-w-[1200px]","w-full","min-h-[460px]","rounded-xl","bg-clip-border","border-b-4","box-border",3,"appCardColor"],[1,"min-w-[729px]","h-fit","overflow-hidden","text-white","shadow-lg","rounded-xl","bg-blue-gray-500","bg-clip-border","shadow-blue-gray-500/40"],["alt","img-blur-shadow",1,"min-h-[461px]",3,"src"],[1,"p-6","pt-3"],[1,"flex","justify-end"],[4,"ngIf","ngIfElse"],["noFavorite",""],[1,"flex","justify-between","items-center","mb-[35px]"],[1,"title","mr-2","font-sans","text-2xl","antialiased","font-bold","leading-snug","tracking-normal","text-blue-gray-900"],[1,"date","flex-grow","text-gray-500"],[1,"block","mb-4","font-sans","text-md","antialiased","font-semibold","leading-snug","tracking-normal","text-blue-gray-900"],[1,"text-gray-500"],[1,"activity","self-end","flex","justify-center","items-center","mb-2"],[1,"activity__item","flex","justify-center","mr-2"],["src","assets/view.svg","alt","view",1,"w-4","h-4","mr-1"],[1,"activity__info"],["src","assets/liked.svg","alt","like",1,"w-4","h-4","mr-1"],["src","assets/dislike.svg","alt","dislike",1,"w-4","h-4","mr-1"],["src","assets/comment.svg","alt","comment",1,"w-4","h-4","mr-1"],["appHistoryBack","",1,"absolute","left-[-42px]","w-10","h-10","bg-transparent","rounded-l-md","shadow-lg","hover:shadow-red-500/40"],["src","assets/arrow-sm-left.svg","alt","arrow",1,"w-10","h-10"],[3,"click"],["src","assets/heart-fill.svg","alt","heart-nofill",1,"w-6","h-6"],["src","assets/heart-nofill.svg","alt","heart-fill",1,"w-6","h-6"]],template:function(i,o){1&i&&(t.YNc(0,et,39,14,"div",0),t.ALo(1,"async")),2&i&&t.Q6J("ngIf",t.lcZ(1,1,o.card$))},dependencies:[u.O5,x.F,W,u.Ov,u.uU]})}return e})();const C={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let m;const it=new Uint8Array(16);function ot(){if(!m&&(m=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!m))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(it)}const l=[];for(let e=0;e<256;++e)l.push((e+256).toString(16).slice(1));const rt=function st(e,s,n){if(C.randomUUID&&!s&&!e)return C.randomUUID();const i=(e=e||{}).random||(e.rng||ot)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,s){n=n||0;for(let o=0;o<16;++o)s[n+o]=i[o];return s}return function Z(e,s=0){return l[e[s+0]]+l[e[s+1]]+l[e[s+2]]+l[e[s+3]]+"-"+l[e[s+4]]+l[e[s+5]]+"-"+l[e[s+6]]+l[e[s+7]]+"-"+l[e[s+8]]+l[e[s+9]]+"-"+l[e[s+10]]+l[e[s+11]]+l[e[s+12]]+l[e[s+13]]+l[e[s+14]]+l[e[s+15]]}(i)};function lt(e,s){1&e&&(t.TgZ(0,"div",19),t._uU(1," Please enter a title. "),t.qZA())}function dt(e,s){1&e&&(t.TgZ(0,"div",19),t._uU(1," The title is too short. "),t.qZA())}function ct(e,s){1&e&&(t.TgZ(0,"div",19),t._uU(1," The title is too long. "),t.qZA())}function ut(e,s){1&e&&(t.TgZ(0,"div",19),t._uU(1," The description is too long. "),t.qZA())}function gt(e,s){1&e&&(t.TgZ(0,"div",19),t._uU(1," Please enter a link to the image. "),t.qZA())}function pt(e,s){1&e&&(t.TgZ(0,"div",19),t._uU(1," Please enter a link to the video. "),t.qZA())}function mt(e,s){1&e&&(t.TgZ(0,"div",19),t._uU(1," Please enter a creation date. "),t.qZA())}function _t(e,s){1&e&&(t.TgZ(0,"div",19),t._uU(1," The date is invalid. "),t.qZA())}function ft(e,s){1&e&&(t.TgZ(0,"div",19),t._uU(1," Please enter a tag. "),t.qZA())}function ht(e,s){if(1&e&&(t.TgZ(0,"div",20),t._UZ(1,"input",21),t.YNc(2,ft,2,0,"div",4),t.qZA()),2&e){const n=s.$implicit,i=s.index;t.xp6(1),t.MGl("placeholder","Tag ",i+1,""),t.Q6J("formControlName",i),t.xp6(1),t.Q6J("ngIf",null==n||null==n.errors?null:n.errors.required)}}const vt=[{path:"",component:R},{path:"details/:detailsId",component:nt},{path:"admin",component:(()=>{class e{constructor(n,i,o){this.fb=n,this.router=i,this.store=o,this.newCardForm=this.fb.group({title:["",[r.kI.required,r.kI.minLength(3),r.kI.maxLength(20)]],description:["",[r.kI.maxLength(255)]],img:["",[r.kI.required]],linkVideo:["",[r.kI.required]],date:["",[r.kI.required,e=>{const s=e.value,n=Date.parse(s),i=String(new Date),o=Date.parse(i);return s&&o<=n?{invalidData:{value:"trey"}}:null}]],tags:this.fb.array([this.fb.control("",r.kI.required)])})}onSubmit(){"VALID"===this.newCardForm.status&&(this.router.navigate(["/youtube"]),this.store.dispatch(p.Qy({customCard:{...this.newCardForm.getRawValue(),id:rt()}})))}onReset(){const n=this.newCardForm.get("tags");n.clear(),n.push(this.fb.control("",r.kI.required)),this.newCardForm.reset()}addTag(){this.newCardForm.get("tags").length<5&&this.newCardForm.get("tags").push(this.fb.control("",r.kI.required))}getControls(){return this.newCardForm.get("tags").controls}get title(){return this.newCardForm.get("title")}get description(){return this.newCardForm.get("description")}get img(){return this.newCardForm.get("img")}get linkVideo(){return this.newCardForm.get("linkVideo")}get date(){return this.newCardForm.get("date")}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(r.qu),t.Y36(_.F0),t.Y36(c.yh))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-admin-page"]],decls:41,vars:10,consts:[[1,"w-[430px]","px-6","py-8","flex","flex-col","justify-center","m-auto","bg-gray-100","rounded-xl",3,"formGroup","ngSubmit"],[1,"form__title","mb-7","text-2xl","font-bold"],["for","title",1,"text-gray-500","text-sm"],["type","text","id","title","formControlName","title","required","",1,"bg-gray-200","w-[382px]","min-h-[44px]","p-2","outline-none"],["class","invalid__message",4,"ngIf"],[1,"mt-4"],["for","description",1,"text-gray-500","text-sm"],["type","text","id","description","formControlName","description",1,"bg-gray-200","w-[382px]","min-h-[44px]","p-2","outline-none"],["for","img",1,"text-gray-500","text-sm"],["type","text","id","img","formControlName","img","required","",1,"bg-gray-200","w-[382px]","min-h-[44px]","p-2","outline-none"],["for","linkVideo",1,"text-gray-500","text-sm"],["type","text","id","linkVideo","formControlName","linkVideo","required","",1,"bg-gray-200","w-[382px]","min-h-[44px]","p-2","outline-none"],["for","date",1,"text-gray-500","text-sm"],["type","date","id","date","formControlName","date","required","",1,"bg-gray-200","w-[382px]","min-h-[44px]","p-2","outline-none"],["for","tags",1,"text-gray-500","text-sm"],[1,"select-none","px-1","ml-1","text-md","rounded-lg","bg-red-500","font-sans","font-bold","uppercase","text-white","shadow-md","shadow-red-500/20","transition-all","hover:shadow-lg","hover:shadow-red-500/40",3,"click"],["formArrayName","tags","class","form__arr",4,"ngFor","ngForOf"],["type","button",1,"select-none","mt-4","rounded-lg","ml-auto","bg-red-500","py-3","px-6","font-sans","text-xs","font-bold","uppercase","text-white","shadow-md","shadow-red-500/20","transition-all","hover:shadow-lg","hover:shadow-red-500/40",3,"click"],["type","submit",1,"select-none","mt-4","rounded-lg","ml-auto","bg-red-500","py-3","px-6","font-sans","text-xs","font-bold","uppercase","text-white","shadow-md","shadow-red-500/20","transition-all","hover:shadow-lg","hover:shadow-red-500/40"],[1,"invalid__message"],["formArrayName","tags",1,"form__arr"],["type","text","id","tags","required","",1,"bg-gray-200","w-[382px]","min-h-[44px]","p-2","outline-none","mt-2",3,"formControlName","placeholder"]],template:function(i,o){1&i&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(1,"div",1),t._uU(2,"Login"),t.qZA(),t.TgZ(3,"div")(4,"label",2),t._uU(5,"Title"),t.qZA(),t._UZ(6,"input",3),t.YNc(7,lt,2,0,"div",4),t.YNc(8,dt,2,0,"div",4),t.YNc(9,ct,2,0,"div",4),t.qZA(),t.TgZ(10,"div",5)(11,"label",6),t._uU(12,"Description"),t.qZA(),t._UZ(13,"input",7),t.YNc(14,ut,2,0,"div",4),t.qZA(),t.TgZ(15,"div",5)(16,"label",8),t._uU(17,"Img"),t.qZA(),t._UZ(18,"input",9),t.YNc(19,gt,2,0,"div",4),t.qZA(),t.TgZ(20,"div",5)(21,"label",10),t._uU(22,"Link video"),t.qZA(),t._UZ(23,"input",11),t.YNc(24,pt,2,0,"div",4),t.qZA(),t.TgZ(25,"div",5)(26,"label",12),t._uU(27,"Creation date"),t.qZA(),t._UZ(28,"input",13),t.YNc(29,mt,2,0,"div",4),t.YNc(30,_t,2,0,"div",4),t.qZA(),t.TgZ(31,"div",5)(32,"label",14),t._uU(33,"Tags"),t.qZA(),t.TgZ(34,"button",15),t.NdJ("click",function(){return o.addTag()}),t._uU(35," + "),t.qZA(),t.YNc(36,ht,3,3,"div",16),t.qZA(),t.TgZ(37,"button",17),t.NdJ("click",function(){return o.onReset()}),t._uU(38," Reset "),t.qZA(),t.TgZ(39,"button",18),t._uU(40," Create "),t.qZA()()),2&i&&(t.Q6J("formGroup",o.newCardForm),t.xp6(7),t.Q6J("ngIf",null==o.title||null==o.title.errors?null:o.title.errors.required),t.xp6(1),t.Q6J("ngIf",null==o.title||null==o.title.errors?null:o.title.errors.minlength),t.xp6(1),t.Q6J("ngIf",null==o.title||null==o.title.errors?null:o.title.errors.maxlength),t.xp6(5),t.Q6J("ngIf",null==o.description||null==o.description.errors?null:o.description.errors.maxlength),t.xp6(5),t.Q6J("ngIf",null==o.img||null==o.img.errors?null:o.img.errors.required),t.xp6(5),t.Q6J("ngIf",null==o.linkVideo||null==o.linkVideo.errors?null:o.linkVideo.errors.required),t.xp6(5),t.Q6J("ngIf",null==o.date||null==o.date.errors?null:o.date.errors.required),t.xp6(1),t.Q6J("ngIf",null==o.date||null==o.date.errors?null:o.date.errors.invalidData),t.xp6(6),t.Q6J("ngForOf",o.getControls()))},dependencies:[u.sg,u.O5,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.sg,r.u,r.CE],styles:[".ng-invalid[_ngcontent-%COMP%]:not(form, .form__arr)[_ngcontent-%COMP%]{border-left:2px solid #ef4444}.ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%]{border-left:2px solid #42a948}.invalid__message[_ngcontent-%COMP%]{left:0;bottom:-.25rem;color:#ef4444}"]})}return e})()}];let xt=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[_.Bz.forChild(vt),_.Bz]})}return e})(),bt=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[y.m,xt,r.UX]})}return e})()}}]);