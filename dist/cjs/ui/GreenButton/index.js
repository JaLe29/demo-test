'use strict'
function _interopDefault(t) {
  return t && 'object' == typeof t && 'default' in t ? t.default : t
}
Object.defineProperty(exports, '__esModule', { value: !0 })
var React = require('react'),
  React__default = _interopDefault(React)
function _slicedToArray(t, e) {
  return _arrayWithHoles(t) || _iterableToArrayLimit(t, e) || _nonIterableRest()
}
function _arrayWithHoles(t) {
  if (Array.isArray(t)) return t
}
function _iterableToArrayLimit(t, e) {
  if (Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t)) {
    var r = [],
      n = !0,
      a = !1,
      o = void 0
    try {
      for (
        var i, u = t[Symbol.iterator]();
        !(n = (i = u.next()).done) && (r.push(i.value), !e || r.length !== e);
        n = !0
      );
    } catch (t) {
      ;(a = !0), (o = t)
    } finally {
      try {
        n || null == u.return || u.return()
      } finally {
        if (a) throw o
      }
    }
    return r
  }
}
function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance')
}
function GreenButton() {
  var t = _slicedToArray(React.useState(0), 2),
    e = t[0],
    r = t[1]
  return React__default.createElement(
    'button',
    {
      onClick: function() {
        return r(e + 1)
      }
    },
    e
  )
}
;(GreenButton.propTypes = {}), (exports.default = GreenButton)
