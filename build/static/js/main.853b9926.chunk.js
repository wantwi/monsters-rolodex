(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(5),s=n.n(a),i=(n(15),n(3)),o=n.n(i),h=n(6),u=n(4),l=n(7),j=n(8),d=n(10),p=n(9),m=(n(17),n(18),n(19),n(0));var b=function(e){return Object(m.jsxs)("div",{className:"card-container",children:[Object(m.jsx)("img",{src:"https://robohash.org/".concat(e.item.id,"?set=set2"),alt:"pic"}),Object(m.jsx)("h4",{children:e.item.name}),Object(m.jsx)("p",{children:e.item.email})]})};var f=function(e){return Object(m.jsx)("div",{className:"card-list",children:e.items.map((function(e,t){return Object(m.jsx)(b,{item:e},t)}))})};n(21);var O=function(e){var t=e.placeholder,n=e.handleChange;return Object(m.jsx)("div",{children:Object(m.jsx)("input",{className:"search",type:"text",onChange:function(e){return n(e.target.value)},placeholder:t})})},v=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState(Object(u.a)(Object(u.a)({},e.state),{},{searchItem:t}))},e.state={items:[],searchItem:""},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return e.next=5,e.sent.json();case 5:t=e.sent,this.setState({items:t}),console.log({request:t}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error({error:e.t0});case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.items,n=e.searchItem,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLocaleLowerCase())}));return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Monsters Rolodex"}),Object(m.jsx)(O,{handleChange:this.handleChange,placeholder:"Enter searh here..."}),c.length>0?Object(m.jsx)(f,{items:c}):Object(m.jsx)("h5",{children:"Not found"})]})}}]),n}(c.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root")),x()}],[[22,1,2]]]);
//# sourceMappingURL=main.853b9926.chunk.js.map