(this.webpackJsonpwhereistheiss=this.webpackJsonpwhereistheiss||[]).push([[0],{12:function(t,e,n){},13:function(t,e){},14:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var i=n(1),s=n.n(i),o=n(3),c=n.n(o),a=(n(12),n(4)),r=n(5),u=n(7),l=n(6),h=(n(13),n(14),n(0)),d=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var i;return Object(a.a)(this,n),(i=e.call(this,t)).state={date:new Date,lat:0,lon:0},i}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timer=setInterval((function(){fetch("http://api.open-notify.org/iss-now.json").then((function(t){return t.json()})).then((function(e){t.setState({lat:e.iss_position.latitude}),t.setState({lon:e.iss_position.longitude})}))}),1e3)}},{key:"componentWillMount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var t=this.state,e=t.lat,n=t.lon;return Object(h.jsxs)("div",{className:"tc",children:[Object(h.jsx)("h1",{children:"Where is the ISS Now?"}),Object(h.jsxs)("p",{children:["latitude: ",e]}),Object(h.jsxs)("p",{children:["longitude: ",n]})]})}}]),n}(s.a.Component),j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,o=e.getLCP,c=e.getTTFB;n(t),i(t),s(t),o(t),c(t)}))};n(16);c.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(d,{})}),document.getElementById("root")),j()}},[[17,1,2]]]);
//# sourceMappingURL=main.4d9d1b7d.chunk.js.map