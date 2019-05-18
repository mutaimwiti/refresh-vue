(function(t){function e(e){for(var i,a,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)a=s[l],r[a]&&f.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={app:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/refresh-vue/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),r=n.n(i);r.a},"0670":function(t,e,n){},"2a7d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("List")],1)},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-list"},[n("div",[n("Create",{on:{create:t.createTask}})],1),n("div",{staticClass:"undone-tasks"},[n("b",[t._v("Undone")]),t._l(t.undone,function(e){return n("div",{key:e.id},[n("Todo",{attrs:{data:e},on:{finish:t.finishTask,delete:t.deleteTask}})],1)})],2),n("div",{staticClass:"done-tasks"},[n("b",[t._v("Done")]),t._l(t.done,function(e){return n("div",{key:e.id},[n("Todo",{attrs:{data:e},on:{delete:t.deleteTask}})],1)})],2)])},s=[],c=n("cebc"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-item"},[n("div",{staticClass:"todo-title"},[t._v("\n    "+t._s(t.data.title)+"\n  ")]),n("div",{staticClass:"todo-description"},[t._v("\n    "+t._s(t.data.description)+"\n    "),n("button",{staticClass:"action-button delete-button",on:{click:function(e){return t.$emit("delete",t.data.id)}}},[t._v("\n      Delete\n    ")]),t.data.done?t._e():n("button",{staticClass:"action-button",on:{click:function(e){return t.$emit("finish",t.data.id)}}},[t._v("\n      Finish\n    ")])])])},d=[],l={name:"Item",props:{data:Object}},f=l,p=(n("60f1"),n("2877")),v=Object(p["a"])(f,u,d,!1,null,"ac868e02",null),m=v.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"creation-form"},[n("b",[n("label",[t._v("\n      Title\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{placeholder:"Enter task title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),n("b",[n("label",[t._v("\n      Description\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"description-input",attrs:{placeholder:"Enter task description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})])]),n("button",{on:{click:t.createTask}},[t._v("Add task")])])},b=[],k={name:"Create",data:function(){return{title:"",description:""}},methods:{createTask:function(){var t=this.title,e=this.description;t&&e?(this.$emit("create",{title:t,description:e}),this.title="",this.description=""):alert("Both title and description are required.")}}},_=k,T=(n("ad5e"),Object(p["a"])(_,h,b,!1,null,"65f937fc",null)),g=T.exports,y={items:[{id:1,title:"Task 1",description:"Perform task 1",done:!0},{id:2,title:"Task 2",description:"Perform task 2",done:!0},{id:3,title:"Task 3",description:"Perform task 3",done:!1},{id:4,title:"Task 4",description:"Perform task 4",done:!1}]},O=y.items,j={components:{Todo:m,Create:g},name:"List",data:function(){return{items:O,currentId:O[O.length-1].id}},computed:{done:function(){return this.items.filter(function(t){return t.done})},undone:function(){return this.items.filter(function(t){return!t.done})}},methods:{finishTask:function(t){this.items=this.items.map(function(e){return e.id===t?Object(c["a"])({},e,{done:!0}):e})},deleteTask:function(t){this.items=this.items.filter(function(e){var n=e.id;return n!==t})},createTask:function(t){var e=t.title,n=t.description,i=this.currentId+1;this.items.push({id:i,title:e,description:n}),this.currentId=i}}},C=j,w=(n("bfb8"),Object(p["a"])(C,a,s,!1,null,"cb59ad9c",null)),x=w.exports,P={name:"app",components:{List:x}},$=P,E=(n("034f"),Object(p["a"])($,r,o,!1,null,null,null)),S=E.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(S)}}).$mount("#app")},"60f1":function(t,e,n){"use strict";var i=n("fe29"),r=n.n(i);r.a},"64a9":function(t,e,n){},ad5e:function(t,e,n){"use strict";var i=n("0670"),r=n.n(i);r.a},bfb8:function(t,e,n){"use strict";var i=n("2a7d"),r=n.n(i);r.a},fe29:function(t,e,n){}});
//# sourceMappingURL=app.ee531f5e.js.map