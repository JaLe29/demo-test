import e,{useState as t,useEffect as n}from"react";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var o="textArea-module_textArea__jOs0v",i="textArea-module_normal__252TE",a="textArea-module_notFocused__39uMv";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".textArea-module_textArea__jOs0v {\n  border-radius: 5px;\n  width: calc(100% - 20px - 10px - 2px);\n  padding: 10px;\n  margin: 5px;\n  border: 1.5px solid;\n  resize: none;\n  font-family: inherit;\n  font-size: inherit; }\n  .textArea-module_textArea__jOs0v:focus {\n    outline: none; }\n\n.textArea-module_message__356sA {\n  height: 70px;\n  width: 100%; }\n\n.textArea-module_normal__252TE {\n  border-color: red; }\n\n.textArea-module_notFocused__39uMv {\n  color: #b7b7b7 !important;\n  border-color: #b7b7b7 !important; }\n\n.textArea-module_error__3cOzU {\n  border-color: red !important; }\n");var u=e.memo((function(u){var d=u.onSubmit,l=u.setInputState,c=u.inputState,s=r(t(!1),2),m=s[0],f=s[1],p=r(t(""),2),_=p[0],h=p[1],x=!1;n((function(){var e;return"done"===c&&(e=setTimeout((function(){f(!1),l("ready")}),2e3)),function(){e&&clearTimeout(e)}}),[c,l]);var v=function(e){if(13===e.keyCode&&!1===e.shiftKey){x=!0;var t=_.trim();if(0===t.length)return;return d(t),void h("")}if(x)x=!1;else{var n=e.target.value||"";h(n)}},y=[o];return m?y.push(i):y.push(a),["sending","done"].includes(c)?"DONE":e.createElement("textarea",{value:_,onChange:v,onKeyDown:v,onFocus:function(){return f(!0)},onBlur:function(){return f(!1)},className:y.join(" "),placeholder:"Join the discussion..."})}));export default u;