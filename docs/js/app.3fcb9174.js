(function(e){function t(t){for(var o,u,c=t[0],s=t[1],i=t[2],l=0,d=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&d.push(r[u][0]),r[u]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},a=[];function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var p=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/market"}},[e._v("Market")]),e._v(" | "),n("router-link",{attrs:{to:"/profile"}},[e._v("Profile")])],1),n("router-view")],1)},a=[],u=(n("034f"),n("2877")),c={},s=Object(u["a"])(c,r,a,!1,null,null,null),i=s.exports,p=(n("7db0"),n("c740"),n("d81d"),n("b680"),n("5530")),l=n("2909"),d=n("2f62"),f=["GOOGLE","APPLE","MICROSOFT","NETFLIX","AMAZON"],y=f;o["a"].use(d["a"]);var m=function(){return{stocks:[{company:y[0],qty:100}],funds:100,market:y.map((function(e){return{company:e,price:(5*Math.random()).toFixed(2)}}))}},v=new d["a"].Store({state:m(),mutations:{buy:function(e,t){var n=t.qty,o=t.company,r=e.market.find((function(e){return e.company==o})).price,a=r*n;if(a>e.funds)throw new Error("You don't have enough funds");e.funds-=a;var u=Object(l["a"])(e.stocks),c=u.findIndex((function(e){return e.company==o}));-1==c?u.push({company:o,qty:n}):e.stocks[c].qty+=n,e.stocks=u},sell:function(e,t){console.log(t);var n=t.qty,o=t.company,r=Object(l["a"])(e.stocks),a=r.find((function(e){return e.company==o}));if(!(a&&a.qty>=n))throw new Error("You don't have enough quantity of shares from that company");var u=e.market.find((function(e){return e.company==o})).price;e.funds+=u*n,a.qty-=n,e.stocks=r},endDay:function(e){e.market=e.market.map((function(e){return Object(p["a"])(Object(p["a"])({},e),{},{price:(5*Math.random()).toFixed(2)})}))}},actions:{},modules:{}}),h=n("8c4f"),b=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("Hello there 👋")]),n("p",[e._v("I welcome you my dear! Hold and Behold!! You are about enter app heaven 😇")]),n("p",[e._v(" Upon entering app heaven, You will have 100 Heaven Money as a start. You can spend it on company stocks. Ofcourse! You thought the worldly evil companies were in hell?? No no no. You were wrong! They are in heaven also. SUPRISE!! 😲 It turns out God does not work the way you expected! and decided to forgive and spread his mercy on everyone. Even the wons who did shit during their lives. For things to be just however, those shitheads occupy lower levels in heaven that people who did good i.e. goodheads LIKE YOU!! BTW, you also have 100 shares from Google. A bonus for goodheads like you 😘. ")])])}],w={},g=Object(u["a"])(w,b,_,!1,null,null,null),k=g.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.market,(function(t){return n("p",{key:t.company},[e._v(" Today's price for "+e._s(t.company)+" is "+e._s(t.price)+" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.qtys[t.company],expression:"qtys[m.company]"}],attrs:{placeholder:"Quantity to buy",type:"text"},domProps:{value:e.qtys[t.company]},on:{input:function(n){n.target.composing||e.$set(e.qtys,t.company,n.target.value)}}}),n("button",{on:{click:function(n){return e.buy({company:t.company,qty:e.qtys[t.company]})}}},[e._v("BUY")])])})),0)},q=[],j={computed:Object(d["c"])(["market"]),methods:Object(d["b"])(["buy"]),data:function(){return{qtys:{}}}},x=j,E=Object(u["a"])(x,O,q,!1,null,"6044a00b",null),P=E.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("Remaining Funds "+e._s(e.funds)+" HeavenMoney")]),e.stocks.length?n("div",[n("p",[e._v("You Own")]),e._l(e.stocks,(function(t){return n("div",{key:t.company},[n("p",[e._v(" "+e._s(t.qty)+" shares in "+e._s(t.company)+" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.qtys[t.company],expression:"qtys[stock.company]"}],attrs:{placeholder:"Quantity to sell",type:"text"},domProps:{value:e.qtys[t.company]},on:{input:function(n){n.target.composing||e.$set(e.qtys,t.company,n.target.value)}}}),n("button",{on:{click:function(n){return e.sell({company:t.company,qty:e.qtys[t.company]})}}},[e._v(" SELL ")])])])}))],2):e._e()])},S=[],Y={computed:Object(d["c"])(["funds","stocks"]),methods:Object(d["b"])(["sell"]),data:function(){return{qtys:{}}}},T=Y,$=Object(u["a"])(T,M,S,!1,null,"72b2de9e",null),I=$.exports;o["a"].use(h["a"]);var F=[{path:"/",component:k},{path:"/profile",component:I},{path:"/market",component:P}],L=new h["a"]({mode:"history",base:"/",routes:F}),H=L;o["a"].config.productionTip=!1,new o["a"]({store:v,router:H,render:function(e){return e(i)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.3fcb9174.js.map