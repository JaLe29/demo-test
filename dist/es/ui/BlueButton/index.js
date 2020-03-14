import e from 'prop-types'
import t from 'react'
var n = 'BlueButton-module_button__2phyE'
function o(e) {
  var o = e.onClick,
    r = e.text
  return t.createElement('button', { className: n, onClick: o }, r)
}
!(function(e, t) {
  void 0 === t && (t = {})
  var n = t.insertAt
  if (e && 'undefined' != typeof document) {
    var o = document.head || document.getElementsByTagName('head')[0],
      r = document.createElement('style')
    ;(r.type = 'text/css'),
      'top' === n && o.firstChild ? o.insertBefore(r, o.firstChild) : o.appendChild(r),
      r.styleSheet ? (r.styleSheet.cssText = e) : r.appendChild(document.createTextNode(e))
  }
})(
  '.BlueButton-module_button__2phyE {\n  background-color: #007bff;\n  color: #fff;\n  font-size: 16px;\n  border-radius: 18px;\n  padding: 10px 20px;\n  border-style: none;\n  cursor: pointer;\n  text-transform: uppercase; }\n  .BlueButton-module_button__2phyE:hover {\n    background-color: #0069d9; }\n'
),
  (o.propTypes = { onClick: e.func.isRequired, text: e.string.isRequired })
export default o
