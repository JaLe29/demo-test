import t from 'prop-types'
import e, { useState as n } from 'react'
function r(t, e) {
  return (
    (function(t) {
      if (Array.isArray(t)) return t
    })(t) ||
    (function(t, e) {
      if (!(Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t))) return
      var n = [],
        r = !0,
        o = !1,
        i = void 0
      try {
        for (
          var u, a = t[Symbol.iterator]();
          !(r = (u = a.next()).done) && (n.push(u.value), !e || n.length !== e);
          r = !0
        );
      } catch (t) {
        ;(o = !0), (i = t)
      } finally {
        try {
          r || null == a.return || a.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    })(t, e) ||
    (function() {
      throw new TypeError('Invalid attempt to destructure non-iterable instance')
    })()
  )
}
var o = 'GreenButton-module_button__1Qm__'
function i(t) {
  var i = t.onClick,
    u = t.text,
    a = r(n(0), 2),
    c = a[0],
    l = a[1]
  return e.createElement(
    'button',
    {
      className: o,
      onClick: function() {
        l(c + 1), i()
      }
    },
    u,
    ' - ',
    c
  )
}
!(function(t, e) {
  void 0 === e && (e = {})
  var n = e.insertAt
  if (t && 'undefined' != typeof document) {
    var r = document.head || document.getElementsByTagName('head')[0],
      o = document.createElement('style')
    ;(o.type = 'text/css'),
      'top' === n && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o),
      o.styleSheet ? (o.styleSheet.cssText = t) : o.appendChild(document.createTextNode(t))
  }
})(
  '.GreenButton-module_button__1Qm__ {\n  background-color: #28a745;\n  color: #fff;\n  font-size: 16px;\n  border-radius: 18px;\n  padding: 10px 20px;\n  border-style: none;\n  cursor: pointer;\n  text-transform: uppercase; }\n  .GreenButton-module_button__1Qm__:hover {\n    background-color: #218838; }\n'
),
  (i.propTypes = { onClick: t.func.isRequired, text: t.string.isRequired })
export default i
