(this["webpackJsonpreact-redux-practice"]=this["webpackJsonpreact-redux-practice"]||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(11),r=a.n(n),s=(a(104),a(17)),l=(a(105),a(82)),i=a.n(l),o=a(83),b=a.n(o),j=a(29),d=a(15),u=a(180),O=a(156),h=a(12),m=a(1);var x=Object(h.b)(null,(function(e){return{setTeamN1:function(t){e({type:"SET_TEAM1",team1:t})},setTeamN2:function(t){e({type:"SET_TEAM2",team2:t})}}}))((function(e){e.setOver;var t=e.setTeamN1,a=e.setTeamN2,n=Object(c.useState)(""),r=Object(s.a)(n,2),l=r[0],i=r[1],o=Object(c.useState)(""),b=Object(s.a)(o,2),j=b[0],h=b[1],x=Object(d.f)();return Object(m.jsx)("div",{className:"form",children:Object(m.jsxs)("fieldset",{className:"field",children:[Object(m.jsx)("legend",{children:"enter team names"}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(l),a(j),x.push("/entry")},children:[Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)(u.a,{variant:"outlined",color:"primary",label:"Team1",value:l,onChange:function(e){i(e.target.value)},required:!0})}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)(u.a,{variant:"outlined",color:"primary",label:"Team2",value:j,onChange:function(e){h(e.target.value)},required:!0})}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)(O.a,{type:"submit",color:"primary",variant:"contained",children:"Next"})})]})]})})})),y=a(22),v=a(5);var f=Object(h.b)(null,(function(e){return{setPlayers1:function(t){e({type:"SET_PLAYERS_1",players:t})},setPlayers2:function(t){e({type:"SET_PLAYERS_2",players:t})}}}))((function(e){var t=e.setPlayers1,a=e.setPlayers2,n=Object(h.d)((function(e){return e.scorecard})),r=n.team1,l=n.team2,i=n.team1Players,o=n.team2Players,b=Object(c.useState)(0),j=Object(s.a)(b,2),x=j[0],f=j[1],k=[{key:1,value:""},{key:2,value:""},{key:3,value:""},{key:4,value:""},{key:5,value:""},{key:6,value:""},{key:7,value:""},{key:8,value:""},{key:9,value:""},{key:10,value:""},{key:11,value:""}],p=Object(c.useState)(k),g=Object(s.a)(p,2),w=g[0],S=g[1];Object(c.useEffect)((function(){if(0===x){var e=w.map((function(e){var t={key:e.key,value:void 0!==i.find((function(t){return t.key===e.key}))?i.find((function(t){return t.key===e.key})).value:""};return Object(v.a)({},t)}));S(e)}else if(1===x){var t=w.map((function(e){var t={key:e.key,value:void 0!==o.find((function(t){return t.key===e.key}))?o.find((function(t){return t.key===e.key})).value:""};return Object(v.a)({},t)}));S(t)}}),[x]);var P=Object(d.f)();return Object(m.jsxs)("div",{children:[Object(m.jsxs)("h1",{children:[0===x?r:l," Players"]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)(O.a,{color:"primary",variant:"contained",onClick:function(){0===x?P.push("/"):(f(0),a(k))},children:"Previous"})," ",Object(m.jsx)(O.a,{color:"primary",variant:"contained",onClick:function(){var e=w.filter((function(e){return""!==e.value}));e.length<2||1===x&&e.length!==i.length?alert("pick valid number of players"):0===x?(f(1),S(k),t(w)):(a(w),P.push("/toss"))},children:"Next"})]}),w.map((function(e,t){return Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)(u.a,{variant:"outlined",color:"primary",label:"Player name ".concat(e.key),value:e.value,onChange:function(e){!function(e,t){var a=Object(y.a)(w),c=[].concat(Object(y.a)(a.slice(0,t)),[{key:t+1,value:e.target.value}],Object(y.a)(a.slice(t+1)));S(c)}(e,t)},required:!0})},e.key)}))]})}));var k=Object(h.b)(null,(function(e){return{setOver:function(t){e({type:"SET_OVERS",overs:t})},setBatting:function(t){e({type:"BATTING",k:t})}}}))((function(e){var t=e.setBatting,a=e.setOver,n=Object(d.f)(),r=Object(h.d)((function(e){return e.scorecard})),l=r.team1,i=r.team2,o=r.batting,b=Object(c.useState)(1),j=Object(s.a)(b,2),x=j[0],y=j[1],v=function(e){t(e),a(x),n.push("/score-card")};return Object(c.useEffect)((function(){0!==o&&n.push("/score-card")}),[]),Object(m.jsxs)("div",{children:[Object(m.jsxs)("h1",{children:[l," vs ",i]}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)(u.a,{variant:"outlined",type:"number",color:"primary",label:"Overs",value:x,onChange:function(e){y(""!==e.target.value&&e.target.value<1?1:e.target.value)},required:!0})}),Object(m.jsx)("b",{children:"Team opt to bat --\x3e "}),Object(m.jsx)(O.a,{color:"primary",variant:"contained",onClick:function(){return v(1)},children:l})," ",Object(m.jsx)(O.a,{color:"primary",variant:"contained",onClick:function(){return v(2)},children:i})]})})),p=a(163),g=a(169),w=a(170),S=a(171);var P=function(){var e=Object(h.d)((function(e){return e.scorecard})),t=e.batting,a=e.bowledPlayers1,c=e.bowledPlayers2;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Bowlers"}),1===t?c.map((function(e){return Object(m.jsxs)("div",{children:[e.value," ",e.wickets,"-",e.runs,"(",e.oversBowled,".",e.ballsBowled,")"]},e.key)})):a.map((function(e){return Object(m.jsxs)("div",{children:[e.value," ",e.wickets,"-",e.runs,"(",e.oversBowled,".",e.ballsBowled,")"]},e.key)}))]})},B=a(6),N=a(157),T=a(158),E=a(159),C=a(90),_=a(160),F=a(161),R=a(162);function A(){var e=Object(h.d)((function(e){return e.scorecard})),t=e.batting,a=e.battedPlayers1,c=e.battedPlayers2,n=e.bowledPlayers1,r=e.bowledPlayers2,s=e.team1Players,l=e.team2Players,i=e.batsman1,o=e.batsman2,b=e.bowler,j=e.totalScore,d=e.wickets,u=e.team1,O=e.team2,x=e.extras,y=e.currentOver,f=e.currentBall,k=function(e,t){return e.map((function(e){var a=t.find((function(t){return t.key===e.key}));return i.key===e.key?Object(v.a)({},i):o.key===e.key?Object(v.a)({},o):void 0!==a?Object(v.a)({},a):""})).filter((function(e){return""!==e}))},p=function(e,t){return e.map((function(e){var a=t.find((function(t){return t.key===e.key}));return b.key===e.key?Object(v.a)({},b):void 0!==a?Object(v.a)({},a):""})).filter((function(e){return""!==e}))};return Object(m.jsxs)("div",{className:"summary",style:{textAlign:"center"},children:[Object(m.jsx)("u",{children:Object(m.jsx)("h1",{children:"1st innings"})}),Object(m.jsxs)("div",{className:"score",children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("span",{className:"total-score",children:[j," - ",d]})," ",Object(m.jsxs)("span",{className:"balls",children:[y+f===6?1:0,".",6===f?0:f]})]}),Object(m.jsxs)("div",{children:[u," vs ",O]}),Object(m.jsxs)("div",{children:["Extras :",x]})]}),Object(m.jsx)("h3",{children:"Batsmen"}),1===t?Object(m.jsx)(U,{list:k(s,a)}):Object(m.jsx)(U,{list:k(l,c)}),Object(m.jsx)("h3",{children:"Bowlers"}),1===t?Object(m.jsx)(W,{list:p(l,r)}):Object(m.jsx)(W,{list:p(s,n)})]})}var I=Object(B.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(N.a),M=Object(B.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(T.a);function U(e){var t=e.list;return Object(m.jsx)(E.a,{component:C.a,children:Object(m.jsxs)(_.a,{children:[Object(m.jsx)(F.a,{children:Object(m.jsxs)(T.a,{children:[Object(m.jsx)(I,{children:"Player name"}),Object(m.jsx)(I,{children:"Runs"}),Object(m.jsx)(I,{children:"Strike rate"})]})}),Object(m.jsx)(R.a,{children:t.map((function(e){return Object(m.jsxs)(M,{children:[Object(m.jsxs)(I,{children:[e.value,Object(m.jsx)("small",{style:{fontSize:"7px",color:"red"},children:e.out?" OUT":" NOT OUT"})]}),Object(m.jsxs)(I,{children:[e.runs,"(",e.ballsFaced,")"]}),Object(m.jsx)(I,{children:(e.runs/e.ballsFaced*100).toFixed(2)})]},e.key)}))})]})})}function W(e){var t=e.list;return Object(m.jsx)(E.a,{component:C.a,children:Object(m.jsxs)(_.a,{children:[Object(m.jsx)(F.a,{children:Object(m.jsxs)(T.a,{children:[Object(m.jsx)(I,{children:"Player name"}),Object(m.jsx)(I,{children:"Wickets"}),Object(m.jsx)(I,{children:"Runs"}),Object(m.jsx)(I,{children:"Overs"}),Object(m.jsx)(I,{children:"Economy"})]})}),Object(m.jsx)(R.a,{children:t.map((function(e){return Object(m.jsxs)(M,{children:[Object(m.jsx)(I,{children:e.value}),Object(m.jsx)(I,{children:e.wickets}),Object(m.jsx)(I,{children:e.runs}),Object(m.jsxs)(I,{children:[e.oversBowled+(6===e.ballsBowled?1:0),".",6===e.ballsBowled?0:e.ballsBowled]}),Object(m.jsx)(I,{children:(t=e.runs,a=e.oversBowled,c=e.ballsBowled,t/(a+c/6)).toFixed(2)})]},e.key);var t,a,c}))})]})})}var D=a(164),L=a(181);var q=function(e){var t=e.open,a=e.handleClose,n=e.activity,r=e.setBatsman,l=e.setBatting,i=e.setBowler,o=Object(c.useState)([]),b=Object(s.a)(o,2),j=b[0],d=b[1],u=Object(c.useState)({}),h=Object(s.a)(u,2),x=h[0],y=h[1],v=function(e){d(e)},f=function(e){y(e)};return Object(m.jsx)("div",{children:Object(m.jsx)(p.a,{open:t,children:Object(m.jsxs)("div",{className:"summary",children:[Object(m.jsx)("div",{style:{float:"right"},children:Object(m.jsx)(O.a,{variant:"contained",color:"primary",onClick:function(){try{"batting"===n&&2===j.length&&void 0!==x.key?(l(j[0],j[1],x),d([]),a()):"batsman"===n&&1===j.length?(r(j[0]),d([]),a()):"bowling"===n&&void 0!==x.key?(i(x),y({}),a()):alert("Pick valid requirements")}catch(e){alert("Pick valid requirements")}},children:"Next"})}),"batting"===n&&Object(m.jsxs)("div",{children:[Object(m.jsx)(G,{max:2,handle:v}),Object(m.jsx)(V,{handle:f})]}),"batsman"===n&&Object(m.jsx)("div",{children:Object(m.jsx)(G,{max:1,handle:v})}),"bowling"===n&&Object(m.jsx)("div",{children:Object(m.jsx)(V,{handle:f})})]})})})};function G(e){var t=e.max,a=e.handle,n=Object(c.useState)([]),r=Object(s.a)(n,2),l=r[0],i=r[1],o=function(e,t){var c=Object(y.a)(l);e.target.checked?c.push(t):c=c.filter((function(e){return e.key!==t.key})),i(c),a(c)},b=Object(h.d)((function(e){return e.scorecard})),j=b.team1,d=b.team2,u=b.batting,O=b.team1Players,x=b.team2Players,v=b.battedPlayers1,f=b.battedPlayers2,k=b.batsman1,p=b.batsman2,g=function(e){return 1===u?k.key===e||p.key===e||void 0!==v.find((function(t){return t.key===e}))||l.length===t&&!l.find((function(t){return t.key===e})):k.key===e||p.key===e||void 0!==f.find((function(t){return t.key===e}))||l.length===t&&!l.find((function(t){return t.key===e}))};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("h1",{children:["Pick ",1===u?j:d," batsman"]}),1===u?O.map((function(e){return Object(m.jsx)("div",{children:Object(m.jsx)(D.a,{label:e.value,disabled:g(e.key),control:Object(m.jsx)(L.a,{onChange:function(t){return o(t,e)}})})},e.key)})):x.map((function(e){return Object(m.jsx)("div",{children:Object(m.jsx)(D.a,{label:e.value,disabled:g(e.key),control:Object(m.jsx)(L.a,{onChange:function(t){return o(t,e)}})})},e.key)}))]})}function V(e){var t=e.handle,a=Object(h.d)((function(e){return e.scorecard})),n=a.team1,r=a.team2,l=a.batting,i=a.team1Players,o=a.team2Players,b=Object(h.d)((function(e){return e.scorecard})),j=Object(c.useState)({}),d=Object(s.a)(j,2),u=d[0],O=d[1],x=function(e,a){e.target.checked?(O(a),t(a)):(O({}),t({}))},y=function(e){return b.bowler.key===e||void 0!==u.key&&u.key!==e};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("h1",{children:["Pick ",2===l?n:r," bowler"]}),2===l?i.map((function(e){return Object(m.jsx)("div",{children:Object(m.jsx)(D.a,{label:e.value,disabled:y(e.key),control:Object(m.jsx)(L.a,{onChange:function(t){return x(t,e)}})})},e.key)})):o.map((function(e){return Object(m.jsx)("div",{children:Object(m.jsx)(D.a,{label:e.value,disabled:y(e.key),control:Object(m.jsx)(L.a,{onChange:function(t){return x(t,e)}})})},e.key)}))]})}var H=a(88),Y=a(182),K=a(166),z=a(167),J=a(62),X=a(168),Q=a(63),Z=["over"],$=Object(K.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},orange:{color:e.palette.getContrastText(z.a[500]),backgroundColor:z.a[500]},red:{color:e.palette.getContrastText(J.a[500]),backgroundColor:J.a[500]},purple:{color:e.palette.getContrastText(X.a[500]),backgroundColor:X.a[500]},green:{color:e.palette.getContrastText(Q.a[500]),backgroundColor:Q.a[500]}}}));var ee=function(e){var t=e.over,a=(Object(H.a)(e,Z),$());return Object(m.jsx)("div",{className:a.root,children:t.map((function(e,t){return 0===e?Object(m.jsx)(Y.a,{children:e},t):function(e){return"OUT"===e}(e)?Object(m.jsx)(Y.a,{className:a.red,children:e},t):function(e){var t=""+e;return t.includes("WD")||t.includes("NB")}(e)?Object(m.jsx)(Y.a,{className:a.orange,children:e},t):function(e){return 4===e||6===e}(e)?Object(m.jsx)(Y.a,{className:a.green,children:e},t):Object(m.jsx)(Y.a,{className:a.purple,children:e},t)}))})};var te=Object(h.b)(null,(function(e){return{setBatsman1:function(t){e({type:"SET_BATSMAN_1",batsman:t})},setBatsman2:function(t){e({type:"SET_BATSMAN_2",batsman:t})},setSelectedBowler:function(t){e({type:"SET_BOWLER",bowler:t})},setStrike:function(t){e({type:"SET_STRIKE",k:t})},setScore:function(t){e({type:"SET_SCORE",score:t})},setOver:function(){e({type:"SET_OVER"})},undo:function(){e({type:"UNDO"})},setExtras:function(t){e({type:"SET_EXTRAS",extras:t})},setWicket:function(t){e({type:"SET_WICKET",newBatsman:t})},setInnings:function(t){e({type:"SET_INNINGS",k:t})}}}))((function(e){var t=e.setScore,a=e.setBatsman1,n=e.setBatsman2,r=e.setSelectedBowler,l=e.setStrike,i=e.setOver,o=e.undo,b=e.setExtras,j=e.setWicket,u=e.setInnings,x=Object(h.d)((function(e){return e.scorecard})),v=x.team1,f=x.team2,k=x.innings,B=x.target,N=x.overs,T=x.bowler,E=x.strike,C=x.batsman1,_=x.batsman2,F=x.totalScore,R=x.currentOver,I=x.currentBall,M=x.isNoBall,U=x.extras,W=x.team1Players,D=x.previousState,L=x.wickets,G=Object(d.f)(),V=Object(c.useState)(!1),H=Object(s.a)(V,2),Y=H[0],K=H[1],z=Object(c.useState)(!1),J=Object(s.a)(z,2),X=J[0],Q=J[1],Z=Object(c.useState)(""),$=Object(s.a)(Z,2),te=$[0],ae=$[1],ce=Object(c.useState)([]),ne=Object(s.a)(ce,2),re=ne[0],se=ne[1],le=function(e){var t=Object(y.a)(re),a=t.pop();se("NB"===a?[].concat(Object(y.a)(t),["NB+"+e]):function(t){return[].concat(Object(y.a)(t),[e])})},ie=Object(c.useCallback)((function(){0===k?Q(!0):1===k&&(u(2),G.push("/summary")),se([])}),[k,u,G]);return Object(c.useEffect)((function(){6===I&&R===N-1||1===k&&F>=B||L===W.length-1?(ie(),se([])):6===I&&(L<W.length-1&&(ae("bowling"),K(!0),i()),se([]))}),[I,R,N,ie,i,L,W,k,F,B]),Object(c.useEffect)((function(){2===k&&G.push("/summary"),0===E&&(ae("batting"),K(!0))}),[E]),Object(m.jsxs)("div",{children:[Object(m.jsxs)("h1",{children:[0===k?"1st":"2nd"," INNINGS"]}),M?Object(m.jsx)("h2",{style:{color:"red"},children:"it's a no ball, select the runs scored by batsman in no ball"}):Object(m.jsx)(m.Fragment,{}),D.isNoBall?Object(m.jsx)("h2",{style:{color:"red"},children:"it's a Free hit"}):Object(m.jsx)(m.Fragment,{}),1===k?Object(m.jsxs)("h2",{children:["Target :",B]}):Object(m.jsx)(m.Fragment,{}),1===k?Object(m.jsx)("h2",{style:{color:"green"},children:B-F===1?"Its a tie":""}):Object(m.jsx)(m.Fragment,{}),1===k?Object(m.jsxs)("h2",{style:{color:"red"},children:[B-F," runs needed from"," ",6*N-(6*R+I)," balls"]}):Object(m.jsx)(m.Fragment,{}),Object(m.jsxs)("h5",{children:["Total overs: ",N]}),Object(m.jsx)("div",{className:"box",children:Object(m.jsxs)("div",{className:"score-display",children:[Object(m.jsx)("div",{className:"batsman-group",children:Object(m.jsxs)("div",{className:"batsman",children:[Object(m.jsxs)("div",{className:"batsman1",style:{display:"grid",gridTemplateColumns:"auto auto"},children:[Object(m.jsxs)("div",{className:"batsman-runs",children:[Object(m.jsx)(g.a,{style:{visibility:"".concat(1===E?"visible":"hidden")}}),C.value]}),Object(m.jsxs)("div",{style:{textAlign:"right"},children:[Object(m.jsx)("span",{className:"batsman-runs",children:C.runs}),Object(m.jsx)("span",{className:"balls",children:C.ballsFaced})]})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:"batsman1",style:{display:"grid",gridTemplateColumns:"auto auto"},children:[Object(m.jsxs)("div",{className:"batsman-runs",children:[Object(m.jsx)(g.a,{style:{visibility:"".concat(2===E?"visible":"hidden")}}),_.value]}),Object(m.jsxs)("div",{style:{textAlign:"right"},children:[Object(m.jsx)("span",{className:"batsman-runs",children:_.runs}),Object(m.jsx)("span",{className:"balls",children:_.ballsFaced})]})]})]})}),Object(m.jsxs)("div",{className:"score",children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("span",{className:"total-score",children:[F," - ",L]})," ",Object(m.jsxs)("span",{className:"balls",children:[R,".",I]})]}),Object(m.jsxs)("div",{children:[v," vs ",f]}),Object(m.jsxs)("div",{children:["Extras :",U]}),Object(m.jsxs)("div",{children:["Cur.Run Rate:",0===F?"0.00":(F/(R+I/6)).toFixed(2)]})]}),Object(m.jsxs)("div",{className:"bowler",children:[Object(m.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"auto auto"},children:[Object(m.jsx)("div",{className:"batsman-runs",children:T.value}),Object(m.jsxs)("div",{style:{textAlign:"right"},children:[Object(m.jsxs)("span",{className:"batsman-runs",children:[T.wickets,"-",T.runs]}),Object(m.jsxs)("span",{className:"balls",children:[T.oversBowled,".",T.ballsBowled]})]})]}),Object(m.jsx)("div",{className:"this-over",children:Object(m.jsx)(ee,{over:re})})]})]})}),Object(m.jsx)("div",{children:1===k&&"Req.Run rate:".concat(((B-F)/(N-R-1+(6-I)/6)).toFixed(2))}),Object(m.jsx)(q,{open:Y,setBatting:function(e,t,c){var s={key:e.key,value:e.value,out:!1,ballsFaced:0,runs:0},i={key:t.key,value:t.value,out:!1,ballsFaced:0,runs:0},o={key:c.key,value:c.value,bowled:!1,oversBowled:0,ballsBowled:0,runs:0,wickets:0};a(s),n(i),r(o),l(1)},setBatsman:function(e){var t={key:e.key,value:e.value,out:!1,ballsFaced:0,runs:0};j(t)},setBowler:function(e){var t={key:e.key,value:e.value,bowled:!1,oversBowled:0,ballsBowled:0,runs:0,wickets:0};r(t)},handleClose:function(){K(!1)},activity:te}),Object(m.jsxs)("div",{children:[Object(m.jsx)(O.a,{color:"primary",variant:"contained",onClick:function(){t(0),le(0)},children:"0"}),Object(m.jsx)(O.a,{color:"primary",variant:"contained",onClick:function(){t(1),le(1)},children:"1"}),Object(m.jsx)(O.a,{color:"primary",variant:"contained",onClick:function(){t(2),le(2)},children:"2"}),Object(m.jsx)(O.a,{color:"primary",variant:"contained",onClick:function(){t(3),le(3)},children:"3"}),Object(m.jsx)(O.a,{color:"primary",variant:"contained",onClick:function(){t(4),le(4)},children:"4"}),Object(m.jsx)(O.a,{color:"primary",variant:"contained",onClick:function(){t(6),le(6)},children:"6"}),Object(m.jsx)(O.a,{color:"primary",variant:"contained",onClick:function(){return l(1===E?2:1)},children:Object(m.jsx)(w.a,{})}),Object(m.jsx)(O.a,{color:"primary",variant:"contained",onClick:function(){o(),function(){var e=Object(y.a)(re);e.pop(),se(e)}()},children:Object(m.jsx)(S.a,{})}),Object(m.jsx)(O.a,{color:"primary",variant:"contained",onClick:function(){b(!1),le("WD")},children:"WD"}),Object(m.jsx)(O.a,{color:"primary",variant:"contained",onClick:function(){b(!0),le("NB")},children:"NB"}),Object(m.jsx)(O.a,{color:"primary",variant:"contained",onClick:function(){L===W.length-2?j({}):(ae("batsman"),K(!0)),le("OUT")},children:"OUT"}),Object(m.jsx)(O.a,{color:"primary",variant:"contained",onClick:ie,children:"END"})]}),Object(m.jsx)(P,{}),Object(m.jsxs)(p.a,{open:X,onClose:function(){u(1),Q(!1)},children:[Object(m.jsx)(A,{}),Object(m.jsx)(O.a,{color:"secondary",variant:"contained",onClick:function(){u(1),Q(!1)},children:"Close"})]})]})})),ae=a(172),ce=a(173),ne=a(165),re=a(53),se=a(183),le=a(174),ie=a(155),oe=a(175),be=a(176),je=a(177);var de=function(){var e=Object(h.c)(),t=Object(d.f)(),a=Object(h.d)((function(e){return e.scorecard.previousState})),c=a.batting,n=a.target,r=a.totalScore,s=a.wickets,l=Object(h.d)((function(e){return e.scorecard})),i=l.team1,o=l.team2,b=l.team1Players,j=l.team2Players,u=l.battedPlayers1,O=l.bowledPlayers1,x=l.battedPlayers2,y=l.bowledPlayers2;return Object(m.jsxs)("div",{className:"summary",children:[Object(m.jsx)("h1",{children:"Match Over"}),n<=r?Object(m.jsxs)("h2",{style:{color:"red"},children:[1===c?i:o," won by"," ",1===c?b.length-s-1:j.length-s-1," ","wickets"]}):n-1>r?Object(m.jsxs)("h2",{style:{color:"red"},children:[1===c?o:i," won by ",n-r," runs"]}):Object(m.jsxs)("h2",{style:{color:"green"},children:["Scores level.It's a tie."," ",Object(m.jsx)("small",{className:"link",onClick:function(){e({type:"SUPER_OVER"}),t.push("/score-card")},children:"super-over?"})]}),Object(m.jsx)("div",{className:"box",children:Object(m.jsxs)("div",{className:"grid-2",children:[Object(m.jsxs)("div",{children:["1st innings",Object(m.jsx)("br",{}),1===c?o:i,Object(m.jsx)("br",{}),"score:",n-1,"-",1===c?x.filter((function(e){return e.out})).length:u.filter((function(e){return e.out})).length,Object(m.jsx)("br",{})]}),Object(m.jsxs)("div",{children:["2nd innings",Object(m.jsx)("br",{}),2===c?o:i,Object(m.jsx)("br",{}),"score:",r,"-",s,Object(m.jsx)("br",{})]})]})}),Object(m.jsx)("h1",{children:"1st innings"}),1===c?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("h2",{children:[o," Batsmen"]}),Object(m.jsx)(U,{list:x.sort((function(e,t){return e.key-t.key}))}),Object(m.jsxs)("h2",{children:[i," Bowlers"]}),Object(m.jsx)(W,{list:O})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("h2",{children:[i," Batsmen"]}),Object(m.jsx)(U,{list:u.sort((function(e,t){return e.key-t.key}))}),Object(m.jsxs)("h2",{children:[o," Bowlers"]}),Object(m.jsx)(W,{list:y})]}),Object(m.jsx)("h1",{children:"2nd innings"}),2===c?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("h2",{children:[o," Batsmen"]}),Object(m.jsx)(U,{list:x.sort((function(e,t){return e.key-t.key}))}),Object(m.jsxs)("h2",{children:[i," Bowlers"]}),Object(m.jsx)(W,{list:O})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("h2",{children:[i," Batsmen"]}),Object(m.jsx)(U,{list:u.sort((function(e,t){return e.key-t.key}))}),Object(m.jsxs)("h2",{children:[o," Bowlers"]}),Object(m.jsx)(W,{list:y})]})]})},ue=a(178),Oe=Object(K.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},list:{width:250},fullList:{width:"auto"}}}));var he=function(){var e=Object(h.d)((function(e){return e.scorecard})).team2Players,t=Object(h.c)(),a=Oe(),n=Object(c.useState)(!1),r=Object(s.a)(n,2),l=r[0],o=r[1],u=Object(c.useRef)(null);return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(j.a,{children:[Object(m.jsx)(ae.a,{position:"static",children:Object(m.jsxs)(ce.a,{children:[Object(m.jsx)(ne.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu",onClick:function(){return o(!0)},children:Object(m.jsx)(i.a,{})}),Object(m.jsx)(re.a,{variant:"h6",className:a.title,children:"Scorecard"}),Object(m.jsx)(O.a,{onClick:function(){t({type:"NEW_MATCH"}),localStorage.clear()},color:"inherit",children:Object(m.jsx)(j.b,{className:"non-white-link",to:"/",children:"New match"})})]})}),Object(m.jsxs)(se.a,{anchor:"left",open:l,onClose:function(){return o(!1)},children:[Object(m.jsx)("h3",{onClick:function(){return o(!1)},style:{color:"#3f51b5",cursor:"pointer",textAlign:"center"},children:"Magical Drawer"}),Object(m.jsx)(le.a,{}),Object(m.jsxs)(ie.a,{className:a.list,children:[Object(m.jsxs)(oe.a,{button:!0,onClick:function(){0===e.length?alert("Rematch Unavailable"):(t({type:"RE_MATCH"}),u.current.click()),o(!1)},children:[Object(m.jsx)(be.a,{children:Object(m.jsx)(b.a,{})}),Object(m.jsx)(je.a,{primary:"Re-match"}),Object(m.jsx)(j.b,{ref:u,to:"/toss"})]}),Object(m.jsxs)(oe.a,{disabled:0===e.length,button:!0,onClick:function(){return o(!1)},children:[Object(m.jsx)(be.a,{children:Object(m.jsx)(ue.a,{})}),Object(m.jsx)(je.a,{primary:Object(m.jsx)(j.b,{className:"non-link",to:"/entry",children:"Add/Update players"})})]})]}),Object(m.jsx)(le.a,{})]}),Object(m.jsxs)(d.c,{children:[Object(m.jsx)(d.a,{exact:!0,path:"/",children:Object(m.jsx)(x,{})}),Object(m.jsx)(d.a,{exact:!0,path:"/entry",children:Object(m.jsx)(f,{})}),Object(m.jsx)(d.a,{exact:!0,path:"/toss",children:Object(m.jsx)(k,{})}),Object(m.jsx)(d.a,{exact:!0,path:"/score-card",children:Object(m.jsx)(te,{})}),Object(m.jsx)(d.a,{exact:!0,path:"/summary",children:Object(m.jsx)(de,{})})]})]})})},me=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,184)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))},xe=a(61),ye=a(84),ve=a.n(ye),fe=a(85),ke=a.n(fe),pe=a(86),ge=a.n(pe),we={overs:0,team1:"",team2:"",team1Players:[],team2Players:[],batting:0,batsman1:{},batsman2:{},bowler:{},currentOver:0,currentBall:0,thisOver:[],totalScore:0,strike:0,extras:0,target:-1,battedPlayers1:[],battedPlayers2:[],bowledPlayers1:[],bowledPlayers2:[],previousState:{},isNoBall:!1,innings:0,wickets:0};var Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"persist/REHYDRATE":return t.payload?Object(v.a)({},t.payload.scorecard):Object(v.a)({},we);case"SET_OVERS":return Object(v.a)(Object(v.a)({},e),{},{overs:t.overs});case"SET_TEAM1":return Object(v.a)(Object(v.a)({},we),{},{team1:t.team1.toUpperCase()});case"SET_TEAM2":return Object(v.a)(Object(v.a)({},e),{},{team2:t.team2.toUpperCase()});case"SET_PLAYERS_1":return Object(v.a)(Object(v.a)({},e),{},{team1Players:t.players.filter((function(e){return""!==e.value}))});case"SET_PLAYERS_2":return Object(v.a)(Object(v.a)({},e),{},{team2Players:t.players.filter((function(e){return""!==e.value}))});case"SET_BATSMAN_1":return Object(v.a)(Object(v.a)({},e),{},{batsman1:t.batsman});case"SET_BATSMAN_2":return Object(v.a)(Object(v.a)({},e),{},{batsman2:t.batsman});case"SET_BOWLER":var a=1===e.batting?e.bowledPlayers2.find((function(e){return e.key===t.bowler.key})):e.bowledPlayers1.find((function(e){return e.key===t.bowler.key}));return Object(v.a)(Object(v.a)({},e),{},{bowler:void 0!==a?a:t.bowler,bowledPlayers1:1===e.batting||void 0!==a?e.bowledPlayers1:[].concat(Object(y.a)(e.bowledPlayers1),[t.bowler]),bowledPlayers2:2===e.batting||void 0!==a?e.bowledPlayers2:[].concat(Object(y.a)(e.bowledPlayers2),[t.bowler])});case"BATTING":return Object(v.a)(Object(v.a)({},e),{},{previousState:Object(v.a)(Object(v.a)({},e),{},{previousState:{}}),batting:t.k});case"SET_STRIKE":return Object(v.a)(Object(v.a)({},e),{},{strike:t.k});case"SET_SCORE":return Object(v.a)(Object(v.a)({},e),{},{previousState:Object(v.a)(Object(v.a)({},e),{},{previousState:{}}),strike:1===t.score||3===t.score?1===e.strike?2:1:e.strike,totalScore:e.totalScore+t.score,batsman1:1===e.strike?Object(v.a)(Object(v.a)({},e.batsman1),{},{runs:e.batsman1.runs+t.score,ballsFaced:e.isNoBall?e.batsman1.ballsFaced:e.batsman1.ballsFaced+1}):e.batsman1,batsman2:2===e.strike?Object(v.a)(Object(v.a)({},e.batsman2),{},{runs:e.batsman2.runs+t.score,ballsFaced:e.isNoBall?e.batsman2.ballsFaced:e.batsman2.ballsFaced+1}):e.batsman2,bowler:Object(v.a)(Object(v.a)({},e.bowler),{},{runs:e.bowler.runs+t.score,ballsBowled:e.isNoBall?e.bowler.ballsBowled:e.bowler.ballsBowled+1}),currentBall:e.isNoBall?e.currentBall:e.currentBall+1,isNoBall:!1});case"SET_OVER":return Object(v.a)(Object(v.a)({},e),{},{strike:1===e.strike?2:1,currentOver:e.currentOver+1,currentBall:0,bowledPlayers1:1===e.batting?e.bowledPlayers1:e.bowledPlayers1.map((function(t){return t.key===e.bowler.key?Object(v.a)(Object(v.a)({},e.bowler),{},{ballsBowled:0,oversBowled:e.bowler.oversBowled+1}):Object(v.a)({},t)})),bowledPlayers2:2===e.batting?e.bowledPlayers2:e.bowledPlayers2.map((function(t){return t.key===e.bowler.key?Object(v.a)(Object(v.a)({},e.bowler),{},{ballsBowled:0,oversBowled:e.bowler.oversBowled+1}):Object(v.a)({},t)}))});case"UNDO":var c=Object(v.a)({},e.previousState);return c.overs?Object(v.a)(Object(v.a)({},e.previousState),{},{previousState:{}}):Object(v.a)({},e);case"SET_EXTRAS":return Object(v.a)(Object(v.a)({},e),{},{previousState:Object(v.a)(Object(v.a)({},e),{},{previousState:{}}),totalScore:e.totalScore+1,extras:e.extras+1,isNoBall:t.extras,bowler:Object(v.a)(Object(v.a)({},e.bowler),{},{runs:e.bowler.runs+1})});case"SET_WICKET":return Object(v.a)(Object(v.a)({},e),{},{wickets:e.wickets+1,previousState:Object(v.a)(Object(v.a)({},e),{},{previousState:{}}),bowler:Object(v.a)(Object(v.a)({},e.bowler),{},{wickets:e.bowler.wickets+1,ballsBowled:e.bowler.ballsBowled+1}),currentBall:e.currentBall+1,battedPlayers1:1===e.batting?e.battedPlayers1.concat(1===e.strike?Object(v.a)(Object(v.a)({},e.batsman1),{},{out:!0,ballsFaced:e.batsman1.ballsFaced+1}):Object(v.a)(Object(v.a)({},e.batsman2),{},{out:!0,ballsFaced:e.batsman1.ballsFaced+1})):e.battedPlayers1,battedPlayers2:2===e.batting?e.battedPlayers2.concat(1===e.strike?Object(v.a)(Object(v.a)({},e.batsman1),{},{out:!0,ballsFaced:e.batsman1.ballsFaced+1}):Object(v.a)(Object(v.a)({},e.batsman2),{},{out:!0,ballsFaced:e.batsman1.ballsFaced+1})):e.battedPlayers2,batsman1:1===e.strike?t.newBatsman:e.batsman1,batsman2:2===e.strike?t.newBatsman:e.batsman2});case"SET_INNINGS":return Object(v.a)(Object(v.a)({},e),{},{wickets:0,target:e.totalScore+1,totalScore:0,extras:0,previousState:Object(v.a)(Object(v.a)({},e),{},{previousState:{}}),innings:t.k,batting:1===e.batting?2:1,strike:0,batsman1:{},batsman2:{},bowler:{},currentOver:0,currentBall:0,bowledPlayers1:1===e.batting?e.bowledPlayers1:e.bowledPlayers1.map((function(t){return t.key===e.bowler.key?Object(v.a)({},e.bowler):Object(v.a)({},t)})),bowledPlayers2:2===e.batting?e.bowledPlayers2:e.bowledPlayers2.map((function(t){return t.key===e.bowler.key?Object(v.a)({},e.bowler):Object(v.a)({},t)})),battedPlayers1:1===e.batting?e.battedPlayers1.concat(Object(v.a)({},e.batsman1)).concat(Object(v.a)({},e.batsman2)).filter((function(e){return void 0!==e.key})):e.battedPlayers1,battedPlayers2:2===e.batting?e.battedPlayers2.concat(Object(v.a)({},e.batsman1)).concat(Object(v.a)({},e.batsman2)).filter((function(e){return void 0!==e.key})):e.battedPlayers2});case"NEW_MATCH":return Object(v.a)({},we);case"RE_MATCH":return Object(v.a)(Object(v.a)({},we),{},{team1:e.team1,team2:e.team2,team1Players:e.team1Players,team2Players:e.team2Players});case"SUPER_OVER":return Object(v.a)(Object(v.a)({},we),{},{overs:1,strike:0,batting:1===e.batting?2:1,team1:e.team1,team2:e.team2,team1Players:e.team1Players,team2Players:e.team2Players});default:return Object(v.a)({},e)}},Pe=Object(xe.combineReducers)({scorecard:Se}),Be={key:"root",storage:ve.a},Ne=ke()(Be,Pe),Te=Object(xe.createStore)(Ne),Ee=ge()(Te),Ce=a(87),_e=a(179);r.a.render(Object(m.jsx)(h.a,{store:Te,children:Object(m.jsx)(Ce.a,{loading:Object(m.jsx)(_e.a,{}),persistor:Ee,children:Object(m.jsx)(he,{})})}),document.getElementById("root")),me()}},[[119,1,2]]]);
//# sourceMappingURL=main.280a8dcb.chunk.js.map