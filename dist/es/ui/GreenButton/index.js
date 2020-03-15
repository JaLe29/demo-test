import t, { useState as r } from 'react'
function n(t, r) {
  return (
    (function(t) {
      if (Array.isArray(t)) return t
    })(t) ||
    (function(t, r) {
      if (!(Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t))) return
      var n = [],
        e = !0,
        o = !1,
        i = void 0
      try {
        for (
          var u, a = t[Symbol.iterator]();
          !(e = (u = a.next()).done) && (n.push(u.value), !r || n.length !== r);
          e = !0
        );
      } catch (t) {
        ;(o = !0), (i = t)
      } finally {
        try {
          e || null == a.return || a.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    })(t, r) ||
    (function() {
      throw new TypeError('Invalid attempt to destructure non-iterable instance')
    })()
  )
}
function e() {
  var e = n(r(0), 2),
    o = e[0],
    i = e[1]
  return t.createElement(
    'button',
    {
      onClick: function() {
        return i(o + 1)
      }
    },
    o
  )
}
e.propTypes = {}
export default e
