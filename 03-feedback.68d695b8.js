function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,p=function(){return c.Date.now()};function v(e,t,n){var i,r,o,a,u,f,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function I(e){return l=e,u=setTimeout(j,t),c?b(e):a}function w(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=o}function j(){var e=p();if(w(e))return E(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?d(n,o-(e-l)):n}(e))}function E(e){return u=void 0,v&&i?b(e):(i=r=void 0,a)}function S(){var e=p(),n=w(e);if(i=arguments,r=this,f=e,n){if(void 0===u)return I(f);if(s)return u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=y(t)||0,g(n)&&(c=!!n.leading,o=(s="maxWait"in n)?m(y(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=r=u=void 0},S.flush=function(){return void 0===u?a:E(p())},S}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:i,maxWait:t,trailing:r})},formEl=document.querySelector(".feedback-form"),emailInput=document.querySelector("input"),messageInput=document.querySelector("textarea"),formEl.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:emailInput.value,message:messageInput.value}),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),formEl.addEventListener("input",e(t)((function(){const e={email:emailInput.value,message:messageInput.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),1e3)),window.addEventListener("load",(()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"));return e?(emailInput.value=e.email,messageInput.value=e.message):(emailInput.value="",messageInput.value=""),e}));
//# sourceMappingURL=03-feedback.68d695b8.js.map