(this.webpackJsonpromeaudio=this.webpackJsonpromeaudio||[]).push([[0],{117:function(e,t){},12:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(52),c=a.n(r),l=a(9),s=a(10),i=a(1),u=a(3),m=a.n(u),d="https://rome-audio-backend.herokuapp.com",g=function(e,t,a,n){var o="".concat(d,"/user");return console.log("Savinggggg"),m.a.post(o,{song:e,authorName:t,trackName:a,userId:n})},f=function(e,t,a){var n="".concat(d,"/register");return m.a.post(n,{userName:e,email:t,password:a})},p=function(e,t){var a="".concat(d,"/signin");return m.a.post(a,{email:e,password:t})},v=function(){var e="".concat(d,"/user");return m.a.get(e)},h=function(e){return m.a.get("".concat(d,"/user/").concat(e))},E=function(e){return o.a.createElement("div",{className:"indivdualSongs"},0!==e?e.songs.map((function(t){return o.a.createElement("h1",{onClick:function(){return function(t){e.chooseSong(t),console.log("songgggg: ",t.trackName)}(t)}},t.trackName)})):o.a.createElement("h4",null,"Loading"))},b=a(61),w=a(53),S=a.n(w),y=a(54),N=a(55);function k(){var e=Object(y.a)(["\n  display: inline-block;\n  width: 40px;\n  height: 25px;\n  border-radius: 4px;\n  margin: 7px;\n  vertical-align: middle;\n  horizontal-align: right;\n\n\n"]);return k=function(){return e},e}var O=function(e,t){switch(!0){case e&&t:return"#fdeeb7";case e&&!t:return"red";case!e&&t:return"#fdeeb7";default:return"#b5f6ff"}},x=function(e,t){switch(!0){case e&&t:return"inset -3px 3px rgba(88, 88, 88, 0.31)";case e&&!t:return"inset 3px -3px 3px rgba(88, 88, 88, 0.31)";case!e&&t:return"inset 3px -3px rgba(88, 88, 88, 0.31)";default:return"4px -4px 5px  rgba(10, 10, 10, 1)"}},j=function(e,t){switch(!0){case e&&t:return.5;case e&&!t:case!e&&t:default:return 1}},I=function(e,t){switch(!0){case e&&t:case e&&!t:return"0px solid rgba(88, 88, 88, 0.31)";case!e&&t:return"8px solid rgba(20, 20, 20, 0.31)";default:return"8px solid rgba(20, 32, 32, 0.45)"}},L=function(e,t){switch(!0){case e&&t:case e&&!t:return"0px solid rgba(88, 88, 88, 0.31)";case!e&&t:default:return"8px solid rgba(88, 88, 88, 0.31)"}},C=function(e,t){switch(!0){case e&&t:case e&&!t:return"8px solid rgba(20, 20, 20, 0.31)";case!e&&t:default:return"0px solid rgba(88, 88, 88, 0.31)"}},A=function(e,t){switch(!0){case e&&t:case e&&!t:return"8px solid rgba(88, 88, 88, 0.31)";case!e&&t:default:return"0px solid rgba(88, 88, 88, 0.31)"}},F=N.a.span.attrs((function(e){var t=e.ready,a=e.play;return{style:{background:O(t,a),opacity:j(t,a),boxShadow:x(t,a),borderLeft:I(t,a),borderRight:C(t,a),borderTop:A(t,a),borderBottom:L(t,a)}}}))(k()),B=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],T=function(e){var t=e.sequence,a=e.drumMachine,n=e.toggleSound;return o.a.createElement("div",null,a.map((function(e){return o.a.createElement("div",{className:e},e,B.map((function(r){return o.a.createElement("span",{className:"step",onClick:function(){n(e,r)}},o.a.createElement(F,{ready:t[a.indexOf(e)][r].ready,play:t[a.indexOf(e)][r].play}))})))})))},P=function(e){return o.a.createElement("div",{onClick:function(){return e.togglePlay(),void console.log(e.playing)}},e.playing?"Stop":"Play")},z=(a(12),function(e){var t=e.sequence,a=Object(n.useState)("Sik Trak"),r=Object(i.a)(a,2),c=r[0],l=r[1],s=Object(n.useState)("Haz"),u=Object(i.a)(s,2),m=u[0],d=u[1];return o.a.createElement("div",{className:"saveButton"},o.a.createElement("form",{onSubmit:function(){console.log("Da Beat: ",t),console.log("Killa name: ",c),console.log("Author: ",m),g(t,m,c,window.localStorage.getItem("userId")).then((function(e){console.log("ajax post successfulw: ",e)})).catch((function(e){console.warn(e)}))}},o.a.createElement("input",{type:"text",placeholder:"Trak Name",onChange:function(e){var t=e.target.value;l(t),console.log(t)}}),o.a.createElement("input",{type:"text",placeholder:"Author",onChange:function(e){var t=e.target.value;d(t),console.log(t)}}),o.a.createElement("input",{type:"submit"})))}),M=function(e){var t=e.changeBPM;return o.a.createElement("div",null,o.a.createElement("form",null,o.a.createElement("label",{className:"rangeLabel"},"BPM Range"),o.a.createElement("input",{type:"range",onChange:function(e){var a=e.target.value;t(a)},className:"rangeInput",min:"60",max:"180"})))},R=a(38),H={play:!1,ready:!1},D=["CP","CH","CR","BD","OH","RD","RS","SN","TA","TB","TC"],q=[new Array(16).fill(H),new Array(16).fill(H),new Array(16).fill(H),new Array(16).fill(H),new Array(16).fill(H),new Array(16).fill(H),new Array(16).fill(H),new Array(16).fill(H),new Array(16).fill(H),new Array(16).fill(H),new Array(16).fill(H)],U=function(e){var t=Object(n.useState)("sounds"),a=Object(i.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(q),u=Object(i.a)(s,2),m=u[0],d=u[1],g=Object(n.useState)(!1),f=Object(i.a)(g,2),p=f[0],v=f[1],h=Object(n.useState)(0),E=Object(i.a)(h,2),w=E[0],y=E[1],N=Object(n.useState)(120),k=Object(i.a)(N,2),O=k[0],x=k[1];return Object(n.useEffect)((function(){var t=new S.a.Players({CP:"/sounds/909-sounds/909-clap.wav",CH:"/sounds/909-sounds/909-closedHat.wav",CR:"/sounds/909-sounds/909-crash.wav",BD:"/sounds/909-sounds/909-kick.wav",OH:"/sounds/909-sounds/909-openHat.wav",RD:"/sounds/909-sounds/909-ride.wav",RS:"/sounds/909-sounds/909-rimShot.wav",SN:"/sounds/909-sounds/909-snare.wav",TA:"/sounds/909-sounds/909-tom.wav",TB:"/sounds/909-sounds/909-tomOne.wav",TC:"/sounds/909-sounds/909-tomTwo.wav"},(function(){c(t)})).toMaster();null!==e.picked?(console.log(e.picked),console.log("propsss: ",e)):console.log("NULLLLLLL")}),[]),Object(n.useEffect)((function(){R.isEmpty(e.currentSong)||d(e.currentSong);var t=setTimeout((function(){p&&(y((w+1)%16),function(e){for(var t=0;t<m.length;t++)for(var a=0;a<m[t].length;a++){var n=m[t][a],o=n.ready,c=n.play;m[t][a]={ready:o,play:a===e},o&&c&&r.get(D[t]).start()}d(m)}(w))}),O);return function(){clearTimeout(t)}}),[w,p]),o.a.createElement("span",null,o.a.createElement("div",{className:"drumMachingBoard"},o.a.createElement(T,{sequence:m,drumMachine:D,toggleSound:function(e,t){var a=D.indexOf(e),n=Object(b.a)(m),o=n[a][t],r=o.play,c=o.ready;n[a][t]={play:r,ready:!c},d(n),console.log("here")}})),o.a.createElement("div",{className:"gearBox"},o.a.createElement("div",{className:"playButton"},o.a.createElement(P,{playing:p,togglePlay:function(){v(!p)}})),window.localStorage.getItem("token")?o.a.createElement("div",null,o.a.createElement("div",{className:"saveComponent"},o.a.createElement(z,{sequence:m})),o.a.createElement("div",{className:"bpmRange"},o.a.createElement(M,{changeBPM:function(e){x(e),console.log("changing: ",O)}}))):o.a.createElement("div",null,o.a.createElement(l.b,{to:"/signin"},"Sign in to save tracks"))))},J=a(38),W=function(e){var t=Object(n.useState)({}),a=Object(i.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)({}),s=Object(i.a)(l,2),u=s[0],d=s[1],g=Object(n.useState)(""),f=Object(i.a)(g,2),p=f[0],v=f[1];Object(n.useEffect)((function(){if(window.localStorage.getItem("token")){var t=window.localStorage.getItem("token");m.a.defaults.headers.common.Authorization=t}else console.log("token not here");!function(){var t=e.match.params.trackName;h(t).then((function(e){console.log("data returned: ",e.data);var a=e.data.beatz,n=e.data.userName;console.log(n),d(a),v(n),a.map((function(e){e.trackName===t&&(console.log("found: ",t),console.log("track name: ",e.trackName),console.log("Song sequence: ",e.song),c(e.song))}))})).catch((function(e){return console.warn("Song search error: ",e)}))}()}),[]);return o.a.createElement("div",null,J.isEmpty(r)?o.a.createElement("div",null,"Loading ..."):o.a.createElement("div",null,o.a.createElement("h4",null,"Welcome ",p),o.a.createElement("div",null,o.a.createElement(U,{currentSong:r})),o.a.createElement("div",{className:"userSongs"},o.a.createElement(E,{songs:u,chooseSong:function(t){console.log("picked in state: ",t.song),e.history.push("/user/".concat(t.trackName))}}))))},G=function(e){var t=Object(n.useState)(void 0),a=Object(i.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(void 0),u=Object(i.a)(s,2),d=u[0],g=u[1],v=Object(n.useState)(void 0),h=Object(i.a)(v,2),E=h[0],b=h[1];return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"registerForm"},o.a.createElement("form",{onSubmit:function(t){f(r,d,E).then((function(t){console.log("successfull sign up ",t),p(d,E).then((function(t){console.log("token created: ",t.data.token),window.localStorage.setItem("token",t.data.token),window.localStorage.setItem("userId",t.data.user.id),m.a.defaults.headers.common.Authorization=t.data.token,console.log("header in signin",m.a.defaults.headers.common.Authorization),e.history.push("/user")})).catch((function(e){console.warn(e)}))})).catch((function(e){console.warn(e)})),console.log("after"),c(void 0),g(void 0),b(void 0)}},o.a.createElement("ul",{className:"registerFormUl"},o.a.createElement("li",{className:"registerFormLi"},o.a.createElement("label",null,"User name")),o.a.createElement("li",{className:"registerFormLi"},o.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value;c(t)}})),o.a.createElement("li",{className:"registerFormLi"},o.a.createElement("label",null,"Email")),o.a.createElement("li",{className:"registerFormLi"},o.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value;g(t)}})),o.a.createElement("li",{className:"registerFormLi"},o.a.createElement("label",null,"password")),o.a.createElement("li",{className:"registerFormLi"},o.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value;b(t)}})),o.a.createElement("li",{className:"registerFormLi"},o.a.createElement("input",{type:"submit"}),o.a.createElement(l.b,{to:"/signin"},"Sign in"))))))},K=function(e){var t=Object(n.useState)("harry@gmail.com"),a=Object(i.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)("123456"),u=Object(i.a)(s,2),d=u[0],g=u[1];return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"signInForm"},o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),p(r,d).then((function(t){console.log("token created: ",t.data.token),window.localStorage.setItem("token",t.data.token),window.localStorage.setItem("userId",t.data.user.id),m.a.defaults.headers.common.Authorization=t.data.token,console.log("header in signin",m.a.defaults.headers.common.Authorization),e.history.push("/user")})).catch((function(e){console.warn(e)})),c(void 0),g(void 0)}},o.a.createElement("ul",{className:"signInFormUl"},o.a.createElement("li",{className:"signInFormLi"},o.a.createElement("label",null,"Email")),o.a.createElement("li",{className:"signInFormLi"},o.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value;c(t)},value:"harry@gmail.com"})),o.a.createElement("li",{className:"signInFormLi"},o.a.createElement("label",null,"Password")),o.a.createElement("li",{className:"signInFormLi"},o.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value;g(t)},value:"123456"})),o.a.createElement("li",{className:"signInFormLi"},o.a.createElement("input",{type:"submit"})," ",o.a.createElement(l.b,{to:"/register"},"Sign up"))))))},Q=a(60),V=a.n(Q),X=function(e){return o.a.createElement("button",{className:"signOut",onClick:function(){console.log(e),window.localStorage.removeItem("token"),window.localStorage.removeItem("userId"),console.log(window.localStorage.getItem("token")),console.log(window.localStorage.removeItem("userId")),e.history.push("/signin")}},"Sign out")},Y=function(e){var t=V()("http://localhost:1337"),a=Object(n.useState)(void 0),r=Object(i.a)(a,2),c=r[0],l=r[1],s=Object(n.useState)(null),u=Object(i.a)(s,2),d=u[0],g=u[1];return Object(n.useEffect)((function(){if(window.localStorage.getItem("token")){var e=window.localStorage.getItem("token");m.a.defaults.headers.common.Authorization=e}else console.log("token not here");console.log("hook runnning"),v().then((function(e){l(e.data),console.log(e.data),t.on("ping",(function(e){console.log("PING",e)})),t.emit("save song",console.log(e.data))})).catch((function(e){return console.warn(e)}))}),[]),o.a.createElement("div",{className:"userHome"},void 0!==c?o.a.createElement("div",null,o.a.createElement("h4",null,"Welcome ",c.userName),o.a.createElement("div",{className:"drumMachineContainer"},o.a.createElement("div",{className:"drumMachine"},o.a.createElement(U,{picked:d}),o.a.createElement("div",{className:"userSongs"},o.a.createElement(E,{songs:c.beatz,chooseSong:function(t){g(t),console.log("picked in state: ",d),e.history.push("/user/".concat(t.trackName))}}))))):o.a.createElement("h1",null,"Loading . . ."),o.a.createElement(X,e))};var Z=document.getElementById("root");c.a.render(o.a.createElement((function(){return o.a.createElement("div",null,o.a.createElement(l.a,null,o.a.createElement(s.a,{exact:!0,path:"/",component:U}),o.a.createElement(s.a,{exact:!0,path:"/register",component:G}),o.a.createElement(s.a,{exact:!0,path:"/signin",component:K}),o.a.createElement(s.a,{exact:!0,path:"/user",component:Y}),o.a.createElement(s.a,{exact:!0,path:"/user/:trackName",component:W})))}),null),Z)},63:function(e,t,a){e.exports=a(120)}},[[63,1,2]]]);
//# sourceMappingURL=main.b531f60b.chunk.js.map