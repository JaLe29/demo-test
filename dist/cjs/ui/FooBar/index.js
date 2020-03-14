'use strict'
function _interopDefault(e) {
  return e && 'object' == typeof e && 'default' in e ? e.default : e
}
Object.defineProperty(exports, '__esModule', { value: !0 })
var React = _interopDefault(require('react'))
function createCommonjsModule(e, t) {
  return e((t = { exports: {} }), t.exports), t.exports
  /** @license React v16.13.0
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
}
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
function z(o) {
  if ('object' == typeof o && null !== o) {
    var a = o.$$typeof
    switch (a) {
      case c:
        switch ((o = o.type)) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return o
          default:
            switch ((o = o && o.$$typeof)) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return o
              default:
                return a
            }
        }
      case d:
        return a
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
  isValidElementType = function(o) {
    return (
      'string' == typeof o ||
      'function' == typeof o ||
      o === e ||
      o === m ||
      o === g ||
      o === f ||
      o === p ||
      o === q ||
      ('object' == typeof o &&
        null !== o &&
        (o.$$typeof === t ||
          o.$$typeof === r ||
          o.$$typeof === h ||
          o.$$typeof === k ||
          o.$$typeof === n ||
          o.$$typeof === w ||
          o.$$typeof === x ||
          o.$$typeof === y ||
          o.$$typeof === v))
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
          o = e ? Symbol.for('react.fragment') : 60107,
          a = e ? Symbol.for('react.strict_mode') : 60108,
          c = e ? Symbol.for('react.profiler') : 60114,
          s = e ? Symbol.for('react.provider') : 60109,
          i = e ? Symbol.for('react.context') : 60110,
          p = e ? Symbol.for('react.async_mode') : 60111,
          u = e ? Symbol.for('react.concurrent_mode') : 60111,
          l = e ? Symbol.for('react.forward_ref') : 60112,
          f = e ? Symbol.for('react.suspense') : 60113,
          y = e ? Symbol.for('react.suspense_list') : 60120,
          d = e ? Symbol.for('react.memo') : 60115,
          m = e ? Symbol.for('react.lazy') : 60116,
          v = e ? Symbol.for('react.block') : 60121,
          b = e ? Symbol.for('react.fundamental') : 60117,
          _ = e ? Symbol.for('react.responder') : 60118,
          h = e ? Symbol.for('react.scope') : 60119
        function g(e) {
          if ('object' == typeof e && null !== e) {
            var t = e.$$typeof
            switch (t) {
              case r:
                var y = e.type
                switch (y) {
                  case p:
                  case u:
                  case o:
                  case c:
                  case a:
                  case f:
                    return y
                  default:
                    var v = y && y.$$typeof
                    switch (v) {
                      case i:
                      case l:
                      case m:
                      case d:
                      case s:
                        return v
                      default:
                        return t
                    }
                }
              case n:
                return t
            }
          }
        }
        var S = p,
          I = u,
          T = i,
          P = s,
          O = r,
          w = l,
          E = o,
          x = m,
          C = d,
          $ = n,
          j = c,
          R = a,
          M = f,
          F = !1
        function N(e) {
          return g(e) === u
        }
        ;(t.AsyncMode = S),
          (t.ConcurrentMode = I),
          (t.ContextConsumer = T),
          (t.ContextProvider = P),
          (t.Element = O),
          (t.ForwardRef = w),
          (t.Fragment = E),
          (t.Lazy = x),
          (t.Memo = C),
          (t.Portal = $),
          (t.Profiler = j),
          (t.StrictMode = R),
          (t.Suspense = M),
          (t.isAsyncMode = function(e) {
            return (
              F ||
                ((F = !0),
                console.warn(
                  'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.'
                )),
              N(e) || g(e) === p
            )
          }),
          (t.isConcurrentMode = N),
          (t.isContextConsumer = function(e) {
            return g(e) === i
          }),
          (t.isContextProvider = function(e) {
            return g(e) === s
          }),
          (t.isElement = function(e) {
            return 'object' == typeof e && null !== e && e.$$typeof === r
          }),
          (t.isForwardRef = function(e) {
            return g(e) === l
          }),
          (t.isFragment = function(e) {
            return g(e) === o
          }),
          (t.isLazy = function(e) {
            return g(e) === m
          }),
          (t.isMemo = function(e) {
            return g(e) === d
          }),
          (t.isPortal = function(e) {
            return g(e) === n
          }),
          (t.isProfiler = function(e) {
            return g(e) === c
          }),
          (t.isStrictMode = function(e) {
            return g(e) === a
          }),
          (t.isSuspense = function(e) {
            return g(e) === f
          }),
          (t.isValidElementType = function(e) {
            return (
              'string' == typeof e ||
              'function' == typeof e ||
              e === o ||
              e === u ||
              e === c ||
              e === a ||
              e === f ||
              e === y ||
              ('object' == typeof e &&
                null !== e &&
                (e.$$typeof === m ||
                  e.$$typeof === d ||
                  e.$$typeof === s ||
                  e.$$typeof === i ||
                  e.$$typeof === l ||
                  e.$$typeof === b ||
                  e.$$typeof === _ ||
                  e.$$typeof === h ||
                  e.$$typeof === v))
            )
          }),
          (t.typeOf = g)
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
        for (var r, n, o = toObject(e), a = 1; a < arguments.length; a++) {
          for (var c in (r = Object(arguments[a]))) hasOwnProperty.call(r, c) && (o[c] = r[c])
          if (getOwnPropertySymbols) {
            n = getOwnPropertySymbols(r)
            for (var s = 0; s < n.length; s++) propIsEnumerable.call(r, n[s]) && (o[n[s]] = r[n[s]])
          }
        }
        return o
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
function checkPropTypes(e, t, r, n, o) {
  if ('production' !== process.env.NODE_ENV)
    for (var a in e)
      if (has(e, a)) {
        var c
        try {
          if ('function' != typeof e[a]) {
            var s = Error(
              (n || 'React class') +
                ': ' +
                r +
                ' type `' +
                a +
                '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                typeof e[a] +
                '`.'
            )
            throw ((s.name = 'Invariant Violation'), s)
          }
          c = e[a](t, a, n, r, null, ReactPropTypesSecret$1)
        } catch (e) {
          c = e
        }
        if (
          (!c ||
            c instanceof Error ||
            printWarning(
              (n || 'React class') +
                ': type specification of ' +
                r +
                ' `' +
                a +
                '` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
                typeof c +
                '. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).'
            ),
          c instanceof Error && !(c.message in loggedTypeFailures))
        ) {
          loggedTypeFailures[c.message] = !0
          var i = o ? o() : ''
          printWarning('Failed ' + r + ' type: ' + c.message + (null != i ? i : ''))
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
    any: c(emptyFunctionThatReturnsNull),
    arrayOf: function(e) {
      return c(function(t, r, n, o, c) {
        if ('function' != typeof e)
          return new a('Property `' + c + '` of component `' + n + '` has invalid PropType notation inside arrayOf.')
        var s = t[r]
        if (!Array.isArray(s))
          return new a(
            'Invalid ' + o + ' `' + c + '` of type `' + p(s) + '` supplied to `' + n + '`, expected an array.'
          )
        for (var i = 0; i < s.length; i++) {
          var u = e(s, i, n, o, c + '[' + i + ']', ReactPropTypesSecret_1)
          if (u instanceof Error) return u
        }
        return null
      })
    },
    element: c(function(t, r, n, o, c) {
      var s = t[r]
      return e(s)
        ? null
        : new a(
            'Invalid ' +
              o +
              ' `' +
              c +
              '` of type `' +
              p(s) +
              '` supplied to `' +
              n +
              '`, expected a single ReactElement.'
          )
    }),
    elementType: c(function(e, t, r, n, o) {
      var c = e[t]
      return reactIs.isValidElementType(c)
        ? null
        : new a(
            'Invalid ' +
              n +
              ' `' +
              o +
              '` of type `' +
              p(c) +
              '` supplied to `' +
              r +
              '`, expected a single ReactElement type.'
          )
    }),
    instanceOf: function(e) {
      return c(function(t, r, n, o, c) {
        if (!(t[r] instanceof e)) {
          var s = e.name || '<<anonymous>>'
          return new a(
            'Invalid ' +
              o +
              ' `' +
              c +
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
    node: c(function(e, t, r, n, o) {
      return i(e[t]) ? null : new a('Invalid ' + n + ' `' + o + '` supplied to `' + r + '`, expected a ReactNode.')
    }),
    objectOf: function(e) {
      return c(function(t, r, n, o, c) {
        if ('function' != typeof e)
          return new a('Property `' + c + '` of component `' + n + '` has invalid PropType notation inside objectOf.')
        var s = t[r],
          i = p(s)
        if ('object' !== i)
          return new a('Invalid ' + o + ' `' + c + '` of type `' + i + '` supplied to `' + n + '`, expected an object.')
        for (var u in s)
          if (has$1(s, u)) {
            var l = e(s, u, n, o, c + '.' + u, ReactPropTypesSecret_1)
            if (l instanceof Error) return l
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
      function t(t, r, n, c, s) {
        for (var i = t[r], p = 0; p < e.length; p++) if (o(i, e[p])) return null
        var l = JSON.stringify(e, function(e, t) {
          return 'symbol' === u(t) ? String(t) : t
        })
        return new a(
          'Invalid ' +
            c +
            ' `' +
            s +
            '` of value `' +
            String(i) +
            '` supplied to `' +
            n +
            '`, expected one of ' +
            l +
            '.'
        )
      }
      return c(t)
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
                l(r) +
                ' at index ' +
                t +
                '.'
            ),
            emptyFunctionThatReturnsNull
          )
      }
      return c(function(t, r, n, o, c) {
        for (var s = 0; s < e.length; s++) {
          if (null == (0, e[s])(t, r, n, o, c, ReactPropTypesSecret_1)) return null
        }
        return new a('Invalid ' + o + ' `' + c + '` supplied to `' + n + '`.')
      })
    },
    shape: function(e) {
      return c(function(t, r, n, o, c) {
        var s = t[r],
          i = p(s)
        if ('object' !== i)
          return new a('Invalid ' + o + ' `' + c + '` of type `' + i + '` supplied to `' + n + '`, expected `object`.')
        for (var u in e) {
          var l = e[u]
          if (l) {
            var f = l(s, u, n, o, c + '.' + u, ReactPropTypesSecret_1)
            if (f) return f
          }
        }
        return null
      })
    },
    exact: function(e) {
      return c(function(t, r, n, o, c) {
        var s = t[r],
          i = p(s)
        if ('object' !== i)
          return new a('Invalid ' + o + ' `' + c + '` of type `' + i + '` supplied to `' + n + '`, expected `object`.')
        var u = objectAssign({}, t[r], e)
        for (var l in u) {
          var f = e[l]
          if (!f)
            return new a(
              'Invalid ' +
                o +
                ' `' +
                c +
                '` key `' +
                l +
                '` supplied to `' +
                n +
                '`.\nBad object: ' +
                JSON.stringify(t[r], null, '  ') +
                '\nValid keys: ' +
                JSON.stringify(Object.keys(e), null, '  ')
            )
          var y = f(s, l, n, o, c + '.' + l, ReactPropTypesSecret_1)
          if (y) return y
        }
        return null
      })
    }
  }
  function o(e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
  }
  function a(e) {
    ;(this.message = e), (this.stack = '')
  }
  function c(e) {
    if ('production' !== process.env.NODE_ENV)
      var r = {},
        n = 0
    function o(o, c, s, i, p, u, l) {
      if (((i = i || '<<anonymous>>'), (u = u || s), l !== ReactPropTypesSecret_1)) {
        if (t) {
          var f = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types'
          )
          throw ((f.name = 'Invariant Violation'), f)
        }
        if ('production' !== process.env.NODE_ENV && 'undefined' != typeof console) {
          var y = i + ':' + s
          !r[y] &&
            n < 3 &&
            (printWarning$1(
              'You are manually calling a React.PropTypes validation function for the `' +
                u +
                '` prop on `' +
                i +
                '`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.'
            ),
            (r[y] = !0),
            n++)
        }
      }
      return null == c[s]
        ? o
          ? null === c[s]
            ? new a('The ' + p + ' `' + u + '` is marked as required in `' + i + '`, but its value is `null`.')
            : new a('The ' + p + ' `' + u + '` is marked as required in `' + i + '`, but its value is `undefined`.')
          : null
        : e(c, s, i, p, u)
    }
    var c = o.bind(null, !1)
    return (c.isRequired = o.bind(null, !0)), c
  }
  function s(e) {
    return c(function(t, r, n, o, c, s) {
      var i = t[r]
      return p(i) !== e
        ? new a('Invalid ' + o + ' `' + c + '` of type `' + u(i) + '` supplied to `' + n + '`, expected `' + e + '`.')
        : null
    })
  }
  function i(t) {
    switch (typeof t) {
      case 'number':
      case 'string':
      case 'undefined':
        return !0
      case 'boolean':
        return !t
      case 'object':
        if (Array.isArray(t)) return t.every(i)
        if (null === t || e(t)) return !0
        var n = (function(e) {
          var t = e && ((r && e[r]) || e['@@iterator'])
          if ('function' == typeof t) return t
        })(t)
        if (!n) return !1
        var o,
          a = n.call(t)
        if (n !== t.entries) {
          for (; !(o = a.next()).done; ) if (!i(o.value)) return !1
        } else
          for (; !(o = a.next()).done; ) {
            var c = o.value
            if (c && !i(c[1])) return !1
          }
        return !0
      default:
        return !1
    }
  }
  function p(e) {
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
  function u(e) {
    if (null == e) return '' + e
    var t = p(e)
    if ('object' === t) {
      if (e instanceof Date) return 'date'
      if (e instanceof RegExp) return 'regexp'
    }
    return t
  }
  function l(e) {
    var t = u(e)
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
    (a.prototype = Error.prototype),
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
    function e(e, t, r, n, o, a) {
      if (a !== ReactPropTypesSecret_1) {
        var c = new Error(
          'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
        )
        throw ((c.name = 'Invariant Violation'), c)
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
  propTypes_9 = propTypes.string
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
var css = '.FooBar-module_foo-bar__1psIB {\n  color: red; }\n',
  styles = { 'foo-bar': 'FooBar-module_foo-bar__1psIB' }
function FooBar(e) {
  var t = e.text
  return React.createElement('div', { className: styles['foo-bar'] }, t)
}
styleInject(css), (FooBar.propTypes = { text: propTypes.string }), (exports.default = FooBar)
