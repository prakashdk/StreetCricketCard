(this["webpackJsonpreact-redux-practice"]=this["webpackJsonpreact-redux-practice"]||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(11),c=a.n(n),s=(a(89),a(90),a(70)),l=a.n(s),o=a(47),i=a(13),b=a(19),j=a(151),u=a(143),d=a(15),O=a(2);var v=Object(d.b)(null,(function(e){return{setOver:function(t){e({type:"SET_OVERS",overs:t})},setTeamN1:function(t){e({type:"SET_TEAM1",team1:t})},setTeamN2:function(t){e({type:"SET_TEAM2",team2:t})}}}))((function(e){var t=e.setOver,a=e.setTeamN1,n=e.setTeamN2,c=Object(r.useState)(1),s=Object(b.a)(c,2),l=s[0],o=s[1],d=Object(r.useState)(""),v=Object(b.a)(d,2),y=v[0],m=v[1],h=Object(r.useState)(""),f=Object(b.a)(h,2),x=f[0],k=f[1],p=Object(i.f)();return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(l),a(y),n(x),p.push("/entry")},className:"form",children:[Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)(j.a,{variant:"outlined",type:"number",color:"primary",label:"Overs",value:l,onChange:function(e){o(""!==e.target.value&&e.target.value<1?1:e.target.value)},required:!0})}),Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)(j.a,{variant:"outlined",color:"primary",label:"Team1",value:y,onChange:function(e){m(e.target.value)},required:!0})}),Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)(j.a,{variant:"outlined",color:"primary",label:"Team2",value:x,onChange:function(e){k(e.target.value)},required:!0})}),Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)(u.a,{type:"submit",color:"primary",variant:"contained",children:"Next"})})]})})})),y=a(28);var m=Object(d.b)(null,(function(e){return{setPlayers1:function(t){e({type:"SET_PLAYERS_1",players:t})},setPlayers2:function(t){e({type:"SET_PLAYERS_2",players:t})}}}))((function(e){var t=e.setPlayers1,a=e.setPlayers2,n=Object(d.c)((function(e){return e.scorecard})),c=n.team1,s=n.team2,l=Object(r.useState)(0),o=Object(b.a)(l,2),v=o[0],m=o[1],h=[{key:1,value:""},{key:2,value:""},{key:3,value:""},{key:4,value:""},{key:5,value:""},{key:6,value:""},{key:7,value:""},{key:8,value:""},{key:9,value:""},{key:10,value:""},{key:11,value:""}],f=Object(r.useState)(h),x=Object(b.a)(f,2),k=x[0],p=x[1],w=Object(i.f)();return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h1",{children:[0===v?c:s," Players"]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)(u.a,{color:"primary",variant:"contained",onClick:function(){0===v?w.push("/"):(m(0),a(h))},children:"Previous"})," ",Object(O.jsx)(u.a,{color:"primary",variant:"contained",onClick:function(){0===v?(m(1),p(h),t(k)):(a(k),w.push("/toss"))},children:"Next"})]}),k.map((function(e,t){return Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)(j.a,{variant:"outlined",color:"primary",label:"Player name ".concat(e.key),value:e.value,onChange:function(e){!function(e,t){var a=Object(y.a)(k),r=[].concat(Object(y.a)(a.slice(0,t)),[{key:t+1,value:e.target.value}],Object(y.a)(a.slice(t+1)));p(r)}(e,t)},required:!0})},e.key)}))]})}));var h=Object(d.b)(null,(function(e){return{setBatting:function(t){e({type:"BATTING",k:t})}}}))((function(e){var t=e.setBatting,a=Object(i.f)(),r=Object(d.c)((function(e){return e.scorecard})),n=r.team1,c=r.team2,s=function(e){t(e),a.push("/score-card")};return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h1",{children:[n," vs ",c]}),Object(O.jsx)("b",{children:"Team opt to bat --\x3e "}),Object(O.jsx)(u.a,{color:"primary",variant:"contained",onClick:function(){return s(1)},children:n})," ",Object(O.jsx)(u.a,{color:"primary",variant:"contained",onClick:function(){return s(2)},children:c})]})})),f=a(146);var x=function(){var e=Object(d.c)((function(e){return e.scorecard})),t=e.batting,a=e.bowledPlayers1,r=e.bowledPlayers2;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Bowlers"}),1===t?r.map((function(e){return Object(O.jsxs)("div",{children:[e.value," ",e.wickets,"-",e.runs,"(",e.oversBowled,".",e.ballsBowled,")"]},e.key)})):a.map((function(e){return Object(O.jsxs)("div",{children:[e.value," ",e.wickets,"-",e.runs,"(",e.oversBowled,".",e.ballsBowled,")"]},e.key)}))]})},k=a(154),p=a(144),w=a(153);var g=function(e){var t=e.open,a=e.handleClose,n=e.activity,c=e.setBatsman,s=e.setBatting,l=e.setBowler;console.log(n);var o=Object(r.useState)([]),i=Object(b.a)(o,2),j=i[0],d=i[1],v=Object(r.useState)({}),y=Object(b.a)(v,2),m=y[0],h=y[1],f=function(e){d(e)},x=function(e){h(e)};return Object(O.jsx)("div",{children:Object(O.jsxs)(k.a,{open:t,children:[Object(O.jsx)("div",{children:Object(O.jsx)(u.a,{variant:"contained",color:"primary",onClick:function(){try{"batting"===n&&2===j.length&&void 0!==m.key?(s(j[0],j[1],m),d([]),a()):"batsman"===n&&1===j.length?(c(j[0]),d([]),a()):"bowling"===n&&void 0!==m.key?(l(m),h({}),a()):(console.log(),alert("Pick valid requirements"))}catch(e){console.log(e),alert("Pick valid requirements")}},children:"Next"})}),"batting"===n&&Object(O.jsxs)("div",{children:[Object(O.jsx)(S,{max:2,handle:f}),Object(O.jsx)(B,{handle:x})]}),"batsman"===n&&Object(O.jsx)("div",{children:Object(O.jsx)(S,{max:1,handle:f})}),"bowling"===n&&Object(O.jsx)("div",{children:Object(O.jsx)(B,{handle:x})})]})})};function S(e){var t=e.max,a=e.handle,n=Object(r.useState)([]),c=Object(b.a)(n,2),s=c[0],l=c[1],o=function(e,t){var r=Object(y.a)(s);e.target.checked?r.push(t):r=r.filter((function(e){return e.key!==t.key})),console.log(r),l(r),a(r)},i=Object(d.c)((function(e){return e.scorecard})),j=i.team1,u=i.team2,v=i.batting,m=i.team1Players,h=i.team2Players,f=i.battedPlayers1,x=i.battedPlayers2,k=i.batsman1,g=i.batsman2,S=function(e){return 1===v?k.key===e||g.key===e||void 0!==f.find((function(t){return t.key===e}))||s.length===t&&!s.find((function(t){return t.key===e})):k.key===e||g.key===e||void 0!==x.find((function(t){return t.key===e}))||s.length===t&&!s.find((function(t){return t.key===e}))};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("h1",{children:["Pick ",1===v?j:u," batsman"]}),1===v?m.map((function(e){return Object(O.jsx)("div",{children:Object(O.jsx)(p.a,{label:e.value,disabled:S(e.key),control:Object(O.jsx)(w.a,{onChange:function(t){return o(t,e)}})})},e.key)})):h.map((function(e){return Object(O.jsx)("div",{children:Object(O.jsx)(p.a,{label:e.value,disabled:S(e.key),control:Object(O.jsx)(w.a,{onChange:function(t){return o(t,e)}})})},e.key)}))]})}function B(e){var t=e.handle,a=Object(d.c)((function(e){return e.scorecard})),n=a.team1,c=a.team2,s=a.batting,l=a.team1Players,o=a.team2Players,i=Object(d.c)((function(e){return e.scorecard})),j=Object(r.useState)({}),u=Object(b.a)(j,2),v=u[0],y=u[1],m=function(e,a){e.target.checked?(y(a),t(a)):(y({}),t({}))},h=function(e){return i.bowler.key===e||void 0!==v.key&&v.key!==e};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("h1",{children:["Pick ",2===s?n:c," bowler"]}),2===s?l.map((function(e){return Object(O.jsx)("div",{children:Object(O.jsx)(p.a,{label:e.value,disabled:h(e.key),control:Object(O.jsx)(w.a,{onChange:function(t){return m(t,e)}})})},e.key)})):o.map((function(e){return Object(O.jsx)("div",{children:Object(O.jsx)(p.a,{label:e.value,disabled:h(e.key),control:Object(O.jsx)(w.a,{onChange:function(t){return m(t,e)}})})},e.key)}))]})}var P=Object(d.b)(null,(function(e){return{setBatsman1:function(t){e({type:"SET_BATSMAN_1",batsman:t})},setBatsman2:function(t){e({type:"SET_BATSMAN_2",batsman:t})},setSelectedBowler:function(t){e({type:"SET_BOWLER",bowler:t})},setStrike:function(t){e({type:"SET_STRIKE",k:t})},setScore:function(t){e({type:"SET_SCORE",score:t})},setOver:function(){e({type:"SET_OVER"})},undo:function(){e({type:"UNDO"})},setExtras:function(t){e({type:"SET_EXTRAS",extras:t})},setWicket:function(t){e({type:"SET_WICKET",newBatsman:t})},setInnings:function(t){e({type:"SET_INNINGS",k:t})}}}))((function(e){var t=e.setScore,a=e.setBatsman1,n=e.setBatsman2,c=e.setSelectedBowler,s=e.setStrike,l=e.setOver,o=e.undo,i=e.setExtras,j=e.setWicket,v=e.setInnings,y=Object(d.c)((function(e){return e.scorecard})),m=y.innings,h=y.target,k=y.overs,p=y.bowler,w=y.strike,S=y.batsman1,B=y.batsman2,P=y.totalScore,E=y.currentOver,T=y.currentBall,N=y.isNoBall,C=y.extras,_=y.team1Players,F=y.previousState,A=y.wickets,R=Object(r.useState)(!1),I=Object(b.a)(R,2),M=I[0],L=I[1],D=Object(r.useState)(""),W=Object(b.a)(D,2),q=W[0],G=W[1],U=Object(r.useCallback)((function(){0===m?v(1):alert("Match over")}),[m,v]);return Object(r.useEffect)((function(){A===_.length-1&&U()}),[A,_,U]),Object(r.useEffect)((function(){console.log(T+" called"),6===T&&E===k-1?U():6===T&&A<_.length-1&&(G("bowling"),L(!0),l())}),[T,E,k,U,l,A,_]),Object(r.useEffect)((function(){0===w&&(G("batting"),L(!0))}),[w]),Object(O.jsxs)("div",{children:[Object(O.jsxs)("h1",{children:[m+1," Innings"]}),N?Object(O.jsx)("h2",{style:{color:"red"},children:"it is a no ball, select the runs scored bay batsman in no ball"}):Object(O.jsx)(O.Fragment,{}),F.isNoBall?Object(O.jsx)("h2",{style:{color:"red"},children:"it is a Free hit"}):Object(O.jsx)(O.Fragment,{}),1===m?Object(O.jsxs)("h2",{children:["Target :",h]}):Object(O.jsx)(O.Fragment,{}),Object(O.jsxs)("h3",{children:["Total score :",P," ","-"," ",A]}),Object(O.jsxs)("h5",{children:["Extras :",C]}),Object(O.jsxs)("h5",{children:["Overs :",E,".",T]}),Object(O.jsxs)("p",{children:[S.value,Object(O.jsx)("b",{children:1===w&&"*"})," ",S.runs,"(",S.ballsFaced,")"]}),Object(O.jsxs)("p",{children:[B.value,Object(O.jsx)("b",{children:2===w&&"*"})," ",B.runs,"(",B.ballsFaced,")"]}),Object(O.jsxs)("p",{children:[p.value," ",p.wickets,"-",p.runs,"(",p.oversBowled,".",p.ballsBowled,")"]}),Object(O.jsx)(g,{open:M,setBatting:function(e,t,r){var l={key:e.key,value:e.value,out:!1,ballsFaced:0,runs:0},o={key:t.key,value:t.value,out:!1,ballsFaced:0,runs:0},i={key:r.key,value:r.value,bowled:!1,oversBowled:0,ballsBowled:0,runs:0,wickets:0};a(l),n(o),c(i),s(1)},setBatsman:function(e){var t={key:e.key,value:e.value,out:!1,ballsFaced:0,runs:0};j(t)},setBowler:function(e){var t={key:e.key,value:e.value,bowled:!1,oversBowled:0,ballsBowled:0,runs:0,wickets:0};c(t)},handleClose:function(){L(!1)},activity:q}),Object(O.jsxs)("div",{children:[Object(O.jsx)(u.a,{color:"primary",variant:"contained",onClick:function(){t(0)},children:"0"}),Object(O.jsx)(u.a,{color:"primary",variant:"contained",onClick:function(){t(1)},children:"1"}),Object(O.jsx)(u.a,{color:"primary",variant:"contained",onClick:function(){t(2)},children:"2"}),Object(O.jsx)(u.a,{color:"primary",variant:"contained",onClick:function(){t(3)},children:"3"}),Object(O.jsx)(u.a,{color:"primary",variant:"contained",onClick:function(){t(4)},children:"4"}),Object(O.jsx)(u.a,{color:"primary",variant:"contained",onClick:function(){t(6)},children:"6"}),Object(O.jsx)(u.a,{color:"primary",variant:"contained",onClick:function(){return s(1===w?2:1)},children:Object(O.jsx)(f.a,{})}),Object(O.jsx)(u.a,{color:"primary",variant:"contained",onClick:function(){return o()},children:"Undo"}),Object(O.jsx)(u.a,{color:"primary",variant:"contained",onClick:function(){return i(!1)},children:"WD"}),Object(O.jsx)(u.a,{color:"primary",variant:"contained",onClick:function(){return i(!0)},children:"NB"}),Object(O.jsx)(u.a,{color:"primary",variant:"contained",onClick:function(){A===_.length-2?j({}):(G("batsman"),L(!0))},disabled:F.isNoBall,children:"OUT"}),Object(O.jsx)(u.a,{color:"primary",variant:"contained",onClick:U,children:"END"})]}),Object(O.jsx)(x,{})]})})),E=a(148),T=a(149),N=a(145),C=a(109),_=a(147),F=Object(_.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));var A=function(){var e=F();return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(E.a,{position:"static",children:Object(O.jsxs)(T.a,{children:[Object(O.jsx)(N.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(O.jsx)(l.a,{})}),Object(O.jsx)(C.a,{variant:"h6",className:e.title,children:"Scorecard"}),Object(O.jsx)(u.a,{color:"inherit",children:"Login"})]})}),Object(O.jsx)(o.a,{children:Object(O.jsxs)(i.c,{children:[Object(O.jsx)(i.a,{exact:!0,path:"/",children:Object(O.jsx)(v,{})}),Object(O.jsx)(i.a,{exact:!0,path:"/entry",children:Object(O.jsx)(m,{})}),Object(O.jsx)(i.a,{exact:!0,path:"/toss",children:Object(O.jsx)(h,{})}),Object(O.jsx)(i.a,{exact:!0,path:"/score-card",children:Object(O.jsx)(P,{})})]})})]})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,156)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))},I=a(51),M=a(71),L=a.n(M),D=a(72),W=a.n(D),q=a(73),G=a.n(q),U=a(74),Y=a.n(U),K=a(4),V={overs:0,team1:"",team2:"",team1Players:[],team2Players:[],batting:0,batsman1:{},batsman2:{},bowler:{},currentOver:0,currentBall:0,thisOver:[],totalScore:0,strike:0,extras:0,target:-1,battedPlayers1:[],battedPlayers2:[],bowledPlayers1:[],bowledPlayers2:[],previousState:[],isNoBall:!1,innings:0,wickets:0};var J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"persist/REHYDRATE":return t.payload?Object(K.a)({},t.payload.scorecard):Object(K.a)({},V);case"SET_OVERS":return Object(K.a)(Object(K.a)({},V),{},{overs:t.overs});case"SET_TEAM1":return Object(K.a)(Object(K.a)({},e),{},{team1:t.team1.toUpperCase()});case"SET_TEAM2":return Object(K.a)(Object(K.a)({},e),{},{team2:t.team2.toUpperCase()});case"SET_PLAYERS_1":return Object(K.a)(Object(K.a)({},e),{},{team1Players:t.players.filter((function(e){return""!==e.value}))});case"SET_PLAYERS_2":return Object(K.a)(Object(K.a)({},e),{},{team2Players:t.players.filter((function(e){return""!==e.value}))});case"SET_BATSMAN_1":return Object(K.a)(Object(K.a)({},e),{},{batsman1:t.batsman});case"SET_BATSMAN_2":return Object(K.a)(Object(K.a)({},e),{},{batsman2:t.batsman});case"SET_BOWLER":var a=1===e.batting?e.bowledPlayers2.find((function(e){return e.key===t.bowler.key})):e.bowledPlayers1.find((function(e){return e.key===t.bowler.key}));return Object(K.a)(Object(K.a)({},e),{},{bowler:void 0!==a?a:t.bowler,bowledPlayers1:1===e.batting||void 0!==a?e.bowledPlayers1:[].concat(Object(y.a)(e.bowledPlayers1),[t.bowler]),bowledPlayers2:2===e.batting||void 0!==a?e.bowledPlayers2:[].concat(Object(y.a)(e.bowledPlayers2),[t.bowler])});case"BATTING":return Object(K.a)(Object(K.a)({},e),{},{previousState:Object(K.a)(Object(K.a)({},e),{},{previousState:{}}),batting:t.k});case"SET_STRIKE":return Object(K.a)(Object(K.a)({},e),{},{strike:t.k});case"SET_SCORE":return Object(K.a)(Object(K.a)({},e),{},{previousState:Object(K.a)(Object(K.a)({},e),{},{previousState:{}}),strike:1===t.score||3===t.score?1===e.strike?2:1:e.strike,totalScore:e.totalScore+t.score,batsman1:1===e.strike?Object(K.a)(Object(K.a)({},e.batsman1),{},{runs:e.batsman1.runs+t.score,ballsFaced:e.isNoBall?e.batsman1.ballsFaced:e.batsman1.ballsFaced+1}):e.batsman1,batsman2:2===e.strike?Object(K.a)(Object(K.a)({},e.batsman2),{},{runs:e.batsman2.runs+t.score,ballsFaced:e.isNoBall?e.batsman2.ballsFaced:e.batsman2.ballsFaced+1}):e.batsman2,bowler:Object(K.a)(Object(K.a)({},e.bowler),{},{runs:e.bowler.runs+t.score,ballsBowled:e.isNoBall?e.bowler.ballsBowled:e.bowler.ballsBowled+1}),currentBall:e.isNoBall?e.currentBall:e.currentBall+1,isNoBall:!1});case"SET_OVER":return Object(K.a)(Object(K.a)({},e),{},{strike:1===e.strike?2:1,currentOver:e.currentOver+1,currentBall:0,bowledPlayers1:1===e.batting?e.bowledPlayers1:e.bowledPlayers1.map((function(t){return t.key===e.bowler.key?Object(K.a)(Object(K.a)({},e.bowler),{},{ballsBowled:0,oversBowled:e.bowler.oversBowled+1}):Object(K.a)({},t)})),bowledPlayers2:2===e.batting?e.bowledPlayers2:e.bowledPlayers2.map((function(t){return t.key===e.bowler.key?Object(K.a)(Object(K.a)({},e.bowler),{},{ballsBowled:0,oversBowled:e.bowler.oversBowled+1}):Object(K.a)({},t)}))});case"UNDO":var r=Object(K.a)({},e.previousState);return r.overs?Object(K.a)(Object(K.a)({},e.previousState),{},{previousState:{}}):Object(K.a)({},e);case"SET_EXTRAS":return Object(K.a)(Object(K.a)({},e),{},{previousState:Object(K.a)(Object(K.a)({},e),{},{previousState:{}}),totalScore:e.totalScore+1,extras:e.extras+1,isNoBall:t.extras});case"SET_WICKET":return Object(K.a)(Object(K.a)({},e),{},{wickets:e.wickets+1,previousState:Object(K.a)(Object(K.a)({},e),{},{previousState:{}}),bowler:Object(K.a)(Object(K.a)({},e.bowler),{},{wickets:e.bowler.wickets+1,ballsBowled:e.bowler.ballsBowled+1}),currentBall:e.currentBall+1,battedPlayers1:1===e.batting?e.battedPlayers1.concat(1===e.strike?Object(K.a)(Object(K.a)({},e.batsman1),{},{out:!0,ballsFaced:e.batsman1.ballsFaced+1}):Object(K.a)(Object(K.a)({},e.batsman2),{},{out:!0,ballsFaced:e.batsman1.ballsFaced+1})):e.battedPlayers1,battedPlayers2:2===e.batting?e.battedPlayers2.concat(1===e.strike?Object(K.a)(Object(K.a)({},e.batsman1),{},{out:!0,ballsFaced:e.batsman1.ballsFaced+1}):Object(K.a)(Object(K.a)({},e.batsman2),{},{out:!0,ballsFaced:e.batsman1.ballsFaced+1})):e.battedPlayers2,batsman1:1===e.strike?t.newBatsman:e.batsman1,batsman2:2===e.strike?t.newBatsman:e.batsman2});case"SET_INNINGS":return Object(K.a)(Object(K.a)({},e),{},{wickets:0,target:e.totalScore+1,totalScore:0,extras:0,previousState:Object(K.a)(Object(K.a)({},e),{},{previousState:{}}),innings:t.k,batting:1===e.batting?2:1,strike:0,batsman1:{},batsman2:{},bowler:{},currentOver:0,currentBall:0,bowledPlayers1:1===e.batting?e.bowledPlayers1:e.bowledPlayers1.map((function(t){return t.key===e.bowler.key?Object(K.a)({},e.bowler):Object(K.a)({},t)})),bowledPlayers2:2===e.batting?e.bowledPlayers2:e.bowledPlayers2.map((function(t){return t.key===e.bowler.key?Object(K.a)({},e.bowler):Object(K.a)({},t)})),battedPlayers1:1===e.batting?e.battedPlayers1.concat(1===e.strike?Object(K.a)({},e.batsman1):Object(K.a)({},e.batsman2)):e.battedPlayers1,battedPlayers2:2===e.batting?e.battedPlayers2.concat(1===e.strike?Object(K.a)({},e.batsman1):Object(K.a)({},e.batsman2)):e.battedPlayers2});default:return Object(K.a)({},e)}},X=Object(I.combineReducers)({scorecard:J}),H=[W.a],z={key:"root",storage:L.a},Q=G()(z,X),Z=Object(I.createStore)(Q,I.applyMiddleware.apply(void 0,H)),$=Y()(Z),ee=a(75),te=a(150);c.a.render(Object(O.jsx)(d.a,{store:Z,children:Object(O.jsx)(ee.a,{loading:Object(O.jsx)(te.a,{}),persistor:$,children:Object(O.jsx)(A,{})})}),document.getElementById("root")),R()},89:function(e,t,a){},90:function(e,t,a){}},[[106,1,2]]]);
//# sourceMappingURL=main.de6d9387.chunk.js.map