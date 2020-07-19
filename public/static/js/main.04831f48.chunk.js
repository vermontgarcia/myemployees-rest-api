(this["webpackJsonpmyemployees-react-app"]=this["webpackJsonpmyemployees-react-app"]||[]).push([[0],{194:function(e,t,a){e.exports=a(406)},199:function(e,t,a){},405:function(e,t,a){},406:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),o=a.n(l),c=(a(199),a(53)),s=a(35),i=a(36),m=a(38),u=a(37),p=a(39),d=a(410),h=d.a.Meta,g=function(e){var t=e.employee,a=e.handleLog;return r.a.createElement("div",{onClick:a.bind(null,t)},r.a.createElement(d.a,{hoverable:!0,className:"employee-card",cover:r.a.createElement("img",{alt:t.name,src:"avatar"===t.profilePicture?"/avatar.png":t.profilePicture})},r.a.createElement(h,{title:t.name,description:t.position})))},E=function(){return r.a.createElement("div",{className:"footer-details-envelop"},r.a.createElement("p",null,"\xa9 2020 My Company, Inc. All Rights Reserved."))},f=a(30),y=a.n(f),v=a(416),b="localhost"===window.location.hostname?"http://localhost:3500/api":"https://my-employees-2020.herokuapp.com/api",O=function(e){y.a.post("".concat(b,"/log"),e).then((function(e){v.a.success("".concat(e.data.msg,', Type: "').concat(e.data.log.logName,'" at "').concat(Date(e.data.log.created_at),'"'),5)})).catch((function(e){console.log("Log Error =====>",e.response.data.msg)}))},w=function(e){return e?y.a.get("".concat(b,"/log"),{headers:{page:e.page,size:e.size}}):y.a.get("".concat(b,"/log"))},N="localhost"===window.location.hostname?"http://localhost:3500/api":"https://my-employees-2020.herokuapp.com/api",S=function(e,t){y.a.post("".concat(N,"/auth/login"),e).then((function(e){localStorage.setItem("token",e.data.token),localStorage.setItem("user",JSON.stringify(e.data.user));var a={userId:e.data.user._id,logName:"User login"};O(a),v.a.success(e.data.msg),t.push("/")})).catch((function(e){v.a.error(e.response.data.msg)}))},k=function(e){localStorage.removeItem("token"),v.a.success("Logged out succesfully"),e.push("/login")},j=function(e){var t=localStorage.getItem("token");y.a.get("".concat(N,"/auth/loggedin"),{headers:{"x-access-token":t}}).catch((function(t){v.a.error(t.response.data.msg),localStorage.removeItem("token"),e.push("/login")}))},I="localhost"===window.location.hostname?"http://localhost:3500/api":"https://my-employees-2020.herokuapp.com/api",P=a(419),C=a(413),L=a(418),D=a(9),x=a(19),M=a(407),F=a(415),R=a(408),q=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).showDrawer=function(){e.setState({visible:!0})},e.onClose=function(){e.setState({visible:!1})},e.state={visible:!1,placement:"left"},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"mouseHover"},r.a.createElement(D.a,{onClick:this.showDrawer,type:"menu",className:"icon-nav"})),r.a.createElement("div",null,e?r.a.createElement(x.c,{to:"/"},r.a.createElement(M.a,{src:"avatar"===e.profilePicture?"/avatar.png":e.profilePicture})):null),r.a.createElement(F.a,{placement:this.state.placement,closable:!1,onClose:this.onClose,visible:this.state.visible,className:"drawer-wrapper"},r.a.createElement("div",null,r.a.createElement(x.b,{to:"/"},r.a.createElement(D.a,{type:"home"})," Home")),r.a.createElement(R.a,null),r.a.createElement("div",null,r.a.createElement(x.b,{to:"/"},r.a.createElement(D.a,{type:"file-done"})," Employees")),r.a.createElement("div",null,r.a.createElement(x.b,{to:"/logs"},r.a.createElement(D.a,{type:"file-search"})," Logs History")),r.a.createElement("div",null,r.a.createElement(x.b,{to:"/logchart"},r.a.createElement(D.a,{type:"file-search"})," Log Char")),r.a.createElement(R.a,null),r.a.createElement("div",null,r.a.createElement(x.b,{to:"/"},r.a.createElement(D.a,{type:"user"})," My Profile")),r.a.createElement("div",null,r.a.createElement(x.b,{to:"/"},r.a.createElement(D.a,{type:"setting"})," Settings")),r.a.createElement(R.a,null),r.a.createElement("div",{onClick:this.props.handleLogOut},r.a.createElement(x.b,{to:""},r.a.createElement(D.a,{type:"logout"})," Log out"))))}}]),t}(n.Component),T=P.a.Header,_=P.a.Footer,H=P.a.Content,A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).showModal=function(){a.setState({visible:!0})},a.handleModal=function(){a.showModal()},a.handleCancel=function(){a.setState({visible:!1})},a.handleLogOut=function(){k(a.props.history)},a.handleLoggedIn=function(){localStorage.getItem("token")?j(a.props.history):a.props.history.push("/login");var e=JSON.parse(localStorage.getItem("user"));e?a.setState({user:e}):a.props.history.push("/login")},a.handleLog=function(e){a.handleLoggedIn();var t={userId:a.state.user._id,employeeId:e._id,logName:"Employee consult"};O(t),a.setState({employee:e}),a.showModal()},a.state={user:{},list:[],visible:!1,employee:{}},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.handleLoggedIn();var t=this.state.list;y.a.get("".concat(I,"/employee/list")).then((function(a){t=a.data.list,e.setState({list:t})})).catch((function(e){v.a.error(e.response.data.msg)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.list,n=t.user,l=t.employee,o=t.visible;return r.a.createElement("div",null,r.a.createElement(P.a,null,r.a.createElement(T,null,r.a.createElement(q,{user:n,handleLogOut:this.handleLogOut})),r.a.createElement(H,null,r.a.createElement("h1",{className:"home-title"},"My Company Employees Book"),r.a.createElement("div",{className:"cards-envelop"},a.map((function(t,a){return r.a.createElement(g,{key:a,handleLog:e.handleLog,employee:t})}))),r.a.createElement(C.a,{visible:o,centered:!0,width:700,title:"Employee Details",onCancel:this.handleCancel,footer:null},r.a.createElement("div",{className:"employee-details-envelope"},r.a.createElement("div",{className:"details-card"},r.a.createElement("img",{className:"details-image",src:"avatar"===l.profilePicture?"/avatar.png":l.profilePicture,alt:l.name})),r.a.createElement("div",{className:"details-card details-card-text"},r.a.createElement("p",null,r.a.createElement("span",{className:"details-card-text-tag"},"Name: ")," ",l.name," "),r.a.createElement("p",null,r.a.createElement("span",{className:"details-card-text-tag"},"Department: ")," ",l.department," "),r.a.createElement("p",null,r.a.createElement("span",{className:"details-card-text-tag"},"Position: "),l.position," "),r.a.createElement("p",null,r.a.createElement("span",{className:"details-card-text-tag"},"User type: "),l.role," "),r.a.createElement("p",null," ",l.email," "))))),r.a.createElement(_,null,r.a.createElement(E,null))),r.a.createElement("div",null,r.a.createElement(L.a,{id:"back-top-custom"},r.a.createElement("div",{className:"ant-back-top-inner"},r.a.createElement(D.a,{type:"to-top"})))))}}]),t}(n.Component),J=a(411),z=a(412),U=a(414),W=a(52),B=J.a.Item,V=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields((function(e,t){e||S(t,a.props.history)}))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement("div",{className:"login-envelop"},r.a.createElement("div",null,r.a.createElement("h1",null,"My Company")),r.a.createElement("div",null,r.a.createElement("img",{src:"/logo192.png",alt:"logo"})),r.a.createElement("div",null,r.a.createElement(J.a,{onSubmit:this.handleSubmit,className:"form-envelop"},r.a.createElement("div",null,r.a.createElement("h1",null,"Login")),r.a.createElement(B,null,e("email",{rules:[{required:!0,message:"Please enter your email!"}]})(r.a.createElement(z.a,{prefix:r.a.createElement(D.a,{type:"mail",className:"input-icon-color"}),placeholder:"name.surname@mycompany.com"}))),r.a.createElement(B,null,e("password",{rules:[{required:!0,message:"Please enter your password!"}]})(r.a.createElement(z.a,{prefix:r.a.createElement(D.a,{type:"lock",className:"input-icon-color"}),type:"password",placeholder:"Your password"}))),r.a.createElement(B,null,e("remember",{valuePropName:"checked",initialValue:!0})(r.a.createElement(U.a,null,"Remember me")),r.a.createElement(x.b,{className:"login-form-forgot",to:"/forgot"},"Forgot my password"),r.a.createElement(W.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Login"),"Not registered yet? ",r.a.createElement(x.b,{to:"/signup"},"Sign up!")))))}}]),t}(n.Component),Y=J.a.create()(V),$=J.a.Item,G=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll((function(e,t){var n,r;e||(n=t,r=a.props.history,y.a.post("".concat(N,"/auth/signup"),n).then((function(e){localStorage.setItem("token",e.data.token),localStorage.setItem("user",JSON.stringify(e.data.user));var t={userId:e.data.user._id,logName:"User signup"};O(t),v.a.success(e.data.message),r.push("/")})).catch((function(e){v.a.error(e.response.data.msg)})))}))},a.handleConfirmBlur=function(e){var t=e.target.value;a.setState({confirmDirty:a.state.confirmDirty||!!t})},a.compareToFirstPassword=function(e,t,n){var r=a.props.form;t&&t!==r.getFieldValue("password")?n("Password missmatch!"):n()},a.validateToNextPassword=function(e,t,n){var r=a.props.form;t&&a.state.confirmDirty&&r.validateFields(["confirm"],{force:!0}),n()},a.state={confirmDirty:!1,autoCompleteResult:[]},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement("div",{className:"signup-envelop"},r.a.createElement("div",null,r.a.createElement("h1",null,"My Company")),r.a.createElement("div",null,r.a.createElement("img",{src:"/logo192.png",alt:"logo"})),r.a.createElement("div",null,r.a.createElement(J.a,{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("h1",null,"Signup")),r.a.createElement($,null,e("name",{rules:[{required:!0,message:"Please enter your name!",whitespace:!0}]})(r.a.createElement(z.a,{prefix:r.a.createElement(D.a,{type:"user",className:"input-icon-color"}),placeholder:"What is your name?"}))),r.a.createElement($,null,e("email",{rules:[{type:"email",message:"Please enter a valid email!"},{required:!0,message:"Emter your email!"}]})(r.a.createElement(z.a,{prefix:r.a.createElement(D.a,{type:"mail",className:"input-icon-color"}),placeholder:"name.surname@mycompany.com"}))),r.a.createElement($,null,e("department",{rules:[{required:!0,message:"Department is required!"}]})(r.a.createElement(z.a,{prefix:r.a.createElement(D.a,{type:"apartment",className:"input-icon-color"}),placeholder:"Department"}))),r.a.createElement($,null,e("position",{rules:[{required:!0,message:"Position is required!"}]})(r.a.createElement(z.a,{prefix:r.a.createElement(D.a,{type:"team",className:"input-icon-color"}),placeholder:"Position"}))),r.a.createElement($,null,e("password",{rules:[{required:!0,message:"Please enter your password!"},{validator:this.validateToNextPassword}]})(r.a.createElement(z.a,{prefix:r.a.createElement(D.a,{type:"lock",className:"input-icon-color"}),type:"password",placeholder:"Your password"}))),r.a.createElement($,null,e("confirmPassword",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.compareToFirstPassword}]})(r.a.createElement(z.a,{prefix:r.a.createElement(D.a,{type:"lock",className:"input-icon-color"}),type:"password",placeholder:"Confirm your password"}))),r.a.createElement($,null,e("agreement",{valuePropName:"checked"})(r.a.createElement(U.a,null,"I have read the ",r.a.createElement(x.b,{to:"/agreement"},"agreement"))),r.a.createElement(W.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Register"),"Already have an account? ",r.a.createElement(x.b,{to:"/login"},"Login")))))}}]),t}(n.Component),K=J.a.create()(G),Q=a(142),X=a(61),Z=a(409),ee=a(417),te=P.a.Header,ae=P.a.Footer,ne=P.a.Content,re=1;function le(e){var t=Object(n.useState)([]),a=Object(X.a)(t,2),l=(a[0],a[1]),o=Object(n.useState)({}),c=Object(X.a)(o,2),s=c[0],i=c[1],m=Object(n.useState)(!0),u=Object(X.a)(m,2),p=u[0],d=u[1],h=Object(n.useState)(!1),g=Object(X.a)(h,2),f=g[0],y=g[1],v=Object(n.useState)([]),b=Object(X.a)(v,2),O=b[0],N=b[1],S=Object(n.useState)([]),I=Object(X.a)(S,2),C=I[0],x=I[1],F=function(){p&&(re=1),w({page:re,size:20}).then((function(e){re++;var t=O.concat(e.data.logs);t.forEach((function(e){var t=new Date(e.created_at),a=Object(Q.a)(e.created_at).slice(5,10).join(""),n=t.getHours();e.date=a,e.hour=n})),l(t),N(t),x(t),y(!1)})).then((function(){d(!1)})).catch((function(e){console.log("ERROR =====> ",e)}))};Object(n.useEffect)((function(){!function(){localStorage.getItem("token")?j(e.history):e.history.push("/login");var t=JSON.parse(localStorage.getItem("user"));t?i(t):e.history.push("/login")}(),F()}),[]);var R=p||f?null:r.a.createElement("div",{className:"load-more"},r.a.createElement(W.a,{onClick:function(){y(!0);var e=O.concat(Object(Q.a)(new Array(20)).map((function(){return{loading:!0,userId:{profilePicture:"avatar",name:""},employeeId:{profilePicture:"avatar",name:""},logName:"",created_at:""}})));x(e),F()}},"Load More"));return r.a.createElement("div",null,r.a.createElement(P.a,null,r.a.createElement(te,null,r.a.createElement(q,{user:s,handleLogOut:function(){k(e.history)}})),r.a.createElement(ne,null,r.a.createElement("h2",null,"Logs History"),r.a.createElement(Z.a,{className:"demo-loadmore-list",loading:p,itemLayout:"horizontal",loadMore:R,dataSource:C,renderItem:function(e){return r.a.createElement(Z.a.Item,{actions:"Employee consult"===e.logName?[r.a.createElement(M.a,{src:e.employeeId.profilePicture})]:[r.a.createElement(M.a,{src:e.userId.profilePicture})]},r.a.createElement(ee.a,{avatar:!0,title:!1,loading:e.loading,active:!0},r.a.createElement(Z.a.Item.Meta,{avatar:r.a.createElement(M.a,{src:e.userId.profilePicture}),title:'User "'.concat(e.userId.name,'" generates a historic record"'),description:'Log Type: "'.concat(e.logName,'" at "').concat(e.created_at,'"')})))}})),r.a.createElement(ae,null,r.a.createElement(E,null))),r.a.createElement("div",null,r.a.createElement(L.a,{id:"back-top-custom"},r.a.createElement("div",{className:"ant-back-top-inner"},r.a.createElement(D.a,{type:"to-top"})))))}var oe=a(189),ce=new Array(7);ce[0]=0,ce[1]=0,ce[2]=0,ce[3]=0,ce[4]=0,ce[5]=0,ce[6]=0;var se=new Array(7);se[0]="Sunday",se[1]="Monday",se[2]="Tuesday",se[3]="Wednesday",se[4]="Thursday",se[5]="Friday",se[6]="Saturday";var ie=P.a.Header,me=P.a.Footer,ue=P.a.Content,pe=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleLogOut=function(){k(a.props.history)},a.handleLoggedIn=function(){localStorage.getItem("token")?j(a.props.history):a.props.history.push("/login");var e=JSON.parse(localStorage.getItem("user"));console.log("User =====> ",e),e?a.setState({user:e}):a.props.history.push("/login")},a.handleRequest=function(){w().then((function(e){var t=e.data.logs,n=ce,r=se;t.forEach((function(e){var t=new Date(e.created_at);n[t.getDay()]=n[t.getDay()]+1})),a.setState({weekday:r}),a.setState({timesPerDay:n}),a.setChart()})).catch((function(e){console.log("ERROR =====> ",e)}))},a.setChart=function(){var e=a.state,t={labels:e.weekday,datasets:[{label:"Hour",fill:!1,lineTension:0,backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:e.timesPerDay}]};a.setState({data:t})},a.state={user:{},data:{},weekday:[],timesPerDay:[]},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.handleLoggedIn(),this.handleRequest()}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.data;return r.a.createElement("div",null,r.a.createElement(P.a,null,r.a.createElement(ie,null,r.a.createElement(q,{user:t,handleLogOut:this.handleLogOut})),r.a.createElement(ue,null,r.a.createElement(oe.a,{data:a,options:{title:{display:!0,text:"Logs vs Day",fontSize:20},legend:{display:!1,position:"right"}}})),r.a.createElement(me,null,r.a.createElement(E,null))))}}]),t}(n.Component),de=function(){return r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(A,e)}}),r.a.createElement(c.a,{exact:!0,path:"/signup",render:function(e){return r.a.createElement(K,e)}}),r.a.createElement(c.a,{exact:!0,path:"/login",render:function(e){return r.a.createElement(Y,e)}}),r.a.createElement(c.a,{exact:!0,path:"/logs",render:function(e){return r.a.createElement(le,e)}}),r.a.createElement(c.a,{exact:!0,path:"/logchart",render:function(e){return r.a.createElement(pe,e)}}))},he=(a(405),Object(c.f)((function(){return r.a.createElement("div",{className:"App"},r.a.createElement(de,null))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(){return r.a.createElement(x.a,null,r.a.createElement(he,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[194,1,2]]]);
//# sourceMappingURL=main.04831f48.chunk.js.map