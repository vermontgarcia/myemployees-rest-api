(this["webpackJsonpmyemployees-react-app"]=this["webpackJsonpmyemployees-react-app"]||[]).push([[0],{185:function(e,t,a){e.exports=a(392)},190:function(e,t,a){},391:function(e,t,a){},392:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),o=a.n(r),c=(a(190),a(45)),s=a(31),i=a(32),m=a(34),u=a(33),p=a(35),d=a(396),h=d.a.Meta,E=function(e){var t=e.employee,a=e.handleLog;return l.a.createElement("div",{onClick:a.bind(null,t)},l.a.createElement(d.a,{hoverable:!0,className:"employee-card",cover:l.a.createElement("img",{alt:t.name,src:"avatar"===t.profilePicture?"/avatar.png":t.profilePicture})},l.a.createElement(h,{title:t.name,description:t.position})))},g=function(){return l.a.createElement("div",{className:"footer-details-envelop"},l.a.createElement("p",null,"\xa9 2020 My Company, Inc. All Rights Reserved."))},f=a(36),v=a.n(f),y=a(402),b="localhost"===window.location.hostname?"http://localhost:3500/api":"https://my-employees-2020.herokuapp.com/api",N=function(e){v.a.post("".concat(b,"/log"),e).then((function(e){y.a.success("".concat(e.data.msg,', Type: "').concat(e.data.log.logName,'" at "').concat(Date(e.data.log.created_at),'"'),5)})).catch((function(e){console.log("Log Error =====>",e.response.data.msg)}))},w="localhost"===window.location.hostname?"http://localhost:3500/api":"https://my-employees-2020.herokuapp.com/api",S=function(e,t){v.a.post("".concat(w,"/auth/signup"),e).then((function(e){localStorage.setItem("token",e.data.token),localStorage.setItem("user",JSON.stringify(e.data.user));var a={userId:e.data.user._id,logName:"User signup"};N(a),y.a.success(e.data.message),t.push("/")})).catch((function(e){y.a.error(e.response.data.msg)}))},O=function(e,t){v.a.post("".concat(w,"/auth/login"),e).then((function(e){localStorage.setItem("token",e.data.token),localStorage.setItem("user",JSON.stringify(e.data.user));var a={userId:e.data.user._id,logName:"User login"};N(a),y.a.success(e.data.msg),t.push("/")})).catch((function(e){y.a.error(e.response.data.msg)}))},k=function(e){var t=localStorage.getItem("token");v.a.get("".concat(w,"/auth/loggedin"),{headers:{"x-access-token":t}}).catch((function(t){y.a.error(t.response.data.msg),localStorage.removeItem("token"),e.push("/login")}))},j="localhost"===window.location.hostname?"http://localhost:3500/api":"https://my-employees-2020.herokuapp.com/api",P=a(403),C=a(399),x=a(404),I=a(7),L=a(18),D=a(393),F=a(401),M=a(394),R=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).showDrawer=function(){e.setState({visible:!0})},e.onClose=function(){e.setState({visible:!1})},e.state={visible:!1,placement:"left"},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.user;return l.a.createElement("nav",{className:"nav"},l.a.createElement("div",{className:"mouseHover"},l.a.createElement(I.a,{onClick:this.showDrawer,type:"menu",className:"icon-nav"})),l.a.createElement("div",null,e?l.a.createElement(L.c,{to:"/"},l.a.createElement(D.a,{src:"avatar"===e.profilePicture?"/avatar.png":e.profilePicture})):null),l.a.createElement(F.a,{placement:this.state.placement,closable:!1,onClose:this.onClose,visible:this.state.visible,className:"drawer-wrapper"},l.a.createElement("div",null,l.a.createElement(L.b,{to:"/"},l.a.createElement(I.a,{type:"home"})," Home")),l.a.createElement(M.a,null),l.a.createElement("div",null,l.a.createElement(L.b,{to:"/logchart"},l.a.createElement(I.a,{type:"file-search"})," Log Char")),l.a.createElement("div",null,l.a.createElement(L.b,{to:"/"},l.a.createElement(I.a,{type:"file-done"})," Employees")),l.a.createElement(M.a,null),l.a.createElement("div",null,l.a.createElement(L.b,{to:"/"},l.a.createElement(I.a,{type:"user"})," My Profile")),l.a.createElement("div",null,l.a.createElement(L.b,{to:"/"},l.a.createElement(I.a,{type:"setting"})," Settings")),l.a.createElement(M.a,null),l.a.createElement("div",{onClick:this.props.handleLogOut},l.a.createElement(L.b,{to:""},l.a.createElement(I.a,{type:"logout"})," Log out"))))}}]),t}(n.Component),q=P.a.Header,T=P.a.Footer,A=P.a.Content,J=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).showModal=function(){e.setState({visible:!0})},e.handleModal=function(){e.showModal()},e.handleCancel=function(){e.setState({visible:!1})},e.handleLogOut=function(){var t;t=e.props.history,localStorage.removeItem("token"),y.a.success("Logged out succesfully"),t.push("/login")},e.handleLoggedIn=function(){localStorage.getItem("token")?k(e.props.history):e.props.history.push("/login");var t=JSON.parse(localStorage.getItem("user"));t?e.setState({user:t}):e.props.history.push("/login")},e.handleLog=function(t){e.handleLoggedIn();var a={userId:e.state.user._id,employeeId:t._id,logName:"Employee consult"};N(a),e.setState({employee:t}),e.showModal()},e.state={user:{},list:[],visible:!1,employee:{}},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.handleLoggedIn();var t=this.state.list;v.a.get("".concat(j,"/employee/list")).then((function(a){t=a.data.list,e.setState({list:t})})).catch((function(e){y.a.error(e.response.data.msg)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.list,n=t.user,r=t.employee,o=t.visible;return l.a.createElement("div",null,l.a.createElement(P.a,null,l.a.createElement(q,null,l.a.createElement(R,{user:n,handleLogOut:this.handleLogOut})),l.a.createElement(A,null,l.a.createElement("h1",{className:"home-title"},"My Company Employees Book"),l.a.createElement("div",{className:"cards-envelop"},a.map((function(t,a){return l.a.createElement(E,{key:a,handleLog:e.handleLog,employee:t})}))),l.a.createElement(C.a,{visible:o,centered:!0,width:700,title:"Employee Details",onCancel:this.handleCancel,footer:null},l.a.createElement("div",{className:"employee-details-envelope"},l.a.createElement("div",{className:"details-card"},l.a.createElement("img",{className:"details-image",src:"avatar"===r.profilePicture?"/avatar.png":r.profilePicture,alt:r.name})),l.a.createElement("div",{className:"details-card details-card-text"},l.a.createElement("p",null,l.a.createElement("span",{className:"details-card-text-tag"},"Name: ")," ",r.name," "),l.a.createElement("p",null,l.a.createElement("span",{className:"details-card-text-tag"},"Department: ")," ",r.department," "),l.a.createElement("p",null,l.a.createElement("span",{className:"details-card-text-tag"},"Position: "),r.position," "),l.a.createElement("p",null,l.a.createElement("span",{className:"details-card-text-tag"},"User type: "),r.role," "),l.a.createElement("p",null," ",r.email," "))))),l.a.createElement(T,null,l.a.createElement(g,null))),l.a.createElement("div",null,l.a.createElement(x.a,{id:"back-top-custom"},l.a.createElement("div",{className:"ant-back-top-inner"},l.a.createElement(I.a,{type:"to-top"})))))}}]),t}(n.Component),_=a(397),H=a(398),U=a(400),W=a(44),B=_.a.Item,V=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields((function(e,t){e||O(t,a.props.history)}))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return l.a.createElement("div",{className:"login-envelop"},l.a.createElement("div",null,l.a.createElement("img",{src:"/logo192.png",alt:"logo"})),l.a.createElement("div",null,l.a.createElement(_.a,{onSubmit:this.handleSubmit,className:"form-envelop"},l.a.createElement("div",null,l.a.createElement("h1",null,"Login")),l.a.createElement(B,null,e("email",{rules:[{required:!0,message:"Please enter your email!"}]})(l.a.createElement(H.a,{prefix:l.a.createElement(I.a,{type:"mail",className:"input-icon-color"}),placeholder:"name.surname@mycompany.com"}))),l.a.createElement(B,null,e("password",{rules:[{required:!0,message:"Please enter your password!"}]})(l.a.createElement(H.a,{prefix:l.a.createElement(I.a,{type:"lock",className:"input-icon-color"}),type:"password",placeholder:"Your password"}))),l.a.createElement(B,null,e("remember",{valuePropName:"checked",initialValue:!0})(l.a.createElement(U.a,null,"Remember me")),l.a.createElement(L.b,{className:"login-form-forgot",to:"/forgot"},"Forgot my password"),l.a.createElement(W.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Login"),"Not registered yet? ",l.a.createElement(L.b,{to:"/signup"},"Sign up!")))))}}]),t}(n.Component),Y=_.a.create()(V),z=_.a.Item,$=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={confirmDirty:!1,autoCompleteResult:[]},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll((function(e,t){e||S(t,a.props.history)}))},a.handleConfirmBlur=function(e){var t=e.target.value;a.setState({confirmDirty:a.state.confirmDirty||!!t})},a.compareToFirstPassword=function(e,t,n){var l=a.props.form;t&&t!==l.getFieldValue("password")?n("Password missmatch!"):n()},a.validateToNextPassword=function(e,t,n){var l=a.props.form;t&&a.state.confirmDirty&&l.validateFields(["confirm"],{force:!0}),n()},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return l.a.createElement("div",{className:"signup-envelop"},l.a.createElement("div",null,l.a.createElement("img",{src:"/logo192.png",alt:"logo"})),l.a.createElement("div",null,l.a.createElement(_.a,{onSubmit:this.handleSubmit},l.a.createElement("div",null,l.a.createElement("h1",null,"Signup")),l.a.createElement(z,null,e("name",{rules:[{required:!0,message:"Please enter your name!",whitespace:!0}]})(l.a.createElement(H.a,{prefix:l.a.createElement(I.a,{type:"user",className:"input-icon-color"}),placeholder:"What is your name?"}))),l.a.createElement(z,null,e("email",{rules:[{type:"email",message:"Please enter a valid email!"},{required:!0,message:"Emter your email!"}]})(l.a.createElement(H.a,{prefix:l.a.createElement(I.a,{type:"mail",className:"input-icon-color"}),placeholder:"name.surname@mycompany.com"}))),l.a.createElement(z,null,e("department",{rules:[{required:!0,message:"Department is required!"}]})(l.a.createElement(H.a,{prefix:l.a.createElement(I.a,{type:"apartment",className:"input-icon-color"}),placeholder:"Department"}))),l.a.createElement(z,null,e("position",{rules:[{required:!0,message:"Position is required!"}]})(l.a.createElement(H.a,{prefix:l.a.createElement(I.a,{type:"team",className:"input-icon-color"}),placeholder:"Position"}))),l.a.createElement(z,null,e("password",{rules:[{required:!0,message:"Please enter your password!"},{validator:this.validateToNextPassword}]})(l.a.createElement(H.a,{prefix:l.a.createElement(I.a,{type:"lock",className:"input-icon-color"}),type:"password",placeholder:"Your password"}))),l.a.createElement(z,null,e("confirmPassword",{rules:[{required:!0,message:"Please confirm your password!"},{validator:this.compareToFirstPassword}]})(l.a.createElement(H.a,{prefix:l.a.createElement(I.a,{type:"lock",className:"input-icon-color"}),type:"password",placeholder:"Confirm your password"}))),l.a.createElement(z,null,e("agreement",{valuePropName:"checked"})(l.a.createElement(U.a,null,"I have read the ",l.a.createElement(L.b,{to:"/agreement"},"agreement"))),l.a.createElement(W.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Register"),"Already have an account? ",l.a.createElement(L.b,{to:"/login"},"Login")))))}}]),t}(n.Component),G=_.a.create()($),K=function(e){var t=e.title,a=e.name;return l.a.createElement("div",{className:"profile-field-envelop"},l.a.createElement("label",{className:"label"},t,l.a.createElement("p",{className:"data"},a)))},Q=a(395),X=P.a.Header,Z=P.a.Footer,ee=P.a.Content,te=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).handleEdit=function(){e.setState({edit:!e.state.edit})},e.handleEditUser=function(t){var a=e.state.searching;a=!0,e.setState({searching:a});var n=e.props.state.user;n[t.target.name]=t.target.files?t.target.files[0]:t.target.value,e.setState({user:n}),function(e){var t=new FormData;return Object.keys(e).forEach((function(a){t.append(a,e[a])})),v.a.patch("".concat(w,"/auth/edit"),t)}(n).then((function(t){localStorage.setItem("user",JSON.stringify(t.data.user)),e.props.handleSetState(),e.setState({user:t.data.user}),a=!1,e.setState({searching:a})})).catch((function(e){console.log("Error uploading photo =====>",e.response)}))},e.state={edit:!1,searching:!1,user:{}},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){localStorage.getItem("token")?k(this.props.history):this.props.history.push("/login");var e=JSON.parse(localStorage.getItem("user"));e?this.setState({user:e}):this.props.history.push("/login")}},{key:"render",value:function(){var e=this.state.user,t=this.state.edit,a=this.state.searching;return l.a.createElement("div",null,l.a.createElement(P.a,null,l.a.createElement(X,null,l.a.createElement(R,{user:e,handleLogout:this.props.handleLogout})),l.a.createElement(ee,null,l.a.createElement("div",{className:"profile-data"},l.a.createElement("div",null,l.a.createElement("h1",{onClick:this.handleEdit},"Mi perfil"),t?l.a.createElement("h2",null,"Edit"):null),l.a.createElement("div",{className:"picture-box"},l.a.createElement("img",{className:"profile-picture",src:"avatar"===e.profilePicture?"/avatar.png":e.profilePicture,alt:e.name}),l.a.createElement("label",{htmlFor:"profile-picture",id:"picture-btn",className:"ant-btn login-form-button ant-btn-primary"},"Edit Photo",l.a.createElement("input",{id:"profile-picture",type:"file",name:"profilePicture",onChange:this.handleEditUser}))),a?l.a.createElement(Q.a,null):null,l.a.createElement(K,{title:"Nombre",name:e.username}),l.a.createElement(K,{title:"Email",name:e.email}),l.a.createElement(K,{title:"Rol",name:e.role}),l.a.createElement(K,{title:"Estado",name:e.status}))),l.a.createElement(Z,null)),l.a.createElement("div",null,l.a.createElement(x.a,{id:"back-top-custom"},l.a.createElement("div",{className:"ant-back-top-inner"},l.a.createElement(I.a,{type:"to-top"})))))}}]),t}(n.Component),ae=a(181),ne=a(96),le=a(179);function re(){var e=Object(n.useState)({}),t=Object(ne.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),c=Object(ne.a)(o,2),s=c[0],i=c[1],m=Object(n.useState)([]),u=Object(ne.a)(m,2),p=u[0],d=u[1],h=function(){v.a.get("".concat(b,"/log")).then((function(e){var t=e.data.logs,a=[],n=[];t.forEach((function(e){var t=Object(ae.a)(e.created_at).slice(0,10).join(""),l=new Date(e.created_at).getHours();e.date=t,e.hour=n,a.push(t),n.push(l)})),i(a),d(n)})).catch((function(e){console.log("ERROR =====> ",e)}))};return Object(n.useEffect)((function(){h()}),[]),Object(n.useEffect)((function(){r({labels:s,datasets:[{label:"Rainfall",fill:!1,lineTension:.5,backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:p}]})}),[p,s]),l.a.createElement("div",null,l.a.createElement("h1",null,"Log History"),l.a.createElement(le.a,{data:a,options:{title:{display:!0,text:"Average Rainfall per month",fontSize:20},legend:{display:!0,position:"right"}}}))}var oe=function(){return l.a.createElement(c.c,null,l.a.createElement(c.a,{exact:!0,path:"/",render:function(e){return l.a.createElement(J,e)}}),l.a.createElement(c.a,{exact:!0,path:"/signup",render:function(e){return l.a.createElement(G,e)}}),l.a.createElement(c.a,{exact:!0,path:"/login",render:function(e){return l.a.createElement(Y,e)}}),l.a.createElement(c.a,{exact:!0,path:"/profile",render:function(e){return l.a.createElement(te,e)}}),l.a.createElement(c.a,{exact:!0,path:"/logchart",render:function(e){return l.a.createElement(re,e)}}))},ce=(a(391),Object(c.f)((function(){return l.a.createElement("div",{className:"App"},l.a.createElement(oe,null))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement((function(){return l.a.createElement(L.a,null,l.a.createElement(ce,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[185,1,2]]]);
//# sourceMappingURL=main.ffe5d6da.chunk.js.map