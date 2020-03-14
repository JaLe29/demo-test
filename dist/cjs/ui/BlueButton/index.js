'use strict'
function _interopDefault(e) {
  return e && 'object' == typeof e && 'default' in e ? e.default : e
}
Object.defineProperty(exports, '__esModule', { value: !0 })
var PropTypes = _interopDefault(require('prop-types')),
  React = _interopDefault(require('react'))
function styleInject(e, t) {
  void 0 === t && (t = {})
  var n = t.insertAt
  if (e && 'undefined' != typeof document) {
    var o = document.head || document.getElementsByTagName('head')[0],
      r = document.createElement('style')
    ;(r.type = 'text/css'),
      'top' === n && o.firstChild ? o.insertBefore(r, o.firstChild) : o.appendChild(r),
      r.styleSheet ? (r.styleSheet.cssText = e) : r.appendChild(document.createTextNode(e))
  }
}
var css =
    '.BlueButton-module_button__2phyE {\n  background-color: #007bff;\n  color: #fff;\n  font-size: 16px;\n  border-radius: 18px;\n  padding: 10px 20px;\n  border-style: none;\n  cursor: pointer;\n  text-transform: uppercase; }\n  .BlueButton-module_button__2phyE:hover {\n    background-color: #0069d9; }\n',
  styles = { button: 'BlueButton-module_button__2phyE' }
function BlueButton(e) {
  var t = e.onClick,
    n = e.text
  return React.createElement('button', { className: styles.button, onClick: t }, n)
}
styleInject(css),
  (BlueButton.propTypes = { onClick: PropTypes.func.isRequired, text: PropTypes.string.isRequired }),
  (exports.default = BlueButton)
