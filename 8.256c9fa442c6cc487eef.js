(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{UrDz:function(e,t,i){"use strict";i.r(t),i.d(t,"RegisterModule",(function(){return _}));var n=i("ofXK"),r=i("tyNb"),o=i("mrSG"),a=i("3Pt+"),s=i("fXoL"),c=i("N/25"),d=i("dNgK"),b=i("Xl5V"),l=i("Wp6s"),u=i("kmnG"),m=i("qFsG"),p=i("bTqV"),h=i("NFeN");const f=["fc"],g=function(){return["/login"]},v=[{path:"",component:(()=>{class e{constructor(e,t,i,n){this.authSvc=e,this.router=t,this._snackBar=i,this._RegisterCodeService=n,this.isDisabled=!1,this.codeIsValid=!1,this.verifyCode=!0,this.hide=!0,this.btnDisabled=!0,this.registerForm=new a.g({email:new a.d("",[a.s.email,a.s.required]),password:new a.d("",[a.s.required,a.s.minLength(6)])}),this.validCodeForm=new a.g({code:new a.d("",[a.s.required])})}ngOnInit(){}openSnackBar(e){this._snackBar.open(e,"OK",{duration:5e3}),this.isDisabled=!1}onRegister(){return Object(o.a)(this,void 0,void 0,(function*(){this.isDisabled=!0;const{email:e,password:t}=this.registerForm.value;try{const i=yield this.authSvc.register(e,t);i&&(this.openSnackBar("Registro Exitoso!"),window.setInterval(()=>this.checkUserIsVerified(i),3e3))}catch(i){this.isDisabled=!1,this.openSnackBar(i),console.log("ERROR: ",i)}}))}checkUserIsVerified(e){this.router.navigate(e&&e.emailVerified?["/home"]:e?["/verification-email"]:["/register"])}FormatNumber(){let{code:e}=this.validCodeForm.value;this.myDiv.nativeElement.value=this.formatCodeFriend(e),this.btnDisabled=14!=e.length}onValideCode(){return Object(o.a)(this,void 0,void 0,(function*(){let{code:e}=this.validCodeForm.value;yield this._RegisterCodeService.getCodeFriend(e).then(t=>{t.valueChanges().subscribe(t=>{t?(console.log(t),t.valid?(this.openSnackBar("CODIGO CORRECTO!"),this.codeIsValid=!0,this.verifyCode=!1,this._RegisterCodeService.updateCodeFriend(e)):(this.openSnackBar("ESTE CODIGO YA SE USO!"),this.codeIsValid=!1,this.verifyCode=!0)):(this.openSnackBar("ESTE CODIGO NO EXISTE!"),this.codeIsValid=!1,this.verifyCode=!0)})})}))}formatCodeFriend(e){let t,i,n=e.replace(/\s+/g,"").replace(/[^0-9]/gi,"").match(/\d{4,12}/g),r=n&&n[0]||"",o=[];for(t=0,i=r.length;t<i;t+=4)o.push(r.substring(t,t+4));return o.length?o.join("-"):e}}return e.\u0275fac=function(t){return new(t||e)(s.Mb(c.a),s.Mb(r.b),s.Mb(d.a),s.Mb(b.a))},e.\u0275cmp=s.Gb({type:e,selectors:[["app-register"]],viewQuery:function(e,t){var i;1&e&&s.Fc(f,!0),2&e&&s.pc(i=s.ac())&&(t.myDiv=i.first)},decls:26,vars:8,consts:[[1,"example-card"],[1,"tp-container"],[1,"card-avatar","example-header-image","m-5a"],[1,"tac"],[3,"formGroup","ngSubmit"],["appearance","outline",1,"form-group","w-100"],["matInput","","type","email","formControlName","email","placeholder","EMAIL","autocomplete","off",1,"form-control"],["input",""],["appearance","outline","hintLabel","Min 6 characters",1,"form-group","w-100"],["matInput","","type","password","formControlName","password","placeholder","PASSWORD","autocomplete","off",1,"form-control",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],["type","submit","mat-flat-button","",1,"w-100","mt-30","green",3,"disabled"],[1,"form-group","mt-3"],[3,"routerLink"]],template:function(e,t){1&e&&(s.Sb(0,"mat-card",0),s.Sb(1,"mat-card-content"),s.Sb(2,"div",1),s.Nb(3,"div",2),s.Sb(4,"h1",3),s.Cc(5,"REGISTRO"),s.Rb(),s.Sb(6,"form",4),s.Zb("ngSubmit",(function(){return t.onRegister()})),s.Sb(7,"mat-form-field",5),s.Sb(8,"mat-label"),s.Cc(9,"Email"),s.Rb(),s.Nb(10,"input",6,7),s.Rb(),s.Sb(12,"mat-form-field",8),s.Sb(13,"mat-label"),s.Cc(14,"Password"),s.Rb(),s.Nb(15,"input",9),s.Sb(16,"button",10),s.Zb("click",(function(){return t.hide=!t.hide})),s.Sb(17,"mat-icon"),s.Cc(18),s.Rb(),s.Rb(),s.Rb(),s.Sb(19,"button",11),s.Cc(20,"Registrarse"),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(21,"div",12),s.Sb(22,"p"),s.Cc(23,"Ya tienes una cuenta? "),s.Sb(24,"a",13),s.Cc(25," Iniciar Sesi\xf3n"),s.Rb(),s.Rb(),s.Rb(),s.Rb()),2&e&&(s.Bb(6),s.ic("formGroup",t.registerForm),s.Bb(9),s.ic("type",t.hide?"password":"text"),s.Bb(1),s.Cb("aria-label","Hide password")("aria-pressed",t.hide),s.Bb(2),s.Dc(t.hide?"visibility_off":"visibility"),s.Bb(1),s.ic("disabled",t.isDisabled),s.Bb(5),s.ic("routerLink",s.mc(7,g)))},directives:[l.a,l.b,a.t,a.o,a.h,u.b,u.e,m.a,a.b,a.n,a.f,p.a,u.f,h.a,r.c],styles:["@media only screen and (max-width:425px){.example-card[_ngcontent-%COMP%]{width:85%;margin:0 auto}.example-card-2[_ngcontent-%COMP%]{width:80%;margin:0 auto}.w-100[_ngcontent-%COMP%]{width:100%}.w-95[_ngcontent-%COMP%]{width:95%}.tac[_ngcontent-%COMP%]{text-align:center}.mt-40[_ngcontent-%COMP%]{margin-top:40px}.mt-30[_ngcontent-%COMP%]{margin-top:30px}.example-header-image[_ngcontent-%COMP%]{background-image:url(logo.b62b90286ce0377e31a1.jpg);background-size:cover}.m-5a[_ngcontent-%COMP%]{margin:5px auto}.card-avatar[_ngcontent-%COMP%]{height:200px;width:58%;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-stepper-horizontal[_ngcontent-%COMP%]{margin-top:8px}.mat-form-field[_ngcontent-%COMP%]{margin-top:16px}.green[_ngcontent-%COMP%]{color:#fff;background:#03a000}}"]}),e})()}];let C=(()=>{class e{}return e.\u0275mod=s.Kb({type:e}),e.\u0275inj=s.Jb({factory:function(t){return new(t||e)},imports:[[r.d.forChild(v)],r.d]}),e})();var w=i("d3UM"),S=i("+rOU"),O=(i("u47x"),i("cH1L")),R=(i("8LU1"),i("FtGj"),i("XNiG"));i("LRne"),i("JX91"),i("1G5W");let y=(()=>{class e{}return e.\u0275mod=s.Kb({type:e}),e.\u0275inj=s.Jb({factory:function(t){return new(t||e)},imports:[[O.a]]}),e})();var k=i("FKr1");i("/uUt"),i("R0Ic");let M=(()=>{class e{constructor(){this.changes=new R.a,this.optionalLabel="Optional"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=Object(s.Ib)({factory:function(){return new e},token:e,providedIn:"root"}),e})();const I={provide:M,deps:[[new s.B,new s.K,M]],useFactory:function(e){return e||new M}};let x=(()=>{class e{}return e.\u0275mod=s.Kb({type:e}),e.\u0275inj=s.Jb({factory:function(t){return new(t||e)},providers:[I,k.c],imports:[[k.h,n.c,S.h,p.b,y,h.b,k.q],k.h]}),e})(),_=(()=>{class e{}return e.\u0275mod=s.Kb({type:e}),e.\u0275inj=s.Jb({factory:function(t){return new(t||e)},imports:[[n.c,C,a.q,l.d,u.d,m.b,w.b,h.b,p.b,d.b,x]]}),e})()}}]);