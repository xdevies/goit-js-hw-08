!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire4c75;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire4c75=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}}));var i=o("hKHmD"),u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f.default(e,t,r[t])}))}return e};var a,f=(a=o("hKHmD"))&&a.__esModule?a:{default:a};var l={},c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var s="Expected a function",d=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,b=/^0o[0-7]+$/i,p=parseInt,g="object"==typeof t&&t&&t.Object===Object&&t,y="object"==typeof self&&self&&self.Object===Object&&self,O=g||y||Function("return this")(),j=Object.prototype.toString,x=Math.max,h=Math.min,w=function(){return O.Date.now()};function S(e,t,r){var n,o,i,u,a,f,l=0,c=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(s);function v(t){var r=n,i=o;return n=o=void 0,l=t,u=e.apply(i,r)}function b(e){return l=e,a=setTimeout(g,t),c?v(e):u}function p(e){var r=e-f;return void 0===f||r>=t||r<0||d&&e-l>=i}function g(){var e=w();if(p(e))return y(e);a=setTimeout(g,function(e){var r=t-(e-f);return d?h(r,i-(e-l)):r}(e))}function y(e){return a=void 0,m&&n?v(e):(n=o=void 0,u)}function O(){var e=w(),r=p(e);if(n=arguments,o=this,f=e,r){if(void 0===a)return b(f);if(d)return a=setTimeout(g,t),v(f)}return void 0===a&&(a=setTimeout(g,t)),u}return t=T(t)||0,_(r)&&(c=!!r.leading,i=(d="maxWait"in r)?x(T(r.maxWait)||0,t):i,m="trailing"in r?!!r.trailing:m),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=f=o=a=void 0},O.flush=function(){return void 0===a?u:y(w())},O}function _(t){var r=void 0===t?"undefined":e(c)(t);return!!t&&("object"==r||"function"==r)}function T(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(c)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==j.call(t)}(t))return NaN;if(_(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=_(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(d,"");var n=v.test(t);return n||b.test(t)?p(t.slice(2),n?2:8):m.test(t)?NaN:+t}l=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(s);return _(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),S(e,t,{leading:n,maxWait:t,trailing:o})};var D="feedback-form-state",E={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input"),message:document.querySelector(".feedback-form textarea")},M=E.form.elements.email,N=E.form.elements.message,P={email:"",message:""};E.form.addEventListener("submit",(function(e){e.preventDefault(),console.dir(P),e.currentTarget.reset(),localStorage.removeItem(D),M.setAttribute("value",""),N.setAttribute("value",""),N.textContent="",P={email:"",message:""}})),E.form.addEventListener("input",l((function(t){var r=t.target,n=r.name,o=r.value;t.target.setAttribute("value",o),P=e(u)({},P,e(i)({},n,o)),localStorage.setItem(D,JSON.stringify(P))}),500));var k,q,A=localStorage.getItem(D);A&&(k=A,q=JSON.parse(k),M.setAttribute("value",q.email),N.setAttribute("value",q.message),N.textContent=q.message,P=e(u)({},P,q))}();
//# sourceMappingURL=03-feedback.a0719513.js.map
