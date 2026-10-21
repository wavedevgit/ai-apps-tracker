import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bw as r,
    Cw as i,
    Mz as a,
    Tw as o,
    jz as s,
    zw as c
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as l,
    Nn as u,
    Rn as d,
    Vn as f,
    zn as p
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    fyn as m,
    pyn as h
} from "./conversation-small-ikg0dwuw782klweb.js";

function g(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
    }
    return n
}

function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] == null ? {} : arguments[t];
        t % 2 ? _(Object(n), !0).forEach((function(t) {
            g(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
    }
    return e
}

function y(e, t) {
    if (e == null) return {};
    var n, r, i = function(e, t) {
        if (e == null) return {};
        var n, r, i = {},
            a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
}

function b(e, t) {
    return function(e) {
        if (Array.isArray(e)) return e
    }(e) || function(e, t) {
        if (!(typeof Symbol > `u` || !(Symbol.iterator in Object(e)))) {
            var n = [],
                r = !0,
                i = !1,
                a = void 0;
            try {
                for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
            } catch (e) {
                i = !0, a = e
            } finally {
                try {
                    r || s.return == null || s.return()
                } finally {
                    if (i) throw a
                }
            }
            return n
        }
    }(e, t) || function(e, t) {
        if (e) {
            if (typeof e == `string`) return x(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (n === `Object` && e.constructor && (n = e.constructor.name), n === `Map` || n === `Set`) return Array.from(e);
            if (n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return x(e, t)
        }
    }(e, t) || function() {
        throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }()
}

function x(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r
}
var S, C, w, T, E, D, O, k, A = e((() => {
        S = n(f()), C = {}, w = function(e) {
            var t = document.querySelector(`script[src="${e}"]`);
            if (t) return C[e] = {
                loading: !1,
                error: null,
                scriptEl: t
            }
        }, T = typeof window < `u` && window.document !== void 0, E = `https://cdn.merge.dev/initialize.js`, D = {
            "https://api.merge.dev": E,
            "https://api-oai-usw2.openaimerge.com": `https://cdn.openaimerge.com/initialize.js`,
            "https://api-develop.merge.dev": `https://develop-cdn.merge.dev/initialize.js`
        }, O = function(e) {
            return e?.linkToken !== void 0
        }, k = function(e) {
            var t, n = e.shouldSendTokenOnSuccessfulLink,
                r = n === void 0 || n,
                i = y(e, [`shouldSendTokenOnSuccessfulLink`]),
                a = b(function(e) {
                    var t = e.src,
                        n = e.checkForExisting,
                        r = n !== void 0 && n,
                        i = y(e, [`src`, `checkForExisting`]),
                        a = t ? C[t] : void 0;
                    !a && r && t && T && (a = w(t));
                    var o = b((0, S.useState)(a ? a.loading : !!t), 2),
                        s = o[0],
                        c = o[1],
                        l = b((0, S.useState)(a ? a.error : null), 2),
                        u = l[0],
                        d = l[1],
                        f = b((0, S.useState)(!1), 2),
                        p = f[0],
                        m = f[1];
                    return (0, S.useEffect)((function() {
                        if (T && t && !p && !u) {
                            var e;
                            !(a = C[t]) && r && (a = w(t)), a ? e = a.scriptEl : ((e = document.createElement(`script`)).src = t, Object.keys(i).forEach((function(t) {
                                e[t] === void 0 ? e.setAttribute(t, i[t]) : e[t] = i[t]
                            })), a = C[t] = {
                                loading: !0,
                                error: null,
                                scriptEl: e
                            });
                            var n = function() {
                                    a && (a.loading = !1), c(!1), m(!0)
                                },
                                o = function(e) {
                                    a && (a.error = e), d(e)
                                };
                            return e.addEventListener(`load`, n), e.addEventListener(`error`, o), document.body.appendChild(e),
                                function() {
                                    e.removeEventListener(`load`, n), e.removeEventListener(`error`, o), a && a.loading && (e.remove(), delete C[t])
                                }
                        }
                    }), [t]), [s, u]
                }({
                    src: (i == null || (t = i.tenantConfig) == null ? void 0 : t.apiBaseURL) != null && D[i.tenantConfig.apiBaseURL] || E,
                    checkForExisting: !0
                }), 2),
                o = a[0],
                s = a[1],
                c = b((0, S.useState)(!1), 2),
                l = c[0],
                u = c[1],
                d = !(typeof window > `u`) && !!window.MergeLink && !o && !s && O(i);
            return (0, S.useEffect)((function() {
                d && window.MergeLink && O(i) && window.MergeLink.initialize(v(v({}, i), {}, {
                    shouldSendTokenOnSuccessfulLink: r,
                    onReady: function() {
                        return u(!0)
                    }
                }))
            }), [d, i]), {
                open: (0, S.useCallback)((function() {
                    window.MergeLink && window.MergeLink.openLink(i)
                }), [i]),
                isReady: l,
                error: s
            }
        }
    })),
    j = t({
        LimitItemsFilePickerModal: () => M
    });

function M({
    connectionId: e,
    isOpen: t,
    onClose: n
}) {
    "use no forget";
    let r = p(),
        a = (0, N.useCallback)((e, t) => {
            n(!0)
        }, [n]),
        [o, l] = (0, N.useState)(),
        [d, f] = (0, N.useState)(!1),
        [h, g] = (0, N.useState)(!1),
        [_, v] = (0, N.useState)();
    (0, N.useEffect)(() => {
        (async () => {
            f(!0);
            try {
                let t = await m.user_get_file_picker_token(e);
                l(t.token), v(t.base_url)
            } catch {
                g(!0)
            } finally {
                f(!1)
            }
        })()
    }, [e]);
    let {
        open: y,
        isReady: b
    } = k({
        linkToken: o,
        onSuccess: a,
        onExit: () => n(!1),
        tenantConfig: {
            apiBaseURL: _ ?? F
        }
    }), x = b && !d && !h;
    return (0, N.useEffect)(() => {
        x && y()
    }, [x, y]), (0, P.jsx)(i, {
        testId: `modal-connection-limit-items-file-picker`,
        isOpen: t && !x,
        onClose: () => n(!1),
        type: `success`,
        size: `normal`,
        showCloseButton: !0,
        title: r.formatMessage({
            id: `qkRTw3`,
            defaultMessage: `Limit items`
        }),
        description: (0, P.jsx)(c, {
            children: r.formatMessage({
                id: `fQm2Wm`,
                defaultMessage: `Loading`
            })
        }),
        children: (0, P.jsx)(`div`, {
            className: `flex w-full items-center justify-center p-12`,
            children: h ? (0, P.jsx)(`div`, {
                className: `interactive-label-warning-secondary`,
                children: (0, P.jsx)(u, {
                    id: `3BZzpX`,
                    defaultMessage: `Something went wrong`
                })
            }) : (0, P.jsx)(s, {})
        })
    })
}
var N, P, F, I = e((() => {
    h(), o(), a(), A(), r(), N = n(f()), d(), P = l(), F = `https://api-oai-usw2.openaimerge.com`
}));
export {
    I as n, j as r, M as t
};
//# sourceMappingURL=5e9a123c-ce83nfo804deyjjj.js.map