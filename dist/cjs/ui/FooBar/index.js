'use strict'
function _interopDefault(e) {
  return e && 'object' == typeof e && 'default' in e ? e.default : e
}
Object.defineProperty(exports, '__esModule', { value: !0 })
var PropTypes = _interopDefault(require('prop-types')),
  React = _interopDefault(require('react'))
function styleInject(e, t) {
  void 0 === t && (t = {})
  var o = t.insertAt
  if (e && 'undefined' != typeof document) {
    var r = document.head || document.getElementsByTagName('head')[0],
      s = document.createElement('style')
    ;(s.type = 'text/css'),
      'top' === o && r.firstChild ? r.insertBefore(s, r.firstChild) : r.appendChild(s),
      s.styleSheet ? (s.styleSheet.cssText = e) : s.appendChild(document.createTextNode(e))
  }
}
var css = '.FooBar-module_foo-bar__1psIB {\n  color: red; }\n',
  styles = { 'foo-bar': 'FooBar-module_foo-bar__1psIB' }
function FooBar(e) {
  var t = e.text
  return React.createElement('div', { className: styles['foo-bar'] }, t)
}
styleInject(css), (FooBar.propTypes = { text: PropTypes.string }), (exports.default = FooBar)
