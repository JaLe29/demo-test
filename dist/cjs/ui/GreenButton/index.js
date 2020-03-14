'use strict'
function _interopDefault(e) {
  return e && 'object' == typeof e && 'default' in e ? e.default : e
}
Object.defineProperty(exports, '__esModule', { value: !0 })
var React = require('react'),
  React__default = _interopDefault(React)
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
}
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
      i = !1,
      o = void 0
    try {
      for (
        var a, s = e[Symbol.iterator]();
        !(n = (a = s.next()).done) && (r.push(a.value), !t || r.length !== t);
        n = !0
      );
    } catch (e) {
      ;(i = !0), (o = e)
    } finally {
      try {
        n || null == s.return || s.return()
      } finally {
        if (i) throw o
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
      i = document.createElement('style')
    ;(i.type = 'text/css'),
      'top' === r && n.firstChild ? n.insertBefore(i, n.firstChild) : n.appendChild(i),
      i.styleSheet ? (i.styleSheet.cssText = e) : i.appendChild(document.createTextNode(e))
  }
}
var css =
    '.GreenButton-module_button__1Qm__ {\n  background-color: #28a745;\n  color: #fff;\n  font-size: 16px;\n  border-radius: 18px;\n  padding: 10px 20px;\n  border-style: none;\n  cursor: pointer;\n  text-transform: uppercase; }\n  .GreenButton-module_button__1Qm__:hover {\n    background-color: #218838; }\n',
  styles = { button: 'GreenButton-module_button__1Qm__' }
function unwrapExports(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
}
function createCommonjsModule(e, t) {
  return e((t = { exports: {} }), t.exports), t.exports
}
function getCjsExportFromNamespace(e) {
  return (e && e.default) || e
}
/** @license React v16.13.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ styleInject(css)
var b = 'function' == typeof Symbol && Symbol.for,
  c = b ? Symbol.for('react.element') : 60103,
  d = b ? Symbol.for('react.portal') : 60106,
  e = b ? Symbol.for('react.fragment') : 60107,
  f = b ? Symbol.for('react.strict_mode') : 60108,
  g = b ? Symbol.for('react.profiler') : 60114,
  h = b ? Symbol.for('react.provider') : 60109,
  k = b ? Symbol.for('react.context') : 60110,
  l = b ? Symbol.for('react.async_mode') : 60111,
  m = b ? Symbol.for('react.concurrent_mode') : 60111,
  n = b ? Symbol.for('react.forward_ref') : 60112,
  p = b ? Symbol.for('react.suspense') : 60113,
  q = b ? Symbol.for('react.suspense_list') : 60120,
  r = b ? Symbol.for('react.memo') : 60115,
  t = b ? Symbol.for('react.lazy') : 60116,
  v = b ? Symbol.for('react.block') : 60121,
  w = b ? Symbol.for('react.fundamental') : 60117,
  x = b ? Symbol.for('react.responder') : 60118,
  y = b ? Symbol.for('react.scope') : 60119
function z(i) {
  if ('object' == typeof i && null !== i) {
    var o = i.$$typeof
    switch (o) {
      case c:
        switch ((i = i.type)) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return i
          default:
            switch ((i = i && i.$$typeof)) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return i
              default:
                return o
            }
        }
      case d:
        return o
    }
  }
}
function A(e) {
  return z(e) === m
}
var AsyncMode = l,
  ConcurrentMode = m,
  ContextConsumer = k,
  ContextProvider = h,
  Element = c,
  ForwardRef = n,
  Fragment = e,
  Lazy = t,
  Memo = r,
  Portal = d,
  Profiler = g,
  StrictMode = f,
  Suspense = p,
  isAsyncMode = function(e) {
    return A(e) || z(e) === l
  },
  isConcurrentMode = A,
  isContextConsumer = function(e) {
    return z(e) === k
  },
  isContextProvider = function(e) {
    return z(e) === h
  },
  isElement = function(e) {
    return 'object' == typeof e && null !== e && e.$$typeof === c
  },
  isForwardRef = function(e) {
    return z(e) === n
  },
  isFragment = function(t) {
    return z(t) === e
  },
  isLazy = function(e) {
    return z(e) === t
  },
  isMemo = function(e) {
    return z(e) === r
  },
  isPortal = function(e) {
    return z(e) === d
  },
  isProfiler = function(e) {
    return z(e) === g
  },
  isStrictMode = function(e) {
    return z(e) === f
  },
  isSuspense = function(e) {
    return z(e) === p
  },
  isValidElementType = function(i) {
    return (
      'string' == typeof i ||
      'function' == typeof i ||
      i === e ||
      i === m ||
      i === g ||
      i === f ||
      i === p ||
      i === q ||
      ('object' == typeof i &&
        null !== i &&
        (i.$$typeof === t ||
          i.$$typeof === r ||
          i.$$typeof === h ||
          i.$$typeof === k ||
          i.$$typeof === n ||
          i.$$typeof === w ||
          i.$$typeof === x ||
          i.$$typeof === y ||
          i.$$typeof === v))
    )
  },
  typeOf = z,
  reactIs_production_min = {
    AsyncMode: AsyncMode,
    ConcurrentMode: ConcurrentMode,
    ContextConsumer: ContextConsumer,
    ContextProvider: ContextProvider,
    Element: Element,
    ForwardRef: ForwardRef,
    Fragment: Fragment,
    Lazy: Lazy,
    Memo: Memo,
    Portal: Portal,
    Profiler: Profiler,
    StrictMode: StrictMode,
    Suspense: Suspense,
    isAsyncMode: isAsyncMode,
    isConcurrentMode: isConcurrentMode,
    isContextConsumer: isContextConsumer,
    isContextProvider: isContextProvider,
    isElement: isElement,
    isForwardRef: isForwardRef,
    isFragment: isFragment,
    isLazy: isLazy,
    isMemo: isMemo,
    isPortal: isPortal,
    isProfiler: isProfiler,
    isStrictMode: isStrictMode,
    isSuspense: isSuspense,
    isValidElementType: isValidElementType,
    typeOf: typeOf
  },
  reactIs_development = createCommonjsModule(function(e, t) {
    'production' !== process.env.NODE_ENV &&
      (function() {
        var e = 'function' == typeof Symbol && Symbol.for,
          r = e ? Symbol.for('react.element') : 60103,
          n = e ? Symbol.for('react.portal') : 60106,
          i = e ? Symbol.for('react.fragment') : 60107,
          o = e ? Symbol.for('react.strict_mode') : 60108,
          a = e ? Symbol.for('react.profiler') : 60114,
          s = e ? Symbol.for('react.provider') : 60109,
          u = e ? Symbol.for('react.context') : 60110,
          c = e ? Symbol.for('react.async_mode') : 60111,
          l = e ? Symbol.for('react.concurrent_mode') : 60111,
          p = e ? Symbol.for('react.forward_ref') : 60112,
          f = e ? Symbol.for('react.suspense') : 60113,
          d = e ? Symbol.for('react.suspense_list') : 60120,
          h = e ? Symbol.for('react.memo') : 60115,
          v = e ? Symbol.for('react.lazy') : 60116,
          y = e ? Symbol.for('react.block') : 60121,
          m = e ? Symbol.for('react.fundamental') : 60117,
          b = e ? Symbol.for('react.responder') : 60118,
          g = e ? Symbol.for('react.scope') : 60119
        function E(e) {
          if ('object' == typeof e && null !== e) {
            var t = e.$$typeof
            switch (t) {
              case r:
                var d = e.type
                switch (d) {
                  case c:
                  case l:
                  case i:
                  case a:
                  case o:
                  case f:
                    return d
                  default:
                    var y = d && d.$$typeof
                    switch (y) {
                      case u:
                      case p:
                      case v:
                      case h:
                      case s:
                        return y
                      default:
                        return t
                    }
                }
              case n:
                return t
            }
          }
        }
        var _ = c,
          O = l,
          k = u,
          w = s,
          S = r,
          T = p,
          N = i,
          D = v,
          x = h,
          I = n,
          C = a,
          R = o,
          F = f,
          A = !1
        function M(e) {
          return E(e) === l
        }
        ;(t.AsyncMode = _),
          (t.ConcurrentMode = O),
          (t.ContextConsumer = k),
          (t.ContextProvider = w),
          (t.Element = S),
          (t.ForwardRef = T),
          (t.Fragment = N),
          (t.Lazy = D),
          (t.Memo = x),
          (t.Portal = I),
          (t.Profiler = C),
          (t.StrictMode = R),
          (t.Suspense = F),
          (t.isAsyncMode = function(e) {
            return (
              A ||
                ((A = !0),
                console.warn(
                  'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.'
                )),
              M(e) || E(e) === c
            )
          }),
          (t.isConcurrentMode = M),
          (t.isContextConsumer = function(e) {
            return E(e) === u
          }),
          (t.isContextProvider = function(e) {
            return E(e) === s
          }),
          (t.isElement = function(e) {
            return 'object' == typeof e && null !== e && e.$$typeof === r
          }),
          (t.isForwardRef = function(e) {
            return E(e) === p
          }),
          (t.isFragment = function(e) {
            return E(e) === i
          }),
          (t.isLazy = function(e) {
            return E(e) === v
          }),
          (t.isMemo = function(e) {
            return E(e) === h
          }),
          (t.isPortal = function(e) {
            return E(e) === n
          }),
          (t.isProfiler = function(e) {
            return E(e) === a
          }),
          (t.isStrictMode = function(e) {
            return E(e) === o
          }),
          (t.isSuspense = function(e) {
            return E(e) === f
          }),
          (t.isValidElementType = function(e) {
            return (
              'string' == typeof e ||
              'function' == typeof e ||
              e === i ||
              e === l ||
              e === a ||
              e === o ||
              e === f ||
              e === d ||
              ('object' == typeof e &&
                null !== e &&
                (e.$$typeof === v ||
                  e.$$typeof === h ||
                  e.$$typeof === s ||
                  e.$$typeof === u ||
                  e.$$typeof === p ||
                  e.$$typeof === m ||
                  e.$$typeof === b ||
                  e.$$typeof === g ||
                  e.$$typeof === y))
            )
          }),
          (t.typeOf = E)
      })()
  }),
  reactIs_development_1 = reactIs_development.AsyncMode,
  reactIs_development_2 = reactIs_development.ConcurrentMode,
  reactIs_development_3 = reactIs_development.ContextConsumer,
  reactIs_development_4 = reactIs_development.ContextProvider,
  reactIs_development_5 = reactIs_development.Element,
  reactIs_development_6 = reactIs_development.ForwardRef,
  reactIs_development_7 = reactIs_development.Fragment,
  reactIs_development_8 = reactIs_development.Lazy,
  reactIs_development_9 = reactIs_development.Memo,
  reactIs_development_10 = reactIs_development.Portal,
  reactIs_development_11 = reactIs_development.Profiler,
  reactIs_development_12 = reactIs_development.StrictMode,
  reactIs_development_13 = reactIs_development.Suspense,
  reactIs_development_14 = reactIs_development.isAsyncMode,
  reactIs_development_15 = reactIs_development.isConcurrentMode,
  reactIs_development_16 = reactIs_development.isContextConsumer,
  reactIs_development_17 = reactIs_development.isContextProvider,
  reactIs_development_18 = reactIs_development.isElement,
  reactIs_development_19 = reactIs_development.isForwardRef,
  reactIs_development_20 = reactIs_development.isFragment,
  reactIs_development_21 = reactIs_development.isLazy,
  reactIs_development_22 = reactIs_development.isMemo,
  reactIs_development_23 = reactIs_development.isPortal,
  reactIs_development_24 = reactIs_development.isProfiler,
  reactIs_development_25 = reactIs_development.isStrictMode,
  reactIs_development_26 = reactIs_development.isSuspense,
  reactIs_development_27 = reactIs_development.isValidElementType,
  reactIs_development_28 = reactIs_development.typeOf,
  reactIs = createCommonjsModule(function(e) {
    'production' === process.env.NODE_ENV ? (e.exports = reactIs_production_min) : (e.exports = reactIs_development)
  }),
  getOwnPropertySymbols = Object.getOwnPropertySymbols,
  hasOwnProperty = Object.prototype.hasOwnProperty,
  propIsEnumerable = Object.prototype.propertyIsEnumerable
function toObject(e) {
  if (null == e) throw new TypeError('Object.assign cannot be called with null or undefined')
  return Object(e)
}
function shouldUseNative() {
  try {
    if (!Object.assign) return !1
    var e = new String('abc')
    if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1
    for (var t = {}, r = 0; r < 10; r++) t['_' + String.fromCharCode(r)] = r
    if (
      '0123456789' !==
      Object.getOwnPropertyNames(t)
        .map(function(e) {
          return t[e]
        })
        .join('')
    )
      return !1
    var n = {}
    return (
      'abcdefghijklmnopqrst'.split('').forEach(function(e) {
        n[e] = e
      }),
      'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, n)).join('')
    )
  } catch (e) {
    return !1
  }
}
var objectAssign = shouldUseNative()
    ? Object.assign
    : function(e, t) {
        for (var r, n, i = toObject(e), o = 1; o < arguments.length; o++) {
          for (var a in (r = Object(arguments[o]))) hasOwnProperty.call(r, a) && (i[a] = r[a])
          if (getOwnPropertySymbols) {
            n = getOwnPropertySymbols(r)
            for (var s = 0; s < n.length; s++) propIsEnumerable.call(r, n[s]) && (i[n[s]] = r[n[s]])
          }
        }
        return i
      },
  ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  ReactPropTypesSecret_1 = ReactPropTypesSecret,
  printWarning = function() {}
if ('production' !== process.env.NODE_ENV) {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1,
    loggedTypeFailures = {},
    has = Function.call.bind(Object.prototype.hasOwnProperty)
  printWarning = function(e) {
    var t = 'Warning: ' + e
    'undefined' != typeof console && console.error(t)
    try {
      throw new Error(t)
    } catch (e) {}
  }
}
function checkPropTypes(e, t, r, n, i) {
  if ('production' !== process.env.NODE_ENV)
    for (var o in e)
      if (has(e, o)) {
        var a
        try {
          if ('function' != typeof e[o]) {
            var s = Error(
              (n || 'React class') +
                ': ' +
                r +
                ' type `' +
                o +
                '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                typeof e[o] +
                '`.'
            )
            throw ((s.name = 'Invariant Violation'), s)
          }
          a = e[o](t, o, n, r, null, ReactPropTypesSecret$1)
        } catch (e) {
          a = e
        }
        if (
          (!a ||
            a instanceof Error ||
            printWarning(
              (n || 'React class') +
                ': type specification of ' +
                r +
                ' `' +
                o +
                '` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
                typeof a +
                '. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).'
            ),
          a instanceof Error && !(a.message in loggedTypeFailures))
        ) {
          loggedTypeFailures[a.message] = !0
          var u = i ? i() : ''
          printWarning('Failed ' + r + ' type: ' + a.message + (null != u ? u : ''))
        }
      }
}
checkPropTypes.resetWarningCache = function() {
  'production' !== process.env.NODE_ENV && (loggedTypeFailures = {})
}
var checkPropTypes_1 = checkPropTypes,
  has$1 = Function.call.bind(Object.prototype.hasOwnProperty),
  printWarning$1 = function() {}
function emptyFunctionThatReturnsNull() {
  return null
}
'production' !== process.env.NODE_ENV &&
  (printWarning$1 = function(e) {
    var t = 'Warning: ' + e
    'undefined' != typeof console && console.error(t)
    try {
      throw new Error(t)
    } catch (e) {}
  })
var factoryWithTypeCheckers = function(e, t) {
  var r = 'function' == typeof Symbol && Symbol.iterator
  var n = {
    array: s('array'),
    bool: s('boolean'),
    func: s('function'),
    number: s('number'),
    object: s('object'),
    string: s('string'),
    symbol: s('symbol'),
    any: a(emptyFunctionThatReturnsNull),
    arrayOf: function(e) {
      return a(function(t, r, n, i, a) {
        if ('function' != typeof e)
          return new o('Property `' + a + '` of component `' + n + '` has invalid PropType notation inside arrayOf.')
        var s = t[r]
        if (!Array.isArray(s))
          return new o(
            'Invalid ' + i + ' `' + a + '` of type `' + c(s) + '` supplied to `' + n + '`, expected an array.'
          )
        for (var u = 0; u < s.length; u++) {
          var l = e(s, u, n, i, a + '[' + u + ']', ReactPropTypesSecret_1)
          if (l instanceof Error) return l
        }
        return null
      })
    },
    element: a(function(t, r, n, i, a) {
      var s = t[r]
      return e(s)
        ? null
        : new o(
            'Invalid ' +
              i +
              ' `' +
              a +
              '` of type `' +
              c(s) +
              '` supplied to `' +
              n +
              '`, expected a single ReactElement.'
          )
    }),
    elementType: a(function(e, t, r, n, i) {
      var a = e[t]
      return reactIs.isValidElementType(a)
        ? null
        : new o(
            'Invalid ' +
              n +
              ' `' +
              i +
              '` of type `' +
              c(a) +
              '` supplied to `' +
              r +
              '`, expected a single ReactElement type.'
          )
    }),
    instanceOf: function(e) {
      return a(function(t, r, n, i, a) {
        if (!(t[r] instanceof e)) {
          var s = e.name || '<<anonymous>>'
          return new o(
            'Invalid ' +
              i +
              ' `' +
              a +
              '` of type `' +
              (function(e) {
                if (!e.constructor || !e.constructor.name) return '<<anonymous>>'
                return e.constructor.name
              })(t[r]) +
              '` supplied to `' +
              n +
              '`, expected instance of `' +
              s +
              '`.'
          )
        }
        return null
      })
    },
    node: a(function(e, t, r, n, i) {
      return u(e[t]) ? null : new o('Invalid ' + n + ' `' + i + '` supplied to `' + r + '`, expected a ReactNode.')
    }),
    objectOf: function(e) {
      return a(function(t, r, n, i, a) {
        if ('function' != typeof e)
          return new o('Property `' + a + '` of component `' + n + '` has invalid PropType notation inside objectOf.')
        var s = t[r],
          u = c(s)
        if ('object' !== u)
          return new o('Invalid ' + i + ' `' + a + '` of type `' + u + '` supplied to `' + n + '`, expected an object.')
        for (var l in s)
          if (has$1(s, l)) {
            var p = e(s, l, n, i, a + '.' + l, ReactPropTypesSecret_1)
            if (p instanceof Error) return p
          }
        return null
      })
    },
    oneOf: function(e) {
      if (!Array.isArray(e))
        return (
          'production' !== process.env.NODE_ENV &&
            (arguments.length > 1
              ? printWarning$1(
                  'Invalid arguments supplied to oneOf, expected an array, got ' +
                    arguments.length +
                    ' arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
                )
              : printWarning$1('Invalid argument supplied to oneOf, expected an array.')),
          emptyFunctionThatReturnsNull
        )
      function t(t, r, n, a, s) {
        for (var u = t[r], c = 0; c < e.length; c++) if (i(u, e[c])) return null
        var p = JSON.stringify(e, function(e, t) {
          return 'symbol' === l(t) ? String(t) : t
        })
        return new o(
          'Invalid ' +
            a +
            ' `' +
            s +
            '` of value `' +
            String(u) +
            '` supplied to `' +
            n +
            '`, expected one of ' +
            p +
            '.'
        )
      }
      return a(t)
    },
    oneOfType: function(e) {
      if (!Array.isArray(e))
        return (
          'production' !== process.env.NODE_ENV &&
            printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.'),
          emptyFunctionThatReturnsNull
        )
      for (var t = 0; t < e.length; t++) {
        var r = e[t]
        if ('function' != typeof r)
          return (
            printWarning$1(
              'Invalid argument supplied to oneOfType. Expected an array of check functions, but received ' +
                p(r) +
                ' at index ' +
                t +
                '.'
            ),
            emptyFunctionThatReturnsNull
          )
      }
      return a(function(t, r, n, i, a) {
        for (var s = 0; s < e.length; s++) {
          if (null == (0, e[s])(t, r, n, i, a, ReactPropTypesSecret_1)) return null
        }
        return new o('Invalid ' + i + ' `' + a + '` supplied to `' + n + '`.')
      })
    },
    shape: function(e) {
      return a(function(t, r, n, i, a) {
        var s = t[r],
          u = c(s)
        if ('object' !== u)
          return new o('Invalid ' + i + ' `' + a + '` of type `' + u + '` supplied to `' + n + '`, expected `object`.')
        for (var l in e) {
          var p = e[l]
          if (p) {
            var f = p(s, l, n, i, a + '.' + l, ReactPropTypesSecret_1)
            if (f) return f
          }
        }
        return null
      })
    },
    exact: function(e) {
      return a(function(t, r, n, i, a) {
        var s = t[r],
          u = c(s)
        if ('object' !== u)
          return new o('Invalid ' + i + ' `' + a + '` of type `' + u + '` supplied to `' + n + '`, expected `object`.')
        var l = objectAssign({}, t[r], e)
        for (var p in l) {
          var f = e[p]
          if (!f)
            return new o(
              'Invalid ' +
                i +
                ' `' +
                a +
                '` key `' +
                p +
                '` supplied to `' +
                n +
                '`.\nBad object: ' +
                JSON.stringify(t[r], null, '  ') +
                '\nValid keys: ' +
                JSON.stringify(Object.keys(e), null, '  ')
            )
          var d = f(s, p, n, i, a + '.' + p, ReactPropTypesSecret_1)
          if (d) return d
        }
        return null
      })
    }
  }
  function i(e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
  }
  function o(e) {
    ;(this.message = e), (this.stack = '')
  }
  function a(e) {
    if ('production' !== process.env.NODE_ENV)
      var r = {},
        n = 0
    function i(i, a, s, u, c, l, p) {
      if (((u = u || '<<anonymous>>'), (l = l || s), p !== ReactPropTypesSecret_1)) {
        if (t) {
          var f = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types'
          )
          throw ((f.name = 'Invariant Violation'), f)
        }
        if ('production' !== process.env.NODE_ENV && 'undefined' != typeof console) {
          var d = u + ':' + s
          !r[d] &&
            n < 3 &&
            (printWarning$1(
              'You are manually calling a React.PropTypes validation function for the `' +
                l +
                '` prop on `' +
                u +
                '`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.'
            ),
            (r[d] = !0),
            n++)
        }
      }
      return null == a[s]
        ? i
          ? null === a[s]
            ? new o('The ' + c + ' `' + l + '` is marked as required in `' + u + '`, but its value is `null`.')
            : new o('The ' + c + ' `' + l + '` is marked as required in `' + u + '`, but its value is `undefined`.')
          : null
        : e(a, s, u, c, l)
    }
    var a = i.bind(null, !1)
    return (a.isRequired = i.bind(null, !0)), a
  }
  function s(e) {
    return a(function(t, r, n, i, a, s) {
      var u = t[r]
      return c(u) !== e
        ? new o('Invalid ' + i + ' `' + a + '` of type `' + l(u) + '` supplied to `' + n + '`, expected `' + e + '`.')
        : null
    })
  }
  function u(t) {
    switch (typeof t) {
      case 'number':
      case 'string':
      case 'undefined':
        return !0
      case 'boolean':
        return !t
      case 'object':
        if (Array.isArray(t)) return t.every(u)
        if (null === t || e(t)) return !0
        var n = (function(e) {
          var t = e && ((r && e[r]) || e['@@iterator'])
          if ('function' == typeof t) return t
        })(t)
        if (!n) return !1
        var i,
          o = n.call(t)
        if (n !== t.entries) {
          for (; !(i = o.next()).done; ) if (!u(i.value)) return !1
        } else
          for (; !(i = o.next()).done; ) {
            var a = i.value
            if (a && !u(a[1])) return !1
          }
        return !0
      default:
        return !1
    }
  }
  function c(e) {
    var t = typeof e
    return Array.isArray(e)
      ? 'array'
      : e instanceof RegExp
      ? 'object'
      : (function(e, t) {
          return (
            'symbol' === e ||
            (!!t && ('Symbol' === t['@@toStringTag'] || ('function' == typeof Symbol && t instanceof Symbol)))
          )
        })(t, e)
      ? 'symbol'
      : t
  }
  function l(e) {
    if (null == e) return '' + e
    var t = c(e)
    if ('object' === t) {
      if (e instanceof Date) return 'date'
      if (e instanceof RegExp) return 'regexp'
    }
    return t
  }
  function p(e) {
    var t = l(e)
    switch (t) {
      case 'array':
      case 'object':
        return 'an ' + t
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + t
      default:
        return t
    }
  }
  return (
    (o.prototype = Error.prototype),
    (n.checkPropTypes = checkPropTypes_1),
    (n.resetWarningCache = checkPropTypes_1.resetWarningCache),
    (n.PropTypes = n),
    n
  )
}
function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction
var factoryWithThrowingShims = function() {
    function e(e, t, r, n, i, o) {
      if (o !== ReactPropTypesSecret_1) {
        var a = new Error(
          'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
        )
        throw ((a.name = 'Invariant Violation'), a)
      }
    }
    function t() {
      return e
    }
    e.isRequired = e
    var r = {
      array: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    }
    return (r.PropTypes = r), r
  },
  propTypes = createCommonjsModule(function(e) {
    if ('production' !== process.env.NODE_ENV) {
      var t = reactIs
      e.exports = factoryWithTypeCheckers(t.isElement, !0)
    } else e.exports = factoryWithThrowingShims()
  }),
  propTypes_1 = propTypes.any,
  propTypes_2 = propTypes.arrayOf,
  propTypes_3 = propTypes.bool,
  propTypes_4 = propTypes.func,
  propTypes_5 = propTypes.node,
  propTypes_6 = propTypes.number,
  propTypes_7 = propTypes.object,
  propTypes_8 = propTypes.oneOfType,
  propTypes_9 = propTypes.string,
  extendStatics = function(e, t) {
    return (extendStatics =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function(e, t) {
          e.__proto__ = t
        }) ||
      function(e, t) {
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
      })(e, t)
  }
function __extends(e, t) {
  function r() {
    this.constructor = e
  }
  extendStatics(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()))
}
var __assign = function() {
  return (__assign =
    Object.assign ||
    function(e) {
      for (var t, r = 1, n = arguments.length; r < n; r++)
        for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
      return e
    }).apply(this, arguments)
}
function __rest(e, t) {
  var r = {}
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n])
  if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
    var i = 0
    for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]])
  }
  return r
}
function __awaiter(e, t, r, n) {
  return new (r || (r = Promise))(function(i, o) {
    function a(e) {
      try {
        u(n.next(e))
      } catch (e) {
        o(e)
      }
    }
    function s(e) {
      try {
        u(n.throw(e))
      } catch (e) {
        o(e)
      }
    }
    function u(e) {
      var t
      e.done
        ? i(e.value)
        : ((t = e.value),
          t instanceof r
            ? t
            : new r(function(e) {
                e(t)
              })).then(a, s)
    }
    u((n = n.apply(e, t || [])).next())
  })
}
function __generator(e, t) {
  var r,
    n,
    i,
    o,
    a = {
      label: 0,
      sent: function() {
        if (1 & i[0]) throw i[1]
        return i[1]
      },
      trys: [],
      ops: []
    }
  return (
    (o = { next: s(0), throw: s(1), return: s(2) }),
    'function' == typeof Symbol &&
      (o[Symbol.iterator] = function() {
        return this
      }),
    o
  )
  function s(o) {
    return function(s) {
      return (function(o) {
        if (r) throw new TypeError('Generator is already executing.')
        for (; a; )
          try {
            if (
              ((r = 1),
              n &&
                (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) &&
                !(i = i.call(n, o[1])).done)
            )
              return i
            switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
              case 0:
              case 1:
                i = o
                break
              case 4:
                return a.label++, { value: o[1], done: !1 }
              case 5:
                a.label++, (n = o[1]), (o = [0])
                continue
              case 7:
                ;(o = a.ops.pop()), a.trys.pop()
                continue
              default:
                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                  a = 0
                  continue
                }
                if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                  a.label = o[1]
                  break
                }
                if (6 === o[0] && a.label < i[1]) {
                  ;(a.label = i[1]), (i = o)
                  break
                }
                if (i && a.label < i[2]) {
                  ;(a.label = i[2]), a.ops.push(o)
                  break
                }
                i[2] && a.ops.pop(), a.trys.pop()
                continue
            }
            o = t.call(e, a)
          } catch (e) {
            ;(o = [6, e]), (n = 0)
          } finally {
            r = i = 0
          }
        if (5 & o[0]) throw o[1]
        return { value: o[0] ? o[1] : void 0, done: !0 }
      })([o, s])
    }
  }
}
function __spreadArrays() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length
  var n = Array(e),
    i = 0
  for (t = 0; t < r; t++) for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) n[i] = o[a]
  return n
}
var nodejsCustomInspectSymbol =
  'function' == typeof Symbol && 'function' == typeof Symbol.for ? Symbol.for('nodejs.util.inspect.custom') : void 0
function _typeof(e) {
  return (_typeof =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function(e) {
          return typeof e
        }
      : function(e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
            ? 'symbol'
            : typeof e
        })(e)
}
var MAX_ARRAY_LENGTH = 10,
  MAX_RECURSIVE_DEPTH = 2
function inspect(e) {
  return formatValue(e, [])
}
function formatValue(e, t) {
  switch (_typeof(e)) {
    case 'string':
      return JSON.stringify(e)
    case 'function':
      return e.name ? '[function '.concat(e.name, ']') : '[function]'
    case 'object':
      return null === e ? 'null' : formatObjectValue(e, t)
    default:
      return String(e)
  }
}
function formatObjectValue(e, t) {
  if (-1 !== t.indexOf(e)) return '[Circular]'
  var r = [].concat(t, [e]),
    n = getCustomFn(e)
  if (void 0 !== n) {
    var i = n.call(e)
    if (i !== e) return 'string' == typeof i ? i : formatValue(i, r)
  } else if (Array.isArray(e)) return formatArray(e, r)
  return formatObject(e, r)
}
function formatObject(e, t) {
  var r = Object.keys(e)
  return 0 === r.length
    ? '{}'
    : t.length > MAX_RECURSIVE_DEPTH
    ? '[' + getObjectTag(e) + ']'
    : '{ ' +
      r
        .map(function(r) {
          return r + ': ' + formatValue(e[r], t)
        })
        .join(', ') +
      ' }'
}
function formatArray(e, t) {
  if (0 === e.length) return '[]'
  if (t.length > MAX_RECURSIVE_DEPTH) return '[Array]'
  for (var r = Math.min(MAX_ARRAY_LENGTH, e.length), n = e.length - r, i = [], o = 0; o < r; ++o)
    i.push(formatValue(e[o], t))
  return (
    1 === n ? i.push('... 1 more item') : n > 1 && i.push('... '.concat(n, ' more items')), '[' + i.join(', ') + ']'
  )
}
function getCustomFn(e) {
  var t = e[String(nodejsCustomInspectSymbol)]
  return 'function' == typeof t ? t : 'function' == typeof e.inspect ? e.inspect : void 0
}
function getObjectTag(e) {
  var t = Object.prototype.toString
    .call(e)
    .replace(/^\[object /, '')
    .replace(/]$/, '')
  if ('Object' === t && 'function' == typeof e.constructor) {
    var r = e.constructor.name
    if ('string' == typeof r && '' !== r) return r
  }
  return t
}
var QueryDocumentKeys = {
    Name: [],
    Document: ['definitions'],
    OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
    VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
    Variable: ['name'],
    SelectionSet: ['selections'],
    Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
    Argument: ['name', 'value'],
    FragmentSpread: ['name', 'directives'],
    InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
    FragmentDefinition: ['name', 'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: ['values'],
    ObjectValue: ['fields'],
    ObjectField: ['name', 'value'],
    Directive: ['name', 'arguments'],
    NamedType: ['name'],
    ListType: ['type'],
    NonNullType: ['type'],
    SchemaDefinition: ['directives', 'operationTypes'],
    OperationTypeDefinition: ['type'],
    ScalarTypeDefinition: ['description', 'name', 'directives'],
    ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
    FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
    InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
    InterfaceTypeDefinition: ['description', 'name', 'directives', 'fields'],
    UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
    EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
    EnumValueDefinition: ['description', 'name', 'directives'],
    InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
    DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
    SchemaExtension: ['directives', 'operationTypes'],
    ScalarTypeExtension: ['name', 'directives'],
    ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
    InterfaceTypeExtension: ['name', 'directives', 'fields'],
    UnionTypeExtension: ['name', 'directives', 'types'],
    EnumTypeExtension: ['name', 'directives', 'values'],
    InputObjectTypeExtension: ['name', 'directives', 'fields']
  },
  BREAK = Object.freeze({})
function visit(e, t) {
  var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : QueryDocumentKeys,
    n = void 0,
    i = Array.isArray(e),
    o = [e],
    a = -1,
    s = [],
    u = void 0,
    c = void 0,
    l = void 0,
    p = [],
    f = [],
    d = e
  do {
    var h = ++a === o.length,
      v = h && 0 !== s.length
    if (h) {
      if (((c = 0 === f.length ? void 0 : p[p.length - 1]), (u = l), (l = f.pop()), v)) {
        if (i) u = u.slice()
        else {
          for (var y = {}, m = 0, b = Object.keys(u); m < b.length; m++) {
            var g = b[m]
            y[g] = u[g]
          }
          u = y
        }
        for (var E = 0, _ = 0; _ < s.length; _++) {
          var O = s[_][0],
            k = s[_][1]
          i && (O -= E), i && null === k ? (u.splice(O, 1), E++) : (u[O] = k)
        }
      }
      ;(a = n.index), (o = n.keys), (s = n.edits), (i = n.inArray), (n = n.prev)
    } else {
      if (((c = l ? (i ? a : o[a]) : void 0), null == (u = l ? l[c] : d))) continue
      l && p.push(c)
    }
    var w = void 0
    if (!Array.isArray(u)) {
      if (!isNode(u)) throw new Error('Invalid AST Node: ' + inspect(u))
      var S = getVisitFn(t, u.kind, h)
      if (S) {
        if ((w = S.call(t, u, c, l, p, f)) === BREAK) break
        if (!1 === w) {
          if (!h) {
            p.pop()
            continue
          }
        } else if (void 0 !== w && (s.push([c, w]), !h)) {
          if (!isNode(w)) {
            p.pop()
            continue
          }
          u = w
        }
      }
    }
    void 0 === w && v && s.push([c, u]),
      h
        ? p.pop()
        : ((n = { inArray: i, index: a, keys: o, edits: s, prev: n }),
          (o = (i = Array.isArray(u)) ? u : r[u.kind] || []),
          (a = -1),
          (s = []),
          l && f.push(l),
          (l = u))
  } while (void 0 !== n)
  return 0 !== s.length && (d = s[s.length - 1][1]), d
}
function isNode(e) {
  return Boolean(e && 'string' == typeof e.kind)
}
function getVisitFn(e, t, r) {
  var n = e[t]
  if (n) {
    if (!r && 'function' == typeof n) return n
    var i = r ? n.leave : n.enter
    if ('function' == typeof i) return i
  } else {
    var o = r ? e.leave : e.enter
    if (o) {
      if ('function' == typeof o) return o
      var a = o[t]
      if ('function' == typeof a) return a
    }
  }
}
var genericMessage = 'Invariant Violation',
  _a = Object.setPrototypeOf,
  setPrototypeOf =
    void 0 === _a
      ? function(e, t) {
          return (e.__proto__ = t), e
        }
      : _a,
  InvariantError = (function(e) {
    function t(r) {
      void 0 === r && (r = genericMessage)
      var n =
        e.call(
          this,
          'number' == typeof r
            ? genericMessage + ': ' + r + ' (see https://github.com/apollographql/invariant-packages)'
            : r
        ) || this
      return (n.framesToPop = 1), (n.name = genericMessage), setPrototypeOf(n, t.prototype), n
    }
    return __extends(t, e), t
  })(Error)
function invariant(e, t) {
  if (!e) throw new InvariantError(t)
}
function wrapConsoleMethod(e) {
  return function() {
    return console[e].apply(console, arguments)
  }
}
!(function(e) {
  ;(e.warn = wrapConsoleMethod('warn')), (e.error = wrapConsoleMethod('error'))
})(invariant || (invariant = {}))
var processStub = { env: {} }
if ('object' == typeof process) processStub = process
else
  try {
    Function('stub', 'process = stub')(processStub)
  } catch (e) {}
var fastJsonStableStringify = function(e, t) {
    t || (t = {}), 'function' == typeof t && (t = { cmp: t })
    var r = 'boolean' == typeof t.cycles && t.cycles,
      n =
        t.cmp &&
        (function(e) {
          return function(t) {
            return function(r, n) {
              var i = { key: r, value: t[r] },
                o = { key: n, value: t[n] }
              return e(i, o)
            }
          }
        })(t.cmp),
      i = []
    return (function e(t) {
      if ((t && t.toJSON && 'function' == typeof t.toJSON && (t = t.toJSON()), void 0 !== t)) {
        if ('number' == typeof t) return isFinite(t) ? '' + t : 'null'
        if ('object' != typeof t) return JSON.stringify(t)
        var o, a
        if (Array.isArray(t)) {
          for (a = '[', o = 0; o < t.length; o++) o && (a += ','), (a += e(t[o]) || 'null')
          return a + ']'
        }
        if (null === t) return 'null'
        if (-1 !== i.indexOf(t)) {
          if (r) return JSON.stringify('__cycle__')
          throw new TypeError('Converting circular structure to JSON')
        }
        var s = i.push(t) - 1,
          u = Object.keys(t).sort(n && n(t))
        for (a = '', o = 0; o < u.length; o++) {
          var c = u[o],
            l = e(t[c])
          l && (a && (a += ','), (a += JSON.stringify(c) + ':' + l))
        }
        return i.splice(s, 1), '{' + a + '}'
      }
    })(e)
  },
  _a$1 = Object.prototype,
  toString = _a$1.toString,
  hasOwnProperty$1 = _a$1.hasOwnProperty,
  previousComparisons = new Map()
function equal(e, t) {
  try {
    return check(e, t)
  } finally {
    previousComparisons.clear()
  }
}
function check(e, t) {
  if (e === t) return !0
  var r = toString.call(e)
  if (r !== toString.call(t)) return !1
  switch (r) {
    case '[object Array]':
      if (e.length !== t.length) return !1
    case '[object Object]':
      if (previouslyCompared(e, t)) return !0
      var n = Object.keys(e),
        i = Object.keys(t),
        o = n.length
      if (o !== i.length) return !1
      for (var a = 0; a < o; ++a) if (!hasOwnProperty$1.call(t, n[a])) return !1
      for (a = 0; a < o; ++a) {
        var s = n[a]
        if (!check(e[s], t[s])) return !1
      }
      return !0
    case '[object Error]':
      return e.name === t.name && e.message === t.message
    case '[object Number]':
      if (e != e) return t != t
    case '[object Boolean]':
    case '[object Date]':
      return +e == +t
    case '[object RegExp]':
    case '[object String]':
      return e == '' + t
    case '[object Map]':
    case '[object Set]':
      if (e.size !== t.size) return !1
      if (previouslyCompared(e, t)) return !0
      for (var u = e.entries(), c = '[object Map]' === r; ; ) {
        var l = u.next()
        if (l.done) break
        var p = l.value,
          f = p[0],
          d = p[1]
        if (!t.has(f)) return !1
        if (c && !check(d, t.get(f))) return !1
      }
      return !0
  }
  return !1
}
function previouslyCompared(e, t) {
  var r = previousComparisons.get(e)
  if (r) {
    if (r.has(t)) return !0
  } else previousComparisons.set(e, (r = new Set()))
  return r.add(t), !1
}
function isStringValue(e) {
  return 'StringValue' === e.kind
}
function isBooleanValue(e) {
  return 'BooleanValue' === e.kind
}
function isIntValue(e) {
  return 'IntValue' === e.kind
}
function isFloatValue(e) {
  return 'FloatValue' === e.kind
}
function isVariable(e) {
  return 'Variable' === e.kind
}
function isObjectValue(e) {
  return 'ObjectValue' === e.kind
}
function isListValue(e) {
  return 'ListValue' === e.kind
}
function isEnumValue(e) {
  return 'EnumValue' === e.kind
}
function isNullValue(e) {
  return 'NullValue' === e.kind
}
function valueToObjectRepresentation(e, t, r, n) {
  if (isIntValue(r) || isFloatValue(r)) e[t.value] = Number(r.value)
  else if (isBooleanValue(r) || isStringValue(r)) e[t.value] = r.value
  else if (isObjectValue(r)) {
    var i = {}
    r.fields.map(function(e) {
      return valueToObjectRepresentation(i, e.name, e.value, n)
    }),
      (e[t.value] = i)
  } else if (isVariable(r)) {
    var o = (n || {})[r.name.value]
    e[t.value] = o
  } else if (isListValue(r))
    e[t.value] = r.values.map(function(e) {
      var r = {}
      return valueToObjectRepresentation(r, t, e, n), r[t.value]
    })
  else if (isEnumValue(r)) e[t.value] = r.value
  else {
    if (!isNullValue(r))
      throw 'production' === process.env.NODE_ENV
        ? new InvariantError(17)
        : new InvariantError(
            'The inline argument "' +
              t.value +
              '" of kind "' +
              r.kind +
              '"is not supported. Use variables instead of inline arguments to overcome this limitation.'
          )
    e[t.value] = null
  }
}
function storeKeyNameFromField(e, t) {
  var r = null
  e.directives &&
    ((r = {}),
    e.directives.forEach(function(e) {
      ;(r[e.name.value] = {}),
        e.arguments &&
          e.arguments.forEach(function(n) {
            var i = n.name,
              o = n.value
            return valueToObjectRepresentation(r[e.name.value], i, o, t)
          })
    }))
  var n = null
  return (
    e.arguments &&
      e.arguments.length &&
      ((n = {}),
      e.arguments.forEach(function(e) {
        var r = e.name,
          i = e.value
        return valueToObjectRepresentation(n, r, i, t)
      })),
    getStoreKeyName(e.name.value, n, r)
  )
}
var KNOWN_DIRECTIVES = ['connection', 'include', 'skip', 'client', 'rest', 'export']
function getStoreKeyName(e, t, r) {
  if (r && r.connection && r.connection.key) {
    if (r.connection.filter && r.connection.filter.length > 0) {
      var n = r.connection.filter ? r.connection.filter : []
      n.sort()
      var i = t,
        o = {}
      return (
        n.forEach(function(e) {
          o[e] = i[e]
        }),
        r.connection.key + '(' + JSON.stringify(o) + ')'
      )
    }
    return r.connection.key
  }
  var a = e
  if (t) {
    var s = fastJsonStableStringify(t)
    a += '(' + s + ')'
  }
  return (
    r &&
      Object.keys(r).forEach(function(e) {
        ;-1 === KNOWN_DIRECTIVES.indexOf(e) &&
          (r[e] && Object.keys(r[e]).length ? (a += '@' + e + '(' + JSON.stringify(r[e]) + ')') : (a += '@' + e))
      }),
    a
  )
}
function argumentsObjectFromField(e, t) {
  if (e.arguments && e.arguments.length) {
    var r = {}
    return (
      e.arguments.forEach(function(e) {
        var n = e.name,
          i = e.value
        return valueToObjectRepresentation(r, n, i, t)
      }),
      r
    )
  }
  return null
}
function resultKeyNameFromField(e) {
  return e.alias ? e.alias.value : e.name.value
}
function isField(e) {
  return 'Field' === e.kind
}
function isInlineFragment(e) {
  return 'InlineFragment' === e.kind
}
function isIdValue(e) {
  return e && 'id' === e.type && 'boolean' == typeof e.generated
}
function toIdValue(e, t) {
  return (
    void 0 === t && (t = !1),
    __assign({ type: 'id', generated: t }, 'string' == typeof e ? { id: e, typename: void 0 } : e)
  )
}
function isJsonValue(e) {
  return null != e && 'object' == typeof e && 'json' === e.type
}
function getDirectiveInfoFromField(e, t) {
  if (e.directives && e.directives.length) {
    var r = {}
    return (
      e.directives.forEach(function(e) {
        r[e.name.value] = argumentsObjectFromField(e, t)
      }),
      r
    )
  }
  return null
}
function shouldInclude(e, t) {
  return (
    void 0 === t && (t = {}),
    getInclusionDirectives(e.directives).every(function(e) {
      var r = e.directive,
        n = e.ifArgument,
        i = !1
      return (
        'Variable' === n.value.kind
          ? ((i = t[n.value.name.value]),
            'production' === process.env.NODE_ENV
              ? invariant(void 0 !== i, 1)
              : invariant(void 0 !== i, 'Invalid variable referenced in @' + r.name.value + ' directive.'))
          : (i = n.value.value),
        'skip' === r.name.value ? !i : i
      )
    })
  )
}
function getDirectiveNames(e) {
  var t = []
  return (
    visit(e, {
      Directive: function(e) {
        t.push(e.name.value)
      }
    }),
    t
  )
}
function hasDirectives(e, t) {
  return getDirectiveNames(t).some(function(t) {
    return e.indexOf(t) > -1
  })
}
function hasClientExports(e) {
  return e && hasDirectives(['client'], e) && hasDirectives(['export'], e)
}
function isInclusionDirective(e) {
  var t = e.name.value
  return 'skip' === t || 'include' === t
}
function getInclusionDirectives(e) {
  return e
    ? e.filter(isInclusionDirective).map(function(e) {
        var t = e.arguments,
          r = e.name.value
        'production' === process.env.NODE_ENV
          ? invariant(t && 1 === t.length, 2)
          : invariant(t && 1 === t.length, 'Incorrect number of arguments for the @' + r + ' directive.')
        var n = t[0]
        'production' === process.env.NODE_ENV
          ? invariant(n.name && 'if' === n.name.value, 3)
          : invariant(n.name && 'if' === n.name.value, 'Invalid argument for the @' + r + ' directive.')
        var i = n.value
        return (
          'production' === process.env.NODE_ENV
            ? invariant(i && ('Variable' === i.kind || 'BooleanValue' === i.kind), 4)
            : invariant(
                i && ('Variable' === i.kind || 'BooleanValue' === i.kind),
                'Argument for the @' + r + ' directive must be a variable or a boolean value.'
              ),
          { directive: e, ifArgument: n }
        )
      })
    : []
}
function getFragmentQueryDocument(e, t) {
  var r = t,
    n = []
  return (
    e.definitions.forEach(function(e) {
      if ('OperationDefinition' === e.kind)
        throw 'production' === process.env.NODE_ENV
          ? new InvariantError(5)
          : new InvariantError(
              'Found a ' +
                e.operation +
                ' operation' +
                (e.name ? " named '" + e.name.value + "'" : '') +
                '. No operations are allowed when using a fragment as a query. Only fragments are allowed.'
            )
      'FragmentDefinition' === e.kind && n.push(e)
    }),
    void 0 === r &&
      ('production' === process.env.NODE_ENV
        ? invariant(1 === n.length, 6)
        : invariant(
            1 === n.length,
            'Found ' + n.length + ' fragments. `fragmentName` must be provided when there is not exactly 1 fragment.'
          ),
      (r = n[0].name.value)),
    __assign(__assign({}, e), {
      definitions: __spreadArrays(
        [
          {
            kind: 'OperationDefinition',
            operation: 'query',
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: r } }]
            }
          }
        ],
        e.definitions
      )
    })
  )
}
function assign(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r]
  return (
    t.forEach(function(t) {
      null != t &&
        Object.keys(t).forEach(function(r) {
          e[r] = t[r]
        })
    }),
    e
  )
}
function checkDocument(e) {
  'production' === process.env.NODE_ENV
    ? invariant(e && 'Document' === e.kind, 8)
    : invariant(
        e && 'Document' === e.kind,
        'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql'
      )
  var t = e.definitions
    .filter(function(e) {
      return 'FragmentDefinition' !== e.kind
    })
    .map(function(e) {
      if ('OperationDefinition' !== e.kind)
        throw 'production' === process.env.NODE_ENV
          ? new InvariantError(9)
          : new InvariantError('Schema type definitions not allowed in queries. Found: "' + e.kind + '"')
      return e
    })
  return (
    'production' === process.env.NODE_ENV
      ? invariant(t.length <= 1, 10)
      : invariant(t.length <= 1, 'Ambiguous GraphQL document: contains ' + t.length + ' operations'),
    e
  )
}
function getOperationDefinition(e) {
  return (
    checkDocument(e),
    e.definitions.filter(function(e) {
      return 'OperationDefinition' === e.kind
    })[0]
  )
}
function getOperationName(e) {
  return (
    e.definitions
      .filter(function(e) {
        return 'OperationDefinition' === e.kind && e.name
      })
      .map(function(e) {
        return e.name.value
      })[0] || null
  )
}
function getFragmentDefinitions(e) {
  return e.definitions.filter(function(e) {
    return 'FragmentDefinition' === e.kind
  })
}
function getQueryDefinition(e) {
  var t = getOperationDefinition(e)
  return (
    'production' === process.env.NODE_ENV
      ? invariant(t && 'query' === t.operation, 12)
      : invariant(t && 'query' === t.operation, 'Must contain a query definition.'),
    t
  )
}
function getFragmentDefinition(e) {
  'production' === process.env.NODE_ENV
    ? invariant('Document' === e.kind, 13)
    : invariant(
        'Document' === e.kind,
        'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql'
      ),
    'production' === process.env.NODE_ENV
      ? invariant(e.definitions.length <= 1, 14)
      : invariant(e.definitions.length <= 1, 'Fragment must have exactly one definition.')
  var t = e.definitions[0]
  return (
    'production' === process.env.NODE_ENV
      ? invariant('FragmentDefinition' === t.kind, 15)
      : invariant('FragmentDefinition' === t.kind, 'Must be a fragment definition.'),
    t
  )
}
function getMainDefinition(e) {
  var t
  checkDocument(e)
  for (var r = 0, n = e.definitions; r < n.length; r++) {
    var i = n[r]
    if ('OperationDefinition' === i.kind) {
      var o = i.operation
      if ('query' === o || 'mutation' === o || 'subscription' === o) return i
    }
    'FragmentDefinition' !== i.kind || t || (t = i)
  }
  if (t) return t
  throw 'production' === process.env.NODE_ENV
    ? new InvariantError(16)
    : new InvariantError('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.')
}
function createFragmentMap(e) {
  void 0 === e && (e = [])
  var t = {}
  return (
    e.forEach(function(e) {
      t[e.name.value] = e
    }),
    t
  )
}
function getDefaultValues(e) {
  if (e && e.variableDefinitions && e.variableDefinitions.length) {
    var t = e.variableDefinitions
      .filter(function(e) {
        return e.defaultValue
      })
      .map(function(e) {
        var t = e.variable,
          r = e.defaultValue,
          n = {}
        return valueToObjectRepresentation(n, t.name, r), n
      })
    return assign.apply(void 0, __spreadArrays([{}], t))
  }
  return {}
}
function filterInPlace(e, t, r) {
  var n = 0
  return (
    e.forEach(function(r, i) {
      t.call(this, r, i, e) && (e[n++] = r)
    }, r),
    (e.length = n),
    e
  )
}
var TYPENAME_FIELD = { kind: 'Field', name: { kind: 'Name', value: '__typename' } }
function isEmpty(e, t) {
  return e.selectionSet.selections.every(function(e) {
    return 'FragmentSpread' === e.kind && isEmpty(t[e.name.value], t)
  })
}
function nullIfDocIsEmpty(e) {
  return isEmpty(getOperationDefinition(e) || getFragmentDefinition(e), createFragmentMap(getFragmentDefinitions(e)))
    ? null
    : e
}
function getDirectiveMatcher(e) {
  return function(t) {
    return e.some(function(e) {
      return (e.name && e.name === t.name.value) || (e.test && e.test(t))
    })
  }
}
function removeDirectivesFromDocument(e, t) {
  var r = Object.create(null),
    n = [],
    i = Object.create(null),
    o = [],
    a = nullIfDocIsEmpty(
      visit(t, {
        Variable: {
          enter: function(e, t, n) {
            'VariableDefinition' !== n.kind && (r[e.name.value] = !0)
          }
        },
        Field: {
          enter: function(t) {
            if (
              e &&
              t.directives &&
              (e.some(function(e) {
                return e.remove
              }) &&
                t.directives &&
                t.directives.some(getDirectiveMatcher(e)))
            )
              return (
                t.arguments &&
                  t.arguments.forEach(function(e) {
                    'Variable' === e.value.kind && n.push({ name: e.value.name.value })
                  }),
                t.selectionSet &&
                  getAllFragmentSpreadsFromSelectionSet(t.selectionSet).forEach(function(e) {
                    o.push({ name: e.name.value })
                  }),
                null
              )
          }
        },
        FragmentSpread: {
          enter: function(e) {
            i[e.name.value] = !0
          }
        },
        Directive: {
          enter: function(t) {
            if (getDirectiveMatcher(e)(t)) return null
          }
        }
      })
    )
  return (
    a &&
      filterInPlace(n, function(e) {
        return !r[e.name]
      }).length &&
      (a = removeArgumentsFromDocument(n, a)),
    a &&
      filterInPlace(o, function(e) {
        return !i[e.name]
      }).length &&
      (a = removeFragmentSpreadFromDocument(o, a)),
    a
  )
}
function addTypenameToDocument(e) {
  return visit(checkDocument(e), {
    SelectionSet: {
      enter: function(e, t, r) {
        if (!r || 'OperationDefinition' !== r.kind) {
          var n = e.selections
          if (n)
            if (
              !n.some(function(e) {
                return isField(e) && ('__typename' === e.name.value || 0 === e.name.value.lastIndexOf('__', 0))
              })
            ) {
              var i = r
              if (
                !(
                  isField(i) &&
                  i.directives &&
                  i.directives.some(function(e) {
                    return 'export' === e.name.value
                  })
                )
              )
                return __assign(__assign({}, e), { selections: __spreadArrays(n, [TYPENAME_FIELD]) })
            }
        }
      }
    }
  })
}
var connectionRemoveConfig = {
  test: function(e) {
    var t = 'connection' === e.name.value
    return (
      t &&
        ((e.arguments &&
          e.arguments.some(function(e) {
            return 'key' === e.name.value
          })) ||
          'production' === process.env.NODE_ENV ||
          invariant.warn(
            'Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key.'
          )),
      t
    )
  }
}
function removeConnectionDirectiveFromDocument(e) {
  return removeDirectivesFromDocument([connectionRemoveConfig], checkDocument(e))
}
function getArgumentMatcher(e) {
  return function(t) {
    return e.some(function(e) {
      return (
        t.value &&
        'Variable' === t.value.kind &&
        t.value.name &&
        (e.name === t.value.name.value || (e.test && e.test(t)))
      )
    })
  }
}
function removeArgumentsFromDocument(e, t) {
  var r = getArgumentMatcher(e)
  return nullIfDocIsEmpty(
    visit(t, {
      OperationDefinition: {
        enter: function(t) {
          return __assign(__assign({}, t), {
            variableDefinitions: t.variableDefinitions.filter(function(t) {
              return !e.some(function(e) {
                return e.name === t.variable.name.value
              })
            })
          })
        }
      },
      Field: {
        enter: function(t) {
          if (
            e.some(function(e) {
              return e.remove
            })
          ) {
            var n = 0
            if (
              (t.arguments.forEach(function(e) {
                r(e) && (n += 1)
              }),
              1 === n)
            )
              return null
          }
        }
      },
      Argument: {
        enter: function(e) {
          if (r(e)) return null
        }
      }
    })
  )
}
function removeFragmentSpreadFromDocument(e, t) {
  function r(t) {
    if (
      e.some(function(e) {
        return e.name === t.name.value
      })
    )
      return null
  }
  return nullIfDocIsEmpty(visit(t, { FragmentSpread: { enter: r }, FragmentDefinition: { enter: r } }))
}
function getAllFragmentSpreadsFromSelectionSet(e) {
  var t = []
  return (
    e.selections.forEach(function(e) {
      ;(isField(e) || isInlineFragment(e)) && e.selectionSet
        ? getAllFragmentSpreadsFromSelectionSet(e.selectionSet).forEach(function(e) {
            return t.push(e)
          })
        : 'FragmentSpread' === e.kind && t.push(e)
    }),
    t
  )
}
function buildQueryFromSelectionSet(e) {
  return 'query' === getMainDefinition(e).operation
    ? e
    : visit(e, {
        OperationDefinition: {
          enter: function(e) {
            return __assign(__assign({}, e), { operation: 'query' })
          }
        }
      })
}
function removeClientSetsFromDocument(e) {
  checkDocument(e)
  var t = removeDirectivesFromDocument(
    [
      {
        test: function(e) {
          return 'client' === e.name.value
        },
        remove: !0
      }
    ],
    e
  )
  return (
    t &&
      (t = visit(t, {
        FragmentDefinition: {
          enter: function(e) {
            if (
              e.selectionSet &&
              e.selectionSet.selections.every(function(e) {
                return isField(e) && '__typename' === e.name.value
              })
            )
              return null
          }
        }
      })),
    t
  )
}
var canUseWeakMap =
    'function' == typeof WeakMap && !('object' == typeof navigator && 'ReactNative' === navigator.product),
  toString$1 = Object.prototype.toString
function cloneDeep(e) {
  return cloneDeepHelper(e, new Map())
}
function cloneDeepHelper(e, t) {
  switch (toString$1.call(e)) {
    case '[object Array]':
      if (t.has(e)) return t.get(e)
      var r = e.slice(0)
      return (
        t.set(e, r),
        r.forEach(function(e, n) {
          r[n] = cloneDeepHelper(e, t)
        }),
        r
      )
    case '[object Object]':
      if (t.has(e)) return t.get(e)
      var n = Object.create(Object.getPrototypeOf(e))
      return (
        t.set(e, n),
        Object.keys(e).forEach(function(r) {
          n[r] = cloneDeepHelper(e[r], t)
        }),
        n
      )
    default:
      return e
  }
}
function getEnv() {
  return 'undefined' != typeof process && process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
}
function isEnv(e) {
  return getEnv() === e
}
function isProduction() {
  return !0 === isEnv('production')
}
function isDevelopment() {
  return !0 === isEnv('development')
}
function isTest() {
  return !0 === isEnv('test')
}
function tryFunctionOrLogError(e) {
  try {
    return e()
  } catch (e) {
    console.error && console.error(e)
  }
}
function graphQLResultHasError(e) {
  return e.errors && e.errors.length
}
function deepFreeze(e) {
  return (
    Object.freeze(e),
    Object.getOwnPropertyNames(e).forEach(function(t) {
      null === e[t] ||
        ('object' != typeof e[t] && 'function' != typeof e[t]) ||
        Object.isFrozen(e[t]) ||
        deepFreeze(e[t])
    }),
    e
  )
}
function maybeDeepFreeze(e) {
  if ((isDevelopment() || isTest()) && !('function' == typeof Symbol && 'string' == typeof Symbol('')))
    return deepFreeze(e)
  return e
}
var hasOwnProperty$2 = Object.prototype.hasOwnProperty
function mergeDeep() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
  return mergeDeepArray(e)
}
function mergeDeepArray(e) {
  var t = e[0] || {},
    r = e.length
  if (r > 1) {
    var n = []
    t = shallowCopyForMerge(t, n)
    for (var i = 1; i < r; ++i) t = mergeHelper(t, e[i], n)
  }
  return t
}
function isObject(e) {
  return null !== e && 'object' == typeof e
}
function mergeHelper(e, t, r) {
  return isObject(t) && isObject(e)
    ? (Object.isExtensible && !Object.isExtensible(e) && (e = shallowCopyForMerge(e, r)),
      Object.keys(t).forEach(function(n) {
        var i = t[n]
        if (hasOwnProperty$2.call(e, n)) {
          var o = e[n]
          i !== o && (e[n] = mergeHelper(shallowCopyForMerge(o, r), i, r))
        } else e[n] = i
      }),
      e)
    : t
}
function shallowCopyForMerge(e, t) {
  return (
    null !== e &&
      'object' == typeof e &&
      t.indexOf(e) < 0 &&
      ((e = Array.isArray(e) ? e.slice(0) : __assign({ __proto__: Object.getPrototypeOf(e) }, e)), t.push(e)),
    e
  )
}
var Observable_1 = createCommonjsModule(function(e, t) {
  function r(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
  }
  function n(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r]
      ;(n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        'value' in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n)
    }
  }
  function i(e, t, r) {
    return t && n(e.prototype, t), r && n(e, r), e
  }
  Object.defineProperty(t, '__esModule', { value: !0 }), (t.Observable = void 0)
  var o = function() {
      return 'function' == typeof Symbol
    },
    a = function(e) {
      return o() && Boolean(Symbol[e])
    },
    s = function(e) {
      return a(e) ? Symbol[e] : '@@' + e
    }
  o() && !a('observable') && (Symbol.observable = Symbol('observable'))
  var u = s('iterator'),
    c = s('observable'),
    l = s('species')
  function p(e, t) {
    var r = e[t]
    if (null != r) {
      if ('function' != typeof r) throw new TypeError(r + ' is not a function')
      return r
    }
  }
  function f(e) {
    var t = e.constructor
    return void 0 !== t && null === (t = t[l]) && (t = void 0), void 0 !== t ? t : O
  }
  function d(e) {
    return e instanceof O
  }
  function h(e) {
    h.log
      ? h.log(e)
      : setTimeout(function() {
          throw e
        })
  }
  function v(e) {
    Promise.resolve().then(function() {
      try {
        e()
      } catch (e) {
        h(e)
      }
    })
  }
  function y(e) {
    var t = e._cleanup
    if (void 0 !== t && ((e._cleanup = void 0), t))
      try {
        if ('function' == typeof t) t()
        else {
          var r = p(t, 'unsubscribe')
          r && r.call(t)
        }
      } catch (e) {
        h(e)
      }
  }
  function m(e) {
    ;(e._observer = void 0), (e._queue = void 0), (e._state = 'closed')
  }
  function b(e, t, r) {
    e._state = 'running'
    var n = e._observer
    try {
      var i = p(n, t)
      switch (t) {
        case 'next':
          i && i.call(n, r)
          break
        case 'error':
          if ((m(e), !i)) throw r
          i.call(n, r)
          break
        case 'complete':
          m(e), i && i.call(n)
      }
    } catch (e) {
      h(e)
    }
    'closed' === e._state ? y(e) : 'running' === e._state && (e._state = 'ready')
  }
  function g(e, t, r) {
    if ('closed' !== e._state) {
      if ('buffering' !== e._state)
        return 'ready' !== e._state
          ? ((e._state = 'buffering'),
            (e._queue = [{ type: t, value: r }]),
            void v(function() {
              return (function(e) {
                var t = e._queue
                if (t) {
                  ;(e._queue = void 0), (e._state = 'ready')
                  for (var r = 0; r < t.length && (b(e, t[r].type, t[r].value), 'closed' !== e._state); ++r);
                }
              })(e)
            }))
          : void b(e, t, r)
      e._queue.push({ type: t, value: r })
    }
  }
  var E = (function() {
      function e(t, n) {
        r(this, e),
          (this._cleanup = void 0),
          (this._observer = t),
          (this._queue = void 0),
          (this._state = 'initializing')
        var i = new _(this)
        try {
          this._cleanup = n.call(void 0, i)
        } catch (e) {
          i.error(e)
        }
        'initializing' === this._state && (this._state = 'ready')
      }
      return (
        i(e, [
          {
            key: 'unsubscribe',
            value: function() {
              'closed' !== this._state && (m(this), y(this))
            }
          },
          {
            key: 'closed',
            get: function() {
              return 'closed' === this._state
            }
          }
        ]),
        e
      )
    })(),
    _ = (function() {
      function e(t) {
        r(this, e), (this._subscription = t)
      }
      return (
        i(e, [
          {
            key: 'next',
            value: function(e) {
              g(this._subscription, 'next', e)
            }
          },
          {
            key: 'error',
            value: function(e) {
              g(this._subscription, 'error', e)
            }
          },
          {
            key: 'complete',
            value: function() {
              g(this._subscription, 'complete')
            }
          },
          {
            key: 'closed',
            get: function() {
              return 'closed' === this._subscription._state
            }
          }
        ]),
        e
      )
    })(),
    O = (function() {
      function e(t) {
        if ((r(this, e), !(this instanceof e))) throw new TypeError('Observable cannot be called as a function')
        if ('function' != typeof t) throw new TypeError('Observable initializer must be a function')
        this._subscriber = t
      }
      return (
        i(
          e,
          [
            {
              key: 'subscribe',
              value: function(e) {
                return (
                  ('object' == typeof e && null !== e) ||
                    (e = { next: e, error: arguments[1], complete: arguments[2] }),
                  new E(e, this._subscriber)
                )
              }
            },
            {
              key: 'forEach',
              value: function(e) {
                var t = this
                return new Promise(function(r, n) {
                  if ('function' == typeof e)
                    var i = t.subscribe({
                      next: function(t) {
                        try {
                          e(t, o)
                        } catch (e) {
                          n(e), i.unsubscribe()
                        }
                      },
                      error: n,
                      complete: r
                    })
                  else n(new TypeError(e + ' is not a function'))
                  function o() {
                    i.unsubscribe(), r()
                  }
                })
              }
            },
            {
              key: 'map',
              value: function(e) {
                var t = this
                if ('function' != typeof e) throw new TypeError(e + ' is not a function')
                return new (f(this))(function(r) {
                  return t.subscribe({
                    next: function(t) {
                      try {
                        t = e(t)
                      } catch (e) {
                        return r.error(e)
                      }
                      r.next(t)
                    },
                    error: function(e) {
                      r.error(e)
                    },
                    complete: function() {
                      r.complete()
                    }
                  })
                })
              }
            },
            {
              key: 'filter',
              value: function(e) {
                var t = this
                if ('function' != typeof e) throw new TypeError(e + ' is not a function')
                return new (f(this))(function(r) {
                  return t.subscribe({
                    next: function(t) {
                      try {
                        if (!e(t)) return
                      } catch (e) {
                        return r.error(e)
                      }
                      r.next(t)
                    },
                    error: function(e) {
                      r.error(e)
                    },
                    complete: function() {
                      r.complete()
                    }
                  })
                })
              }
            },
            {
              key: 'reduce',
              value: function(e) {
                var t = this
                if ('function' != typeof e) throw new TypeError(e + ' is not a function')
                var r = f(this),
                  n = arguments.length > 1,
                  i = !1,
                  o = arguments[1],
                  a = o
                return new r(function(r) {
                  return t.subscribe({
                    next: function(t) {
                      var o = !i
                      if (((i = !0), !o || n))
                        try {
                          a = e(a, t)
                        } catch (e) {
                          return r.error(e)
                        }
                      else a = t
                    },
                    error: function(e) {
                      r.error(e)
                    },
                    complete: function() {
                      if (!i && !n) return r.error(new TypeError('Cannot reduce an empty sequence'))
                      r.next(a), r.complete()
                    }
                  })
                })
              }
            },
            {
              key: 'concat',
              value: function() {
                for (var e = this, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n]
                var i = f(this)
                return new i(function(t) {
                  var n,
                    o = 0
                  return (
                    (function e(a) {
                      n = a.subscribe({
                        next: function(e) {
                          t.next(e)
                        },
                        error: function(e) {
                          t.error(e)
                        },
                        complete: function() {
                          o === r.length ? ((n = void 0), t.complete()) : e(i.from(r[o++]))
                        }
                      })
                    })(e),
                    function() {
                      n && (n.unsubscribe(), (n = void 0))
                    }
                  )
                })
              }
            },
            {
              key: 'flatMap',
              value: function(e) {
                var t = this
                if ('function' != typeof e) throw new TypeError(e + ' is not a function')
                var r = f(this)
                return new r(function(n) {
                  var i = [],
                    o = t.subscribe({
                      next: function(t) {
                        if (e)
                          try {
                            t = e(t)
                          } catch (e) {
                            return n.error(e)
                          }
                        var o = r.from(t).subscribe({
                          next: function(e) {
                            n.next(e)
                          },
                          error: function(e) {
                            n.error(e)
                          },
                          complete: function() {
                            var e = i.indexOf(o)
                            e >= 0 && i.splice(e, 1), a()
                          }
                        })
                        i.push(o)
                      },
                      error: function(e) {
                        n.error(e)
                      },
                      complete: function() {
                        a()
                      }
                    })
                  function a() {
                    o.closed && 0 === i.length && n.complete()
                  }
                  return function() {
                    i.forEach(function(e) {
                      return e.unsubscribe()
                    }),
                      o.unsubscribe()
                  }
                })
              }
            },
            {
              key: c,
              value: function() {
                return this
              }
            }
          ],
          [
            {
              key: 'from',
              value: function(t) {
                var r = 'function' == typeof this ? this : e
                if (null == t) throw new TypeError(t + ' is not an object')
                var n = p(t, c)
                if (n) {
                  var i = n.call(t)
                  if (Object(i) !== i) throw new TypeError(i + ' is not an object')
                  return d(i) && i.constructor === r
                    ? i
                    : new r(function(e) {
                        return i.subscribe(e)
                      })
                }
                if (a('iterator') && (n = p(t, u)))
                  return new r(function(e) {
                    v(function() {
                      if (!e.closed) {
                        var r = !0,
                          i = !1,
                          o = void 0
                        try {
                          for (var a, s = n.call(t)[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                            var u = a.value
                            if ((e.next(u), e.closed)) return
                          }
                        } catch (e) {
                          ;(i = !0), (o = e)
                        } finally {
                          try {
                            r || null == s.return || s.return()
                          } finally {
                            if (i) throw o
                          }
                        }
                        e.complete()
                      }
                    })
                  })
                if (Array.isArray(t))
                  return new r(function(e) {
                    v(function() {
                      if (!e.closed) {
                        for (var r = 0; r < t.length; ++r) if ((e.next(t[r]), e.closed)) return
                        e.complete()
                      }
                    })
                  })
                throw new TypeError(t + ' is not observable')
              }
            },
            {
              key: 'of',
              value: function() {
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n]
                var i = 'function' == typeof this ? this : e
                return new i(function(e) {
                  v(function() {
                    if (!e.closed) {
                      for (var t = 0; t < r.length; ++t) if ((e.next(r[t]), e.closed)) return
                      e.complete()
                    }
                  })
                })
              }
            },
            {
              key: l,
              get: function() {
                return this
              }
            }
          ]
        ),
        e
      )
    })()
  ;(t.Observable = O),
    o() &&
      Object.defineProperty(O, Symbol('extensions'), { value: { symbol: c, hostReportError: h }, configurable: !0 })
})
unwrapExports(Observable_1)
var Observable_2 = Observable_1.Observable,
  zenObservable = Observable_1.Observable,
  Observable = zenObservable
function validateOperation(e) {
  for (
    var t = ['query', 'operationName', 'variables', 'extensions', 'context'], r = 0, n = Object.keys(e);
    r < n.length;
    r++
  ) {
    var i = n[r]
    if (t.indexOf(i) < 0)
      throw 'production' === process.env.NODE_ENV ? new InvariantError(2) : new InvariantError('illegal argument: ' + i)
  }
  return e
}
var LinkError = (function(e) {
  function t(t, r) {
    var n = e.call(this, t) || this
    return (n.link = r), n
  }
  return __extends(t, e), t
})(Error)
function isTerminating(e) {
  return e.request.length <= 1
}
function fromError(e) {
  return new Observable(function(t) {
    t.error(e)
  })
}
function transformOperation(e) {
  var t = {
    variables: e.variables || {},
    extensions: e.extensions || {},
    operationName: e.operationName,
    query: e.query
  }
  return t.operationName || (t.operationName = 'string' != typeof t.query ? getOperationName(t.query) : ''), t
}
function createOperation(e, t) {
  var r = __assign({}, e)
  return (
    Object.defineProperty(t, 'setContext', {
      enumerable: !1,
      value: function(e) {
        r = __assign({}, r, 'function' == typeof e ? e(r) : e)
      }
    }),
    Object.defineProperty(t, 'getContext', {
      enumerable: !1,
      value: function() {
        return __assign({}, r)
      }
    }),
    Object.defineProperty(t, 'toKey', {
      enumerable: !1,
      value: function() {
        return getKey(t)
      }
    }),
    t
  )
}
function getKey(e) {
  var t = e.query,
    r = e.variables,
    n = e.operationName
  return JSON.stringify([n, t, r])
}
function passthrough(e, t) {
  return t ? t(e) : Observable.of()
}
function toLink(e) {
  return 'function' == typeof e ? new ApolloLink(e) : e
}
function empty() {
  return new ApolloLink(function() {
    return Observable.of()
  })
}
function from(e) {
  return 0 === e.length
    ? empty()
    : e.map(toLink).reduce(function(e, t) {
        return e.concat(t)
      })
}
function split(e, t, r) {
  var n = toLink(t),
    i = toLink(r || new ApolloLink(passthrough))
  return isTerminating(n) && isTerminating(i)
    ? new ApolloLink(function(t) {
        return e(t) ? n.request(t) || Observable.of() : i.request(t) || Observable.of()
      })
    : new ApolloLink(function(t, r) {
        return e(t) ? n.request(t, r) || Observable.of() : i.request(t, r) || Observable.of()
      })
}
var root,
  concat = function(e, t) {
    var r = toLink(e)
    if (isTerminating(r))
      return (
        'production' === process.env.NODE_ENV ||
          invariant.warn(new LinkError('You are calling concat on a terminating link, which will have no effect', r)),
        r
      )
    var n = toLink(t)
    return isTerminating(n)
      ? new ApolloLink(function(e) {
          return (
            r.request(e, function(e) {
              return n.request(e) || Observable.of()
            }) || Observable.of()
          )
        })
      : new ApolloLink(function(e, t) {
          return (
            r.request(e, function(e) {
              return n.request(e, t) || Observable.of()
            }) || Observable.of()
          )
        })
  },
  ApolloLink = (function() {
    function e(e) {
      e && (this.request = e)
    }
    return (
      (e.prototype.split = function(t, r, n) {
        return this.concat(split(t, r, n || new e(passthrough)))
      }),
      (e.prototype.concat = function(e) {
        return concat(this, e)
      }),
      (e.prototype.request = function(e, t) {
        throw 'production' === process.env.NODE_ENV
          ? new InvariantError(1)
          : new InvariantError('request is not implemented')
      }),
      (e.empty = empty),
      (e.from = from),
      (e.split = split),
      (e.execute = execute),
      e
    )
  })()
function execute(e, t) {
  return e.request(createOperation(t.context, transformOperation(validateOperation(t)))) || Observable.of()
}
function symbolObservablePonyfill(e) {
  var t,
    r = e.Symbol
  return (
    'function' == typeof r
      ? r.observable
        ? (t = r.observable)
        : ((t = r('observable')), (r.observable = t))
      : (t = '@@observable'),
    t
  )
}
var NetworkStatus,
  result = symbolObservablePonyfill(
    (root =
      'undefined' != typeof self
        ? self
        : 'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
        ? global
        : 'undefined' != typeof module
        ? module
        : Function('return this')())
  )
function isNetworkRequestInFlight(e) {
  return e < 7
}
!(function(e) {
  ;(e[(e.loading = 1)] = 'loading'),
    (e[(e.setVariables = 2)] = 'setVariables'),
    (e[(e.fetchMore = 3)] = 'fetchMore'),
    (e[(e.refetch = 4)] = 'refetch'),
    (e[(e.poll = 6)] = 'poll'),
    (e[(e.ready = 7)] = 'ready'),
    (e[(e.error = 8)] = 'error')
})(NetworkStatus || (NetworkStatus = {}))
var Observable$1 = (function(e) {
  function t() {
    return (null !== e && e.apply(this, arguments)) || this
  }
  return (
    __extends(t, e),
    (t.prototype[result] = function() {
      return this
    }),
    (t.prototype['@@observable'] = function() {
      return this
    }),
    t
  )
})(Observable)
function isNonEmptyArray(e) {
  return Array.isArray(e) && e.length > 0
}
function isApolloError(e) {
  return e.hasOwnProperty('graphQLErrors')
}
var FetchType,
  generateErrorMessage = function(e) {
    var t = ''
    return (
      isNonEmptyArray(e.graphQLErrors) &&
        e.graphQLErrors.forEach(function(e) {
          var r = e ? e.message : 'Error message not found.'
          t += 'GraphQL error: ' + r + '\n'
        }),
      e.networkError && (t += 'Network error: ' + e.networkError.message + '\n'),
      (t = t.replace(/\n$/, ''))
    )
  },
  ApolloError = (function(e) {
    function t(r) {
      var n = r.graphQLErrors,
        i = r.networkError,
        o = r.errorMessage,
        a = r.extraInfo,
        s = e.call(this, o) || this
      return (
        (s.graphQLErrors = n || []),
        (s.networkError = i || null),
        (s.message = o || generateErrorMessage(s)),
        (s.extraInfo = a),
        (s.__proto__ = t.prototype),
        s
      )
    }
    return __extends(t, e), t
  })(Error)
!(function(e) {
  ;(e[(e.normal = 1)] = 'normal'), (e[(e.refetch = 2)] = 'refetch'), (e[(e.poll = 3)] = 'poll')
})(FetchType || (FetchType = {}))
var hasError = function(e, t) {
    return void 0 === t && (t = 'none'), e && (e.networkError || ('none' === t && isNonEmptyArray(e.graphQLErrors)))
  },
  ObservableQuery = (function(e) {
    function t(t) {
      var r = t.queryManager,
        n = t.options,
        i = t.shouldSubscribe,
        o = void 0 === i || i,
        a =
          e.call(this, function(e) {
            return a.onSubscribe(e)
          }) || this
      ;(a.observers = new Set()),
        (a.subscriptions = new Set()),
        (a.isTornDown = !1),
        (a.options = n),
        (a.variables = n.variables || {}),
        (a.queryId = r.generateQueryId()),
        (a.shouldSubscribe = o)
      var s = getOperationDefinition(n.query)
      return (a.queryName = s && s.name && s.name.value), (a.queryManager = r), a
    }
    return (
      __extends(t, e),
      (t.prototype.result = function() {
        var e = this
        return new Promise(function(t, r) {
          var n = {
              next: function(r) {
                t(r),
                  e.observers.delete(n),
                  e.observers.size || e.queryManager.removeQuery(e.queryId),
                  setTimeout(function() {
                    i.unsubscribe()
                  }, 0)
              },
              error: r
            },
            i = e.subscribe(n)
        })
      }),
      (t.prototype.currentResult = function() {
        var e = this.getCurrentResult()
        return void 0 === e.data && (e.data = {}), e
      }),
      (t.prototype.getCurrentResult = function() {
        if (this.isTornDown) {
          var e = this.lastResult
          return {
            data: (!this.lastError && e && e.data) || void 0,
            error: this.lastError,
            loading: !1,
            networkStatus: NetworkStatus.error
          }
        }
        var t,
          r = this.queryManager.getCurrentQueryResult(this),
          n = r.data,
          i = r.partial,
          o = this.queryManager.queryStore.get(this.queryId),
          a = this.options.fetchPolicy,
          s = 'network-only' === a || 'no-cache' === a
        if (o) {
          var u = o.networkStatus
          if (hasError(o, this.options.errorPolicy))
            return {
              data: void 0,
              loading: !1,
              networkStatus: u,
              error: new ApolloError({ graphQLErrors: o.graphQLErrors, networkError: o.networkError })
            }
          o.variables &&
            ((this.options.variables = __assign(__assign({}, this.options.variables), o.variables)),
            (this.variables = this.options.variables)),
            (t = { data: n, loading: isNetworkRequestInFlight(u), networkStatus: u }),
            o.graphQLErrors && 'all' === this.options.errorPolicy && (t.errors = o.graphQLErrors)
        } else {
          var c = s || (i && 'cache-only' !== a)
          t = { data: n, loading: c, networkStatus: c ? NetworkStatus.loading : NetworkStatus.ready }
        }
        return (
          i || this.updateLastResult(__assign(__assign({}, t), { stale: !1 })),
          __assign(__assign({}, t), { partial: i })
        )
      }),
      (t.prototype.isDifferentFromLastResult = function(e) {
        var t = this.lastResultSnapshot
        return !(t && e && t.networkStatus === e.networkStatus && t.stale === e.stale && equal(t.data, e.data))
      }),
      (t.prototype.getLastResult = function() {
        return this.lastResult
      }),
      (t.prototype.getLastError = function() {
        return this.lastError
      }),
      (t.prototype.resetLastResults = function() {
        delete this.lastResult, delete this.lastResultSnapshot, delete this.lastError, (this.isTornDown = !1)
      }),
      (t.prototype.resetQueryStoreErrors = function() {
        var e = this.queryManager.queryStore.get(this.queryId)
        e && ((e.networkError = null), (e.graphQLErrors = []))
      }),
      (t.prototype.refetch = function(e) {
        var t = this.options.fetchPolicy
        return 'cache-only' === t
          ? Promise.reject(
              'production' === process.env.NODE_ENV
                ? new InvariantError(3)
                : new InvariantError('cache-only fetchPolicy option should not be used together with query refetch.')
            )
          : ('no-cache' !== t && 'cache-and-network' !== t && (t = 'network-only'),
            equal(this.variables, e) || (this.variables = __assign(__assign({}, this.variables), e)),
            equal(this.options.variables, this.variables) ||
              (this.options.variables = __assign(__assign({}, this.options.variables), this.variables)),
            this.queryManager.fetchQuery(
              this.queryId,
              __assign(__assign({}, this.options), { fetchPolicy: t }),
              FetchType.refetch
            ))
      }),
      (t.prototype.fetchMore = function(e) {
        var t = this
        'production' === process.env.NODE_ENV
          ? invariant(e.updateQuery, 4)
          : invariant(
              e.updateQuery,
              'updateQuery option is required. This function defines how to update the query data with the new results.'
            )
        var r = __assign(
            __assign(
              {},
              e.query
                ? e
                : __assign(__assign(__assign({}, this.options), e), {
                    variables: __assign(__assign({}, this.variables), e.variables)
                  })
            ),
            { fetchPolicy: 'network-only' }
          ),
          n = this.queryManager.generateQueryId()
        return this.queryManager.fetchQuery(n, r, FetchType.normal, this.queryId).then(
          function(i) {
            return (
              t.updateQuery(function(t) {
                return e.updateQuery(t, { fetchMoreResult: i.data, variables: r.variables })
              }),
              t.queryManager.stopQuery(n),
              i
            )
          },
          function(e) {
            throw (t.queryManager.stopQuery(n), e)
          }
        )
      }),
      (t.prototype.subscribeToMore = function(e) {
        var t = this,
          r = this.queryManager.startGraphQLSubscription({ query: e.document, variables: e.variables }).subscribe({
            next: function(r) {
              var n = e.updateQuery
              n &&
                t.updateQuery(function(e, t) {
                  var i = t.variables
                  return n(e, { subscriptionData: r, variables: i })
                })
            },
            error: function(t) {
              e.onError
                ? e.onError(t)
                : 'production' === process.env.NODE_ENV || invariant.error('Unhandled GraphQL subscription error', t)
            }
          })
        return (
          this.subscriptions.add(r),
          function() {
            t.subscriptions.delete(r) && r.unsubscribe()
          }
        )
      }),
      (t.prototype.setOptions = function(e) {
        var t = this.options.fetchPolicy
        ;(this.options = __assign(__assign({}, this.options), e)),
          e.pollInterval ? this.startPolling(e.pollInterval) : 0 === e.pollInterval && this.stopPolling()
        var r = e.fetchPolicy
        return this.setVariables(
          this.options.variables,
          t !== r && ('cache-only' === t || 'standby' === t || 'network-only' === r),
          e.fetchResults
        )
      }),
      (t.prototype.setVariables = function(e, t, r) {
        return (
          void 0 === t && (t = !1),
          void 0 === r && (r = !0),
          (this.isTornDown = !1),
          (e = e || this.variables),
          !t && equal(e, this.variables)
            ? this.observers.size && r
              ? this.result()
              : Promise.resolve()
            : ((this.variables = this.options.variables = e),
              this.observers.size ? this.queryManager.fetchQuery(this.queryId, this.options) : Promise.resolve())
        )
      }),
      (t.prototype.updateQuery = function(e) {
        var t = this.queryManager,
          r = t.getQueryWithPreviousResult(this.queryId),
          n = r.previousResult,
          i = r.variables,
          o = r.document,
          a = tryFunctionOrLogError(function() {
            return e(n, { variables: i })
          })
        a && (t.dataStore.markUpdateQueryResult(o, i, a), t.broadcastQueries())
      }),
      (t.prototype.stopPolling = function() {
        this.queryManager.stopPollingQuery(this.queryId), (this.options.pollInterval = void 0)
      }),
      (t.prototype.startPolling = function(e) {
        assertNotCacheFirstOrOnly(this),
          (this.options.pollInterval = e),
          this.queryManager.startPollingQuery(this.options, this.queryId)
      }),
      (t.prototype.updateLastResult = function(e) {
        var t = this.lastResult
        return (
          (this.lastResult = e),
          (this.lastResultSnapshot = this.queryManager.assumeImmutableResults ? e : cloneDeep(e)),
          t
        )
      }),
      (t.prototype.onSubscribe = function(e) {
        var t = this
        try {
          var r = e._subscription._observer
          r && !r.error && (r.error = defaultSubscriptionObserverErrorCallback)
        } catch (e) {}
        var n = !this.observers.size
        return (
          this.observers.add(e),
          e.next && this.lastResult && e.next(this.lastResult),
          e.error && this.lastError && e.error(this.lastError),
          n && this.setUpQuery(),
          function() {
            t.observers.delete(e) && !t.observers.size && t.tearDownQuery()
          }
        )
      }),
      (t.prototype.setUpQuery = function() {
        var e = this,
          t = this.queryManager,
          r = this.queryId
        this.shouldSubscribe && t.addObservableQuery(r, this),
          this.options.pollInterval && (assertNotCacheFirstOrOnly(this), t.startPollingQuery(this.options, r))
        var n = function(t) {
          e.updateLastResult(
            __assign(__assign({}, e.lastResult), {
              errors: t.graphQLErrors,
              networkStatus: NetworkStatus.error,
              loading: !1
            })
          ),
            iterateObserversSafely(e.observers, 'error', (e.lastError = t))
        }
        t.observeQuery(r, this.options, {
          next: function(r) {
            if (e.lastError || e.isDifferentFromLastResult(r)) {
              var n = e.updateLastResult(r),
                i = e.options,
                o = i.query,
                a = i.variables,
                s = i.fetchPolicy
              t.transform(o).hasClientExports
                ? t
                    .getLocalState()
                    .addExportedVariables(o, a)
                    .then(function(i) {
                      var a = e.variables
                      ;(e.variables = e.options.variables = i),
                        !r.loading && n && 'cache-only' !== s && t.transform(o).serverQuery && !equal(a, i)
                          ? e.refetch()
                          : iterateObserversSafely(e.observers, 'next', r)
                    })
                : iterateObserversSafely(e.observers, 'next', r)
            }
          },
          error: n
        }).catch(n)
      }),
      (t.prototype.tearDownQuery = function() {
        var e = this.queryManager
        ;(this.isTornDown = !0),
          e.stopPollingQuery(this.queryId),
          this.subscriptions.forEach(function(e) {
            return e.unsubscribe()
          }),
          this.subscriptions.clear(),
          e.removeObservableQuery(this.queryId),
          e.stopQuery(this.queryId),
          this.observers.clear()
      }),
      t
    )
  })(Observable$1)
function defaultSubscriptionObserverErrorCallback(e) {
  'production' === process.env.NODE_ENV || invariant.error('Unhandled error', e.message, e.stack)
}
function iterateObserversSafely(e, t, r) {
  var n = []
  e.forEach(function(e) {
    return e[t] && n.push(e)
  }),
    n.forEach(function(e) {
      return e[t](r)
    })
}
function assertNotCacheFirstOrOnly(e) {
  var t = e.options.fetchPolicy
  'production' === process.env.NODE_ENV
    ? invariant('cache-first' !== t && 'cache-only' !== t, 5)
    : invariant(
        'cache-first' !== t && 'cache-only' !== t,
        'Queries that specify the cache-first and cache-only fetchPolicies cannot also be polling queries.'
      )
}
var MutationStore = (function() {
    function e() {
      this.store = {}
    }
    return (
      (e.prototype.getStore = function() {
        return this.store
      }),
      (e.prototype.get = function(e) {
        return this.store[e]
      }),
      (e.prototype.initMutation = function(e, t, r) {
        this.store[e] = { mutation: t, variables: r || {}, loading: !0, error: null }
      }),
      (e.prototype.markMutationError = function(e, t) {
        var r = this.store[e]
        r && ((r.loading = !1), (r.error = t))
      }),
      (e.prototype.markMutationResult = function(e) {
        var t = this.store[e]
        t && ((t.loading = !1), (t.error = null))
      }),
      (e.prototype.reset = function() {
        this.store = {}
      }),
      e
    )
  })(),
  QueryStore = (function() {
    function e() {
      this.store = {}
    }
    return (
      (e.prototype.getStore = function() {
        return this.store
      }),
      (e.prototype.get = function(e) {
        return this.store[e]
      }),
      (e.prototype.initQuery = function(e) {
        var t = this.store[e.queryId]
        'production' === process.env.NODE_ENV
          ? invariant(!t || t.document === e.document || equal(t.document, e.document), 19)
          : invariant(
              !t || t.document === e.document || equal(t.document, e.document),
              'Internal Error: may not update existing query string in store'
            )
        var r,
          n = !1,
          i = null
        e.storePreviousVariables &&
          t &&
          t.networkStatus !== NetworkStatus.loading &&
          (equal(t.variables, e.variables) || ((n = !0), (i = t.variables))),
          (r = n
            ? NetworkStatus.setVariables
            : e.isPoll
            ? NetworkStatus.poll
            : e.isRefetch
            ? NetworkStatus.refetch
            : NetworkStatus.loading)
        var o = []
        t && t.graphQLErrors && (o = t.graphQLErrors),
          (this.store[e.queryId] = {
            document: e.document,
            variables: e.variables,
            previousVariables: i,
            networkError: null,
            graphQLErrors: o,
            networkStatus: r,
            metadata: e.metadata
          }),
          'string' == typeof e.fetchMoreForQueryId &&
            this.store[e.fetchMoreForQueryId] &&
            (this.store[e.fetchMoreForQueryId].networkStatus = NetworkStatus.fetchMore)
      }),
      (e.prototype.markQueryResult = function(e, t, r) {
        this.store &&
          this.store[e] &&
          ((this.store[e].networkError = null),
          (this.store[e].graphQLErrors = isNonEmptyArray(t.errors) ? t.errors : []),
          (this.store[e].previousVariables = null),
          (this.store[e].networkStatus = NetworkStatus.ready),
          'string' == typeof r && this.store[r] && (this.store[r].networkStatus = NetworkStatus.ready))
      }),
      (e.prototype.markQueryError = function(e, t, r) {
        this.store &&
          this.store[e] &&
          ((this.store[e].networkError = t),
          (this.store[e].networkStatus = NetworkStatus.error),
          'string' == typeof r && this.markQueryResultClient(r, !0))
      }),
      (e.prototype.markQueryResultClient = function(e, t) {
        var r = this.store && this.store[e]
        r && ((r.networkError = null), (r.previousVariables = null), t && (r.networkStatus = NetworkStatus.ready))
      }),
      (e.prototype.stopQuery = function(e) {
        delete this.store[e]
      }),
      (e.prototype.reset = function(e) {
        var t = this
        Object.keys(this.store).forEach(function(r) {
          e.indexOf(r) < 0 ? t.stopQuery(r) : (t.store[r].networkStatus = NetworkStatus.loading)
        })
      }),
      e
    )
  })()
function capitalizeFirstLetter(e) {
  return e.charAt(0).toUpperCase() + e.slice(1)
}
var LocalState = (function() {
  function e(e) {
    var t = e.cache,
      r = e.client,
      n = e.resolvers,
      i = e.fragmentMatcher
    ;(this.cache = t), r && (this.client = r), n && this.addResolvers(n), i && this.setFragmentMatcher(i)
  }
  return (
    (e.prototype.addResolvers = function(e) {
      var t = this
      ;(this.resolvers = this.resolvers || {}),
        Array.isArray(e)
          ? e.forEach(function(e) {
              t.resolvers = mergeDeep(t.resolvers, e)
            })
          : (this.resolvers = mergeDeep(this.resolvers, e))
    }),
    (e.prototype.setResolvers = function(e) {
      ;(this.resolvers = {}), this.addResolvers(e)
    }),
    (e.prototype.getResolvers = function() {
      return this.resolvers || {}
    }),
    (e.prototype.runResolvers = function(e) {
      var t = e.document,
        r = e.remoteResult,
        n = e.context,
        i = e.variables,
        o = e.onlyRunForcedResolvers,
        a = void 0 !== o && o
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(e) {
          return t
            ? [
                2,
                this.resolveDocument(t, r.data, n, i, this.fragmentMatcher, a).then(function(e) {
                  return __assign(__assign({}, r), { data: e.result })
                })
              ]
            : [2, r]
        })
      })
    }),
    (e.prototype.setFragmentMatcher = function(e) {
      this.fragmentMatcher = e
    }),
    (e.prototype.getFragmentMatcher = function() {
      return this.fragmentMatcher
    }),
    (e.prototype.clientQuery = function(e) {
      if (hasDirectives(['client'], e)) {
        if (this.resolvers) return e
        'production' === process.env.NODE_ENV ||
          invariant.warn(
            'Found @client directives in a query but no ApolloClient resolvers were specified. This means ApolloClient local resolver handling has been disabled, and @client directives will be passed through to your link chain.'
          )
      }
      return null
    }),
    (e.prototype.serverQuery = function(e) {
      return this.resolvers ? removeClientSetsFromDocument(e) : e
    }),
    (e.prototype.prepareContext = function(e) {
      void 0 === e && (e = {})
      var t = this.cache
      return __assign(__assign({}, e), {
        cache: t,
        getCacheKey: function(e) {
          if (t.config) return t.config.dataIdFromObject(e)
          'production' === process.env.NODE_ENV
            ? invariant(!1, 6)
            : invariant(
                !1,
                'To use context.getCacheKey, you need to use a cache that has a configurable dataIdFromObject, like apollo-cache-inmemory.'
              )
        }
      })
    }),
    (e.prototype.addExportedVariables = function(e, t, r) {
      return (
        void 0 === t && (t = {}),
        void 0 === r && (r = {}),
        __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(n) {
            return e
              ? [
                  2,
                  this.resolveDocument(e, this.buildRootValueFromCache(e, t) || {}, this.prepareContext(r), t).then(
                    function(e) {
                      return __assign(__assign({}, t), e.exportedVariables)
                    }
                  )
                ]
              : [2, __assign({}, t)]
          })
        })
      )
    }),
    (e.prototype.shouldForceResolvers = function(e) {
      var t = !1
      return (
        visit(e, {
          Directive: {
            enter: function(e) {
              if (
                'client' === e.name.value &&
                e.arguments &&
                (t = e.arguments.some(function(e) {
                  return 'always' === e.name.value && 'BooleanValue' === e.value.kind && !0 === e.value.value
                }))
              )
                return BREAK
            }
          }
        }),
        t
      )
    }),
    (e.prototype.buildRootValueFromCache = function(e, t) {
      return this.cache.diff({
        query: buildQueryFromSelectionSet(e),
        variables: t,
        returnPartialData: !0,
        optimistic: !1
      }).result
    }),
    (e.prototype.resolveDocument = function(e, t, r, n, i, o) {
      return (
        void 0 === r && (r = {}),
        void 0 === n && (n = {}),
        void 0 === i &&
          (i = function() {
            return !0
          }),
        void 0 === o && (o = !1),
        __awaiter(this, void 0, void 0, function() {
          var a, s, u, c, l, p, f, d, h
          return __generator(this, function(v) {
            return (
              (a = getMainDefinition(e)),
              (s = getFragmentDefinitions(e)),
              (u = createFragmentMap(s)),
              (c = a.operation),
              (l = c ? capitalizeFirstLetter(c) : 'Query'),
              (f = (p = this).cache),
              (d = p.client),
              (h = {
                fragmentMap: u,
                context: __assign(__assign({}, r), { cache: f, client: d }),
                variables: n,
                fragmentMatcher: i,
                defaultOperationType: l,
                exportedVariables: {},
                onlyRunForcedResolvers: o
              }),
              [
                2,
                this.resolveSelectionSet(a.selectionSet, t, h).then(function(e) {
                  return { result: e, exportedVariables: h.exportedVariables }
                })
              ]
            )
          })
        })
      )
    }),
    (e.prototype.resolveSelectionSet = function(e, t, r) {
      return __awaiter(this, void 0, void 0, function() {
        var n,
          i,
          o,
          a,
          s,
          u = this
        return __generator(this, function(c) {
          return (
            (n = r.fragmentMap),
            (i = r.context),
            (o = r.variables),
            (a = [t]),
            (s = function(e) {
              return __awaiter(u, void 0, void 0, function() {
                var s, u
                return __generator(this, function(c) {
                  return shouldInclude(e, o)
                    ? isField(e)
                      ? [
                          2,
                          this.resolveField(e, t, r).then(function(t) {
                            var r
                            void 0 !== t && a.push((((r = {})[resultKeyNameFromField(e)] = t), r))
                          })
                        ]
                      : (isInlineFragment(e)
                          ? (s = e)
                          : ((s = n[e.name.value]),
                            'production' === process.env.NODE_ENV
                              ? invariant(s, 7)
                              : invariant(s, 'No fragment named ' + e.name.value)),
                        s && s.typeCondition && ((u = s.typeCondition.name.value), r.fragmentMatcher(t, u, i))
                          ? [
                              2,
                              this.resolveSelectionSet(s.selectionSet, t, r).then(function(e) {
                                a.push(e)
                              })
                            ]
                          : [2])
                    : [2]
                })
              })
            }),
            [
              2,
              Promise.all(e.selections.map(s)).then(function() {
                return mergeDeepArray(a)
              })
            ]
          )
        })
      })
    }),
    (e.prototype.resolveField = function(e, t, r) {
      return __awaiter(this, void 0, void 0, function() {
        var n,
          i,
          o,
          a,
          s,
          u,
          c,
          l,
          p,
          f = this
        return __generator(this, function(d) {
          return (
            (n = r.variables),
            (i = e.name.value),
            (o = resultKeyNameFromField(e)),
            (a = i !== o),
            (s = t[o] || t[i]),
            (u = Promise.resolve(s)),
            (r.onlyRunForcedResolvers && !this.shouldForceResolvers(e)) ||
              ((c = t.__typename || r.defaultOperationType),
              (l = this.resolvers && this.resolvers[c]) &&
                (p = l[a ? i : o]) &&
                (u = Promise.resolve(
                  p(t, argumentsObjectFromField(e, n), r.context, { field: e, fragmentMap: r.fragmentMap })
                ))),
            [
              2,
              u.then(function(t) {
                return (
                  void 0 === t && (t = s),
                  e.directives &&
                    e.directives.forEach(function(e) {
                      'export' === e.name.value &&
                        e.arguments &&
                        e.arguments.forEach(function(e) {
                          'as' === e.name.value &&
                            'StringValue' === e.value.kind &&
                            (r.exportedVariables[e.value.value] = t)
                        })
                    }),
                  e.selectionSet
                    ? null == t
                      ? t
                      : Array.isArray(t)
                      ? f.resolveSubSelectedArray(e, t, r)
                      : e.selectionSet
                      ? f.resolveSelectionSet(e.selectionSet, t, r)
                      : void 0
                    : t
                )
              })
            ]
          )
        })
      })
    }),
    (e.prototype.resolveSubSelectedArray = function(e, t, r) {
      var n = this
      return Promise.all(
        t.map(function(t) {
          return null === t
            ? null
            : Array.isArray(t)
            ? n.resolveSubSelectedArray(e, t, r)
            : e.selectionSet
            ? n.resolveSelectionSet(e.selectionSet, t, r)
            : void 0
        })
      )
    }),
    e
  )
})()
function multiplex(e) {
  var t = new Set(),
    r = null
  return new Observable$1(function(n) {
    return (
      t.add(n),
      (r =
        r ||
        e.subscribe({
          next: function(e) {
            t.forEach(function(t) {
              return t.next && t.next(e)
            })
          },
          error: function(e) {
            t.forEach(function(t) {
              return t.error && t.error(e)
            })
          },
          complete: function() {
            t.forEach(function(e) {
              return e.complete && e.complete()
            })
          }
        })),
      function() {
        t.delete(n) && !t.size && r && (r.unsubscribe(), (r = null))
      }
    )
  })
}
function asyncMap(e, t) {
  return new Observable$1(function(r) {
    var n = r.next,
      i = r.error,
      o = r.complete,
      a = 0,
      s = !1,
      u = {
        next: function(e) {
          ++a,
            new Promise(function(r) {
              r(t(e))
            }).then(
              function(e) {
                --a, n && n.call(r, e), s && u.complete()
              },
              function(e) {
                --a, i && i.call(r, e)
              }
            )
        },
        error: function(e) {
          i && i.call(r, e)
        },
        complete: function() {
          ;(s = !0), a || (o && o.call(r))
        }
      },
      c = e.subscribe(u)
    return function() {
      return c.unsubscribe()
    }
  })
}
var hasOwnProperty$3 = Object.prototype.hasOwnProperty,
  QueryManager = (function() {
    function e(e) {
      var t = e.link,
        r = e.queryDeduplication,
        n = void 0 !== r && r,
        i = e.store,
        o = e.onBroadcast,
        a = void 0 === o ? function() {} : o,
        s = e.ssrMode,
        u = void 0 !== s && s,
        c = e.clientAwareness,
        l = void 0 === c ? {} : c,
        p = e.localState,
        f = e.assumeImmutableResults
      ;(this.mutationStore = new MutationStore()),
        (this.queryStore = new QueryStore()),
        (this.clientAwareness = {}),
        (this.idCounter = 1),
        (this.queries = new Map()),
        (this.fetchQueryRejectFns = new Map()),
        (this.transformCache = new (canUseWeakMap ? WeakMap : Map)()),
        (this.inFlightLinkObservables = new Map()),
        (this.pollingInfoByQueryId = new Map()),
        (this.link = t),
        (this.queryDeduplication = n),
        (this.dataStore = i),
        (this.onBroadcast = a),
        (this.clientAwareness = l),
        (this.localState = p || new LocalState({ cache: i.getCache() })),
        (this.ssrMode = u),
        (this.assumeImmutableResults = !!f)
    }
    return (
      (e.prototype.stop = function() {
        var e = this
        this.queries.forEach(function(t, r) {
          e.stopQueryNoBroadcast(r)
        }),
          this.fetchQueryRejectFns.forEach(function(e) {
            e(
              'production' === process.env.NODE_ENV
                ? new InvariantError(8)
                : new InvariantError('QueryManager stopped while query was in flight')
            )
          })
      }),
      (e.prototype.mutate = function(e) {
        var t = e.mutation,
          r = e.variables,
          n = e.optimisticResponse,
          i = e.updateQueries,
          o = e.refetchQueries,
          a = void 0 === o ? [] : o,
          s = e.awaitRefetchQueries,
          u = void 0 !== s && s,
          c = e.update,
          l = e.errorPolicy,
          p = void 0 === l ? 'none' : l,
          f = e.fetchPolicy,
          d = e.context,
          h = void 0 === d ? {} : d
        return __awaiter(this, void 0, void 0, function() {
          var e,
            o,
            s,
            l = this
          return __generator(this, function(d) {
            switch (d.label) {
              case 0:
                return (
                  'production' === process.env.NODE_ENV
                    ? invariant(t, 9)
                    : invariant(
                        t,
                        'mutation option is required. You must specify your GraphQL document in the mutation option.'
                      ),
                  'production' === process.env.NODE_ENV
                    ? invariant(!f || 'no-cache' === f, 10)
                    : invariant(
                        !f || 'no-cache' === f,
                        "Mutations only support a 'no-cache' fetchPolicy. If you don't want to disable the cache, remove your fetchPolicy setting to proceed with the default mutation behavior."
                      ),
                  (e = this.generateQueryId()),
                  (t = this.transform(t).document),
                  this.setQuery(e, function() {
                    return { document: t }
                  }),
                  (r = this.getVariables(t, r)),
                  this.transform(t).hasClientExports ? [4, this.localState.addExportedVariables(t, r, h)] : [3, 2]
                )
              case 1:
                ;(r = d.sent()), (d.label = 2)
              case 2:
                return (
                  (o = function() {
                    var e = {}
                    return (
                      i &&
                        l.queries.forEach(function(t, r) {
                          var n = t.observableQuery
                          if (n) {
                            var o = n.queryName
                            o && hasOwnProperty$3.call(i, o) && (e[r] = { updater: i[o], query: l.queryStore.get(r) })
                          }
                        }),
                      e
                    )
                  }),
                  this.mutationStore.initMutation(e, t, r),
                  this.dataStore.markMutationInit({
                    mutationId: e,
                    document: t,
                    variables: r,
                    updateQueries: o(),
                    update: c,
                    optimisticResponse: n
                  }),
                  this.broadcastQueries(),
                  (s = this),
                  [
                    2,
                    new Promise(function(i, l) {
                      var d, v
                      s.getObservableFromLink(t, __assign(__assign({}, h), { optimisticResponse: n }), r, !1).subscribe(
                        {
                          next: function(n) {
                            graphQLResultHasError(n) && 'none' === p
                              ? (v = new ApolloError({ graphQLErrors: n.errors }))
                              : (s.mutationStore.markMutationResult(e),
                                'no-cache' !== f &&
                                  s.dataStore.markMutationResult({
                                    mutationId: e,
                                    result: n,
                                    document: t,
                                    variables: r,
                                    updateQueries: o(),
                                    update: c
                                  }),
                                (d = n))
                          },
                          error: function(t) {
                            s.mutationStore.markMutationError(e, t),
                              s.dataStore.markMutationComplete({ mutationId: e, optimisticResponse: n }),
                              s.broadcastQueries(),
                              s.setQuery(e, function() {
                                return { document: null }
                              }),
                              l(new ApolloError({ networkError: t }))
                          },
                          complete: function() {
                            if (
                              (v && s.mutationStore.markMutationError(e, v),
                              s.dataStore.markMutationComplete({ mutationId: e, optimisticResponse: n }),
                              s.broadcastQueries(),
                              v)
                            )
                              l(v)
                            else {
                              'function' == typeof a && (a = a(d))
                              var t = []
                              isNonEmptyArray(a) &&
                                a.forEach(function(e) {
                                  if ('string' == typeof e)
                                    s.queries.forEach(function(r) {
                                      var n = r.observableQuery
                                      n && n.queryName === e && t.push(n.refetch())
                                    })
                                  else {
                                    var r = { query: e.query, variables: e.variables, fetchPolicy: 'network-only' }
                                    e.context && (r.context = e.context), t.push(s.query(r))
                                  }
                                }),
                                Promise.all(u ? t : []).then(function() {
                                  s.setQuery(e, function() {
                                    return { document: null }
                                  }),
                                    'ignore' === p && d && graphQLResultHasError(d) && delete d.errors,
                                    i(d)
                                })
                            }
                          }
                        }
                      )
                    })
                  ]
                )
            }
          })
        })
      }),
      (e.prototype.fetchQuery = function(e, t, r, n) {
        return __awaiter(this, void 0, void 0, function() {
          var i,
            o,
            a,
            s,
            u,
            c,
            l,
            p,
            f,
            d,
            h,
            v,
            y,
            m,
            b,
            g,
            E,
            _,
            O = this
          return __generator(this, function(k) {
            switch (k.label) {
              case 0:
                return (
                  (i = t.metadata),
                  (o = void 0 === i ? null : i),
                  (a = t.fetchPolicy),
                  (s = void 0 === a ? 'cache-first' : a),
                  (u = t.context),
                  (c = void 0 === u ? {} : u),
                  (l = this.transform(t.query).document),
                  (p = this.getVariables(l, t.variables)),
                  this.transform(l).hasClientExports ? [4, this.localState.addExportedVariables(l, p, c)] : [3, 2]
                )
              case 1:
                ;(p = k.sent()), (k.label = 2)
              case 2:
                if (
                  ((t = __assign(__assign({}, t), { variables: p })),
                  (h = d = 'network-only' === s || 'no-cache' === s),
                  d ||
                    ((v = this.dataStore
                      .getCache()
                      .diff({ query: l, variables: p, returnPartialData: !0, optimistic: !1 })),
                    (y = v.complete),
                    (m = v.result),
                    (h = !y || 'cache-and-network' === s),
                    (f = m)),
                  (b = h && 'cache-only' !== s && 'standby' !== s),
                  hasDirectives(['live'], l) && (b = !0),
                  (g = this.idCounter++),
                  (E = 'no-cache' !== s ? this.updateQueryWatch(e, l, t) : void 0),
                  this.setQuery(e, function() {
                    return { document: l, lastRequestId: g, invalidated: !0, cancel: E }
                  }),
                  this.invalidate(n),
                  this.queryStore.initQuery({
                    queryId: e,
                    document: l,
                    storePreviousVariables: b,
                    variables: p,
                    isPoll: r === FetchType.poll,
                    isRefetch: r === FetchType.refetch,
                    metadata: o,
                    fetchMoreForQueryId: n
                  }),
                  this.broadcastQueries(),
                  b)
                ) {
                  if (
                    ((_ = this.fetchRequest({
                      requestId: g,
                      queryId: e,
                      document: l,
                      options: t,
                      fetchMoreForQueryId: n
                    }).catch(function(t) {
                      throw isApolloError(t)
                        ? t
                        : (g >= O.getQuery(e).lastRequestId &&
                            (O.queryStore.markQueryError(e, t, n),
                            O.invalidate(e),
                            O.invalidate(n),
                            O.broadcastQueries()),
                          new ApolloError({ networkError: t }))
                    })),
                    'cache-and-network' !== s)
                  )
                    return [2, _]
                  _.catch(function() {})
                }
                return (
                  this.queryStore.markQueryResultClient(e, !b),
                  this.invalidate(e),
                  this.invalidate(n),
                  this.transform(l).hasForcedResolvers
                    ? [
                        2,
                        this.localState
                          .runResolvers({
                            document: l,
                            remoteResult: { data: f },
                            context: c,
                            variables: p,
                            onlyRunForcedResolvers: !0
                          })
                          .then(function(r) {
                            return O.markQueryResult(e, r, t, n), O.broadcastQueries(), r
                          })
                      ]
                    : (this.broadcastQueries(), [2, { data: f }])
                )
            }
          })
        })
      }),
      (e.prototype.markQueryResult = function(e, t, r, n) {
        var i = r.fetchPolicy,
          o = r.variables,
          a = r.errorPolicy
        'no-cache' === i
          ? this.setQuery(e, function() {
              return { newData: { result: t.data, complete: !0 } }
            })
          : this.dataStore.markQueryResult(t, this.getQuery(e).document, o, n, 'ignore' === a || 'all' === a)
      }),
      (e.prototype.queryListenerForObserver = function(e, t, r) {
        var n = this
        function i(e, t) {
          if (r[e])
            try {
              r[e](t)
            } catch (e) {
              'production' === process.env.NODE_ENV || invariant.error(e)
            }
          else 'error' === e && ('production' === process.env.NODE_ENV || invariant.error(t))
        }
        return function(r, o) {
          if ((n.invalidate(e, !1), r)) {
            var a = n.getQuery(e),
              s = a.observableQuery,
              u = a.document,
              c = s ? s.options.fetchPolicy : t.fetchPolicy
            if ('standby' !== c) {
              var l = isNetworkRequestInFlight(r.networkStatus),
                p = s && s.getLastResult(),
                f = !(!p || p.networkStatus === r.networkStatus),
                d =
                  t.returnPartialData ||
                  (!o && r.previousVariables) ||
                  (f && t.notifyOnNetworkStatusChange) ||
                  'cache-only' === c ||
                  'cache-and-network' === c
              if (!l || d) {
                var h = isNonEmptyArray(r.graphQLErrors),
                  v = (s && s.options.errorPolicy) || t.errorPolicy || 'none'
                if (('none' === v && h) || r.networkError)
                  return i('error', new ApolloError({ graphQLErrors: r.graphQLErrors, networkError: r.networkError }))
                try {
                  var y = void 0,
                    m = void 0
                  if (o)
                    'no-cache' !== c &&
                      'network-only' !== c &&
                      n.setQuery(e, function() {
                        return { newData: null }
                      }),
                      (y = o.result),
                      (m = !o.complete)
                  else {
                    var b = s && s.getLastError(),
                      g = 'none' !== v && (b && b.graphQLErrors) !== r.graphQLErrors
                    if (p && p.data && !g) (y = p.data), (m = !1)
                    else {
                      var E = n.dataStore.getCache().diff({
                        query: u,
                        variables: r.previousVariables || r.variables,
                        returnPartialData: !0,
                        optimistic: !0
                      })
                      ;(y = E.result), (m = !E.complete)
                    }
                  }
                  var _ = m && !(t.returnPartialData || 'cache-only' === c),
                    O = { data: _ ? p && p.data : y, loading: l, networkStatus: r.networkStatus, stale: _ }
                  'all' === v && h && (O.errors = r.graphQLErrors), i('next', O)
                } catch (e) {
                  i('error', new ApolloError({ networkError: e }))
                }
              }
            }
          }
        }
      }),
      (e.prototype.transform = function(e) {
        var t = this.transformCache
        if (!t.has(e)) {
          var r = this.dataStore.getCache(),
            n = r.transformDocument(e),
            i = removeConnectionDirectiveFromDocument(r.transformForLink(n)),
            o = this.localState.clientQuery(n),
            a = this.localState.serverQuery(i),
            s = {
              document: n,
              hasClientExports: hasClientExports(n),
              hasForcedResolvers: this.localState.shouldForceResolvers(n),
              clientQuery: o,
              serverQuery: a,
              defaultVars: getDefaultValues(getOperationDefinition(n))
            },
            u = function(e) {
              e && !t.has(e) && t.set(e, s)
            }
          u(e), u(n), u(o), u(a)
        }
        return t.get(e)
      }),
      (e.prototype.getVariables = function(e, t) {
        return __assign(__assign({}, this.transform(e).defaultVars), t)
      }),
      (e.prototype.watchQuery = function(e, t) {
        void 0 === t && (t = !0),
          'production' === process.env.NODE_ENV
            ? invariant('standby' !== e.fetchPolicy, 11)
            : invariant(
                'standby' !== e.fetchPolicy,
                'client.watchQuery cannot be called with fetchPolicy set to "standby"'
              ),
          (e.variables = this.getVariables(e.query, e.variables)),
          void 0 === e.notifyOnNetworkStatusChange && (e.notifyOnNetworkStatusChange = !1)
        var r = __assign({}, e)
        return new ObservableQuery({ queryManager: this, options: r, shouldSubscribe: t })
      }),
      (e.prototype.query = function(e) {
        var t = this
        return (
          'production' === process.env.NODE_ENV
            ? invariant(e.query, 12)
            : invariant(
                e.query,
                'query option is required. You must specify your GraphQL document in the query option.'
              ),
          'production' === process.env.NODE_ENV
            ? invariant('Document' === e.query.kind, 13)
            : invariant('Document' === e.query.kind, 'You must wrap the query string in a "gql" tag.'),
          'production' === process.env.NODE_ENV
            ? invariant(!e.returnPartialData, 14)
            : invariant(!e.returnPartialData, 'returnPartialData option only supported on watchQuery.'),
          'production' === process.env.NODE_ENV
            ? invariant(!e.pollInterval, 15)
            : invariant(!e.pollInterval, 'pollInterval option only supported on watchQuery.'),
          new Promise(function(r, n) {
            var i = t.watchQuery(e, !1)
            t.fetchQueryRejectFns.set('query:' + i.queryId, n),
              i
                .result()
                .then(r, n)
                .then(function() {
                  return t.fetchQueryRejectFns.delete('query:' + i.queryId)
                })
          })
        )
      }),
      (e.prototype.generateQueryId = function() {
        return String(this.idCounter++)
      }),
      (e.prototype.stopQueryInStore = function(e) {
        this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries()
      }),
      (e.prototype.stopQueryInStoreNoBroadcast = function(e) {
        this.stopPollingQuery(e), this.queryStore.stopQuery(e), this.invalidate(e)
      }),
      (e.prototype.addQueryListener = function(e, t) {
        this.setQuery(e, function(e) {
          return e.listeners.add(t), { invalidated: !1 }
        })
      }),
      (e.prototype.updateQueryWatch = function(e, t, r) {
        var n = this,
          i = this.getQuery(e).cancel
        i && i()
        return this.dataStore.getCache().watch({
          query: t,
          variables: r.variables,
          optimistic: !0,
          previousResult: function() {
            var t = null,
              r = n.getQuery(e).observableQuery
            if (r) {
              var i = r.getLastResult()
              i && (t = i.data)
            }
            return t
          },
          callback: function(t) {
            n.setQuery(e, function() {
              return { invalidated: !0, newData: t }
            })
          }
        })
      }),
      (e.prototype.addObservableQuery = function(e, t) {
        this.setQuery(e, function() {
          return { observableQuery: t }
        })
      }),
      (e.prototype.removeObservableQuery = function(e) {
        var t = this.getQuery(e).cancel
        this.setQuery(e, function() {
          return { observableQuery: null }
        }),
          t && t()
      }),
      (e.prototype.clearStore = function() {
        this.fetchQueryRejectFns.forEach(function(e) {
          e(
            'production' === process.env.NODE_ENV
              ? new InvariantError(16)
              : new InvariantError('Store reset while query was in flight (not completed in link chain)')
          )
        })
        var e = []
        return (
          this.queries.forEach(function(t, r) {
            t.observableQuery && e.push(r)
          }),
          this.queryStore.reset(e),
          this.mutationStore.reset(),
          this.dataStore.reset()
        )
      }),
      (e.prototype.resetStore = function() {
        var e = this
        return this.clearStore().then(function() {
          return e.reFetchObservableQueries()
        })
      }),
      (e.prototype.reFetchObservableQueries = function(e) {
        var t = this
        void 0 === e && (e = !1)
        var r = []
        return (
          this.queries.forEach(function(n, i) {
            var o = n.observableQuery
            if (o) {
              var a = o.options.fetchPolicy
              o.resetLastResults(),
                'cache-only' === a || (!e && 'standby' === a) || r.push(o.refetch()),
                t.setQuery(i, function() {
                  return { newData: null }
                }),
                t.invalidate(i)
            }
          }),
          this.broadcastQueries(),
          Promise.all(r)
        )
      }),
      (e.prototype.observeQuery = function(e, t, r) {
        return this.addQueryListener(e, this.queryListenerForObserver(e, t, r)), this.fetchQuery(e, t)
      }),
      (e.prototype.startQuery = function(e, t, r) {
        return (
          'production' === process.env.NODE_ENV ||
            invariant.warn('The QueryManager.startQuery method has been deprecated'),
          this.addQueryListener(e, r),
          this.fetchQuery(e, t).catch(function() {}),
          e
        )
      }),
      (e.prototype.startGraphQLSubscription = function(e) {
        var t = this,
          r = e.query,
          n = e.fetchPolicy,
          i = e.variables
        ;(r = this.transform(r).document), (i = this.getVariables(r, i))
        var o = function(e) {
          return t.getObservableFromLink(r, {}, e, !1).map(function(i) {
            if (
              ((n && 'no-cache' === n) || (t.dataStore.markSubscriptionResult(i, r, e), t.broadcastQueries()),
              graphQLResultHasError(i))
            )
              throw new ApolloError({ graphQLErrors: i.errors })
            return i
          })
        }
        if (this.transform(r).hasClientExports) {
          var a = this.localState.addExportedVariables(r, i).then(o)
          return new Observable$1(function(e) {
            var t = null
            return (
              a.then(function(r) {
                return (t = r.subscribe(e))
              }, e.error),
              function() {
                return t && t.unsubscribe()
              }
            )
          })
        }
        return o(i)
      }),
      (e.prototype.stopQuery = function(e) {
        this.stopQueryNoBroadcast(e), this.broadcastQueries()
      }),
      (e.prototype.stopQueryNoBroadcast = function(e) {
        this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e)
      }),
      (e.prototype.removeQuery = function(e) {
        this.fetchQueryRejectFns.delete('query:' + e),
          this.fetchQueryRejectFns.delete('fetchRequest:' + e),
          this.getQuery(e).subscriptions.forEach(function(e) {
            return e.unsubscribe()
          }),
          this.queries.delete(e)
      }),
      (e.prototype.getCurrentQueryResult = function(e, t) {
        void 0 === t && (t = !0)
        var r = e.options,
          n = r.variables,
          i = r.query,
          o = r.fetchPolicy,
          a = r.returnPartialData,
          s = e.getLastResult(),
          u = this.getQuery(e.queryId).newData
        if (u && u.complete) return { data: u.result, partial: !1 }
        if ('no-cache' === o || 'network-only' === o) return { data: void 0, partial: !1 }
        var c = this.dataStore.getCache().diff({
            query: i,
            variables: n,
            previousResult: s ? s.data : void 0,
            returnPartialData: !0,
            optimistic: t
          }),
          l = c.result,
          p = c.complete
        return { data: p || a ? l : void 0, partial: !p }
      }),
      (e.prototype.getQueryWithPreviousResult = function(e) {
        var t
        if ('string' == typeof e) {
          var r = this.getQuery(e).observableQuery
          'production' === process.env.NODE_ENV
            ? invariant(r, 17)
            : invariant(r, "ObservableQuery with this id doesn't exist: " + e),
            (t = r)
        } else t = e
        var n = t.options,
          i = n.variables,
          o = n.query
        return { previousResult: this.getCurrentQueryResult(t, !1).data, variables: i, document: o }
      }),
      (e.prototype.broadcastQueries = function() {
        var e = this
        this.onBroadcast(),
          this.queries.forEach(function(t, r) {
            t.invalidated &&
              t.listeners.forEach(function(n) {
                n && n(e.queryStore.get(r), t.newData)
              })
          })
      }),
      (e.prototype.getLocalState = function() {
        return this.localState
      }),
      (e.prototype.getObservableFromLink = function(e, t, r, n) {
        var i,
          o = this
        void 0 === n && (n = this.queryDeduplication)
        var a = this.transform(e).serverQuery
        if (a) {
          var s = this.inFlightLinkObservables,
            u = this.link,
            c = {
              query: a,
              variables: r,
              operationName: getOperationName(a) || void 0,
              context: this.prepareContext(__assign(__assign({}, t), { forceFetch: !n }))
            }
          if (((t = c.context), n)) {
            var l = s.get(a) || new Map()
            s.set(a, l)
            var p = JSON.stringify(r)
            if (!(i = l.get(p))) {
              l.set(p, (i = multiplex(execute(u, c))))
              var f = function() {
                  l.delete(p), l.size || s.delete(a), d.unsubscribe()
                },
                d = i.subscribe({ next: f, error: f, complete: f })
            }
          } else i = multiplex(execute(u, c))
        } else (i = Observable$1.of({ data: {} })), (t = this.prepareContext(t))
        var h = this.transform(e).clientQuery
        return (
          h &&
            (i = asyncMap(i, function(e) {
              return o.localState.runResolvers({ document: h, remoteResult: e, context: t, variables: r })
            })),
          i
        )
      }),
      (e.prototype.fetchRequest = function(e) {
        var t,
          r,
          n = this,
          i = e.requestId,
          o = e.queryId,
          a = e.document,
          s = e.options,
          u = e.fetchMoreForQueryId,
          c = s.variables,
          l = s.errorPolicy,
          p = void 0 === l ? 'none' : l,
          f = s.fetchPolicy
        return new Promise(function(e, l) {
          var d = n.getObservableFromLink(a, s.context, c),
            h = 'fetchRequest:' + o
          n.fetchQueryRejectFns.set(h, l)
          var v = function() {
              n.fetchQueryRejectFns.delete(h),
                n.setQuery(o, function(e) {
                  e.subscriptions.delete(y)
                })
            },
            y = d
              .map(function(e) {
                if (
                  (i >= n.getQuery(o).lastRequestId &&
                    (n.markQueryResult(o, e, s, u),
                    n.queryStore.markQueryResult(o, e, u),
                    n.invalidate(o),
                    n.invalidate(u),
                    n.broadcastQueries()),
                  'none' === p && isNonEmptyArray(e.errors))
                )
                  return l(new ApolloError({ graphQLErrors: e.errors }))
                if (('all' === p && (r = e.errors), u || 'no-cache' === f)) t = e.data
                else {
                  var d = n.dataStore
                      .getCache()
                      .diff({ variables: c, query: a, optimistic: !1, returnPartialData: !0 }),
                    h = d.result
                  ;(d.complete || s.returnPartialData) && (t = h)
                }
              })
              .subscribe({
                error: function(e) {
                  v(), l(e)
                },
                complete: function() {
                  v(), e({ data: t, errors: r, loading: !1, networkStatus: NetworkStatus.ready, stale: !1 })
                }
              })
          n.setQuery(o, function(e) {
            e.subscriptions.add(y)
          })
        })
      }),
      (e.prototype.getQuery = function(e) {
        return (
          this.queries.get(e) || {
            listeners: new Set(),
            invalidated: !1,
            document: null,
            newData: null,
            lastRequestId: 1,
            observableQuery: null,
            subscriptions: new Set()
          }
        )
      }),
      (e.prototype.setQuery = function(e, t) {
        var r = this.getQuery(e),
          n = __assign(__assign({}, r), t(r))
        this.queries.set(e, n)
      }),
      (e.prototype.invalidate = function(e, t) {
        void 0 === t && (t = !0),
          e &&
            this.setQuery(e, function() {
              return { invalidated: t }
            })
      }),
      (e.prototype.prepareContext = function(e) {
        void 0 === e && (e = {})
        var t = this.localState.prepareContext(e)
        return __assign(__assign({}, t), { clientAwareness: this.clientAwareness })
      }),
      (e.prototype.checkInFlight = function(e) {
        var t = this.queryStore.get(e)
        return t && t.networkStatus !== NetworkStatus.ready && t.networkStatus !== NetworkStatus.error
      }),
      (e.prototype.startPollingQuery = function(e, t, r) {
        var n = this,
          i = e.pollInterval
        if (
          ('production' === process.env.NODE_ENV
            ? invariant(i, 18)
            : invariant(i, 'Attempted to start a polling query without a polling interval.'),
          !this.ssrMode)
        ) {
          var o = this.pollingInfoByQueryId.get(t)
          o || this.pollingInfoByQueryId.set(t, (o = {})),
            (o.interval = i),
            (o.options = __assign(__assign({}, e), { fetchPolicy: 'network-only' }))
          var a = function() {
              var e = n.pollingInfoByQueryId.get(t)
              e && (n.checkInFlight(t) ? s() : n.fetchQuery(t, e.options, FetchType.poll).then(s, s))
            },
            s = function() {
              var e = n.pollingInfoByQueryId.get(t)
              e && (clearTimeout(e.timeout), (e.timeout = setTimeout(a, e.interval)))
            }
          r && this.addQueryListener(t, r), s()
        }
        return t
      }),
      (e.prototype.stopPollingQuery = function(e) {
        this.pollingInfoByQueryId.delete(e)
      }),
      e
    )
  })(),
  DataStore = (function() {
    function e(e) {
      this.cache = e
    }
    return (
      (e.prototype.getCache = function() {
        return this.cache
      }),
      (e.prototype.markQueryResult = function(e, t, r, n, i) {
        void 0 === i && (i = !1)
        var o = !graphQLResultHasError(e)
        i && graphQLResultHasError(e) && e.data && (o = !0),
          !n && o && this.cache.write({ result: e.data, dataId: 'ROOT_QUERY', query: t, variables: r })
      }),
      (e.prototype.markSubscriptionResult = function(e, t, r) {
        graphQLResultHasError(e) ||
          this.cache.write({ result: e.data, dataId: 'ROOT_SUBSCRIPTION', query: t, variables: r })
      }),
      (e.prototype.markMutationInit = function(e) {
        var t,
          r = this
        e.optimisticResponse &&
          ((t = 'function' == typeof e.optimisticResponse ? e.optimisticResponse(e.variables) : e.optimisticResponse),
          this.cache.recordOptimisticTransaction(function(n) {
            var i = r.cache
            r.cache = n
            try {
              r.markMutationResult({
                mutationId: e.mutationId,
                result: { data: t },
                document: e.document,
                variables: e.variables,
                updateQueries: e.updateQueries,
                update: e.update
              })
            } finally {
              r.cache = i
            }
          }, e.mutationId))
      }),
      (e.prototype.markMutationResult = function(e) {
        var t = this
        if (!graphQLResultHasError(e.result)) {
          var r = [{ result: e.result.data, dataId: 'ROOT_MUTATION', query: e.document, variables: e.variables }],
            n = e.updateQueries
          n &&
            Object.keys(n).forEach(function(i) {
              var o = n[i],
                a = o.query,
                s = o.updater,
                u = t.cache.diff({ query: a.document, variables: a.variables, returnPartialData: !0, optimistic: !1 }),
                c = u.result
              if (u.complete) {
                var l = tryFunctionOrLogError(function() {
                  return s(c, {
                    mutationResult: e.result,
                    queryName: getOperationName(a.document) || void 0,
                    queryVariables: a.variables
                  })
                })
                l && r.push({ result: l, dataId: 'ROOT_QUERY', query: a.document, variables: a.variables })
              }
            }),
            this.cache.performTransaction(function(t) {
              r.forEach(function(e) {
                return t.write(e)
              })
              var n = e.update
              n &&
                tryFunctionOrLogError(function() {
                  return n(t, e.result)
                })
            })
        }
      }),
      (e.prototype.markMutationComplete = function(e) {
        var t = e.mutationId
        e.optimisticResponse && this.cache.removeOptimistic(t)
      }),
      (e.prototype.markUpdateQueryResult = function(e, t, r) {
        this.cache.write({ result: r, dataId: 'ROOT_QUERY', variables: t, query: e })
      }),
      (e.prototype.reset = function() {
        return this.cache.reset()
      }),
      e
    )
  })(),
  version = '2.6.8',
  hasSuggestedDevtools = !1,
  ApolloClient = (function() {
    function e(e) {
      var t = this
      ;(this.defaultOptions = {}), (this.resetStoreCallbacks = []), (this.clearStoreCallbacks = [])
      var r = e.cache,
        n = e.ssrMode,
        i = void 0 !== n && n,
        o = e.ssrForceFetchDelay,
        a = void 0 === o ? 0 : o,
        s = e.connectToDevTools,
        u = e.queryDeduplication,
        c = void 0 === u || u,
        l = e.defaultOptions,
        p = e.assumeImmutableResults,
        f = void 0 !== p && p,
        d = e.resolvers,
        h = e.typeDefs,
        v = e.fragmentMatcher,
        y = e.name,
        m = e.version,
        b = e.link
      if ((!b && d && (b = ApolloLink.empty()), !b || !r))
        throw 'production' === process.env.NODE_ENV
          ? new InvariantError(1)
          : new InvariantError(
              "In order to initialize Apollo Client, you must specify 'link' and 'cache' properties in the options object.\nThese options are part of the upgrade requirements when migrating from Apollo Client 1.x to Apollo Client 2.x.\nFor more information, please visit: https://www.apollographql.com/docs/tutorial/client.html#apollo-client-setup"
            )
      ;(this.link = b),
        (this.cache = r),
        (this.store = new DataStore(r)),
        (this.disableNetworkFetches = i || a > 0),
        (this.queryDeduplication = c),
        (this.defaultOptions = l || {}),
        (this.typeDefs = h),
        a &&
          setTimeout(function() {
            return (t.disableNetworkFetches = !1)
          }, a),
        (this.watchQuery = this.watchQuery.bind(this)),
        (this.query = this.query.bind(this)),
        (this.mutate = this.mutate.bind(this)),
        (this.resetStore = this.resetStore.bind(this)),
        (this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this))
      var g = 'production' !== process.env.NODE_ENV && 'undefined' != typeof window && !window.__APOLLO_CLIENT__
      ;(void 0 === s ? g : s && 'undefined' != typeof window) && (window.__APOLLO_CLIENT__ = this),
        hasSuggestedDevtools ||
          'production' === process.env.NODE_ENV ||
          ((hasSuggestedDevtools = !0),
          'undefined' != typeof window &&
            window.document &&
            window.top === window.self &&
            void 0 === window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__ &&
            window.navigator &&
            window.navigator.userAgent &&
            window.navigator.userAgent.indexOf('Chrome') > -1 &&
            console.debug(
              'Download the Apollo DevTools for a better development experience: https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm'
            )),
        (this.version = version),
        (this.localState = new LocalState({ cache: r, client: this, resolvers: d, fragmentMatcher: v })),
        (this.queryManager = new QueryManager({
          link: this.link,
          store: this.store,
          queryDeduplication: c,
          ssrMode: i,
          clientAwareness: { name: y, version: m },
          localState: this.localState,
          assumeImmutableResults: f,
          onBroadcast: function() {
            t.devToolsHookCb &&
              t.devToolsHookCb({
                action: {},
                state: {
                  queries: t.queryManager.queryStore.getStore(),
                  mutations: t.queryManager.mutationStore.getStore()
                },
                dataWithOptimisticResults: t.cache.extract(!0)
              })
          }
        }))
    }
    return (
      (e.prototype.stop = function() {
        this.queryManager.stop()
      }),
      (e.prototype.watchQuery = function(e) {
        return (
          this.defaultOptions.watchQuery && (e = __assign(__assign({}, this.defaultOptions.watchQuery), e)),
          !this.disableNetworkFetches ||
            ('network-only' !== e.fetchPolicy && 'cache-and-network' !== e.fetchPolicy) ||
            (e = __assign(__assign({}, e), { fetchPolicy: 'cache-first' })),
          this.queryManager.watchQuery(e)
        )
      }),
      (e.prototype.query = function(e) {
        return (
          this.defaultOptions.query && (e = __assign(__assign({}, this.defaultOptions.query), e)),
          'production' === process.env.NODE_ENV
            ? invariant('cache-and-network' !== e.fetchPolicy, 2)
            : invariant(
                'cache-and-network' !== e.fetchPolicy,
                'The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only.'
              ),
          this.disableNetworkFetches &&
            'network-only' === e.fetchPolicy &&
            (e = __assign(__assign({}, e), { fetchPolicy: 'cache-first' })),
          this.queryManager.query(e)
        )
      }),
      (e.prototype.mutate = function(e) {
        return (
          this.defaultOptions.mutate && (e = __assign(__assign({}, this.defaultOptions.mutate), e)),
          this.queryManager.mutate(e)
        )
      }),
      (e.prototype.subscribe = function(e) {
        return this.queryManager.startGraphQLSubscription(e)
      }),
      (e.prototype.readQuery = function(e, t) {
        return void 0 === t && (t = !1), this.cache.readQuery(e, t)
      }),
      (e.prototype.readFragment = function(e, t) {
        return void 0 === t && (t = !1), this.cache.readFragment(e, t)
      }),
      (e.prototype.writeQuery = function(e) {
        var t = this.cache.writeQuery(e)
        return this.queryManager.broadcastQueries(), t
      }),
      (e.prototype.writeFragment = function(e) {
        var t = this.cache.writeFragment(e)
        return this.queryManager.broadcastQueries(), t
      }),
      (e.prototype.writeData = function(e) {
        var t = this.cache.writeData(e)
        return this.queryManager.broadcastQueries(), t
      }),
      (e.prototype.__actionHookForDevTools = function(e) {
        this.devToolsHookCb = e
      }),
      (e.prototype.__requestRaw = function(e) {
        return execute(this.link, e)
      }),
      (e.prototype.initQueryManager = function() {
        return (
          'production' === process.env.NODE_ENV ||
            invariant.warn(
              'Calling the initQueryManager method is no longer necessary, and it will be removed from ApolloClient in version 3.0.'
            ),
          this.queryManager
        )
      }),
      (e.prototype.resetStore = function() {
        var e = this
        return Promise.resolve()
          .then(function() {
            return e.queryManager.clearStore()
          })
          .then(function() {
            return Promise.all(
              e.resetStoreCallbacks.map(function(e) {
                return e()
              })
            )
          })
          .then(function() {
            return e.reFetchObservableQueries()
          })
      }),
      (e.prototype.clearStore = function() {
        var e = this
        return Promise.resolve()
          .then(function() {
            return e.queryManager.clearStore()
          })
          .then(function() {
            return Promise.all(
              e.clearStoreCallbacks.map(function(e) {
                return e()
              })
            )
          })
      }),
      (e.prototype.onResetStore = function(e) {
        var t = this
        return (
          this.resetStoreCallbacks.push(e),
          function() {
            t.resetStoreCallbacks = t.resetStoreCallbacks.filter(function(t) {
              return t !== e
            })
          }
        )
      }),
      (e.prototype.onClearStore = function(e) {
        var t = this
        return (
          this.clearStoreCallbacks.push(e),
          function() {
            t.clearStoreCallbacks = t.clearStoreCallbacks.filter(function(t) {
              return t !== e
            })
          }
        )
      }),
      (e.prototype.reFetchObservableQueries = function(e) {
        return this.queryManager.reFetchObservableQueries(e)
      }),
      (e.prototype.extract = function(e) {
        return this.cache.extract(e)
      }),
      (e.prototype.restore = function(e) {
        return this.cache.restore(e)
      }),
      (e.prototype.addResolvers = function(e) {
        this.localState.addResolvers(e)
      }),
      (e.prototype.setResolvers = function(e) {
        this.localState.setResolvers(e)
      }),
      (e.prototype.getResolvers = function() {
        return this.localState.getResolvers()
      }),
      (e.prototype.setLocalStateFragmentMatcher = function(e) {
        this.localState.setFragmentMatcher(e)
      }),
      e
    )
  })()
function queryFromPojo(e) {
  return {
    kind: 'Document',
    definitions: [
      {
        kind: 'OperationDefinition',
        operation: 'query',
        name: { kind: 'Name', value: 'GeneratedClientQuery' },
        selectionSet: selectionSetFromObj(e)
      }
    ]
  }
}
function fragmentFromPojo(e, t) {
  return {
    kind: 'Document',
    definitions: [
      {
        kind: 'FragmentDefinition',
        typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: t || '__FakeType' } },
        name: { kind: 'Name', value: 'GeneratedClientQuery' },
        selectionSet: selectionSetFromObj(e)
      }
    ]
  }
}
function selectionSetFromObj(e) {
  if ('number' == typeof e || 'boolean' == typeof e || 'string' == typeof e || null == e) return null
  if (Array.isArray(e)) return selectionSetFromObj(e[0])
  var t = []
  return (
    Object.keys(e).forEach(function(r) {
      var n = { kind: 'Field', name: { kind: 'Name', value: r }, selectionSet: selectionSetFromObj(e[r]) || void 0 }
      t.push(n)
    }),
    { kind: 'SelectionSet', selections: t }
  )
}
var justTypenameQuery = {
    kind: 'Document',
    definitions: [
      {
        kind: 'OperationDefinition',
        operation: 'query',
        name: null,
        variableDefinitions: null,
        directives: [],
        selectionSet: {
          kind: 'SelectionSet',
          selections: [
            {
              kind: 'Field',
              alias: null,
              name: { kind: 'Name', value: '__typename' },
              arguments: [],
              directives: [],
              selectionSet: null
            }
          ]
        }
      }
    ]
  },
  ApolloCache = (function() {
    function e() {}
    return (
      (e.prototype.transformDocument = function(e) {
        return e
      }),
      (e.prototype.transformForLink = function(e) {
        return e
      }),
      (e.prototype.readQuery = function(e, t) {
        return void 0 === t && (t = !1), this.read({ query: e.query, variables: e.variables, optimistic: t })
      }),
      (e.prototype.readFragment = function(e, t) {
        return (
          void 0 === t && (t = !1),
          this.read({
            query: getFragmentQueryDocument(e.fragment, e.fragmentName),
            variables: e.variables,
            rootId: e.id,
            optimistic: t
          })
        )
      }),
      (e.prototype.writeQuery = function(e) {
        this.write({ dataId: 'ROOT_QUERY', result: e.data, query: e.query, variables: e.variables })
      }),
      (e.prototype.writeFragment = function(e) {
        this.write({
          dataId: e.id,
          result: e.data,
          variables: e.variables,
          query: getFragmentQueryDocument(e.fragment, e.fragmentName)
        })
      }),
      (e.prototype.writeData = function(e) {
        var t = e.id,
          r = e.data
        if (void 0 !== t) {
          var n = null
          try {
            n = this.read({ rootId: t, optimistic: !1, query: justTypenameQuery })
          } catch (e) {}
          var i = (n && n.__typename) || '__ClientData',
            o = Object.assign({ __typename: i }, r)
          this.writeFragment({ id: t, fragment: fragmentFromPojo(o, i), data: o })
        } else this.writeQuery({ query: queryFromPojo(r), data: r })
      }),
      e
    )
  })(),
  currentContext = null,
  MISSING_VALUE = {},
  idCounter = 1,
  makeSlotClass = function() {
    return (function() {
      function e() {
        this.id = [
          'slot',
          idCounter++,
          Date.now(),
          Math.random()
            .toString(36)
            .slice(2)
        ].join(':')
      }
      return (
        (e.prototype.hasValue = function() {
          for (var e = currentContext; e; e = e.parent)
            if (this.id in e.slots) {
              var t = e.slots[this.id]
              if (t === MISSING_VALUE) break
              return e !== currentContext && (currentContext.slots[this.id] = t), !0
            }
          return currentContext && (currentContext.slots[this.id] = MISSING_VALUE), !1
        }),
        (e.prototype.getValue = function() {
          if (this.hasValue()) return currentContext.slots[this.id]
        }),
        (e.prototype.withValue = function(e, t, r, n) {
          var i,
            o = (((i = { __proto__: null })[this.id] = e), i),
            a = currentContext
          currentContext = { parent: a, slots: o }
          try {
            return t.apply(n, r)
          } finally {
            currentContext = a
          }
        }),
        (e.bind = function(e) {
          var t = currentContext
          return function() {
            var r = currentContext
            try {
              return (currentContext = t), e.apply(this, arguments)
            } finally {
              currentContext = r
            }
          }
        }),
        (e.noContext = function(e, t, r) {
          if (!currentContext) return e.apply(r, t)
          var n = currentContext
          try {
            return (currentContext = null), e.apply(r, t)
          } finally {
            currentContext = n
          }
        }),
        e
      )
    })()
  },
  globalKey = '@wry/context:Slot',
  host = Array,
  Slot =
    host[globalKey] ||
    (function() {
      var e = makeSlotClass()
      try {
        Object.defineProperty(host, globalKey, {
          value: (host[globalKey] = e),
          enumerable: !1,
          writable: !1,
          configurable: !1
        })
      } finally {
        return e
      }
    })(),
  bind = Slot.bind,
  noContext = Slot.noContext
function defaultDispose() {}
var Cache = (function() {
    function e(e, t) {
      void 0 === e && (e = 1 / 0),
        void 0 === t && (t = defaultDispose),
        (this.max = e),
        (this.dispose = t),
        (this.map = new Map()),
        (this.newest = null),
        (this.oldest = null)
    }
    return (
      (e.prototype.has = function(e) {
        return this.map.has(e)
      }),
      (e.prototype.get = function(e) {
        var t = this.getEntry(e)
        return t && t.value
      }),
      (e.prototype.getEntry = function(e) {
        var t = this.map.get(e)
        if (t && t !== this.newest) {
          var r = t.older,
            n = t.newer
          n && (n.older = r),
            r && (r.newer = n),
            (t.older = this.newest),
            (t.older.newer = t),
            (t.newer = null),
            (this.newest = t),
            t === this.oldest && (this.oldest = n)
        }
        return t
      }),
      (e.prototype.set = function(e, t) {
        var r = this.getEntry(e)
        return r
          ? (r.value = t)
          : ((r = { key: e, value: t, newer: null, older: this.newest }),
            this.newest && (this.newest.newer = r),
            (this.newest = r),
            (this.oldest = this.oldest || r),
            this.map.set(e, r),
            r.value)
      }),
      (e.prototype.clean = function() {
        for (; this.oldest && this.map.size > this.max; ) this.delete(this.oldest.key)
      }),
      (e.prototype.delete = function(e) {
        var t = this.map.get(e)
        return (
          !!t &&
          (t === this.newest && (this.newest = t.older),
          t === this.oldest && (this.oldest = t.newer),
          t.newer && (t.newer.older = t.older),
          t.older && (t.older.newer = t.newer),
          this.map.delete(e),
          this.dispose(t.value, e),
          !0)
        )
      }),
      e
    )
  })(),
  parentEntrySlot = new Slot(),
  reusableEmptyArray = [],
  emptySetPool = [],
  POOL_TARGET_SIZE = 100
function assert(e, t) {
  if (!e) throw new Error(t || 'assertion failure')
}
function valueIs(e, t) {
  var r = e.length
  return r > 0 && r === t.length && e[r - 1] === t[r - 1]
}
function valueGet(e) {
  switch (e.length) {
    case 0:
      throw new Error('unknown value')
    case 1:
      return e[0]
    case 2:
      throw e[1]
  }
}
function valueCopy(e) {
  return e.slice(0)
}
var Entry = (function() {
  function e(t, r) {
    ;(this.fn = t),
      (this.args = r),
      (this.parents = new Set()),
      (this.childValues = new Map()),
      (this.dirtyChildren = null),
      (this.dirty = !0),
      (this.recomputing = !1),
      (this.value = []),
      ++e.count
  }
  return (
    (e.prototype.recompute = function() {
      if ((assert(!this.recomputing, 'already recomputing'), rememberParent(this) || !maybeReportOrphan(this)))
        return mightBeDirty(this) ? reallyRecompute(this) : valueGet(this.value)
    }),
    (e.prototype.setDirty = function() {
      this.dirty || ((this.dirty = !0), (this.value.length = 0), reportDirty(this), maybeUnsubscribe(this))
    }),
    (e.prototype.dispose = function() {
      var e = this
      forgetChildren(this).forEach(maybeReportOrphan),
        maybeUnsubscribe(this),
        this.parents.forEach(function(t) {
          t.setDirty(), forgetChild(t, e)
        })
    }),
    (e.count = 0),
    e
  )
})()
function rememberParent(e) {
  var t = parentEntrySlot.getValue()
  if (t)
    return (
      e.parents.add(t),
      t.childValues.has(e) || t.childValues.set(e, []),
      mightBeDirty(e) ? reportDirtyChild(t, e) : reportCleanChild(t, e),
      t
    )
}
function reallyRecompute(e) {
  var t = forgetChildren(e)
  return (
    parentEntrySlot.withValue(e, recomputeNewValue, [e]),
    maybeSubscribe(e) && setClean(e),
    t.forEach(maybeReportOrphan),
    valueGet(e.value)
  )
}
function recomputeNewValue(e) {
  ;(e.recomputing = !0), (e.value.length = 0)
  try {
    e.value[0] = e.fn.apply(null, e.args)
  } catch (t) {
    e.value[1] = t
  }
  e.recomputing = !1
}
function mightBeDirty(e) {
  return e.dirty || !(!e.dirtyChildren || !e.dirtyChildren.size)
}
function setClean(e) {
  ;(e.dirty = !1), mightBeDirty(e) || reportClean(e)
}
function reportDirty(e) {
  e.parents.forEach(function(t) {
    return reportDirtyChild(t, e)
  })
}
function reportClean(e) {
  e.parents.forEach(function(t) {
    return reportCleanChild(t, e)
  })
}
function reportDirtyChild(e, t) {
  if ((assert(e.childValues.has(t)), assert(mightBeDirty(t)), e.dirtyChildren)) {
    if (e.dirtyChildren.has(t)) return
  } else e.dirtyChildren = emptySetPool.pop() || new Set()
  e.dirtyChildren.add(t), reportDirty(e)
}
function reportCleanChild(e, t) {
  assert(e.childValues.has(t)), assert(!mightBeDirty(t))
  var r = e.childValues.get(t)
  0 === r.length ? e.childValues.set(t, valueCopy(t.value)) : valueIs(r, t.value) || e.setDirty(),
    removeDirtyChild(e, t),
    mightBeDirty(e) || reportClean(e)
}
function removeDirtyChild(e, t) {
  var r = e.dirtyChildren
  r &&
    (r.delete(t),
    0 === r.size && (emptySetPool.length < POOL_TARGET_SIZE && emptySetPool.push(r), (e.dirtyChildren = null)))
}
function maybeReportOrphan(e) {
  return 0 === e.parents.size && 'function' == typeof e.reportOrphan && !0 === e.reportOrphan()
}
function forgetChildren(e) {
  var t = reusableEmptyArray
  return (
    e.childValues.size > 0 &&
      ((t = []),
      e.childValues.forEach(function(r, n) {
        forgetChild(e, n), t.push(n)
      })),
    assert(null === e.dirtyChildren),
    t
  )
}
function forgetChild(e, t) {
  t.parents.delete(e), e.childValues.delete(t), removeDirtyChild(e, t)
}
function maybeSubscribe(e) {
  if ('function' == typeof e.subscribe)
    try {
      maybeUnsubscribe(e), (e.unsubscribe = e.subscribe.apply(null, e.args))
    } catch (t) {
      return e.setDirty(), !1
    }
  return !0
}
function maybeUnsubscribe(e) {
  var t = e.unsubscribe
  'function' == typeof t && ((e.unsubscribe = void 0), t())
}
var KeyTrie = (function() {
  function e(e) {
    this.weakness = e
  }
  return (
    (e.prototype.lookup = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
      return this.lookupArray(e)
    }),
    (e.prototype.lookupArray = function(e) {
      var t = this
      return (
        e.forEach(function(e) {
          return (t = t.getChildTrie(e))
        }),
        t.data || (t.data = Object.create(null))
      )
    }),
    (e.prototype.getChildTrie = function(t) {
      var r =
          this.weakness && isObjRef(t)
            ? this.weak || (this.weak = new WeakMap())
            : this.strong || (this.strong = new Map()),
        n = r.get(t)
      return n || r.set(t, (n = new e(this.weakness))), n
    }),
    e
  )
})()
function isObjRef(e) {
  switch (typeof e) {
    case 'object':
      if (null === e) break
    case 'function':
      return !0
  }
  return !1
}
var keyTrie = new KeyTrie('function' == typeof WeakMap)
function defaultMakeCacheKey() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
  return keyTrie.lookupArray(e)
}
var caches = new Set()
function wrap(e, t) {
  void 0 === t && (t = Object.create(null))
  var r = new Cache(t.max || Math.pow(2, 16), function(e) {
      return e.dispose()
    }),
    n = !!t.disposable,
    i = t.makeCacheKey || defaultMakeCacheKey
  function o() {
    if (!n || parentEntrySlot.hasValue()) {
      var o = i.apply(null, arguments)
      if (void 0 === o) return e.apply(null, arguments)
      var a = Array.prototype.slice.call(arguments),
        s = r.get(o)
      s
        ? (s.args = a)
        : ((s = new Entry(e, a)),
          r.set(o, s),
          (s.subscribe = t.subscribe),
          n &&
            (s.reportOrphan = function() {
              return r.delete(o)
            }))
      var u = s.recompute()
      return (
        r.set(o, s),
        caches.add(r),
        parentEntrySlot.hasValue() ||
          (caches.forEach(function(e) {
            return e.clean()
          }),
          caches.clear()),
        n ? void 0 : u
      )
    }
  }
  return (
    (o.dirty = function() {
      var e = i.apply(null, arguments),
        t = void 0 !== e && r.get(e)
      t && t.setDirty()
    }),
    o
  )
}
var haveWarned = !1
function shouldWarn() {
  var e = !haveWarned
  return isTest() || (haveWarned = !0), e
}
var HeuristicFragmentMatcher = (function() {
    function e() {}
    return (
      (e.prototype.ensureReady = function() {
        return Promise.resolve()
      }),
      (e.prototype.canBypassInit = function() {
        return !0
      }),
      (e.prototype.match = function(e, t, r) {
        var n = r.store.get(e.id),
          i = 'ROOT_QUERY' === e.id
        if (!n) return i
        var o = n.__typename,
          a = void 0 === o ? i && 'Query' : o
        return a
          ? a === t ||
              (shouldWarn() &&
                ('production' === process.env.NODE_ENV ||
                  invariant.error(
                    'You are using the simple (heuristic) fragment matcher, but your queries contain union or interface types. Apollo Client will not be able to accurately map fragments. To make this error go away, use the `IntrospectionFragmentMatcher` as described in the docs: https://www.apollographql.com/docs/react/advanced/fragments.html#fragment-matcher'
                  )),
              'heuristic')
          : (shouldWarn() &&
              ('production' === process.env.NODE_ENV ||
                invariant.warn(
                  "You're using fragments in your queries, but either don't have the addTypename:\n  true option set in Apollo Client, or you are trying to write a fragment to the store without the __typename.\n   Please turn on the addTypename option and include __typename when writing fragments so that Apollo Client\n   can accurately match fragments."
                ),
              'production' === process.env.NODE_ENV || invariant.warn('Could not find __typename on Fragment ', t, n),
              'production' === process.env.NODE_ENV ||
                invariant.warn(
                  'DEPRECATION WARNING: using fragments without __typename is unsupported behavior and will be removed in future versions of Apollo client. You should fix this and set addTypename to true now.'
                )),
            'heuristic')
      }),
      e
    )
  })(),
  hasOwn = Object.prototype.hasOwnProperty,
  DepTrackingCache = (function() {
    function e(e) {
      var t = this
      void 0 === e && (e = Object.create(null)),
        (this.data = e),
        (this.depend = wrap(
          function(e) {
            return t.data[e]
          },
          {
            disposable: !0,
            makeCacheKey: function(e) {
              return e
            }
          }
        ))
    }
    return (
      (e.prototype.toObject = function() {
        return this.data
      }),
      (e.prototype.get = function(e) {
        return this.depend(e), this.data[e]
      }),
      (e.prototype.set = function(e, t) {
        t !== this.data[e] && ((this.data[e] = t), this.depend.dirty(e))
      }),
      (e.prototype.delete = function(e) {
        hasOwn.call(this.data, e) && (delete this.data[e], this.depend.dirty(e))
      }),
      (e.prototype.clear = function() {
        this.replace(null)
      }),
      (e.prototype.replace = function(e) {
        var t = this
        e
          ? (Object.keys(e).forEach(function(r) {
              t.set(r, e[r])
            }),
            Object.keys(this.data).forEach(function(r) {
              hasOwn.call(e, r) || t.delete(r)
            }))
          : Object.keys(this.data).forEach(function(e) {
              t.delete(e)
            })
      }),
      e
    )
  })()
function defaultNormalizedCacheFactory(e) {
  return new DepTrackingCache(e)
}
var StoreReader = (function() {
  function e(e) {
    var t = this,
      r = void 0 === e ? {} : e,
      n = r.cacheKeyRoot,
      i = void 0 === n ? new KeyTrie(canUseWeakMap) : n,
      o = r.freezeResults,
      a = void 0 !== o && o,
      s = this.executeStoreQuery,
      u = this.executeSelectionSet,
      c = this.executeSubSelectedArray
    ;(this.freezeResults = a),
      (this.executeStoreQuery = wrap(
        function(e) {
          return s.call(t, e)
        },
        {
          makeCacheKey: function(e) {
            var t = e.query,
              r = e.rootValue,
              n = e.contextValue,
              o = e.variableValues,
              a = e.fragmentMatcher
            if (n.store instanceof DepTrackingCache) return i.lookup(n.store, t, a, JSON.stringify(o), r.id)
          }
        }
      )),
      (this.executeSelectionSet = wrap(
        function(e) {
          return u.call(t, e)
        },
        {
          makeCacheKey: function(e) {
            var t = e.selectionSet,
              r = e.rootValue,
              n = e.execContext
            if (n.contextValue.store instanceof DepTrackingCache)
              return i.lookup(n.contextValue.store, t, n.fragmentMatcher, JSON.stringify(n.variableValues), r.id)
          }
        }
      )),
      (this.executeSubSelectedArray = wrap(
        function(e) {
          return c.call(t, e)
        },
        {
          makeCacheKey: function(e) {
            var t = e.field,
              r = e.array,
              n = e.execContext
            if (n.contextValue.store instanceof DepTrackingCache)
              return i.lookup(n.contextValue.store, t, r, JSON.stringify(n.variableValues))
          }
        }
      ))
  }
  return (
    (e.prototype.readQueryFromStore = function(e) {
      return this.diffQueryAgainstStore(__assign(__assign({}, e), { returnPartialData: !1 })).result
    }),
    (e.prototype.diffQueryAgainstStore = function(e) {
      var t = e.store,
        r = e.query,
        n = e.variables,
        i = e.previousResult,
        o = e.returnPartialData,
        a = void 0 === o || o,
        s = e.rootId,
        u = void 0 === s ? 'ROOT_QUERY' : s,
        c = e.fragmentMatcherFunction,
        l = e.config
      n = assign({}, getDefaultValues(getQueryDefinition(r)), n)
      var p = { store: t, dataIdFromObject: l && l.dataIdFromObject, cacheRedirects: (l && l.cacheRedirects) || {} },
        f = this.executeStoreQuery({
          query: r,
          rootValue: { type: 'id', id: u, generated: !0, typename: 'Query' },
          contextValue: p,
          variableValues: n,
          fragmentMatcher: c
        }),
        d = f.missing && f.missing.length > 0
      return (
        d &&
          !a &&
          f.missing.forEach(function(e) {
            if (!e.tolerable)
              throw 'production' === process.env.NODE_ENV
                ? new InvariantError(8)
                : new InvariantError(
                    "Can't find field " + e.fieldName + ' on object ' + JSON.stringify(e.object, null, 2) + '.'
                  )
          }),
        i && equal(i, f.result) && (f.result = i),
        { result: f.result, complete: !d }
      )
    }),
    (e.prototype.executeStoreQuery = function(e) {
      var t = e.query,
        r = e.rootValue,
        n = e.contextValue,
        i = e.variableValues,
        o = e.fragmentMatcher,
        a = void 0 === o ? defaultFragmentMatcher : o,
        s = getMainDefinition(t),
        u = {
          query: t,
          fragmentMap: createFragmentMap(getFragmentDefinitions(t)),
          contextValue: n,
          variableValues: i,
          fragmentMatcher: a
        }
      return this.executeSelectionSet({ selectionSet: s.selectionSet, rootValue: r, execContext: u })
    }),
    (e.prototype.executeSelectionSet = function(e) {
      var t = this,
        r = e.selectionSet,
        n = e.rootValue,
        i = e.execContext,
        o = i.fragmentMap,
        a = i.contextValue,
        s = i.variableValues,
        u = { result: null },
        c = [],
        l = a.store.get(n.id),
        p = (l && l.__typename) || ('ROOT_QUERY' === n.id && 'Query') || void 0
      function f(e) {
        var t
        return e.missing && ((u.missing = u.missing || []), (t = u.missing).push.apply(t, e.missing)), e.result
      }
      return (
        r.selections.forEach(function(e) {
          var r
          if (shouldInclude(e, s))
            if (isField(e)) {
              var u = f(t.executeField(l, p, e, i))
              void 0 !== u && c.push((((r = {})[resultKeyNameFromField(e)] = u), r))
            } else {
              var d = void 0
              if (isInlineFragment(e)) d = e
              else if (!(d = o[e.name.value]))
                throw 'production' === process.env.NODE_ENV
                  ? new InvariantError(9)
                  : new InvariantError('No fragment named ' + e.name.value)
              var h = d.typeCondition && d.typeCondition.name.value,
                v = !h || i.fragmentMatcher(n, h, a)
              if (v) {
                var y = t.executeSelectionSet({ selectionSet: d.selectionSet, rootValue: n, execContext: i })
                'heuristic' === v &&
                  y.missing &&
                  (y = __assign(__assign({}, y), {
                    missing: y.missing.map(function(e) {
                      return __assign(__assign({}, e), { tolerable: !0 })
                    })
                  })),
                  c.push(f(y))
              }
            }
        }),
        (u.result = mergeDeepArray(c)),
        this.freezeResults && 'production' !== process.env.NODE_ENV && Object.freeze(u.result),
        u
      )
    }),
    (e.prototype.executeField = function(e, t, r, n) {
      var i = n.variableValues,
        o = n.contextValue,
        a = readStoreResolver(e, t, r.name.value, argumentsObjectFromField(r, i), o, {
          resultKey: resultKeyNameFromField(r),
          directives: getDirectiveInfoFromField(r, i)
        })
      return Array.isArray(a.result)
        ? this.combineExecResults(a, this.executeSubSelectedArray({ field: r, array: a.result, execContext: n }))
        : r.selectionSet
        ? null == a.result
          ? a
          : this.combineExecResults(
              a,
              this.executeSelectionSet({ selectionSet: r.selectionSet, rootValue: a.result, execContext: n })
            )
        : (assertSelectionSetForIdValue(r, a.result),
          this.freezeResults && 'production' !== process.env.NODE_ENV && maybeDeepFreeze(a),
          a)
    }),
    (e.prototype.combineExecResults = function() {
      for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r]
      return (
        t.forEach(function(t) {
          t.missing && (e = e || []).push.apply(e, t.missing)
        }),
        { result: t.pop().result, missing: e }
      )
    }),
    (e.prototype.executeSubSelectedArray = function(e) {
      var t,
        r = this,
        n = e.field,
        i = e.array,
        o = e.execContext
      function a(e) {
        return e.missing && (t = t || []).push.apply(t, e.missing), e.result
      }
      return (
        (i = i.map(function(e) {
          return null === e
            ? null
            : Array.isArray(e)
            ? a(r.executeSubSelectedArray({ field: n, array: e, execContext: o }))
            : n.selectionSet
            ? a(r.executeSelectionSet({ selectionSet: n.selectionSet, rootValue: e, execContext: o }))
            : (assertSelectionSetForIdValue(n, e), e)
        })),
        this.freezeResults && 'production' !== process.env.NODE_ENV && Object.freeze(i),
        { result: i, missing: t }
      )
    }),
    e
  )
})()
function assertSelectionSetForIdValue(e, t) {
  if (!e.selectionSet && isIdValue(t))
    throw 'production' === process.env.NODE_ENV
      ? new InvariantError(10)
      : new InvariantError(
          'Missing selection set for object of type ' + t.typename + ' returned for query field ' + e.name.value
        )
}
function defaultFragmentMatcher() {
  return !0
}
function readStoreResolver(e, t, r, n, i, o) {
  o.resultKey
  var a = o.directives,
    s = r
  ;(n || a) && (s = getStoreKeyName(s, n, a))
  var u = void 0
  if (e && void 0 === (u = e[s]) && i.cacheRedirects && 'string' == typeof t) {
    var c = i.cacheRedirects[t]
    if (c) {
      var l = c[r]
      l &&
        (u = l(e, n, {
          getCacheKey: function(e) {
            var t = i.dataIdFromObject(e)
            return t && toIdValue({ id: t, typename: e.__typename })
          }
        }))
    }
  }
  return void 0 === u
    ? { result: u, missing: [{ object: e, fieldName: s, tolerable: !1 }] }
    : (isJsonValue(u) && (u = u.json), { result: u })
}
var ObjectCache = (function() {
    function e(e) {
      void 0 === e && (e = Object.create(null)), (this.data = e)
    }
    return (
      (e.prototype.toObject = function() {
        return this.data
      }),
      (e.prototype.get = function(e) {
        return this.data[e]
      }),
      (e.prototype.set = function(e, t) {
        this.data[e] = t
      }),
      (e.prototype.delete = function(e) {
        this.data[e] = void 0
      }),
      (e.prototype.clear = function() {
        this.data = Object.create(null)
      }),
      (e.prototype.replace = function(e) {
        this.data = e || Object.create(null)
      }),
      e
    )
  })(),
  WriteError = (function(e) {
    function t() {
      var t = (null !== e && e.apply(this, arguments)) || this
      return (t.type = 'WriteError'), t
    }
    return __extends(t, e), t
  })(Error)
function enhanceErrorWithDocument(e, t) {
  var r = new WriteError('Error writing result to store for query:\n ' + JSON.stringify(t))
  return (r.message += '\n' + e.message), (r.stack = e.stack), r
}
var StoreWriter = (function() {
  function e() {}
  return (
    (e.prototype.writeQueryToStore = function(e) {
      var t = e.query,
        r = e.result,
        n = e.store,
        i = void 0 === n ? defaultNormalizedCacheFactory() : n,
        o = e.variables,
        a = e.dataIdFromObject,
        s = e.fragmentMatcherFunction
      return this.writeResultToStore({
        dataId: 'ROOT_QUERY',
        result: r,
        document: t,
        store: i,
        variables: o,
        dataIdFromObject: a,
        fragmentMatcherFunction: s
      })
    }),
    (e.prototype.writeResultToStore = function(e) {
      var t = e.dataId,
        r = e.result,
        n = e.document,
        i = e.store,
        o = void 0 === i ? defaultNormalizedCacheFactory() : i,
        a = e.variables,
        s = e.dataIdFromObject,
        u = e.fragmentMatcherFunction,
        c = getOperationDefinition(n)
      try {
        return this.writeSelectionSetToStore({
          result: r,
          dataId: t,
          selectionSet: c.selectionSet,
          context: {
            store: o,
            processedData: {},
            variables: assign({}, getDefaultValues(c), a),
            dataIdFromObject: s,
            fragmentMap: createFragmentMap(getFragmentDefinitions(n)),
            fragmentMatcherFunction: u
          }
        })
      } catch (e) {
        throw enhanceErrorWithDocument(e, n)
      }
    }),
    (e.prototype.writeSelectionSetToStore = function(e) {
      var t = this,
        r = e.result,
        n = e.dataId,
        i = e.selectionSet,
        o = e.context,
        a = o.variables,
        s = o.store,
        u = o.fragmentMap
      return (
        i.selections.forEach(function(e) {
          var i
          if (shouldInclude(e, a))
            if (isField(e)) {
              var s = resultKeyNameFromField(e),
                c = r[s]
              if (void 0 !== c) t.writeFieldToStore({ dataId: n, value: c, field: e, context: o })
              else {
                var l = !1,
                  p = !1
                e.directives &&
                  e.directives.length &&
                  ((l = e.directives.some(function(e) {
                    return e.name && 'defer' === e.name.value
                  })),
                  (p = e.directives.some(function(e) {
                    return e.name && 'client' === e.name.value
                  }))),
                  l ||
                    p ||
                    !o.fragmentMatcherFunction ||
                    'production' === process.env.NODE_ENV ||
                    invariant.warn('Missing field ' + s + ' in ' + JSON.stringify(r, null, 2).substring(0, 100))
              }
            } else {
              var f = void 0
              isInlineFragment(e)
                ? (f = e)
                : ((f = (u || {})[e.name.value]),
                  'production' === process.env.NODE_ENV
                    ? invariant(f, 4)
                    : invariant(f, 'No fragment named ' + e.name.value + '.'))
              var d = !0
              if (o.fragmentMatcherFunction && f.typeCondition) {
                var h = n || 'self',
                  v = toIdValue({ id: h, typename: void 0 }),
                  y = { store: new ObjectCache(((i = {}), (i[h] = r), i)), cacheRedirects: {} },
                  m = o.fragmentMatcherFunction(v, f.typeCondition.name.value, y)
                isProduction() ||
                  'heuristic' !== m ||
                  'production' === process.env.NODE_ENV ||
                  invariant.error('WARNING: heuristic fragment matching going on!'),
                  (d = !!m)
              }
              d && t.writeSelectionSetToStore({ result: r, selectionSet: f.selectionSet, dataId: n, context: o })
            }
        }),
        s
      )
    }),
    (e.prototype.writeFieldToStore = function(e) {
      var t,
        r,
        n,
        i = e.field,
        o = e.value,
        a = e.dataId,
        s = e.context,
        u = s.variables,
        c = s.dataIdFromObject,
        l = s.store,
        p = storeKeyNameFromField(i, u)
      if (i.selectionSet && null !== o)
        if (Array.isArray(o)) {
          var f = a + '.' + p
          r = this.processArrayValue(o, f, i.selectionSet, s)
        } else {
          var d = a + '.' + p,
            h = !0
          if ((isGeneratedId(d) || (d = '$' + d), c)) {
            var v = c(o)
            'production' === process.env.NODE_ENV
              ? invariant(!v || !isGeneratedId(v), 5)
              : invariant(
                  !v || !isGeneratedId(v),
                  'IDs returned by dataIdFromObject cannot begin with the "$" character.'
                ),
              (v || ('number' == typeof v && 0 === v)) && ((d = v), (h = !1))
          }
          isDataProcessed(d, i, s.processedData) ||
            this.writeSelectionSetToStore({ dataId: d, result: o, selectionSet: i.selectionSet, context: s })
          var y = o.__typename
          r = toIdValue({ id: d, typename: y }, h)
          var m = (n = l.get(a)) && n[p]
          if (m !== r && isIdValue(m)) {
            var b = void 0 !== m.typename,
              g = void 0 !== y,
              E = b && g && m.typename !== y
            'production' === process.env.NODE_ENV
              ? invariant(!h || m.generated || E, 6)
              : invariant(
                  !h || m.generated || E,
                  'Store error: the application attempted to write an object with no provided id but the store already contains an id of ' +
                    m.id +
                    ' for this object. The selectionSet that was trying to be written is:\n' +
                    JSON.stringify(i)
                ),
              'production' === process.env.NODE_ENV
                ? invariant(!b || g, 7)
                : invariant(
                    !b || g,
                    'Store error: the application attempted to write an object with no provided typename but the store already contains an object with typename of ' +
                      m.typename +
                      ' for the object of id ' +
                      m.id +
                      '. The selectionSet that was trying to be written is:\n' +
                      JSON.stringify(i)
                  ),
              m.generated && (E ? h || l.delete(m.id) : mergeWithGenerated(m.id, r.id, l))
          }
        }
      else r = null != o && 'object' == typeof o ? { type: 'json', json: o } : o
      ;((n = l.get(a)) && equal(r, n[p])) || l.set(a, __assign(__assign({}, n), (((t = {})[p] = r), t)))
    }),
    (e.prototype.processArrayValue = function(e, t, r, n) {
      var i = this
      return e.map(function(e, o) {
        if (null === e) return null
        var a = t + '.' + o
        if (Array.isArray(e)) return i.processArrayValue(e, a, r, n)
        var s = !0
        if (n.dataIdFromObject) {
          var u = n.dataIdFromObject(e)
          u && ((a = u), (s = !1))
        }
        return (
          isDataProcessed(a, r, n.processedData) ||
            i.writeSelectionSetToStore({ dataId: a, result: e, selectionSet: r, context: n }),
          toIdValue({ id: a, typename: e.__typename }, s)
        )
      })
    }),
    e
  )
})()
function isGeneratedId(e) {
  return '$' === e[0]
}
function mergeWithGenerated(e, t, r) {
  if (e === t) return !1
  var n = r.get(e),
    i = r.get(t),
    o = !1
  Object.keys(n).forEach(function(e) {
    var t = n[e],
      a = i[e]
    isIdValue(t) && isGeneratedId(t.id) && isIdValue(a) && !equal(t, a) && mergeWithGenerated(t.id, a.id, r) && (o = !0)
  }),
    r.delete(e)
  var a = __assign(__assign({}, n), i)
  return equal(a, i) ? o : (r.set(t, a), !0)
}
function isDataProcessed(e, t, r) {
  if (!r) return !1
  if (r[e]) {
    if (r[e].indexOf(t) >= 0) return !0
    r[e].push(t)
  } else r[e] = [t]
  return !1
}
var defaultConfig = {
  fragmentMatcher: new HeuristicFragmentMatcher(),
  dataIdFromObject: defaultDataIdFromObject,
  addTypename: !0,
  resultCaching: !0,
  freezeResults: !1
}
function defaultDataIdFromObject(e) {
  if (e.__typename) {
    if (void 0 !== e.id) return e.__typename + ':' + e.id
    if (void 0 !== e._id) return e.__typename + ':' + e._id
  }
  return null
}
var hasOwn$1 = Object.prototype.hasOwnProperty,
  OptimisticCacheLayer = (function(e) {
    function t(t, r, n) {
      var i = e.call(this, Object.create(null)) || this
      return (i.optimisticId = t), (i.parent = r), (i.transaction = n), i
    }
    return (
      __extends(t, e),
      (t.prototype.toObject = function() {
        return __assign(__assign({}, this.parent.toObject()), this.data)
      }),
      (t.prototype.get = function(e) {
        return hasOwn$1.call(this.data, e) ? this.data[e] : this.parent.get(e)
      }),
      t
    )
  })(ObjectCache),
  InMemoryCache = (function(e) {
    function t(t) {
      void 0 === t && (t = {})
      var r = e.call(this) || this
      ;(r.watches = new Set()),
        (r.typenameDocumentCache = new Map()),
        (r.cacheKeyRoot = new KeyTrie(canUseWeakMap)),
        (r.silenceBroadcast = !1),
        (r.config = __assign(__assign({}, defaultConfig), t)),
        r.config.customResolvers &&
          ('production' === process.env.NODE_ENV ||
            invariant.warn(
              'customResolvers have been renamed to cacheRedirects. Please update your config as we will be deprecating customResolvers in the next major version.'
            ),
          (r.config.cacheRedirects = r.config.customResolvers)),
        r.config.cacheResolvers &&
          ('production' === process.env.NODE_ENV ||
            invariant.warn(
              'cacheResolvers have been renamed to cacheRedirects. Please update your config as we will be deprecating cacheResolvers in the next major version.'
            ),
          (r.config.cacheRedirects = r.config.cacheResolvers)),
        (r.addTypename = !!r.config.addTypename),
        (r.data = r.config.resultCaching ? new DepTrackingCache() : new ObjectCache()),
        (r.optimisticData = r.data),
        (r.storeWriter = new StoreWriter()),
        (r.storeReader = new StoreReader({ cacheKeyRoot: r.cacheKeyRoot, freezeResults: t.freezeResults }))
      var n = r,
        i = n.maybeBroadcastWatch
      return (
        (r.maybeBroadcastWatch = wrap(
          function(e) {
            return i.call(r, e)
          },
          {
            makeCacheKey: function(e) {
              if (!e.optimistic && !e.previousResult)
                return n.data instanceof DepTrackingCache
                  ? n.cacheKeyRoot.lookup(e.query, JSON.stringify(e.variables))
                  : void 0
            }
          }
        )),
        r
      )
    }
    return (
      __extends(t, e),
      (t.prototype.restore = function(e) {
        return e && this.data.replace(e), this
      }),
      (t.prototype.extract = function(e) {
        return void 0 === e && (e = !1), (e ? this.optimisticData : this.data).toObject()
      }),
      (t.prototype.read = function(e) {
        if ('string' == typeof e.rootId && void 0 === this.data.get(e.rootId)) return null
        var t = this.config.fragmentMatcher,
          r = t && t.match
        return (
          this.storeReader.readQueryFromStore({
            store: e.optimistic ? this.optimisticData : this.data,
            query: this.transformDocument(e.query),
            variables: e.variables,
            rootId: e.rootId,
            fragmentMatcherFunction: r,
            previousResult: e.previousResult,
            config: this.config
          }) || null
        )
      }),
      (t.prototype.write = function(e) {
        var t = this.config.fragmentMatcher,
          r = t && t.match
        this.storeWriter.writeResultToStore({
          dataId: e.dataId,
          result: e.result,
          variables: e.variables,
          document: this.transformDocument(e.query),
          store: this.data,
          dataIdFromObject: this.config.dataIdFromObject,
          fragmentMatcherFunction: r
        }),
          this.broadcastWatches()
      }),
      (t.prototype.diff = function(e) {
        var t = this.config.fragmentMatcher,
          r = t && t.match
        return this.storeReader.diffQueryAgainstStore({
          store: e.optimistic ? this.optimisticData : this.data,
          query: this.transformDocument(e.query),
          variables: e.variables,
          returnPartialData: e.returnPartialData,
          previousResult: e.previousResult,
          fragmentMatcherFunction: r,
          config: this.config
        })
      }),
      (t.prototype.watch = function(e) {
        var t = this
        return (
          this.watches.add(e),
          function() {
            t.watches.delete(e)
          }
        )
      }),
      (t.prototype.evict = function(e) {
        throw 'production' === process.env.NODE_ENV
          ? new InvariantError(1)
          : new InvariantError('eviction is not implemented on InMemory Cache')
      }),
      (t.prototype.reset = function() {
        return this.data.clear(), this.broadcastWatches(), Promise.resolve()
      }),
      (t.prototype.removeOptimistic = function(e) {
        for (var t = [], r = 0, n = this.optimisticData; n instanceof OptimisticCacheLayer; )
          n.optimisticId === e ? ++r : t.push(n), (n = n.parent)
        if (r > 0) {
          for (this.optimisticData = n; t.length > 0; ) {
            var i = t.pop()
            this.performTransaction(i.transaction, i.optimisticId)
          }
          this.broadcastWatches()
        }
      }),
      (t.prototype.performTransaction = function(e, t) {
        var r = this.data,
          n = this.silenceBroadcast
        ;(this.silenceBroadcast = !0),
          'string' == typeof t &&
            (this.data = this.optimisticData = new OptimisticCacheLayer(t, this.optimisticData, e))
        try {
          e(this)
        } finally {
          ;(this.silenceBroadcast = n), (this.data = r)
        }
        this.broadcastWatches()
      }),
      (t.prototype.recordOptimisticTransaction = function(e, t) {
        return this.performTransaction(e, t)
      }),
      (t.prototype.transformDocument = function(e) {
        if (this.addTypename) {
          var t = this.typenameDocumentCache.get(e)
          return (
            t ||
              ((t = addTypenameToDocument(e)),
              this.typenameDocumentCache.set(e, t),
              this.typenameDocumentCache.set(t, t)),
            t
          )
        }
        return e
      }),
      (t.prototype.broadcastWatches = function() {
        var e = this
        this.silenceBroadcast ||
          this.watches.forEach(function(t) {
            return e.maybeBroadcastWatch(t)
          })
      }),
      (t.prototype.maybeBroadcastWatch = function(e) {
        e.callback(
          this.diff({
            query: e.query,
            variables: e.variables,
            previousResult: e.previousResult && e.previousResult(),
            optimistic: e.optimistic
          })
        )
      }),
      t
    )
  })(ApolloCache)
function dedentBlockStringValue(e) {
  var t = e.split(/\r\n|[\n\r]/g),
    r = getBlockStringIndentation(t)
  if (0 !== r) for (var n = 1; n < t.length; n++) t[n] = t[n].slice(r)
  for (; t.length > 0 && isBlank(t[0]); ) t.shift()
  for (; t.length > 0 && isBlank(t[t.length - 1]); ) t.pop()
  return t.join('\n')
}
function getBlockStringIndentation(e) {
  for (var t = null, r = 1; r < e.length; r++) {
    var n = e[r],
      i = leadingWhitespace(n)
    if (i !== n.length && ((null === t || i < t) && 0 === (t = i))) break
  }
  return null === t ? 0 : t
}
function leadingWhitespace(e) {
  for (var t = 0; t < e.length && (' ' === e[t] || '\t' === e[t]); ) t++
  return t
}
function isBlank(e) {
  return leadingWhitespace(e) === e.length
}
function printBlockString(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
    r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    n = -1 === e.indexOf('\n'),
    i = ' ' === e[0] || '\t' === e[0],
    o = '"' === e[e.length - 1],
    a = !n || o || r,
    s = ''
  return (
    !a || (n && i) || (s += '\n' + t),
    (s += t ? e.replace(/\n/g, '\n' + t) : e),
    a && (s += '\n'),
    '"""' + s.replace(/"""/g, '\\"""') + '"""'
  )
}
function print(e) {
  return visit(e, { leave: printDocASTReducer })
}
var printDocASTReducer = {
  Name: function(e) {
    return e.value
  },
  Variable: function(e) {
    return '$' + e.name
  },
  Document: function(e) {
    return join(e.definitions, '\n\n') + '\n'
  },
  OperationDefinition: function(e) {
    var t = e.operation,
      r = e.name,
      n = wrap$1('(', join(e.variableDefinitions, ', '), ')'),
      i = join(e.directives, ' '),
      o = e.selectionSet
    return r || i || n || 'query' !== t ? join([t, join([r, n]), i, o], ' ') : o
  },
  VariableDefinition: function(e) {
    var t = e.variable,
      r = e.type,
      n = e.defaultValue,
      i = e.directives
    return t + ': ' + r + wrap$1(' = ', n) + wrap$1(' ', join(i, ' '))
  },
  SelectionSet: function(e) {
    return block(e.selections)
  },
  Field: function(e) {
    var t = e.alias,
      r = e.name,
      n = e.arguments,
      i = e.directives,
      o = e.selectionSet
    return join([wrap$1('', t, ': ') + r + wrap$1('(', join(n, ', '), ')'), join(i, ' '), o], ' ')
  },
  Argument: function(e) {
    return e.name + ': ' + e.value
  },
  FragmentSpread: function(e) {
    return '...' + e.name + wrap$1(' ', join(e.directives, ' '))
  },
  InlineFragment: function(e) {
    var t = e.typeCondition,
      r = e.directives,
      n = e.selectionSet
    return join(['...', wrap$1('on ', t), join(r, ' '), n], ' ')
  },
  FragmentDefinition: function(e) {
    var t = e.name,
      r = e.typeCondition,
      n = e.variableDefinitions,
      i = e.directives,
      o = e.selectionSet
    return (
      'fragment '.concat(t).concat(wrap$1('(', join(n, ', '), ')'), ' ') +
      'on '.concat(r, ' ').concat(wrap$1('', join(i, ' '), ' ')) +
      o
    )
  },
  IntValue: function(e) {
    return e.value
  },
  FloatValue: function(e) {
    return e.value
  },
  StringValue: function(e, t) {
    var r = e.value
    return e.block ? printBlockString(r, 'description' === t ? '' : '  ') : JSON.stringify(r)
  },
  BooleanValue: function(e) {
    return e.value ? 'true' : 'false'
  },
  NullValue: function() {
    return 'null'
  },
  EnumValue: function(e) {
    return e.value
  },
  ListValue: function(e) {
    return '[' + join(e.values, ', ') + ']'
  },
  ObjectValue: function(e) {
    return '{' + join(e.fields, ', ') + '}'
  },
  ObjectField: function(e) {
    return e.name + ': ' + e.value
  },
  Directive: function(e) {
    return '@' + e.name + wrap$1('(', join(e.arguments, ', '), ')')
  },
  NamedType: function(e) {
    return e.name
  },
  ListType: function(e) {
    return '[' + e.type + ']'
  },
  NonNullType: function(e) {
    return e.type + '!'
  },
  SchemaDefinition: function(e) {
    var t = e.directives,
      r = e.operationTypes
    return join(['schema', join(t, ' '), block(r)], ' ')
  },
  OperationTypeDefinition: function(e) {
    return e.operation + ': ' + e.type
  },
  ScalarTypeDefinition: addDescription(function(e) {
    return join(['scalar', e.name, join(e.directives, ' ')], ' ')
  }),
  ObjectTypeDefinition: addDescription(function(e) {
    var t = e.name,
      r = e.interfaces,
      n = e.directives,
      i = e.fields
    return join(['type', t, wrap$1('implements ', join(r, ' & ')), join(n, ' '), block(i)], ' ')
  }),
  FieldDefinition: addDescription(function(e) {
    var t = e.name,
      r = e.arguments,
      n = e.type,
      i = e.directives
    return (
      t +
      (hasMultilineItems(r) ? wrap$1('(\n', indent(join(r, '\n')), '\n)') : wrap$1('(', join(r, ', '), ')')) +
      ': ' +
      n +
      wrap$1(' ', join(i, ' '))
    )
  }),
  InputValueDefinition: addDescription(function(e) {
    var t = e.name,
      r = e.type,
      n = e.defaultValue,
      i = e.directives
    return join([t + ': ' + r, wrap$1('= ', n), join(i, ' ')], ' ')
  }),
  InterfaceTypeDefinition: addDescription(function(e) {
    var t = e.name,
      r = e.directives,
      n = e.fields
    return join(['interface', t, join(r, ' '), block(n)], ' ')
  }),
  UnionTypeDefinition: addDescription(function(e) {
    var t = e.name,
      r = e.directives,
      n = e.types
    return join(['union', t, join(r, ' '), n && 0 !== n.length ? '= ' + join(n, ' | ') : ''], ' ')
  }),
  EnumTypeDefinition: addDescription(function(e) {
    var t = e.name,
      r = e.directives,
      n = e.values
    return join(['enum', t, join(r, ' '), block(n)], ' ')
  }),
  EnumValueDefinition: addDescription(function(e) {
    return join([e.name, join(e.directives, ' ')], ' ')
  }),
  InputObjectTypeDefinition: addDescription(function(e) {
    var t = e.name,
      r = e.directives,
      n = e.fields
    return join(['input', t, join(r, ' '), block(n)], ' ')
  }),
  DirectiveDefinition: addDescription(function(e) {
    var t = e.name,
      r = e.arguments,
      n = e.repeatable,
      i = e.locations
    return (
      'directive @' +
      t +
      (hasMultilineItems(r) ? wrap$1('(\n', indent(join(r, '\n')), '\n)') : wrap$1('(', join(r, ', '), ')')) +
      (n ? ' repeatable' : '') +
      ' on ' +
      join(i, ' | ')
    )
  }),
  SchemaExtension: function(e) {
    var t = e.directives,
      r = e.operationTypes
    return join(['extend schema', join(t, ' '), block(r)], ' ')
  },
  ScalarTypeExtension: function(e) {
    return join(['extend scalar', e.name, join(e.directives, ' ')], ' ')
  },
  ObjectTypeExtension: function(e) {
    var t = e.name,
      r = e.interfaces,
      n = e.directives,
      i = e.fields
    return join(['extend type', t, wrap$1('implements ', join(r, ' & ')), join(n, ' '), block(i)], ' ')
  },
  InterfaceTypeExtension: function(e) {
    var t = e.name,
      r = e.directives,
      n = e.fields
    return join(['extend interface', t, join(r, ' '), block(n)], ' ')
  },
  UnionTypeExtension: function(e) {
    var t = e.name,
      r = e.directives,
      n = e.types
    return join(['extend union', t, join(r, ' '), n && 0 !== n.length ? '= ' + join(n, ' | ') : ''], ' ')
  },
  EnumTypeExtension: function(e) {
    var t = e.name,
      r = e.directives,
      n = e.values
    return join(['extend enum', t, join(r, ' '), block(n)], ' ')
  },
  InputObjectTypeExtension: function(e) {
    var t = e.name,
      r = e.directives,
      n = e.fields
    return join(['extend input', t, join(r, ' '), block(n)], ' ')
  }
}
function addDescription(e) {
  return function(t) {
    return join([t.description, e(t)], '\n')
  }
}
function join(e, t) {
  return e
    ? e
        .filter(function(e) {
          return e
        })
        .join(t || '')
    : ''
}
function block(e) {
  return e && 0 !== e.length ? '{\n' + indent(join(e, '\n')) + '\n}' : ''
}
function wrap$1(e, t, r) {
  return t ? e + t + (r || '') : ''
}
function indent(e) {
  return e && '  ' + e.replace(/\n/g, '\n  ')
}
function isMultiline(e) {
  return -1 !== e.indexOf('\n')
}
function hasMultilineItems(e) {
  return e && e.some(isMultiline)
}
var defaultHttpOptions = { includeQuery: !0, includeExtensions: !1 },
  defaultHeaders = { accept: '*/*', 'content-type': 'application/json' },
  defaultOptions = { method: 'POST' },
  fallbackHttpConfig = { http: defaultHttpOptions, headers: defaultHeaders, options: defaultOptions },
  throwServerError = function(e, t, r) {
    var n = new Error(r)
    throw ((n.name = 'ServerError'), (n.response = e), (n.statusCode = e.status), (n.result = t), n)
  },
  parseAndCheckHttpResponse = function(e) {
    return function(t) {
      return t
        .text()
        .then(function(e) {
          try {
            return JSON.parse(e)
          } catch (n) {
            var r = n
            return (
              (r.name = 'ServerParseError'),
              (r.response = t),
              (r.statusCode = t.status),
              (r.bodyText = e),
              Promise.reject(r)
            )
          }
        })
        .then(function(r) {
          return (
            t.status >= 300 && throwServerError(t, r, 'Response not successful: Received status code ' + t.status),
            Array.isArray(r) ||
              r.hasOwnProperty('data') ||
              r.hasOwnProperty('errors') ||
              throwServerError(
                t,
                r,
                "Server response was missing for query '" +
                  (Array.isArray(e)
                    ? e.map(function(e) {
                        return e.operationName
                      })
                    : e.operationName) +
                  "'."
              ),
            r
          )
        })
    }
  },
  checkFetcher = function(e) {
    if (!e && 'undefined' == typeof fetch) {
      var t = 'unfetch'
      throw ('undefined' == typeof window && (t = 'node-fetch'),
      'production' === process.env.NODE_ENV
        ? new InvariantError(1)
        : new InvariantError(
            '\nfetch is not found globally and no fetcher passed, to fix pass a fetch for\nyour environment like https://www.npmjs.com/package/' +
              t +
              ".\n\nFor example:\nimport fetch from '" +
              t +
              "';\nimport { createHttpLink } from 'apollo-link-http';\n\nconst link = createHttpLink({ uri: '/graphql', fetch: fetch });"
          ))
    }
  },
  createSignalIfSupported = function() {
    if ('undefined' == typeof AbortController) return { controller: !1, signal: !1 }
    var e = new AbortController()
    return { controller: e, signal: e.signal }
  },
  selectHttpOptionsAndBody = function(e, t) {
    for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n]
    var i = __assign({}, t.options, { headers: t.headers, credentials: t.credentials }),
      o = t.http
    r.forEach(function(e) {
      ;(i = __assign({}, i, e.options, { headers: __assign({}, i.headers, e.headers) })),
        e.credentials && (i.credentials = e.credentials),
        (o = __assign({}, o, e.http))
    })
    var a = e.operationName,
      s = e.extensions,
      u = e.variables,
      c = e.query,
      l = { operationName: a, variables: u }
    return o.includeExtensions && (l.extensions = s), o.includeQuery && (l.query = print(c)), { options: i, body: l }
  },
  serializeFetchParameter = function(e, t) {
    var r
    try {
      r = JSON.stringify(e)
    } catch (e) {
      var n =
        'production' === process.env.NODE_ENV
          ? new InvariantError(2)
          : new InvariantError('Network request failed. ' + t + ' is not serializable: ' + e.message)
      throw ((n.parseError = e), n)
    }
    return r
  },
  selectURI = function(e, t) {
    var r = e.getContext().uri
    return r || ('function' == typeof t ? t(e) : t || '/graphql')
  },
  createHttpLink = function(e) {
    void 0 === e && (e = {})
    var t = e.uri,
      r = void 0 === t ? '/graphql' : t,
      n = e.fetch,
      i = e.includeExtensions,
      o = e.useGETForQueries,
      a = __rest(e, ['uri', 'fetch', 'includeExtensions', 'useGETForQueries'])
    checkFetcher(n), n || (n = fetch)
    var s = { http: { includeExtensions: i }, options: a.fetchOptions, credentials: a.credentials, headers: a.headers }
    return new ApolloLink(function(e) {
      var t = selectURI(e, r),
        i = e.getContext(),
        a = {}
      if (i.clientAwareness) {
        var u = i.clientAwareness,
          c = u.name,
          l = u.version
        c && (a['apollographql-client-name'] = c), l && (a['apollographql-client-version'] = l)
      }
      var p,
        f = __assign({}, a, i.headers),
        d = { http: i.http, options: i.fetchOptions, credentials: i.credentials, headers: f },
        h = selectHttpOptionsAndBody(e, fallbackHttpConfig, s, d),
        v = h.options,
        y = h.body
      if (!v.signal) {
        var m = createSignalIfSupported(),
          b = m.controller,
          g = m.signal
        ;(p = b) && (v.signal = g)
      }
      if (
        (o &&
          !e.query.definitions.some(function(e) {
            return 'OperationDefinition' === e.kind && 'mutation' === e.operation
          }) &&
          (v.method = 'GET'),
        'GET' === v.method)
      ) {
        var E = rewriteURIForGET(t, y),
          _ = E.newURI,
          O = E.parseError
        if (O) return fromError(O)
        t = _
      } else
        try {
          v.body = serializeFetchParameter(y, 'Payload')
        } catch (O) {
          return fromError(O)
        }
      return new Observable(function(r) {
        return (
          n(t, v)
            .then(function(t) {
              return e.setContext({ response: t }), t
            })
            .then(parseAndCheckHttpResponse(e))
            .then(function(e) {
              return r.next(e), r.complete(), e
            })
            .catch(function(e) {
              'AbortError' !== e.name && (e.result && e.result.errors && e.result.data && r.next(e.result), r.error(e))
            }),
          function() {
            p && p.abort()
          }
        )
      })
    })
  }
function rewriteURIForGET(e, t) {
  var r = [],
    n = function(e, t) {
      r.push(e + '=' + encodeURIComponent(t))
    }
  if (('query' in t && n('query', t.query), t.operationName && n('operationName', t.operationName), t.variables)) {
    var i = void 0
    try {
      i = serializeFetchParameter(t.variables, 'Variables map')
    } catch (e) {
      return { parseError: e }
    }
    n('variables', i)
  }
  if (t.extensions) {
    var o = void 0
    try {
      o = serializeFetchParameter(t.extensions, 'Extensions map')
    } catch (e) {
      return { parseError: e }
    }
    n('extensions', o)
  }
  var a = '',
    s = e,
    u = e.indexOf('#')
  ;-1 !== u && ((a = e.substr(u)), (s = e.substr(0, u)))
  var c = -1 === s.indexOf('?') ? '?' : '&'
  return { newURI: s + c + r.join('&') + a }
}
var HttpLink = (function(e) {
  function t(t) {
    return e.call(this, createHttpLink(t).request) || this
  }
  return __extends(t, e), t
})(ApolloLink)
function onError(e) {
  return new ApolloLink(function(t, r) {
    return new Observable(function(n) {
      var i, o, a
      try {
        i = r(t).subscribe({
          next: function(i) {
            i.errors && (a = e({ graphQLErrors: i.errors, response: i, operation: t, forward: r }))
              ? (o = a.subscribe({ next: n.next.bind(n), error: n.error.bind(n), complete: n.complete.bind(n) }))
              : n.next(i)
          },
          error: function(i) {
            ;(a = e({ operation: t, networkError: i, graphQLErrors: i && i.result && i.result.errors, forward: r }))
              ? (o = a.subscribe({ next: n.next.bind(n), error: n.error.bind(n), complete: n.complete.bind(n) }))
              : n.error(i)
          },
          complete: function() {
            a || n.complete.bind(n)()
          }
        })
      } catch (i) {
        e({ networkError: i, operation: t, forward: r }), n.error(i)
      }
      return function() {
        i && i.unsubscribe(), o && i.unsubscribe()
      }
    })
  })
}
var ErrorLink = (function(e) {
  function t(t) {
    var r = e.call(this) || this
    return (r.link = onError(t)), r
  }
  return (
    __extends(t, e),
    (t.prototype.request = function(e, t) {
      return this.link.request(e, t)
    }),
    t
  )
})(ApolloLink)
function devAssert(e, t) {
  if (!Boolean(e)) throw new Error(t)
}
function defineToJSON(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.prototype.toString
  ;(e.prototype.toJSON = t),
    (e.prototype.inspect = t),
    nodejsCustomInspectSymbol && (e.prototype[nodejsCustomInspectSymbol] = t)
}
function _typeof$1(e) {
  return (_typeof$1 =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function(e) {
          return typeof e
        }
      : function(e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
            ? 'symbol'
            : typeof e
        })(e)
}
function isObjectLike(e) {
  return 'object' == _typeof$1(e) && null !== e
}
function getLocation(e, t) {
  for (var r, n = /\r\n|[\n\r]/g, i = 1, o = t + 1; (r = n.exec(e.body)) && r.index < t; )
    (i += 1), (o = t + 1 - (r.index + r[0].length))
  return { line: i, column: o }
}
function printLocation(e) {
  return printSourceLocation(e.source, getLocation(e.source, e.start))
}
function printSourceLocation(e, t) {
  var r = e.locationOffset.column - 1,
    n = whitespace(r) + e.body,
    i = t.line - 1,
    o = e.locationOffset.line - 1,
    a = t.line + o,
    s = 1 === t.line ? r : 0,
    u = t.column + s,
    c = ''
      .concat(e.name, ':')
      .concat(a, ':')
      .concat(u, '\n'),
    l = n.split(/\r\n|[\n\r]/g),
    p = l[i]
  if (p.length > 120) {
    for (var f = Math.floor(u / 80), d = u % 80, h = [], v = 0; v < p.length; v += 80) h.push(p.slice(v, v + 80))
    return (
      c +
      printPrefixedLines(
        [[''.concat(a), h[0]]].concat(
          h.slice(1, f + 1).map(function(e) {
            return ['', e]
          }),
          [[' ', whitespace(d - 1) + '^'], ['', h[f + 1]]]
        )
      )
    )
  }
  return (
    c +
    printPrefixedLines([
      [''.concat(a - 1), l[i - 1]],
      [''.concat(a), p],
      ['', whitespace(u - 1) + '^'],
      [''.concat(a + 1), l[i + 1]]
    ])
  )
}
function printPrefixedLines(e) {
  var t = e.filter(function(e) {
      e[0]
      return void 0 !== e[1]
    }),
    r = Math.max.apply(
      Math,
      t.map(function(e) {
        return e[0].length
      })
    )
  return t
    .map(function(e) {
      var t = e[0],
        n = e[1]
      return lpad(r, t) + (n ? ' | ' + n : ' |')
    })
    .join('\n')
}
function whitespace(e) {
  return Array(e + 1).join(' ')
}
function lpad(e, t) {
  return whitespace(e - t.length) + t
}
function GraphQLError(e, t, r, n, i, o, a) {
  var s = Array.isArray(t) ? (0 !== t.length ? t : void 0) : t ? [t] : void 0,
    u = r
  if (!u && s) {
    var c = s[0]
    u = c && c.loc && c.loc.source
  }
  var l,
    p = n
  !p &&
    s &&
    (p = s.reduce(function(e, t) {
      return t.loc && e.push(t.loc.start), e
    }, [])),
    p && 0 === p.length && (p = void 0),
    n && r
      ? (l = n.map(function(e) {
          return getLocation(r, e)
        }))
      : s &&
        (l = s.reduce(function(e, t) {
          return t.loc && e.push(getLocation(t.loc.source, t.loc.start)), e
        }, []))
  var f = a
  if (null == f && null != o) {
    var d = o.extensions
    isObjectLike(d) && (f = d)
  }
  Object.defineProperties(this, {
    message: { value: e, enumerable: !0, writable: !0 },
    locations: { value: l || void 0, enumerable: Boolean(l) },
    path: { value: i || void 0, enumerable: Boolean(i) },
    nodes: { value: s || void 0 },
    source: { value: u || void 0 },
    positions: { value: p || void 0 },
    originalError: { value: o },
    extensions: { value: f || void 0, enumerable: Boolean(f) }
  }),
    o && o.stack
      ? Object.defineProperty(this, 'stack', { value: o.stack, writable: !0, configurable: !0 })
      : Error.captureStackTrace
      ? Error.captureStackTrace(this, GraphQLError)
      : Object.defineProperty(this, 'stack', { value: Error().stack, writable: !0, configurable: !0 })
}
function printError(e) {
  var t = e.message
  if (e.nodes)
    for (var r = 0, n = e.nodes; r < n.length; r++) {
      var i = n[r]
      i.loc && (t += '\n\n' + printLocation(i.loc))
    }
  else if (e.source && e.locations)
    for (var o = 0, a = e.locations; o < a.length; o++) {
      var s = a[o]
      t += '\n\n' + printSourceLocation(e.source, s)
    }
  return t
}
function syntaxError(e, t, r) {
  return new GraphQLError('Syntax Error: '.concat(r), void 0, e, [t])
}
GraphQLError.prototype = Object.create(Error.prototype, {
  constructor: { value: GraphQLError },
  name: { value: 'GraphQLError' },
  toString: {
    value: function() {
      return printError(this)
    }
  }
})
var Kind = Object.freeze({
  NAME: 'Name',
  DOCUMENT: 'Document',
  OPERATION_DEFINITION: 'OperationDefinition',
  VARIABLE_DEFINITION: 'VariableDefinition',
  SELECTION_SET: 'SelectionSet',
  FIELD: 'Field',
  ARGUMENT: 'Argument',
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  FRAGMENT_DEFINITION: 'FragmentDefinition',
  VARIABLE: 'Variable',
  INT: 'IntValue',
  FLOAT: 'FloatValue',
  STRING: 'StringValue',
  BOOLEAN: 'BooleanValue',
  NULL: 'NullValue',
  ENUM: 'EnumValue',
  LIST: 'ListValue',
  OBJECT: 'ObjectValue',
  OBJECT_FIELD: 'ObjectField',
  DIRECTIVE: 'Directive',
  NAMED_TYPE: 'NamedType',
  LIST_TYPE: 'ListType',
  NON_NULL_TYPE: 'NonNullType',
  SCHEMA_DEFINITION: 'SchemaDefinition',
  OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
  SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
  OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
  FIELD_DEFINITION: 'FieldDefinition',
  INPUT_VALUE_DEFINITION: 'InputValueDefinition',
  INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
  UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
  ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
  ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
  INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
  DIRECTIVE_DEFINITION: 'DirectiveDefinition',
  SCHEMA_EXTENSION: 'SchemaExtension',
  SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
  OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
  INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
  UNION_TYPE_EXTENSION: 'UnionTypeExtension',
  ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
  INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension'
})
function defineToStringTag(e) {
  'function' == typeof Symbol &&
    Symbol.toStringTag &&
    Object.defineProperty(e.prototype, Symbol.toStringTag, {
      get: function() {
        return this.constructor.name
      }
    })
}
var Source = function(e, t, r) {
  ;(this.body = e),
    (this.name = t || 'GraphQL request'),
    (this.locationOffset = r || { line: 1, column: 1 }),
    this.locationOffset.line > 0 || devAssert(0, 'line in locationOffset is 1-indexed and must be positive'),
    this.locationOffset.column > 0 || devAssert(0, 'column in locationOffset is 1-indexed and must be positive')
}
defineToStringTag(Source)
var TokenKind = Object.freeze({
  SOF: '<SOF>',
  EOF: '<EOF>',
  BANG: '!',
  DOLLAR: '$',
  AMP: '&',
  PAREN_L: '(',
  PAREN_R: ')',
  SPREAD: '...',
  COLON: ':',
  EQUALS: '=',
  AT: '@',
  BRACKET_L: '[',
  BRACKET_R: ']',
  BRACE_L: '{',
  PIPE: '|',
  BRACE_R: '}',
  NAME: 'Name',
  INT: 'Int',
  FLOAT: 'Float',
  STRING: 'String',
  BLOCK_STRING: 'BlockString',
  COMMENT: 'Comment'
})
function createLexer(e, t) {
  var r = new Tok(TokenKind.SOF, 0, 0, 0, 0, null)
  return {
    source: e,
    options: t,
    lastToken: r,
    token: r,
    line: 1,
    lineStart: 0,
    advance: advanceLexer,
    lookahead: lookahead
  }
}
function advanceLexer() {
  return (this.lastToken = this.token), (this.token = this.lookahead())
}
function lookahead() {
  var e = this.token
  if (e.kind !== TokenKind.EOF)
    do {
      e = e.next || (e.next = readToken(this, e))
    } while (e.kind === TokenKind.COMMENT)
  return e
}
function Tok(e, t, r, n, i, o, a) {
  ;(this.kind = e),
    (this.start = t),
    (this.end = r),
    (this.line = n),
    (this.column = i),
    (this.value = a),
    (this.prev = o),
    (this.next = null)
}
function printCharCode(e) {
  return isNaN(e)
    ? TokenKind.EOF
    : e < 127
    ? JSON.stringify(String.fromCharCode(e))
    : '"\\u'.concat(('00' + e.toString(16).toUpperCase()).slice(-4), '"')
}
function readToken(e, t) {
  var r = e.source,
    n = r.body,
    i = n.length,
    o = positionAfterWhitespace(n, t.end, e),
    a = e.line,
    s = 1 + o - e.lineStart
  if (o >= i) return new Tok(TokenKind.EOF, i, i, a, s, t)
  var u = n.charCodeAt(o)
  switch (u) {
    case 33:
      return new Tok(TokenKind.BANG, o, o + 1, a, s, t)
    case 35:
      return readComment(r, o, a, s, t)
    case 36:
      return new Tok(TokenKind.DOLLAR, o, o + 1, a, s, t)
    case 38:
      return new Tok(TokenKind.AMP, o, o + 1, a, s, t)
    case 40:
      return new Tok(TokenKind.PAREN_L, o, o + 1, a, s, t)
    case 41:
      return new Tok(TokenKind.PAREN_R, o, o + 1, a, s, t)
    case 46:
      if (46 === n.charCodeAt(o + 1) && 46 === n.charCodeAt(o + 2)) return new Tok(TokenKind.SPREAD, o, o + 3, a, s, t)
      break
    case 58:
      return new Tok(TokenKind.COLON, o, o + 1, a, s, t)
    case 61:
      return new Tok(TokenKind.EQUALS, o, o + 1, a, s, t)
    case 64:
      return new Tok(TokenKind.AT, o, o + 1, a, s, t)
    case 91:
      return new Tok(TokenKind.BRACKET_L, o, o + 1, a, s, t)
    case 93:
      return new Tok(TokenKind.BRACKET_R, o, o + 1, a, s, t)
    case 123:
      return new Tok(TokenKind.BRACE_L, o, o + 1, a, s, t)
    case 124:
      return new Tok(TokenKind.PIPE, o, o + 1, a, s, t)
    case 125:
      return new Tok(TokenKind.BRACE_R, o, o + 1, a, s, t)
    case 65:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
    case 80:
    case 81:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
    case 88:
    case 89:
    case 90:
    case 95:
    case 97:
    case 98:
    case 99:
    case 100:
    case 101:
    case 102:
    case 103:
    case 104:
    case 105:
    case 106:
    case 107:
    case 108:
    case 109:
    case 110:
    case 111:
    case 112:
    case 113:
    case 114:
    case 115:
    case 116:
    case 117:
    case 118:
    case 119:
    case 120:
    case 121:
    case 122:
      return readName(r, o, a, s, t)
    case 45:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return readNumber(r, o, u, a, s, t)
    case 34:
      return 34 === n.charCodeAt(o + 1) && 34 === n.charCodeAt(o + 2)
        ? readBlockString(r, o, a, s, t, e)
        : readString(r, o, a, s, t)
  }
  throw syntaxError(r, o, unexpectedCharacterMessage(u))
}
function unexpectedCharacterMessage(e) {
  return e < 32 && 9 !== e && 10 !== e && 13 !== e
    ? 'Cannot contain the invalid character '.concat(printCharCode(e), '.')
    : 39 === e
    ? 'Unexpected single quote character (\'), did you mean to use a double quote (")?'
    : 'Cannot parse the unexpected character '.concat(printCharCode(e), '.')
}
function positionAfterWhitespace(e, t, r) {
  for (var n = e.length, i = t; i < n; ) {
    var o = e.charCodeAt(i)
    if (9 === o || 32 === o || 44 === o || 65279 === o) ++i
    else if (10 === o) ++i, ++r.line, (r.lineStart = i)
    else {
      if (13 !== o) break
      10 === e.charCodeAt(i + 1) ? (i += 2) : ++i, ++r.line, (r.lineStart = i)
    }
  }
  return i
}
function readComment(e, t, r, n, i) {
  var o,
    a = e.body,
    s = t
  do {
    o = a.charCodeAt(++s)
  } while (!isNaN(o) && (o > 31 || 9 === o))
  return new Tok(TokenKind.COMMENT, t, s, r, n, i, a.slice(t + 1, s))
}
function readNumber(e, t, r, n, i, o) {
  var a = e.body,
    s = r,
    u = t,
    c = !1
  if ((45 === s && (s = a.charCodeAt(++u)), 48 === s)) {
    if ((s = a.charCodeAt(++u)) >= 48 && s <= 57)
      throw syntaxError(e, u, 'Invalid number, unexpected digit after 0: '.concat(printCharCode(s), '.'))
  } else (u = readDigits(e, u, s)), (s = a.charCodeAt(u))
  if (
    (46 === s && ((c = !0), (s = a.charCodeAt(++u)), (u = readDigits(e, u, s)), (s = a.charCodeAt(u))),
    (69 !== s && 101 !== s) ||
      ((c = !0),
      (43 !== (s = a.charCodeAt(++u)) && 45 !== s) || (s = a.charCodeAt(++u)),
      (u = readDigits(e, u, s)),
      (s = a.charCodeAt(u))),
    46 === s || 69 === s || 101 === s)
  )
    throw syntaxError(e, u, 'Invalid number, expected digit but got: '.concat(printCharCode(s), '.'))
  return new Tok(c ? TokenKind.FLOAT : TokenKind.INT, t, u, n, i, o, a.slice(t, u))
}
function readDigits(e, t, r) {
  var n = e.body,
    i = t,
    o = r
  if (o >= 48 && o <= 57) {
    do {
      o = n.charCodeAt(++i)
    } while (o >= 48 && o <= 57)
    return i
  }
  throw syntaxError(e, i, 'Invalid number, expected digit but got: '.concat(printCharCode(o), '.'))
}
function readString(e, t, r, n, i) {
  for (
    var o = e.body, a = t + 1, s = a, u = 0, c = '';
    a < o.length && !isNaN((u = o.charCodeAt(a))) && 10 !== u && 13 !== u;

  ) {
    if (34 === u) return (c += o.slice(s, a)), new Tok(TokenKind.STRING, t, a + 1, r, n, i, c)
    if (u < 32 && 9 !== u) throw syntaxError(e, a, 'Invalid character within String: '.concat(printCharCode(u), '.'))
    if ((++a, 92 === u)) {
      switch (((c += o.slice(s, a - 1)), (u = o.charCodeAt(a)))) {
        case 34:
          c += '"'
          break
        case 47:
          c += '/'
          break
        case 92:
          c += '\\'
          break
        case 98:
          c += '\b'
          break
        case 102:
          c += '\f'
          break
        case 110:
          c += '\n'
          break
        case 114:
          c += '\r'
          break
        case 116:
          c += '\t'
          break
        case 117:
          var l = uniCharCode(o.charCodeAt(a + 1), o.charCodeAt(a + 2), o.charCodeAt(a + 3), o.charCodeAt(a + 4))
          if (l < 0) {
            var p = o.slice(a + 1, a + 5)
            throw syntaxError(e, a, 'Invalid character escape sequence: \\u'.concat(p, '.'))
          }
          ;(c += String.fromCharCode(l)), (a += 4)
          break
        default:
          throw syntaxError(e, a, 'Invalid character escape sequence: \\'.concat(String.fromCharCode(u), '.'))
      }
      s = ++a
    }
  }
  throw syntaxError(e, a, 'Unterminated string.')
}
function readBlockString(e, t, r, n, i, o) {
  for (var a = e.body, s = t + 3, u = s, c = 0, l = ''; s < a.length && !isNaN((c = a.charCodeAt(s))); ) {
    if (34 === c && 34 === a.charCodeAt(s + 1) && 34 === a.charCodeAt(s + 2))
      return (l += a.slice(u, s)), new Tok(TokenKind.BLOCK_STRING, t, s + 3, r, n, i, dedentBlockStringValue(l))
    if (c < 32 && 9 !== c && 10 !== c && 13 !== c)
      throw syntaxError(e, s, 'Invalid character within String: '.concat(printCharCode(c), '.'))
    10 === c
      ? (++s, ++o.line, (o.lineStart = s))
      : 13 === c
      ? (10 === a.charCodeAt(s + 1) ? (s += 2) : ++s, ++o.line, (o.lineStart = s))
      : 92 === c && 34 === a.charCodeAt(s + 1) && 34 === a.charCodeAt(s + 2) && 34 === a.charCodeAt(s + 3)
      ? ((l += a.slice(u, s) + '"""'), (u = s += 4))
      : ++s
  }
  throw syntaxError(e, s, 'Unterminated string.')
}
function uniCharCode(e, t, r, n) {
  return (char2hex(e) << 12) | (char2hex(t) << 8) | (char2hex(r) << 4) | char2hex(n)
}
function char2hex(e) {
  return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
}
function readName(e, t, r, n, i) {
  for (
    var o = e.body, a = o.length, s = t + 1, u = 0;
    s !== a &&
    !isNaN((u = o.charCodeAt(s))) &&
    (95 === u || (u >= 48 && u <= 57) || (u >= 65 && u <= 90) || (u >= 97 && u <= 122));

  )
    ++s
  return new Tok(TokenKind.NAME, t, s, r, n, i, o.slice(t, s))
}
defineToJSON(Tok, function() {
  return { kind: this.kind, value: this.value, line: this.line, column: this.column }
})
var DirectiveLocation = Object.freeze({
  QUERY: 'QUERY',
  MUTATION: 'MUTATION',
  SUBSCRIPTION: 'SUBSCRIPTION',
  FIELD: 'FIELD',
  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
  VARIABLE_DEFINITION: 'VARIABLE_DEFINITION',
  SCHEMA: 'SCHEMA',
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  FIELD_DEFINITION: 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  ENUM_VALUE: 'ENUM_VALUE',
  INPUT_OBJECT: 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
})
function parse(e, t) {
  return new Parser(e, t).parseDocument()
}
function parseValue(e, t) {
  var r = new Parser(e, t)
  r.expectToken(TokenKind.SOF)
  var n = r.parseValueLiteral(!1)
  return r.expectToken(TokenKind.EOF), n
}
function parseType(e, t) {
  var r = new Parser(e, t)
  r.expectToken(TokenKind.SOF)
  var n = r.parseTypeReference()
  return r.expectToken(TokenKind.EOF), n
}
var Parser = (function() {
  function e(e, t) {
    var r = 'string' == typeof e ? new Source(e) : e
    r instanceof Source || devAssert(0, 'Must provide Source. Received: '.concat(inspect(r))),
      (this._lexer = createLexer(r)),
      (this._options = t || {})
  }
  var t = e.prototype
  return (
    (t.parseName = function() {
      var e = this.expectToken(TokenKind.NAME)
      return { kind: Kind.NAME, value: e.value, loc: this.loc(e) }
    }),
    (t.parseDocument = function() {
      var e = this._lexer.token
      return {
        kind: Kind.DOCUMENT,
        definitions: this.many(TokenKind.SOF, this.parseDefinition, TokenKind.EOF),
        loc: this.loc(e)
      }
    }),
    (t.parseDefinition = function() {
      if (this.peek(TokenKind.NAME))
        switch (this._lexer.token.value) {
          case 'query':
          case 'mutation':
          case 'subscription':
            return this.parseOperationDefinition()
          case 'fragment':
            return this.parseFragmentDefinition()
          case 'schema':
          case 'scalar':
          case 'type':
          case 'interface':
          case 'union':
          case 'enum':
          case 'input':
          case 'directive':
            return this.parseTypeSystemDefinition()
          case 'extend':
            return this.parseTypeSystemExtension()
        }
      else {
        if (this.peek(TokenKind.BRACE_L)) return this.parseOperationDefinition()
        if (this.peekDescription()) return this.parseTypeSystemDefinition()
      }
      throw this.unexpected()
    }),
    (t.parseOperationDefinition = function() {
      var e = this._lexer.token
      if (this.peek(TokenKind.BRACE_L))
        return {
          kind: Kind.OPERATION_DEFINITION,
          operation: 'query',
          name: void 0,
          variableDefinitions: [],
          directives: [],
          selectionSet: this.parseSelectionSet(),
          loc: this.loc(e)
        }
      var t,
        r = this.parseOperationType()
      return (
        this.peek(TokenKind.NAME) && (t = this.parseName()),
        {
          kind: Kind.OPERATION_DEFINITION,
          operation: r,
          name: t,
          variableDefinitions: this.parseVariableDefinitions(),
          directives: this.parseDirectives(!1),
          selectionSet: this.parseSelectionSet(),
          loc: this.loc(e)
        }
      )
    }),
    (t.parseOperationType = function() {
      var e = this.expectToken(TokenKind.NAME)
      switch (e.value) {
        case 'query':
          return 'query'
        case 'mutation':
          return 'mutation'
        case 'subscription':
          return 'subscription'
      }
      throw this.unexpected(e)
    }),
    (t.parseVariableDefinitions = function() {
      return this.optionalMany(TokenKind.PAREN_L, this.parseVariableDefinition, TokenKind.PAREN_R)
    }),
    (t.parseVariableDefinition = function() {
      var e = this._lexer.token
      return {
        kind: Kind.VARIABLE_DEFINITION,
        variable: this.parseVariable(),
        type: (this.expectToken(TokenKind.COLON), this.parseTypeReference()),
        defaultValue: this.expectOptionalToken(TokenKind.EQUALS) ? this.parseValueLiteral(!0) : void 0,
        directives: this.parseDirectives(!0),
        loc: this.loc(e)
      }
    }),
    (t.parseVariable = function() {
      var e = this._lexer.token
      return this.expectToken(TokenKind.DOLLAR), { kind: Kind.VARIABLE, name: this.parseName(), loc: this.loc(e) }
    }),
    (t.parseSelectionSet = function() {
      var e = this._lexer.token
      return {
        kind: Kind.SELECTION_SET,
        selections: this.many(TokenKind.BRACE_L, this.parseSelection, TokenKind.BRACE_R),
        loc: this.loc(e)
      }
    }),
    (t.parseSelection = function() {
      return this.peek(TokenKind.SPREAD) ? this.parseFragment() : this.parseField()
    }),
    (t.parseField = function() {
      var e,
        t,
        r = this._lexer.token,
        n = this.parseName()
      return (
        this.expectOptionalToken(TokenKind.COLON) ? ((e = n), (t = this.parseName())) : (t = n),
        {
          kind: Kind.FIELD,
          alias: e,
          name: t,
          arguments: this.parseArguments(!1),
          directives: this.parseDirectives(!1),
          selectionSet: this.peek(TokenKind.BRACE_L) ? this.parseSelectionSet() : void 0,
          loc: this.loc(r)
        }
      )
    }),
    (t.parseArguments = function(e) {
      var t = e ? this.parseConstArgument : this.parseArgument
      return this.optionalMany(TokenKind.PAREN_L, t, TokenKind.PAREN_R)
    }),
    (t.parseArgument = function() {
      var e = this._lexer.token,
        t = this.parseName()
      return (
        this.expectToken(TokenKind.COLON),
        { kind: Kind.ARGUMENT, name: t, value: this.parseValueLiteral(!1), loc: this.loc(e) }
      )
    }),
    (t.parseConstArgument = function() {
      var e = this._lexer.token
      return {
        kind: Kind.ARGUMENT,
        name: this.parseName(),
        value: (this.expectToken(TokenKind.COLON), this.parseValueLiteral(!0)),
        loc: this.loc(e)
      }
    }),
    (t.parseFragment = function() {
      var e = this._lexer.token
      this.expectToken(TokenKind.SPREAD)
      var t = this.expectOptionalKeyword('on')
      return !t && this.peek(TokenKind.NAME)
        ? {
            kind: Kind.FRAGMENT_SPREAD,
            name: this.parseFragmentName(),
            directives: this.parseDirectives(!1),
            loc: this.loc(e)
          }
        : {
            kind: Kind.INLINE_FRAGMENT,
            typeCondition: t ? this.parseNamedType() : void 0,
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet(),
            loc: this.loc(e)
          }
    }),
    (t.parseFragmentDefinition = function() {
      var e = this._lexer.token
      return (
        this.expectKeyword('fragment'),
        this._options.experimentalFragmentVariables
          ? {
              kind: Kind.FRAGMENT_DEFINITION,
              name: this.parseFragmentName(),
              variableDefinitions: this.parseVariableDefinitions(),
              typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
              directives: this.parseDirectives(!1),
              selectionSet: this.parseSelectionSet(),
              loc: this.loc(e)
            }
          : {
              kind: Kind.FRAGMENT_DEFINITION,
              name: this.parseFragmentName(),
              typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
              directives: this.parseDirectives(!1),
              selectionSet: this.parseSelectionSet(),
              loc: this.loc(e)
            }
      )
    }),
    (t.parseFragmentName = function() {
      if ('on' === this._lexer.token.value) throw this.unexpected()
      return this.parseName()
    }),
    (t.parseValueLiteral = function(e) {
      var t = this._lexer.token
      switch (t.kind) {
        case TokenKind.BRACKET_L:
          return this.parseList(e)
        case TokenKind.BRACE_L:
          return this.parseObject(e)
        case TokenKind.INT:
          return this._lexer.advance(), { kind: Kind.INT, value: t.value, loc: this.loc(t) }
        case TokenKind.FLOAT:
          return this._lexer.advance(), { kind: Kind.FLOAT, value: t.value, loc: this.loc(t) }
        case TokenKind.STRING:
        case TokenKind.BLOCK_STRING:
          return this.parseStringLiteral()
        case TokenKind.NAME:
          return 'true' === t.value || 'false' === t.value
            ? (this._lexer.advance(), { kind: Kind.BOOLEAN, value: 'true' === t.value, loc: this.loc(t) })
            : 'null' === t.value
            ? (this._lexer.advance(), { kind: Kind.NULL, loc: this.loc(t) })
            : (this._lexer.advance(), { kind: Kind.ENUM, value: t.value, loc: this.loc(t) })
        case TokenKind.DOLLAR:
          if (!e) return this.parseVariable()
      }
      throw this.unexpected()
    }),
    (t.parseStringLiteral = function() {
      var e = this._lexer.token
      return (
        this._lexer.advance(),
        { kind: Kind.STRING, value: e.value, block: e.kind === TokenKind.BLOCK_STRING, loc: this.loc(e) }
      )
    }),
    (t.parseList = function(e) {
      var t = this,
        r = this._lexer.token
      return {
        kind: Kind.LIST,
        values: this.any(
          TokenKind.BRACKET_L,
          function() {
            return t.parseValueLiteral(e)
          },
          TokenKind.BRACKET_R
        ),
        loc: this.loc(r)
      }
    }),
    (t.parseObject = function(e) {
      var t = this,
        r = this._lexer.token
      return {
        kind: Kind.OBJECT,
        fields: this.any(
          TokenKind.BRACE_L,
          function() {
            return t.parseObjectField(e)
          },
          TokenKind.BRACE_R
        ),
        loc: this.loc(r)
      }
    }),
    (t.parseObjectField = function(e) {
      var t = this._lexer.token,
        r = this.parseName()
      return (
        this.expectToken(TokenKind.COLON),
        { kind: Kind.OBJECT_FIELD, name: r, value: this.parseValueLiteral(e), loc: this.loc(t) }
      )
    }),
    (t.parseDirectives = function(e) {
      for (var t = []; this.peek(TokenKind.AT); ) t.push(this.parseDirective(e))
      return t
    }),
    (t.parseDirective = function(e) {
      var t = this._lexer.token
      return (
        this.expectToken(TokenKind.AT),
        { kind: Kind.DIRECTIVE, name: this.parseName(), arguments: this.parseArguments(e), loc: this.loc(t) }
      )
    }),
    (t.parseTypeReference = function() {
      var e,
        t = this._lexer.token
      return (
        this.expectOptionalToken(TokenKind.BRACKET_L)
          ? ((e = this.parseTypeReference()),
            this.expectToken(TokenKind.BRACKET_R),
            (e = { kind: Kind.LIST_TYPE, type: e, loc: this.loc(t) }))
          : (e = this.parseNamedType()),
        this.expectOptionalToken(TokenKind.BANG) ? { kind: Kind.NON_NULL_TYPE, type: e, loc: this.loc(t) } : e
      )
    }),
    (t.parseNamedType = function() {
      var e = this._lexer.token
      return { kind: Kind.NAMED_TYPE, name: this.parseName(), loc: this.loc(e) }
    }),
    (t.parseTypeSystemDefinition = function() {
      var e = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token
      if (e.kind === TokenKind.NAME)
        switch (e.value) {
          case 'schema':
            return this.parseSchemaDefinition()
          case 'scalar':
            return this.parseScalarTypeDefinition()
          case 'type':
            return this.parseObjectTypeDefinition()
          case 'interface':
            return this.parseInterfaceTypeDefinition()
          case 'union':
            return this.parseUnionTypeDefinition()
          case 'enum':
            return this.parseEnumTypeDefinition()
          case 'input':
            return this.parseInputObjectTypeDefinition()
          case 'directive':
            return this.parseDirectiveDefinition()
        }
      throw this.unexpected(e)
    }),
    (t.peekDescription = function() {
      return this.peek(TokenKind.STRING) || this.peek(TokenKind.BLOCK_STRING)
    }),
    (t.parseDescription = function() {
      if (this.peekDescription()) return this.parseStringLiteral()
    }),
    (t.parseSchemaDefinition = function() {
      var e = this._lexer.token
      this.expectKeyword('schema')
      var t = this.parseDirectives(!0),
        r = this.many(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R)
      return { kind: Kind.SCHEMA_DEFINITION, directives: t, operationTypes: r, loc: this.loc(e) }
    }),
    (t.parseOperationTypeDefinition = function() {
      var e = this._lexer.token,
        t = this.parseOperationType()
      this.expectToken(TokenKind.COLON)
      var r = this.parseNamedType()
      return { kind: Kind.OPERATION_TYPE_DEFINITION, operation: t, type: r, loc: this.loc(e) }
    }),
    (t.parseScalarTypeDefinition = function() {
      var e = this._lexer.token,
        t = this.parseDescription()
      this.expectKeyword('scalar')
      var r = this.parseName(),
        n = this.parseDirectives(!0)
      return { kind: Kind.SCALAR_TYPE_DEFINITION, description: t, name: r, directives: n, loc: this.loc(e) }
    }),
    (t.parseObjectTypeDefinition = function() {
      var e = this._lexer.token,
        t = this.parseDescription()
      this.expectKeyword('type')
      var r = this.parseName(),
        n = this.parseImplementsInterfaces(),
        i = this.parseDirectives(!0),
        o = this.parseFieldsDefinition()
      return {
        kind: Kind.OBJECT_TYPE_DEFINITION,
        description: t,
        name: r,
        interfaces: n,
        directives: i,
        fields: o,
        loc: this.loc(e)
      }
    }),
    (t.parseImplementsInterfaces = function() {
      var e = []
      if (this.expectOptionalKeyword('implements')) {
        this.expectOptionalToken(TokenKind.AMP)
        do {
          e.push(this.parseNamedType())
        } while (
          this.expectOptionalToken(TokenKind.AMP) ||
          (this._options.allowLegacySDLImplementsInterfaces && this.peek(TokenKind.NAME))
        )
      }
      return e
    }),
    (t.parseFieldsDefinition = function() {
      return this._options.allowLegacySDLEmptyFields &&
        this.peek(TokenKind.BRACE_L) &&
        this._lexer.lookahead().kind === TokenKind.BRACE_R
        ? (this._lexer.advance(), this._lexer.advance(), [])
        : this.optionalMany(TokenKind.BRACE_L, this.parseFieldDefinition, TokenKind.BRACE_R)
    }),
    (t.parseFieldDefinition = function() {
      var e = this._lexer.token,
        t = this.parseDescription(),
        r = this.parseName(),
        n = this.parseArgumentDefs()
      this.expectToken(TokenKind.COLON)
      var i = this.parseTypeReference(),
        o = this.parseDirectives(!0)
      return {
        kind: Kind.FIELD_DEFINITION,
        description: t,
        name: r,
        arguments: n,
        type: i,
        directives: o,
        loc: this.loc(e)
      }
    }),
    (t.parseArgumentDefs = function() {
      return this.optionalMany(TokenKind.PAREN_L, this.parseInputValueDef, TokenKind.PAREN_R)
    }),
    (t.parseInputValueDef = function() {
      var e = this._lexer.token,
        t = this.parseDescription(),
        r = this.parseName()
      this.expectToken(TokenKind.COLON)
      var n,
        i = this.parseTypeReference()
      this.expectOptionalToken(TokenKind.EQUALS) && (n = this.parseValueLiteral(!0))
      var o = this.parseDirectives(!0)
      return {
        kind: Kind.INPUT_VALUE_DEFINITION,
        description: t,
        name: r,
        type: i,
        defaultValue: n,
        directives: o,
        loc: this.loc(e)
      }
    }),
    (t.parseInterfaceTypeDefinition = function() {
      var e = this._lexer.token,
        t = this.parseDescription()
      this.expectKeyword('interface')
      var r = this.parseName(),
        n = this.parseDirectives(!0),
        i = this.parseFieldsDefinition()
      return {
        kind: Kind.INTERFACE_TYPE_DEFINITION,
        description: t,
        name: r,
        directives: n,
        fields: i,
        loc: this.loc(e)
      }
    }),
    (t.parseUnionTypeDefinition = function() {
      var e = this._lexer.token,
        t = this.parseDescription()
      this.expectKeyword('union')
      var r = this.parseName(),
        n = this.parseDirectives(!0),
        i = this.parseUnionMemberTypes()
      return { kind: Kind.UNION_TYPE_DEFINITION, description: t, name: r, directives: n, types: i, loc: this.loc(e) }
    }),
    (t.parseUnionMemberTypes = function() {
      var e = []
      if (this.expectOptionalToken(TokenKind.EQUALS)) {
        this.expectOptionalToken(TokenKind.PIPE)
        do {
          e.push(this.parseNamedType())
        } while (this.expectOptionalToken(TokenKind.PIPE))
      }
      return e
    }),
    (t.parseEnumTypeDefinition = function() {
      var e = this._lexer.token,
        t = this.parseDescription()
      this.expectKeyword('enum')
      var r = this.parseName(),
        n = this.parseDirectives(!0),
        i = this.parseEnumValuesDefinition()
      return { kind: Kind.ENUM_TYPE_DEFINITION, description: t, name: r, directives: n, values: i, loc: this.loc(e) }
    }),
    (t.parseEnumValuesDefinition = function() {
      return this.optionalMany(TokenKind.BRACE_L, this.parseEnumValueDefinition, TokenKind.BRACE_R)
    }),
    (t.parseEnumValueDefinition = function() {
      var e = this._lexer.token,
        t = this.parseDescription(),
        r = this.parseName(),
        n = this.parseDirectives(!0)
      return { kind: Kind.ENUM_VALUE_DEFINITION, description: t, name: r, directives: n, loc: this.loc(e) }
    }),
    (t.parseInputObjectTypeDefinition = function() {
      var e = this._lexer.token,
        t = this.parseDescription()
      this.expectKeyword('input')
      var r = this.parseName(),
        n = this.parseDirectives(!0),
        i = this.parseInputFieldsDefinition()
      return {
        kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
        description: t,
        name: r,
        directives: n,
        fields: i,
        loc: this.loc(e)
      }
    }),
    (t.parseInputFieldsDefinition = function() {
      return this.optionalMany(TokenKind.BRACE_L, this.parseInputValueDef, TokenKind.BRACE_R)
    }),
    (t.parseTypeSystemExtension = function() {
      var e = this._lexer.lookahead()
      if (e.kind === TokenKind.NAME)
        switch (e.value) {
          case 'schema':
            return this.parseSchemaExtension()
          case 'scalar':
            return this.parseScalarTypeExtension()
          case 'type':
            return this.parseObjectTypeExtension()
          case 'interface':
            return this.parseInterfaceTypeExtension()
          case 'union':
            return this.parseUnionTypeExtension()
          case 'enum':
            return this.parseEnumTypeExtension()
          case 'input':
            return this.parseInputObjectTypeExtension()
        }
      throw this.unexpected(e)
    }),
    (t.parseSchemaExtension = function() {
      var e = this._lexer.token
      this.expectKeyword('extend'), this.expectKeyword('schema')
      var t = this.parseDirectives(!0),
        r = this.optionalMany(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R)
      if (0 === t.length && 0 === r.length) throw this.unexpected()
      return { kind: Kind.SCHEMA_EXTENSION, directives: t, operationTypes: r, loc: this.loc(e) }
    }),
    (t.parseScalarTypeExtension = function() {
      var e = this._lexer.token
      this.expectKeyword('extend'), this.expectKeyword('scalar')
      var t = this.parseName(),
        r = this.parseDirectives(!0)
      if (0 === r.length) throw this.unexpected()
      return { kind: Kind.SCALAR_TYPE_EXTENSION, name: t, directives: r, loc: this.loc(e) }
    }),
    (t.parseObjectTypeExtension = function() {
      var e = this._lexer.token
      this.expectKeyword('extend'), this.expectKeyword('type')
      var t = this.parseName(),
        r = this.parseImplementsInterfaces(),
        n = this.parseDirectives(!0),
        i = this.parseFieldsDefinition()
      if (0 === r.length && 0 === n.length && 0 === i.length) throw this.unexpected()
      return { kind: Kind.OBJECT_TYPE_EXTENSION, name: t, interfaces: r, directives: n, fields: i, loc: this.loc(e) }
    }),
    (t.parseInterfaceTypeExtension = function() {
      var e = this._lexer.token
      this.expectKeyword('extend'), this.expectKeyword('interface')
      var t = this.parseName(),
        r = this.parseDirectives(!0),
        n = this.parseFieldsDefinition()
      if (0 === r.length && 0 === n.length) throw this.unexpected()
      return { kind: Kind.INTERFACE_TYPE_EXTENSION, name: t, directives: r, fields: n, loc: this.loc(e) }
    }),
    (t.parseUnionTypeExtension = function() {
      var e = this._lexer.token
      this.expectKeyword('extend'), this.expectKeyword('union')
      var t = this.parseName(),
        r = this.parseDirectives(!0),
        n = this.parseUnionMemberTypes()
      if (0 === r.length && 0 === n.length) throw this.unexpected()
      return { kind: Kind.UNION_TYPE_EXTENSION, name: t, directives: r, types: n, loc: this.loc(e) }
    }),
    (t.parseEnumTypeExtension = function() {
      var e = this._lexer.token
      this.expectKeyword('extend'), this.expectKeyword('enum')
      var t = this.parseName(),
        r = this.parseDirectives(!0),
        n = this.parseEnumValuesDefinition()
      if (0 === r.length && 0 === n.length) throw this.unexpected()
      return { kind: Kind.ENUM_TYPE_EXTENSION, name: t, directives: r, values: n, loc: this.loc(e) }
    }),
    (t.parseInputObjectTypeExtension = function() {
      var e = this._lexer.token
      this.expectKeyword('extend'), this.expectKeyword('input')
      var t = this.parseName(),
        r = this.parseDirectives(!0),
        n = this.parseInputFieldsDefinition()
      if (0 === r.length && 0 === n.length) throw this.unexpected()
      return { kind: Kind.INPUT_OBJECT_TYPE_EXTENSION, name: t, directives: r, fields: n, loc: this.loc(e) }
    }),
    (t.parseDirectiveDefinition = function() {
      var e = this._lexer.token,
        t = this.parseDescription()
      this.expectKeyword('directive'), this.expectToken(TokenKind.AT)
      var r = this.parseName(),
        n = this.parseArgumentDefs(),
        i = this.expectOptionalKeyword('repeatable')
      this.expectKeyword('on')
      var o = this.parseDirectiveLocations()
      return {
        kind: Kind.DIRECTIVE_DEFINITION,
        description: t,
        name: r,
        arguments: n,
        repeatable: i,
        locations: o,
        loc: this.loc(e)
      }
    }),
    (t.parseDirectiveLocations = function() {
      this.expectOptionalToken(TokenKind.PIPE)
      var e = []
      do {
        e.push(this.parseDirectiveLocation())
      } while (this.expectOptionalToken(TokenKind.PIPE))
      return e
    }),
    (t.parseDirectiveLocation = function() {
      var e = this._lexer.token,
        t = this.parseName()
      if (void 0 !== DirectiveLocation[t.value]) return t
      throw this.unexpected(e)
    }),
    (t.loc = function(e) {
      if (!this._options.noLocation) return new Loc(e, this._lexer.lastToken, this._lexer.source)
    }),
    (t.peek = function(e) {
      return this._lexer.token.kind === e
    }),
    (t.expectToken = function(e) {
      var t = this._lexer.token
      if (t.kind === e) return this._lexer.advance(), t
      throw syntaxError(this._lexer.source, t.start, 'Expected '.concat(e, ', found ').concat(getTokenDesc(t)))
    }),
    (t.expectOptionalToken = function(e) {
      var t = this._lexer.token
      if (t.kind === e) return this._lexer.advance(), t
    }),
    (t.expectKeyword = function(e) {
      var t = this._lexer.token
      if (t.kind !== TokenKind.NAME || t.value !== e)
        throw syntaxError(this._lexer.source, t.start, 'Expected "'.concat(e, '", found ').concat(getTokenDesc(t)))
      this._lexer.advance()
    }),
    (t.expectOptionalKeyword = function(e) {
      var t = this._lexer.token
      return t.kind === TokenKind.NAME && t.value === e && (this._lexer.advance(), !0)
    }),
    (t.unexpected = function(e) {
      var t = e || this._lexer.token
      return syntaxError(this._lexer.source, t.start, 'Unexpected '.concat(getTokenDesc(t)))
    }),
    (t.any = function(e, t, r) {
      this.expectToken(e)
      for (var n = []; !this.expectOptionalToken(r); ) n.push(t.call(this))
      return n
    }),
    (t.optionalMany = function(e, t, r) {
      if (this.expectOptionalToken(e)) {
        var n = []
        do {
          n.push(t.call(this))
        } while (!this.expectOptionalToken(r))
        return n
      }
      return []
    }),
    (t.many = function(e, t, r) {
      this.expectToken(e)
      var n = []
      do {
        n.push(t.call(this))
      } while (!this.expectOptionalToken(r))
      return n
    }),
    e
  )
})()
function Loc(e, t, r) {
  ;(this.start = e.start), (this.end = t.end), (this.startToken = e), (this.endToken = t), (this.source = r)
}
function getTokenDesc(e) {
  var t = e.value
  return t ? ''.concat(e.kind, ' "').concat(t, '"') : e.kind
}
defineToJSON(Loc, function() {
  return { start: this.start, end: this.end }
})
var parser = Object.freeze({ parse: parse, parseValue: parseValue, parseType: parseType }),
  parser$1 = getCjsExportFromNamespace(parser),
  parse$1 = parser$1.parse
function normalize(e) {
  return e.replace(/[\s,]+/g, ' ').trim()
}
var docCache = {},
  fragmentSourceMap = {}
function cacheKeyFromLoc(e) {
  return normalize(e.source.body.substring(e.start, e.end))
}
function resetCaches() {
  ;(docCache = {}), (fragmentSourceMap = {})
}
var printFragmentWarnings = !0
function processFragments(e) {
  for (var t = {}, r = [], n = 0; n < e.definitions.length; n++) {
    var i = e.definitions[n]
    if ('FragmentDefinition' === i.kind) {
      var o = i.name.value,
        a = cacheKeyFromLoc(i.loc)
      fragmentSourceMap.hasOwnProperty(o) && !fragmentSourceMap[o][a]
        ? (printFragmentWarnings &&
            console.warn(
              'Warning: fragment with name ' +
                o +
                ' already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names'
            ),
          (fragmentSourceMap[o][a] = !0))
        : fragmentSourceMap.hasOwnProperty(o) || ((fragmentSourceMap[o] = {}), (fragmentSourceMap[o][a] = !0)),
        t[a] || ((t[a] = !0), r.push(i))
    } else r.push(i)
  }
  return (e.definitions = r), e
}
function disableFragmentWarnings() {
  printFragmentWarnings = !1
}
function stripLoc(e, t) {
  var r = Object.prototype.toString.call(e)
  if ('[object Array]' === r)
    return e.map(function(e) {
      return stripLoc(e, t)
    })
  if ('[object Object]' !== r) throw new Error('Unexpected input.')
  t && e.loc && delete e.loc, e.loc && (delete e.loc.startToken, delete e.loc.endToken)
  var n,
    i,
    o,
    a = Object.keys(e)
  for (n in a)
    a.hasOwnProperty(n) &&
      ((i = e[a[n]]),
      ('[object Object]' !== (o = Object.prototype.toString.call(i)) && '[object Array]' !== o) ||
        (e[a[n]] = stripLoc(i, !0)))
  return e
}
var experimentalFragmentVariables = !1
function parseDocument(e) {
  var t = normalize(e)
  if (docCache[t]) return docCache[t]
  var r = parse$1(e, { experimentalFragmentVariables: experimentalFragmentVariables })
  if (!r || 'Document' !== r.kind) throw new Error('Not a valid GraphQL document.')
  return (r = stripLoc((r = processFragments(r)), !1)), (docCache[t] = r), r
}
function enableExperimentalFragmentVariables() {
  experimentalFragmentVariables = !0
}
function disableExperimentalFragmentVariables() {
  experimentalFragmentVariables = !1
}
function gql() {
  for (
    var e = Array.prototype.slice.call(arguments), t = e[0], r = 'string' == typeof t ? t : t[0], n = 1;
    n < e.length;
    n++
  )
    e[n] && e[n].kind && 'Document' === e[n].kind ? (r += e[n].loc.source.body) : (r += e[n]), (r += t[n])
  return parseDocument(r)
}
;(gql.default = gql),
  (gql.resetCaches = resetCaches),
  (gql.disableFragmentWarnings = disableFragmentWarnings),
  (gql.enableExperimentalFragmentVariables = enableExperimentalFragmentVariables),
  (gql.disableExperimentalFragmentVariables = disableExperimentalFragmentVariables)
var apolloContext,
  src = gql,
  PRESET_CONFIG_KEYS = [
    'request',
    'uri',
    'credentials',
    'headers',
    'fetch',
    'fetchOptions',
    'clientState',
    'onError',
    'cacheRedirects',
    'cache',
    'name',
    'version',
    'resolvers',
    'typeDefs',
    'fragmentMatcher'
  ],
  DefaultClient = (function(e) {
    function t(t) {
      void 0 === t && (t = {})
      if (t) {
        var r = Object.keys(t).filter(function(e) {
          return -1 === PRESET_CONFIG_KEYS.indexOf(e)
        })
        r.length > 0 &&
          ('production' === process.env.NODE_ENV ||
            invariant.warn('ApolloBoost was initialized with unsupported options: ' + r.join(' ')))
      }
      var n = t.request,
        i = t.uri,
        o = t.credentials,
        a = t.headers,
        s = t.fetch,
        u = t.fetchOptions,
        c = t.clientState,
        l = t.cacheRedirects,
        p = t.onError,
        f = t.name,
        d = t.version,
        h = t.resolvers,
        v = t.typeDefs,
        y = t.fragmentMatcher,
        m = t.cache
      'production' === process.env.NODE_ENV
        ? invariant(!m || !l, 1)
        : invariant(
            !m || !l,
            'Incompatible cache configuration. When not providing `cache`, configure the provided instance with `cacheRedirects` instead.'
          ),
        m || (m = l ? new InMemoryCache({ cacheRedirects: l }) : new InMemoryCache())
      var b = onError(
          p ||
            function(e) {
              var t = e.graphQLErrors,
                r = e.networkError
              t &&
                t.forEach(function(e) {
                  var t = e.message,
                    r = e.locations,
                    n = e.path
                  return (
                    'production' === process.env.NODE_ENV ||
                    invariant.warn('[GraphQL error]: Message: ' + t + ', Location: ' + r + ', Path: ' + n)
                  )
                }),
                r && ('production' === process.env.NODE_ENV || invariant.warn('[Network error]: ' + r))
            }
        ),
        g =
          !!n &&
          new ApolloLink(function(e, t) {
            return new Observable(function(r) {
              var i
              return (
                Promise.resolve(e)
                  .then(function(e) {
                    return n(e)
                  })
                  .then(function() {
                    i = t(e).subscribe({ next: r.next.bind(r), error: r.error.bind(r), complete: r.complete.bind(r) })
                  })
                  .catch(r.error.bind(r)),
                function() {
                  i && i.unsubscribe()
                }
              )
            })
          }),
        E = new HttpLink({
          uri: i || '/graphql',
          fetch: s,
          fetchOptions: u || {},
          credentials: o || 'same-origin',
          headers: a || {}
        }),
        _ = ApolloLink.from(
          [b, g, E].filter(function(e) {
            return !!e
          })
        ),
        O = h,
        k = v,
        w = y
      return (
        c &&
          (c.defaults && m.writeData({ data: c.defaults }),
          (O = c.resolvers),
          (k = c.typeDefs),
          (w = c.fragmentMatcher)),
        e.call(this, { cache: m, link: _, name: f, version: d, resolvers: O, typeDefs: k, fragmentMatcher: w }) || this
      )
    }
    return __extends(t, e), t
  })(ApolloClient)
function getApolloContext() {
  return apolloContext || (apolloContext = React__default.createContext({})), apolloContext
}
var DocumentType,
  ApolloProvider = function(e) {
    var t = e.client,
      r = e.children,
      n = getApolloContext()
    return React__default.createElement(n.Consumer, null, function(e) {
      return (
        void 0 === e && (e = {}),
        t && e.client !== t && (e = Object.assign({}, e, { client: t })),
        'production' === process.env.NODE_ENV
          ? invariant(e.client, 5)
          : invariant(
              e.client,
              'ApolloProvider was not passed a client instance. Make sure you pass in your client via the "client" prop.'
            ),
        React__default.createElement(n.Provider, { value: e }, r)
      )
    })
  }
!(function(e) {
  ;(e[(e.Query = 0)] = 'Query'), (e[(e.Mutation = 1)] = 'Mutation'), (e[(e.Subscription = 2)] = 'Subscription')
})(DocumentType || (DocumentType = {}))
var cache = new Map()
function operationName(e) {
  var t
  switch (e) {
    case DocumentType.Query:
      t = 'Query'
      break
    case DocumentType.Mutation:
      t = 'Mutation'
      break
    case DocumentType.Subscription:
      t = 'Subscription'
  }
  return t
}
function parser$2(e) {
  var t,
    r,
    n = cache.get(e)
  if (n) return n
  'production' === process.env.NODE_ENV
    ? invariant(!!e && !!e.kind, 1)
    : invariant(
        !!e && !!e.kind,
        'Argument of ' +
          e +
          " passed to parser was not a valid GraphQL DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"
      )
  var i = e.definitions.filter(function(e) {
      return 'FragmentDefinition' === e.kind
    }),
    o = e.definitions.filter(function(e) {
      return 'OperationDefinition' === e.kind && 'query' === e.operation
    }),
    a = e.definitions.filter(function(e) {
      return 'OperationDefinition' === e.kind && 'mutation' === e.operation
    }),
    s = e.definitions.filter(function(e) {
      return 'OperationDefinition' === e.kind && 'subscription' === e.operation
    })
  'production' === process.env.NODE_ENV
    ? invariant(!i.length || o.length || a.length || s.length, 2)
    : invariant(
        !i.length || o.length || a.length || s.length,
        "Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"
      ),
    'production' === process.env.NODE_ENV
      ? invariant(o.length + a.length + s.length <= 1, 3)
      : invariant(
          o.length + a.length + s.length <= 1,
          'react-apollo only supports a query, subscription, or a mutation per HOC. ' +
            e +
            ' had ' +
            o.length +
            ' queries, ' +
            s.length +
            ' subscriptions and ' +
            a.length +
            " mutations. You can use 'compose' to join multiple operation types to a component"
        ),
    (r = o.length ? DocumentType.Query : DocumentType.Mutation),
    o.length || a.length || (r = DocumentType.Subscription)
  var u = o.length ? o : a.length ? a : s
  'production' === process.env.NODE_ENV
    ? invariant(1 === u.length, 4)
    : invariant(
        1 === u.length,
        'react-apollo only supports one definition per HOC. ' +
          e +
          ' had ' +
          u.length +
          " definitions. You can use 'compose' to join multiple operation types to a component"
      )
  var c = u[0]
  t = c.variableDefinitions || []
  var l = { name: c.name && 'Name' === c.name.kind ? c.name.value : 'data', type: r, variables: t }
  return cache.set(e, l), l
}
var OperationData = (function() {
    function e(e, t) {
      ;(this.isMounted = !1),
        (this.previousOptions = {}),
        (this.context = {}),
        (this.options = {}),
        (this.options = e || {}),
        (this.context = t || {})
    }
    return (
      (e.prototype.getOptions = function() {
        return this.options
      }),
      (e.prototype.setOptions = function(e, t) {
        void 0 === t && (t = !1),
          t && !equal(this.options, e) && (this.previousOptions = this.options),
          (this.options = e)
      }),
      (e.prototype.unmount = function() {
        this.isMounted = !1
      }),
      (e.prototype.refreshClient = function() {
        var e = (this.options && this.options.client) || (this.context && this.context.client)
        'production' === process.env.NODE_ENV
          ? invariant(!!e, 2)
          : invariant(
              !!e,
              'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'
            )
        var t = !1
        return e !== this.client && ((t = !0), (this.client = e), this.cleanup()), { client: this.client, isNew: t }
      }),
      (e.prototype.verifyDocumentType = function(e, t) {
        var r = parser$2(e),
          n = operationName(t),
          i = operationName(r.type)
        'production' === process.env.NODE_ENV
          ? invariant(r.type === t, 3)
          : invariant(
              r.type === t,
              'Running a ' + n + ' requires a graphql ' + n + ', but a ' + i + ' was used instead.'
            )
      }),
      e
    )
  })(),
  QueryData = (function(e) {
    function t(t) {
      var r = t.options,
        n = t.context,
        i = t.forceUpdate,
        o = e.call(this, r, n) || this
      return (
        (o.previousData = {}),
        (o.currentObservable = {}),
        (o.runLazy = !1),
        (o.runLazyQuery = function(e) {
          o.cleanup(), (o.runLazy = !0), (o.lazyOptions = e), o.forceUpdate()
        }),
        (o.getExecuteResult = function() {
          var e = o.getQueryResult()
          return o.startQuerySubscription(), e
        }),
        (o.obsRefetch = function(e) {
          return o.currentObservable.query.refetch(e)
        }),
        (o.obsFetchMore = function(e) {
          return o.currentObservable.query.fetchMore(e)
        }),
        (o.obsUpdateQuery = function(e) {
          return o.currentObservable.query.updateQuery(e)
        }),
        (o.obsStartPolling = function(e) {
          o.currentObservable && o.currentObservable.query && o.currentObservable.query.startPolling(e)
        }),
        (o.obsStopPolling = function() {
          o.currentObservable && o.currentObservable.query && o.currentObservable.query.stopPolling()
        }),
        (o.obsSubscribeToMore = function(e) {
          return o.currentObservable.query.subscribeToMore(e)
        }),
        (o.forceUpdate = i),
        o
      )
    }
    return (
      __extends(t, e),
      (t.prototype.execute = function() {
        this.refreshClient()
        var e = this.getOptions(),
          t = e.skip,
          r = e.query
        return (
          (t || r !== this.previousData.query) && (this.removeQuerySubscription(), (this.previousData.query = r)),
          this.updateObservableQuery(),
          this.isMounted && this.startQuerySubscription(),
          this.getExecuteSsrResult() || this.getExecuteResult()
        )
      }),
      (t.prototype.executeLazy = function() {
        return this.runLazy
          ? [this.runLazyQuery, this.execute()]
          : [this.runLazyQuery, { loading: !1, networkStatus: NetworkStatus.ready, called: !1, data: void 0 }]
      }),
      (t.prototype.fetchData = function() {
        var e = this.getOptions()
        if (e.skip || !1 === e.ssr) return !1
        var t = this.currentObservable.query
        return !!t.getCurrentResult().loading && t.result()
      }),
      (t.prototype.afterExecute = function(e) {
        var t = this,
          r = (void 0 === e ? {} : e).lazy,
          n = void 0 !== r && r
        return (
          (this.isMounted = !0),
          (n && !this.runLazy) ||
            (this.handleErrorOrCompleted(),
            setTimeout(function() {
              t.currentObservable.query && t.currentObservable.query.resetQueryStoreErrors()
            })),
          (this.previousOptions = this.getOptions()),
          this.unmount.bind(this)
        )
      }),
      (t.prototype.cleanup = function() {
        this.removeQuerySubscription(), delete this.currentObservable.query, delete this.previousData.result
      }),
      (t.prototype.getOptions = function() {
        var t = e.prototype.getOptions.call(this)
        return (
          this.lazyOptions &&
            ((t.variables = __assign(__assign({}, t.variables), this.lazyOptions.variables)),
            (t.context = __assign(__assign({}, t.context), this.lazyOptions.context))),
          this.runLazy && delete t.skip,
          t
        )
      }),
      (t.prototype.getExecuteSsrResult = function() {
        var e,
          t = this.context && this.context.renderPromises,
          r = !1 === this.getOptions().ssr,
          n = this.refreshClient().client.disableNetworkFetches,
          i = { loading: !0, networkStatus: NetworkStatus.loading, called: !0, data: void 0 }
        return r && (t || n)
          ? i
          : (t && (e = this.context.renderPromises.addQueryPromise(this, this.getExecuteResult) || i), e)
      }),
      (t.prototype.prepareObservableQueryOptions = function() {
        var e = this.getOptions()
        this.verifyDocumentType(e.query, DocumentType.Query)
        var t = e.displayName || 'Query'
        return (
          this.context &&
            this.context.renderPromises &&
            ('network-only' === e.fetchPolicy || 'cache-and-network' === e.fetchPolicy) &&
            (e.fetchPolicy = 'cache-first'),
          __assign(__assign({}, e), {
            displayName: t,
            context: e.context,
            metadata: { reactComponent: { displayName: t } }
          })
        )
      }),
      (t.prototype.initializeObservableQuery = function() {
        if (
          (this.context &&
            this.context.renderPromises &&
            (this.currentObservable.query = this.context.renderPromises.getSSRObservable(this.getOptions())),
          !this.currentObservable.query)
        ) {
          var e = this.prepareObservableQueryOptions()
          ;(this.previousData.observableQueryOptions = __assign(__assign({}, e), { children: null })),
            (this.currentObservable.query = this.refreshClient().client.watchQuery(__assign({}, e))),
            this.context &&
              this.context.renderPromises &&
              this.context.renderPromises.registerSSRObservable(this.currentObservable.query, e)
        }
      }),
      (t.prototype.updateObservableQuery = function() {
        if (this.currentObservable.query) {
          var e = __assign(__assign({}, this.prepareObservableQueryOptions()), { children: null })
          equal(e, this.previousData.observableQueryOptions) ||
            ((this.previousData.observableQueryOptions = e),
            this.currentObservable.query.setOptions(e).catch(function() {}))
        } else this.initializeObservableQuery()
      }),
      (t.prototype.startQuerySubscription = function() {
        var e = this
        if (!this.currentObservable.subscription && !this.getOptions().skip) {
          var t = this.currentObservable.query
          this.currentObservable.subscription = t.subscribe({
            next: function(t) {
              var r = t.loading,
                n = t.networkStatus,
                i = t.data,
                o = e.previousData.result
              ;(o && o.loading === r && o.networkStatus === n && equal(o.data, i)) || e.forceUpdate()
            },
            error: function(t) {
              if ((e.resubscribeToQuery(), !t.hasOwnProperty('graphQLErrors'))) throw t
              var r = e.previousData.result
              ;((r && r.loading) || !equal(t, e.previousData.error)) && ((e.previousData.error = t), e.forceUpdate())
            }
          })
        }
      }),
      (t.prototype.resubscribeToQuery = function() {
        this.removeQuerySubscription()
        var e = this.currentObservable.query.getLastError(),
          t = this.currentObservable.query.getLastResult()
        this.currentObservable.query.resetLastResults(),
          this.startQuerySubscription(),
          Object.assign(this.currentObservable.query, { lastError: e, lastResult: t })
      }),
      (t.prototype.getQueryResult = function() {
        var e = this.observableQueryFields(),
          t = this.getOptions()
        if (t.skip) e = __assign(__assign({}, e), { data: void 0, error: void 0, loading: !1, called: !0 })
        else {
          var r = this.currentObservable.query.getCurrentResult(),
            n = r.loading,
            i = r.partial,
            o = r.networkStatus,
            a = r.errors,
            s = r.error,
            u = r.data
          if (
            (a && a.length > 0 && (s = new ApolloError({ graphQLErrors: a })),
            (e = __assign(__assign({}, e), { loading: n, networkStatus: o, error: s, called: !0 })),
            n)
          ) {
            var c = this.previousData.result && this.previousData.result.data
            e.data = c && u ? __assign(__assign({}, c), u) : c || u
          } else if (s) Object.assign(e, { data: (this.currentObservable.query.getLastResult() || {}).data })
          else {
            var l = this.currentObservable.query.options.fetchPolicy
            if (t.partialRefetch && !u && i && 'cache-only' !== l)
              return Object.assign(e, { loading: !0, networkStatus: NetworkStatus.loading }), e.refetch(), e
            e.data = u
          }
        }
        return (
          (e.client = this.client),
          (this.previousData.loading = (this.previousData.result && this.previousData.result.loading) || !1),
          (this.previousData.result = e),
          e
        )
      }),
      (t.prototype.handleErrorOrCompleted = function() {
        var e = this.currentObservable.query
        if (e) {
          var t = e.getCurrentResult(),
            r = t.data,
            n = t.loading,
            i = t.error
          if (!n) {
            var o = this.getOptions(),
              a = o.query,
              s = o.variables,
              u = o.onCompleted,
              c = o.onError
            if (
              this.previousOptions &&
              !this.previousData.loading &&
              equal(this.previousOptions.query, a) &&
              equal(this.previousOptions.variables, s)
            )
              return
            u && !i ? u(r) : c && i && c(i)
          }
        }
      }),
      (t.prototype.removeQuerySubscription = function() {
        this.currentObservable.subscription &&
          (this.currentObservable.subscription.unsubscribe(), delete this.currentObservable.subscription)
      }),
      (t.prototype.observableQueryFields = function() {
        return {
          variables: this.currentObservable.query.variables,
          refetch: this.obsRefetch,
          fetchMore: this.obsFetchMore,
          updateQuery: this.obsUpdateQuery,
          startPolling: this.obsStartPolling,
          stopPolling: this.obsStopPolling,
          subscribeToMore: this.obsSubscribeToMore
        }
      }),
      t
    )
  })(OperationData)
function useDeepMemo(e, t) {
  var r = React.useRef()
  return (r.current && equal(t, r.current.key)) || (r.current = { key: t, value: e() }), r.current.value
}
function useBaseQuery(e, t, r) {
  void 0 === r && (r = !1)
  var n = React.useContext(getApolloContext()),
    i = React.useReducer(function(e) {
      return e + 1
    }, 0),
    o = i[0],
    a = i[1],
    s = t ? __assign(__assign({}, t), { query: e }) : { query: e },
    u = React.useRef()
  u.current || (u.current = new QueryData({ options: s, context: n, forceUpdate: a }))
  var c = u.current
  c.setOptions(s), (c.context = n)
  var l = useDeepMemo(
      function() {
        return r ? c.executeLazy() : c.execute()
      },
      { options: __assign(__assign({}, s), { onError: void 0, onCompleted: void 0 }), context: n, tick: o }
    ),
    p = r ? l[1] : l
  return (
    React.useEffect(
      function() {
        return c.afterExecute({ lazy: r })
      },
      [p.loading, p.networkStatus, p.error, p.data]
    ),
    React.useEffect(function() {
      return function() {
        return c.cleanup()
      }
    }, []),
    l
  )
}
function useQuery(e, t) {
  return useBaseQuery(e, t, !1)
}
var MutationData = (function(e) {
    function t(t) {
      var r = t.options,
        n = t.context,
        i = t.result,
        o = t.setResult,
        a = e.call(this, r, n) || this
      return (
        (a.runMutation = function(e) {
          void 0 === e && (e = {}), a.onMutationStart()
          var t = a.generateNewMutationId()
          return a
            .mutate(e)
            .then(function(e) {
              return a.onMutationCompleted(e, t), e
            })
            .catch(function(e) {
              if ((a.onMutationError(e, t), !a.getOptions().onError)) throw e
            })
        }),
        a.verifyDocumentType(r.mutation, DocumentType.Mutation),
        (a.result = i),
        (a.setResult = o),
        (a.mostRecentMutationId = 0),
        a
      )
    }
    return (
      __extends(t, e),
      (t.prototype.execute = function(e) {
        return (
          (this.isMounted = !0),
          this.verifyDocumentType(this.getOptions().mutation, DocumentType.Mutation),
          (e.client = this.refreshClient().client),
          [this.runMutation, e]
        )
      }),
      (t.prototype.afterExecute = function() {
        return (this.isMounted = !0), this.unmount.bind(this)
      }),
      (t.prototype.cleanup = function() {}),
      (t.prototype.mutate = function(e) {
        var t = this.getOptions(),
          r = t.mutation,
          n = t.variables,
          i = t.optimisticResponse,
          o = t.update,
          a = t.context,
          s = void 0 === a ? {} : a,
          u = t.awaitRefetchQueries,
          c = void 0 !== u && u,
          l = t.fetchPolicy,
          p = __assign({}, e),
          f = Object.assign({}, n, p.variables)
        return (
          delete p.variables,
          this.refreshClient().client.mutate(
            __assign(
              {
                mutation: r,
                optimisticResponse: i,
                refetchQueries: p.refetchQueries || this.getOptions().refetchQueries,
                awaitRefetchQueries: c,
                update: o,
                context: s,
                fetchPolicy: l,
                variables: f
              },
              p
            )
          )
        )
      }),
      (t.prototype.onMutationStart = function() {
        this.result.loading ||
          this.getOptions().ignoreResults ||
          this.updateResult({ loading: !0, error: void 0, data: void 0, called: !0 })
      }),
      (t.prototype.onMutationCompleted = function(e, t) {
        var r = this.getOptions(),
          n = r.onCompleted,
          i = r.ignoreResults,
          o = e.data,
          a = e.errors,
          s = a && a.length > 0 ? new ApolloError({ graphQLErrors: a }) : void 0
        this.isMostRecentMutation(t) && !i && this.updateResult({ called: !0, loading: !1, data: o, error: s }),
          n && n(o)
      }),
      (t.prototype.onMutationError = function(e, t) {
        var r = this.getOptions().onError
        this.isMostRecentMutation(t) && this.updateResult({ loading: !1, error: e, data: void 0, called: !0 }),
          r && r(e)
      }),
      (t.prototype.generateNewMutationId = function() {
        return ++this.mostRecentMutationId
      }),
      (t.prototype.isMostRecentMutation = function(e) {
        return this.mostRecentMutationId === e
      }),
      (t.prototype.updateResult = function(e) {
        !this.isMounted ||
          (this.previousResult && equal(this.previousResult, e)) ||
          (this.setResult(e), (this.previousResult = e))
      }),
      t
    )
  })(OperationData),
  SubscriptionData = (function(e) {
    function t(t) {
      var r = t.options,
        n = t.context,
        i = t.setResult,
        o = e.call(this, r, n) || this
      return (o.currentObservable = {}), (o.setResult = i), o.initialize(r), o
    }
    return (
      __extends(t, e),
      (t.prototype.execute = function(e) {
        if (!0 === this.getOptions().skip)
          return this.cleanup(), { loading: !1, error: void 0, data: void 0, variables: this.getOptions().variables }
        var t = e
        this.refreshClient().isNew && (t = this.getLoadingResult())
        var r = this.getOptions().shouldResubscribe
        return (
          'function' == typeof r && (r = !!r(this.getOptions())),
          !1 !== r &&
            this.previousOptions &&
            Object.keys(this.previousOptions).length > 0 &&
            (this.previousOptions.subscription !== this.getOptions().subscription ||
              !equal(this.previousOptions.variables, this.getOptions().variables) ||
              this.previousOptions.skip !== this.getOptions().skip) &&
            (this.cleanup(), (t = this.getLoadingResult())),
          this.initialize(this.getOptions()),
          this.startSubscription(),
          (this.previousOptions = this.getOptions()),
          __assign(__assign({}, t), { variables: this.getOptions().variables })
        )
      }),
      (t.prototype.afterExecute = function() {
        this.isMounted = !0
      }),
      (t.prototype.cleanup = function() {
        this.endSubscription(), delete this.currentObservable.query
      }),
      (t.prototype.initialize = function(e) {
        this.currentObservable.query ||
          !0 === this.getOptions().skip ||
          (this.currentObservable.query = this.refreshClient().client.subscribe({
            query: e.subscription,
            variables: e.variables,
            fetchPolicy: e.fetchPolicy
          }))
      }),
      (t.prototype.startSubscription = function() {
        this.currentObservable.subscription ||
          (this.currentObservable.subscription = this.currentObservable.query.subscribe({
            next: this.updateCurrentData.bind(this),
            error: this.updateError.bind(this),
            complete: this.completeSubscription.bind(this)
          }))
      }),
      (t.prototype.getLoadingResult = function() {
        return { loading: !0, error: void 0, data: void 0 }
      }),
      (t.prototype.updateResult = function(e) {
        this.isMounted && this.setResult(e)
      }),
      (t.prototype.updateCurrentData = function(e) {
        var t = this.getOptions().onSubscriptionData
        this.updateResult({ data: e.data, loading: !1, error: void 0 }),
          t && t({ client: this.refreshClient().client, subscriptionData: e })
      }),
      (t.prototype.updateError = function(e) {
        this.updateResult({ error: e, loading: !1 })
      }),
      (t.prototype.completeSubscription = function() {
        var e = this.getOptions().onSubscriptionComplete
        e && e(), this.endSubscription()
      }),
      (t.prototype.endSubscription = function() {
        this.currentObservable.subscription &&
          (this.currentObservable.subscription.unsubscribe(), delete this.currentObservable.subscription)
      }),
      t
    )
  })(OperationData),
  Comment = function() {
    return React__default.createElement('div', null, 'this is comment!')
  }
function _templateObject() {
  var e = _taggedTemplateLiteral([
    '\n\tquery getComments ($code: String!) {\n\t\tgetComments (where: {code: $code}) {\n\t\t\tid\n\t\t\ttext\n\t\t\tcreatedAt\n\t\t}\n\t}\n'
  ])
  return (
    (_templateObject = function() {
      return e
    }),
    e
  )
}
var API = 'http://localhost:8080/graphql',
  client = new DefaultClient({
    uri: API,
    headers: { Authorization: '785aa3c19923d26170b19e05baa507adfb2beeb5234449f58f30f21368180048' }
  }),
  GET_COMMENTS = src(_templateObject())
function Child() {
  var e = _slicedToArray(React.useState(0), 2),
    t = e[0],
    r = e[1],
    n = useQuery(GET_COMMENTS, { variables: { code: '/xxxxxxxxxxxx' } }),
    i = n.loading,
    o = n.data
  return (
    console.log({ loading: i, data: o }),
    React__default.createElement(
      'div',
      null,
      React__default.createElement(
        'button',
        {
          className: styles.button,
          onClick: function() {
            r(t + 1)
          }
        },
        t
      ),
      React__default.createElement(Comment, null)
    )
  )
}
function GreenButton(e) {
  e.onClick, e.text
  return React__default.createElement(ApolloProvider, { client: client }, React__default.createElement(Child, null))
}
;(GreenButton.propTypes = { onClick: propTypes.func.isRequired, text: propTypes.string.isRequired }),
  (exports.API = API),
  (exports.default = GreenButton)
