(this["webpackJsonpreact-redux-practice"]=this["webpackJsonpreact-redux-practice"]||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(12),r=a.n(n),s=(a(92),a(93),a(72)),l=a.n(s),i=a(36),o=a(15),b=a(19),j=a(159),d=a(145),u=a(13),O=a(1);var h=Object(u.b)(null,(function(e){return{setOver:function(t){e({type:"SET_OVERS",overs:t})},setTeamN1:function(t){e({type:"SET_TEAM1",team1:t})},setTeamN2:function(t){e({type:"SET_TEAM2",team2:t})}}}))((function(e){var t=e.setOver,a=e.setTeamN1,n=e.setTeamN2,r=Object(c.useState)(1),s=Object(b.a)(r,2),l=s[0],i=s[1],u=Object(c.useState)(""),h=Object(b.a)(u,2),y=h[0],x=h[1],m=Object(c.useState)(""),v=Object(b.a)(m,2),f=v[0],k=v[1],p=Object(o.f)();return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(l),a(y),n(f),p.push("/entry")},className:"form",children:[Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)(j.a,{variant:"outlined",type:"number",color:"primary",label:"Overs",value:l,onChange:function(e){i(""!==e.target.value&&e.target.value<1?1:e.target.value)},required:!0})}),Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)(j.a,{variant:"outlined",color:"primary",label:"Team1",value:y,onChange:function(e){x(e.target.value)},required:!0})}),Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)(j.a,{variant:"outlined",color:"primary",label:"Team2",value:f,onChange:function(e){k(e.target.value)},required:!0})}),Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)(d.a,{type:"submit",color:"primary",variant:"contained",children:"Next"})})]})})})),y=a(28);var x=Object(u.b)(null,(function(e){return{setPlayers1:function(t){e({type:"SET_PLAYERS_1",players:t})},setPlayers2:function(t){e({type:"SET_PLAYERS_2",players:t})}}}))((function(e){var t=e.setPlayers1,a=e.setPlayers2,n=Object(u.c)((function(e){return e.scorecard})),r=n.team1,s=n.team2,l=Object(c.useState)(0),i=Object(b.a)(l,2),h=i[0],x=i[1],m=[{key:1,value:""},{key:2,value:""},{key:3,value:""},{key:4,value:""},{key:5,value:""},{key:6,value:""},{key:7,value:""},{key:8,value:""},{key:9,value:""},{key:10,value:""},{key:11,value:""}],v=Object(c.useState)(m),f=Object(b.a)(v,2),k=f[0],p=f[1],w=Object(o.f)();return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h1",{children:[0===h?r:s," Players"]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){0===h?w.push("/"):(x(0),a(m))},children:"Previous"})," ",Object(O.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){0===h?(x(1),p(m),t(k)):(a(k),w.push("/toss"))},children:"Next"})]}),k.map((function(e,t){return Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)(j.a,{variant:"outlined",color:"primary",label:"Player name ".concat(e.key),value:e.value,onChange:function(e){!function(e,t){var a=Object(y.a)(k),c=[].concat(Object(y.a)(a.slice(0,t)),[{key:t+1,value:e.target.value}],Object(y.a)(a.slice(t+1)));p(c)}(e,t)},required:!0})},e.key)}))]})}));var m=Object(u.b)(null,(function(e){return{setBatting:function(t){e({type:"BATTING",k:t})}}}))((function(e){var t=e.setBatting,a=Object(o.f)(),c=Object(u.c)((function(e){return e.scorecard})),n=c.team1,r=c.team2,s=function(e){t(e),a.push("/score-card")};return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h1",{children:[n," vs ",r]}),Object(O.jsx)("b",{children:"Team opt to bat --\x3e "}),Object(O.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){return s(1)},children:n})," ",Object(O.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){return s(2)},children:r})]})})),v=a(162),f=a(153),k=a(154);var p=function(){var e=Object(u.c)((function(e){return e.scorecard})),t=e.batting,a=e.bowledPlayers1,c=e.bowledPlayers2;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Bowlers"}),1===t?c.map((function(e){return Object(O.jsxs)("div",{children:[e.value," ",e.wickets,"-",e.runs,"(",e.oversBowled,".",e.ballsBowled,")"]},e.key)})):a.map((function(e){return Object(O.jsxs)("div",{children:[e.value," ",e.wickets,"-",e.runs,"(",e.oversBowled,".",e.ballsBowled,")"]},e.key)}))]})},w=a(5),g=a(146),S=a(147),B=a(148),P=a(149),T=a(150);function N(){var e=Object(u.c)((function(e){return e.scorecard})),t=e.batting,a=e.battedPlayers1,c=e.battedPlayers2,n=e.bowledPlayers1,r=e.bowledPlayers2,s=e.team1Players,l=e.team2Players,i=e.batsman1,o=e.batsman2,b=e.bowler,j=function(e,t){var a=e.map((function(e){var a=t.find((function(t){return t.key===e.key}));return i.key===e.key?Object(w.a)({},i):o.key===e.key?Object(w.a)({},o):void 0!==a?Object(w.a)({},a):""})).filter((function(e){return""!==e}));return console.log(a),a},d=function(e,t){return e.map((function(e){var a=t.find((function(t){return t.key===e.key}));return b.key===e.key?Object(w.a)({},b):void 0!==a?Object(w.a)({},a):""})).filter((function(e){return""!==e}))};return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"1st Innings Summary"}),Object(O.jsx)("h3",{children:"Batsmen"}),1===t?Object(O.jsx)(E,{list:j(s,a)}):Object(O.jsx)(E,{list:j(l,c)}),Object(O.jsx)("h3",{children:"Bowlers"}),1===t?Object(O.jsx)(C,{list:d(l,r)}):Object(O.jsx)(C,{list:d(s,n)})]})}function E(e){var t=e.list;return Object(O.jsxs)(g.a,{children:[Object(O.jsx)(S.a,{children:Object(O.jsxs)(B.a,{children:[Object(O.jsx)(P.a,{children:"Player name"}),Object(O.jsx)(P.a,{children:"Runs"}),Object(O.jsx)(P.a,{children:"Strike rate"})]})}),Object(O.jsx)(T.a,{children:t.map((function(e){return Object(O.jsxs)(B.a,{children:[Object(O.jsxs)(P.a,{children:[e.value,Object(O.jsx)("small",{style:{fontSize:"7px",color:"red"},children:e.out?" OUT":" NOT OUT"})]}),Object(O.jsxs)(P.a,{children:[e.runs,"(",e.ballsFaced,")"]}),Object(O.jsx)(P.a,{children:(e.runs/e.ballsFaced*100).toFixed(2)})]},e.key)}))})]})}function C(e){var t=e.list;return Object(O.jsxs)(g.a,{children:[Object(O.jsx)(S.a,{children:Object(O.jsxs)(B.a,{children:[Object(O.jsx)(P.a,{children:"Player name"}),Object(O.jsx)(P.a,{children:"Wickets"}),Object(O.jsx)(P.a,{children:"Runs"}),Object(O.jsx)(P.a,{children:"Overs"}),Object(O.jsx)(P.a,{children:"Economy"})]})}),Object(O.jsx)(T.a,{children:t.map((function(e){return Object(O.jsxs)(B.a,{children:[Object(O.jsx)(P.a,{children:e.value}),Object(O.jsx)(P.a,{children:e.wickets}),Object(O.jsx)(P.a,{children:e.runs}),Object(O.jsxs)(P.a,{children:[e.oversBowled+(6===e.ballsBowled?1:0),".",6===e.ballsBowled?0:e.ballsBowled]}),Object(O.jsx)(P.a,{children:(e.runs/(e.oversBowled+(e.ballsBowled<=3?0:1))).toFixed(2)})]},e.key)}))})]})}var F=a(151),_=a(161);var A=function(e){var t=e.open,a=e.handleClose,n=e.activity,r=e.setBatsman,s=e.setBatting,l=e.setBowler,i=Object(c.useState)([]),o=Object(b.a)(i,2),j=o[0],u=o[1],h=Object(c.useState)({}),y=Object(b.a)(h,2),x=y[0],m=y[1],f=function(e){u(e)},k=function(e){m(e)};return Object(O.jsx)("div",{children:Object(O.jsxs)(v.a,{open:t,children:[Object(O.jsx)("div",{children:Object(O.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(){try{"batting"===n&&2===j.length&&void 0!==x.key?(s(j[0],j[1],x),u([]),a()):"batsman"===n&&1===j.length?(r(j[0]),u([]),a()):"bowling"===n&&void 0!==x.key?(l(x),m({}),a()):alert("Pick valid requirements")}catch(e){alert("Pick valid requirements")}},children:"Next"})}),"batting"===n&&Object(O.jsxs)("div",{children:[Object(O.jsx)(R,{max:2,handle:f}),Object(O.jsx)(I,{handle:k})]}),"batsman"===n&&Object(O.jsx)("div",{children:Object(O.jsx)(R,{max:1,handle:f})}),"bowling"===n&&Object(O.jsx)("div",{children:Object(O.jsx)(I,{handle:k})})]})})};function R(e){var t=e.max,a=e.handle,n=Object(c.useState)([]),r=Object(b.a)(n,2),s=r[0],l=r[1],i=function(e,t){var c=Object(y.a)(s);console.log(e),e.target.checked?c.push(t):c=c.filter((function(e){return e.key!==t.key})),l(c),a(c)},o=Object(u.c)((function(e){return e.scorecard})),j=o.team1,d=o.team2,h=o.batting,x=o.team1Players,m=o.team2Players,v=o.battedPlayers1,f=o.battedPlayers2,k=o.batsman1,p=o.batsman2,w=function(e){return 1===h?k.key===e||p.key===e||void 0!==v.find((function(t){return t.key===e}))||s.length===t&&!s.find((function(t){return t.key===e})):k.key===e||p.key===e||void 0!==f.find((function(t){return t.key===e}))||s.length===t&&!s.find((function(t){return t.key===e}))};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("h1",{children:["Pick ",1===h?j:d," batsman"]}),1===h?x.map((function(e){return Object(O.jsx)("div",{children:Object(O.jsx)(F.a,{label:e.value,disabled:w(e.key),control:Object(O.jsx)(_.a,{onChange:function(t){return i(t,e)}})})},e.key)})):m.map((function(e){return Object(O.jsx)("div",{children:Object(O.jsx)(F.a,{label:e.value,disabled:w(e.key),control:Object(O.jsx)(_.a,{onChange:function(t){return i(t,e)}})})},e.key)}))]})}function I(e){var t=e.handle,a=Object(u.c)((function(e){return e.scorecard})),n=a.team1,r=a.team2,s=a.batting,l=a.team1Players,i=a.team2Players,o=Object(u.c)((function(e){return e.scorecard})),j=Object(c.useState)({}),d=Object(b.a)(j,2),h=d[0],y=d[1],x=function(e,a){e.target.checked?(y(a),t(a)):(y({}),t({})),console.log(a)},m=function(e){return o.bowler.key===e||void 0!==h.key&&h.key!==e};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("h1",{children:["Pick ",2===s?n:r," bowler"]}),2===s?l.map((function(e){return Object(O.jsx)("div",{children:Object(O.jsx)(F.a,{label:e.value,disabled:m(e.key),control:Object(O.jsx)(_.a,{onChange:function(t){return x(t,e)}})})},e.key)})):i.map((function(e){return Object(O.jsx)("div",{children:Object(O.jsx)(F.a,{label:e.value,disabled:m(e.key),control:Object(O.jsx)(_.a,{onChange:function(t){return x(t,e)}})})},e.key)}))]})}var M=Object(u.b)(null,(function(e){return{setBatsman1:function(t){e({type:"SET_BATSMAN_1",batsman:t})},setBatsman2:function(t){e({type:"SET_BATSMAN_2",batsman:t})},setSelectedBowler:function(t){e({type:"SET_BOWLER",bowler:t})},setStrike:function(t){e({type:"SET_STRIKE",k:t})},setScore:function(t){e({type:"SET_SCORE",score:t})},setOver:function(){e({type:"SET_OVER"})},undo:function(){e({type:"UNDO"})},setExtras:function(t){e({type:"SET_EXTRAS",extras:t})},setWicket:function(t){e({type:"SET_WICKET",newBatsman:t})},setInnings:function(t){e({type:"SET_INNINGS",k:t})}}}))((function(e){var t=e.setScore,a=e.setBatsman1,n=e.setBatsman2,r=e.setSelectedBowler,s=e.setStrike,l=e.setOver,i=e.undo,j=e.setExtras,h=e.setWicket,y=e.setInnings,x=Object(u.c)((function(e){return e.scorecard})),m=x.team1,w=x.team2,g=x.innings,S=x.target,B=x.overs,P=x.bowler,T=x.strike,E=x.batsman1,C=x.batsman2,F=x.totalScore,_=x.currentOver,R=x.currentBall,I=x.isNoBall,M=x.extras,D=x.team1Players,L=x.previousState,U=x.wickets,W=Object(o.f)(),G=Object(c.useState)(!1),q=Object(b.a)(G,2),Y=q[0],K=q[1],V=Object(c.useState)(!1),J=Object(b.a)(V,2),X=J[0],z=J[1],H=Object(c.useState)(""),Q=Object(b.a)(H,2),Z=Q[0],$=Q[1],ee=Object(c.useCallback)((function(){0===g?z(!0):(y(2),W.push("/summary"))}),[g,y,W]);return Object(c.useEffect)((function(){U===D.length-1&&ee()}),[U,D,ee]),Object(c.useEffect)((function(){6===R&&_===B-1?ee():6===R&&U<D.length-1&&($("bowling"),K(!0),l())}),[R,_,B,ee,l,U,D]),Object(c.useEffect)((function(){0===T&&($("batting"),K(!0))}),[T]),Object(c.useEffect)((function(){1===g&&F>=S&&ee()}),[F,g,S,ee]),Object(O.jsxs)("div",{children:[Object(O.jsxs)("h1",{children:[0===g?"1st":"2nd"," INNINGS"]}),I?Object(O.jsx)("h2",{style:{color:"red"},children:"it's a no ball, select the runs scored bay batsman in no ball"}):Object(O.jsx)(O.Fragment,{}),L.isNoBall?Object(O.jsx)("h2",{style:{color:"red"},children:"it's a Free hit"}):Object(O.jsx)(O.Fragment,{}),1===g?Object(O.jsxs)("h2",{children:["Target :",S]}):Object(O.jsx)(O.Fragment,{}),1===g?Object(O.jsx)("h2",{style:{color:"green"},children:S-F===1?"Its a tie":""}):Object(O.jsx)(O.Fragment,{}),1===g?Object(O.jsxs)("h2",{style:{color:"red"},children:[S-F," runs needed from"," ",6*B-(6*_+R)," balls"]}):Object(O.jsx)(O.Fragment,{}),Object(O.jsxs)("h5",{children:["Total overs: ",B]}),Object(O.jsx)("div",{className:"box",children:Object(O.jsxs)("div",{className:"score-display",children:[Object(O.jsx)("div",{className:"batsman-group",children:Object(O.jsxs)("div",{className:"batsman",children:[Object(O.jsxs)("div",{className:"batsman1",style:{display:"grid",gridTemplateColumns:"auto auto"},children:[Object(O.jsxs)("div",{className:"batsman-runs",children:[Object(O.jsx)(f.a,{style:{color:"".concat(1===T?"":"white")}}),E.value]}),Object(O.jsxs)("div",{style:{textAlign:"right"},children:[Object(O.jsx)("span",{className:"batsman-runs",children:E.runs}),Object(O.jsx)("span",{className:"balls-faced",children:E.ballsFaced})]})]}),Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{className:"batsman1",style:{display:"grid",gridTemplateColumns:"auto auto"},children:[Object(O.jsxs)("div",{className:"batsman-runs",children:[Object(O.jsx)(f.a,{style:{color:"".concat(2===T?"":"white")}}),C.value]}),Object(O.jsxs)("div",{style:{textAlign:"right"},children:[Object(O.jsx)("span",{className:"batsman-runs",children:C.runs}),Object(O.jsx)("span",{children:C.ballsFaced})]})]})]})}),Object(O.jsxs)("div",{className:"score",children:[Object(O.jsxs)("div",{children:[Object(O.jsxs)("span",{className:"total-score",children:[F," - ",U]})," ",_,".",R]}),Object(O.jsxs)("div",{children:[m," vs ",w]}),Object(O.jsxs)("div",{children:["Extras :",M]})]}),Object(O.jsx)("div",{className:"bowler",children:Object(O.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"auto auto"},children:[Object(O.jsx)("div",{className:"batsman-runs",children:P.value}),Object(O.jsxs)("div",{style:{textAlign:"right"},children:[Object(O.jsxs)("span",{className:"batsman-runs",children:[P.wickets,"-",P.runs]}),Object(O.jsxs)("span",{children:[P.oversBowled,".",P.ballsBowled]})]})]})})]})}),Object(O.jsx)(A,{open:Y,setBatting:function(e,t,c){var l={key:e.key,value:e.value,out:!1,ballsFaced:0,runs:0},i={key:t.key,value:t.value,out:!1,ballsFaced:0,runs:0},o={key:c.key,value:c.value,bowled:!1,oversBowled:0,ballsBowled:0,runs:0,wickets:0};a(l),n(i),r(o),s(1)},setBatsman:function(e){var t={key:e.key,value:e.value,out:!1,ballsFaced:0,runs:0};h(t)},setBowler:function(e){var t={key:e.key,value:e.value,bowled:!1,oversBowled:0,ballsBowled:0,runs:0,wickets:0};r(t)},handleClose:function(){K(!1)},activity:Z}),Object(O.jsxs)("div",{children:[Object(O.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){t(0)},children:"0"}),Object(O.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){t(1)},children:"1"}),Object(O.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){t(2)},children:"2"}),Object(O.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){t(3)},children:"3"}),Object(O.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){t(4)},children:"4"}),Object(O.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){t(6)},children:"6"}),Object(O.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){return s(1===T?2:1)},children:Object(O.jsx)(k.a,{})}),Object(O.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){return i()},children:"Undo"}),Object(O.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){return j(!1)},children:"WD"}),Object(O.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){return j(!0)},children:"NB"}),Object(O.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){U===D.length-2?h({}):($("batsman"),K(!0))},disabled:L.isNoBall,children:"OUT"}),Object(O.jsx)(d.a,{color:"primary",variant:"contained",onClick:ee,children:"END"})]}),Object(O.jsx)(p,{}),Object(O.jsxs)(v.a,{open:X,onClose:function(){y(1),z(!1)},children:[Object(O.jsx)(N,{}),Object(O.jsx)(d.a,{color:"secondary",variant:"contained",onClick:function(){y(1),z(!1)},children:"Close"})]})]})})),D=a(156),L=a(157),U=a(152),W=a(112),G=a(155);var q=function(){var e=Object(u.c)((function(e){return e.scorecard.previousState})),t=e.batting,a=e.target,c=e.totalScore,n=e.wickets,r=Object(u.c)((function(e){return e.scorecard})),s=r.team1,l=r.team2,i=r.team1Players,o=r.team2Players,b=r.battedPlayers1,j=r.bowledPlayers1,d=r.battedPlayers2,h=r.bowledPlayers2;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Match Over"}),a<=c?Object(O.jsxs)("h2",{style:{color:"red"},children:[1===t?s:l," won by"," ",1===t?i.length-n:o.length-n," ","wickets"]}):a-1>c?Object(O.jsxs)("h2",{style:{color:"red"},children:[1===t?l:s," won by ",a-c," runs"]}):Object(O.jsx)("h2",{style:{color:"green"},children:"Scores level.It's a tie."}),Object(O.jsx)("h1",{children:"1st innings"}),1===t?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("h2",{children:[l," Batsmen"]}),Object(O.jsx)(E,{list:d.sort((function(e,t){return e.key-t.key}))}),Object(O.jsxs)("h2",{children:[s," Bowlers"]}),Object(O.jsx)(C,{list:j})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("h2",{children:[s," Batsmen"]}),Object(O.jsx)(E,{list:b.sort((function(e,t){return e.key-t.key}))}),Object(O.jsxs)("h2",{children:[l," Bowlers"]}),Object(O.jsx)(C,{list:h})]}),Object(O.jsx)("h1",{children:"2nd innings"}),2===t?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("h2",{children:[l," Batsmen"]}),Object(O.jsx)(E,{list:d.sort((function(e,t){return e.key-t.key}))}),Object(O.jsxs)("h2",{children:[s," Bowlers"]}),Object(O.jsx)(C,{list:j})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("h2",{children:[s," Batsmen"]}),Object(O.jsx)(E,{list:b.sort((function(e,t){return e.key-t.key}))}),Object(O.jsxs)("h2",{children:[l," Bowlers"]}),Object(O.jsx)(C,{list:h})]})]})},Y=Object(G.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));var K=function(){var e=Y();return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(i.a,{children:[Object(O.jsx)(D.a,{position:"static",children:Object(O.jsxs)(L.a,{children:[Object(O.jsx)(U.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(O.jsx)(l.a,{})}),Object(O.jsx)(W.a,{variant:"h6",className:e.title,children:"Scorecard"}),Object(O.jsx)(d.a,{onClick:function(){localStorage.clear()},color:"inherit",children:Object(O.jsx)(i.b,{style:{color:"white",textDecoration:"none"},to:"/",children:"New match"})})]})}),Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{exact:!0,path:"/",children:Object(O.jsx)(h,{})}),Object(O.jsx)(o.a,{exact:!0,path:"/entry",children:Object(O.jsx)(x,{})}),Object(O.jsx)(o.a,{exact:!0,path:"/toss",children:Object(O.jsx)(m,{})}),Object(O.jsx)(o.a,{exact:!0,path:"/score-card",children:Object(O.jsx)(M,{})}),Object(O.jsx)(o.a,{exact:!0,path:"/summary",children:Object(O.jsx)(q,{})})]})]})})},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,164)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))},J=a(52),X=a(73),z=a.n(X),H=a(74),Q=a.n(H),Z=a(75),$=a.n(Z),ee=a(76),te=a.n(ee),ae={overs:0,team1:"",team2:"",team1Players:[],team2Players:[],batting:0,batsman1:{},batsman2:{},bowler:{},currentOver:0,currentBall:0,thisOver:[],totalScore:0,strike:0,extras:0,target:-1,battedPlayers1:[],battedPlayers2:[],bowledPlayers1:[],bowledPlayers2:[],previousState:{},isNoBall:!1,innings:0,wickets:0};var ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"persist/REHYDRATE":return t.payload?Object(w.a)({},t.payload.scorecard):Object(w.a)({},ae);case"SET_OVERS":return Object(w.a)(Object(w.a)({},ae),{},{overs:t.overs});case"SET_TEAM1":return Object(w.a)(Object(w.a)({},e),{},{team1:t.team1.toUpperCase()});case"SET_TEAM2":return Object(w.a)(Object(w.a)({},e),{},{team2:t.team2.toUpperCase()});case"SET_PLAYERS_1":return Object(w.a)(Object(w.a)({},e),{},{team1Players:t.players.filter((function(e){return""!==e.value}))});case"SET_PLAYERS_2":return Object(w.a)(Object(w.a)({},e),{},{team2Players:t.players.filter((function(e){return""!==e.value}))});case"SET_BATSMAN_1":return Object(w.a)(Object(w.a)({},e),{},{batsman1:t.batsman});case"SET_BATSMAN_2":return Object(w.a)(Object(w.a)({},e),{},{batsman2:t.batsman});case"SET_BOWLER":var a=1===e.batting?e.bowledPlayers2.find((function(e){return e.key===t.bowler.key})):e.bowledPlayers1.find((function(e){return e.key===t.bowler.key}));return Object(w.a)(Object(w.a)({},e),{},{bowler:void 0!==a?a:t.bowler,bowledPlayers1:1===e.batting||void 0!==a?e.bowledPlayers1:[].concat(Object(y.a)(e.bowledPlayers1),[t.bowler]),bowledPlayers2:2===e.batting||void 0!==a?e.bowledPlayers2:[].concat(Object(y.a)(e.bowledPlayers2),[t.bowler])});case"BATTING":return Object(w.a)(Object(w.a)({},e),{},{previousState:Object(w.a)(Object(w.a)({},e),{},{previousState:{}}),batting:t.k});case"SET_STRIKE":return Object(w.a)(Object(w.a)({},e),{},{strike:t.k});case"SET_SCORE":return Object(w.a)(Object(w.a)({},e),{},{previousState:Object(w.a)(Object(w.a)({},e),{},{previousState:{}}),strike:1===t.score||3===t.score?1===e.strike?2:1:e.strike,totalScore:e.totalScore+t.score,batsman1:1===e.strike?Object(w.a)(Object(w.a)({},e.batsman1),{},{runs:e.batsman1.runs+t.score,ballsFaced:e.isNoBall?e.batsman1.ballsFaced:e.batsman1.ballsFaced+1}):e.batsman1,batsman2:2===e.strike?Object(w.a)(Object(w.a)({},e.batsman2),{},{runs:e.batsman2.runs+t.score,ballsFaced:e.isNoBall?e.batsman2.ballsFaced:e.batsman2.ballsFaced+1}):e.batsman2,bowler:Object(w.a)(Object(w.a)({},e.bowler),{},{runs:e.bowler.runs+t.score,ballsBowled:e.isNoBall?e.bowler.ballsBowled:e.bowler.ballsBowled+1}),currentBall:e.isNoBall?e.currentBall:e.currentBall+1,isNoBall:!1});case"SET_OVER":return Object(w.a)(Object(w.a)({},e),{},{strike:1===e.strike?2:1,currentOver:e.currentOver+1,currentBall:0,bowledPlayers1:1===e.batting?e.bowledPlayers1:e.bowledPlayers1.map((function(t){return t.key===e.bowler.key?Object(w.a)(Object(w.a)({},e.bowler),{},{ballsBowled:0,oversBowled:e.bowler.oversBowled+1}):Object(w.a)({},t)})),bowledPlayers2:2===e.batting?e.bowledPlayers2:e.bowledPlayers2.map((function(t){return t.key===e.bowler.key?Object(w.a)(Object(w.a)({},e.bowler),{},{ballsBowled:0,oversBowled:e.bowler.oversBowled+1}):Object(w.a)({},t)}))});case"UNDO":var c=Object(w.a)({},e.previousState);return c.overs?Object(w.a)(Object(w.a)({},e.previousState),{},{previousState:{}}):Object(w.a)({},e);case"SET_EXTRAS":return Object(w.a)(Object(w.a)({},e),{},{previousState:Object(w.a)(Object(w.a)({},e),{},{previousState:{}}),totalScore:e.totalScore+1,extras:e.extras+1,isNoBall:t.extras});case"SET_WICKET":return Object(w.a)(Object(w.a)({},e),{},{wickets:e.wickets+1,previousState:Object(w.a)(Object(w.a)({},e),{},{previousState:{}}),bowler:Object(w.a)(Object(w.a)({},e.bowler),{},{wickets:e.bowler.wickets+1,ballsBowled:e.bowler.ballsBowled+1}),currentBall:e.currentBall+1,battedPlayers1:1===e.batting?e.battedPlayers1.concat(1===e.strike?Object(w.a)(Object(w.a)({},e.batsman1),{},{out:!0,ballsFaced:e.batsman1.ballsFaced+1}):Object(w.a)(Object(w.a)({},e.batsman2),{},{out:!0,ballsFaced:e.batsman1.ballsFaced+1})):e.battedPlayers1,battedPlayers2:2===e.batting?e.battedPlayers2.concat(1===e.strike?Object(w.a)(Object(w.a)({},e.batsman1),{},{out:!0,ballsFaced:e.batsman1.ballsFaced+1}):Object(w.a)(Object(w.a)({},e.batsman2),{},{out:!0,ballsFaced:e.batsman1.ballsFaced+1})):e.battedPlayers2,batsman1:1===e.strike?t.newBatsman:e.batsman1,batsman2:2===e.strike?t.newBatsman:e.batsman2});case"SET_INNINGS":return Object(w.a)(Object(w.a)({},e),{},{wickets:0,target:e.totalScore+1,totalScore:0,extras:0,previousState:Object(w.a)(Object(w.a)({},e),{},{previousState:{}}),innings:t.k,batting:1===e.batting?2:1,strike:0,batsman1:{},batsman2:{},bowler:{},currentOver:0,currentBall:0,bowledPlayers1:1===e.batting?e.bowledPlayers1:e.bowledPlayers1.map((function(t){return t.key===e.bowler.key?Object(w.a)({},e.bowler):Object(w.a)({},t)})),bowledPlayers2:2===e.batting?e.bowledPlayers2:e.bowledPlayers2.map((function(t){return t.key===e.bowler.key?Object(w.a)({},e.bowler):Object(w.a)({},t)})),battedPlayers1:1===e.batting?e.battedPlayers1.concat(Object(w.a)({},e.batsman1)).concat(Object(w.a)({},e.batsman2)).filter((function(e){return void 0!==e.key})):e.battedPlayers1,battedPlayers2:2===e.batting?e.battedPlayers2.concat(Object(w.a)({},e.batsman1)).concat(Object(w.a)({},e.batsman2)).filter((function(e){return void 0!==e.key})):e.battedPlayers2});default:return Object(w.a)({},e)}},ne=Object(J.combineReducers)({scorecard:ce}),re=[Q.a],se={key:"root",storage:z.a},le=$()(se,ne),ie=Object(J.createStore)(le,J.applyMiddleware.apply(void 0,re)),oe=te()(ie),be=a(77),je=a(158);r.a.render(Object(O.jsx)(u.a,{store:ie,children:Object(O.jsx)(be.a,{loading:Object(O.jsx)(je.a,{}),persistor:oe,children:Object(O.jsx)(K,{})})}),document.getElementById("root")),V()},92:function(e,t,a){},93:function(e,t,a){}},[[109,1,2]]]);
//# sourceMappingURL=main.fb2efdbd.chunk.js.map