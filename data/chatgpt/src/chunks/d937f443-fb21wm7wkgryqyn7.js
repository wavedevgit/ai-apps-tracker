import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $U as n,
    eW as r,
    nW as i,
    tW as a
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Vn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    n as s,
    t as c
} from "./d335a33e-o14cfyaeymryvgpo.js";
var l, u, d = e((() => {
        l = t(o()), s(), u = function(e) {
            var t = l.useRef(e);
            return c(function() {
                t.current = e
            }), t
        }
    })),
    f, p, m, h = e((() => {
        f = t(o()), p = function(e, t) {
            if (typeof e == `function`) {
                e(t);
                return
            }
            e.current = t
        }, m = function(e, t) {
            var n = (0, f.useRef)();
            return (0, f.useCallback)(function(r) {
                e.current = r, n.current && p(n.current, null), n.current = t, t && p(t, r)
            }, [t])
        }
    }));

function g(e, t, n, r) {
    n === void 0 && (n = 1), r === void 0 && (r = 1 / 0), x || (x = document.createElement(`textarea`), x.setAttribute(`tabindex`, `-1`), x.setAttribute(`aria-hidden`, `true`), b(x)), x.parentNode === null && document.body.appendChild(x);
    var i = e.paddingSize,
        a = e.borderSize,
        o = e.sizingStyle,
        s = o.boxSizing;
    Object.keys(o).forEach(function(e) {
        var t = e;
        x.style[t] = o[t]
    }), b(x), x.value = t;
    var c = S(x, e);
    x.value = t, c = S(x, e), x.value = `x`;
    var l = x.scrollHeight - i,
        u = l * n;
    s === `border-box` && (u = u + i + a), c = Math.max(u, c);
    var d = l * r;
    return s === `border-box` && (d = d + i + a), c = Math.min(d, c), [c, l]
}

function _(e, t, n) {
    var r = u(n);
    v.useLayoutEffect(function() {
        var n = function(e) {
            return r.current(e)
        };
        if (e) return e.addEventListener(t, n),
            function() {
                return e.removeEventListener(t, n)
            }
    }, [])
}
var v, y, b, x, S, C, w, T, E, D, O, k, A, j, M = e((() => {
    i(), r(), v = t(o()), d(), h(), y = {
        "min-height": `0`,
        "max-height": `none`,
        height: `0`,
        visibility: `hidden`,
        overflow: `hidden`,
        position: `absolute`,
        "z-index": `-1000`,
        top: `0`,
        right: `0`
    }, b = function(e) {
        Object.keys(y).forEach(function(t) {
            e.style.setProperty(t, y[t], `important`)
        })
    }, x = null, S = function(e, t) {
        var n = e.scrollHeight;
        return t.sizingStyle.boxSizing === `border-box` ? n + t.borderSize : n - t.paddingSize
    }, C = function() {}, w = function(e, t) {
        return e.reduce(function(e, n) {
            return e[n] = t[n], e
        }, {})
    }, T = [`borderBottomWidth`, `borderLeftWidth`, `borderRightWidth`, `borderTopWidth`, `boxSizing`, `fontFamily`, `fontSize`, `fontStyle`, `fontWeight`, `letterSpacing`, `lineHeight`, `paddingBottom`, `paddingLeft`, `paddingRight`, `paddingTop`, `tabSize`, `textIndent`, `textRendering`, `textTransform`, `width`, `wordBreak`], E = !!document.documentElement.currentStyle, D = function(e) {
        var t = window.getComputedStyle(e);
        if (t === null) return null;
        var n = w(T, t),
            r = n.boxSizing;
        return r === `` ? null : (E && r === `border-box` && (n.width = parseFloat(n.width) + parseFloat(n.borderRightWidth) + parseFloat(n.borderLeftWidth) + parseFloat(n.paddingRight) + parseFloat(n.paddingLeft) + `px`), {
            sizingStyle: n,
            paddingSize: parseFloat(n.paddingBottom) + parseFloat(n.paddingTop),
            borderSize: parseFloat(n.borderBottomWidth) + parseFloat(n.borderTopWidth)
        })
    }, O = function(e) {
        _(window, `resize`, e)
    }, k = function(e) {
        _(document.fonts, `loadingdone`, e)
    }, A = [`cacheMeasurements`, `maxRows`, `minRows`, `onChange`, `onHeightChange`], j = v.forwardRef(function(e, t) {
        var r = e.cacheMeasurements,
            i = e.maxRows,
            o = e.minRows,
            s = e.onChange,
            c = s === void 0 ? C : s,
            l = e.onHeightChange,
            u = l === void 0 ? C : l,
            d = n(e, A),
            f = d.value !== void 0,
            p = v.useRef(null),
            h = m(p, t),
            _ = v.useRef(0),
            y = v.useRef(),
            b = function() {
                var e = p.current,
                    t = r && y.current ? y.current : D(e);
                if (t) {
                    y.current = t;
                    var n = g(t, e.value || e.placeholder || `x`, o, i),
                        a = n[0],
                        s = n[1];
                    _.current !== a && (_.current = a, e.style.setProperty(`height`, a + `px`, `important`), u(a, {
                        rowHeight: s
                    }))
                }
            };
        return v.useLayoutEffect(b), O(b), k(b), v.createElement(`textarea`, a({}, d, {
            onChange: function(e) {
                f || b(), c(e)
            },
            ref: h
        }))
    })
}));
export {
    M as n, j as t
};
//# sourceMappingURL=d937f443-fb21wm7wkgryqyn7.js.map