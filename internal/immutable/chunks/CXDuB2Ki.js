import{W as m,X as z,Y as V,Z as R,_ as W,F as o,$ as b,a0 as P,a1 as D,c as q,a2 as X,a3 as J,i as Q,L as p,y as F,l as ee,M as ae,a4 as re,a5 as te,k as ne,j as M,a6 as j,v as U,a7 as K,m as ie,a8 as fe,a9 as se,D as C,aa as ue,ab as le,ac as _e,ad as ve,ae as de,af as ce,ag as be,K as ge,ah as he,ai as ye,aj as Pe,a as Z,ak as oe,I as $,al as Re,am as Ee,an as Ie}from"./bRXdmNGe.js";function S(a,s=null,d){if(typeof a!="object"||a===null||m in a)return a;const v=J(a);if(v!==z&&v!==V)return a;var n=new Map,u=Q(a),g=R(0);u&&n.set("length",R(a.length));var y;return new Proxy(a,{defineProperty(f,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&X();var i=n.get(e);return i===void 0?(i=R(r.value),n.set(e,i)):P(i,S(r.value,y)),!0},deleteProperty(f,e){var r=n.get(e);if(r===void 0)e in f&&n.set(e,R(b));else{if(u&&typeof e=="string"){var i=n.get("length"),t=Number(e);Number.isInteger(t)&&t<i.v&&P(i,t)}P(r,b),G(g)}return!0},get(f,e,r){var c;if(e===m)return a;var i=n.get(e),t=e in f;if(i===void 0&&(!t||(c=D(f,e))!=null&&c.writable)&&(i=R(S(t?f[e]:b,y)),n.set(e,i)),i!==void 0){var l=o(i);return l===b?void 0:l}return Reflect.get(f,e,r)},getOwnPropertyDescriptor(f,e){var r=Reflect.getOwnPropertyDescriptor(f,e);if(r&&"value"in r){var i=n.get(e);i&&(r.value=o(i))}else if(r===void 0){var t=n.get(e),l=t==null?void 0:t.v;if(t!==void 0&&l!==b)return{enumerable:!0,configurable:!0,value:l,writable:!0}}return r},has(f,e){var l;if(e===m)return!0;var r=n.get(e),i=r!==void 0&&r.v!==b||Reflect.has(f,e);if(r!==void 0||q!==null&&(!i||(l=D(f,e))!=null&&l.writable)){r===void 0&&(r=R(i?S(f[e],y):b),n.set(e,r));var t=o(r);if(t===b)return!1}return i},set(f,e,r,i){var I;var t=n.get(e),l=e in f;if(u&&e==="length")for(var c=r;c<t.v;c+=1){var E=n.get(c+"");E!==void 0?P(E,b):c in f&&(E=R(b),n.set(c+"",E))}t===void 0?(!l||(I=D(f,e))!=null&&I.writable)&&(t=R(void 0),P(t,S(r,y)),n.set(e,t)):(l=t.v!==b,P(t,S(r,y)));var h=Reflect.getOwnPropertyDescriptor(f,e);if(h!=null&&h.set&&h.set.call(i,r),!l){if(u&&typeof e=="string"){var O=n.get("length"),T=Number(e);Number.isInteger(T)&&T>=O.v&&P(O,T+1)}G(g)}return!0},ownKeys(f){o(g);var e=Reflect.ownKeys(f).filter(t=>{var l=n.get(t);return l===void 0||l.v!==b});for(var[r,i]of n)i.v!==b&&!(r in f)&&e.push(r);return e},setPrototypeOf(){W()}})}function G(a,s=1){P(a,a.v+s)}function Oe(a,s,d=!1){F&&ee();var v=a,n=null,u=null,g=b,y=d?ae:0,f=!1;const e=(i,t=!0)=>{f=!0,r(t,i)},r=(i,t)=>{if(g===(g=i))return;let l=!1;if(F){const c=v.data===re;!!g===c&&(v=te(),ne(v),M(!1),l=!0)}g?(n?j(n):t&&(n=U(()=>t(v))),u&&K(u,()=>{u=null})):(u?j(u):t&&(u=U(()=>t(v))),n&&K(n,()=>{n=null})),l&&M(!0)};p(()=>{f=!1,s(e),f||r(null,null)},y),F&&(v=ie)}function H(a,s){return a===s||(a==null?void 0:a[m])===s}function Te(a={},s,d,v){return fe(()=>{var n,u;return se(()=>{n=u,u=[],C(()=>{a!==d(...u)&&(s(a,...u),n&&H(d(...n),a)&&s(null,...n))})}),()=>{ue(()=>{u&&H(d(...u),a)&&s(null,...u)})}}),a}let N=!1;function we(a){var s=N;try{return N=!1,[a(),N]}finally{N=s}}function k(a){for(var s=q,d=q;s!==null&&!(s.f&(ye|Pe));)s=s.parent;try{return Z(s),a()}finally{Z(d)}}function Ae(a,s,d,v){var B;var n=(d&oe)!==0,u=!ge||(d&he)!==0,g=(d&ce)!==0,y=(d&Ee)!==0,f=!1,e;g?[e,f]=we(()=>a[s]):e=a[s];var r=m in a||be in a,i=g&&(((B=D(a,s))==null?void 0:B.set)??(r&&s in a&&(_=>a[s]=_)))||void 0,t=v,l=!0,c=!1,E=()=>(c=!0,l&&(l=!1,y?t=C(v):t=v),t);e===void 0&&v!==void 0&&(i&&u&&le(),e=E(),i&&i(e));var h;if(u)h=()=>{var _=a[s];return _===void 0?E():(l=!0,c=!1,_)};else{var O=k(()=>(n?$:Ie)(()=>a[s]));O.f|=_e,h=()=>{var _=o(O);return _!==void 0&&(t=void 0),_===void 0?t:_}}if(!(d&ve))return h;if(i){var T=a.$$legacy;return function(_,w){return arguments.length>0?((!u||!w||T||f)&&i(w?h():_),_):h()}}var I=!1,Y=!1,L=Re(e),A=k(()=>$(()=>{var _=h(),w=o(L);return I?(I=!1,Y=!0,w):(Y=!1,L.v=_)}));return n||(A.equals=de),function(_,w){if(arguments.length>0){const x=w?o(A):u&&g?S(_):_;return A.equals(x)||(I=!0,P(L,x),c&&t!==void 0&&(t=x),C(()=>o(A))),_}return o(A)}}export{S as a,Te as b,Oe as i,Ae as p};
