import{D as s,S as a,i as e,s as t,e as r,k as c,E as l,t as i,c as o,a as n,d as v,n as h,g as f,b as u,F as p,f as d,G as b,H as g,I as E,J as w,j as $,m,o as x,K as A,L,M as k,x as C,u as I,v as j}from"../chunks/vendor-bc7b7cec.js";const _={subscribe:a=>(()=>{const a=s("__svelte__");return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},session:a.session}})().page.subscribe(a)};function B(s){let a,e,t,E,w,$,m,x,A,L,k,C,I,j,_,B,D,H,M,T;return{c(){a=r("header"),e=r("div"),t=c(),E=r("nav"),w=l("svg"),$=l("path"),m=c(),x=r("ul"),A=r("li"),L=r("a"),k=i("Home"),C=c(),I=r("li"),j=r("a"),_=i("About"),B=c(),D=l("svg"),H=l("path"),M=c(),T=r("div"),this.h()},l(s){a=o(s,"HEADER",{class:!0});var r=n(a);e=o(r,"DIV",{class:!0}),n(e).forEach(v),t=h(r),E=o(r,"NAV",{class:!0});var c=n(E);w=o(c,"svg",{viewBox:!0,"aria-hidden":!0,class:!0},1);var l=n(w);$=o(l,"path",{d:!0,class:!0},1),n($).forEach(v),l.forEach(v),m=h(c),x=o(c,"UL",{class:!0});var i=n(x);A=o(i,"LI",{class:!0});var u=n(A);L=o(u,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var p=n(L);k=f(p,"Home"),p.forEach(v),u.forEach(v),C=h(i),I=o(i,"LI",{class:!0});var d=n(I);j=o(d,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var b=n(j);_=f(b,"About"),b.forEach(v),d.forEach(v),i.forEach(v),B=h(c),D=o(c,"svg",{viewBox:!0,"aria-hidden":!0,class:!0},1);var g=n(D);H=o(g,"path",{d:!0,class:!0},1),n(H).forEach(v),g.forEach(v),c.forEach(v),M=h(r),T=o(r,"DIV",{class:!0}),n(T).forEach(v),r.forEach(v),this.h()},h(){u(e,"class","corner svelte-1i9nfw3"),u($,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),u($,"class","svelte-1i9nfw3"),u(w,"viewBox","0 0 2 3"),u(w,"aria-hidden","true"),u(w,"class","svelte-1i9nfw3"),u(L,"sveltekit:prefetch",""),u(L,"href","/"),u(L,"class","svelte-1i9nfw3"),u(A,"class","svelte-1i9nfw3"),p(A,"active","/"===s[0].path),u(j,"sveltekit:prefetch",""),u(j,"href","/about"),u(j,"class","svelte-1i9nfw3"),u(I,"class","svelte-1i9nfw3"),p(I,"active","/about"===s[0].path),u(x,"class","svelte-1i9nfw3"),u(H,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),u(H,"class","svelte-1i9nfw3"),u(D,"viewBox","0 0 2 3"),u(D,"aria-hidden","true"),u(D,"class","svelte-1i9nfw3"),u(E,"class","svelte-1i9nfw3"),u(T,"class","corner svelte-1i9nfw3"),u(a,"class","svelte-1i9nfw3")},m(s,r){d(s,a,r),b(a,e),b(a,t),b(a,E),b(E,w),b(w,$),b(E,m),b(E,x),b(x,A),b(A,L),b(L,k),b(x,C),b(x,I),b(I,j),b(j,_),b(E,B),b(E,D),b(D,H),b(a,M),b(a,T)},p(s,[a]){1&a&&p(A,"active","/"===s[0].path),1&a&&p(I,"active","/about"===s[0].path)},i:g,o:g,d(s){s&&v(a)}}}function D(s,a,e){let t;return E(s,_,(s=>e(0,t=s))),[t]}class H extends a{constructor(s){super(),e(this,s,D,B,t,{})}}function M(s){let a,e,t,l,p,g,E,_,B,D,M;a=new H({});const T=s[1].default,V=w(T,s,s[0],null);return{c(){$(a.$$.fragment),e=c(),t=r("main"),V&&V.c(),l=c(),p=r("footer"),g=r("p"),E=i("Created by Carlos E. Torres ("),_=r("a"),B=i("https://cetorres.com"),D=i(")"),this.h()},l(s){m(a.$$.fragment,s),e=h(s),t=o(s,"MAIN",{class:!0});var r=n(t);V&&V.l(r),r.forEach(v),l=h(s),p=o(s,"FOOTER",{class:!0});var c=n(p);g=o(c,"P",{});var i=n(g);E=f(i,"Created by Carlos E. Torres ("),_=o(i,"A",{href:!0,target:!0,class:!0});var u=n(_);B=f(u,"https://cetorres.com"),u.forEach(v),D=f(i,")"),i.forEach(v),c.forEach(v),this.h()},h(){u(t,"class","svelte-1bjg77v"),u(_,"href","https://cetorres.com"),u(_,"target","_blank"),u(_,"class","svelte-1bjg77v"),u(p,"class","svelte-1bjg77v")},m(s,r){x(a,s,r),d(s,e,r),d(s,t,r),V&&V.m(t,null),d(s,l,r),d(s,p,r),b(p,g),b(g,E),b(g,_),b(_,B),b(g,D),M=!0},p(s,[a]){V&&V.p&&(!M||1&a)&&A(V,T,s,s[0],M?k(T,s[0],a,null):L(s[0]),null)},i(s){M||(C(a.$$.fragment,s),C(V,s),M=!0)},o(s){I(a.$$.fragment,s),I(V,s),M=!1},d(s){j(a,s),s&&v(e),s&&v(t),V&&V.d(s),s&&v(l),s&&v(p)}}}function T(s,a,e){let{$$slots:t={},$$scope:r}=a;return s.$$set=s=>{"$$scope"in s&&e(0,r=s.$$scope)},[r,t]}class V extends a{constructor(s){super(),e(this,s,T,M,t,{})}}export{V as default};
