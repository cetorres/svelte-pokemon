import{S as e,i as t,s as a,e as s,t as l,k as o,c as n,a as c,g as r,d as f,n as i,b as h,f as v,G as m,h as p,O as k,N as u,H as d,R as E}from"../../chunks/vendor-bc7b7cec.js";import{g}from"../../chunks/api-00c7699c.js";function z(e,t,a){const s=e.slice();return s[1]=t[a],s}function _(e,t,a){const s=e.slice();return s[4]=t[a],s}function T(e){let t,a,k,u,d,E,g,z,_,T,b=e[4].pokemon_v2_stat.name+"",H=e[4].base_stat+"",y=e[4].effort+"";return{c(){t=s("tr"),a=s("td"),k=l(b),u=o(),d=s("td"),E=l(H),g=o(),z=s("td"),_=l(y),T=o(),this.h()},l(e){t=n(e,"TR",{});var s=c(t);a=n(s,"TD",{class:!0});var l=c(a);k=r(l,b),l.forEach(f),u=i(s),d=n(s,"TD",{class:!0});var o=c(d);E=r(o,H),o.forEach(f),g=i(s),z=n(s,"TD",{class:!0});var h=c(z);_=r(h,y),h.forEach(f),T=i(s),s.forEach(f),this.h()},h(){h(a,"class","capitalize svelte-1f5pzke"),h(d,"class","svelte-1f5pzke"),h(z,"class","svelte-1f5pzke")},m(e,s){v(e,t,s),m(t,a),m(a,k),m(t,u),m(t,d),m(d,E),m(t,g),m(t,z),m(z,_),m(t,T)},p(e,t){1&t&&b!==(b=e[4].pokemon_v2_stat.name+"")&&p(k,b),1&t&&H!==(H=e[4].base_stat+"")&&p(E,H),1&t&&y!==(y=e[4].effort+"")&&p(_,y)},d(e){e&&f(t)}}}function b(e){let t,a,k,u,d=e[1].pokemon_v2_ability.name+"";return{c(){t=s("tr"),a=s("td"),k=l(d),u=o(),this.h()},l(e){t=n(e,"TR",{});var s=c(t);a=n(s,"TD",{class:!0});var l=c(a);k=r(l,d),l.forEach(f),u=i(s),s.forEach(f),this.h()},h(){h(a,"class","capitalize svelte-1f5pzke")},m(e,s){v(e,t,s),m(t,a),m(a,k),m(t,u)},p(e,t){1&t&&d!==(d=e[1].pokemon_v2_ability.name+"")&&p(k,d)},d(e){e&&f(t)}}}function H(e){let t,a,g,H,y,D,N,R,x,A,B,w,I,P,S,j,G,L,V,$,M,O,q,C,F,J,K,Q,U,W,X,Y,Z,ee,te=e[0].name+"";document.title=t="Pokemon: "+e[0].name;let ae=e[0].pokemon_v2_pokemonstats,se=[];for(let s=0;s<ae.length;s+=1)se[s]=T(_(e,ae,s));let le=e[0].pokemon_v2_pokemonabilities,oe=[];for(let s=0;s<le.length;s+=1)oe[s]=b(z(e,le,s));return{c(){a=o(),g=s("h1"),H=s("img"),N=o(),R=l(te),x=o(),A=s("div"),B=s("h3"),w=l("Stats"),I=o(),P=s("table"),S=s("tr"),j=s("th"),G=l("Name"),L=o(),V=s("th"),$=l("Base"),M=o(),O=s("th"),q=l("Effort"),C=o();for(let e=0;e<se.length;e+=1)se[e].c();F=o(),J=s("div"),K=s("h3"),Q=l("Abilities"),U=o(),W=s("table"),X=s("tr"),Y=s("th"),Z=l("Name"),ee=o();for(let e=0;e<oe.length;e+=1)oe[e].c();this.h()},l(e){k('[data-svelte="svelte-rlsz3"]',document.head).forEach(f),a=i(e),g=n(e,"H1",{class:!0});var t=c(g);H=n(t,"IMG",{src:!0,alt:!0,class:!0}),N=i(t),R=r(t,te),t.forEach(f),x=i(e),A=n(e,"DIV",{class:!0});var s=c(A);B=n(s,"H3",{});var l=c(B);w=r(l,"Stats"),l.forEach(f),I=i(s),P=n(s,"TABLE",{class:!0});var o=c(P);S=n(o,"TR",{});var h=c(S);j=n(h,"TH",{class:!0});var v=c(j);G=r(v,"Name"),v.forEach(f),L=i(h),V=n(h,"TH",{class:!0});var m=c(V);$=r(m,"Base"),m.forEach(f),M=i(h),O=n(h,"TH",{class:!0});var p=c(O);q=r(p,"Effort"),p.forEach(f),h.forEach(f),C=i(o);for(let a=0;a<se.length;a+=1)se[a].l(o);o.forEach(f),s.forEach(f),F=i(e),J=n(e,"DIV",{class:!0});var u=c(J);K=n(u,"H3",{});var d=c(K);Q=r(d,"Abilities"),d.forEach(f),U=i(u),W=n(u,"TABLE",{class:!0});var E=c(W);X=n(E,"TR",{});var z=c(X);Y=n(z,"TH",{class:!0});var _=c(Y);Z=r(_,"Name"),_.forEach(f),z.forEach(f),ee=i(E);for(let a=0;a<oe.length;a+=1)oe[a].l(E);E.forEach(f),u.forEach(f),this.h()},h(){u(H.src,y=e[0].image)||h(H,"src",y),h(H,"alt",D=e[0].name),h(H,"class","svelte-1f5pzke"),h(g,"class","title capitalize svelte-1f5pzke"),h(j,"class","svelte-1f5pzke"),h(V,"class","svelte-1f5pzke"),h(O,"class","svelte-1f5pzke"),h(P,"class","svelte-1f5pzke"),h(A,"class","details-container svelte-1f5pzke"),h(Y,"class","svelte-1f5pzke"),h(W,"class","svelte-1f5pzke"),h(J,"class","details-container svelte-1f5pzke")},m(e,t){v(e,a,t),v(e,g,t),m(g,H),m(g,N),m(g,R),v(e,x,t),v(e,A,t),m(A,B),m(B,w),m(A,I),m(A,P),m(P,S),m(S,j),m(j,G),m(S,L),m(S,V),m(V,$),m(S,M),m(S,O),m(O,q),m(P,C);for(let a=0;a<se.length;a+=1)se[a].m(P,null);v(e,F,t),v(e,J,t),m(J,K),m(K,Q),m(J,U),m(J,W),m(W,X),m(X,Y),m(Y,Z),m(W,ee);for(let a=0;a<oe.length;a+=1)oe[a].m(W,null)},p(e,[a]){if(1&a&&t!==(t="Pokemon: "+e[0].name)&&(document.title=t),1&a&&!u(H.src,y=e[0].image)&&h(H,"src",y),1&a&&D!==(D=e[0].name)&&h(H,"alt",D),1&a&&te!==(te=e[0].name+"")&&p(R,te),1&a){let t;for(ae=e[0].pokemon_v2_pokemonstats,t=0;t<ae.length;t+=1){const s=_(e,ae,t);se[t]?se[t].p(s,a):(se[t]=T(s),se[t].c(),se[t].m(P,null))}for(;t<se.length;t+=1)se[t].d(1);se.length=ae.length}if(1&a){let t;for(le=e[0].pokemon_v2_pokemonabilities,t=0;t<le.length;t+=1){const s=z(e,le,t);oe[t]?oe[t].p(s,a):(oe[t]=b(s),oe[t].c(),oe[t].m(W,null))}for(;t<oe.length;t+=1)oe[t].d(1);oe.length=le.length}},i:d,o:d,d(e){e&&f(a),e&&f(g),e&&f(x),e&&f(A),E(se,e),e&&f(F),e&&f(J),E(oe,e)}}}var y=function(e,t,a,s){return new(a||(a=Promise))((function(l,o){function n(e){try{r(s.next(e))}catch(t){o(t)}}function c(e){try{r(s.throw(e))}catch(t){o(t)}}function r(e){var t;e.done?l(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(n,c)}r((s=s.apply(e,t||[])).next())}))};const D=({page:e})=>y(void 0,void 0,void 0,(function*(){return{props:{pokemon:yield g(e.params.id)}}}));function N(e,t,a){let{pokemon:s}=t;return e.$$set=e=>{"pokemon"in e&&a(0,s=e.pokemon)},[s]}class R extends e{constructor(e){super(),t(this,e,N,H,a,{pokemon:0})}}export{R as default,D as load};