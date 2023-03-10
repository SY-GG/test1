/*
 MIT
 @namespace TraceKit
*/
(function (m, D) {
  function K(u) {
    return "undefined" === typeof u;
  }
  if (m) {
    var n = {},
      O = m.TraceKit,
      H = [].slice,
      L = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
    n.noConflict = function () {
      m.TraceKit = O;
      return n;
    };
    n.wrap = function (u) {
      return function () {
        try {
          return u.apply(this, arguments);
        } catch (v) {
          throw (n.report(v), v);
        }
      };
    };
    n.report = (function () {
      function u(g, a, b) {
        var c = null;
        if (!a || n.collectWindowErrors) {
          for (var d in z)
            if (Object.prototype.hasOwnProperty.call(z, d))
              try {
                z[d](g, a, b);
              } catch (f) {
                c = f;
              }
          if (c) throw c;
        }
      }
      function v(g, a, b, c, d) {
        if (F) n.computeStackTrace.augmentStackTraceWithInitialElement(F, a, b, g), A();
        else if (d) {
          var f = n.computeStackTrace(d);
          u(f, !0, d);
        } else {
          f = { url: a, line: b, column: c };
          var q = g;
          if ("[object String]" === {}.toString.call(g)) {
            var p = g.match(L);
            if (p) {
              var k = p[1];
              q = p[2];
            }
          }
          f.func = n.computeStackTrace.guessFunctionName(f.url, f.line);
          f.context = n.computeStackTrace.gatherContext(f.url, f.line);
          f = { name: k, message: q, mode: "onerror", stack: [f] };
          u(f, !0, null);
        }
        return E ? E.apply(this, arguments) : !1;
      }
      function B(g) {
        var a = n.computeStackTrace(g.reason);
        u(a, !0, g.reason);
      }
      function A() {
        var g = F,
          a = C;
        C = F = null;
        u(g, !1, a);
      }
      function y(g) {
        if (F) {
          if (C === g) return;
          A();
        }
        var a = n.computeStackTrace(g);
        F = a;
        C = g;
        setTimeout(
          function () {
            C === g && A();
          },
          a.incomplete ? 2e3 : 0
        );
        throw g;
      }
      var z = [],
        C = null,
        F = null,
        E,
        G,
        I,
        e;
      y.subscribe = function (g) {
        !0 !== G && ((E = m.onerror), (m.onerror = v), (G = !0));
        !0 !== e && ((I = m.onunhandledrejection), (m.onunhandledrejection = B), (e = !0));
        z.push(g);
      };
      y.unsubscribe = function (g) {
        for (var a = z.length - 1; 0 <= a; --a) z[a] === g && z.splice(a, 1);
        0 === z.length && (G && ((m.onerror = E), (G = !1)), e && ((m.onunhandledrejection = I), (e = !1)));
      };
      return y;
    })();
    n.computeStackTrace = (function () {
      function u(a) {
        if ("string" !== typeof a) return [];
        if (!Object.prototype.hasOwnProperty.call(g, a)) {
          var b = "",
            c = "";
          try {
            c = m.document.domain;
          } catch (q) {}
          var d = /(.*):\/\/([^:\/]+)([:\d]*)\/{0,1}([\s\S]*)/.exec(a);
          if (d && d[2] === c)
            if (n.remoteFetching)
              try {
                try {
                  var f = new m.XMLHttpRequest();
                } catch (q) {
                  f = new m.ActiveXObject("Microsoft.XMLHTTP");
                }
                f.open("GET", a, !1);
                f.send("");
                b = f.responseText;
              } catch (q) {
                b = "";
              }
            else b = "";
          g[a] = b ? b.split("\n") : [];
        }
        return g[a];
      }
      function v(a, b) {
        var c = /function ([^(]*)\(([^)]*)\)/,
          d = /['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,
          f = "";
        a = u(a);
        var q;
        if (!a.length) return "?";
        for (var p = 0; 10 > p; ++p) if (((f = a[b - p] + f), !K(f) && ((q = d.exec(f)) || (q = c.exec(f))))) return q[1];
        return "?";
      }
      function B(a, b) {
        a = u(a);
        if (!a.length) return null;
        var c = [],
          d = Math.floor(n.linesOfContext / 2),
          f = Math.min(a.length, b + (d + (n.linesOfContext % 2)) - 1);
        for (b = Math.max(0, b - d - 1); b < f; ++b) K(a[b]) || c.push(a[b]);
        return 0 < c.length ? c : null;
      }
      function A(a) {
        return a.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, "\\$&");
      }
      function y(a) {
        return A(a)
          .replace("<", "(?:<|&lt;)")
          .replace(">", "(?:>|&gt;)")
          .replace("&", "(?:&|&amp;)")
          .replace('"', '(?:"|&quot;)')
          .replace(/\s+/g, "\\s+");
      }
      function z(a, b) {
        for (var c, d, f = 0, q = b.length; f < q; ++f)
          if ((c = u(b[f])).length && ((c = c.join("\n")), (d = a.exec(c))))
            return { url: b[f], line: c.substring(0, d.index).split("\n").length, column: d.index - c.lastIndexOf("\n", d.index) - 1 };
        return null;
      }
      function C(a, b, c) {
        b = u(b);
        a = new RegExp("\\b" + A(a) + "\\b");
        var d;
        --c;
        return b && b.length > c && (d = a.exec(b[c])) ? d.index : null;
      }
      function F(a) {
        if (!K(m && m.document)) {
          var b = [m.location.href],
            c = m.document.getElementsByTagName("script");
          a = "" + a;
          var d;
          for (d = 0; d < c.length; ++d) {
            var f = c[d];
            f.src && b.push(f.src);
          }
          (c = /^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/.exec(a))
            ? ((d = c[1] ? "\\s+" + c[1] : ""),
              (f = c[2].split(",").join("\\s*,\\s*")),
              (c = A(c[3]).replace(/;$/, ";?")),
              (d = new RegExp("function" + d + "\\s*\\(\\s*" + f + "\\s*\\)\\s*{\\s*" + c + "\\s*}")))
            : (d = new RegExp(A(a).replace(/\s+/g, "\\s+")));
          if ((d = z(d, b))) return d;
          if ((c = /^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/.exec(a))) {
            a = c[1];
            c = y(c[2]);
            d = new RegExp("on" + a + "=[\\'\"]\\s*" + c + "\\s*[\\'\"]", "i");
            if ((d = z(d, b[0]))) return d;
            d = new RegExp(c);
            if ((d = z(d, b))) return d;
          }
          return null;
        }
      }
      function E(a) {
        if (!a.stack) return null;
        for (
          var b =
              /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
            c =
              /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
            d = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
            f,
            q = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
            p = /\((\S*)(?::(\d+))(?::(\d+))\)/,
            k = a.stack.split("\n"),
            r = [],
            l,
            h,
            x = /^(.*) is undefined$/.exec(a.message),
            w = 0,
            t = k.length;
          w < t;
          ++w
        ) {
          if ((h = b.exec(k[w]))) {
            var M = h[2] && 0 === h[2].indexOf("native");
            (f = h[2] && 0 === h[2].indexOf("eval")) && (l = p.exec(h[2])) && ((h[2] = l[1]), (h[3] = l[2]), (h[4] = l[3]));
            f = { url: M ? null : h[2], func: h[1] || "?", args: M ? [h[2]] : [], line: h[3] ? +h[3] : null, column: h[4] ? +h[4] : null };
          } else if ((h = d.exec(k[w]))) f = { url: h[2], func: h[1] || "?", args: [], line: +h[3], column: h[4] ? +h[4] : null };
          else if ((h = c.exec(k[w])))
            (f = h[3] && -1 < h[3].indexOf(" > eval")) && (l = q.exec(h[3]))
              ? ((h[3] = l[1]), (h[4] = l[2]), (h[5] = null))
              : 0 !== w || h[5] || K(a.columnNumber) || (r[0].column = a.columnNumber + 1),
              (f = {
                url: h[3],
                func: h[1] || "?",
                args: h[2] ? h[2].split(",") : [],
                line: h[4] ? +h[4] : null,
                column: h[5] ? +h[5] : null,
              });
          else continue;
          !f.func && f.line && (f.func = v(f.url, f.line));
          f.context = f.line ? B(f.url, f.line) : null;
          r.push(f);
        }
        if (!r.length) return null;
        r[0] && r[0].line && !r[0].column && x && (r[0].column = C(x[1], r[0].url, r[0].line));
        return { mode: "stack", name: a.name, message: a.message, stack: r };
      }
      function G(a, b, c, d) {
        b = { url: b, line: c };
        if (b.url && b.line) {
          a.incomplete = !1;
          b.func || (b.func = v(b.url, b.line));
          b.context || (b.context = B(b.url, b.line));
          if ((d = / '([^']+)' /.exec(d))) b.column = C(d[1], b.url, b.line);
          if (0 < a.stack.length && a.stack[0].url === b.url) {
            if (a.stack[0].line === b.line) return !1;
            if (!a.stack[0].line && a.stack[0].func === b.func) return (a.stack[0].line = b.line), (a.stack[0].context = b.context), !1;
          }
          a.stack.unshift(b);
          return (a.partial = !0);
        }
        a.incomplete = !0;
        return !1;
      }
      function I(a, b) {
        for (
          var c = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, d = [], f = {}, q = !1, p, k, r, l = I.caller;
          l && !q;
          l = l.caller
        )
          if (l !== e && l !== n.report) {
            k = { url: null, func: "?", args: [], line: null, column: null };
            if (l.name) k.func = l.name;
            else if ((p = c.exec(l.toString()))) k.func = p[1];
            if ("undefined" === typeof k.func)
              try {
                k.func = p.input.substring(0, p.input.indexOf("{"));
              } catch (x) {}
            if ((r = F(l))) {
              k.url = r.url;
              k.line = r.line;
              "?" === k.func && (k.func = v(k.url, k.line));
              var h = / '([^']+)' /.exec(a.message || a.description);
              h && (k.column = C(h[1], r.url, r.line));
            }
            f["" + l] ? (q = !0) : (f["" + l] = !0);
            d.push(k);
          }
        b && d.splice(0, b);
        b = { mode: "callers", name: a.name, message: a.message, stack: d };
        G(b, a.sourceURL || a.fileName, a.line || a.lineNumber, a.message || a.description);
        return b;
      }
      function e(a, b) {
        var c = null;
        b = null == b ? 0 : +b;
        try {
          var d = a.stacktrace;
          if (d) {
            var f = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
              q = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i,
              p = d.split("\n");
            d = [];
            for (var k, r = 0; r < p.length; r += 2) {
              var l = null;
              if ((k = f.exec(p[r]))) l = { url: k[2], line: +k[1], column: null, func: k[3], args: [] };
              else if ((k = q.exec(p[r])))
                l = { url: k[6], line: +k[1], column: +k[2], func: k[3] || k[4], args: k[5] ? k[5].split(",") : [] };
              if (l) {
                !l.func && l.line && (l.func = v(l.url, l.line));
                if (l.line)
                  try {
                    l.context = B(l.url, l.line);
                  } catch (P) {}
                l.context || (l.context = [p[r + 1]]);
                d.push(l);
              }
            }
            c = d.length ? { mode: "stacktrace", name: a.name, message: a.message, stack: d } : null;
          } else c = void 0;
          if (c) return c;
        } catch (P) {}
        try {
          if ((c = E(a))) return c;
        } catch (P) {}
        try {
          var h = a.message.split("\n");
          if (4 > h.length) c = null;
          else {
            f = /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i;
            q = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i;
            p = /^\s*Line (\d+) of function script\s*$/i;
            k = [];
            var x = m && m.document && m.document.getElementsByTagName("script");
            d = [];
            var w;
            for (t in x) Object.prototype.hasOwnProperty.call(x, t) && !x[t].src && d.push(x[t]);
            for (x = 2; x < h.length; x += 2) {
              var t = null;
              if ((w = f.exec(h[x]))) t = { url: w[2], func: w[3], args: [], line: +w[1], column: null };
              else if ((w = q.exec(h[x]))) {
                t = { url: w[3], func: w[4], args: [], line: +w[1], column: null };
                var M = +w[1],
                  Q = d[w[2] - 1];
                if (Q) {
                  var J = u(t.url);
                  if (J) {
                    J = J.join("\n");
                    var R = J.indexOf(Q.innerText);
                    0 <= R && (t.line = M + J.substring(0, R).split("\n").length);
                  }
                }
              } else if ((w = p.exec(h[x]))) {
                var S = m.location.href.replace(/#.*$/, ""),
                  U = new RegExp(y(h[x + 1])),
                  T = z(U, [S]);
                t = { url: S, func: "", args: [], line: T ? T.line : w[1], column: null };
              }
              if (t) {
                t.func || (t.func = v(t.url, t.line));
                var N = B(t.url, t.line),
                  V = N ? N[Math.floor(N.length / 2)] : null;
                N && V.replace(/^\s*/, "") === h[x + 1].replace(/^\s*/, "") ? (t.context = N) : (t.context = [h[x + 1]]);
                k.push(t);
              }
            }
            c = k.length ? { mode: "multiline", name: a.name, message: h[0], stack: k } : null;
          }
          if (c) return c;
        } catch (P) {}
        try {
          if ((c = I(a, b + 1))) return c;
        } catch (P) {}
        return { name: a.name, message: a.message, mode: "failed" };
      }
      var g = {};
      e.augmentStackTraceWithInitialElement = G;
      e.computeStackTraceFromStackProp = E;
      e.guessFunctionName = v;
      e.gatherContext = B;
      e.ofCaller = function (a) {
        try {
          throw Error();
        } catch (b) {
          return e(b, (null == a ? 0 : +a) + 2);
        }
      };
      e.getSource = u;
      return e;
    })();
    n.extendToAsynchronousCallbacks = function () {
      var u = function (v) {
        var B = m[v];
        m[v] = function () {
          var A = H.call(arguments),
            y = A[0];
          "function" === typeof y && (A[0] = n.wrap(y));
          return B.apply ? B.apply(this, A) : B(A[0], A[1]);
        };
      };
      u("setTimeout");
      u("setInterval");
    };
    n.remoteFetching || (n.remoteFetching = !0);
    n.collectWindowErrors || (n.collectWindowErrors = !0);
    if (!n.linesOfContext || 1 > n.linesOfContext) n.linesOfContext = 11;
    "function" === typeof define && define.amd
      ? define("TraceKit", [], n)
      : "undefined" !== typeof module && module.exports && m.module !== module
      ? (module.exports = n)
      : (m.TraceKit = n);
  }
})("undefined" !== typeof window ? window : global);
var EC_JET = (function () {
  var m = TraceKit.noConflict();
  m.remoteFetching = !1;
  var D = {
      path: "/api/v1/store",
      token: null,
      collectWindowErrors: !0,
      preventDuplicateReport: !0,
      storageKeyPrefix: "EC_JET.MAIN",
      timeout: 500,
      ignoreErrors: [],
      ignoreUrls: [],
    },
    K,
    n,
    O = !1,
    H = !1,
    L = !1,
    u = [],
    v = {},
    B = {
      data: [],
      size: function () {
        return this.data.length;
      },
      enqueue: function (e) {
        this.data.push(e);
      },
      dequeue: function () {
        return this.data.shift();
      },
    },
    A = function (e) {
      var g = { token: y("token"), source_origin: encodeURIComponent(window.location.origin) };
      return (K =
        e +
        y("path") +
        "?" +
        Object.keys(g)
          .map(function (a) {
            return "".concat(a, "=").concat(g[a]);
          })
          .join("&"));
    },
    y = function (e) {
      return !0 === D.hasOwnProperty(e) ? D[e] : null;
    },
    z = function (e) {
      for (var g = [], a = e.length, b, c = 0; c < a; c++)
        (b = e[c]), "string" === typeof b ? g.push(b.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : b && b.source && g.push(b.source);
      return new RegExp(g.join("|"), "i");
    },
    C = function (e, g, a, b) {
      try {
        if (5 <= u.length) (H = !1), (L = !0), m.report.unsubscribe(C);
        else if (!0 !== L) {
          a: {
            if (e) {
              if (e.hasOwnProperty("message") && y("ignoreErrors").test && y("ignoreErrors").test(e.message)) {
                var c = !0;
                break a;
              }
              if ("stack" in e && 0 < e.stack.length) {
                var d = e.stack[0];
                if (d.hasOwnProperty("url") && y("ignoreUrls").test && y("ignoreUrls").test(d.url)) {
                  c = !0;
                  break a;
                }
              }
            }
            c = !1;
          }
          var f;
          if ((f = !0 !== c)) {
            var q;
            (q = !0 !== g) ||
              (q =
                !0 !==
                (0 === Object.keys(v).length || !1 === v.hasOwnProperty("error") || !1 === v.hasOwnProperty("time")
                  ? !1
                  : 500 > Date.now() - v.time && v.error.message === e.message
                  ? !0
                  : !1));
            f = q;
          }
          if (f) {
            var p;
            if ((p = !0 === g && !0 === y("preventDuplicateReport"))) {
              var k = JSON.stringify(e),
                r = y("storageKeyPrefix") + ".";
              a = 5381;
              for (var l = k.length; l; ) a = (33 * a) ^ k.charCodeAt(--l);
              var h = r + (a >>> 0);
              if (null != sessionStorage.getItem(h) && sessionStorage.getItem(h).trim() === k.trim()) var x = !0;
              else sessionStorage.setItem(h, k), (x = !1);
              p = !0 === x;
            }
            if (!p) {
              v = { error: e, time: Date.now() };
              var w = decodeURIComponent(window.location.href);
              var t = window.navigator.languages
                ? window.navigator.languages[0]
                : window.navigator.userLanguage || window.navigator.language;
              var M = {
                  locale: t,
                  datetime: new Date().toISOString(),
                  user_agent: window.navigator.userAgent,
                  screen_width: window.screen.width,
                  screen_height: window.screen.height,
                },
                Q = Date.now() - n;
              p = {};
              window.$ && window.$.fn && (p.jquery_version = $.fn.jquery);
              var J = {
                url: w,
                report: e,
                is_window_error: g,
                device: M,
                runtime: Q,
                extra_data: p,
                referer: document.referrer,
                is_login: !!document.cookie.match(/(?:^| |;)iscache=F/),
                label: b,
              };
              "complete" === document.readyState ? G(J) : B.enqueue(J);
            }
          }
        }
      } catch (R) {
        throw R;
      }
    },
    F = function () {
      if ("complete" === document.readyState && !0 !== L)
        for (var e = B.size(), g = 0; g < e; g++)
          setTimeout(function () {
            G(B.dequeue());
          }, 100 * g);
    },
    E = function (e, g, a) {
      u.push({ type: e, url: g, payload: a });
    },
    G = function (e) {
      if (!0 !== L) {
        var g = JSON.stringify(e),
          a = K,
          b = new XMLHttpRequest();
        "withCredentials" in b
          ? (b.open("POST", a, !0),
            (b.timeout = y("timeout", 500)),
            (b.onreadystatechange = function () {
              if (b.readyState === XMLHttpRequest.DONE) {
                var c = b.status;
                -1 !== [429, 500].indexOf(c) ? (E("xhr", a, g), (H = !1), (L = !0), m.report.unsubscribe(C)) : 200 !== c && E("xhr", a, g);
              }
            }),
            b.send(g))
          : ((e = new Image()),
            (e.src = a + "&payload=" + encodeURIComponent(g)),
            (e.onerror = function () {
              E("beacon", a, g);
            }));
      }
    },
    I = function (e) {
      if ("object" !== typeof e) return !1;
      switch ({}.toString.call(e)) {
        case "[object Error]":
          return !0;
        case "[object Exception]":
          return !0;
        case "[object DOMException]":
          return !0;
        default:
          return e instanceof Error;
      }
    };
  return {
    init: function (e, g) {
      if ("string" !== typeof e || "object" !== typeof g) throw new TypeError("Invalid Type Error.");
      if (!0 !== O) {
        window.location.origin ||
          (window.location.origin =
            window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : ""));
        n = Date.now();
        g = g || {};
        for (var a in D) !0 === g.hasOwnProperty(a) && (D[a] = g[a]);
        D.ignoreErrors.length && (D.ignoreErrors = z(D.ignoreErrors));
        D.ignoreUrls.push(/^chrome-extension/, /^moz-extension/);
        D.ignoreUrls.length && (D.ignoreUrls = z(D.ignoreUrls));
        m.collectWindowErrors = !!D.collectWindowErrors;
        A(e);
        if (!0 !== H)
          try {
            (document.onreadystatechange = F), m.report.subscribe(C), (H = !0);
          } catch (b) {
            throw b;
          }
        O = !0;
      }
    },
    wrap: function (e) {
      if (!1 !== H && "function" === typeof e) return m.wrap(e);
    },
    report: function (e) {
      !1 !== H && !1 !== I(e) && m.report(e);
    },
    message: function (e, g) {
      if (!1 !== H && e) {
        if (I(e)) var a = m.computeStackTrace(e);
        else (a = m.computeStackTrace.ofCaller()), (a.message = "string" === typeof e ? e : JSON.stringify(e));
        C(a, !1, null, g);
      }
    },
  };
})();
