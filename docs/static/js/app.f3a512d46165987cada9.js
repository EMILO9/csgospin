webpackJsonp([1],{NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n={name:"App",data:function(){return{messages:[{User:"Admin",Msg:"This is a test message.",Posted:(new Date).toLocaleTimeString()}],text:"",Gamemodes:[{Name:"Roulette",URL:"/"},{Name:"Coinflip",URL:"/Coinflip"},{Name:"Crash",URL:"/Crash"},{Name:"Unboxing",URL:"/Unboxing"}],User:{Name:"EMILO",Balance:Math.floor(1e3*Math.random())+1..toFixed(2),Avatar:""}}},methods:{sendMessage:function(){this.text.length>=1&&(this.messages.push({User:this.User.Name,Msg:this.text,Posted:(new Date).toLocaleTimeString()}),this.text="")},changePage:function(t){this.$router.push(t)}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"Header"},[t._m(0),t._v(" "),s("div",{staticClass:"Menu"},[t._m(1),t._v(" "),s("div",{staticClass:"menuName"},[t._v(t._s(t.User.Name))]),t._v(" "),s("div",{staticClass:"menuBalance"},[s("i",{staticClass:"fas fa-coins"}),t._v(" "+t._s(t.User.Balance))]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)])]),t._v(" "),s("div",{staticClass:"gameModes"},t._l(t.Gamemodes,function(e,a){return s("div",{key:e+a,staticClass:"gameMode",class:{gameModeActive:t.$route.path===e.URL},on:{click:function(s){return t.changePage(e.URL)}}},[s("i",{staticClass:"fas fa-dice"}),t._v(" "+t._s(e.Name))])}),0),t._v(" "),s("div",{staticClass:"Content"},[s("div",{staticClass:"sidebarLeft"},[s("div",{staticClass:"Chat"},[s("div",{staticClass:"innerChat"},t._l(t.messages,function(e,a){return s("div",{key:e+a,staticClass:"chatMessage"},[s("div",{staticClass:"User"},[s("div",{staticClass:"chatUserWrapper"},[s("div",{staticClass:"chatAvatar"}),t._v("\n                "+t._s(e.User)+"\n                ")]),t._v(" "),s("span",{staticClass:"postedTime"},[s("i",{staticClass:"far fa-clock"}),t._v(" "+t._s(e.Posted))])]),t._v(" "),s("div",{staticClass:"Message"},[t._v(t._s(e.Msg))])])}),0)]),t._v(" "),s("div",{staticClass:"chatSend"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"chatInp",attrs:{type:"text",placeholder:"Say something...",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false"},domProps:{value:t.text},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMessage(e)},input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),s("button",{staticClass:"chatBtn",on:{click:t.sendMessage}},[s("i",{staticClass:"fas fa-reply"})])])]),t._v(" "),s("div",{staticClass:"Display"},[s("transition",{attrs:{name:"fade"}},[s("router-view")],1)],1)]),t._v(" "),s("div",{staticClass:"Footer"},[t._v("\n    Copyright © 2020 by CSGOSpin\n  ")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"Logo"},[e("i",{staticClass:"fas fa-gem"}),this._v(" CSGOSPIN")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"avatarWrapper"},[e("div",{staticClass:"menuAvatar"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"menuBTN"},[e("i",{staticClass:"fas fa-plus-circle"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"menuBTN"},[e("i",{staticClass:"fas fa-minus-circle"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"menuBTN"},[e("i",{staticClass:"fas fa-headset"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"menuBTN"},[e("i",{staticClass:"fas fa-sign-out-alt"})])}]},c=s("VU/8")(n,i,!1,null,null,null).exports,r=s("/ocq"),l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"underConstruction"},[e("i",{staticClass:"fas fa-tools"})])}]},o=s("VU/8")({name:"underConstruction",data:function(){return{}}},l,!1,null,null,null).exports,u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"underConstruction"},[e("i",{staticClass:"fas fa-bug"})])}]},m=s("VU/8")({name:"notFound",data:function(){return{}}},u,!1,null,null,null).exports;a.a.use(r.a);var f=new r.a({routes:[{path:"/",name:"Roulette",component:o},{path:"/Coinflip",name:"Coinflip",component:o},{path:"/Crash",name:"Crash",component:o},{path:"/Unboxing",name:"Unboxing",component:o},{name:"404",path:"*",component:m}]});s("jD+D");a.a.config.productionTip=!1,new a.a({el:"#app",router:f,components:{App:c},template:"<App/>"})},"jD+D":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f3a512d46165987cada9.js.map