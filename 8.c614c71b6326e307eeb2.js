(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{UrDz:function(e,t,r){"use strict";r.r(t),r.d(t,"RegisterModule",(function(){return _}));var n=r("ofXK"),i=r("tyNb"),o=r("mrSG"),a=r("3Pt+"),c=r("fXoL"),s=r("N/25"),d=r("dNgK"),b=r("Xl5V"),l=r("Wp6s"),u=r("kmnG"),m=r("qFsG"),p=r("bTqV"),h=r("NFeN");const f=["fc"],g=function(){return["/login"]},v=[{path:"",component:(()=>{class e{constructor(e,t,r,n){this.authSvc=e,this.router=t,this._snackBar=r,this._RegisterCodeService=n,this.codeIsValid=!1,this.verifyCode=!0,this.hide=!0,this.btnDisabled=!0,this.registerForm=new a.g({email:new a.d("",[a.s.email,a.s.required]),password:new a.d("",[a.s.required,a.s.minLength(6)])}),this.validCodeForm=new a.g({code:new a.d("",[a.s.required])})}ngOnInit(){}openSnackBar(e){this._snackBar.open(e,"OK",{duration:5e3})}onRegister(){return Object(o.a)(this,void 0,void 0,(function*(){const{email:e,password:t}=this.registerForm.value;try{const r=yield this.authSvc.register(e,t);r&&(this.openSnackBar("Registro Exitoso!"),window.setInterval(()=>this.checkUserIsVerified(r),3e3))}catch(r){this.openSnackBar(r),console.log("ERROR: ",r)}}))}checkUserIsVerified(e){this.router.navigate(e&&e.emailVerified?["/home"]:e?["/verification-email"]:["/register"])}FormatNumber(){let{code:e}=this.validCodeForm.value;this.myDiv.nativeElement.value=this.formatCodeFriend(e),this.btnDisabled=14!=e.length}onValideCode(){return Object(o.a)(this,void 0,void 0,(function*(){let{code:e}=this.validCodeForm.value;yield this._RegisterCodeService.getCodeFriend(e).then(t=>{t.valueChanges().subscribe(t=>{t?(console.log(t),t.valid?(this.openSnackBar("CODIGO CORRECTO!"),this.codeIsValid=!0,this.verifyCode=!1,this._RegisterCodeService.updateCodeFriend(e)):(this.openSnackBar("ESTE CODIGO YA SE USO!"),this.codeIsValid=!1,this.verifyCode=!0)):(this.openSnackBar("ESTE CODIGO NO EXISTE!"),this.codeIsValid=!1,this.verifyCode=!0)})})}))}formatCodeFriend(e){let t,r,n=e.replace(/\s+/g,"").replace(/[^0-9]/gi,"").match(/\d{4,12}/g),i=n&&n[0]||"",o=[];for(t=0,r=i.length;t<r;t+=4)o.push(i.substring(t,t+4));return o.length?o.join("-"):e}}return e.\u0275fac=function(t){return new(t||e)(c.Mb(s.a),c.Mb(i.b),c.Mb(d.a),c.Mb(b.a))},e.\u0275cmp=c.Gb({type:e,selectors:[["app-register"]],viewQuery:function(e,t){var r;1&e&&c.Fc(f,!0),2&e&&c.pc(r=c.ac())&&(t.myDiv=r.first)},decls:26,vars:7,consts:[[1,"example-card"],[1,"tp-container"],[1,"card-avatar","example-header-image","m-5a"],[1,"tac"],[3,"formGroup","ngSubmit"],["appearance","outline",1,"form-group","w-100"],["matInput","","type","email","formControlName","email","placeholder","EMAIL","autocomplete","off",1,"form-control"],["input",""],["appearance","outline","hintLabel","Min 6 characters",1,"form-group","w-100"],["matInput","","type","password","formControlName","password","placeholder","PASSWORD","autocomplete","off",1,"form-control",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],["type","submit","mat-flat-button","","color","primary",1,"w-100","mt-30"],[1,"form-group","mt-3"],[3,"routerLink"]],template:function(e,t){1&e&&(c.Sb(0,"mat-card",0),c.Sb(1,"mat-card-content"),c.Sb(2,"div",1),c.Nb(3,"div",2),c.Sb(4,"h1",3),c.Cc(5,"REGISTRO"),c.Rb(),c.Sb(6,"form",4),c.Zb("ngSubmit",(function(){return t.onRegister()})),c.Sb(7,"mat-form-field",5),c.Sb(8,"mat-label"),c.Cc(9,"Email"),c.Rb(),c.Nb(10,"input",6,7),c.Rb(),c.Sb(12,"mat-form-field",8),c.Sb(13,"mat-label"),c.Cc(14,"Password"),c.Rb(),c.Nb(15,"input",9),c.Sb(16,"button",10),c.Zb("click",(function(){return t.hide=!t.hide})),c.Sb(17,"mat-icon"),c.Cc(18),c.Rb(),c.Rb(),c.Rb(),c.Sb(19,"button",11),c.Cc(20,"Registrarse"),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Sb(21,"div",12),c.Sb(22,"p"),c.Cc(23,"Ya tienes una cuenta? "),c.Sb(24,"a",13),c.Cc(25," Iniciar Sesi\xf3n"),c.Rb(),c.Rb(),c.Rb(),c.Rb()),2&e&&(c.Bb(6),c.ic("formGroup",t.registerForm),c.Bb(9),c.ic("type",t.hide?"password":"text"),c.Bb(1),c.Cb("aria-label","Hide password")("aria-pressed",t.hide),c.Bb(2),c.Dc(t.hide?"visibility_off":"visibility"),c.Bb(6),c.ic("routerLink",c.mc(6,g)))},directives:[l.a,l.b,a.t,a.o,a.h,u.b,u.e,m.a,a.b,a.n,a.f,p.a,u.f,h.a,i.c],styles:["@media only screen and (max-width:425px){.example-card[_ngcontent-%COMP%]{width:85%;margin:0 auto}.example-card-2[_ngcontent-%COMP%]{width:80%;margin:0 auto}.w-100[_ngcontent-%COMP%]{width:100%}.w-95[_ngcontent-%COMP%]{width:95%}.tac[_ngcontent-%COMP%]{text-align:center}.mt-40[_ngcontent-%COMP%]{margin-top:40px}.mt-30[_ngcontent-%COMP%]{margin-top:30px}.example-header-image[_ngcontent-%COMP%]{background-image:url(logo.b62b90286ce0377e31a1.jpg);background-size:cover}.m-5a[_ngcontent-%COMP%]{margin:5px auto}.card-avatar[_ngcontent-%COMP%]{height:200px;width:58%;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-stepper-horizontal[_ngcontent-%COMP%]{margin-top:8px}.mat-form-field[_ngcontent-%COMP%]{margin-top:16px}}"]}),e})()}];let C=(()=>{class e{}return e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({factory:function(t){return new(t||e)},imports:[[i.d.forChild(v)],i.d]}),e})();var w=r("d3UM"),S=r("+rOU"),R=(r("u47x"),r("cH1L")),y=(r("8LU1"),r("FtGj"),r("XNiG"));r("LRne"),r("JX91"),r("1G5W");let O=(()=>{class e{}return e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({factory:function(t){return new(t||e)},imports:[[R.a]]}),e})();var k=r("FKr1");r("/uUt"),r("R0Ic");let I=(()=>{class e{constructor(){this.changes=new y.a,this.optionalLabel="Optional"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=Object(c.Ib)({factory:function(){return new e},token:e,providedIn:"root"}),e})();const M={provide:I,deps:[[new c.B,new c.K,I]],useFactory:function(e){return e||new I}};let x=(()=>{class e{}return e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({factory:function(t){return new(t||e)},providers:[M,k.c],imports:[[k.h,n.c,S.h,p.b,O,h.b,k.q],k.h]}),e})(),_=(()=>{class e{}return e.\u0275mod=c.Kb({type:e}),e.\u0275inj=c.Jb({factory:function(t){return new(t||e)},imports:[[n.c,C,a.q,l.d,u.d,m.b,w.b,h.b,p.b,d.b,x]]}),e})()}}]);