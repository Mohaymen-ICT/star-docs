(()=>{"use strict";var e,a,t,c,r,d={},f={};function b(e){var a=f[e];if(void 0!==a)return a.exports;var t=f[e]={id:e,loaded:!1,exports:{}};return d[e].call(t.exports,t,t.exports,b),t.loaded=!0,t.exports}b.m=d,b.c=f,e=[],b.O=(a,t,c,r)=>{if(!t){var d=1/0;for(i=0;i<e.length;i++){t=e[i][0],c=e[i][1],r=e[i][2];for(var f=!0,o=0;o<t.length;o++)(!1&r||d>=r)&&Object.keys(b.O).every((e=>b.O[e](t[o])))?t.splice(o--,1):(f=!1,r<d&&(d=r));if(f){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[t,c,r]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var r=Object.create(null);b.r(r);var d={};a=a||[null,t({}),t([]),t(t)];for(var f=2&c&&e;"object"==typeof f&&!~a.indexOf(f);f=t(f))Object.getOwnPropertyNames(f).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,b.d(r,d),r},b.d=(e,a)=>{for(var t in a)b.o(a,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,t)=>(b.f[t](e,a),a)),[])),b.u=e=>"assets/js/"+({361:"50d86df9",673:"be1dc46e",716:"43431e63",774:"3b37006b",1235:"a7456010",1489:"493cfa2d",1750:"a7839bb5",2067:"a1fcef46",2362:"1c617cff",3567:"5a642f1c",3828:"9fe23f66",4049:"b946bb25",4134:"393be207",4206:"d966daeb",4583:"1df93b7f",4804:"6f43d336",4845:"2c3ff7ef",4888:"95148e32",5292:"d455acb7",5386:"b09e2375",5742:"aba21aa0",6061:"1f391b9e",6098:"a945bb5e",6777:"b20da06c",6948:"e6d2392b",6969:"14eb3368",7098:"a7bd4aaa",7111:"6155f4c2",7179:"d0aed961",7228:"e8716d3c",8401:"17896441",8712:"028f9ecd",8957:"3c1c51b8",9048:"a94703ab",9419:"3997ab5f",9647:"5e95c892",9871:"3dd75d8e"}[e]||e)+"."+{361:"a7d71b9a",673:"faa333ce",716:"ca24803b",774:"0f06f92f",1169:"7ff0a408",1176:"a930d446",1235:"ff9c2968",1245:"a112000e",1303:"b8a81cab",1331:"37b52f75",1489:"c8b4957b",1750:"b7a5b4a3",1946:"2845c0c9",2067:"a28880bd",2130:"3e4fabe8",2237:"96b08e18",2362:"df09d4a8",2376:"0163ab49",2453:"bbeb3614",2548:"843f04e4",2843:"65c77fa2",2901:"40b2ec68",2925:"4ae73e97",2983:"e532686b",3068:"3a9bcd21",3567:"24ae49ea",3626:"320a9ddc",3706:"063ba723",3828:"81550ef6",4049:"40ce29d4",4134:"88e49a05",4162:"31c13561",4206:"31464ecb",4583:"30f6c07e",4741:"2c40bdf1",4804:"5d4bc29d",4845:"1cb520b9",4888:"05369d64",4943:"351b919e",5292:"4c87d48f",5386:"13547cdc",5458:"7db6549d",5742:"8ca597b0",6061:"fdd6aa4f",6098:"e551eef7",6420:"4ea05732",6777:"e9ece669",6788:"763a744a",6803:"3daa2191",6948:"58158a19",6969:"87928672",7098:"f1b5c857",7111:"91700c34",7179:"b2c3b6b0",7228:"996ca005",7426:"d1b5e5ca",8055:"6c6dc428",8337:"75c8da6f",8401:"fb979edc",8478:"ef5658ba",8635:"062af689",8712:"2acfab5e",8810:"253fde91",8869:"fce0f2e4",8957:"e98bf391",9048:"e70be001",9419:"b7fe199f",9647:"967e9ac4",9689:"1e9a7dde",9871:"0f73d346"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},r="star-docs:",b.l=(e,a,t,d)=>{if(c[e])c[e].push(a);else{var f,o;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+t){f=u;break}}f||(o=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,b.nc&&f.setAttribute("nonce",b.nc),f.setAttribute("data-webpack",r+t),f.src=e),c[e]=[a];var l=(a,t)=>{f.onerror=f.onload=null,clearTimeout(s);var r=c[e];if(delete c[e],f.parentNode&&f.parentNode.removeChild(f),r&&r.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),o&&document.head.appendChild(f)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/star-docs/",b.gca=function(e){return e={17896441:"8401","50d86df9":"361",be1dc46e:"673","43431e63":"716","3b37006b":"774",a7456010:"1235","493cfa2d":"1489",a7839bb5:"1750",a1fcef46:"2067","1c617cff":"2362","5a642f1c":"3567","9fe23f66":"3828",b946bb25:"4049","393be207":"4134",d966daeb:"4206","1df93b7f":"4583","6f43d336":"4804","2c3ff7ef":"4845","95148e32":"4888",d455acb7:"5292",b09e2375:"5386",aba21aa0:"5742","1f391b9e":"6061",a945bb5e:"6098",b20da06c:"6777",e6d2392b:"6948","14eb3368":"6969",a7bd4aaa:"7098","6155f4c2":"7111",d0aed961:"7179",e8716d3c:"7228","028f9ecd":"8712","3c1c51b8":"8957",a94703ab:"9048","3997ab5f":"9419","5e95c892":"9647","3dd75d8e":"9871"}[e]||e,b.p+b.u(e)},(()=>{var e={5354:0,1869:0};b.f.j=(a,t)=>{var c=b.o(e,a)?e[a]:void 0;if(0!==c)if(c)t.push(c[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var r=new Promise(((t,r)=>c=e[a]=[t,r]));t.push(c[2]=r);var d=b.p+b.u(a),f=new Error;b.l(d,(t=>{if(b.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var r=t&&("load"===t.type?"missing":t.type),d=t&&t.target&&t.target.src;f.message="Loading chunk "+a+" failed.\n("+r+": "+d+")",f.name="ChunkLoadError",f.type=r,f.request=d,c[1](f)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,t)=>{var c,r,d=t[0],f=t[1],o=t[2],n=0;if(d.some((a=>0!==e[a]))){for(c in f)b.o(f,c)&&(b.m[c]=f[c]);if(o)var i=o(b)}for(a&&a(t);n<d.length;n++)r=d[n],b.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return b.O(i)},t=self.webpackChunkstar_docs=self.webpackChunkstar_docs||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();