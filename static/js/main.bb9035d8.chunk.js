(this.webpackJsonpromeaudio=this.webpackJsonpromeaudio||[]).push([[0],{10:function(e,t,a){},40:function(e,t,a){e.exports=a(66)},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),c=a.n(o),l=a(36),s=a(8),i=a(1),u=a(3),m=a.n(u),g="http://localhost:1337",d=function(e,t,a,n){var r="".concat(g,"/user");return console.log("Savinggggg"),m.a.post(r,{song:e,authorName:t,trackName:a,userId:n})},f=function(e,t,a){var n="".concat(g,"/register");return m.a.post(n,{userName:e,email:t,password:a})},p=function(e,t){var a="".concat(g,"/signin");return m.a.post(a,{email:e,password:t})},v=function(){var e="".concat(g,"/user");return m.a.get(e)},E=function(e){return m.a.get("".concat(g,"/user/").concat(e))},h=a(38),b=a(30),w=a.n(b),y=a(31),S=a(32);function N(){var e=Object(y.a)(["\n  display: inline-block;\n  width: 40px;\n  height: 25px;\n  border-radius: 4px;\n  margin: 10px;\n  vertical-align: middle;\n  horizontal-align: right;\n\n\n"]);return N=function(){return e},e}var k=function(e,t){switch(!0){case e&&t:return"white";case e&&!t:return"red";case!e&&t:return"white";default:return"rgba(130, 130, 130, 0.6)"}},x=function(e,t){switch(!0){case e&&t:return"inset -3px 3px rgba(88, 88, 88, 0.31)";case e&&!t:return"inset 3px -3px 3px rgba(88, 88, 88, 0.31)";case!e&&t:return"inset 3px -3px rgba(88, 88, 88, 0.31)";default:return"4px -4px 5px  rgba(10, 10, 10, 1)"}},O=function(e,t){switch(!0){case e&&t:return.5;case e&&!t:case!e&&t:default:return 1}},j=function(e,t){switch(!0){case e&&t:case e&&!t:return"0px solid rgba(88, 88, 88, 0.31)";case!e&&t:return"8px solid rgba(20, 20, 20, 0.31)";default:return"8px solid rgba(20, 32, 32, 0.45)"}},I=function(e,t){switch(!0){case e&&t:case e&&!t:return"0px solid rgba(88, 88, 88, 0.31)";case!e&&t:default:return"8px solid rgba(88, 88, 88, 0.31)"}},L=function(e,t){switch(!0){case e&&t:case e&&!t:return"8px solid rgba(20, 20, 20, 0.31)";case!e&&t:default:return"0px solid rgba(88, 88, 88, 0.31)"}},C=function(e,t){switch(!0){case e&&t:case e&&!t:return"8px solid rgba(88, 88, 88, 0.31)";case!e&&t:default:return"0px solid rgba(88, 88, 88, 0.31)"}},A=S.a.span.attrs((function(e){var t=e.ready,a=e.play;return{style:{background:k(t,a),opacity:O(t,a),boxShadow:x(t,a),borderLeft:j(t,a),borderRight:L(t,a),borderTop:C(t,a),borderBottom:I(t,a)}}}))(N()),F=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],B=function(e){var t=e.sequence,a=e.drumMachine,n=e.toggleSound;return r.a.createElement("div",null,a.map((function(e){return r.a.createElement("div",{className:e},e,F.map((function(o){return r.a.createElement("span",{className:"step",onClick:function(){n(e,o)}},r.a.createElement(A,{ready:t[a.indexOf(e)][o].ready,play:t[a.indexOf(e)][o].play}))})))})))},T=function(e){return r.a.createElement("div",{onClick:function(){return e.togglePlay(),void console.log(e.playing)}},e.playing?"Stop":"Play")},R=(a(10),function(e){var t=e.sequence,a=Object(n.useState)("Sik Trak"),o=Object(i.a)(a,2),c=o[0],l=o[1],s=Object(n.useState)("Haz"),u=Object(i.a)(s,2),m=u[0],g=u[1];return r.a.createElement("div",{className:"saveButton"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("Da Beat: ",t),console.log("Killa name: ",c),console.log("Author: ",m),d(t,m,c,window.localStorage.getItem("userId")).then((function(e){console.log("ajax post successfulw: ",e)})).catch((function(e){console.warn(e)}))}},r.a.createElement("input",{type:"text",placeholder:"Trak Name",onChange:function(e){var t=e.target.value;l(t),console.log(t)}}),r.a.createElement("input",{type:"text",placeholder:"Author",onChange:function(e){var t=e.target.value;g(t),console.log(t)}}),r.a.createElement("input",{type:"submit"})))}),H=function(e){var t=e.changeBPM;return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("label",{className:"rangeLabel"},"BPM Range"),r.a.createElement("input",{type:"range",onChange:function(e){var a=e.target.value;t(a)},className:"rangeInput",min:"60",max:"180"})))},P=a(27),M={play:!1,ready:!1},z=["CP","CH","CR","BD","OH","RD","RS","SN","TA","TB","TC"],D=[new Array(16).fill(M),new Array(16).fill(M),new Array(16).fill(M),new Array(16).fill(M),new Array(16).fill(M),new Array(16).fill(M),new Array(16).fill(M),new Array(16).fill(M),new Array(16).fill(M),new Array(16).fill(M),new Array(16).fill(M)],q=function(e){var t=Object(n.useState)("sounds"),a=Object(i.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(D),s=Object(i.a)(l,2),u=s[0],m=s[1],g=Object(n.useState)(!1),d=Object(i.a)(g,2),f=d[0],p=d[1],v=Object(n.useState)(0),E=Object(i.a)(v,2),b=E[0],y=E[1],S=Object(n.useState)(120),N=Object(i.a)(S,2),k=N[0],x=N[1];return Object(n.useEffect)((function(){var t=new w.a.Players({CP:"/sounds/909-sounds/909-clap.wav",CH:"/sounds/909-sounds/909-closedHat.wav",CR:"/sounds/909-sounds/909-crash.wav",BD:"/sounds/909-sounds/909-kick.wav",OH:"/sounds/909-sounds/909-openHat.wav",RD:"/sounds/909-sounds/909-ride.wav",RS:"/sounds/909-sounds/909-rimShot.wav",SN:"/sounds/909-sounds/909-snare.wav",TA:"/sounds/909-sounds/909-tom.wav",TB:"/sounds/909-sounds/909-tomOne.wav",TC:"/sounds/909-sounds/909-tomTwo.wav"},(function(){c(t)})).toMaster();null!==e.picked?(console.log(e.picked),console.log("propsss: ",e)):console.log("NULLLLLLL")}),[]),Object(n.useEffect)((function(){P.isEmpty(e.currentSong)||m(e.currentSong);var t=setTimeout((function(){f&&(y((b+1)%16),function(e){for(var t=0;t<u.length;t++)for(var a=0;a<u[t].length;a++){var n=u[t][a],r=n.ready,c=n.play;u[t][a]={ready:r,play:a===e},r&&c&&o.get(z[t]).start()}m(u)}(b))}),k);return function(){clearTimeout(t)}}),[b,f]),r.a.createElement("div",null,r.a.createElement("div",{className:"drumMachingBoard"},r.a.createElement(B,{sequence:u,drumMachine:z,toggleSound:function(e,t){var a=z.indexOf(e),n=Object(h.a)(u),r=n[a][t],o=r.play,c=r.ready;n[a][t]={play:o,ready:!c},m(n),console.log("herererererererererere")}})),r.a.createElement("div",{className:"gearBox"},r.a.createElement("div",{className:"playButton"},r.a.createElement(T,{playing:f,togglePlay:function(){p(!f)}})),window.localStorage.getItem("token")?r.a.createElement("div",{className:"saveComponent"},r.a.createElement(R,{sequence:u})):r.a.createElement("span",null,"Sign up to save tracks"),r.a.createElement("div",{className:"bpmRange"},r.a.createElement(H,{changeBPM:function(e){x(e),console.log("changing: ",k)}}))))},U=a(27),J=function(e){var t=Object(n.useState)({}),a=Object(i.a)(t,2),o=a[0],c=a[1];return Object(n.useEffect)((function(){if(window.localStorage.getItem("token")){var t=window.localStorage.getItem("token");m.a.defaults.headers.common.Authorization=t}else console.log("token not here");!function(){var t=e.match.params.trackName;E(t).then((function(e){console.log("data returned: ",e.data),e.data.beatz.map((function(e){e.trackName===t&&(console.log("found: ",t),console.log("track name: ",e.trackName),console.log("Song sequence: ",e.song),c(e.song))}))})).catch((function(e){return console.warn("Song search error: ",e)}))}()}),[]),r.a.createElement("div",null,U.isEmpty(o)?r.a.createElement("div",null,"Loading ..."):r.a.createElement("div",null,"Your Track is here ",r.a.createElement("h1",null,"RIGHT HERE"),r.a.createElement(q,{currentSong:o})))},G=void 0,K=function(){var e=Object(n.useState)(void 0),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(void 0),l=Object(i.a)(c,2),s=l[0],u=l[1],m=Object(n.useState)(void 0),g=Object(i.a)(m,2),d=g[0],p=g[1];return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"registerForm"},r.a.createElement("form",{onSubmit:function(e){f(a,s,d).then((function(e){console.log("successfull sign up ",e),G.$emit(e.data)})).catch((function(e){console.warn(e)})),o(void 0),u(void 0),p(void 0)}},r.a.createElement("ul",{className:"registerFormUl"},r.a.createElement("li",{className:"registerFormLi"},r.a.createElement("label",null,"User name")),r.a.createElement("li",{className:"registerFormLi"},r.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value;o(t)}})),r.a.createElement("li",{className:"registerFormLi"},r.a.createElement("label",null,"Email")),r.a.createElement("li",{className:"registerFormLi"},r.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value;u(t)}})),r.a.createElement("li",{className:"registerFormLi"},r.a.createElement("label",null,"password")),r.a.createElement("li",{className:"registerFormLi"},r.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value;p(t)}})),r.a.createElement("li",{className:"registerFormLi"},r.a.createElement("input",{type:"submit"}))))))},Y=function(e){var t=Object(n.useState)("harry@gmail.com"),a=Object(i.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)("123456"),s=Object(i.a)(l,2),u=s[0],g=s[1];return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"signInForm"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),p(o,u).then((function(t){console.log("token created: ",t.data.token),window.localStorage.setItem("token",t.data.token),window.localStorage.setItem("userId",t.data.user.id),m.a.defaults.headers.common.Authorization=t.data.token,console.log("header in signin",m.a.defaults.headers.common.Authorization),e.history.push("/user")})).catch((function(e){console.warn(e)})),c(void 0),g(void 0)}},r.a.createElement("ul",{className:"signInFormUl"},r.a.createElement("li",{className:"signInFormLi"},r.a.createElement("label",null,"Email")),r.a.createElement("li",{className:"signInFormLi"},r.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value;c(t)},value:"harry@gmail.com"})),r.a.createElement("li",{className:"signInFormLi"},r.a.createElement("label",null,"Password")),r.a.createElement("li",{className:"signInFormLi"},r.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value;g(t)},value:"123456"})),r.a.createElement("li",{className:"signInFormLi"},r.a.createElement("input",{type:"submit"}))))))},$=function(e){return r.a.createElement("button",{className:"signOut",onClick:function(){console.log(e),window.localStorage.removeItem("token"),window.localStorage.removeItem("userId"),console.log(window.localStorage.getItem("token")),console.log(window.localStorage.removeItem("userId")),e.history.push("/signin")}},"Sign out")},Q=function(e){return r.a.createElement("div",{className:"userSongs"},0!==e?e.songs.map((function(t){return r.a.createElement("h1",{onClick:function(){return function(t){e.chooseSong(t),console.log("songgggg: ",t.trackName)}(t)}},t.trackName)})):r.a.createElement("h4",null,"Loading"))},V=function(e){var t=Object(n.useState)(void 0),a=Object(i.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(null),s=Object(i.a)(l,2),u=s[0],g=s[1];return Object(n.useEffect)((function(){if(window.localStorage.getItem("token")){var e=window.localStorage.getItem("token");m.a.defaults.headers.common.Authorization=e}else console.log("token not here");console.log("hook runnning"),v().then((function(e){c(e.data),console.log(e.data)})).catch((function(e){return console.warn(e)}))}),[]),r.a.createElement("div",{className:"userHome"},void 0!==o?r.a.createElement("div",null,r.a.createElement("h1",null,o.userName),r.a.createElement("h4",null,o.email),r.a.createElement("div",{className:"drumMachineContainer"},r.a.createElement("div",{className:"drumMachine"},r.a.createElement(q,{picked:u}))),r.a.createElement("div",{className:"userSongs"},r.a.createElement(Q,{songs:o.beatz,chooseSong:function(t){g(t),console.log("picked in state: ",u),e.history.push("/user/".concat(t.trackName))}}))):r.a.createElement("h1",null,"Loading . . ."),r.a.createElement($,e))};var W=document.getElementById("root");c.a.render(r.a.createElement((function(){return r.a.createElement("div",null,r.a.createElement(l.a,null,r.a.createElement(s.a,{exact:!0,path:"/",component:q}),r.a.createElement(s.a,{exact:!0,path:"/register",component:K}),r.a.createElement(s.a,{exact:!0,path:"/signin",component:Y}),r.a.createElement(s.a,{exact:!0,path:"/user",component:V}),r.a.createElement(s.a,{exact:!0,path:"/user/:trackName",component:J})))}),null),W)}},[[40,1,2]]]);
//# sourceMappingURL=main.bb9035d8.chunk.js.map