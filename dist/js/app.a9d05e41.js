(function(e){function t(t){for(var r,s,o=t[0],i=t[1],u=t[2],f=0,p=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);c&&c(t);while(p.length)p.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(l.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},l=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=i;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header",{attrs:{albumsFiltered:e.albumsFiltered}}),n("Main",{attrs:{albums:e.albums}}),n("Footer")],1)},l=[],s=(n("4de4"),n("d3b7"),n("caad"),n("2532"),n("bc3a")),o=n.n(s),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",integrity:"sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==",crossorigin:"anonymous",referrerpolicy:"no-referrer"}}),n("i",{staticClass:"fab fa-spotify px-4"}),n("select",{staticClass:"form-select"},[n("option",{attrs:{selected:""}},[e._v("Seleziona il genere..")]),e._l(e.albumsFiltered,(function(t,r){return n("option",{key:r},[e._v("One")])}))],2)])},u=[],c={name:"Header",props:["albumsFiltered"]},f=c,p=n("2877"),d=Object(p["a"])(f,i,u,!1,null,null,null),b=d.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"container"},[n("ul",{staticClass:"d-flex flex-wrap justify-content-between my-1"},e._l(e.albums,(function(t){return n("li",{key:t.title,staticClass:"text-center m-2 p-2",attrs:{id:"album"}},[n("img",{staticClass:"p-2",attrs:{src:t.poster,alt:""}}),n("h4",{staticClass:"p-2"},[e._v(e._s(t.title.toUpperCase()))]),n("h5",{staticClass:"text-secondary"},[e._v(e._s(t.author))]),n("h6",{staticClass:"text-secondary"},[e._v(e._s(t.year))])])})),0)])},h=[],y={name:"Main",props:["albums"]},v=y,_=Object(p["a"])(v,m,h,!1,null,null,null),g=_.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},O=[],j={name:"Footer"},w=j,F=Object(p["a"])(w,x,O,!1,null,null,null),P=F.exports,C={name:"App",components:{Header:b,Main:g,Footer:P},data:function(){return{albums:[],albumsFiltered:[]}},methods:{getAlbum:function(){var e=this;o.a.get("https://flynn.boolean.careers/exercises/api/array/music").then((function(t){e.albums=t.data.response}))},albumFilter:function(){var e=this;this.albumsFiltered=this.albums.filter((function(t){t.includes(e.albums.genre)}))}},mounted:function(){this.getAlbum(),this.albumFilter()}},k=C,M=(n("5c0b"),Object(p["a"])(k,a,l,!1,null,null,null)),S=M.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(S)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.a9d05e41.js.map