import e from 'prop-types'
import t from 'react'
var o = 'FooBar-module_foo-bar__1psIB'
function r(e) {
  var r = e.text
  return t.createElement('div', { className: o }, r)
}
!(function(e, t) {
  void 0 === t && (t = {})
  var o = t.insertAt
  if (e && 'undefined' != typeof document) {
    var r = document.head || document.getElementsByTagName('head')[0],
      d = document.createElement('style')
    ;(d.type = 'text/css'),
      'top' === o && r.firstChild ? r.insertBefore(d, r.firstChild) : r.appendChild(d),
      d.styleSheet ? (d.styleSheet.cssText = e) : d.appendChild(document.createTextNode(e))
  }
})('.FooBar-module_foo-bar__1psIB {\n  color: red; }\n'),
  (r.propTypes = { text: e.string })
export default r
