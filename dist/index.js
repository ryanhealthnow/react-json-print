module.exports = (function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var a = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          n.d(
            r,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 1))
  );
})([
  function (e, t) {
    e.exports = require("react");
  },
  function (e, t, n) {
    n.r(t);
    var r,
      a,
      o = n(0);
    n(2);
    !(function (e) {
      (e.ARRAY = "array"),
        (e.OBJECT = "object"),
        (e.STRING = "string"),
        (e.NUMBER = "number"),
        (e.BOOLEAN = "boolean"),
        (e.NULL = "null"),
        (e.UNDEFINED = "undefined");
    })(r || (r = {})),
      (function (e) {
        (e.OPENED = "opened"), (e.CLOSED = "closed");
      })(a || (a = {}));
    const i = Object(o.createContext)({
        maxDepth: 0,
        expandedTreeState: a.CLOSED,
      }),
      c = (e, t, n, a) => {
        const i = n || 0 === n ? n + 1 : 0;
        switch (t) {
          case r.OBJECT: {
            const t = e;
            return Object.entries(t).map(([e, t]) => {
              const n = `${a}-${e}-${i}`;
              return o.createElement(l, {
                key: n,
                dataObject: t,
                objectKey: e,
                currentDepth: i,
                dataKey: n,
              });
            });
          }
          case r.ARRAY:
            return e.map((e, t) => {
              const n = `${a}-${t}-${i}`;
              return o.createElement(l, {
                key: n,
                dataObject: e,
                objectKey: t,
                currentDepth: i,
                dataKey: n,
              });
            });
          default:
            return null;
        }
      },
      l = (e) => {
        const {
            expanded: t,
            depth: n,
            currentDepth: l,
            dataKey: u,
            objectKey: s,
          } = e,
          { expandedTreeState: d, maxDepth: f } = Object(o.useContext)(i),
          p = t || d === a.OPENED ? a.OPENED : a.CLOSED,
          [m, b] = Object(o.useState)(p),
          v = ((e) => {
            const { dataObject: t, dataString: n } = e;
            if ("boolean" == typeof t) return t;
            if ("number" == typeof t) return t;
            if (t) return t;
            if (n)
              try {
                return JSON.parse(n);
              } catch (e) {
                return `ERROR: ${e.message}`;
              }
            return null;
          })(e),
          y = ((e) =>
            null === e
              ? r.NULL
              : null == e || Array.isArray(e) || "object" != typeof e
              ? Array.isArray(e)
                ? r.ARRAY
                : "string" == typeof e
                ? r.STRING
                : "number" == typeof e
                ? r.NUMBER
                : "boolean" == typeof e
                ? r.BOOLEAN
                : r.UNDEFINED
              : r.OBJECT)(v),
          h = ((e, t) => {
            switch (t) {
              case r.BOOLEAN:
                return `${e}`;
              case r.NULL:
                return "null";
              case r.ARRAY:
                return `Array[${e.length}]`;
              case r.OBJECT: {
                const t = e;
                return Object.keys(t).length ? "Object" : "Object (empty)";
              }
              case r.UNDEFINED:
                return "undefined";
              default:
                return e;
            }
          })(v, y),
          _ = u ? `${u}` : `${s}`,
          E = ["data__type", `data__type--${y}`, `data__type--${m}`].join(" "),
          O =
            y === r.ARRAY || y === r.OBJECT
              ? ["data__list-handle", `data__list-handle--${m}`].join(" ")
              : "data__no-list",
          g = ["data__list-items", `data__list-items--${m}`].join(" "),
          j = Object(o.useMemo)(
            () =>
              o.createElement(
                i.Provider,
                {
                  value: {
                    expandedTreeState: t ? a.OPENED : a.CLOSED,
                    maxDepth: n,
                  },
                },
                y === r.OBJECT || y === r.ARRAY
                  ? o.createElement("div", { className: g }, c(v, y, 1, _))
                  : null
              ),
            [_, v, g, y, n, t]
          ),
          N = Object(o.useMemo)(
            () =>
              y === r.OBJECT || y === r.ARRAY
                ? o.createElement(
                    "div",
                    { className: g },
                    0 !== f && l > f
                      ? o.createElement("div", null, "...")
                      : c(v, y, l, _)
                  )
                : null,
            [_, l, v, g, y, f]
          );
        return o.createElement(
          "div",
          { className: E },
          o.createElement(
            "span",
            {
              className: O,
              onClick: (e) => {
                e.preventDefault();
                const t = m === a.OPENED ? a.CLOSED : a.OPENED;
                b(t);
              },
            },
            o.createElement(
              "span",
              {
                className: (() => {
                  const e = ["data__value"];
                  return (
                    y !== r.OBJECT &&
                      y !== r.ARRAY &&
                      e.push("data__value--primitive", `data__value--${y}`),
                    y === r.ARRAY && e.push("data__value--array"),
                    y === r.OBJECT && e.push("data__value--object"),
                    e.join(" ")
                  );
                })(),
              },
              h
            )
          ),
          void 0 === l
            ? o.createElement(o.Fragment, null, j)
            : o.createElement(o.Fragment, null, N)
        );
      };
    (l.defaultProps = {
      dataObject: null,
      dataString: void 0,
      objectKey: "DATA",
      expanded: void 0,
      depth: 0,
      currentDepth: void 0,
      dataKey: void 0,
    }),
      (t.default = l);
  },
  function (e, t, n) {
    var r = n(3),
      a = n(4);
    "string" == typeof (a = a.__esModule ? a.default : a) &&
      (a = [[e.i, a, ""]]);
    var o = { insert: "head", singleton: !1 };
    r(a, o);
    e.exports = a.locals || {};
  },
  function (e, t, n) {
    var r,
      a = function () {
        return (
          void 0 === r &&
            (r = Boolean(window && document && document.all && !window.atob)),
          r
        );
      },
      o = (function () {
        var e = {};
        return function (t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            e[t] = n;
          }
          return e[t];
        };
      })(),
      i = [];
    function c(e) {
      for (var t = -1, n = 0; n < i.length; n++)
        if (i[n].identifier === e) {
          t = n;
          break;
        }
      return t;
    }
    function l(e, t) {
      for (var n = {}, r = [], a = 0; a < e.length; a++) {
        var o = e[a],
          l = t.base ? o[0] + t.base : o[0],
          u = n[l] || 0,
          s = "".concat(l, " ").concat(u);
        n[l] = u + 1;
        var d = c(s),
          f = { css: o[1], media: o[2], sourceMap: o[3] };
        -1 !== d
          ? (i[d].references++, i[d].updater(f))
          : i.push({ identifier: s, updater: v(f, t), references: 1 }),
          r.push(s);
      }
      return r;
    }
    function u(e) {
      var t = document.createElement("style"),
        r = e.attributes || {};
      if (void 0 === r.nonce) {
        var a = n.nc;
        a && (r.nonce = a);
      }
      if (
        (Object.keys(r).forEach(function (e) {
          t.setAttribute(e, r[e]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(t);
      else {
        var i = o(e.insert || "head");
        if (!i)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        i.appendChild(t);
      }
      return t;
    }
    var s,
      d =
        ((s = []),
        function (e, t) {
          return (s[e] = t), s.filter(Boolean).join("\n");
        });
    function f(e, t, n, r) {
      var a = n
        ? ""
        : r.media
        ? "@media ".concat(r.media, " {").concat(r.css, "}")
        : r.css;
      if (e.styleSheet) e.styleSheet.cssText = d(t, a);
      else {
        var o = document.createTextNode(a),
          i = e.childNodes;
        i[t] && e.removeChild(i[t]),
          i.length ? e.insertBefore(o, i[t]) : e.appendChild(o);
      }
    }
    function p(e, t, n) {
      var r = n.css,
        a = n.media,
        o = n.sourceMap;
      if (
        (a ? e.setAttribute("media", a) : e.removeAttribute("media"),
        o &&
          "undefined" != typeof btoa &&
          (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = r;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(r));
      }
    }
    var m = null,
      b = 0;
    function v(e, t) {
      var n, r, a;
      if (t.singleton) {
        var o = b++;
        (n = m || (m = u(t))),
          (r = f.bind(null, n, o, !1)),
          (a = f.bind(null, n, o, !0));
      } else
        (n = u(t)),
          (r = p.bind(null, n, t)),
          (a = function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(n);
          });
      return (
        r(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            r((e = t));
          } else a();
        }
      );
    }
    e.exports = function (e, t) {
      (t = t || {}).singleton ||
        "boolean" == typeof t.singleton ||
        (t.singleton = a());
      var n = l((e = e || []), t);
      return function (e) {
        if (
          ((e = e || []),
          "[object Array]" === Object.prototype.toString.call(e))
        ) {
          for (var r = 0; r < n.length; r++) {
            var a = c(n[r]);
            i[a].references--;
          }
          for (var o = l(e, t), u = 0; u < n.length; u++) {
            var s = c(n[u]);
            0 === i[s].references && (i[s].updater(), i.splice(s, 1));
          }
          n = o;
        }
      };
    };
  },
  function (e, t, n) {
    (e.exports = n(5)(!1)).push([
      e.i,
      ".data__type {\r\n  position: relative;\r\n  font-family: courier;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  line-height: 1.125;\r\n  white-space: pre;\r\n}\r\n.data__type--opened:before {\r\n  content: '';\r\n  position: absolute;\r\n  height: calc(100% - 1em);\r\n  top: 1em;\r\n  left: calc(.25em / 2);\r\n  border-left: 1px dotted #ccc;\r\n}\r\n.data__key {\r\n  color: #d23a00;\r\n  display: inline-block;\r\n  padding-right: .5em;\r\n}\r\n.data__key:after {\r\n  content: ':';\r\n  color: #666;\r\n}\r\n.data__value--string {\r\n  color: #0b800b;\r\n}\r\n.data__value--string:before,\r\n.data__value--string:after {\r\n  content: '\"';\r\n  color: #666;\r\n}\r\n.data__value--number {\r\n  color: royalblue;\r\n}\r\n.data__value--boolean {\r\n  color: #c524aa;\r\n}\r\n.data__value--null {\r\n  color: #ccc;\r\n}\r\n.data__value--object,\r\n.data__value--array {\r\n  color: #666;\r\n}\r\n.data__list-handle:before {\r\n  content: '';\r\n  height: 0;\r\n  border-style: solid;\r\n  border-width: .25em .45em;\r\n  border-color: transparent transparent transparent #666;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n.data__list-handle--opened:before {\r\n  transform: rotate(90deg) translate3d(.25em, .25em, 0);\r\n}\r\n.data__list-handle:hover {\r\n  cursor: pointer;\r\n}\r\n.data__list-items {\r\n  margin-left: 1.5em;\r\n  display: none;\r\n}\r\n.data__list-items--opened {\r\n  display: block;\r\n}\r\n",
      "",
    ]);
  },
  function (e, t, n) {
    e.exports = function (e) {
      var t = [];
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var n = (function (e, t) {
              var n = e[1] || "",
                r = e[3];
              if (!r) return n;
              if (t && "function" == typeof btoa) {
                var a =
                    ((i = r),
                    (c = btoa(unescape(encodeURIComponent(JSON.stringify(i))))),
                    (l =
                      "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                        c
                      )),
                    "/*# ".concat(l, " */")),
                  o = r.sources.map(function (e) {
                    return "/*# sourceURL="
                      .concat(r.sourceRoot)
                      .concat(e, " */");
                  });
                return [n].concat(o).concat([a]).join("\n");
              }
              var i, c, l;
              return [n].join("\n");
            })(t, e);
            return t[2] ? "@media ".concat(t[2], "{").concat(n, "}") : n;
          }).join("");
        }),
        (t.i = function (e, n) {
          "string" == typeof e && (e = [[null, e, ""]]);
          for (var r = {}, a = 0; a < this.length; a++) {
            var o = this[a][0];
            null != o && (r[o] = !0);
          }
          for (var i = 0; i < e.length; i++) {
            var c = e[i];
            (null != c[0] && r[c[0]]) ||
              (n && !c[2]
                ? (c[2] = n)
                : n && (c[2] = "(".concat(c[2], ") and (").concat(n, ")")),
              t.push(c));
          }
        }),
        t
      );
    };
  },
]);
