export const TEST = () => {
  return
}

// ;(window.webpackJsonp = window.webpackJsonp || []).push([
//   [3],
//   {
//     181: function (
//       t: any,
//       e: any,
//       n: {
//         (arg0: number): any
//         r: (arg0: any) => any
//         d: (arg0: any, arg1: string, arg2: () => () => any) => any
//       }
//     ) {
//       'use strict'
//       n.r(e),
//         n.d(e, 'default', function () {
//           return d
//         })
//       const o = n(26),
//         r = n(46),
//         i = n(63),
//         u = n(64),
//         c = n(65),
//         a = n(66),
//         f = n(67)
//       function l(t: any) {
//         return (l =
//           'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
//             ? function (t: any) {
//                 return typeof t
//               }
//             : function (t: symbol) {
//                 return t &&
//                   'function' == typeof Symbol &&
//                   t.constructor === Symbol &&
//                   t !== Symbol.prototype
//                   ? 'symbol'
//                   : typeof t
//               })(t)
//       }
//       function s(t: any, e: string | any[]) {
//         for (let n = 0; n < e.length; n++) {
//           const o = e[n]
//           ;(o.enumerable = o.enumerable || !1),
//             (o.configurable = !0),
//             'value' in o && (o.writable = !0),
//             Object.defineProperty(t, o.key, o)
//         }
//       }
//       function p(t: any, e: any) {
//         return !e || ('object' !== l(e) && 'function' != typeof e)
//           ? (function (t) {
//               if (void 0 === t)
//                 throw new ReferenceError(
//                   "this hasn't been initialised - super() hasn't been called"
//                 )
//               return t
//             })(t)
//           : e
//       }
//       function y(t: Record<string, unknown>, e: PropertyKey, n: any) {
//         return (y =
//           'undefined' != typeof Reflect && Reflect.get
//             ? Reflect.get
//             : function (t: any, e: PropertyKey, n: any) {
//                 const o = (function (t, e) {
//                   for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = b(t)); );
//                   return t
//                 })(t, e)
//                 if (o) {
//                   const r = Object.getOwnPropertyDescriptor(o, e)
//                   return r.get ? r.get.call(n) : r.value
//                 }
//               })(t, e, n || t)
//       }
//       function b(t: () => any) {
//         return (b = Object.setPrototypeOf
//           ? Object.getPrototypeOf
//           : function (t: { __proto__: any }) {
//               return t.__proto__ || Object.getPrototypeOf(t)
//             })(t)
//       }
//       function h(t: () => any, e: Record<string, unknown>) {
//         return (h =
//           Object.setPrototypeOf ||
//           function (t: { __proto__: any }, e: any) {
//             return (t.__proto__ = e), t
//           })(t, e)
//       }
//       const d = (function (t) {
//         function e() {
//           let t: any
//           return (
//             (function (t, e) {
//               if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
//             })(this, e),
//             (t = p(this, b(e).call(this))).root
//               .find('input[type=hidden]')
//               .after('<input type="hidden" name="version" value="2"/>'),
//             t
//           )
//         }
//         let n: { (): any; prototype?: any }, o: string | any[], r: string | any[]
//         return (
//           (function (t, e) {
//             if ('function' != typeof e && null !== e)
//               throw new TypeError('Super expression must either be null or a function')
//             ;(t.prototype = Object.create(e && e.prototype, {
//               constructor: {
//                 value: t,
//                 writable: !0,
//                 configurable: !0,
//               },
//             })),
//               e && h(t, e)
//           })(e, t),
//           (n = e),
//           (o = [
//             {
//               key: 'init',
//               value: function () {
//                 y(b(e.prototype), 'init', this).call(this), this.checkAutoProcess()
//               },
//             },
//             {
//               key: 'checkAutoProcess',
//               value: function () {
//                 'true' == this.root.find('input[name=autoprocess]').val() && this.process()
//               },
//             },
//           ]) && s(n.prototype, o),
//           r && s(n, r),
//           e
//         )
//       })(Object(o.mix)(r.a).with(i.a, u.a, c.a, a.a, f.a))
//     },
//     26: function (t: { exports: any }, e: any, n: any) {
//       'use strict'
//       let o: { (t: any): void; apply?: any }, r: any[], i: any
//       function u(t: any, e: string | any[]) {
//         for (let n = 0; n < e.length; n++) {
//           const o = e[n]
//           ;(o.enumerable = o.enumerable || !1),
//             (o.configurable = !0),
//             'value' in o && (o.writable = !0),
//             Object.defineProperty(t, o.key, o)
//         }
//       }
//       ;(r = [e]),
//         void 0 ===
//           (i =
//             'function' ==
//             typeof (o = function (t: {
//               _cachedApplicationRef: symbol
//               _mixinRef: symbol
//               _originalMixin: symbol
//               wrap: (t: any, e: any) => any
//               Cached: (t: any) => any
//               HasInstance: (t: any) => any
//               BareMixin: (t: any) => any
//               Mixin: (t: any) => any
//               mix: (t: any) => any
//             }) {
//               Object.defineProperty(t, '__esModule', {
//                 value: !0,
//               })
//               const e = (t._cachedApplicationRef = Symbol('_cachedApplicationRef')),
//                 n = (t._mixinRef = Symbol('_mixinRef')),
//                 o = (t._originalMixin = Symbol('_originalMixin')),
//                 r = (t.wrap = function (t: Record<string, unknown>, e: any) {
//                   return Object.setPrototypeOf(e, t), t[o] || (t[o] = t), e
//                 }),
//                 i = (t.Cached = function (t: {
//                   (arg0: any): any
//                   [x: string]: symbol
//                   name: string | number
//                 }) {
//                   return r(
//                     t,
//                     function (n: { [x: string]: any; hasOwnProperty: (arg0: any) => any }) {
//                       let o = t[e]
//                       if ((o || (o = t[e] = Symbol(t.name)), n.hasOwnProperty(o))) return n[o]
//                       const r = t(n)
//                       return (n[o] = r), r
//                     }
//                   )
//                 }),
//                 c = (t.HasInstance = function (t: {
//                   hasOwnProperty: (arg0: typeof Symbol.hasInstance) => any
//                 }) {
//                   return (
//                     Symbol.hasInstance &&
//                       !t.hasOwnProperty(Symbol.hasInstance) &&
//                       Object.defineProperty(t, Symbol.hasInstance, {
//                         value: function (t: {
//                           [x: string]: any
//                           hasOwnProperty: (arg0: symbol) => any
//                         }) {
//                           for (let e = this[o]; null != t; ) {
//                             if (t.hasOwnProperty(n) && t[n] === e) return !0
//                             t = Object.getPrototypeOf(t)
//                           }
//                           return !1
//                         },
//                       }),
//                     t
//                   )
//                 }),
//                 a = (t.BareMixin = function (t: { (arg0: any): any; [x: string]: any }) {
//                   return r(t, function (e: any) {
//                     const r = t(e)
//                     return (r.prototype[n] = t[o]), r
//                   })
//                 }),
//                 f =
//                   ((t.Mixin = function (t: any) {
//                     return i(c(a(t)))
//                   }),
//                   (t.mix = function (t: any) {
//                     return new f(t)
//                   }),
//                   (function () {
//                     function t(e: any) {
//                       !(function (t, e) {
//                         if (!(t instanceof e))
//                           throw new TypeError('Cannot call a class as a function')
//                       })(this, t),
//                         (this.superclass = e)
//                     }
//                     let e: { (e: any): void; prototype?: any },
//                       n: { key: string; value: () => any }[],
//                       o: any
//                     return (
//                       (e = t),
//                       (n = [
//                         {
//                           key: 'with',
//                           value: function () {
//                             return Array.from(arguments).reduce(function (t, e) {
//                               return e(t)
//                             }, this.superclass)
//                           },
//                         },
//                       ]) && u(e.prototype, n),
//                       o && u(e, o),
//                       t
//                     )
//                   })())
//             })
//               ? o.apply(e, r)
//               : o) || (t.exports = i)
//     },
//     46: function (
//       t: any,
//       e: any,
//       n: {
//         (arg0: number): any
//         d: (arg0: any, arg1: string, arg2: () => () => any) => void
//         n: (arg0: any) => { (): any; new (): any; a: any }
//       }
//     ) {
//       'use strict'
//       n.d(e, 'a', function () {
//         return f
//       })
//       const o = n(2)
//       function r(t: any) {
//         return (r =
//           'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
//             ? function (t: any) {
//                 return typeof t
//               }
//             : function (t: symbol) {
//                 return t &&
//                   'function' == typeof Symbol &&
//                   t.constructor === Symbol &&
//                   t !== Symbol.prototype
//                   ? 'symbol'
//                   : typeof t
//               })(t)
//       }
//       function i(t: any, e: string | any[]) {
//         for (let n = 0; n < e.length; n++) {
//           const o = e[n]
//           ;(o.enumerable = o.enumerable || !1),
//             (o.configurable = !0),
//             'value' in o && (o.writable = !0),
//             Object.defineProperty(t, o.key, o)
//         }
//       }
//       function u(t: () => any) {
//         return (u = Object.setPrototypeOf
//           ? Object.getPrototypeOf
//           : function (t: { __proto__: any }) {
//               return t.__proto__ || Object.getPrototypeOf(t)
//             })(t)
//       }
//       function c(t: any) {
//         if (void 0 === t)
//           throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
//         return t
//       }
//       function a(t: () => any, e: Record<string, unknown>) {
//         return (a =
//           Object.setPrototypeOf ||
//           function (t: { __proto__: any }, e: any) {
//             return (t.__proto__ = e), t
//           })(t, e)
//       }
//       const f = (function (t) {
//         function e() {
//           let t: {
//               button: { on: (arg0: string, arg1: any) => any }
//               root: { find: (arg0: string) => any; one: (arg0: string, arg1: any) => any }
//               onProcessClick: { bind: (arg0: any) => any }
//               onIntentEvent: { bind: (arg0: any) => any }
//             },
//             n: any,
//             o: any
//           return (
//             (function (t, e) {
//               if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
//             })(this, e),
//             (n = this),
//             ((t =
//               !(o = u(e).call(this)) || ('object' !== r(o) && 'function' != typeof o)
//                 ? c(n)
//                 : o).root = $('#input')),
//             (t.button = t.root.find('.button[name=process]')),
//             t.button.on('click', t.onProcessClick.bind(c(t))),
//             t.root.one('click input', t.onIntentEvent.bind(c(t))),
//             t
//           )
//         }
//         let n: { (): any; prototype?: any }, o: { key: string; value: (t: any) => void }[], f: any
//         return (
//           (function (t, e) {
//             if ('function' != typeof e && null !== e)
//               throw new TypeError('Super expression must either be null or a function')
//             ;(t.prototype = Object.create(e && e.prototype, {
//               constructor: {
//                 value: t,
//                 writable: !0,
//                 configurable: !0,
//               },
//             })),
//               e && a(t, e)
//           })(e, t),
//           (n = e),
//           (o = [
//             {
//               key: 'init',
//               value: function () {},
//             },
//             {
//               key: 'onProcessClick',
//               value: function (t: any) {
//                 this.emit('process', this.root.find('form').serializeArray())
//               },
//             },
//             {
//               key: 'onIntentEvent',
//               value: function (t: any) {
//                 this.emit('intent')
//               },
//             },
//             {
//               key: 'setData',
//               value: function (t: any) {
//                 $('#data').val(t)
//               },
//             },
//             {
//               key: 'process',
//               value: function () {
//                 this.button.trigger('click')
//               },
//             },
//             {
//               key: 'toggleLoading',
//               value: function (t: any) {
//                 this.button.toggleClass('is-loading', t)
//               },
//             },
//           ]) && i(n.prototype, o),
//           f && i(n, f),
//           e
//         )
//       })(n.n(o).a)
//     },
//     63: function (
//       t: any,
//       e: any,
//       n: { d: (arg0: any, arg1: string, arg2: () => (t: any) => () => any) => void }
//     ) {
//       'use strict'
//       function o(t: any) {
//         return (o =
//           'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
//             ? function (t: any) {
//                 return typeof t
//               }
//             : function (t: symbol) {
//                 return t &&
//                   'function' == typeof Symbol &&
//                   t.constructor === Symbol &&
//                   t !== Symbol.prototype
//                   ? 'symbol'
//                   : typeof t
//               })(t)
//       }
//       function r(t: any, e: string | any[]) {
//         for (let n = 0; n < e.length; n++) {
//           const o = e[n]
//           ;(o.enumerable = o.enumerable || !1),
//             (o.configurable = !0),
//             'value' in o && (o.writable = !0),
//             Object.defineProperty(t, o.key, o)
//         }
//       }
//       function i(t: () => any) {
//         return (i = Object.setPrototypeOf
//           ? Object.getPrototypeOf
//           : function (t: { __proto__: any }) {
//               return t.__proto__ || Object.getPrototypeOf(t)
//             })(t)
//       }
//       function u(t: any) {
//         if (void 0 === t)
//           throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
//         return t
//       }
//       function c(t: () => any, e: Record<string, unknown>) {
//         return (c =
//           Object.setPrototypeOf ||
//           function (t: { __proto__: any }, e: any) {
//             return (t.__proto__ = e), t
//           })(t, e)
//       }
//       function a(t: any) {
//         return (function (t) {
//           function e() {
//             let t: {
//                 root: { find: (arg0: string) => any }
//                 clearButton: { on: (arg0: string, arg1: any) => any }
//                 onClearClick: { bind: (arg0: any) => any }
//               },
//               n: any,
//               r: any
//             return (
//               (function (t, e) {
//                 if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
//               })(this, e),
//               (n = this),
//               ((t =
//                 !(r = i(e).call(this)) || ('object' !== o(r) && 'function' != typeof r)
//                   ? u(n)
//                   : r).clearButton = t.root.find('.button[name=clear]')),
//               t.clearButton.on('click', t.onClearClick.bind(u(t))),
//               t
//             )
//           }
//           let n: { (): any; prototype?: any }, a: { key: string; value: () => void }[], f: any
//           return (
//             (function (t, e) {
//               if ('function' != typeof e && null !== e)
//                 throw new TypeError('Super expression must either be null or a function')
//               ;(t.prototype = Object.create(e && e.prototype, {
//                 constructor: {
//                   value: t,
//                   writable: !0,
//                   configurable: !0,
//                 },
//               })),
//                 e && c(t, e)
//             })(e, t),
//             (n = e),
//             (a = [
//               {
//                 key: 'onClearClick',
//                 value: function () {
//                   this.clearButton.blur(), this.setData(''), this.emit('clear')
//                 },
//               },
//             ]) && r(n.prototype, a),
//             f && r(n, f),
//             e
//           )
//         })(t)
//       }
//       n.d(e, 'a', function () {
//         return a
//       })
//     },
//     64: function (
//       t: any,
//       e: any,
//       n: { d: (arg0: any, arg1: string, arg2: () => (t: any) => () => any) => void }
//     ) {
//       'use strict'
//       function o(t: any) {
//         return (o =
//           'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
//             ? function (t: any) {
//                 return typeof t
//               }
//             : function (t: symbol) {
//                 return t &&
//                   'function' == typeof Symbol &&
//                   t.constructor === Symbol &&
//                   t !== Symbol.prototype
//                   ? 'symbol'
//                   : typeof t
//               })(t)
//       }
//       function r(t: any, e: string | any[]) {
//         for (let n = 0; n < e.length; n++) {
//           const o = e[n]
//           ;(o.enumerable = o.enumerable || !1),
//             (o.configurable = !0),
//             'value' in o && (o.writable = !0),
//             Object.defineProperty(t, o.key, o)
//         }
//       }
//       function i(t: () => any) {
//         return (i = Object.setPrototypeOf
//           ? Object.getPrototypeOf
//           : function (t: { __proto__: any }) {
//               return t.__proto__ || Object.getPrototypeOf(t)
//             })(t)
//       }
//       function u(t: any) {
//         if (void 0 === t)
//           throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
//         return t
//       }
//       function c(t: () => any, e: Record<string, unknown>) {
//         return (c =
//           Object.setPrototypeOf ||
//           function (t: { __proto__: any }, e: any) {
//             return (t.__proto__ = e), t
//           })(t, e)
//       }
//       function a(t: any) {
//         return (function (t) {
//           function e() {
//             let t: {
//                 root: { find: (arg0: string) => any }
//                 fileSelect: { on: (arg0: string, arg1: any) => any }
//                 browseButton: { on: (arg0: string, arg1: any) => any }
//                 onBrowseClick: { bind: (arg0: any) => any }
//                 onFileSelectChange: { bind: (arg0: any) => any }
//               },
//               n: any,
//               r: any
//             return (
//               (function (t, e) {
//                 if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
//               })(this, e),
//               (n = this),
//               ((t =
//                 !(r = i(e).call(this)) || ('object' !== o(r) && 'function' != typeof r)
//                   ? u(n)
//                   : r).browseButton = t.root.find('.button[name=browse]')),
//               (t.fileSelect = $('<input type="file">')),
//               t.browseButton.on('click', t.onBrowseClick.bind(u(t))),
//               t.fileSelect.on('change', t.onFileSelectChange.bind(u(t))),
//               t
//             )
//           }
//           let n: { (): any; prototype?: any }, a: { key: string; value: (t: any) => void }[], f: any
//           return (
//             (function (t, e) {
//               if ('function' != typeof e && null !== e)
//                 throw new TypeError('Super expression must either be null or a function')
//               ;(t.prototype = Object.create(e && e.prototype, {
//                 constructor: {
//                   value: t,
//                   writable: !0,
//                   configurable: !0,
//                 },
//               })),
//                 e && c(t, e)
//             })(e, t),
//             (n = e),
//             (a = [
//               {
//                 key: 'onBrowseClick',
//                 value: function () {
//                   return this.browseButton.blur(), this.fileSelect.click(), !1
//                 },
//               },
//               {
//                 key: 'onFileSelectChange',
//                 value: function (t: any) {
//                   const e = this.fileSelect[0].files
//                   this.browseButton.blur(), e.length > 0 && this.emit('browse', e[0])
//                 },
//               },
//             ]) && r(n.prototype, a),
//             f && r(n, f),
//             e
//           )
//         })(t)
//       }
//       n.d(e, 'a', function () {
//         return a
//       })
//     },
//     65: function (
//       t: any,
//       e: any,
//       n: { d: (arg0: any, arg1: string, arg2: () => (t: any) => () => any) => void }
//     ) {
//       'use strict'
//       function o(t: any) {
//         return (o =
//           'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
//             ? function (t: any) {
//                 return typeof t
//               }
//             : function (t: symbol) {
//                 return t &&
//                   'function' == typeof Symbol &&
//                   t.constructor === Symbol &&
//                   t !== Symbol.prototype
//                   ? 'symbol'
//                   : typeof t
//               })(t)
//       }
//       function r(t: any, e: string | any[]) {
//         for (let n = 0; n < e.length; n++) {
//           const o = e[n]
//           ;(o.enumerable = o.enumerable || !1),
//             (o.configurable = !0),
//             'value' in o && (o.writable = !0),
//             Object.defineProperty(t, o.key, o)
//         }
//       }
//       function i(t: () => any) {
//         return (i = Object.setPrototypeOf
//           ? Object.getPrototypeOf
//           : function (t: { __proto__: any }) {
//               return t.__proto__ || Object.getPrototypeOf(t)
//             })(t)
//       }
//       function u(t: any) {
//         if (void 0 === t)
//           throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
//         return t
//       }
//       function c(t: () => any, e: Record<string, unknown>) {
//         return (c =
//           Object.setPrototypeOf ||
//           function (t: { __proto__: any }, e: any) {
//             return (t.__proto__ = e), t
//           })(t, e)
//       }
//       function a(t: any) {
//         return (function (t) {
//           function e() {
//             let t: {
//                 dropZone: { on: (arg0: string, arg1: any) => any }
//                 dropZoneSelector: any
//                 dropZoneVisible: boolean
//                 dropZoneTimer: any
//                 dropZoneHideDelay: number
//                 document: { on: (arg0: string, arg1: any) => any }
//                 handleFileStartDrag: { bind: (arg0: any) => any }
//                 handleFileEndDrag: { bind: (arg0: any) => any }
//                 handleFileEscapeDrag: { bind: (arg0: any) => any }
//                 handleFileDrop: { bind: (arg0: any) => any }
//               },
//               n: any,
//               r: any
//             return (
//               (function (t, e) {
//                 if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
//               })(this, e),
//               (n = this),
//               ((t =
//                 !(r = i(e).call(this)) || ('object' !== o(r) && 'function' != typeof r)
//                   ? u(n)
//                   : r).dropZoneSelector = '#input .control .dropzone'),
//               (t.dropZone = $(t.dropZoneSelector)),
//               (t.dropZoneVisible = !1),
//               t.dropZoneTimer,
//               (t.dropZoneHideDelay = 250),
//               (t.document = $(document)),
//               t.document.on('dragstart dragenter dragover', t.handleFileStartDrag.bind(u(t))),
//               t.document.on('drop dragleave dragend', t.handleFileEndDrag.bind(u(t))),
//               t.document.on('keydown', t.handleFileEscapeDrag.bind(u(t))),
//               t.dropZone.on('drop', t.handleFileDrop.bind(u(t))),
//               t
//             )
//           }
//           let n: { (): any; prototype?: any }, a: { key: string; value: (t: any) => void }[], f: any
//           return (
//             (function (t, e) {
//               if ('function' != typeof e && null !== e)
//                 throw new TypeError('Super expression must either be null or a function')
//               ;(t.prototype = Object.create(e && e.prototype, {
//                 constructor: {
//                   value: t,
//                   writable: !0,
//                   configurable: !0,
//                 },
//               })),
//                 e && c(t, e)
//             })(e, t),
//             (n = e),
//             (a = [
//               {
//                 key: 'handleFileStartDrag',
//                 value: function (t: {
//                   target: any
//                   originalEvent: {
//                     dataTransfer: { types: any; effectAllowed: string; dropEffect: string }
//                   }
//                   stopPropagation: () => any
//                   preventDefault: () => any
//                 }) {
//                   const e = $(t.target)
//                   $.inArray('Files', t.originalEvent.dataTransfer.types) > -1 &&
//                     (t.stopPropagation(),
//                     t.preventDefault(),
//                     this.dropZone.addClass('is-active'),
//                     (this.dropZoneVisible = !0),
//                     e.is(this.dropZone) || e.parents(this.dropZoneSelector).length > 0
//                       ? (this.dropZone.addClass('is-hover'),
//                         (t.originalEvent.dataTransfer.effectAllowed = 'copyMove'),
//                         (t.originalEvent.dataTransfer.dropEffect = 'move'))
//                       : (this.dropZone.removeClass('is-hover'),
//                         (t.originalEvent.dataTransfer.effectAllowed = 'none'),
//                         (t.originalEvent.dataTransfer.dropEffect = 'none')))
//                 },
//               },
//               {
//                 key: 'handleFileEndDrag',
//                 value: function (t: any) {
//                   ;(this.dropZoneVisible = !1),
//                     clearTimeout(this.dropZoneTimer),
//                     (this.dropZoneTimer = setTimeout(
//                       function () {
//                         this.dropZoneVisible || this.dropZone.removeClass('is-active')
//                       }.bind(this),
//                       this.dropZoneHideDelay
//                     ))
//                 },
//               },
//               {
//                 key: 'handleFileEscapeDrag',
//                 value: function (t: { keyCode: number }) {
//                   27 === t.keyCode &&
//                     ((this.dropZoneVisible = !1), this.dropZone.removeClass('is-active'))
//                 },
//               },
//               {
//                 key: 'handleFileDrop',
//                 value: function (t: {
//                   originalEvent: { dataTransfer: { types: any; files: any } }
//                   preventDefault: () => any
//                   stopPropagation: () => any
//                 }) {
//                   if ($.inArray('Files', t.originalEvent.dataTransfer.types) > -1) {
//                     t.preventDefault(),
//                       t.stopPropagation(),
//                       this.dropZone.removeClass('is-hover').removeClass('is-active')
//                     const e = t.originalEvent.dataTransfer.files
//                     e.length > 0 && this.emit('dragdrop', e[0])
//                   }
//                 },
//               },
//             ]) && r(n.prototype, a),
//             f && r(n, f),
//             e
//           )
//         })(t)
//       }
//       n.d(e, 'a', function () {
//         return a
//       })
//     },
//     66: function (
//       t: any,
//       e: any,
//       n: { d: (arg0: any, arg1: string, arg2: () => (t: any) => () => any) => void }
//     ) {
//       'use strict'
//       function o(t: any) {
//         return (o =
//           'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
//             ? function (t: any) {
//                 return typeof t
//               }
//             : function (t: symbol) {
//                 return t &&
//                   'function' == typeof Symbol &&
//                   t.constructor === Symbol &&
//                   t !== Symbol.prototype
//                   ? 'symbol'
//                   : typeof t
//               })(t)
//       }
//       function r(t: any, e: string | any[]) {
//         for (let n = 0; n < e.length; n++) {
//           const o = e[n]
//           ;(o.enumerable = o.enumerable || !1),
//             (o.configurable = !0),
//             'value' in o && (o.writable = !0),
//             Object.defineProperty(t, o.key, o)
//         }
//       }
//       function i(t: () => any) {
//         return (i = Object.setPrototypeOf
//           ? Object.getPrototypeOf
//           : function (t: { __proto__: any }) {
//               return t.__proto__ || Object.getPrototypeOf(t)
//             })(t)
//       }
//       function u(t: any) {
//         if (void 0 === t)
//           throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
//         return t
//       }
//       function c(t: () => any, e: Record<string, unknown>) {
//         return (c =
//           Object.setPrototypeOf ||
//           function (t: { __proto__: any }, e: any) {
//             return (t.__proto__ = e), t
//           })(t, e)
//       }
//       function a(t: any) {
//         return (function (t) {
//           function e() {
//             let t: {
//                 root: { find: (arg0: string) => any }
//                 exampleButton: { on: (arg0: string, arg1: any) => any }
//                 onExampleClick: { bind: (arg0: any) => any }
//               },
//               n: any,
//               r: any
//             return (
//               (function (t, e) {
//                 if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
//               })(this, e),
//               (n = this),
//               ((t =
//                 !(r = i(e).call(this)) || ('object' !== o(r) && 'function' != typeof r)
//                   ? u(n)
//                   : r).exampleButton = t.root.find('.button[name=example]')),
//               t.exampleButton.on('click', t.onExampleClick.bind(u(t))),
//               t
//             )
//           }
//           let n: { (): any; prototype?: any }, a: { key: string; value: () => void }[], f: any
//           return (
//             (function (t, e) {
//               if ('function' != typeof e && null !== e)
//                 throw new TypeError('Super expression must either be null or a function')
//               ;(t.prototype = Object.create(e && e.prototype, {
//                 constructor: {
//                   value: t,
//                   writable: !0,
//                   configurable: !0,
//                 },
//               })),
//                 e && c(t, e)
//             })(e, t),
//             (n = e),
//             (a = [
//               {
//                 key: 'onExampleClick',
//                 value: function () {
//                   this.root.find('[data-example]').each(function (t: any, e: any) {
//                     const n = $(e)
//                     n.val(n.attr('data-example'))
//                   }),
//                     this.emit('example')
//                 },
//               },
//             ]) && r(n.prototype, a),
//             f && r(n, f),
//             e
//           )
//         })(t)
//       }
//       n.d(e, 'a', function () {
//         return a
//       })
//     },
//     67: function (
//       t: any,
//       e: any,
//       n: { d: (arg0: any, arg1: string, arg2: () => (t: any) => () => any) => void }
//     ) {
//       'use strict'
//       function o(t: any) {
//         return (o =
//           'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
//             ? function (t: any) {
//                 return typeof t
//               }
//             : function (t: symbol) {
//                 return t &&
//                   'function' == typeof Symbol &&
//                   t.constructor === Symbol &&
//                   t !== Symbol.prototype
//                   ? 'symbol'
//                   : typeof t
//               })(t)
//       }
//       function r(t: any, e: string | any[]) {
//         for (let n = 0; n < e.length; n++) {
//           const o = e[n]
//           ;(o.enumerable = o.enumerable || !1),
//             (o.configurable = !0),
//             'value' in o && (o.writable = !0),
//             Object.defineProperty(t, o.key, o)
//         }
//       }
//       function i(t: any, e: any) {
//         return !e || ('object' !== o(e) && 'function' != typeof e)
//           ? (function (t) {
//               if (void 0 === t)
//                 throw new ReferenceError(
//                   "this hasn't been initialised - super() hasn't been called"
//                 )
//               return t
//             })(t)
//           : e
//       }
//       function u(t: () => any) {
//         return (u = Object.setPrototypeOf
//           ? Object.getPrototypeOf
//           : function (t: { __proto__: any }) {
//               return t.__proto__ || Object.getPrototypeOf(t)
//             })(t)
//       }
//       function c(t: () => any, e: Record<string, unknown>) {
//         return (c =
//           Object.setPrototypeOf ||
//           function (t: { __proto__: any }, e: any) {
//             return (t.__proto__ = e), t
//           })(t, e)
//       }
//       function a(t: any) {
//         return (function (t) {
//           function e() {
//             let t: {
//               root: { find: (arg0: string) => any }
//               progress: any
//               overlay: { children: (arg0: string) => any }
//             }
//             return (
//               (function (t, e) {
//                 if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
//               })(this, e),
//               ((t = i(this, u(e).call(this))).overlay = t.root.find('.control .loading')),
//               (t.progress = t.overlay.children('progress')),
//               t
//             )
//           }
//           let n: { (): any; prototype?: any }, o: { key: string; value: (t: any) => void }[], a: any
//           return (
//             (function (t, e) {
//               if ('function' != typeof e && null !== e)
//                 throw new TypeError('Super expression must either be null or a function')
//               ;(t.prototype = Object.create(e && e.prototype, {
//                 constructor: {
//                   value: t,
//                   writable: !0,
//                   configurable: !0,
//                 },
//               })),
//                 e && c(t, e)
//             })(e, t),
//             (n = e),
//             (o = [
//               {
//                 key: 'setProgress',
//                 value: function (t: any) {
//                   this.progress.attr('value', t)
//                 },
//               },
//               {
//                 key: 'toggleFileLoading',
//                 value: function (t: any) {
//                   this.overlay.toggleClass('is-active', t)
//                 },
//               },
//             ]) && r(n.prototype, o),
//             a && r(n, a),
//             e
//           )
//         })(t)
//       }
//       n.d(e, 'a', function () {
//         return a
//       })
//     },
//   },
// ])
