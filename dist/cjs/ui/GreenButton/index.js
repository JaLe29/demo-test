'use strict'
function _interopDefault(e) {
  return e && 'object' == typeof e && 'default' in e ? e.default : e
}
Object.defineProperty(exports, '__esModule', { value: !0 })
var PropTypes = _interopDefault(require('prop-types')),
  React = require('react'),
  React__default = _interopDefault(React)
function _slicedToArray(e, t) {
  return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _nonIterableRest()
}
function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e
}
function _iterableToArrayLimit(e, t) {
  if (Symbol.iterator in Object(e) || '[object Arguments]' === Object.prototype.toString.call(e)) {
    var r = [],
      n = !0,
      o = !1,
      a = void 0
    try {
      for (
        var u, i = e[Symbol.iterator]();
        !(n = (u = i.next()).done) && (r.push(u.value), !t || r.length !== t);
        n = !0
      );
    } catch (e) {
      ;(o = !0), (a = e)
    } finally {
      try {
        n || null == i.return || i.return()
      } finally {
        if (o) throw a
      }
    }
    return r
  }
}
function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance')
}
function styleInject(e, t) {
  void 0 === t && (t = {})
  var r = t.insertAt
  if (e && 'undefined' != typeof document) {
    var n = document.head || document.getElementsByTagName('head')[0],
      o = document.createElement('style')
    ;(o.type = 'text/css'),
      'top' === r && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o),
      o.styleSheet ? (o.styleSheet.cssText = e) : o.appendChild(document.createTextNode(e))
  }
}
var css =
    '.GreenButton-module_button__1Qm__ {\n  background-color: #28a745;\n  color: #fff;\n  font-size: 16px;\n  border-radius: 18px;\n  padding: 10px 20px;\n  border-style: none;\n  cursor: pointer;\n  text-transform: uppercase; }\n  .GreenButton-module_button__1Qm__:hover {\n    background-color: #218838; }\n',
  styles = { button: 'GreenButton-module_button__1Qm__' }
function GreenButton(e) {
  var t = e.onClick,
    r = e.text,
    n = _slicedToArray(React.useState(0), 2),
    o = n[0],
    a = n[1]
  return React__default.createElement(
    'button',
    {
      className: styles.button,
      onClick: function() {
        a(o + 1), t()
      }
    },
    r,
    ' - ',
    o
  )
}
styleInject(css),
  (GreenButton.propTypes = { onClick: PropTypes.func.isRequired, text: PropTypes.string.isRequired }),
  (exports.default = GreenButton)
