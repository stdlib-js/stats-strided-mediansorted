"use strict";var s=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var d=s(function(C,c){
var x=require('@stdlib/math-base-special-floor/dist');function b(a,r,e,u){var n,t,i,o;return n=r.data,t=r.accessors[0],a<=0?NaN:(i=a/2,o=x(i),i===o?(t(n,u+o*e)+t(n,u+(o-1)*e))/2:t(n,u+o*e))}c.exports=b
});var v=s(function(D,q){
var g=require('@stdlib/math-base-special-floor/dist'),j=require('@stdlib/array-base-arraylike2object/dist'),k=d();function O(a,r,e,u){var n,t,i;return a<=0?NaN:(i=j(r),i.accessorProtocol?k(a,i,e,u):(n=a/2,t=g(n),n===t?(r[u+t*e]+r[u+(t-1)*e])/2:r[u+t*e]))}q.exports=O
});var l=s(function(E,m){
var P=require('@stdlib/strided-base-stride2offset/dist'),R=v();function h(a,r,e){return R(a,r,e,P(a,e))}m.exports=h
});var f=s(function(F,y){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=l(),z=v();w(p,"ndarray",z);y.exports=p
});var A=f();module.exports=A;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
